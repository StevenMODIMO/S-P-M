"use client";
import { useState } from "react";
import { Figma, Github, LinkIcon } from "lucide-react";
import Link from "next/link";

interface ProjectLinksProps {
  figma_link?: string;
  github_link?: string;
  demo_link?: string;
  category?: string[];
  stack?: string[];
  created_at: string;
}

export default function ProjectLinks({
  figma_link,
  github_link,
  demo_link,
  category,
  stack,
  created_at,
}: ProjectLinksProps) {
  function formatDate(isoString: string) {
    const date = new Date(isoString);
    return date
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "2-digit",
      })
      .replace(/, /g, "-")
      .replace(" ", "-");
  }
  return (
    <div className="flex flex-col gap-2 bg-[#fafafa] dark:bg-inherit p-2">
      <div className="flex flex-col gap-2">
        {category && (
          <div className="flex gap-1">
            {category.map((cat, i) => (
              <span
                className="text-[10px] p-1 rounded bg-[#fafafa] dark:bg-[#2a2929] dark:text-white text-[#6d6e11]"
                key={i}
              >
                #{cat}
              </span>
            ))}
          </div>
        )}
        {stack && (
          <div className="flex gap-1">
            {stack.map((st, i) => (
              <span
                className="text-[10px] p-1 w-fit rounded bg-[#fafafa] dark:bg-[#2a2929] dark:text-white text-[#6d6e11]"
                key={i}
              >
                #{st}
              </span>
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

        <p className="text-xs text-end">{formatDate(created_at)}</p>
      </div>
    </div>
  );
}
