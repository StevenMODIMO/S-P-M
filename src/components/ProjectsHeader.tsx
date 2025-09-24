"use client";

import Container from "./Container";
import Header from "./ui/Header";
import { Code, BadgePlus, Recycle, FolderGit2 } from "lucide-react";

export default function ProjectsHeader() {
  return (
    <div className="text-[#393a1f] dark:text-white">
      <Container className="flex flex-col gap-2">
        <header className="flex flex-col gap-3 bg-[#fafafa] dark:bg-[#2a2929] shadow p-4">
          <div className="flex items-center gap-2">
            <FolderGit2 className="" />
            <Header className="text-4xl text-[#E7EE1A]">My Projects</Header>
          </div>
          <p className="text-sm">
            Highlight of tools, skills and projects that reflect my
            problem-solving approach and ability to deliver functional,
            user-focused solutions.
          </p>
          <p className="text-xs text-[#393a1f] dark:text-[#E7EE1A] font-medium flex items-center gap-4">
            <span className="cursor-pointer flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>CODE.</span>
            </span>
            <span className="cursor-pointer dark:text-white flex items-center gap-2">
              <BadgePlus className="w-4 h-4" />
              <span>CREATE.</span>
            </span>{" "}
            <span className="cursor-pointer flex items-center gap-2">
              <Recycle className="w-4 h-4" />
              <span>INNOVATE</span>
            </span>
          </p>
        </header>
      </Container>
    </div>
  );
}
