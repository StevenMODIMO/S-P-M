"use client";
import { useState, useRef } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import { Inter } from "next/font/google";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GoDiamond } from "react-icons/go";

const inter = Inter({ subsets: ["latin"] });

export default function MarkdownPreview({ markdown }) {
  return (
    <main>
      <Markdown
        className={`${inter.className} p-3 sm:max-w-[70%] sm:mx-auto md:max-w-[60%]`}
        remarkPlugins={[remarkGfm, remarkToc]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeSlug]}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <div className="bg-[#353434]">
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={children}
                  language="javascript"
                  style={atomOneDark}
                  showInlineLineNumbers={true}
                  wrapLongLines={true}
                  wrapLines={true}
                />
              </div>
            ) : (
              <code
                {...rest}
                className="bg-[#2b2a2a] text-sm p-1 text-yellow-200"
              >
                {children}
              </code>
            );
          },
          a(props) {
            const { node, ...rest } = props;
            return (
              <a
                className="no-underline text-sm text-blue-500 hover:text-yellow-300"
                {...rest}
              />
            );
          },
          h1(props) {
            const { node, ...rest } = props;
            return (
              <h1
                className="text-white text-start text-4xl font-bold my-3"
                {...rest}
              />
            );
          },
          h2(props) {
            const { node, ...rest } = props;
            return (
              <h2
                className="text-[#dec544] text-start text-xl my-3"
                {...rest}
              />
            );
          },
          h3(props) {
            const { node, ...rest } = props;
            return <h3 className="text-white my-2 text-lg" {...rest} />;
          },
          h4(props) {
            const { node, ...rest } = props;
            return (
              <h4
                className="text-white text-sm p-1 my-6 border-l-4 border-[#dec544]"
                {...rest}
              />
            );
          },
          p(props) {
            const { node, ...rest } = props;
            return <p className="text-gray-200 py-3" {...rest} />;
          },
          ul(props) {
            const { node, ...rest } = props;
            return (
              <ul className="text-white flex flex-col gap-1 ml-3" {...rest} />
            );
          },
          li(props) {
            const { node, children, ...rest } = props;
            return (
              <li className="flex gap-1 items-center" {...rest}>
                <GoDiamond className="text-[8px] text-white lg:text-[10px]" />
                {children}
              </li>
            );
          },
          strong(props) {
            const { node, ...rest } = props;
            return <strong className="text-white font-bold" {...rest} />;
          },
          blockquote(props) {
            const { node, ...rest } = props;
            return <blockquote className="text-white font-bold" {...rest} />;
          },
          em(props) {
            const { node, ...rest } = props;
            return <em className="text-[#dec544] font-bold" {...rest} />;
          },
        }}
      >
        {markdown}
      </Markdown>
    </main>
  );
}
