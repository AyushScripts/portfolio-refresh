'use client'

import React from "react";
import { skills } from "@/data";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number)=>  ({
    opacity: 1,
    y:0,
    transition: {
        delay: 0.05 * index,
    }
  })
};




const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures the animation triggers only once
        threshold: 0.1, // Percentage of the element that needs to be visible
      });

  return (
    <section className="mb-28 mx-auto max-w-[53rem] text-center scroll-mt-28">
       <motion.h1
        className="section-heading"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        What I frequently use
      </motion.h1>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-background">
        {skills.map((skill, index) => (
          <motion.li
            className="bg-content-container border-black/[0.1] rounded-xl px-5 py-3 flex gap-1 justify-center items-center"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView='animate'
            viewport={{
                once: true,
            }}
            custom={index}
          >
            <skill.icon className="text-background"/>
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
