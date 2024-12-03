"use client"; // Pastikan ini ada di bagian atas

import { motion } from 'framer-motion';
import Image from 'next/image';
import Rounded from '@/components/RoundedButton';
import Magnetic from '@/components/ui/Magnetic';
import { useRef } from 'react';

const Contact = () => {
  const container = useRef(null);

  return (
    <motion.div
      ref={container}
      className="flex flex-col items-center justify-center bg-[#141516] text-white relative"
    >
      <div className="pt-52 w-full max-w-[1800px] bg-[#141516]">
        <div className="border-b border-gray-400 pb-24 mx-4 md:mx-52 relative">
          <span className="flex flex-col md:flex-row items-center space-10">
            <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden">
              <Image 
                src={`/images/l.png`} 
                alt={"Group Photo"} 
                fill
                className="object-cover" 
              />
            </div>
            <h2 className="mt-2 md:mt-0 md:ml-10 text-4xl md:text-5xl font-light text-center md:text-left">
              Let's work 
            </h2>
            <h2 className="text-5xl font-light text-center md:text-start">together</h2>
          </span>

          {/* <motion.div className="absolute left-[calc(100%-400px)] top-[calc(100%-75px)]">
            <Rounded backgroundColor={"bg-green-500"} className="w-40 h-40 bg-green-500 text-white rounded-full flex items-center justify-center cursor-pointer">
              <p className="text-lg font-light">Get in touch</p>
            </Rounded>
          </motion.div> */}
           {/* New Address Section */}
        <div className="flex justify-center py-3 md:justify-start">
          <Rounded backgroundColor={"bg-transparent"} className="rounded-xl bg-transprent p-3 mt-10 flex items-center absolute justify-center w-fit mx-auto">
            <p className="text-center">Kp.Sanding RT02/RW12, Kec.paseh ,Kab.Bandung ,Indonesia</p>
          </Rounded>
        </div>
          <motion.svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/3 left-full">
            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
          </motion.svg>
        </div>
        <div className="flex-row gap-2 mt-24 md:mx-52 flex items-center justify-center w-fit mx-auto">
          <Rounded backgroundColor={"bg-green-500"} className="rounded-xl bg-green-500 p-4 flex items-center justify-center w-fit mx-auto">
            <a 
              href="mailto:danird1240@gmail.com?subject=Inquiry&body=Hello,%0D%0A" 
              className="text-inherit"
            >
              <p className="text-center">danird1240@gmail.com</p>
            </a>
          </Rounded>

          <Rounded backgroundColor={"bg-green-500"} className="rounded-xl bg-green-500 p-4 flex items-center justify-center w-fit mx-auto">
            <p className="text-center">+6288218251590</p>
          </Rounded>
        </div>

       

        <div className="flex justify-between p-10">
          <div className="flex gap-3 items-end">
            <span>
              <h3 className="font-light">Version</h3>
              <p className="font-light">2025 © Edition</p>
            </span>
          
          </div>
          <div className="flex gap-3">
            <Magnetic>
              <p className="cursor-pointer">Instagram</p>
            </Magnetic>
            <Magnetic>
              <p className="cursor-pointer">LinkedIn</p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
