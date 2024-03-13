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
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

export default function MarkdownEditor() {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("# Start Editing!!");
  const [tab, setTab] = useState(0);
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <main className="bg-black h-[95vh]">
      <header className="flex gap-1 mx-auto w-[80vw] justify-end p-3 cursor-pointer">
        <div
          className={`${inter.className} rounded-l text-white text- bg-[#1a1a1a] p-1`}
          onClick={() => setTab(0)}
        >
          Edit
        </div>
        <div
          className={`${inter.className} rounded-r text-white text- bg-[#1a1a1a] p-1`}
          onClick={() => setTab(1)}
        >
          Preview
        </div>
      </header>
      <section className="w-[80%] mx-auto">
        {tab === 0 ? (
          <main>
            <form className="flex flex-col bg-[#1a1a1a] p-2 w-[70%] rounded">
              <label className="m-1 w-fit rounded">
                <input
                  type="file"
                  accept="image/*"
                  value={undefined}
                  onChange={handleChange}
                  className="hidden"
                />
                <h1 className="p-1 text-black bg-[#dec544] w-fit text-sm">
                  Cover Image
                </h1>
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`${inter.className} rounded-t outline-none p-5 w-[100%] bg-[#1a1a1a] text-3xl text-white`}
                placeholder="Blog title....."
              />
              <textarea
                className={`${inter.className} rounded-b border-t border-[#dec544] bg-[#1a1a1a] outline-none text-white w-[100%] h-[60vh] p-8`}
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
              ></textarea>
              <button className="bg-[#dec544] p-1 m-1 text-black text-sm w-fit">
                Publish
              </button>
            </form>
          </main>
        ) : (
          <div>
            {file && <img src={file} alt={title} className="w-fit h-fit" />}
            <div className={`${russoOne.className} p-3 text-5xl text-white`}>
              {title}
            </div>
            <Markdown
              className={`${inter.className} prose`}
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
                  return (
                    <h1 className="text-[#dec544] text-center" {...rest} />
                  );
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
                  return (
                    <blockquote className="text-white font-bold" {...rest} />
                  );
                },
              }}
            >
              {markdown}
            </Markdown>
          </div>
        )}
      </section>
    </main>
  );
}
