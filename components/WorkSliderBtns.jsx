"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button 
        className={`${btnStyles} bg-gray-600 hover:bg-gray-500`} 
        onClick={() => swiper.slidePrev()} 
        aria-label="Previous Slide" // Aksesibilitas
      >
        <PiCaretLeftBold className={iconsStyles} /> {/* Terapkan styling ikon */}
      </button>
      <button 
        className={`${btnStyles} bg-gray-600 hover:bg-gray-500`} 
        onClick={() => swiper.slideNext()} 
        aria-label="Next Slide" // Aksesibilitas
      >
        <PiCaretRightBold className={iconsStyles} /> {/* Terapkan styling ikon */}
      </button>
    </div>
  );
};

export default WorkSliderBtns;
