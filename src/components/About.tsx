"use client";
import Container from "./Container";
import Header from "./ui/Header";
import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <div>
      <Container>
        <div id="about" className="scroll-mt-20 flex flex-col gap-4">
          <header className="lg:flex lg:items-center md:gap-2">
            <div className="flex flex-col gap-5 lg:w-[50%]">
              <Header className="text-5xl text-[#393a1f] dark:text-white">
                About me
              </Header>
              <p className="dark:text-white text-xl">
                Hello, I'm <span className="text-[#E7EE1A]">Steven Modimo</span>
                , a passionate, driven and determined web developer. I thrive on
                turning ideas into interactive experiences that leave a lasting
                impact.
              </p>
              <p className="dark:text-white text-xl">
                With a strong foundation in modern web technologies and a love
                for problem-solving, I approach each project with creativity and
                precision. Whether it’s crafting seamless user interfaces or
                optimizing backend performance, I’m committed to delivering
                solutions that truly make a difference.
              </p>
            </div>
            <div className="relative w-52 h-52 mx-auto my-4 sm:w-60 sm:h-60 lg:w-64 lg:h-64">
              {/* <div className="-skew-x-6 absolute top-2 left-2 w-full h-full border border-[#E7EE1A] dark:border-[#9CA600] rounded-lg dark:shadow-[#E7EE1A] shadow-xl"></div>
              <div className="-skew-x-6 absolute top-4 left-4 w-full h-full border border-[#E7EE1A] dark:border-[#9CA600] rounded-lg dark:shadow-[#E7EE1A] dark:shadow-md"></div>
              <div className="-skew-x-6 absolute top-6 left-6 w-full h-full border border-[#E7EE1A] dark:border-[#9CA600] rounded-lg dark:shadow-[#E7EE1A] dark:shadow-md shadow-2xl"></div>
              <div className="-skew-x-6 absolute top-8 left-8 w-full h-full border border-[#E7EE1A] dark:border-[#9CA600] rounded-lg dark:shadow-[#E7EE1A] dark:shadow-md"></div> */}
              <Image src="/modimo.jpg" alt="pic" fill className="rounded-lg" />
            </div>
          </header>
          <section className="dark:text-white flex flex-col gap-3">
            <h1 className="font-semibold text-2xl text-[#393a1f] dark:text-[#E7EE1A]">
              Why the Web?
            </h1>
            <p>
              This is what makes <span>web development</span> more than just{" "}
              <span className="text-[#9CA600] dark:text-[#E7EE1A]">
                {"{"}code{"}"}
              </span>{" "}
              for me
            </p>
          </section>
        </div>
      </Container>
      <div className="mt-5 text-[#393a1f] dark:text-white bg-[#fafafa] dark:bg-[#333333] lg:w-[70%] lg:mx-auto">
        <Container className="text-sm py-6 flex flex-col gap-3 sm:text-lg md:text-center lg:text-base">
          <p>
            Building solutions for the web offers unparalleled accessibility to
            a wide audience, setting it apart from native apps that often demand
            intricate installation and configuration procedures. With web-based
            applications, all it takes is a simple{" "}
            <span className="text-[#9CA600] dark:text-[#E7EE1A]">URL</span>{" "}
            entry, and the service is instantly available at your fingertips.
          </p>
          <p>
            This seamless accessibility eliminates barriers and instantly
            connects users to the content they need, fostering a smoother and
            more user-centric experience.
          </p>
        </Container>
      </div>
    </div>
  );
}
