"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { SunIcon } from "../icons/Sun"
import { useEffect, useState } from "react";
import { MoonIcon } from "../icons/Moon";


export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    const [isMounted, setIsMounted] = useState(false);

    //prevent hydration error
    useEffect(() => {
        setIsMounted(true);
    }, [])


    if (!isMounted) {
        return <Button className={"bg-canvas-paper border-white"}>
            <SunIcon size={18} />
        </Button >
    }

    else return <Button className={"dark:bg-canvas-paper border-white"}
        onClick={() =>
            theme === 'light' ? setTheme("dark") : setTheme('light')
        }>
        {
            theme === "light" ? <MoonIcon size={18} /> : <SunIcon size={18} />
        }
    </Button>
}
