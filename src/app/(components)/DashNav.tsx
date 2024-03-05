"use client";
import { dashboardLinks } from "../data/data";
import Link from "next/link";
import { GrOverview } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";

export default function DashNav() {
  return (
    <main className="-mt-12">
      <nav className="p-4 bg-[#302f2a] flex gap-3">
        {dashboardLinks.map((link) => {
          return (
            <main
              key={link.id}
              className="flex items-center gap-1 text-white text-xl"
            >
              {link.title === "Overview" ? (
                <GrOverview className="text-white" />
              ) : link.title === "Blog" ? (
                <FaBlog />
              ) : (
                ""
              )}
              <Link href={link.path}>{link.title}</Link>
            </main>
          );
        })}
      </nav>
    </main>
  );
}
