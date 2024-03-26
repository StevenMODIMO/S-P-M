import Image from "next/image";
import Link from "next/navigation";
import type { Metadata } from "next";
import { Inter, Russo_One } from "next/font/google";
import MarkdownPreview from "../../(components)/MarkdownPreview";

// Fireabse Imports
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;
  const blog = (await getDoc(doc(db, "Blogs", id))).data();

  return {
    title: blog?.title,
  };
}

export default async function ReadBlog({ params }: { params: { id: string } }) {
  const blog = (await getDoc(doc(db, "Blogs", params.id))).data();
  return (
    <main className="h-fit bg-[#1a1a1a] mx-auto md:-mt-12">
      <section>
        <MarkdownPreview markdown={blog?.markdown} />
      </section>
    </main>
  );
}
