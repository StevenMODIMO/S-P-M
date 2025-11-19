"use client";

import { marked } from "marked";

export default function Description({ description }: { description: string }) {
  return (
    <div className="my-4">
      <div
        className="prose max-w-full lg:max-w-4xl prose-headings:text-[#393a1f] dark:prose-headings:text-white prose-ol:text-[#393a1f] dark:prose-ol:text-white prose-strong:text-[#393a1f] dark:prose-strong:text-white prose-ul:text-[#393a1f] dark:prose-ul:text-white text-[#393a1f] dark:text-white"
        dangerouslySetInnerHTML={{ __html: marked(description) }}
      />
    </div>
  );
}
