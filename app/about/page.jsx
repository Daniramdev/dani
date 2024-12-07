"use client"; // This makes the component a Client Component

import React from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiNodedotjs, SiHtml5, SiCss3, SiPython, SiTailwindcss } from 'react-icons/si';

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
    <div className="container flex flex-col items-center justify-center min-h-screen text-white mt-20 md:mt-0">
      <motion.div
        className="text-center mb-10 px-4 md:px-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <motion.h1
          className="mb-4 text-4xl md:text-6xl font-bold tracking-wide"
          variants={slideUp}
          initial="initial"
          animate="animate"
        >
          About Me
        </motion.h1>
        <motion.p
          className="max-auto text-lg md:text-2xl font-light leading-relaxed"
          variants={slideUp}
          initial="initial"
          animate="animate"
        >
          I&apos;am a passionate Full Stack Developer with a focus on building scalable, responsive, and high-performing web applications. I work closely with teams to bring innovative solutions, combining front-end creativity with back-end architecture. My skill set spans modern technologies like JavaScript, React, Node.js, and Python.
        </motion.p>
      </motion.div>

      {/* Skills Section */}
      <div className="flex flex-col items-center text-xs ">
        <h2 className="text-xl text-teal-500 mb-2">My Skills</h2>
        <div className="grid md:grid-cols-3 grid-cols-4 lg:grid-cols-7 gap-8 text-xs md:text-base">
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
                  className: `${skill.color} hover:text-white transition duration-300`,
                })}
              </motion.div>
              <span className="mt-2 text-sm">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA Section */}
      <motion.div
        className="mt-16 flex flex-col items-center justify-center p-4  rounded-xl shadow-lg"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl font-semibold text-white mb-4">Let&apos;s Build Something Amazing Together</h2>
        <p className="text-lg text-white mb-8">I am always open to new opportunities and challenges. Let&apos;s connect and create something extraordinary!</p>
        <motion.a
          href="mailto:danird1240@gmail.com?subject=Inquiry&body=Hello,%0D%0A"
          className="text-lg text-teal-900 bg-white px-6 py-2 rounded-full hover:bg-teal-100 transition"
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/images/l.png)', // Replace with your background image
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
