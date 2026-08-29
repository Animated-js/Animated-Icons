import { AnimatedOrgLink, GithubRepoLink, XLink } from "@/lib/Links";
import Link from "next/link";
import { GithubIcon } from "./icons/Github";
import { ThemeToggle } from "./ui/theme";
import { XIcon } from "./icons/X";


const NavigationItems = [
    { label: "Docs", url: "" },
    { label: "Icons", url: "" },
    { label: "AI", url: "" },
    { label: "Contact us", url: "" }
]

export function Header() {

    return <header className="fixed z-10 mt-4 w-full min-h-17 flex items-center justify-between px-4 md:px-6 lg:px-20 bg-yellow-300">

        <Link href={AnimatedOrgLink} className="text-foreground">

            <h1 className="tracking-widest text-black text-2xl px-2 rounded-xs font-medium">
                Animated
            </h1>
        </Link>

        <div className="hidden md:flex gap-8">
            {
                NavigationItems.map((items) => {
                    return <Link href={items.url} key={items.label}
                        className="text-black uppercase text-xs font-medium tracking-wide font-mono">
                        {items.label}
                    </Link>
                })
            }
        </div>

        <div className="flex items-center gap-1 md:gap-2 text-black">
            <Link href={GithubRepoLink} className="bg-canvas-paper rounded-xs">
                <GithubIcon size={19} className="px-2.5 py-1.5 text-black" />
            </Link>
            |
            <Link href={XLink} className="">
                <XIcon size={19} className="px-2.5 py-1.5 text-black" />
            </Link>
            |
            <ThemeToggle />
        </div>

    </header >
}