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

export default function Tools() {
  return (
    <main className="text-white grid grid-cols-3 p-6">
      <div>
        {mytools.map((tool) => {
          return (
            <main key={tool.id}>
              {tool.name === "HTML" ? (
                <FaHtml5 />
              ) : tool.name === "CSS" ? (
                <FaCss3 />
              ) : tool.name === "JavaScript" ? (
                <IoLogoJavascript />
              ) : tool.name === "TypeScript" ? (
                <SiTypescript />
              ) : tool.name === "React" ? (
                <FaReact />
              ) : tool.name === "Graphql" ? (
                <GrGraphQl />
              ) : tool.name === "NodeJS" ? (
                <FaNodeJs />
              ) : tool.name === "NextJS" ? (
                <TbBrandNextjs />
              ) : tool.name === "SQL" ? (
                <BsFiletypeSql />
              ) : tool.name === "Firebase" ? (
                <SiFirebase />
              ) : tool.name === "TailwindCSS" ? (
                <SiTailwindcss />
              ) : tool.name === "Python" ? (
                <FaPython />
              ) : tool.name === "Django" ? (
                <SiDjango />
              ) : tool.name === "Express" ? (
                <SiExpress />
              ) : tool.name === "Git" ? (
                <FaGitAlt />
              ) : tool.name === "Jest" ? (
                <SiJest />
              ) : tool.name === "MongoDB" ? (
                <SiMongodb />
              ) : tool.name === "MySql" ? (
                <SiMysql />
              ) : tool.name === "Postgres" ? (
                <BiLogoPostgresql />
              ) : tool.name === "Redis" ? (
                <SiRedis />
              ) : tool.name === "VsCode" ? (
                <SiVisualstudiocode />
              ) : tool.name === "Windows" ? (
                <FaWindows />
              ) : (
                ""
              )}
              <p>{tool.name}</p>
            </main>
          );
        })}
      </div>
    </main>
  );
}
