"use client";
import { useState, useRef, useEffect } from "react";
import { useAnimate, AnimationPlaybackControls } from "framer-motion";


export default function CallToAction() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isHovered, setIsHovered] = useState(false);
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (scope.current) {
            animation.current = animate(scope.current, { x: '-50%' }, { duration: 30, ease: "linear", repeat: Infinity });
        }
    }, [animate, scope]);

    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered, animation]);
    return (

        <section className="py-24">
            <div className="overflow-x-clip p-4 flex ">
                <div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl ">&#10038;</span>
                            <span className="group-hover:text-lime-400">Try it for free</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
