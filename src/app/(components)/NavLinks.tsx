"use client";
import React from "react";
import Link from "next/link";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import navlinks from "../data/data";
import Image from "next/image";

interface NavLinksProps {
  setOpenLinks: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ setOpenLinks }) => {
  return (
    <motion.main
      initial={{ x: -400 }}
      animate={{ x: 0 }}
      exit={{ x: -400 }}
      transition={{
        ease: "easeInOut",
        x: { duration: 0.3 },
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }}
      className="bg-black/95 absolute top-0 left-0 w-screen h-screen flex flex-col justify-between p-3 md:hidden"
    >
      <nav className="text-[#DEC544] flex flex-col gap-3 text-xl">
        <div className="flex justify-between">
          <Image
            src="/StevenMODIMO.svg"
            alt="steven-modimo-logo"
            width={150}
            height={100}
          />
          <FaTimes onClick={() => setOpenLinks(false)} />
        </div>
        {navlinks.map((link) => (
          <Link
            onClick={() => setOpenLinks(false)}
            href={link.path}
            key={link.id}
          >
            <motion.div initial={{ x: -400 }} animate={{ x: 0 }}>
              {link.title}
            </motion.div>
          </Link>
        ))}
      </nav>
      <Footer />
    </motion.main>
  );
};

export default NavLinks;
