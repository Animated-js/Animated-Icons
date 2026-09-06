"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChatbotIcon, IconHandle, IconsRegistry } from "@repo/icons";
import { SearchIcon } from "@repo/icons";
import { GithubIcon } from "@repo/icons";
import { XIcon } from "@repo/icons";
import { SunIcon } from "@repo/icons";
import { MoonIcon } from "@repo/icons";
import { CopyButton } from "../ui/animate-ui/components/buttons/copy";
import { Sliders, Code, Check, RefreshCw } from "lucide-react";

export function BentoGrid() {
    return (
        <section className="w-full py-16 px-4 md:px-6 lg:px-20 bg-white dark:bg-black border-t border-ash/30 transition-colors duration-300">

            <div className="flex flex-col gap-3 mb-12 border-y py-5">
                <div className="flex items-center gap-2 text-xs uppercase font-mono tracking-widest text-black dark:text-white">
                    <span className="text-yellow-400 font-bold">
                        {"> "}
                    </span>
                    <span>
                        Interactive Features
                    </span>
                </div>
                <div className="flex flex-col justify-between gap-4">
                    <h2 className="uppercase text-4xl md:text-5xl lg:text-6xl font-mono tracking-tight text-black dark:text-white">
                        Built for seamless
                        <br />
                        micro-interactions
                    </h2>
                    <p className="text-sm font-mono tracking-wider text-neutral-500 dark:text-neutral-400 md:max-w-1/2">
                        Explore the interactive capabilities, physics controls, framework integrations, and theme adaptability of the Animated Icons library.
                    </p>
                </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                <PlaygroundCard />

                <ThemeAdaptabilityCard />

                <MotionDynamicsCard />

                <IconSuiteGridCard />
            </div>
        </section>
    );
}


function PlaygroundCard() {
    const [activeTrigger, setActiveTrigger] = useState<"hover" | "click" | "loop">("hover");
    const [triggerCount, setTriggerCount] = useState(0);
    const iconRef = useRef<IconHandle>(null);

    useEffect(() => {
        let interval = null;

        if (activeTrigger === "loop") {
            interval = setInterval(() => {
                iconRef.current?.startAnimation();
                setTriggerCount((prev) => prev + 1);
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [activeTrigger]);

    const handleStageClick = () => {
        if (activeTrigger === "click") {
            iconRef.current?.startAnimation();
            setTriggerCount((prev) => prev + 1);
        }
    };

    const handleMouseEnter = () => {
        if (activeTrigger === "hover") {
            iconRef.current?.startAnimation();
            setTriggerCount((prev) => prev + 1);
        }
    };

    const handleMouseLeave = () => {
        if (activeTrigger === "hover") {
            iconRef.current?.stopAnimation();
        }
    };

    return (
        <div className="md:col-span-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-200 hover:border-black dark:hover:border-neutral-600 relative overflow-hidden group">

            <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

            <div className="flex justify-between items-start">
                <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                        [01 / INTERACTIVE STAGE]
                    </span>
                    <h3 className="text-xl md:text-2xl font-mono text-black dark:text-white">
                        Trigger Modes
                    </h3>
                </div>
                <div className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-2.5 py-1 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span>{activeTrigger.toUpperCase()} MODE</span>
                </div>
            </div>

            <div
                onClick={handleStageClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full py-12 md:py-16 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center relative cursor-pointer group/stage transition-all hover:shadow-lg"
            >
                <div className="relative">
                    <ChatbotIcon ref={iconRef} size={64} className="text-black dark:text-white transition-transform duration-200 group-hover/stage:scale-110" />
                </div>

                <span className="mt-4 text-xs font-mono uppercase tracking-widest text-neutral-400 group-hover/stage:text-black dark:group-hover/stage:text-white transition-colors">
                    {(
                        activeTrigger === "click"
                            ?
                            "Click stage to trigger"
                            : (
                                activeTrigger === "hover"
                                    ?
                                    "Hover stage to trigger"
                                    : `Auto-triggering (${activeTrigger})`
                            )
                    )}
                </span>

                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-2 py-0.5">
                    TRIGGERS: {triggerCount}
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-wrap gap-2">
                {(["hover", "click", "loop"] as const).map((mode) => (
                    <button
                        key={mode}
                        onClick={() => setActiveTrigger(mode)}
                        className={`text-xs font-mono uppercase px-3 py-1.5 transition-all duration-150 flex items-center gap-1.5 border ${activeTrigger === mode
                            ? "bg-yellow-300 text-black border-yellow-400 font-bold"
                            : "bg-white dark:bg-black text-black dark:text-white border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                            }`}
                    >
                        {mode === "loop" && <RefreshCw size={12} />}
                        {mode}
                    </button>
                ))}
            </div>
        </div>
    );
}


function ThemeAdaptabilityCard() {
    const [cardTheme, setCardTheme] = useState<"light" | "dark">("light");
    const sunRef = useRef<IconHandle>(null);
    const moonRef = useRef<IconHandle>(null);

    const handleThemeChange = (newTheme: "light" | "dark") => {
        setCardTheme(newTheme);
        if (newTheme === "light") {
            sunRef.current?.startAnimation();
        } else if (newTheme === "dark") {
            moonRef.current?.startAnimation();
        } else {
            sunRef.current?.startAnimation();
            moonRef.current?.startAnimation();
        }
    };

    const themeStyles = {
        light: "bg-white text-black border-neutral-300",
        dark: "bg-black text-white border-neutral-800",
    };

    return (
        <div
            className={`p-6 md:p-8 border flex flex-col justify-between gap-6 transition-colors duration-500 hover:border-black dark:hover:border-neutral-500 ${themeStyles[cardTheme]}`}
        >
            <div>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-60 block mb-1">
                    [02 / ADAPTABILITY]
                </span>
                <h3 className="text-xl font-mono">Theme Polarity</h3>
            </div>

            <div className="py-8 flex items-center justify-center gap-6 border border-current/20 bg-current/5">
                <div
                    onMouseEnter={() => sunRef.current?.startAnimation()}
                    className="p-3 border border-current/30 cursor-pointer hover:scale-110 transition-transform"
                >
                    <SunIcon ref={sunRef} size={30} />
                </div>
                <div
                    onMouseEnter={() => moonRef.current?.startAnimation()}
                    className="p-3 border border-current/30 cursor-pointer hover:scale-110 transition-transform"
                >
                    <MoonIcon ref={moonRef} size={30} />
                </div>
            </div>

            <div className="flex gap-2">
                {(["light", "dark"] as const).map((t) => (
                    <button
                        key={t}
                        onClick={() => handleThemeChange(t)}
                        className={`text-xs font-mono uppercase px-3 py-1 border transition-all 
                            ${cardTheme === t
                                ? "bg-black text-white dark:bg-white dark:text-black font-bold"
                                : "border-current/40 hover:bg-current/10"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>
        </div>
    );
}
function MotionDynamicsCard() {

    const searchRef = useRef<IconHandle>(null);

    const triggerMotion = () => {
        searchRef.current?.startAnimation();
    };

    return (
        <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 flex flex-col justify-start gap-6 transition-all duration-200 hover:border-black dark:hover:border-neutral-600">
            <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                    [03 / DYNAMICS]
                </span>
                <h3 className="text-xl font-mono text-black dark:text-white flex items-center gap-2">
                    <Sliders size={18} />
                    Spring & Physics
                </h3>
            </div>

            <div
                onMouseEnter={triggerMotion}
                onClick={triggerMotion}
                className="w-full py-8 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center cursor-pointer group"
            >
                <div className="transition-transform">
                    <SearchIcon ref={searchRef} size={44} className="text-black dark:text-white group-hover:scale-110" />
                </div>
                <span className="mt-3 text-[10px] font-mono uppercase text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    Hover/Click to preview dynamics
                </span>

            </div>

        </div>
    );
}

function IconSuiteGridCard() {

    const iconsSuite = IconsRegistry.slice(0, 6);


    return (
        <div className="md:col-span-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-200 hover:border-black dark:hover:border-neutral-600 relative">

            <div className="flex flex-col items-start">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                    [04 / ICON SUITE]
                </span>
                <div className="">
                    <h3 className="text-xl md:text-2xl font-mono text-black dark:text-white">
                        Production Ready Suite
                    </h3>
                    <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase">
                        Hover cell to animate • Click to copy
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 bg-zinc-200  dark:bg-accent-foreground  py-7 px-9 w-4/5">
                {iconsSuite.map((data) => (
                    <span key={data.name} className="border border-ash w-fit py-3 px-5 flex items-center">
                        <data.Icon size={30} />
                    </span>
                ))}
            </div>


        </div>
    );
}


