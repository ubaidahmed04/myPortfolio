import React, { useRef } from "react";
import "./Contact.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Card, Input, Button } from "@material-tailwind/react";
import Icon from "./Icon";
import { motion } from 'framer-motion';
import { fadeIn, } from './variants';
import Socialmedia from "./Socialmedia";
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

// add yup  Formik 
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short!')
    .max(50, 'Name is too long!')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  subject: Yup.string()
    .min(5, 'Subject is too short!')
    .required('Subject is required'),
  message: Yup.string()
    .min(10, 'Message is too short!')
    .required('Message is required'),
});
// add EmailJS 
const sendEmail = (values) => {
  emailjs.send(
    'service_dttlny9',
    'template_akza2cj',
    {
      to_name: 'Ubaid Ahmed',
      from_name: values.name, 
      message: values.message, 
      from_email: values.email, 
      reply_to: values.email,  
    },
    'xZzt_m_2tW7AHgdJu'
  ).then((result) => {
    console.log('Email sent successfully:', result.text);
    Swal.fire({
      title: 'Success',
      text: 'Email Sent Successfully',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  }).catch((error) => {
    console.log('Failed to send email:', error.text);
    Swal.fire({
      title: 'Opps...',
      text: 'Something Wrong',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  });
};
function ContactSec() {
  const isTheme = useSelector((state) => state.theme.isTheme);

  //  for from validation zod library use in nextjs
  return (
    <motion.div
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.4 }}
      className=" p-2 py-28   overflow-x-hidden">
      <div className="text-center mb-10">
        <b className={`  ${isTheme ? 'text-light' : 'text-dark'}  contact-heading  text-3xl font-bold`}>Get in Touch</b>
        <span className={`text-lg block mt-2 ${isTheme ? 'text-teal-200' : 'text-teal-500'}`} >Ask Any Question Or Remarks? Just write a Message!</span>
      </div>
      <div className="mx-auto rounded-4 sm:p-8  overflow-hidden">
        <div className={`contact-links ${isTheme ? 'text-light' : 'text-dark'}   flex flex-col lg:flex-row gap-10`}>
          <div className="lg:w-1/2">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-4xl font-extrabold tracking-wider italic">Contact Information</span>
              <span className={`${isTheme ? 'text-teal-200' : 'text-teal-500'}  mt-2`}>Say something to start a live chat!</span>
            </div>
            <div className="social-link flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-3">
                <FaWhatsapp className={`text-2xl ${isTheme ? 'text-teal-200' : 'text-teal-500'}`} />
                <span className={`text-lg font-medium ${isTheme ? 'text-teal-200' : 'text-teal-500'}`}>+92 3127718780</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className={`text-2xl ${isTheme ? 'text-teal-200' : 'text-teal-500'}`} />
                <span className={`text-lg font-medium ${isTheme ? 'text-teal-200' : 'text-teal-500'}`}>ubaidahmed2040@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className={`text-2xl ${isTheme ? 'text-teal-200' : 'text-teal-500'}`} />
                <span className={`text-lg font-medium ${isTheme ? 'text-teal-200' : 'text-teal-500'}`}>75800 Karachi PK</span>
              </div>
              <div className="flex gap-4 mt-6">
                <Socialmedia />
                {/* <Icon /> */}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-gray-300 p-3 rounded-md bg-blue-gray-300 hover:shadow-custom-hover py-5">
          {/* add formik yup  */}
            <Formik
              initialValues={{ name: '', email: '', subject: '', message: '' }}
              validationSchema={SignupSchema}
              onSubmit={(values,{resetForm}) => {
                console.log(values);
                sendEmail(values);
              
                resetForm()
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-6">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full p-2 rounded-md text-dark bg-light border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-600 mt-1 text-sm" />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full p-2 text-dark bg-light rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 mt-1 text-sm" />
                  </div>
                  <div>
                    <Field
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full p-2 text-dark bg-light rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage name="subject" component="div" className="text-red-500 mt-1 text-sm" />
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      placeholder="Compose your message here"
                      rows={4}
                      className="w-full text-dark bg-light p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 mt-1 text-sm" />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#20B2AA] shadow-custom hover:shadow-custom-hover transition-shadow duration-300 hover:bg-black hover:text-light font-bold rounded py-3"
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactSec;
