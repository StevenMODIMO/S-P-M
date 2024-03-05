"use client";
import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaPython,
  FaNodeJs,
  FaWindows,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiDjango,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiVisualstudiocode,
  SiFirebase,
  SiTypescript,
  SiJest,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { GrGraphQl } from "react-icons/gr";
import { mytools } from "../data/data";
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

const children = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: {
    scale: 1.1,
  },
};

export default function Tools() {
  return (
    <main className="text-white p-6">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-3 gap-8 sm:grid-cols-5 sm:gap-5 md:gap-3 lg:grid-cols-11"
      >
        {mytools.map((tool) => {
          return (
            <motion.main
              variants={children}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              key={tool.id}
              className="flex items-center gap-1 bg-[#302f2a] w-fit p-1 rounded-lg mx-1 cursor-pointer sm:p-2"
            >
              <div className="text-lg sm:text-2xl md:text-3xl">
                {tool.name === "HTML" ? (
                  <FaHtml5 className="text-red-400" />
                ) : tool.name === "CSS" ? (
                  <FaCss3 className="text-blue-400" />
                ) : tool.name === "JavaScript" ? (
                  <IoLogoJavascript className="text-yellow-400" />
                ) : tool.name === "TypeScript" ? (
                  <SiTypescript className="text-blue-400" />
                ) : tool.name === "React" ? (
                  <FaReact className="text-blue-400" />
                ) : tool.name === "Graphql" ? (
                  <GrGraphQl className="text-purple-600" />
                ) : tool.name === "NodeJS" ? (
                  <FaNodeJs className="text-green-400" />
                ) : tool.name === "NextJS" ? (
                  <TbBrandNextjs />
                ) : tool.name === "SQL" ? (
                  <BsFiletypeSql />
                ) : tool.name === "Firebase" ? (
                  <SiFirebase className="text-yellow-400" />
                ) : tool.name === "Tailwind" ? (
                  <SiTailwindcss className="text-blue-400" />
                ) : tool.name === "Python" ? (
                  <FaPython className="text-yellow-400" />
                ) : tool.name === "Django" ? (
                  <SiDjango className="text-green-400" />
                ) : tool.name === "Express" ? (
                  <SiExpress />
                ) : tool.name === "Git" ? (
                  <FaGitAlt className="text-red-400" />
                ) : tool.name === "Jest" ? (
                  <SiJest className="text-purple-400" />
                ) : tool.name === "MongoDB" ? (
                  <SiMongodb className="text-green-500" />
                ) : tool.name === "MySql" ? (
                  <SiMysql className="text-blue-400" />
                ) : tool.name === "Postgres" ? (
                  <BiLogoPostgresql className="text-blue-400" />
                ) : tool.name === "Redis" ? (
                  <SiRedis className="text-red-500" />
                ) : tool.name === "VsCode" ? (
                  <SiVisualstudiocode className="text-blue-600" />
                ) : tool.name === "Windows" ? (
                  <FaWindows className="text-blue-400" />
                ) : (
                  ""
                )}
              </div>
              <p className="text-sm">{tool.name}</p>
            </motion.main>
          );
        })}
      </motion.div>
    </main>
  );
}