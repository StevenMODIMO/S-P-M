import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Steven Modimo.",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + "w-fit h-fit bg-[url('/blob-haikei.svg')]"}
      >
        <Navbar />
        <div className="mt-20 md:mt-28">{children}</div>
      </body>
    </html>
  );
}
