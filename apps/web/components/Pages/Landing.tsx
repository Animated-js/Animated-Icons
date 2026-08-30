import { Button } from "@/components/ui/button";
import { SearchIcon } from "../icons/Search";
import { BotMessageSquareIcon } from "../icons/Chatbot";
import { ReactIcon } from "../icons/React";
import { TypeScriptIcon } from "../icons/Typescript";
import { TailwindIcon } from "../icons/Tailwind";
import { FramerMotionIcon } from "../icons/FramerMotion";
import { SearchComponent } from "../ui/custom-ui/SearchComp";
import { IconsGrid } from "../ui/custom-ui/IconsGrid";


const WeWorkInData = [
    { Icon: ReactIcon, name: "React" },
    { Icon: TypeScriptIcon, name: "TypeScript" },
    { Icon: TailwindIcon, name: "TailwindCSS" },
    { Icon: FramerMotionIcon, name: "Motion" },
]

export function Landing() {
    return <div className=" min-h-screen flex flex-col justify-center items-center bg-black dark:bg-white">

        {/* Hero section */}
        <section className="flex justify-between flex-col pt-28 md:10 lg:pt-22 gap-8 dark:bg-white bg-black w-full min-h-screen md:min-h-auto" >

            <div className="flex flex-col gap-15 w-full md:w-fit md:ml-8 lg:ml-24 py-15 px-10 bg-white dark:bg-black">

                <div className="flex justify-between text-black dark:text-white items-center font-mono">
                    <h3>
                        Open source / MIT License
                    </h3>
                    <h3>
                        v1.1.0
                    </h3>
                </div>


                <div className="flex flex-col gap-6">

                    <h1 className="text-7xl  md:text-8xl lg:text-8xl text-black dark:text-white tracking-normal">
                        Animated
                        <br />Icons
                    </h1>

                    <div className="gap-4 md:gap-8 flex flex-col md:flex-row pl-4" >
                        <Button variant={"noClass"} className="uppercase text-xs bg-yellow-300 text-black px-3 py-5 rounded-none">
                            Explore Icons
                            <SearchIcon />
                        </Button>
                        <Button variant={"noClass"} className="uppercase text-xs px-3 py-5 rounded-none text-black dark:text-white border border-ash/50">
                            <BotMessageSquareIcon />
                            Prompt to Icon
                        </Button>
                    </div>
                </div>

                <div className="flex flex-col ">

                    <div className="gap-4 flex flex-col" >
                        <div className="font-mono text-xs uppercase text-black dark:text-white tracking-widest">
                            <span className="text-yellow-300">
                                {'> '}
                            </span>
                            We work in:
                        </div>
                        <div className="flex flex-wrap gap-5">
                            {
                                WeWorkInData.map((data) => {
                                    return <span key={data.name} className="flex w-fit text-white dark:hover:text-white hover:bg-ash/20 gap-2 uppercase text-xs tracking-widest dark:bg-canvas-paper dark:hover:bg-gray-950  dark:text-black hover:text-black bg-black transition duration-200 items-center border border-ash/50 py-2 px-3">
                                        <data.Icon size={18} /> {data.name}
                                    </span>
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>

            <div className="uppercase tracking-wider text-xs font-medium text-white dark:text-black flex border-t items-center justify-between px-4 md:px-6 lg:px-20 py-2 lg:py-3">
                {WeWorkInData.map((data) => {
                    return <span key={data.name}>
                        {data.name}
                    </span>
                })}
            </div>
        </section >



        {/* Icons section */}
        <section className="w-full pt-3 bg-white dark:bg-black">

            <div className="w-full flex p-10 border-ash border-t flex-col items-center gap-8 ">

                <div className="w-full items-center-center md:items-start 
                md:pl-10 lg:pl-15">
                    <SearchComponent />
                </div>

                <div className="w-full p-5">
                    <IconsGrid />
                </div>
            </div>

        </section>


    </div >
}