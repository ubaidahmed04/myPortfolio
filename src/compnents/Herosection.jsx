"use client";
import React from 'react';
import Icon from './Icon';
import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import './Styles.css'
import Socialmedia from './Socialmedia';
import { useSelector } from 'react-redux';
function Herosection() {
  const isTheme = useSelector((state) => state.theme.isTheme);

  return (
    <div className="flex flex-col md:flex-row sm:px-10 pt-5 justify-between overflow-x-hidden">
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col p-4 md:w-[500px]"
      >
        <span className={`text-4xl md:text-6xl font-extrabold ${isTheme? 'text-blue':'text-dark'}`}>Hi </span>
        <span  className={`text-4xl md:text-6xl font-extrabold ${isTheme? 'text-blue':'text-dark'}`}>
          I&apos;M <span className={`text-4xl md:text-6xl font-extrabold ${isTheme? 'text-light':'text-dark'}  pt-3`}>Ubaid</span>
        </span>

        <span className={`text-lg md:text-2xl font-serif ${isTheme? 'text-light':'text-dark'} pt-3 leading-relaxed`}>
        A passionate Mern Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nextjs / React Native and some other cool libraries and frameworks.
        </span>
        <Socialmedia/>
        {/* <Icon /> */}
        <div className="flex gap-3 pt-16 flex-wrap sm:items-center justify-center md:gap-4 md:justify-start md:flex-nowrap">
          <Button className={`w-full sm:w-1/2 ${isTheme? 'text-light':'text-dark'} btn2`}>
            CONTACT ME
          </Button>
          <Button className={`w-full sm:w-1/2 ${isTheme? 'text-light':'text-dark'} btn`}>
            <span> MY RESUME</span>
          </Button>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="hidden md:block md:w-[400px] md:ml-8"
      >
        <img src='/Images/avatarimg.png' loading="lazy" className='w-full rounded-full' alt="avatar" />
      </motion.div>
    </div>
  );
}

export default Herosection;
