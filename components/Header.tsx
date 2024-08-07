"use client";

import Link from "next/link";
import React from "react";
import { ModeToggleButton } from "./ModeToggleButton";
import { navLinks } from "@/data";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

// const Header = () => {
//   return (
//     // <header className="sticky backdrop-blur-md top-0 left-0 z-10 shadow-md dark:shadow-slate-700 py-10 px-6 md:px-14">
//     //   <div className="container mx-auto px-4 flex sm:flex-row items-center justify-between">
//     //     <Link href="/">
//     //       <h1 className="text-2xl font-semibold sm:mb-0">Ayush B.</h1>
//     //     </Link>

//     //     {/* Navigation links, hidden on mobile */}
//     //     <div className="hidden sm:flex gap-4 items-center">
//     //       <Link href="#work" className="font-medium  ">
//     //         Work
//     //       </Link>
//     //       <Link href="#testimonial" className="font-medium ">
//     //         Testimonial
//     //       </Link>
//     //       <Link href="#contact" className="font-medium ">
//     //         Contact
//     //       </Link>
//     //     </div>

//     //     {/* Mode toggle button */}
//     //     <ModeToggleButton />
//     //   </div>
//     // </header>

//   );
// };

// export default Header;

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  // Define the animation variants
  const linkAnimationVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.08] dark:shadow-white/[0.02] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              variants={linkAnimationVariants}
              initial="initial"
              animate="animate"
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-foreground":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}

          {/* Mode toggle button with animation */}
          <motion.li
            className="flex items-center justify-center mt-3 md:mt-0 md:ml-3"
            variants={linkAnimationVariants}
            initial="initial"
            animate="animate"
          >
            <ModeToggleButton />
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
