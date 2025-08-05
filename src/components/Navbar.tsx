"use client";
import { useState } from "react";
import Image from "next/image";
import { useApp } from "@/hooks/useApp";
import { LayoutDashboard } from "lucide-react";
import Container from "./Container";
import NavLinks from "./NavLinks";
import { AnimatePresence } from "motion/react";
import Link from "next/link";

export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const { theme } = useApp();

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${!openLinks && "backdrop-blur-sm"}`}
    >
      <Container>
        <header className="flex items-center justify-between">
          <Link href="/" className="relative w-12 h-12">
            {theme === "light" ? (
              <Image src="/light-logo.svg" alt="Steven Modimo" fill />
            ) : (
              <Image src="/dark-logo.svg" alt="Steven Modimo" fill />
            )}
          </Link>
          <LayoutDashboard
            onClick={() => setOpenLinks(true)}
            className="w-6 h-6 text-[#333] dark:text-white md:hidden"
          />
        </header>
      </Container>

      <AnimatePresence>
        {openLinks && <NavLinks setOpenLinks={setOpenLinks} />}
      </AnimatePresence>
    </nav>
  );
}
