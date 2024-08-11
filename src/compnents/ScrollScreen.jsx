import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCard } from "./ProjectCard";
import './Styles.css';

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1, // Default number of slides
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        }
      },
      {
        breakpoint: 1024, // Laptops and desktops
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
        }
      }
    ]
  };

  const bgClass = `bg-[var(--theme-color)]`;

  return (
    <div className={`slider-container ${bgClass} py-5 px-4`}>
      <span className="text-2xl font-bold text-teal-200 my-3 block text-center">
        Projects
      </span>
      <Slider {...settings} className="gap-3">
        <div className="px-3">
          <ProjectCard />
        </div>
        <div className="px-3">
          <ProjectCard />
        </div>
        <div className="px-3">
          <ProjectCard />
        </div>
        <div className="px-3">
          <ProjectCard />
        </div>
        <div className="px-3">
          <ProjectCard />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
