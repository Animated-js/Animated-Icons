"use client";

import React, { useState } from "react";
import { Activity, Gauge, Terminal, CheckCircle2, Zap, Layers, RefreshCw } from "lucide-react";

export function Metrics() {
    const [activeTab, setActiveTab] = useState<"fps" | "bundle" | "types">("fps");

    return (
        <section className="w-full py-16 px-4 md:px-6 lg:px-20 bg-white dark:bg-black border-t border-ash/30 transition-colors duration-300">
            <div className="flex flex-col gap-3 mb-12 border-y py-5">
                <div className="flex items-center justify-between flex-wrap gap-2 text-xs uppercase font-mono tracking-widest text-black dark:text-white">
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-400 font-bold">
                            {"> "}
                        </span>
                        <span>
                            Performance Benchmarks
                        </span>
                    </div>
                    <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 px-3 py-1 text-[11px]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-neutral-600 dark:text-neutral-300">
                            60-120 FPS VERIFIED
                        </span>
                    </div>
                </div>
                <div className="flex flex-col justify-between gap-4">
                    <h2 className="uppercase text-4xl md:text-5xl lg:text-6xl font-mono tracking-tight text-black dark:text-white">
                        Engineered for speed
                        <br />
                        and zero runtime overhead
                    </h2>
                    <p className="text-sm font-mono tracking-wider text-neutral-500 dark:text-neutral-400 md:max-w-1/2">
                        Benchmarked for instant micro-interactions, hardware-accelerated vector transforms, and zero layout shifts.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                <div className="lg:col-span-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-200 hover:border-black dark:hover:border-neutral-600 relative overflow-hidden group">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                        <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                                [01 / CORE ENGINE]
                            </span>
                            <h3 className="text-xl md:text-2xl font-mono text-black dark:text-white flex items-center gap-2">
                                <Activity size={20} className="text-black dark:text-white" />
                                Hardware-Accelerated Rendering
                            </h3>
                        </div>

                        <div className="flex border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-black p-0.5">
                            {(["fps", "bundle", "types"] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-3 py-1 text-xs font-mono uppercase transition-all ${activeTab === tab
                                        ? "bg-yellow-300 text-black font-bold"
                                        : "text-neutral-500 hover:text-black dark:hover:text-white"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex flex-col gap-6">
                        <div className="flex items-baseline justify-between flex-wrap gap-4">
                            <div>
                                <span className="text-5xl md:text-6xl font-mono font-bold tracking-tight text-black dark:text-white">
                                    {activeTab === "fps" && "0 ms"}
                                    {activeTab === "bundle" && "< 1.8 KB"}
                                    {activeTab === "types" && "100%"}
                                </span>
                                <span className="block text-xs font-mono uppercase text-neutral-400 mt-1 tracking-wider">
                                    {activeTab === "fps" && "Layout Shift & Render Latency"}
                                    {activeTab === "bundle" && "Average Gzipped Component Size"}
                                    {activeTab === "types" && "Strict TypeScript Type Coverage"}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 text-xs font-mono bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 px-3 py-1.5 text-black dark:text-white">
                                <Zap size={14} className="text-black dark:text-white" />
                                <span>
                                    {activeTab === "fps" && "GPU Compositing Active"}
                                    {activeTab === "bundle" && "Copy & Download Ready"}
                                    {activeTab === "types" && "Imperative Handle API"}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 font-mono text-xs">
                            <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                                <span>
                                    GPU PIPELINE UTILIZATION
                                </span>
                                <span>
                                    99.8% OPTIMIZED
                                </span>
                            </div>
                            <div className="w-full h-3 bg-neutral-200 dark:bg-neutral-800 p-0.5 overflow-hidden">
                                <div className="h-full bg-yellow-400 w-[96%] transition-all duration-500" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 font-mono text-xs">
                        <div className="border border-neutral-200 dark:border-neutral-800 p-3 bg-white dark:bg-black flex flex-col gap-1">
                            <span className="text-neutral-400 text-[10px] uppercase">
                                FRAME RATE
                            </span>
                            <span className="text-black dark:text-white font-bold">
                                120Hz ProMotion
                            </span>
                        </div>
                        <div className="border border-neutral-200 dark:border-neutral-800 p-3 bg-white dark:bg-black flex flex-col gap-1">
                            <span className="text-neutral-400 text-[10px] uppercase">
                                DEPENDENCIES
                            </span>
                            <span className="text-black dark:text-white font-bold">
                                Motion & React
                            </span>
                        </div>
                        <div className="border border-neutral-200 dark:border-neutral-800 p-3 bg-white dark:bg-black col-span-2 md:col-span-1 flex flex-col gap-1">
                            <span className="text-neutral-400 text-[10px] uppercase">
                                VECTOR QUALITY
                            </span>
                            <span className="text-black dark:text-white font-bold">
                                Sub-Pixel Crisp
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-200 hover:border-black dark:hover:border-neutral-600">
                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                            [02 / ACCESS]
                        </span>
                        <h3 className="text-xl font-mono text-black dark:text-white flex items-center gap-2">
                            <Gauge size={20} className="text-black dark:text-white" />
                            Copy & Download
                        </h3>
                    </div>

                    <div className="bg-black text-white p-4 font-mono text-xs border border-neutral-800 flex flex-col gap-3">
                        <div className="flex justify-between items-center pb-2 border-b border-neutral-800 text-[11px] text-neutral-400">
                            <span>
                                WORKFLOW
                            </span>
                            <span>
                                ACTION
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-neutral-300">
                            <span>
                                1-Click Copy TSX
                            </span>
                            <span className="text-yellow-300 font-bold">
                                Instant Code
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-neutral-300">
                            <span>
                                Direct Download
                            </span>
                            <span className="text-yellow-300 font-bold">
                                .tsx File
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-neutral-300">
                            <span>
                                Zero Package Config
                            </span>
                            <span className="text-yellow-300 font-bold">
                                Ready to Use
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-neutral-300">
                            <span>
                                Lucide & Motion
                            </span>
                            <span className="text-yellow-300 font-bold">
                                Built-in
                            </span>
                        </div>
                    </div>

                    <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        Copy JSX code snippets or download component files directly into your project. No extra package setup required.
                    </div>
                </div>

                <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-200 hover:border-black dark:hover:border-neutral-600">
                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                            [03 / TYPE SYSTEM]
                        </span>
                        <h3 className="text-xl font-mono text-black dark:text-white flex items-center gap-2">
                            <Terminal size={20} className="text-black dark:text-white" />
                            TypeScript First
                        </h3>
                    </div>

                    <div className="p-4 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 font-mono text-xs flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-black dark:text-white font-bold">
                            <CheckCircle2 size={16} className="text-emerald-400" />
                            <span>
                                Imperative Handle Ref
                            </span>
                        </div>
                        <div className="bg-neutral-100 dark:bg-neutral-900 p-2.5 text-[11px] text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800">
                            <code>
                                ref.current?.startAnimation()
                            </code>
                        </div>
                        <div className="text-neutral-500 dark:text-neutral-400 text-[11px] leading-relaxed">
                            Full auto-complete for ref handles, triggers, size props, and SVG accessibility attributes.
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono uppercase text-neutral-400">
                        <span>
                            STRICT MODE COMPATIBLE
                        </span>
                        <span className="text-black dark:text-white font-bold">
                            100% COVERAGE
                        </span>
                    </div>
                </div>

                <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-200 hover:border-black dark:hover:border-neutral-600">
                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                            [04 / INTERACTION]
                        </span>
                        <h3 className="text-xl font-mono text-black dark:text-white flex items-center gap-2">
                            <RefreshCw size={20} className="text-black dark:text-white" />
                            Reactive Triggers
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                        <div className="p-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex flex-col gap-1">
                            <span className="font-bold text-black dark:text-white">
                                Hover State
                            </span>
                            <span className="text-[10px] text-neutral-400">
                                Auto-revert on leave
                            </span>
                        </div>
                        <div className="p-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex flex-col gap-1">
                            <span className="font-bold text-black dark:text-white">
                                Click State
                            </span>
                            <span className="text-[10px] text-neutral-400">
                                One-shot execution
                            </span>
                        </div>
                        <div className="p-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex flex-col gap-1">
                            <span className="font-bold text-black dark:text-white">
                                Loop State
                            </span>
                            <span className="text-[10px] text-neutral-400">
                                Continuous pulse
                            </span>
                        </div>
                        <div className="p-3 bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 flex flex-col gap-1">
                            <span className="font-bold text-black dark:text-white">
                                Programmatic
                            </span>
                            <span className="text-[10px] text-neutral-400">
                                Event driven
                            </span>
                        </div>
                    </div>

                    <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                        Flexible interaction drivers tailor-made for buttons, cards, navigation items, and dashboards.
                    </div>
                </div>

                <div className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 p-6 md:p-8 flex flex-col justify-between gap-6 transition-all duration-200 hover:border-black dark:hover:border-neutral-600">
                    <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400 block mb-1">
                            [05 / COMPATIBILITY]
                        </span>
                        <h3 className="text-xl font-mono text-black dark:text-white flex items-center gap-2">
                            <Layers size={20} className="text-black dark:text-white" />
                            Modern Stack Interop
                        </h3>
                    </div>

                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                        {["Next.js 15+", "React 19", "Vite", "Tailwind v4", "Turbopack", "Motion v12"].map((tech) => (
                            <span
                                key={tech}
                                className="px-2.5 py-1 bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 text-black dark:text-white font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                        Copy JSX components or drop downloaded component files straight into your codebase.
                    </div>
                </div>
            </div>
        </section>
    );
}
