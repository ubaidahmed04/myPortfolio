import React from 'react';
import ProfileCard from './ProfileCard';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

function About() {
  return (
    <>
      <div className=' xl:py-[100px] px-14 md:px-0 md:py-30 flex flex-col justify-around md:flex-row flex-wrap gap-8 '>
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className='flex flex-col gap-4 w-full md:w-1/2 lg:w-1/3'
        >
          <span className='text-4xl md:text-6xl font-semibold font-agustina  text-shadow-custom'>
            ABOUT ME
          </span>
          <span className='text-light md:text-lg tracking-wide leading-relaxed'>
            I&apos;m a web and application developer with a passion for creating beautiful and functional digital solutions. My journey began with my studies in computer science, which I completed at SMIT. During my time there, I developed a strong foundation in programming and web development, which has been crucial in my career.
          </span>
          <span className='text-light md:text-lg'>
            I specialize in using modern technologies like React and Next.js. With React, I build dynamic and responsive user interfaces that provide an excellent user experience. Next.js allows me to create powerful server-rendered applications that are fast and SEO-friendly. I am also proficient with various libraries and tools that complement these technologies, ensuring I can tackle a wide range of projects efficiently.
          </span>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='w-full md:w-1/2 lg:w-1/3'
        >
          <ProfileCard />
        </motion.div>
      </div>
    </>
  );
}

export default About;
