"use client";
import {
  FaGithub,
  FaFacebook,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div
      className={`shadow bg-[#fafafa] dark:shadow-md dark:bg-[#333333] text-[#393a1f] dark:text-white text-center text-sm my-6 p-4 flex flex-col gap-2 lg:w-[70%] lg:mx-auto ${
        pathname === "/dashboard" && "hidden"
      }`}
    >
      <p>
        Made with <span className="text-red-500">❤</span> by Steven Modimo
      </p>
      <p>
        &copy; {new Date().getFullYear()}. Steven Modimo - Full Stack Web
        Developer
      </p>
    </div>
  );
};

export default Footer;
