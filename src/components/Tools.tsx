"use client";
import Container from "./Container";
import Link from "next/link";

export default function Tools() {
  return (
    <div className="mt-5 text-white bg-[#333333] lg:w-[70%] lg:mx-auto">
      <Container className="text-sm py-6 flex flex-col gap-3 sm:text-lg md:text-center">
        <p>
          Behind every great experience and scalable system is a well-curated
          set of <span className="text-[#E7EE1A]">[tools]</span>. From{" "}
          <span className="text-[#E7EE1A]">frontend</span> design to{" "}
          <span className="text-[#E7EE1A]">backend</span> logic — and everything
          in between.
        </p>
        <p>
          I leverage proven technologies that help me build efficiently, iterate
          fast, and deliver high-quality results. Want a closer look? Here's
          what's in my toolbox. 👇
        </p>
        <Link
          href="/projects"
          className="bg-[#262626] text-[#E7EE1A] p-4 w-fit mx-auto rounded hover:bg-[#393a1f] transition-colors duration-300 mt-4 text-center text-sm md:text-base lg:text-lg"
        >
          See the Stack in Action
        </Link>
      </Container>
    </div>
  );
}
