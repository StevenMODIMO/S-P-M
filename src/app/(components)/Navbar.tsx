"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import NavLinks from "./NavLinks";
import { navlinks } from "../data/data";
import { AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { CiHome } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { FaSearch } from "react-icons/fa";


interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const pathname = usePathname();

  return (
    <main>
      {pathname !== "/dashboard" && (
        <nav
          className={`fixed top-0 left-0 w-full p-3 transition-all duration-75 ease-in-out ${
            pathname !== "/" ? "bg-[#141212]" : ""
          }`}
        >
          <header className="p-3 flex justify-between items-center m-1 md:justify-center md:gap-20 md:w-fit md:mx-auto md:rounded-lg md:bg-[#0f0d0d]">
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
            <section className="hidden md:text-[#DEC544] text-lg md:flex gap-5 lg:gap-10">
              {navlinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.id}
                  className={`${
                    pathname === link.path && "text-white"
                  } flex items-center justify-center gap-2 hover:text-white transition-all duration-75 ease-in-out`}
                >
                  {link.title === "Home" ? (
                    <CiHome
                      className={`text-[#dec544] text-lg ${
                        pathname === link.path && "text-white"
                      }`}
                    />
                  ) : link.title === "About" ? (
                    <FaRegLightbulb
                      className={`text-[#dec544] text-lg ${
                        pathname === link.path && "text-white"
                      }`}
                    />
                  ) : link.title === "Projects" ? (
                    <MdDashboard
                      className={`text-[#dec544] text-lg ${
                        pathname === link.path && "text-white"
                      }`}
                    />
                  ) : link.title === "Blog" ? (
                    <FaSearch
                      className={`text-[#dec544] text-lg ${
                        pathname === link.path && "text-white"
                      }`}
                    />
                  ) : (
                    ""
                  )}
                  <div className="text-sm mt-1">{link.title}</div>
                </Link>
              ))}
            </section>
          </header>
          <AnimatePresence>
            {openLinks ? <NavLinks setOpenLinks={setOpenLinks} /> : ""}
          </AnimatePresence>
        </nav>
      )}
    </main>
  );
};

export default Navbar;
