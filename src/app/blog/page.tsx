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
}

export default async function Blog() {
  let myBlogs: BlogResponse[] = [];
  const blogsSnapshot = await getDocs(collection(db, "Blogs"));
  blogsSnapshot.forEach((doc) => {
    myBlogs.push({
      id: doc.id,
      title: doc.data().title,
      imageUrl: doc.data().imageUrl,
    });
  });
  return (
    <main className="bg-black -mt- h-screen p-4">
      {myBlogs.map((blog) => {
        return (
          <main key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              width={300}
              height={300}
            /></Link>
          </main>
        );
      })}
    </main>
  );
}
