"use client";
import { useState } from "react";
import Container from "./Container";
import Header from "@/components/ui/Header";
import Link from "next/link";
import { testimonials } from "@/lib/data";

// Proof link to Upwork profile
const upworkLink = "https://www.upwork.com/freelancers/~010260cfee91eda24e";

export default function Testimony() {
  return (
    <div
      id="testimonials"
      className="bg-[#fafafa] dark:bg-[#333333] mt-5 text-[#393a1f] dark:text-white lg:w-[70%] lg:mx-auto"
    >
      <Container className="py-6">
        <header className="flex flex-col gap-2 items-center scroll-mt-20">
          <p>
            Let’s switch perspectives. Time to hear from the people I’ve worked
            with.
          </p>
          <Header className="text-center text-5xl">Testimonials</Header>
        </header>

        <section className="mt-8 flex flex-col gap-6">
          {testimonials.map((t) => (
            <TestimonyCard key={t.id} testimony={t} />
          ))}
        </section>
      </Container>
    </div>
  );
}

function TestimonyCard({ testimony }: { testimony: (typeof testimonials)[0] }) {
  const [expanded, setExpanded] = useState(false);

  // Split feedback into words
  const words = testimony.feedback.split(" ");
  const preview =
    words.slice(0, 20).join(" ") + (words.length > 20 ? "..." : "");

  return (
    <div className="dark:bg-[#262626] text-[#393a1f] dark:text-white rounded-md p-6 shadow">
      <h3 className="text-xl font-semibold mb-2 text-[#393a1f] dark:text-white">
        {testimony.title}
      </h3>

      <p className="text-sm leading-relaxed whitespace-pre-line mb-3">
        {expanded ? testimony.feedback : preview}
      </p>

      {words.length > 20 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#393a1f] dark:text-[#E7EE1A] hover:underline text-sm mb-3"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}

      <p className="mb-3">⭐ {testimony.stars} / 5</p>

      <Link
        href={upworkLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#393a1f] dark:text-[#E7EE1A] hover:underline"
      >
        Proof on Upwork →
      </Link>
    </div>
  );
}
