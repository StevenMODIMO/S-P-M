"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface ProjectDetailsProps {
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProjectDetails({ setOpenDetails }: ProjectDetailsProps) {
  return (
    <div
      onClick={() => setOpenDetails(false)}
      className="absolute top-0 w-full h-screen backdrop-blur-sm bg-[rgb(38,38,38,0.5)] dark:bg-[rgb(42,41,41,0.5)] z-50"
    >
      ProjectDetails
    </div>
  );
}
