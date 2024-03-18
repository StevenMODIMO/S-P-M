import Image from "next/image";
import Link from "next/navigation";
import type { Metadata } from "next";

// Fireabse Imports
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

interface BlogMetaData {
  id: string;
  title: string;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = params.id;
  //const blogMeta: BlogMetaData = {}
  const blog = (await getDoc(doc(db, "Blogs", id))).data();

  return {
    title: blog?.title,
  };
}

export default function ReadBlog({ params }: { params: { id: string } }) {
  return <main>{params.id}</main>;
}
