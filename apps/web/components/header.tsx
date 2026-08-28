import { AnimatedOrgLink, GithubRepoLink } from "@/lib/Links";
import Link from "next/link";
import { GithubIcon } from "./icons/Github";
import { ThemeToggle } from "./ui/theme";


export function Header() {

    return <header className="fixed z-10 border-b border-zinc-700 w-full min-h-17 flex items-center justify-between px-4 md:px-6 lg:px-10">

        <Link href={AnimatedOrgLink} className="text-foreground">

            <h1 className="tracking-widest border border-b-3 border-r-3  border-hairline-soft dark:border-hairline text-2xl px-2 rounded-xs font-medium">
                Animated
            </h1>
        </Link>

        <div className="flex items-center gap-3">
            <Link href={GithubRepoLink} className="bg-canvas-paper rounded-xs">
                <GithubIcon size={19} className="px-2.5 py-1.5 text-black" />
            </Link>
            |
            <ThemeToggle />
        </div>

    </header >
}