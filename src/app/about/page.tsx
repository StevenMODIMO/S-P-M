import Expertise from "../(components)/Expertise";
import Testimony from "../(components)/Testimony";
import Image from "next/image";
import PageWrapper from "../(components)/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <main className="bg-black -mt-8">
        <section className="text-start text-xl mt-28 w-60 mx-auto text-[#DEC544] sm:text-white sm:w-80 md:w-96 md:text-2xl">
          <Image
            alt="spm"
            src="/1698083088330.jpg"
            width={250}
            height={250}
            className="rounded-full mx-auto sm:p-4"
          />
          <p className="mt-12 sm:text-2xl sm:mt-10 lg:mt-14">
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
        <section className="p-6 mt-4 md:mt-8">
          <header>
            <h1 className="text-center font-bold text-white text-2xl ">
              / Testimony
            </h1>
            <Testimony />
          </header>
        </section>
      </main>
    </PageWrapper>
  );
}