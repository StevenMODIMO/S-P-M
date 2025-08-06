"use client";
import Container from "./Container";
import Header from "@/components/ui/Header";
import Link from "next/link";

export default function Testimony() {
  return (
    <div id="testimonials" className="bg-[#333333] mt-5 text-white lg:w-[70%] lg:mx-auto">
      <Container className="py-6">
        <header className="flex flex-col gap-2 items-center">
          <p>
            Let’s switch perspectives.Time to hear from the people I’ve worked
            with.
          </p>
          <Header className="text-center">Testimonials</Header>
        </header>
      </Container>
    </div>
  );
}
