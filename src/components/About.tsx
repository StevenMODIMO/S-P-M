"use client";
import Container from "./Container";
import Header from "./ui/Header";

export default function About() {
  return (
    <div>
      <Container>
        <div id="about" className="flex flex-col gap-4">
          <header className="flex flex-col gap-5">
            <Header className="text-[#393a1f] dark:text-white">About me</Header>
            <p className="dark:text-white text-xl">
              Hello, I'm <span className="text-[#E7EE1A]">Steven Modimo</span>,
              a passionate, driven and determined web developer. I thrive on
              turning ideas into interactive experiences that leave a lasting
              impact.
            </p>
          </header>
          <section className="dark:text-white flex flex-col gap-3">
            <h1 className="font-semibold text-2xl text-[#393a1f] dark:text-[#E7EE1A]">
              Why the Web?
            </h1>
            <p>
              This is what makes <span>web development</span> more than just{" "}
              <span className="text-[#E7EE1A]">
                {"{"}code{"}"}
              </span>{" "}
              for me
            </p>
          </section>
        </div>
      </Container>
      <div className="mt-5 text-white bg-[#333333] lg:w-[70%] lg:mx-auto">
        <Container className="text-sm py-6 flex flex-col gap-3 sm:text-lg md:text-center">
          <p>
            Building solutions for the web offers unparalleled accessibility to
            a wide audience, setting it apart from native apps that often demand
            intricate installation and configuration procedures. With web-based
            applications, all it takes is a simple{" "}
            <span className="text-[#E7EE1A]">URL</span> entry, and the service
            is instantly available at your fingertips.
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
