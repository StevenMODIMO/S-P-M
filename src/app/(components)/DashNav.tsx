"use client";
import Link from "next/link";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: "100",
});

const DashNav = () => {
  return (
    <main>
      <nav className="bg-[#1a1a1a] p-2 mt-8 rounded">
        <header className="">
          <Link href="/">
            <Image
              src="/StevenMODIMO.svg"
              alt="steven-modimo-logo"
              width={150}
              height={100}
              priority={false}
            />
          </Link>
        </header>
      </nav>
    </main>
  );
};

export default DashNav;
