import fs from "node:fs";
import path from "node:path";
const iconsDir = path.join(__dirname, "../src/lib/Icons_store/Icons");
const stringsDir = path.join(__dirname, "../src/lib/Icons_store/Strings");
if (!fs.existsSync(stringsDir)) {
    fs.mkdirSync(stringsDir, { recursive: true });
}
// Clean up old string files if any
const existingFiles = fs.readdirSync(stringsDir);
for (const file of existingFiles) {
    fs.unlinkSync(path.join(stringsDir, file));
}
const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".tsx"));
const indexExports = [];
for (const file of files) {
    const iconName = file.replace(".tsx", "");
    const content = fs.readFileSync(path.join(iconsDir, file), "utf-8");
    const varName = `${iconName}_String`;
    const stringFilePath = path.join(stringsDir, `${varName}.ts`);
    // Escape backticks and template string interpolations
    const escapedContent = content.replace(/`/g, "\\`").replace(/\${/g, "\\${");
    const fileContent = `export const ${varName} = \`${escapedContent}\`;\n`;
    fs.writeFileSync(stringFilePath, fileContent, "utf-8");
    indexExports.push(`export { ${varName} } from "./${varName}";`);
}
fs.writeFileSync(path.join(stringsDir, "index.ts"), indexExports.join("\n") + "\n", "utf-8");
console.log("Successfully generated IconName_String files formatted with backticks!");
