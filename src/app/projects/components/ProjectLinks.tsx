"use client";
import { Figma, Github, LinkIcon } from "lucide-react";
import Link from "next/link";

interface ProjectLinksProps {
  figma_link?: string;
  github_link?: string;
  demo_link?: string;
  category?: string[];
  stack?: string[];
}

export default function ProjectLinks({
  figma_link,
  github_link,
  demo_link,
  category,
  stack,
}: ProjectLinksProps) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        {category && (
          <div className="flex gap-2">
            {category.map((cat, i) => (
              <span className="text-xs bg-[#fafafa] dark:bg-[#2a2929] dark:text-white text-[#6d6e11] skew-y-2 sm:p-1 lg:text-sm" key={i}>{cat}</span>
            ))}
          </div>
        )}
        {stack && (
          <div className="flex gap-2">
            {stack.map((st, i) => (
              <span className="text-xs bg-[#fafafa] dark:bg-[#2a2929] dark:text-white text-[#6d6e11] skew-y-2 sm:p-1 lg:text-sm" key={i}>{st}</span>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center">
        {demo_link && (
          <Link
            href={demo_link || "/"}
            target="_blank"
            className="hover:text-[#e7ee1a]"
          >
            {demo_link && <LinkIcon size={18} />}
          </Link>
        )}
        {figma_link && (
          <Link
            href={figma_link || "/"}
            target="_blank"
            className="hover:text-[#e7ee1a]"
          >
            {figma_link && <Figma size={18} />}
          </Link>
        )}
        {github_link && (
          <Link
            href={github_link || "/"}
            target="_blank"
            className="hover:text-[#e7ee1a]"
          >
            {github_link && <Github size={18} />}
          </Link>
        )}
      </div>
    </div>
  );
}
