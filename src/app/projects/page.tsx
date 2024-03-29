import { Metadata } from "next";
import { Russo_One } from "next/font/google";
import { LiaPoopSolid } from "react-icons/lia";

export const metadata: Metadata = {
  title: "My Projects",
};

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

export default function Projects() {
  return (
    <main className="bg-[#141212] h-screen text-[#DEC544] md:-mt-8">
      <header
        className={`${russoOne.className} flex gap-1 items-center justify-center`}
      >
        <p>Oops!</p>
        <div className="flex gap-1">
          <LiaPoopSolid className="text-white" />
          <LiaPoopSolid className="text-white" />
        </div>
        <p>Nothing to see here.</p>
      </header>
      <p className="text-center text-lg">
        But here are some cool stuffs that I am planning to build.
      </p>
      <p className="text-center text-lg">
        Or you can visit my old portfolio to explore some normal but not that
        great projects.
      </p>
      <header className="bg-[#0f0d0d] h-80 w-[90%] p-2 mx-auto text-white rounded-lg">
        Hello
      </header>
    </main>
  );
}
