"use client";
import { projectsListings } from "@/lib/project-listings";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Header from "./ui/Header";
import {
  Code,
  BadgePlus,
  Recycle,
  FolderGit2,
  Figma,
  BookOpenText,
  Globe,
  Github,
} from "lucide-react";
import ProjectDetails from "./ProjectDetails";
import { useState } from "react";

export default function ProjectsFilter() {
  const [openDetails, setOpenDetails] = useState(false);
  return (
    <div className="text-[#393a1f] dark:text-white">
      <Container>
        <header className="flex flex-col gap-3 bg-[#fafafa] dark:bg-[#2a2929] shadow p-4">
          <div className="flex items-center gap-2">
            <FolderGit2 className="" />
            <Header className="text-4xl text-[#E7EE1A]">My Projects</Header>
          </div>
          <p className="text-xs text-[#393a1f] dark:text-[#E7EE1A] font-medium flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>CODE.</span>
            </span>
            <span className="dark:text-white flex items-center gap-2">
              <BadgePlus className="w-4 h-4" />
              <span>CREATE.</span>
            </span>{" "}
            <span className="flex items-center gap-2">
              <Recycle className="w-4 h-4" />
              <span>INNOVATE</span>
            </span>
          </p>
        </header>
      </Container>
    </div>
  );
}

{
  /* <div className="relative w-24 h-24">
                <Image src={project.icon} alt={project.title} fill={true} />
              </div> */
}
{
  /* <Header className="text-lg">{project.title}</Header> */
}
