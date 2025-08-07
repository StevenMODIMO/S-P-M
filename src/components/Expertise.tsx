"use client";
import Container from "./Container";

export default function Expertise() {
  return (
    <div>
      <Container>
        <section className="text-[#393a1f] dark:text-white flex flex-col gap-3">
          <h1 className="font-semibold text-2xl text-[#393a1f] dark:text-[#E7EE1A]">
            My Expertise
          </h1>
          <p>
            I <span className="text-[#9CA600] dark:text-[#E7EE1A]">build</span>{" "}
            with purpose,{" "}
            <span className="text-[#9CA600] dark:text-[#E7EE1A]">design</span>{" "}
            with intent, and{" "}
            <span className="text-[#9CA600] dark:text-[#E7EE1A]">code</span>{" "}
            with clarity.
          </p>
        </section>
      </Container>
    </div>
  );
}
