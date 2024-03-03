"use client";
import {
  FaDatabase,
  FaReact,
  FaServer,
  FaArrowRightLong,
} from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { AiFillDatabase, AiOutlineApi } from "react-icons/ai";
import { BsDatabaseFillAdd, BsGlobe } from "react-icons/bs";
import { motion } from "framer-motion";
import { myexpertise } from "../data/data";

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
};

export default function Expertise() {
  return (
    <main className="text-[#DEC544]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="sm:grid grid-cols-2 lg:grid-cols-4"
      >
        {myexpertise.map((expert) => {
          return (
            <motion.main
              variants={children}
              key={expert.id}
              className="m-3 rounded-t-lg p-2 my-12 bg-[#302f2a]"
            >
              <h1 className="text-center text-xl text-white sm:p-3 md:p-2">
                {expert.role}
              </h1>
              <p className="text-center p-2">{expert.description}</p>
              {expert.role === "Frontend Developement" ? (
                <div className="flex justify-center gap-3">
                  <FaReact className="text-blue-500 text-3xl m-1" />
                  <SiNextdotjs className="text-purple-500 text-3xl m-1" />
                </div>
              ) : expert.role === "Backend Developement" ? (
                <div className="flex justify-center gap-3">
                  <FaDatabase className="text-green-500 text-3xl m-1" />
                  <AiOutlineApi className="text-yellow-500 text-3xl m-1" />
                </div>
              ) : expert.role === "Database Management" ? (
                <div className="flex justify-center gap-3">
                  <BsDatabaseFillAdd className="text-red-500 text-3xl m-1" />
                </div>
              ) : expert.role === "FullStack Developement" ? (
                <div className="flex justify-center gap-3">
                  <FaServer className="text-purple-300 text-3xl m-1" />
                  <FaArrowRightLong className="text-yellow-400 text-3xl m-1" />
                  <BsGlobe className="text-white text-3xl m-1" />
                </div>
              ) : (
                ""
              )}
            </motion.main>
          );
        })}
      </motion.div>
    </main>
  );
}
