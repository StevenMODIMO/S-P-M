"use client";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("# Start Editing!!");
  return (
    <main className="h-full bg-black text-white">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <Markdown
        remarkPlugins={[remarkGfm, remarkToc]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize, rehypeSlug]}
        className="prose p-4"
      >
        {markdown}
      </Markdown>
    </main>
  );
}
