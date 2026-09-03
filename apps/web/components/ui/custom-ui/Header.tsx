"use client"

import { GithubRepoLink, XLink } from "@/lib/Links";
import Link from "next/link";
import { GithubIcon } from "@/components/icons/Github";
import { XIcon } from "@/components/icons/X";
import { ThemeToggle } from "./theme";


const NavigationItems = [
    { label: "Docs", url: "" },
    { label: "Icons", url: "" },
    { label: "AI", url: "" },
    { label: "Contact us", url: "" }
]

export function Header() {


    return <header className="fixed z-10 md:mt-2 py-4 w-full min-h-17 flex items-center justify-between px-4 md:px-6 lg:px-20 border-b dark:bg-black bg-white">


        <Link href={'/'} onClick={() => {
            scroll({ top: 0, left: 0, behavior: "smooth" },)
        }}>
            <h1 className="tracking-widest text-black dark:text-white text-2xl px-2 rounded-xs font-medium cursor-pointer">
                Animated
            </h1>
        </Link>

        <nav className="hidden md:flex gap-8">
            {
                NavigationItems.map((items) => {
                    return <Link href={items.url} key={items.label}
                        className="text-black dark:text-white uppercase text-xs font-medium tracking-wide font-mono">
                        {items.label}
                    </Link>
                })
            }
        </nav>

        <div className="flex items-center gap-1 md:gap-2 text-black dark:text-white">
            <Link href={GithubRepoLink} className="bg-canvas-paper rounded-xs">
                <GithubIcon size={19} className="px-2.5 py-1.5 text-black" />
            </Link>
            |
            <Link href={XLink} className="">
                <XIcon size={19} className="px-2.5 py-1.5 text-black dark:text-white" />
            </Link>
            |
            <ThemeToggle />
        </div>

    </header >
}