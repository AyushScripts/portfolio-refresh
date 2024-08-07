"use client";

import React, { useState, useEffect } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Testimonials = () => {
  const { ref } = useSectionInView("Testimonial");

  return (
    <section id="testimonial" ref={ref} className="py-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        What they say about me
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center max-lg:mt-10"
      >
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </motion.div>
    </section>
  );
};

export default Testimonials;
