import React from 'react'
import Slider from "react-slick";
import { NewCard } from './NewCard';
import { useSelector } from 'react-redux';
import { fadeIn, } from './variants';
import { motion } from 'framer-motion';
import { project1, project2, project3, project4, project5 } from '@/app/Const/Base64';
const ProjectSlide
  = () => {
    const isTheme = useSelector((state) => state.theme.isTheme);

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2, // Default number of slides to show
      slidesToScroll: 1,
      autoplay: true,
      // speed: 4000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 500, // For small screens (sm)
          settings: {
            slidesToShow: 1, // Show 1 slide
          }
        },
        {
          breakpoint: 768, // For medium screens (md)
          settings: {
            slidesToShow: 1, // Show 2 slides
          }
        },
        {
          breakpoint: 1024, // For large screens (lg)
          settings: {
            slidesToShow: 2, // Show 3 slides
          }
        }

      ]
    };


    return (
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.9 }}>
        <span className={`text-4xl ${isTheme ? 'text-light' : 'text-dark'} md:text-6xl py-12 sm:px-14 px-6  font-semibold font-agustina  text-shadow-custom`}>
          Projects
        </span>
        <div className={`slider-container ${isTheme ? 'text-light bg-dark' : 'text-dark bg-light'}  sm:px-14 px-6 py-12`}>


          <Slider {...settings}>
            <div className=''>
              <NewCard path={'https://shopeco.vercel.app'} title={'E-Commerce'} URL={'/Images/shopeco.png'} blurImageUrl={project1}
                description={'Developed a responsive eCommerce platform with dynamic product listings,and user-friendly navigation, enhancing customer shopping experience.'} />
            </div>
            <div className=''>
              <NewCard path={'https://skypulse.vercel.app'} title={'Weather App'} URL={'/Images/project2.png'} blurImageUrl={project2}
                description={'A responsive Weather App that provides real-time weather updates for any location, featuring a sleek UI and integrated with an API for accurate forecasts.'} />
            </div>
            <div className=''>
              <NewCard path={'https://dailytask-opal.vercel.app'} title={'Daily-Task'} URL={'/Images/project3.png'} blurImageUrl={project3}
                description={'A sleek and intuitive daily task manager that helps you organize and prioritize your to-dos effortlessly. Stay productive by tracking your progress and managing your tasks efficiently.'} />
            </div>
            <div className=''>
              <NewCard path={'https://ubaidahmed04.github.io/Quiz_App'} title={'Quiz App'} URL={'/Images/project5.png'} blurImageUrl={project4}
                description={'A dynamic Quiz App built with React , interactive quizzes, and a sleek user interface. Designed for seamless user experience and efficient data management.'} />
            </div>
            <div className=''>
              <NewCard path={'https://memebuzz.vercel.app'} title={'Meme Generator'} URL={'/Images/project6.png'} blurImageUrl={project5}
                description={'Developed a Meme Generator with features that allow users to download custom memes and add draggable, editable text over images for personalized meme creation.'} />
            </div>
            <div className=''>
              <NewCard path={'https://resumepulse.vercel.app'} title={'Resume Builder'} URL={'/Images/project7.png'} blurImageUrl={project5}
                description={'Developed a dynamic Resume Builder web application enabling users to create, customize. Implemented responsive design  for an intuitive user experience.'} />
            </div>

          </Slider>
        </div>
      </motion.div>
    )
  }

export default ProjectSlide
