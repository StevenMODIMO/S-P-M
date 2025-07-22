"use client";
import {
  FaGithub,
  FaFacebook,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";
import { socialLinks } from "@/lib/data";
import { motion } from "motion/react";

const container: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      delayChildren: 0.6,
      staggerChildren: 0.5,
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

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-[#DEC544] text-center p-4"
    >
      <section className="flex justify-center gap-6 m-2">
        {socialLinks.map((sl) => (
          <Link key={sl.id} href={sl.path} target="_blank" className="text-2xl">
            <motion.div variants={item} className="sm:text-white">
              {sl.name === "Github" ? (
                <FaGithub />
              ) : sl.name === "Facebook" ? (
                <FaFacebook />
              ) : sl.name === "Twitter" ? (
                <FaXTwitter />
              ) : sl.name === "Linkedin" ? (
                <FaLinkedinIn />
              ) : (
                ""
              )}
            </motion.div>
          </Link>
        ))}
      </section>
      <motion.p
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          delay: 2,
          ease: "easeInOut",
        }}
        className="text-white"
      >
        &copy; Copyright {year}, StevenMODIMO
      </motion.p>
      <Link href="/dashboard">Dashboard View</Link>
    </motion.div>
  );
};

export default Footer;
