'use client'

import React from "react";
import { motion } from 'framer-motion'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <motion.footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {date} Ayush. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
    </motion.footer>
  );
};

export default Footer;
