"use client";
import Link from "next/link";
import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { SiCodewars, SiUpwork } from "react-icons/si";

export default function Hero() {
  return (
    <div className="text-[#333333] dark:text-white">
      <Container>
        <header className="flex flex-col gap-8">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b font-bold text-5xl from-[#E7EE1A] to-[#666666] sm:text-6xl md:text-7xl lg:text-8xl">
            Unlocking possibilities through{" "}
            <span className="text-[#333333] dark:text-white">
              {"{"}code{"}"}
            </span>
            .
          </h1>
          <p className="font-m text-xl sm:text-3xl">
            Welcome to my digital realm, where creativity meets functionaity.
            Join me on a journey of innovation and problem solving.
          </p>
        </header>
        <section className="flex items-center gap-5 mt-4">
          <Link href="https://github.com/StevenMODIMO" target="_blank">
            <FaGithub className="text-xl sm:text-2xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/steven-modimo-912521204/"
            target="_blank"
          >
            <FaLinkedin className="text-xl sm:text-2xl" />
          </Link>
          <Link href="https://x.com/Steve_Modimo" target="_blank">
            <FaXTwitter className="text-xl sm:text-2xl" />
          </Link>
          <Link
            href="https://www.codewars.com/users/StevenMODIMO"
            target="_blank"
          >
            <SiCodewars className="text-xl sm:text-2xl" />
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~010260cfee91eda24e"
            target="_blank"
          >
            <SiUpwork className="text-xl sm:text-2xl" />
          </Link>
        </section>
      </Container>
    </div>
  );
}
