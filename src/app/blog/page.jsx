"use client"
import { useState, useEffect } from "react";
import { Metadata } from "next";
import { Inter,Russo_One } from "next/font/google";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// export const metadata: Metadata = {
//   title: 'My Blog'
// }

// Firebase Imports
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore"

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Blogs"));
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    getBlogs();
    return () => {};
  }, []);

  return (
      <main className="bg-black -mt-8 h-screen">
        {blogs.map((blog) => {
            return (
              <main key={blog.id}>
                <img src={blog.imageUrl} alt={blog.title} />
                <h1 className={`${russoOne.className} text-lg font-bold`}>
                  {blog.title}
                </h1>
                <Markdown
              className={`${inter.className} prose overflow-auto h-[70vh] w-screen`}
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
                    <h1 className="text-[#dec544]" {...rest} />
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
              {blog.markdown}
            </Markdown>
              </main>
            );
          })}
      </main>
  );
}
