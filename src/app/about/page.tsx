import Expertise from "../(components)/Expertise";
import Testimony from "../(components)/Testimony";
import Image from "next/image";
import PageWrapper from "../(components)/PageWrapper";

export default function About() {
  return (
    <PageWrapper className="overflow-hidden">
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

{
  /* <div
        className={`max-w-4xl mx-auto px-4 flex flex-col justify-center items-center gap-8`}
      >
        <h1 className={`text-4xl sm:text-6xl font-bold text-center`}>
          Unlocking Possibilities through Code{" "}
          <span className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
            <Image
              alt="Terminal Icon"
              src="/terminal.svg"
              width={20}
              height={20}
            />
          </span>
        </h1>
        <p className="text-lg text-center">
          Welcome to my digital realm, where creativity meets functionality.
          Join me on a journey of Innovation and Problem Solving.
        </p>
      </div>
      <div className="text-[#DEC544] h-screen mt-24" id="about">
        <Image
          alt="teminal-icon"
          src="/1698083088330.jpg"
          width={200}
          height={200}
          className="mx-auto rounded"
        />
        <p className="text-center text-xl my-12">
          Hello, I'm Steven Modimo, a passionate full stack web developer. I
          thrive on turning ideas into interactive experiences that leave a
          lasting impact.
        </p>
        <div className="h-screen p-2 mt-24">
          <h1 className="text-center text-3xl p-2">Why I love the web ?</h1>
          <p className="text-center text- p-2">
            I love building Stuffs for the web Building solutions for the web
            offers unparalleled accessibility to a wide audience, setting it
            apart from native apps that often demand intricate installation and
            configuration procedures. With web-based applications, all it takes
            is a simple URL entry, and the service is instantly available at
            your fingertips. This seamless accessibility eliminates barriers and
            instantly connects users to the content they need, fostering a
            smoother and more user-centric experience.
          </p>
        </div>

        <section className="h-screen">
          <h1 className="text-center text-3xl p-2">/ My Expertise</h1>
          <ul className="grid items-center p-2 m-2">
            <li className="text-center p-4">Frontend Development</li>
            <li className="text-center p-4">Backend Development</li>
            <li className="text-center p-4">Full Stack Development</li>
            <li className="text-center p-4">Database Administration</li>
          </ul>
        </section>
      </div> */
}
