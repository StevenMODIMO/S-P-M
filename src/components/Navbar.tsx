"use client";
import { useState } from "react";
import Image from "next/image";
import { useApp } from "@/hooks/useApp";
import { LayoutDashboard, X } from "lucide-react";
import Container from "./Container";
import NavLinks from "./NavLinks";
import { AnimatePresence } from "motion/react";
import Link from "next/link";

export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const { theme } = useApp();
  return (
    <Container>
      <nav className="">
        <header className="flex items-center justify-between">
          <Link href="/" className="relative w-12 h-12">
            {theme === "light" ? (
              <Image src="/light-logo.svg" alt="Steven Modimo" fill={true} />
            ) : (
              <Image src="/dark-logo.svg" alt="Steven Modimo" fill={true} />
            )}
          </Link>
          <LayoutDashboard
            onClick={() => setOpenLinks(true)}
            className="w-6 dark:text-white md:hidden"
          />
        </header>
        <AnimatePresence>
          {openLinks && <NavLinks setOpenLinks={setOpenLinks} />}
        </AnimatePresence>
      </nav>
    </Container>
  );
}
