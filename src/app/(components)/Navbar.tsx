"use client";
import { useState } from "react";
import Image from "next/image";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import NavLinks from "./NavLinks";

interface NavbarProps {
  // Define any other props you might have for Navbar
}

const Navbar: React.FC<NavbarProps> = () => {
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <nav>
      <header className="p-3 flex justify-between">
        <Image src="/StevenMODIMO.svg" alt="" width={150} height={100} />
        <RiBarChartHorizontalLine
          onClick={() => setOpenLinks(true)}
          className="text-[#DEC544] text-2xl"
        />
      </header>
      {openLinks && <NavLinks setOpenLinks={setOpenLinks} />}
    </nav>
  );
}

export default Navbar;
