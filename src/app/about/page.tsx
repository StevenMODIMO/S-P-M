import Expertise from "../(components)/Expertise";
import Image from "next/image";
import Tools from "../(components)/Tools";
import { Metadata } from "next";
import { Russo_One } from "next/font/google";

export const metadata: Metadata = {
  title: 'About',
  description: 'About Me Steven Modimo'
}

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

export default function About() {
  return (
      <main className="bg-black -mt-8">
        <section className="text-start text-xl mt-28 w-60 mx-auto text-[#DEC544] sm:text-white sm:w-80 md:w-96 md:text-2xl">
          <Image
            alt="spm"
            src="/1698083088330.jpg"
            width={250}
            height={250}
            className="rounded-full mx-auto sm:p-4"
          />
          <p className={`${russoOne.className} mt-12 sm:text-2xl sm:mt-10 lg:mt-14`}>
            Hello, I'm Steven <span className="text-white">Modimo</span>, a
            passionate full stack web developer. I thrive on turning ideas into
            interactive experiences that leave a lasting impact.
          </p>
        </section>
        <section className="p-6 mt-4 md:mt-8 lg:mt-24">
          <header>
            <h1 className="text-center font-bold text-white text-2xl ">
              / My Expertise
            </h1>
            <Expertise />
          </header>
        </section>
        <section className="p-6 mt-4 md:mt-8 lg:mt-24">
          <header>
            <h1 className="text-center font-bold text-white text-2xl ">
              / My Toolbox
            </h1>
            <Tools />
          </header>
        </section>
      </main>
  );
}
