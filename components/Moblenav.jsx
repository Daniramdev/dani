"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link"; 
import { CiMenuFries } from "react-icons/ci";
import Magnetic from "@/components/Magnetic"; // Adjust the import path if needed
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"; // Import social media icons

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const Moblenav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[30px] text-white font-bold right-10 md:hidden block absolute mt-20" />
      </SheetTrigger>
      <SheetContent className="items-center flex-col flex text-center justify-center">
        <nav className="flex-col flex text-center space-y-4 p-4">
          {links.map((link) => (
            <Magnetic key={link.label}>
              <Link href={link.href} className="text-white hover:text-green-500 text-4xl">
                {link.label}
              </Link>
            </Magnetic>
          ))}
        </nav>
        
        {/* Download CV Button */}
        <Magnetic>
          <Link 
            href="/cv/cv_daniramdani.pdf" // Update with the actual path to your CV
            className="text-white hover:text-green-500 text-4xl "
            download
          >
            Download CV
          </Link>
        </Magnetic>

        {/* Social Media Links */}
        <div className="flex space-x-10 mt-6">
          <Link href="https://www.instagram.com/daniramv_v/" target="_blank" className="text-white hover:text-green-500">
            <FaInstagram className="text-2xl" />
          </Link>
          <Link href="https://web.facebook.com/daniramdani.daniramdani.165033" target="_blank" className="text-white hover:text-green-500">
            <FaFacebookF className="text-2xl" />
          </Link>
          <Link href="https://twitter.com" target="_blank" className="text-white hover:text-green-500">
            <FaTwitter className="text-2xl" />
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Moblenav;
