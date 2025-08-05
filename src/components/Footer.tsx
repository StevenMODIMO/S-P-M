"use client";
import {
  FaGithub,
  FaFacebook,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#333333] text-white text-center text-sm my-6 p-4 flex flex-col gap-2">
      <p>
        Made with <span className="text-red-500">❤</span> by Steven Modimo
      </p>
      <p>&copy; 2025. Steven Modimo - Full Stack Web Developer</p>
    </div>
  );
};

export default Footer;
