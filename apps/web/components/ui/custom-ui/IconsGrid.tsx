"use client"
import { IconHandle, IconsRegistry } from "@repo/icons";
import { CopyButton } from "../animate-ui/components/buttons/copy";
import { Download } from "lucide-react";
import { useRef } from "react";
import { DownloadFileFunction } from "@/lib/utils";


export function IconsGrid() {

    return <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">

        {IconsRegistry.map((Data, idx) => {
            return <IconCard key={idx} Data={Data} />
        })}
    </div>
}


function IconCard({ Data }: {
    Data: {
        Icon: any;
        code: string;
        name: string;
    }
}) {

    const animateRef = useRef<IconHandle>(null);

    return <div className="hover:shadow border border-ash/70 rounded-xs flex flex-col gap-3 text-center"
        onMouseEnter={() => {
            console.log("entered")
            animateRef.current?.startAnimation()
        }}>

        <div className="w-full flex flex-col gap-2">
            <span className="w-full px-4 py-8 rounded-none flex justify-center bg-zinc-100 dark:text-black">
                <Data.Icon size={30} className="" ref={animateRef} />
            </span>
            <span className="">
                {Data.name}
            </span>
        </div>
        <span className=" border-t flex justify-between w-full items-center px-3.5 py-2">
            <span className="border p-1.5">
                <Download size={16}
                    onClick={() => {
                        DownloadFileFunction(Data.code, Data.name);
                    }} />
            </span>
            <CopyButton className="rounded-none p-1.5 dark:bg-white bg-black text-white dark:text-black" size={"xs"} content={Data.code} title="Copy" />
        </span>
    </div>
}