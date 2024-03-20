"use client";
import { Russo_One } from "next/font/google";
import DashNav from "../(components)/DashNav";
import MarkdownEditor from "../(components)/Markdown.jsx";
import { useState, useEffect } from "react";

// Firebase Imports
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

interface DashProps {}

const Dashboard: React.FC<DashProps> = () => {
  const [tab, setTab] = useState(1);
  const [blogs, setBlogs] = useState<any[]>([]); // Set the correct type for blogs

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
    <main className="h-screen bg-[#1a1a1a] -mt-28">
      <DashNav setTab={setTab} />
      {tab === 1 ? (
        <MarkdownEditor />
      ) : tab === 2 ? (
        <div>Analytics</div>
      ) : tab === 3 ? (
        <div>Manager</div>
      ) : (
        <main>
          <header>
            <h1>Overview Tab</h1>
          </header>
          {blogs.map((blog) => {
            return (
              <main key={blog.id}>
                <img src={blog.imageUrl} alt={blog.title} />
                <h1 className={`${russoOne.className} text-lg font-bold`}>
                  {blog.title}
                </h1>
              </main>
            );
          })}
        </main>
      )}
    </main>
  );
};

export default Dashboard;
