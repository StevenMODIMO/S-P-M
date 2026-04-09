"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div
      className="flex items-center gap-2 cursor-pointer my-4"
      onClick={() => router.back()}
    >
      <ArrowLeft />
      <p>Back to projects</p>
    </div>
  );
}
