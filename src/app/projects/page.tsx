import { Metadata } from "next";
import { Russo_One } from "next/font/google";
import { LiaPoopSolid } from "react-icons/lia";
import { upcomingProjects } from "../data/data";
import { FaChartArea } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { MdOndemandVideo, MdOutlineCookie } from "react-icons/md";
import { TbDimensions } from "react-icons/tb";
import { GoDiamond } from "react-icons/go";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Projects",
};

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

export default function Projects() {
  return (
    <main className="bg-[#141212] h-full text-[#DEC544] md:-mt-8">
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
      <section className="p-3 sm:grid grid-cols-2 lg:w-[60%] lg:mx-auto">
        {upcomingProjects.map((project) => {
          return (
            <main key={project.id} className="bg-[#0f0d0d] m-2 p-2 rounded-lg">
              <header className="text-white">
                {project.name === "Project Management Tool" ? (
                  <FaChartArea className="text-2xl" />
                ) : project.name === "E-learning Platform" ? (
                  <IoSchool className="text-2xl" />
                ) : project.name === "Video Streaming Application" ? (
                  <MdOndemandVideo className="text-2xl" />
                ) : project.name === "A.I Personalized Recipe Generator" ? (
                  <MdOutlineCookie className="text-2xl" />
                ) : project.name === "Interactive 3D Portfolio" ? (
                  <TbDimensions className="text-2xl" />
                ) : (
                  ""
                )}
                <h1 className={`${russoOne.className} text-lg`}>
                  {project.name}
                </h1>
              </header>
              <section>
                {project.features.map((f, index) => {
                  return (
                    <ul key={index} className="flex items-center gap-1 text-sm">
                      <GoDiamond className="text-xs text-white" />
                      <li>{f}</li>
                    </ul>
                  );
                })}
              </section>
            </main>
          );
        })}
      </section>
      <footer className="w-fit flex flex-col items-center text-center m-3 mx-auto text-white text-lg">
        <p>
          Or you can visit my{" "}
          <span className="text-[#dec544]">Old Portfolio</span> to explore some
          projects. Note that this projects put focus on functionality rather
          than design or user experience.
        </p>
        <Link
          href="https://steven-modimo.onrender.com/projects"
          target="_blank"
          className="bg-[#0f0d0d] p-1 rounded text-white"
        >
          Visit
        </Link>
      </footer>
    </main>
  );
}
