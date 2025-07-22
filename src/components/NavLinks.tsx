"use client";
import React from "react";
import Link from "next/link";
import { motion, easeInOut } from "motion/react";
import { FaTimes } from "react-icons/fa";
import { navlinks } from "../lib/data";
import { usePathname } from "next/navigation";

const container = {
  hidden: { x: -1200 },
  visible: {
    x: 0,
    transition: {
      ease: easeInOut,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
  exit: {
    x: -1200,
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
      className="bg-black/95 absolute top-0 left-0 w-screen h-screen flex flex-col justify-between p-3 md:hidden md:bg-none"
    >
      <nav className="text-[#DEC544] flex flex-col gap-3 text-xl">
        <div className="flex justify-end p-4">
          <FaTimes onClick={() => setOpenLinks(false)} />
        </div>
        <div className="flex justify-center">
          <section>
            {navlinks.map((link) => (
              <Link
                onClick={() => setOpenLinks(false)}
                href={link.path}
                key={link.id}
                className="text-xl p-2 sm:text-2xl"
              >
                <motion.div
                  variants={item}
                  className={
                    pathname === link.path
                      ? "bg-[#DEC544] text-black rounded-full p-1 text-center"
                      : ""
                  }
                >
                  {link.title}
                </motion.div>
              </Link>
            ))}
          </section>
        </div>
      </nav>
    </motion.main>
  );
};

export default NavLinks;
