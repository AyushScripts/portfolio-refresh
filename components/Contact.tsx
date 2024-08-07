"use client";

import React, { useState } from "react";
import MagicButton from "./ui/ContactButton";
import { HiOutlineMail } from "react-icons/hi";
import { MdDone } from "react-icons/md";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "ayushtheking117@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const { ref } = useSectionInView("Contact");

  return (
    <section ref={ref} id="contact" className="text-center py-20">
      <motion.h1
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className="section-heading ">React Me Out</motion.h1>

      <div className="flex flex-col justify-center items-center gap-1">
        <motion.p whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }} className="text-primary">
          I am open to exciting opportunities. Shoot me an email if you have
          one.
        </motion.p>
        <motion.div whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }} className="container mx-auto">
          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={copied ? <MdDone /> : <HiOutlineMail />}
            position="right"
            handleClick={handleCopy}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
