import React, { useRef } from "react";
import "./Contact.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Card, Input, Button } from "@material-tailwind/react";
import Icon from "./Icon";
import { motion } from 'framer-motion';
import { fadeIn,  } from './variants';
import Socialmedia from "./Socialmedia";
import { useSelector } from "react-redux";


function ContactSec() {
  const isTheme = useSelector((state) => state.theme.isTheme);

//  for from validation zod library use in nextjs
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      className=" p-2 py-28 px-4  overflow-x-hidden">
      <div className="text-center mb-10">
        <b className={`  ${isTheme? 'text-light':'text-dark'}  contact-heading  text-3xl font-bold`}>Get in Touch</b>
        <span className={`text-lg block mt-2 ${isTheme? 'text-teal-200':'text-teal-500'}`} >Ask Any Question Or Remarks? Just write a Message!</span>
      </div>
      <div className="mx-auto rounded-4 p-8  overflow-hidden">
        <div className={`contact-links ${isTheme? 'text-light':'text-dark'}   flex flex-col lg:flex-row gap-10`}>
          <div className="lg:w-1/2">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-4xl font-extrabold tracking-wider italic">Contact Information</span>
              <span className={`${isTheme? 'text-teal-200':'text-teal-500'}  mt-2`}>Say something to start a live chat!</span>
            </div>
            <div className="social-link flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-3">
                <FaWhatsapp className={`text-2xl ${isTheme? 'text-teal-200':'text-teal-500'}`} />
                <span className={`text-lg font-medium ${isTheme? 'text-teal-200':'text-teal-500'}`}>+92 3127718780</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className={`text-2xl ${isTheme? 'text-teal-200':'text-teal-500'}`}  />
                <span className={`text-lg font-medium ${isTheme? 'text-teal-200':'text-teal-500'}`}>ubaidahmed2040@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className={`text-2xl ${isTheme? 'text-teal-200':'text-teal-500'}`} />
                <span className={`text-lg font-medium ${isTheme? 'text-teal-200':'text-teal-500'}`}>75800 Karachi PK</span>
              </div>
              <div className="flex gap-4 mt-6">
                <Socialmedia/>
                {/* <Icon /> */}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-300 p-3 rounded-md bg-white  hover:shadow-custom-hover py-5">
            <Card color="transparent" shadow={false} className="flex flex-col gap-6">
              <Input id="name" label="Your Name" variant="standard" className="col-span-12 text-gray-00" name="name" />
              <Input id="email" label="Email" variant="standard" className="col-span-12" name="email" />
              <Input id="subject" label="Subject" variant="standard" className="col-span-12" name="subject" />
              <Input id="message" label="Message" multiline rows={4} variant="standard" placeholder="Compose your message here" className="col-span-12" name="message" />
              <Button variant="contained" type="submit" className="w-full bg-[#20B2AA] shadow-custom hover:shadow-custom-hover transition-shadow duration-300 hover:bg-black hover:text-light font-bold rounded py-3">
                Submit
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactSec;
