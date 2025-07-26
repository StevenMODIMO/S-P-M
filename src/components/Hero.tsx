"use client";

import Container from "./Container";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { SiCodewars } from "react-icons/si";

export default function Hero() {
  return (
    <div className="text-[#333333] dark:text-white test">
      <Container>
        <header className="flex flex-col gap-8">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b font-bold text-4xl from-[#E7EE1A] to-[#666666]">
            Unlocking possibilities through{" "}
            <span className="text-[#333333] dark:text-white">
              {"{"}code{"}"}
            </span>
            .
          </h1>
          <p className="font-medium text-xl">
            Welcome to my digital realm, where creativity meets functionaity.
            Join me on journey of innovation and problem solving.
          </p>
        </header>
        <section className="flex items-center gap-6 mt-4">
          <div className="flex flex-col items-center gap-2">
            <FaGithub className="w-6 h-6" />
            <span className="text-sm">Github</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <FaUpwork className="w-8 h-8 text-green-500" />
            <span className="text-sm">Upwork</span>
          </div>
          <div className="flex items-center flex-col gap-2">
            <FaXTwitter className="w-6 h-6" />
            <span>X</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <SiCodewars className="w-6 h-6 text-red-800" />
            <span>Codewars</span>
          </div>
        </section>
      </Container>
    </div>
  );
}
