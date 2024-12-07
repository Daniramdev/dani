"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack Developer",
    title: "PT.Iconnect(PLN)",
    description:
      "PT.Iconnect(PLN) (Oktober - Desember 2023) Saya menggunakan Python dengan Flask dan Tailwind CSS, serta JavaScript untuk membangun aplikasi web yang responsif.",
    stack: [
      { name: "Html 5" },
      { name: "JavaScript" },
      { name: "Flask" },
      { name: "Tailwind CSS" },
      { name: "MYSQL" },
    ],
    image: "/images/pln1.jpg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack Developer",
    title: "Project 2",
    description:
      "Toko Kopi Bandung mengunakan PHP framework CI untuk memperbaiki fitur backend dan manajemen produk.",
    stack: [
      { name: "PHP" },
      { name: "Css 3" },
      { name: "JavaScript" },
      { name: "Codeigniter" },
      { name: "MYSQL" },
    ],
    image: "/images/kopi.jpg",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [modalImage, setModalImage] = useState(""); // Image state for modal

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc); // Set the image to display in the modal
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 0.2, duration: 0.8, ease: "easeInOut" },
    }}
    className="flex flex-col justify-center  px-6 md:mt-40 py-10 "
  >
    <div className="container mx-auto h-full ">
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <div className="w-full xl:w-1/2 flex flex-col gap-6 xl:order-1 order-2"> 
          <div className="text-4xl font-semibold text-green-400">
            {project.num}
          </div>
          <div className="text-3xl font-bold text-white hover:text-green-400 transition-all duration-300">
            {project.title}
          </div>
          <p className="text-white/80 text-lg">{project.description}</p>
          <ul className="flex flex-wrap gap-4 mt-4 xl:mt-0">
            {project.stack.map((Item, index) => (
              <li
                key={index}
                className="text-xl text-green-400 font-medium hover:text-green-600 transition-all duration-300"
              >
                {Item.name}
              </li>
            ))}
          </ul>
          <div className="flex gap-4 mt-6">
            <Link href={project.live}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="p-4 rounded-full bg-gray-600 hover:bg-green-600 transition duration-300">
                    <BsArrowUpRight className="text-white text-xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live project</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
            <Link href={project.github}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger className="p-4 rounded-full bg-gray-600 hover:bg-green-600 transition duration-300">
                    <BsGithub className="text-white text-xl" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub repository</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>
        <div className="w-full xl:w-1/2 mt-10 xl:mt-0 xl:order-2 order-1"> {/* Added order classes */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="h-[480px]"
            onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="relative">
                <div
                  className="h-full relative group cursor-pointer transition duration-500 hover:scale-105"
                  onClick={() => openModal(project.image)}
                >
                  <Image
                    src={project.image}
                    alt="Project Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40 rounded-xl z-10"></div>
                </div>
              </SwiperSlide>
            ))}
            <div className="absolute inset-0 flex justify-between items-center z-20">
              <WorkSliderBtns containerStyles="flex gap-1 w-full justify-between text-xl" />
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  
    {/* Full-Screen Modal with Zoom functionality */}
    {isModalOpen && (
      <div
        className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
        onClick={closeModal}
      >
        <div
          className="relative max-w-full max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative overflow-hidden w-[80vw] h-[80vh] sm:w-[70vw] sm:h-[70vh] md:w-[60vw] md:h-[60vh] lg:w-[50vw] lg:h-[50vh]">
            <Image
              src={modalImage}
              layout="fill"
              objectFit="contain"
              className="transition-transform transform hover:scale-110 duration-300"
              alt="Full Screen Project Image"
            />
          </div>
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      </div>
    )}
  </motion.section>
  
  
  );
};

export default Work;
