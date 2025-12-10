"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useApp } from "@/hooks/useApp";
import { LayoutDashboard } from "lucide-react";
import Container from "./Container";
import NavLinks from "./NavLinks";
import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { navlinks } from "@/lib/data";
import {
  House,
  ChartNoAxesGantt,
  Info,
  FolderDot,
  SquareArrowOutUpRight,
  Layers,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const { theme } = useApp();
  const pathname = usePathname();
  const isDashboardRoute = pathname.startsWith("/dashboard");

  // ✅ Dynamic title update
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about");
      const testimonialsSection = document.querySelector("#testimonials");

      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          document.title = "About | Steven Modimo";
          return;
        }
      }

      if (testimonialsSection) {
        const rect = testimonialsSection.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          document.title = "Testimonials | Steven Modimo";
          return;
        }
      }

      // default
      document.title = "Steven Modimo | Full Stack Developer";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const section = document.querySelector("#skills");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = "Skills and Stack | Steven Modimo";
          } else {
            // Reset title when leaving view
            document.title = "Steven Modimo | Full Stack Developer";
          }
        });
      },
      {
        root: null,
        threshold: 0.25, // triggers when 25% of the section is visible
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${!openLinks && "backdrop-blur-sm"} ${
        isDashboardRoute && "hidden"
      }`}
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
                  className={`flex items-center gap-2 text-xs lg:text-[16px] p-2 dark:text-white text-[#393a1f] hover:text-[#bdc060f6] dark:hover:text-[#E7EE1A] transition-colors duration-150 ease-in-out`}
                >
                  {link.title === "Home" && (
                    <House className="w-4 h-4 text-[#393a1f] dark:text-white" />
                  )}
                  {link.title === "About" && (
                    <Info className="w-4 h-4 text-[#393a1f] dark:text-white" />
                  )}
                  {link.title === "Skills and Stack" && (
                    <Layers className="w-4 h-4 text-[#E7EE1A] dark:text-white" />
                  )}
                  {link.title === "Testimonials" && (
                    <ChartNoAxesGantt className="w-4 h-4 text-[#393a1f] dark:text-white" />
                  )}
                  {link.title === "Projects" && (
                    <FolderDot className="w-4 h-4 text-[#393a1f] dark:text-white" />
                  )}
                  {link.title}
                  {(link.title === "04. Blog" ||
                    link.title === "05. Projects" ||
                    link.title === "06. Get in touch") && (
                    <SquareArrowOutUpRight
                      className={`w-4 text-[#9CA600] dark:text-[#E7EE1A] ${
                        link.title === "06. Get in touch" &&
                        "dark:text-[#242514]"
                      }
                      `}
                    />
                  )}
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
