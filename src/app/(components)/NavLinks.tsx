"use client";
import React from "react";
import Link from "next/link";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface NavLinksProps {
  setOpenLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ setOpenLinks }) => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ x: -400 }}
        animate={{ x: 0 }}
        exit={{ x: 400 }}
        transition={{
          ease: "easeInOut",
          x: { duration: 0.3 },
          delayChildren: 0.3,
          staggerChildren: 0.2,
        }}
        className="bg-black/90 absolute top-0 left-0 w-screen h-screen flex flex-col justify-between p-3"
      >
        <nav className="text-[#DEC544] flex flex-col gap-3 text-4xl">
          <div className="flex justify-end">
            <FaTimes onClick={() => setOpenLinks(false)} />
          </div>
          <Link href="#about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/projects">Projects</Link>
        </nav>
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
};

export default NavLinks;
