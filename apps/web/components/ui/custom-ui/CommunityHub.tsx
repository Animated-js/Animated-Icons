"use client";

import React from "react";
import { MessageSquarePlus, GitPullRequest, Mail, ArrowUpRight, Heart, Code2 } from "lucide-react";
import { GithubIcon } from "@repo/icons";

const communityCards = [
    {
        tag: "[01 / REPOSITORY]",
        title: "GitHub Repository",
        icon: GithubIcon,
        badge: "MIT LICENSE",
        desc: "Explore the open-source codebase, star the repository, and stay updated with v1.1.0 releases.",
        actionText: "View Source",
        actionUrl: "https://github.com",
    },
    {
        tag: "[02 / REQUESTS]",
        title: "Request Component",
        icon: MessageSquarePlus,
        badge: "COMMUNITY DRIVEN",
        desc: "Need a specific animated SVG icon for your design system? Submit an icon request issue on GitHub.",
        actionText: "Request Icon",
        actionUrl: "https://github.com",
    },
    {
        tag: "[03 / CONTRIBUTE]",
        title: "Contribute Motion",
        icon: GitPullRequest,
        badge: "OPEN PRs",
        desc: "Help build the next set of vector icons. Read our contribution guide and submit your Framer Motion primitives.",
        actionText: "Read Guidelines",
        actionUrl: "https://github.com",
    },
    {
        tag: "[04 / CONTACT & ORG]",
        title: "Maintainers & Support",
        icon: Mail,
        badge: "CORE TEAM",
        desc: "Maintained by the open-source team. Get in touch for custom design system integrations or enterprise support.",
        actionText: "Contact Maintainers",
        actionUrl: "mailto:support@animated.dev",
    },
];

export function CommunityHub() {
    return (
        <section className="w-full py-16 px-4 md:px-6 lg:px-20 bg-white dark:bg-black border-t border-ash/30 transition-colors duration-300">
            <div className="flex flex-col gap-3 mb-12 border-y py-5">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs uppercase font-mono tracking-widest text-black dark:text-white">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 font-bold">
                            {"> "}
                        </span>
                        <span>
                            Ecosystem & Community
                        </span>
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 px-3 py-1 text-[11px]">
                        <Heart size={12} className="text-red-500 fill-red-500" />
                        <span className="text-neutral-600 dark:text-neutral-300">
                            100% OPEN SOURCE
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-4">
                    <h2 className="uppercase text-4xl md:text-5xl lg:text-6xl font-mono tracking-tight text-black dark:text-white">
                        Built with the
                        <br />
                        developer community
                    </h2>
                    <p className="text-sm font-mono tracking-wider text-neutral-500 dark:text-neutral-400 md:max-w-1/2">
                        Star the repository, request new animated components, contribute code, or connect with our maintainers team.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                {communityCards.map((card) => {
                    const IconComponent = card.icon;
                    return (
                        <div
                            key={card.title}
                            className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-200 hover:border-black dark:hover:border-neutral-600 group relative"
                        >
                            <div className="flex justify-between items-start flex-wrap gap-2">
                                <div>
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                                        {card.tag}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-mono text-black dark:text-white flex items-center gap-2">
                                        <IconComponent size={20} className="text-black dark:text-white" />
                                        {card.title}
                                    </h3>
                                </div>
                                <span className="text-[10px] font-mono uppercase px-2.5 py-1 border bg-yellow-300/10 text-yellow-500 border-purple-500/20">
                                    {card.badge}
                                </span>
                            </div>

                            <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed">
                                {card.desc}
                            </p>

                            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
                                <a
                                    href={card.actionUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-mono uppercase px-4 py-2 bg-white dark:bg-black text-black dark:text-white border border-neutral-300 dark:border-neutral-700 hover:bg-yellow-300 hover:text-black hover:border-yellow-400 transition-all font-bold group/btn"
                                >
                                    <span>
                                        {card.actionText}
                                    </span>
                                    <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                </a>
                                <Code2 size={16} className="text-neutral-400 opacity-40" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
