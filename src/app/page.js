"use client"
import Navigation from '../compnents/navigation'
import { ThemeProvider } from "@material-tailwind/react";
import Herosection from "@/compnents/Herosection";
import ContactSec from '@/compnents/Contact';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { Cardlink } from '@/compnents/Card';
import ScrollxSection from '@/compnents/ScrollScreen';
import { ProjectCard } from '@/compnents/ProjectCard';
import TextCard from '@/compnents/TextCard';
import About from '@/compnents/About';


export default function Home() {

  return (
    <ThemeProvider>
      <main className='bg-dark '>
        <Navigation />
        <Herosection />
      
        <About />
        {/* <ScrollxSection/> */}
        {/* <TextCard/> */}
        <div

          className='flex flex-wrap justify-center py-20'
        >
          <Cardlink />
          <Cardlink />
          <Cardlink />
          <Cardlink />
        </div>
        <ContactSec />
      </main>
    </ThemeProvider>
  );
}
