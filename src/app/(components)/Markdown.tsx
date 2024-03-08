"use client";

import { useState } from "react";
import { Lato } from "next/font/google";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("# Start Here..");

  return (
    <main className={`${lato.className} text-white`}>
      <header className="text-center">
        <h1>Welcome to your markdown editor</h1>
      </header>
      <section className="flex gap-2">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Start markdowning here."
          className="w-[50%] h-[500px] outline-none bg-[#1a1a1a] text-white"
        ></textarea>
        <ReactMarkdown
          className="w-[50%] h-[500px] bg-[#1a1a1a] text-white p-3 overflow-auto"
          rehypePlugins={[rehypeHighlight, rehypeSlug]}
          remarkPlugins={[remarkGfm]}
        >
          {markdown}
        </ReactMarkdown>
      </section>
    </main>
  );
}
