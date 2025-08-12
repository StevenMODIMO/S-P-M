"use client";
import Link from "next/link";
import { House } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="mt-24 text-[#393a1f] dark:text-[#E7EE1A] text-center text-xl">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404: Page Not Found
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => router.back()}
        className="cursor-pointer hover:underline hover:text-[#E7EE1A] dark:hover:text-[#9CA600]"
      >
        <div className="flex items-center justify-center gap-2 mt-4">
          <House className="h-6 w-6" />
          <span>Go to Home</span>
        </div>
      </motion.div>
    </main>
  );
}
