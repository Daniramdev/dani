import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Magnetic = ({ children }) => {
    const magnetic = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e) => {
            if (!isHovered) return; 
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.35);
            yTo(y * 0.35);
        };

        const handleMouseEnter = () => {
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setIsHovered(false);
            xTo(0); 
            yTo(0);
        };

        const currentMagnetic = magnetic.current; // Store the current ref

        currentMagnetic.addEventListener("mousemove", handleMouseMove);
        currentMagnetic.addEventListener("mouseenter", handleMouseEnter);
        currentMagnetic.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (currentMagnetic) {
                currentMagnetic.removeEventListener("mousemove", handleMouseMove);
                currentMagnetic.removeEventListener("mouseenter", handleMouseEnter);
                currentMagnetic.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [isHovered]); 

    return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;
