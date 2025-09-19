"use client";
import Header from "@/components/ui/Header";
import { File } from "lucide-react";

export default function ProjectForm() {
  return (
    <div>
      <header className="flex items-center justify-center gap-2 cursor-pointer">
        <File size={20} />
        <Header className="text- text-[#393a1f]">Add New Project</Header>
      </header>
    </div>
  );
}
