"use client"; // Ini menandakan komponen sebagai Client Component

import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiPython, SiTailwindcss } from 'react-icons/si';

// Variants untuk animasi
const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 * i },
  }),
  exit: { opacity: 0, y: 50, transition: { duration: 0.6 } },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
};

const iconHover = {
  hover: {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const About = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen text-white">
      <motion.div
        className="text-center mb-10"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="mb-4 text-4xl md:text-6xl font-extrabold tracking-wider"
          variants={slideUp}
          initial="initial"
          animate="animate"
        >
          About Me
        </motion.h1>
        <motion.p
          className="max-auto text-justify text-lg md:text-2xl font-light"
          variants={slideUp}
          initial="initial"
          animate="animate"
        >
          I am a full stack developer with expertise in creating and enhancing modern websites tailored to specific needs. I am passionate about working with dynamic teams and applying my knowledge in both front-end and back-end technologies to build robust and scalable solutions. Committed to continuous learning and growth in the fast-evolving tech industry.
        </motion.p>
      </motion.div>

      {/* Skills Section */}
      <div className="flex flex-col items-center text-xs mt-10">
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-6 text-xs">
            {[{
              icon: <SiJavascript />,
              label: 'JavaScript',
              color: 'text-yellow-500',
            }, {
              icon: <SiReact />,
              label: 'React',
              color: 'text-blue-500',
            }, {
              icon: <SiNodedotjs />,
              label: 'Node.js',
              color: 'text-green-600',
            }, {
              icon: <SiHtml5 />,
              label: 'HTML5',
              color: 'text-orange-500',
            }, {
              icon: <SiCss3 />,
              label: 'CSS3',
              color: 'text-blue-600',
            }, {
              icon: <SiPython />,
              label: 'Python',
              color: 'text-blue-400',
            }, {
              icon: <SiTailwindcss />,
              label: 'Tailwind CSS',
              color: 'text-teal-400',
            }].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={slideUp}
                initial="initial"
                animate="animate"
                custom={index}
                whileHover="hover"
              >
                <motion.div
                  className="relative"
                  variants={iconHover}
                  whileHover="hover"
                >
                  {React.cloneElement(skill.icon, {
                    size: "3em",
                    className: `${skill.color} hover:text-white transition duration-200`,
                  })}
                </motion.div>
                <span className="mt-2 text-sm md:text-base">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/images/l.png)',
          height: '100vh',
          width: '100vw',
        }}
        initial={{ y: "-30%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </div>
  );
};

export default About;
