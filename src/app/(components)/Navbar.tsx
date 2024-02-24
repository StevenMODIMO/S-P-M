"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import NavLinks from "./NavLinks";
import { navlinks } from "../data/data";
import { AnimatePresence } from "framer-motion";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full p-3">
      <header className="p-3 flex justify-between items-center m-1">
        <Link href="/">
          <Image
            src="/StevenMODIMO.svg"
            alt="steven-modimo-logo"
            width={150}
            height={100}
          />
        </Link>
        <RiBarChartHorizontalLine
          onClick={() => setOpenLinks(true)}
          className="text-[#DEC544] text-2xl md:hidden"
        />
        <section className="hidden md:text-[#DEC544] text-lg md:flex gap-2">
          {navlinks.map((link) => (
            <Link href={link.path} key={link.id}>
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
