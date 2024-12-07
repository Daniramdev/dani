"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button 
        className={`${btnStyles} bg-black/60 text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300`} 
        onClick={() => swiper.slidePrev()} 
        aria-label="Previous Slide" // Aksesibilitas
      >
        <PiCaretLeftBold className={`${iconsStyles} text-2xl`} /> {/* Adjusted icon size */}
      </button>
      <button 
        className={`${btnStyles} bg-black/60 text-white p-3 rounded-full hover:bg-green-600 transition-all duration-300`} 
        onClick={() => swiper.slideNext()} 
        aria-label="Next Slide" // Aksesibilitas
      >
        <PiCaretRightBold className={`${iconsStyles} text-2xl`} /> {/* Adjusted icon size */}
      </button>
    </div>
  );
};

export default WorkSliderBtns;
