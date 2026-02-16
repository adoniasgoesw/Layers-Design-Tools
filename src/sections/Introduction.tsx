"use client";

import { useRef, useState } from "react";
import Tag from "@/components/Tag";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

const words = text.split(' ');

export default function Introduction() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 0.8', 'end 0.2']
    });

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);
    const [currentWord, setCurrentWord] = useState(0);

    useMotionValueEvent(wordIndex, "change", (latest) => {
        setCurrentWord(Math.round(latest));
    });

    return <section ref={sectionRef} className="py-28 lg:py-40 min-h-[150vh] flex items-center">
        <div className="container">
            <div className="flex justify-center">
                <Tag>
                    Introduction Layers
                </Tag>
            </div>
            <div className="text-4xl md:text-6xl  lg:text-7xl text-center font-medium mt-10 ">
                <span>Your creative process deserves better.</span> {""}
                <span className="text-white/15">
                    {words.map((word, wordIndex) => (
                        <span
                            key={wordIndex}
                            className={twMerge("transition-colors duration-300 inline-block", wordIndex < currentWord ? 'text-white' : 'text-white/15')}
                        >
                            {`${word} `}
                        </span>
                    ))}
                </span>
                <span className="text-lime-400 block">That&apos;s why we built Layers.</span>
            </div>
        </div>
    </section>
}
