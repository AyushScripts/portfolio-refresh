"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const HeroSection = () => {
  const {ref} = useSectionInView('Home')

  const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });

  return (
    <section id="home" ref={ref} className="mt-28">
      <div className="container max-w-3xl flex flex-col gap-4">
        <motion.div variants={container(0)}
          initial="hidden"
          animate="visible">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Hello 👋",
              1500, // wait 1s before replacing "Mice" with "Hamsters"
              "नमस्ते 👋",
              1500,
              "Hola 👋",
              1500,
              "你好 👋",
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2.5rem",
              display: "inline-block",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
        >
          <ul className="list-none">
            <li className="text-primary font-normal">
              🧑🏻 I am{" "}
              <a className="text-foreground" href="#">
                Ayush Bhattacharjee
              </a>
              , a 19 year-old college drop-out.
            </li>
            <li className="text-primary font-normal">
              👩🏻‍💻 A self taught{" "}
              <a className="text-foreground" href="#">
                programmer
              </a>
              , part time{" "}
              <a className="text-foreground" href="#">
                chess
              </a>{" "}
              player and a lover of all things tech.
            </li>
            <li className="text-primary font-normal">
              ⚒️ I mainly work with{" "}
              <a className="text-foreground" href="https://nextjs.org">
                NextJS
              </a>
              ,{" "}
              <a className="text-foreground" href="https://typescriptlang.org">
                Typescript
              </a>{" "}
              and{" "}
              <a className="text-foreground" href="https://webflow.com">
                Webflow
              </a>{" "}
              on a daily basis.
            </li>
          </ul>
        </motion.div>

        <motion.div variants={container(1)} initial="hidden" animate="visible">
          <p className="text-primary">
            Here you will find all the things I am building, have built, am
            learning, or have already learnt. Scroll down and check ‘em out!
          </p>
        </motion.div>

        <motion.div
          variants={container(1)}
          initial="hidden"
          animate="visible"
        >
          <SocialIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
