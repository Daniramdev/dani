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
      "PT.Iconnect(PLN) (Oktober - Desember 2023) Saya menggunakan Python dengan Flask dan Tailwind CSS, serta JavaScript untuk membangun aplikasi web yang responsif. Dalam proyek ini, saya membuat 26 diagram yang menampilkan rata-rata data setiap tahun, menggunakan library JavaScript Highcharts. Dan memanagement data saya berhasil mengimplementasikan nya dapat mengelola dan menganalisis data dengan lebih mudah dan akurat.",
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
      "Toko Kopi Bandung mengunakan bahasa pemograman PHP framework CI dalam proyek kali ini saya merubah beberapa vitur  memperbaiki bagian backend pegiriman pesan, meyimpan prodact dan memanagement,menapilkan pesananan Prodact dan saya berhasil mengemplementsaikan nya hingga bisa mengirim pesan ke admin dan menapilkan prodact,meyimpan prodact yang telah di pesan user ke halaman admin ",
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
        transition: { delay: 2.0, duration: 0.2, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center xl:px-0"
    >
      <div className="container mx-auto md:mt-40 py-20 md:py-0">
        <div className="flex flex-col xl:flex-row">
          <div className="w-full xl:w-[50%] flex gap-[30px] flex-col xl:justify-between order-2 xl:order-none">
            <div className="text-8xl leading-none font-extrabold text-transparent bg-clip-text bg-white ">
              {project.num}
            </div>
            <div className="text-[42px] font-bold leading-none text-white group-hover:text-green-500 transition-all duration-500 capitalize">
              {project.category}
            </div>
            <div className="text-white/60 text-sm">{project.description}</div>
            <ul className="flex gap-3">
              {project.stack.map((Item, index) => (
                <li key={index} className="text-xl text-green-500">
                  {Item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center flex group">
                      <BsArrowUpRight className="text-white text-center text-3xl group-hover:text-green-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 justify-center items-center flex group">
                      <BsGithub className="text-white text-center text-3xl group-hover:text-green-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div
                    className="h-80 relative group flex justify-center items-center bg-gray-50/30 cursor-pointer"
                    onClick={() => openModal(project.image)} // Open modal on image click
                  >
                    <div className="absolute top-0 bottom-0 h-full w-full bg-black/10 z-10">
                      <div className="relative w-full h-80">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="Project Image"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="absolute inset-0 flex justify-between items-center z-20">
                <WorkSliderBtns containerStyles="flex gap-1 w-full justify-between text-xl md:-mt-40" />
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
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking the image
          >
            <div className="relative overflow-hidden w-[80vw] h-[80vh]">
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
