"use client"; // Add this line at the top

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '@/components/ui/Magnetic';

export default function RoundedButton({ children, backgroundColor = "#455CE9", ...attributes }) {
    const circle = useRef(null);
    const timeline = useRef(null);
    let timeoutId = null;

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
            .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current.tweenFromTo('enter', 'exit');
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current.play();
        }, 300);
    };

    return (
        <Magnetic>
            <div
                className="rounded-full border border-gray-800 cursor-pointer relative flex items-center justify-center p-4"
                onMouseEnter={manageMouseEnter}
                onMouseLeave={manageMouseLeave}
                style={{ overflow: "hidden", backgroundColor }}
                {...attributes}
            >
                {children}
                <div ref={circle} className="absolute rounded-full" style={{ backgroundColor }}></div>
            </div>
        </Magnetic>
    );
}
