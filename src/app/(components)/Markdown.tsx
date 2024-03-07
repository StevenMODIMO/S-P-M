"use client";

import { useState } from "react";
import { Lato } from "next/font/google";
import Markdown from "react-markdown";

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: "400",
});

export default function MarkdownEditor() {
  const [markdownContent, setMarkdownContent] = useState("");

  return (
    <main className={`${lato.className}`}>
      <header className="text-xl text-center">
        <h1>Markdown Editor</h1>
      </header>
      <div>
        <div className="w-1/2">
          <textarea
            className="border border-gray-300  p-2 w-full h-48 outline-none"
            value={markdownContent}
            onChange={(e) => setMarkdownContent(e.target.value)}
            placeholder="Write your markdown here..."
          />
        </div>
        <div className="w-1/2 ml-4">
          <div className="border border-gray-300 text-white p-2 h-48 overflow-y-auto">
            <Markdown>{markdownContent}</Markdown>
          </div>
        </div>
      </div>
    </main>
  );
}
