import { Button } from "@/components/ui/button";
import { SearchIcon } from "../icons/Search";
import { BotMessageSquareIcon } from "../icons/Chatbot";
import { ReactIcon } from "../icons/React";
import { TypeScriptIcon } from "../icons/Typescript";
import { TailwindIcon } from "../icons/Tailwind";
import { FramerMotionIcon } from "../icons/FramerMotion";
import Link from "next/link";
import { BentoGrid } from "../ui/custom-ui/BentoGrid";
import { Metrics } from "../ui/custom-ui/Metrics";
import { CommunityHub } from "../ui/custom-ui/CommunityHub";
import { div } from "motion/react-client";

const WeWorkInData = [
    { Icon: ReactIcon, name: "React" },
    { Icon: TypeScriptIcon, name: "TypeScript" },
    { Icon: TailwindIcon, name: "TailwindCSS" },
    { Icon: FramerMotionIcon, name: "Motion" },
]

export function Landing() {
    return <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black text-black dark:text-white pt-28 md:pt-8 lg:pt-22 transition-colors duration-300">

        {/* Hero section */}
        <section className="flex justify-between flex-col gap-8 dark:bg-black bg-white w-full min-h-screen md:min-h-auto">

            <div className="flex flex-col gap-13 w-full md:w-fit md:ml-8 lg:ml-24 py-15 px-10 bg-neutral-950 dark:bg-neutral-900 text-white border border-neutral-800 dark:border-neutral-700 shadow-2xl">

                <div className="flex justify-between items-center font-mono text-neutral-400 text-xs uppercase tracking-widest">
                    <h3>
                        Open source / MIT License
                    </h3>
                    <h3>
                        v1.1.0
                    </h3>
                </div>

                <div className="flex flex-col gap-6">

                    <h1 className="text-7xl md:text-8xl lg:text-8xl tracking-normal text-white">
                        Animated
                        <br />Icons
                    </h1>

                    <div className="gap-4 md:gap-8 flex flex-col md:flex-row pl-4">
                        <Link href={'/icons'}
                            className="uppercase text-xs bg-yellow-300 text-black font-mono px-4 py-3 rounded-none flex gap-2 items-center hover:bg-yellow-400 transition-colors">
                            Explore Icons
                            <SearchIcon size={17} />
                        </Link>
                        <Button variant={"noClass"} className="h-full uppercase text-xs font-mono px-4 py-3 rounded-none text-white border border-neutral-700 hover:border-neutral-500 bg-neutral-800 hover:bg-neutral-700 transition-colors flex gap-2 items-center">
                            <BotMessageSquareIcon size={17} />
                            Prompt to Icon
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col">

                    <div className="gap-4 flex flex-col">
                        <div className="font-mono text-xs uppercase text-neutral-400 tracking-widest">
                            <span className="text-yellow-300 font-bold">
                                {'> '}
                            </span>
                            We work in:
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {
                                WeWorkInData.map((data) => {
                                    return <span key={data.name} className="flex w-fit text-white gap-2 uppercase font-mono text-xs tracking-widest bg-neutral-800/80 items-center border border-neutral-700 py-2 px-3 hover:border-yellow-300 transition-colors">
                                        <data.Icon size={18} /> {data.name}
                                    </span>
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>

            <div className="uppercase tracking-wider text-xs font-mono text-neutral-600 dark:text-neutral-400 flex border-y border-neutral-200 dark:border-neutral-800 items-center justify-between px-4 md:px-6 lg:px-20 py-2 lg:py-3">
                {WeWorkInData.map((data) => {
                    return <span key={data.name}>
                        {data.name}
                    </span>
                })}
            </div>
        </section>

        <BentoGrid />
        <Metrics />
        <CommunityHub />

    </div >
}