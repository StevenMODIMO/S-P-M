"use client";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import { Inter, Russo_One } from "next/font/google";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { GoDiamond } from "react-icons/go";

// Firebase Imports
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const inter = Inter({ subsets: ["latin"] });

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

export default function MarkdownEditor() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
      description,
      markdown,
      imageUrl,
      createdAt: serverTimestamp(),
    });
    setTitle("");
    setMarkdown("## Start Editing");
    setDescription("");
  };

  return (
    <main className="text-white">
      <header className="flex gap-2 m-1">
        <div
          className="bg-[#353434] p-1 text-xl cursor-pointer"
          onClick={() => setTab(0)}
        >
          Edit
        </div>
        <div
          className="bg-[#353434] p-1 text-xl cursor-pointer"
          onClick={() => setTab(1)}
        >
          Preview
        </div>
      </header>
      <section>
        {tab === 0 ? (
          <form onSubmit={publishBlog} className="flex flex-col bg-black gap-3">
            <label className="outline-none mx-auto bg-[#1a1a1a] text-lg p-2 rounded cursor-pointer">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setFileUrl(URL.createObjectURL(e.target.files[0]));
                }}
                className="hidden"
              />
              <h1 className="">
                Cover Image
              </h1>
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Blog title.."
              className="outline-none mx-auto w-[70vw] bg-[#1a1a1a] text-lg p-2 rounded-lg"
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Blog description"
              className="outline-none mx-auto w-[70vw] bg-[#1a1a1a] text-lg p-2 rounded-lg"
            />
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              className="outline-none w-[70vw] mt-1 mx-auto bg-[#1a1a1a] text-lg p-2 h-[80vh] rounded-lg"
            ></textarea>
            <button className="bg-[#dec544] text-[#1a1a1a] rounded-lg p-1 text-lg w-fit mx-auto">
              Publish Blog
            </button>
          </form>
        ) : (
          <section>
            {fileUrl && (
              <img
                src={fileUrl}
                alt="file"
                className="w-44 sm:max-w-[70%] sm:mx-auto md:max-w-[60%]"
              />
            )}
            <Markdown
              className={`${inter.className} overflow-auto bg-[#1a1a1a] p-3 sm:max-w-[70%] sm:mx-auto md:max-w-[60%]`}
              remarkPlugins={[remarkGfm, remarkToc]}
              rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeSlug]}
              components={{
                code(props) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter
                      {...rest}
                      PreTag="div"
                      children={children}
                      language="javascript"
                      style={atomOneDark}
                      showInlineLineNumbers={true}
                      wrapLongLines={true}
                      wrapLines={true}
                      className="m-1"
                    />
                  ) : (
                    <code
                      {...rest}
                      className="bg-[#2b2a2a] text-sm p-1 m-1 text-yellow-200"
                    >
                      {children}
                    </code>
                  );
                },
                a(props) {
                  const { node, ...rest } = props;
                  return (
                    <a
                      className="no-underline font-thin text-sm text-blue-300 hover:text-yellow-300"
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
                    <ul
                      className="text-white flex flex-col gap-1 ml-3"
                      {...rest}
                    />
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
          </section>
        )}
      </section>
    </main>
  );
}
