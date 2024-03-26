import { Metadata } from "next";
import { Inter, Russo_One } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

// Firebase Imports
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export const metadata: Metadata = {
  title: "My Blog",
};

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

const inter = Inter({ subsets: ["latin"] });

interface BlogResponse {
  id: string;
  title: string;
  imageUrl: string;
  createdAt: string;
}

export default async function Blog() {
  let myBlogs: BlogResponse[] = [];
  const blogsSnapshot = await getDocs(collection(db, "Blogs"));
  blogsSnapshot.forEach((doc) => {
    myBlogs.push({
      id: doc.id,
      title: doc.data().title,
      imageUrl: doc.data().imageUrl,
      createdAt: doc.data().createdAt,
    });
  });
  return (
    <main className="bg-[#1a1a1a] h-fit md:-mt-10">
      <header className="bg-[#110f0f]">
        <h1 className={`text-2xl w-[80%] mx-auto p-12 ${inter.className} text-white`}>
          Welcome to my thinking Space. Here is Where is write about my
          thoughts, Expertise and Share it with Other. Join me on this embarking
          journey of detailed thoughts from me. These blogs vary from a great
          variance, technology, career, and anything related to the Internet
        </h1>
      </header>
      <section className="p-4 flex flex-col gap-4 sm:grid grid-cols-2 sm:gap-4">
        {myBlogs.map((blog) => {
          return (
            <main key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={300}
                  height={300}
                  className="w-[500px] sm:w-[300px]"
                />
              </Link>
              <div className={`${russoOne.className} text-xl text-white`}>
                {blog.title}
              </div>
            </main>
          );
        })}
      </section>
    </main>
  );
}
