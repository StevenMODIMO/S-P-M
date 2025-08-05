"use client";
import React from "react";
import Link from "next/link";
import { motion, easeInOut } from "motion/react";
import { navlinks } from "../lib/data";
import { usePathname } from "next/navigation";
import { X, SquareArrowOutUpRight } from "lucide-react";
import Container from "./Container";

const container = {
  hidden: { x: -1200 },
  visible: {
    x: 0,
    transition: {
      ease: easeInOut,
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    x: -1200,
    transition: {
      duration: 0.6,
      ease: easeInOut,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 20,
    opacity: 0,
  },
};

const xIconVariant = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: navlinks.length * 0.1 + 0.2,
      duration: 0.4,
      ease: easeInOut,
    },
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
};

interface NavLinksProps {
  setOpenLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ setOpenLinks }) => {
  const pathname = usePathname();
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="backdrop-blur-sm bg-[rgb(38,38,38,0.5)] dark:bg-[rgb(42,41,41,0.5)] fixed top-0 left-0 w-screen h-screen md:hidden md:bg-none z-20"
    >
      <nav className="text-white">
        <motion.div
          variants={xIconVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="w-fit mx-auto p-2 my-8 bg-[#E7EE1A] text-black dark:bg-white rounded-full"
        >
          <X
            className="w-6 dark:text-black"
            onClick={() => setOpenLinks(false)}
          />
        </motion.div>

        <Container>
          <section className="flex flex-col gap-2">
            {navlinks.map((link) => (
              <Link
                onClick={() => setOpenLinks(false)}
                href={link.path}
                key={link.id}
                className=""
              >
                <motion.div
                  variants={item}
                  className={`${
                    (link.title === "04. Blog" ||
                      link.title === "05. Projects" ||
                      link.title === "06. Get in touch") &&
                    "flex items-center gap-2"
                  } text-base p-2`}
                >
                  {link.title}
                  {(link.title === "04. Blog" ||
                    link.title === "05. Projects" ||
                    link.title === "06. Get in touch") && (
                    <SquareArrowOutUpRight className="w-4 text-[#E7EE1A]" />
                  )}
                </motion.div>
              </Link>
            ))}
          </section>
        </Container>
      </nav>
    </motion.main>
  );
};

export default NavLinks;
