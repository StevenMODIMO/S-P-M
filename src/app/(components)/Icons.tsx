"use client";
import React from "react";
import { FaCode, FaCodeBranch, FaLaptopCode } from "react-icons/fa";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Icons = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-[#DEC544] flex text-2xl gap-5 p-3 w-60 sm:w-96 md:w-[500px] sm:text-black lg:w-[700px] lg:text-4xl"
    >
      <motion.div variants={item} whileHover={{ scale: 1.5}}>
        <FaCode />
      </motion.div>
      <motion.div variants={item} whileHover={{ scale: 1.5}}>
        <FaCodeBranch />
      </motion.div>
      <motion.div variants={item} whileHover={{ scale: 1.5}}>
        <FaLaptopCode />
      </motion.div>
      <motion.div variants={item} whileHover={{ scale: 1.5}}>
        <PiBracketsCurlyBold />
      </motion.div>
    </motion.div>
  );
};

export default Icons;
