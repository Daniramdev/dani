"use client"; // Ensure this is at the top

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
      className="flex items-center justify-center  text-white mt-40 "
    >
      <div className="w-full max-w-7xl ">
        <div className="pb-20 mx-4 md:mx-32 relative">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 relative rounded-full overflow-hidden shadow-lg">
              <Image
                src={`/images/l.png`} 
                alt={"Group Photo"} 
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left md:ml-10">
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight">Let&apos;s work together</h2>
              <h3 className="text-xl mt-2 font-light text-gray-400">Collaborate with us and bring your ideas to life!</h3>
            </div>
          </motion.div>

          <div className="flex justify-center py-3 md:justify-start mt-10">
            <Rounded 
              backgroundColor="bg-transparent" 
              className="rounded-xl p-4 flex items-center justify-center w-fit mx-auto border border-gray-600"
            >
              <p className="text-center text-lg text-gray-400">Kp.Sanding RT02/RW12, Kec.Paseh, Kab.Bandung, Indonesia</p>
            </Rounded>
          </div>

          <motion.svg
            width="12"
            height="12"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/3 left-full opacity-50"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white" />
          </motion.svg>

          <div className="flex gap-6 mt-16 md:mx-32 flex-wrap justify-center">
            <Rounded backgroundColor="bg-blue-600" className="rounded-xl p-4 flex items-center justify-center w-fit">
              <a href="mailto:danird1240@gmail.com?subject=Inquiry&body=Hello,%0D%0A" className="text-inherit">
                <p className="text-center text-lg">Email: danird1240@gmail.com</p>
              </a>
            </Rounded>

            <Rounded backgroundColor="bg-blue-600" className="rounded-xl p-4 flex items-center justify-center w-fit">
              <p className="text-center text-lg">Phone: +6288218251590</p>
            </Rounded>
          </div>

          <div className="flex justify-between p-10">
            <div className="flex gap-3 items-end">
              <span className="text-gray-400">
                <h3 className="font-light">Version</h3>
                <p className="font-light">2025 © Edition</p>
              </span>
            </div>
            <div className="flex gap-4">
              <Magnetic>
                <p className="cursor-pointer text-blue-500 hover:text-blue-400 transition-all duration-300">Instagram</p>
              </Magnetic>
              <Magnetic>
                <p className="cursor-pointer text-blue-500 hover:text-blue-400 transition-all duration-300">LinkedIn</p>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
