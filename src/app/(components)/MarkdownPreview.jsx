"use client";
import { useState, useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import { Inter, Russo_One } from "next/font/google";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const inter = Inter({ subsets: ["latin"] });

export default function MarkdownPreview({ markdown }) {
  return (
    <main>
      <Markdown
        className={`${inter.className} prose overflow-auto h-[70vh] max-w-full`}
        remarkPlugins={[remarkGfm, remarkToc]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeSlug]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <div>
                <div>
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={atomOneDark}
                    showInlineLineNumbers={true}
                    wrapLongLines={true}
                  />
                </div>
              </div>
            ) : (
              <code
                {...rest}
                className="bg-[#1a1a1a] p-1 rounded text-yellow-200"
              >
                {children}
              </code>
            );
          },
          a(props) {
            const { node, ...rest } = props;
            return (
              <a
                className="no-underline text-sm text-blue-300 hover:text-yellow-300"
                {...rest}
              />
            );
          },
          h1(props) {
            const { node, ...rest } = props;
            return <h1 className="text-[#dec544]" {...rest} />;
          },
          h2(props) {
            const { node, ...rest } = props;
            return <h3 className="text-[#dec544]" {...rest} />;
          },
          h3(props) {
            const { node, ...rest } = props;
            return <h3 className="text-[#dec544]" {...rest} />;
          },
          h4(props) {
            const { node, ...rest } = props;
            return <h4 className="text-[#dec544]" {...rest} />;
          },
          p(props) {
            const { node, ...rest } = props;
            return <p className="text-white" {...rest} />;
          },
          ul(props) {
            const { node, ...rest } = props;
            return <ul className="text-white" {...rest} />;
          },
          strong(props) {
            const { node, ...rest } = props;
            return <strong className="text-white font-bold" {...rest} />;
          },
          blockquote(props) {
            const { node, ...rest } = props;
            return <blockquote className="text-white font-bold" {...rest} />;
          },
        }}
      >
        {markdown}
      </Markdown>
    </main>
  );
}
