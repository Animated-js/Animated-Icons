"use client";
import type { Transition, Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { cn } from "@/lib/utils";

export interface GithubIconHandle {
    startAnimation: () => void;
    stopAnimation: () => void;
}

export interface GithubIconProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
    color?: string;
}

const TAIL_TRANSITION: Transition = {
    duration: 0.9,
    ease: "easeInOut" as const,
};

const EYE_TRANSITION: Transition = {
    duration: 0.9,
    ease: "easeInOut" as const,
};

// Pivot (98, 208) sits on the seam where the tail meets the body.
const TAIL_VARIANTS: Variants = {
    normal: { transform: "rotate(0deg)" },
    animate: {
        transform: [
            "rotate(0deg)",
            "rotate(-18deg)",
            "rotate(14deg)",
            "rotate(-10deg)",
            "rotate(6deg)",
            "rotate(0deg)",
        ],
    },
};

// scaleY closes the eye like an eyelid; two quick blinks during the wag.
const EYE_VARIANTS: Variants = {
    normal: { scaleY: 1 },
    animate: { scaleY: [1, 1, 0.1, 1, 1, 0.1, 1] },
};

const GithubIcon = forwardRef<GithubIconHandle, GithubIconProps>(
    (
        { onMouseEnter, onMouseLeave, className, size = 28, color = "currentColor", ...props },
        ref
    ) => {
        const controls = useAnimation();
        const isControlledRef = useRef(false);

        useImperativeHandle(ref, () => {
            isControlledRef.current = true;
            return {
                startAnimation: () => controls.start("animate"),
                stopAnimation: () => controls.start("normal"),
            };
        });

        const handleMouseEnter = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (isControlledRef.current) {
                    onMouseEnter?.(e);
                } else {
                    controls.start("animate");
                }
            },
            [controls, onMouseEnter]
        );

        const handleMouseLeave = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (isControlledRef.current) {
                    onMouseLeave?.(e);
                } else {
                    controls.start("normal");
                }
            },
            [controls, onMouseLeave]
        );

        return (
            <div
                className={cn("font-medium", className)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            >

                <svg
                    fill={color}
                    stroke={color}
                    strokeWidth="6"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    height={size}
                    viewBox="0 0 256 256"
                    width={size}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Head + two straight legs, fused with the face cutout in ONE
              path so the nonzero fill-rule punches a clear hole for the face */}
                    <path d="M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v40a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z" />

                    {/* Curled tail — animated independently */}
                    <motion.g
                        animate={controls}
                        initial="normal"
                        transition={TAIL_TRANSITION}
                        variants={TAIL_VARIANTS}
                        style={{ transformOrigin: "98px 208px" }}
                    >

                        <path d="M98,202H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98Z" />

                    </motion.g>

                    {/* Eyes — blink on hover; mix-blend-mode keeps them visible
              on both light and dark backgrounds automatically. No extra
              stroke here so the dots stay crisp against the blend mode. */}
                    <motion.ellipse
                        animate={controls}
                        initial="normal"
                        transition={EYE_TRANSITION}
                        variants={EYE_VARIANTS}
                        style={{ transformOrigin: "105px 105px", }}
                        cx="105"
                        cy="105"
                        rx="9"
                        ry="11"
                        className="text-primary"
                        stroke="none"
                    />

                    <motion.ellipse
                        animate={controls}
                        initial="normal"
                        transition={EYE_TRANSITION}
                        variants={EYE_VARIANTS}
                        style={{ transformOrigin: "167px 105px" }}
                        cx="167"
                        cy="105"
                        rx="9"
                        ry="11"
                        className="fill-primary"
                        stroke="none"
                    />

                </svg>

            </div>
        );
    }
);
GithubIcon.displayName = "GithubIcon";
export { GithubIcon };