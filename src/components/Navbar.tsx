"use client";
import { useState } from "react";
import Image from "next/image";
import { useApp } from "@/hooks/useApp";
import { LayoutDashboard } from "lucide-react";
import Container from "./Container";
import NavLinks from "./NavLinks";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { navlinks } from "@/lib/data";
import { X, SquareArrowOutUpRight, Link2 } from "lucide-react";

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
            className="w-6 h-6 text-[#393a1f] dark:text-white md:hidden"
          />
          <ul className="hidden md:flex md:gap-4">
            {navlinks.map((link) => (
              <li key={link.id} className="flex items-center">
                <Link
                  href={link.path}
                  className={`${
                    (link.title === "04. Blog" ||
                      link.title === "05. Projects" ||
                      link.title === "06. Get in touch" ||
                      link.title === "02 About" ||
                      link.title === "04. Testimonials") &&
                    "flex items-center gap-4"
                  } text-xs lg:text-sm p-2 dark:text-white text-[#393a1f] ${
                    link.title === "06. Get in touch" &&
                    "rounded-full bg-[#E7EE1A]"
                  }`}
                >
                  {link.title}
                  {(link.title === "04. Blog" ||
                    link.title === "05. Projects" ||
                    link.title === "06. Get in touch") && (
                    <SquareArrowOutUpRight
                      className={`w-4 text-[#9CA600] dark:text-[#E7EE1A] ${
                        link.title === "06. Get in touch" &&
                        "dark:text-[#242514]"
                      }`}
                    />
                  )}
                  {link.title === "02. About" ||
                    (link.title === "03. Testimonials" && (
                      <Link2
                        className={`w-4 text-[#9CA600] dark:text-[#E7EE1A]`}
                      />
                    ))}
                </Link>
              </li>
            ))}
          </ul>
        </header>
      </Container>

      <AnimatePresence>
        {openLinks && <NavLinks setOpenLinks={setOpenLinks} />}
      </AnimatePresence>
    </nav>
  );
}
