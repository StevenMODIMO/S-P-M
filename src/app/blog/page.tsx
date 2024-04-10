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
  description: string;
}

export default async function Blog() {
  let myBlogs: BlogResponse[] = [];
  const blogsSnapshot = await getDocs(collection(db, "Blogs"));
  blogsSnapshot.forEach((doc) => {
    myBlogs.push({
      id: doc.id,
      title: doc.data().title,
      imageUrl: doc.data().imageUrl,
      description: doc.data().description,
      createdAt: new Date(
        doc.data().createdAt.seconds * 1000
      ).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
    });
  });
  return (
    <main className="bg-[#141212] h-full md:-mt-10">
      <header className="bg-[#0f0d0d] h-80 p-4 mx-auto text-white sm:w-[90%] sm:rounded-lg lg:w-[80%]">
        <h1
          className={`${inter.className} text- text-center sm:text-xl sm:mt-10 md:w-[500px] md:mt-20 md:mx-auto lg:w-[700px] lg:text-2xl`}
        >
          Bienvenidos, web wanderers! In this sanctuary of bytes and browsers, I
          celebrate the art and science of web development. Join me as I explore
          the latest trends, techniques, and tools shaping the digital frontier
          of the web,{" "}
          <span className={`${russoOne.className} text-[#dec544]`}>
            one line of code at a time.
          </span>
        </h1>
      </header>
      <section className="p-4 sm:grid grid-cols-2 gap-2 lg:w-[80%] lg:grid-cols-3 lg:mx-auto">
        {myBlogs.map((blog) => {
          return (
            <main
              key={blog.id}
              className="bg-[#201d1d] p-1 my-4 rounded sm:w-68 lg:w-80"
            >
              <Link href={`/blog/${blog.id}`}>
                <div className={`${russoOne.className} text-xl text-white p-1`}>
                  {blog.title}
                </div>
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={10}
                  height={10}
                  className="w-24 p-1"
                />
                <div className="text-gray-400 p-1">
                  {blog.description}
                </div>
                <div className="text-white text-end text-sm p-1">
                  {blog.createdAt}
                </div>
              </Link>
            </main>
          );
        })}
      </section>
    </main>
  );
}
