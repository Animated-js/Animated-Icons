export const X_String = `"use client";

import { motion, useAnimation, type TargetAndTransition, type Variants } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useId, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";


export interface TwitterIconHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}

export interface TwitterIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}

const PATH_D =
    "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z";

const TL_VARIANTS: Variants = {
    normal: {
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 18,
        },
    } as TargetAndTransition,
    animate: {
        x: [0, -16, 0],
        y: [0, -9, 0],
        transition: {
            duration: 0.5,
            times: [0, 0.5, 1],
            ease: "easeOut",
        },
    } as TargetAndTransition,
};

const TR_VARIANTS: Variants = {
    normal: {
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 18,
        },
    } as TargetAndTransition,
    animate: {
        x: [0, 16, 0],
        y: [0, -11, 0],
        transition: {
            duration: 0.5,
            delay: 0.06,
            times: [0, 0.5, 1],
            ease: "easeOut",
        },
    } as TargetAndTransition,
};

const BL_VARIANTS: Variants = {
    normal: {
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 18,
        },
    } as TargetAndTransition,
    animate: {
        x: [0, -11, 0],
        y: [0, 16, 0],
        transition: {
            duration: 0.5,
            delay: 0.12,
            times: [0, 0.5, 1],
            ease: "easeOut",
        },
    } as TargetAndTransition,
};

const BR_VARIANTS: Variants = {
    normal: {
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 18,
        },
    } as TargetAndTransition,
    animate: {
        x: [0, 13, 0],
        y: [0, 12, 0],
        transition: {
            duration: 0.5,
            delay: 0.18,
            times: [0, 0.5, 1],
            ease: "easeOut",
        },
    } as TargetAndTransition,
};

const XIcon = forwardRef<TwitterIconHandle, TwitterIconProps>(
    ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
        const tlControls = useAnimation();
        const trControls = useAnimation();
        const blControls = useAnimation();
        const brControls = useAnimation();
        const isControlledRef = useRef(false);
        const rawId = useId().replace(/:/g, "");

        useImperativeHandle(ref, () => {
            isControlledRef.current = true;
            return {
                startAnimation: () => {
                    tlControls.start("animate");
                    trControls.start("animate");
                    blControls.start("animate");
                    brControls.start("animate");
                },
                stopAnimation: () => {
                    tlControls.start("normal");
                    trControls.start("normal");
                    blControls.start("normal");
                    brControls.start("normal");
                },
            };
        });

        const handleMouseEnter = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (isControlledRef.current) {
                    onMouseEnter?.(e);
                } else {
                    tlControls.start("animate");
                    trControls.start("animate");
                    blControls.start("animate");
                    brControls.start("animate");
                }
            },
            [tlControls, trControls, blControls, brControls, onMouseEnter]
        );

        const handleMouseLeave = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (isControlledRef.current) {
                    onMouseLeave?.(e);
                } else {
                    tlControls.start("normal");
                    trControls.start("normal");
                    blControls.start("normal");
                    brControls.start("normal");
                }
            },
            [tlControls, trControls, blControls, brControls, onMouseLeave]
        );

        return (
            <div
                className={cn(className)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            >

                <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    height={size}
                    viewBox="0 0 256 256"
                    width={size}
                    xmlns="http://www.w3.org/2000/svg"
                >

                    <defs>

                        <clipPath id={\`\${rawId}-tl\`}>

                            <rect x="0" y="0" width="128" height="128" />

                        </clipPath>

                        <clipPath id={\`\${rawId}-tr\`}>

                            <rect x="128" y="0" width="128" height="128" />

                        </clipPath>

                        <clipPath id={\`\${rawId}-bl\`}>

                            <rect x="0" y="128" width="128" height="128" />

                        </clipPath>

                        <clipPath id={\`\${rawId}-br\`}>

                            <rect x="128" y="128" width="128" height="128" />

                        </clipPath>

                    </defs>

                    {/* Top-left arm */}
                    <motion.g
                        animate={tlControls}
                        initial="normal"
                        variants={TL_VARIANTS}
                        clipPath={\`url(#\${rawId}-tl)\`}
                    >

                        <path d={PATH_D} />

                    </motion.g>

                    {/* Top-right arm */}
                    <motion.g
                        animate={trControls}
                        initial="normal"
                        variants={TR_VARIANTS}
                        clipPath={\`url(#\${rawId}-tr)\`}
                    >

                        <path d={PATH_D} />

                    </motion.g>

                    {/* Bottom-left arm */}
                    <motion.g
                        animate={blControls}
                        initial="normal"
                        variants={BL_VARIANTS}
                        clipPath={\`url(#\${rawId}-bl)\`}
                    >

                        <path d={PATH_D} />

                    </motion.g>

                    {/* Bottom-right arm */}
                    <motion.g
                        animate={brControls}
                        initial="normal"
                        variants={BR_VARIANTS}
                        clipPath={\`url(#\${rawId}-br)\`}
                    >

                        <path d={PATH_D} />

                    </motion.g>

                </svg>

            </div>
        );
    }
);

XIcon.displayName = "XIcon";

export { XIcon };`;
