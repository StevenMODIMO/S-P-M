"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import NavLinks from "./NavLinks";
import { navlinks } from "../data/data";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Russo_One } from "next/font/google";

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-3 transition-all duration-75 ease-in-out ${
        isScrolled ? "bg-[#302f2a]" : ""
      } ${pathname !== "/" ? "bg-black" : ""}`}
    >
      <header className="p-3 flex justify-between items-center m-1 md:mr-20 lg:mr-32">
        <Link href="/">
          <Image
            src="/StevenMODIMO.svg"
            alt="steven-modimo-logo"
            width={150}
            height={100}
            priority={false}
          />
        </Link>
        <RiBarChartHorizontalLine
          onClick={() => setOpenLinks(true)}
          className="text-[#DEC544] text-2xl md:hidden"
        />
        <section
          className={`${
            pathname === "/dashboard"
              ? "hidden"
              : "hidden md:text-[#DEC544] text-lg md:flex gap-5"
          }`}
        >
          {navlinks.map((link) => (
            <Link
              href={link.path}
              key={link.id}
              className={`${russoOne.className} relative hover:text-white transition-all duration-75 ease-in-out md:text-xl`}
            >
              {link.path === pathname && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 top-full block h-[2px] w-full bg-[#DEC544]"
                />
              )}
              {link.title}
            </Link>
          ))}
        </section>
      </header>
      <AnimatePresence>
        {openLinks ? <NavLinks setOpenLinks={setOpenLinks} /> : ""}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
