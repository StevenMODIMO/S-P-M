import Image from "next/image";
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

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const blog = (await getDoc(doc(db, "Blogs", id))).data();

  return {
    title: blog?.title,
  };
}

export default async function ReadBlog(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const blog = (await getDoc(doc(db, "Blogs", params.id))).data();
  return (
    <main className="h-fit bg-[#141212] md:-mt-8">
      <section>
        <Image
          src={blog?.imageUrl}
          alt={blog?.title}
          width={10}
          height={10}
          className="w-24 p-1 sm:w-28 md:ml-28 lg:ml-72 lg:w-36"
        />
        <MarkdownPreview markdown={blog?.markdown} />
      </section>
    </main>
  );
}
