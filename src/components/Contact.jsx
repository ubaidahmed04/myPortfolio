"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import AmbientGlow from "./AmbientGlow";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      message: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      resetForm();
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    },
  });

  const inputClass =
    "w-full rounded-xl border border-paper/10 bg-paper/[0.03] px-4 py-3 text-sm text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-accent/50";

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <AmbientGlow side="left" />
      <div className="container-page">
        <SectionHeading
          eyebrow="contact"
          title="Let's build something together."
          description="Have a project in mind or a question about training? Reach out — I usually reply within a day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: profile.contact.email,
                href: `mailto:${profile.contact.email}`,
                external: false,
              },
              {
                icon: Phone,
                label: "Phone",
                value: profile.contact.phone,
                href: `tel:${profile.contact.phoneHref}`,
                external: false,
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Message me directly",
                href: profile.contact.whatsapp,
                external: true,
              },
            ].map(({ icon: Icon, label, value, href, external }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                whileHover={{ x: 4, y: -2 }}
                transition={{ duration: 0.3 }}
                className="card-surface group flex items-center gap-4 rounded-2xl p-5 transition-colors hover:border-accent/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-paper">{label}</p>
                  <p className="text-sm text-paper/50">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={formik.handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-surface rounded-2xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-xs text-paper/50">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-1 text-xs text-red-400">{formik.errors.name}</p>
                )}
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="mb-1.5 block text-xs text-paper/50">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="jane@company.com"
                  className={inputClass}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-1 text-xs text-red-400">{formik.errors.email}</p>
                )}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-xs text-paper/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Tell me about your project..."
                  className={`${inputClass} resize-none`}
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="mt-1 text-xs text-red-400">{formik.errors.message}</p>
                )}
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2, boxShadow: "0 20px 60px -20px rgba(161,194,189,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-medium text-primary sm:w-auto"
            >
              {sent ? (
                <motion.span
                  key="sent"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4" /> Message sent
                </motion.span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Send className="h-4 w-4" /> Send message
                </span>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
