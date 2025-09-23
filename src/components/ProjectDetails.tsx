"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Container from "./Container"

interface ProjectDetailsProps {
  setOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProjectDetails() {
  return (
    <div className="absolute top-0 w-[80%] h-screen backdrop-blur-sm bg-[rgb(38,38,38,0.5)] dark:bg-[rgb(42,41,41,0.5)] z-50">
      ProjectDetails
    </div>
  );
}
