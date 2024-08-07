"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { IconType } from "react-icons";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

const Work = () => {
  const { ref } = useSectionInView("Work");

  return (
    <section  id="work" ref={ref}>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="section-heading"
      >
        What I Built
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.75 }}
        className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8" // reduced gap-y from 12 to 8
      >
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className=" h-[32rem]  flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px]  w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-5">
                <img src={img} alt={title} className="rounded-md" />
              </div>
              <h1 className="font-bold text-primary md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-lg  text-secondary dark:text-primary lg:font-normal line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((Icon: IconType, index) => (
                    <div
                      key={index}
                      className="border border-gray-800/[0.2] dark:border-white/[0.2] rounded-full bg-gray-300 dark:bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <Icon className="text-background text-center md:w-6 md:h-6 w-4 h-4" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-lg md:text-xs text-sm text-foreground">
                    Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#cbacf9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
