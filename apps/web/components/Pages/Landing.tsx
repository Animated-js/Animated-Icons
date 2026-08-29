import { Button } from "@/components/ui/button";
import { SearchIcon } from "../icons/Search";
import { BotMessageSquareIcon } from "../icons/Chatbot";
import { ReactIcon } from "../icons/React";
import { TypeScriptIcon } from "../icons/Typescript";
import { TailwindIcon } from "../icons/Tailwind";
import { FramerMotionIcon } from "../icons/FramerMotion";


const WeWorkInData = [
    { Icon: ReactIcon, name: "React" },
    { Icon: TypeScriptIcon, name: "TypeScript" },
    { Icon: TailwindIcon, name: "TailwindCSS" },
    { Icon: FramerMotionIcon, name: "Motion" },
]

export function Landing() {
    return <div className=" min-h-screen flex flex-col justify-center items-center bg-black text-white">

        {/* Hero section */}
        <section className="flex justify-between flex-col pt-24 gap-4 bg-yellow-300 w-full h-screen" >

            <div className="w-fit min-w-[48%] flex flex-col gap-7 ml-24 py-15 px-10 bg-canvas-light dark:bg-canvas text-background">

                <div className="flex justify-between text-black dark:text-white items-center font-mono">
                    <h3>
                        Open source / MIT License
                    </h3>
                    <h3>
                        v1.1.0
                    </h3>
                </div>
                <h1 className="text-5xl  md:text-8xl lg:text-8xl text-black dark:text-white tracking-normal">
                    Animated
                    <br />Icons
                </h1>

                <div className="flex  flex-col gap-15">
                    <div className="gap-8 flex items-center pl-4" >
                        <Button variant={"noClass"} className="uppercase text-xs bg-yellow-300 text-black px-3 py-5 rounded-none">
                            Explore Icons
                            <SearchIcon />
                        </Button>
                        <Button variant={"noClass"} className="uppercase text-xs px-3 py-5 rounded-none text-black dark:text-white border border-ash/50">
                            <BotMessageSquareIcon />
                            Prompt to Icon
                        </Button>
                    </div>

                    <div className="gap-4 flex flex-col" >
                        <div className="font-mono text-xs uppercase text-black dark:text-white tracking-widest">
                            <span className="text-yellow-300">
                                {'> '}
                            </span>
                            We work in:
                        </div>
                        <div className="flex gap-5">
                            {
                                WeWorkInData.map((data) => {
                                    return <span key={data.name} className="flex text-white dark:hover:text-white hover:bg-ash/20 gap-2 uppercase text-xs tracking-widest dark:bg-canvas-paper dark:hover:bg-gray-950  dark:text-black hover:text-black bg-black transition duration-200 items-center border border-ash/50 py-2 px-3">
                                        <data.Icon size={18} /> {data.name}
                                    </span>
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>

            <div className="uppercase tracking-wider text-xs font-medium text-black flex border-black border items-center justify-between px-4 md:px-6 lg:px-20   lg:py-3">
                {WeWorkInData.map((data) => {
                    return <span>
                        {data.name}
                    </span>
                })}
            </div>
        </section >


        <section className="py-20">
            hi
        </section>


    </div >
}