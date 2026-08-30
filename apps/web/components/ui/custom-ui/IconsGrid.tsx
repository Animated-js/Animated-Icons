import { IconsStore } from "@repo/icons";


export function IconsGrid() {


    return <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {IconsStore.map((Icon) => {
            return <div className="border border-blue-300 flex flex-col items-center p-10">
                <Icon />
            </div>
        })}
    </div>
}