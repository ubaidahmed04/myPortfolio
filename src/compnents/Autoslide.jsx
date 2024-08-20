import React from 'react'
import Slider from "react-slick";
import { ProjectCard } from './ProjectCard';

const Autoslide = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    
  return (
    <div className="slider-container bg-dark">
      <Slider {...settings}>
        <div className='bg-light'>
         <ProjectCard/>
        </div>
        <div className='bg-light'>
         <ProjectCard/>
             </div>
        <div className='bg-light'>
         <ProjectCard/>
             </div>
        <div className='bg-light'>
         <ProjectCard/>
             </div>
        <div className='bg-light'>
         <ProjectCard/>
             </div>
        <div className='bg-light'>
         <ProjectCard/>
             </div>
      </Slider>
    </div>
  )
}

export default Autoslide