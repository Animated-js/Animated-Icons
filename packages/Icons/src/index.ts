import { ChatbotIcon } from "./lib/Icons_store/Icons/Chatbot";
import { GithubIcon } from "./lib/Icons_store/Icons/Github";
import { MoonIcon } from "./lib/Icons_store/Icons/Moon";
import { SearchIcon } from "./lib/Icons_store/Icons/Search";
import { SunIcon } from "./lib/Icons_store/Icons/Sun";
import { XIcon } from "./lib/Icons_store/Icons/X";

import { Chatbot_String } from "./lib/Icons_store/Strings/Chatbot_String";
import { Github_String } from "./lib/Icons_store/Strings/Github_String";
import { Moon_String } from "./lib/Icons_store/Strings/Moon_String";
import { Search_String } from "./lib/Icons_store/Strings/Search_String";
import { Sun_String } from "./lib/Icons_store/Strings/Sun_String";
import { X_String } from "./lib/Icons_store/Strings/X_String";


export interface IconHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}


export const IconsRegistry = [
    { Icon: ChatbotIcon, code: Chatbot_String, name: "ChatbotIcon" },
    { Icon: GithubIcon, code: Github_String, name: "GithubIcon" },
    { Icon: MoonIcon, code: Moon_String, name: "MoonIcon" },
    { Icon: SearchIcon, code: Search_String, name: "SearchIcon" },
    { Icon: SunIcon, code: Sun_String, name: "SunIcon" },
    { Icon: XIcon, code: X_String, name: "XIcon" },
    { Icon: GithubIcon, code: Github_String, name: "GithubIcon" },
    { Icon: MoonIcon, code: Moon_String, name: "MoonIcon" },
    { Icon: SearchIcon, code: Search_String, name: "SearchIcon" },
    { Icon: SunIcon, code: Sun_String, name: "SunIcon" },
    { Icon: XIcon, code: X_String, name: "XIcon" },
    { Icon: GithubIcon, code: Github_String, name: "GithubIcon" },
    { Icon: MoonIcon, code: Moon_String, name: "MoonIcon" },
    { Icon: SearchIcon, code: Search_String, name: "SearchIcon" },
    { Icon: SunIcon, code: Sun_String, name: "SunIcon" },
    { Icon: XIcon, code: X_String, name: "XIcon" },
    { Icon: GithubIcon, code: Github_String, name: "GithubIcon" },
    { Icon: MoonIcon, code: Moon_String, name: "MoonIcon" },
    { Icon: SearchIcon, code: Search_String, name: "SearchIcon" },
    { Icon: SunIcon, code: Sun_String, name: "SunIcon" },
    { Icon: XIcon, code: X_String, name: "XIcon" },
];
