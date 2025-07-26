"use client";
import Image from "next/image";
import { useApp } from "@/hooks/useApp";
import { LayoutDashboard, X } from "lucide-react";
import Container from "./Container";

export default function Navbar() {
  const { theme } = useApp();
  console.log("From Navbar"+theme);
  return (
    <Container>
      <nav className="">
        <header className="flex items-center justify-between">
          <div className="relative w-12 h-12">
            {theme === "light" ? (
              <Image src="/light-logo.svg" alt="Steven Modimo" fill={true} />
            ) : (
              <Image src="/dark-logo.svg" alt="Steven Modimo" fill={true} />
            )}
          </div>
          <LayoutDashboard className="w-6 dark:text-white" />
          <X className="w-6 dark:text-white" />
        </header>
      </nav>
    </Container>
  );
}
