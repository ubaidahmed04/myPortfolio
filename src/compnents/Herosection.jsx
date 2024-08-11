"use client";
import React from 'react';
import Icon from './Icon';
import { Button } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

function Herosection() {
  return (
    <div className="flex flex-col md:flex-row sm:px-10 pt-5 justify-around overflow-x-hidden">
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col p-4 md:w-[500px] "
      >
        <span className="text-4xl md:text-6xl font-extrabold text-blue">Hi </span>
        <span className="text-4xl md:text-6xl font-extrabold text-blue pt-3">
          I&apos;M <span className="text-4xl md:text-6xl font-extrabold text-light pt-3">Ubaid</span>
        </span>

        <span className="text-lg md:text-2xl font-serif text-light pt-3 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat at nam provident ipsum consectetur voluptas odit. Id excepturi quas ipsa corrupti quae expedita ratione accusantium magnam exercitationem aliquam. Ipsum.
        </span>
        <Icon />
        <div className="flex gap-3 pt-16 flex-wrap sm:items-center justify-center md:gap-4 md:justify-start md:flex-nowrap">
          <Button className="w-full sm:w-1/2 bg-[#303030] shadow-custom hover:shadow-custom-hover transition-shadow duration-300">
            CONTACT ME
          </Button>
          <Button
            variant="outlined"
            className="w-full sm:w-1/2 bg-transparent bg-light-blue-400 shadow-custom hover:shadow-custom-hover transition-shadow duration-300 hover:bg-black hover:text-light"
          >
            DOWNLOAD MY RESUME
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
        <img src='/Images/avatarimg.png' className='w-full rounded-full' alt="avatar" />
      </motion.div>
    </div>
  );
}

export default Herosection;
