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

const inter = Inter({ subsets: ["latin"] });

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("# Start Editing!!");
  const [tab, setTab] = useState(0);
  return (
    <main className="h-[95vh] bg-black flex">
      <textarea
        className="w-[50vw] h-[95%] outline-none p-2 text-white bg-[#1a1a1a]"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <div className="bg-black text-white h-[95%] w-[50vw] overflow-auto p-3">
        <Markdown
          className={`${inter.className} prose`}
          remarkPlugins={[remarkGfm, remarkToc]}
          rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeSlug]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              const codeRef = useRef<HTMLElement>(null);
              return match ? (
                <div className="bg-red-500">
                  <div className="bg-red-500">
                    <SyntaxHighlighter
                      ref={codeRef || undefined}
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
                <a className="no-underline text-sm text-blue-300 hover:text-yellow-300" {...rest} />
              );
            },
            h1(props) {
              const { node, ...rest } = props;
              return <h1 className="text-[#dec544] text-center" {...rest} />;
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
      </div>
    </main>
  );
}
