"use client";

import { useState } from "react";
import Magnetic from './Magnetic'; // Adjust the import path as needed
import { CiMenuFries } from "react-icons/ci"; // Import the hamburger icon
import Moblenav from './Moblenav'; // Adjust the import path as needed

const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
];

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    return (
        <header className="flex justify-between items-center p-4 poppins">
            {/* Mobile Menu */}
            <div className="xl:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <CiMenuFries className="text-2xl" />
                </button>
                {isOpen && <Moblenav links={links} />} {/* Pass links to Moblenav if needed */}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex space-x-10 translate-x-40">
                {links.map((link, index) => (
                    <Magnetic key={index}>
                        <div className="relative group">
                            <a href={link.href} className="capitalize font-medium hover:text-green-500">
                                {link.label}
                            </a>
                            <div className="absolute h-0.5 w-full bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bottom-[-5px] left-0"></div>
                        </div>
                    </Magnetic>
                ))}
                {/* Download CV Button */}
                <Magnetic>
                    <div className="relative group">
                        <a
                            href="/cv/cv_daniramdani.pdf" // Update with the actual path to your CV
                            className="capitalize font-medium hover:text-green-500"
                            download
                        >
                            Download CV
                        </a>
                        <div className="absolute h-0.5 w-full bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 bottom-[-5px] left-0"></div>
                    </div>
                </Magnetic>
            </nav>
        </header>
    );
};

export default Nav;
