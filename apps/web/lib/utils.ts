import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export function DownloadFileFunction(content: string, fileName: string) {
  // create blob-> create URL-> create and assign file name to download via an anchor tag-> trigger download -> release url

  const blob = new Blob([content], { type: "text/plain" });

  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;

  a.download = fileName + ".tsx";

  a.click();

  URL.revokeObjectURL(url);

}