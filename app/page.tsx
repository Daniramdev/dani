'use client';
import Image from 'next/image';
import { useRef, useLayoutEffect, useCallback, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { motion } from 'framer-motion';

export default function Home() {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    const arrowRef = useRef(null);
    const terminalInputRef = useRef(null);
    const [showInput, setShowInput] = useState(false);

    const directionRef = useRef(-1);
    const xPercentRef = useRef(0);

    const animate = useCallback(() => {
        if (xPercentRef.current < -100) {
            xPercentRef.current = 0;
        } else if (xPercentRef.current > 0) {
            xPercentRef.current = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercentRef.current });
        gsap.set(secondText.current, { xPercent: xPercentRef.current });
        requestAnimationFrame(animate);
        xPercentRef.current += 0.1 * directionRef.current;
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => (directionRef.current = e.direction * -1),
            },
            x: '-500px',
        });
        requestAnimationFrame(animate);

        // Arrow animation
        gsap.to(arrowRef.current, {
            y: -10,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: "power1.inOut"
        });
    }, [animate]);

    const handleTerminalInput = () => {
        setShowInput(true);
        gsap.fromTo(terminalInputRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    };

    return (
        <motion.main
            initial="initial"
            animate="enter"
            className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-r from-gray-600 via-black to-white"
        >
            {/* Background Noise or Grid */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 z-0"></div>

            <div className='z-0 absolute top-0 p-0 h-full w-full'>
                <Image src="/images/l.png" fill alt="background" className="object-cover opacity-40" />
            </div>

            {/* Terminal-style Text Animation */}
            <div className="absolute top-[calc(100vh-350px)] text-center z-10 text-white">
                <div ref={slider} className="relative whitespace-nowrap">
                    <p ref={firstText} className="text-green-400 text-[230px] font-mono tracking-wide animate__animated animate__fadeIn animate__delay-1s">
                        FullStack Web Developer -
                    </p>
                    <p ref={secondText} className="absolute left-full top-0 text-green-400 text-[230px] font-mono tracking-wide animate__animated animate__fadeIn animate__delay-1s">
                        FullStack Web Developer -
                    </p>
                </div>
            </div>

            {/* Terminal Input Trigger */}
            <div className="absolute top-[45%] left-[50%] transform md:translate-x-80 -translate-x-1/2 text-white text-xl font-light ">
                <div className="flex justify-center items-center mb-4">
                    <svg
                        ref={arrowRef}
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform scale-125 mb-[10px] hover:scale-150 transition duration-300 cursor-pointer"
                        onClick={handleTerminalInput}
                    >
                        <path d="M12 21L12 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 14L12 21L19 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <p className="text-[16px] text-green-400 font-mono">IM Dani Ramdani</p>
                <p className="text-[16px] text-white font-mono">FullStack Web Developer</p>
            </div>

            {/* Terminal Input (Hidden Until Triggered) */}
            {showInput && (
                <div
                    ref={terminalInputRef}
                    className="absolute top-[55%] left-[50%] transform -translate-x-1/2 text-white text-lg font-mono"
                >
                    <div className="flex items-center space-x-2">
                        <span className="text-green-400"></span>
                        <input
                            type="text"
                            className="bg-transparent text-white outline-none w-64 p-2 border-2 border-green-400 rounded-lg focus:ring-2 focus:ring-green-400 transition duration-300"
                            placeholder="Enter your command..."
                        />
                    </div>
                </div>
            )}
        </motion.main>
    );
}
