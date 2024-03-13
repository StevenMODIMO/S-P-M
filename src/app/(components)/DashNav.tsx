"use client";
import Link from "next/link";
import Image from "next/image";
import { Lato } from "next/font/google";
import React from "react";
import { dashboardLinks } from "../data/data";
import { FaMarkdown } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { TbMobiledata } from "react-icons/tb";
import { MdManageAccounts } from "react-icons/md";

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: "100",
});

interface DashNavProps {
  setTab: React.Dispatch<React.SetStateAction<number>>;
}

const DashNav: React.FC<DashNavProps> = ({ setTab }) => {
  return (
    <main>
      <nav className="bg-[#1a1a1a] p-2 h-[5vh]">
        <header className="flex gap-3 items-center">
          <Link href="/">
            <Image
              src="/StevenMODIMO.svg"
              alt="steven-modimo-logo"
              width={150}
              height={100}
              priority={false}
            />
          </Link>
          <div className="flex gap-3 text-white text-sm">
            {dashboardLinks.map((link) => {
              return (
                <main
                  className="flex items-center gap-1 cursor-pointer"
                  key={link.id}
                  onClick={() => setTab(link.id)}
                >
                  {link.title === "Overview" ? (
                    <SlGraph />
                  ) : link.title === "Markdown" ? (
                    <FaMarkdown />
                  ) : link.title === "Analytics" ? (
                    <TbMobiledata />
                  ) : link.title === "Manager" ? (
                    <MdManageAccounts />
                  ) : (
                    ""
                  )}
                  <h1>{link.title}</h1>
                </main>
              );
            })}
          </div>
        </header>
      </nav>
    </main>
  );
};

export default DashNav;
