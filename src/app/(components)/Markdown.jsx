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

// Firebase Imports
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const inter = Inter({ subsets: ["latin"] });

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

export default function MarkdownEditor() {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("## Start Editing!!");
  const [tab, setTab] = useState(0);
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const publishBlog = async (e) => {
    e.preventDefault();

    const storage = getStorage();
    const storageRef = ref(storage, `images/${file.name}`);
    const docRef = collection(db, "Blogs");
    await uploadBytes(storageRef, file);

    const imageUrl = await getDownloadURL(storageRef);

    await addDoc(docRef, {
      title,
      markdown,
      imageUrl,
    });
    setTitle("");
    setMarkdown("## Start Editing");
  };

  return (
    <main className="bg-black h-fit">
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
      <section className="w-[100%]">
        {tab === 0 ? (
          <main>
            <form
              onSubmit={publishBlog}
              className="flex flex-col bg-[#1a1a1a] p-2 w-[70%] rounded"
            >
              <label className="m-1 w-fit rounded">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setFileUrl(URL.createObjectURL(e.target.files[0]));
                  }}
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
                className={`${inter.className} rounded-b border-t border-[#dec544] bg-[#1a1a1a] outline-none text-white w-[100%] h-[50vh] p-8`}
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
            {fileUrl && (
              <img src={fileUrl} alt={title} className="w-fit h-fit" />
            )}
            <Markdown
              className={`${inter.className} overflow-auto bg-[#1a1a1a] p-3 sm:max-w-[90%] sm:mx-auto md:max-w-[70%]`}
              remarkPlugins={[remarkGfm, remarkToc]}
              rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeSlug]}
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <div className="">
                      <div className="bg-[#1a1a1a]">
                        <p className="text-white p-1">Example Code</p>
                      </div>
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
                  ) : (
                    <code
                      {...rest}
                      className="bg-[#2b2a2a] p-3 text-sm text-yellow-200"
                    >
                      {children}
                    </code>
                  );
                },
                a(props) {
                  const { node, ...rest } = props;
                  return (
                    <a
                      className="no-underline font-bold text-sm text-blue-300 hover:text-yellow-300"
                      {...rest}
                    />
                  );
                },
                h1(props) {
                  const { node, ...rest } = props;
                  return (
                    <h1
                      className="text-white text-start text-3xl font-bold my-3"
                      {...rest}
                    />
                  );
                },
                h2(props) {
                  const { node, ...rest } = props;
                  return (
                    <h2
                      className="text-[#dec544] text-start text-lg my-3 font-bold"
                      {...rest}
                    />
                  );
                },
                h3(props) {
                  const { node, ...rest } = props;
                  return (
                    <h3 className="text-[#dec544] font-bold my-2 text-base" {...rest} />
                  );
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
                    <ul
                      className="text-white flex flex-col ml-3"
                      {...rest}
                    />
                  );
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
                em(props) {
                  const { node, ...rest } = props;
                  return <em className="text-[#dec544] font-bold" {...rest} />;
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
