import React, { useRef, useEffect } from "react";
import "./Contact.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Card, Input, Button } from "@material-tailwind/react";
import gsap from 'gsap';
import Icon from "./Icon";
import { motion } from 'framer-motion';
import { fadeIn } from './variants'

// import emailjs from '@emailjs/browser';
// import Swal from "sweetalert2";
// import { useForm } from "react-hook-form";

function ContactSec() {

  const bgClass = `bg-[var(--theme-color)]`;

  //   const form = useRef();
  //   const {
  //     register,
  //     handleSubmit,
  //     reset,
  //     formState: { errors },
  //   } = useForm();

  //   const validateForm = (data) => {
  //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //     const formErrors = {};

  //     if (!data.user_name) {
  //       formErrors.name = 'Name is required';
  //     }
  //     if (!data.user_email) {
  //       formErrors.email = 'Email is required';
  //     } else if (!emailRegex.test(data.user_email)) {
  //       formErrors.email = 'Email is invalid';
  //     }
  //     if (!data.message) {
  //       formErrors.message = 'Message is required';
  //     }

  //     if (Object.keys(formErrors).length > 0) {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Validation Error',
  //         text: 'Please fill in all required fields correctly.',
  //       });
  //       return false;
  //     }

  //     return true;
  //   };

  //   const onSubmit = (data) => {
  //     if (!validateForm(data)) {
  //       return;
  //     }

  //     emailjs
  //       .sendForm('service_mj7izqf', 'template_dhvgjyn', form.current, 'BGeB65cbgpJqCoxYb')
  //       .then(
  //         () => {
  //           Swal.fire({
  //             title: 'Good job!',
  //             text: 'Sent Successfully',
  //             icon: 'success',
  //           });
  //           // console.log(data)
  //           reset(); // Reset the form fields
  //         },
  //         (error) => {
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'Something went wrong',
  //             text: 'Failed to send the message. Please try again.',
  //           });
  //         }
  //       );
  //   };

  return (
    <motion.div 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className={`bg-gray-900 p-5   `}>
      <div className=" text-center mb-10">
        <b className="contact-heading text-3xl font-bold text-gray-800">Get in Touch</b>
        <span className="ask block !text-teal-200 mt-2">Ask Any Question Or Remarks? Just write a Message!</span>
      </div>
      <div className=" mx-auto rounded-4  p-8 shadow-lg">
        <div className="contact-links text-white flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">Contact Information</span>
              <span className="!text-teal-200 mt-2">Say something to start a live chat!</span>
            </div>
            <div className="social-link flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-cyan-200 text-2xl" />
                <span className="text-lg font-medium !text-teal-200">+92 3127718780</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-200 text-2xl" />
                <span className="text-lg font-medium !text-teal-200">ubaidahmed2040@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-200 text-2xl" />
                <span className="text-lg font-medium !text-teal-200">75800 Karachi PK</span>
              </div>
              <div className=" flex gap-4 mt-6">
                <Icon />
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-300 p-3 rounded-md">
            <Card color="transparent" shadow={false} className="flex flex-col gap-6">
              <Input
                id="name"
                label="Your Name"
                variant="standard"
                className="col-span-12 text-gray-00"
                name="name"
              />
              <Input
                id="email"
                label="Email"
                variant="standard"
                className="col-span-12"
                name="email"
              />
              <Input
                id="subject"
                label="Subject"
                variant="standard"
                className="col-span-12"
                name="subject"
              />
              <Input
                id="message"
                label="Message"
                multiline
                rows={4}
                variant="standard"
                placeholder="Compose your message here"
                className="col-span-12"
                name="message"
              />
              <Button
                variant="contained"
                type="submit"
                className="w-full bg-yellow-500 hover:shadow-[#7DC5BE] text-white font-bold rounded py-3"
              >
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
