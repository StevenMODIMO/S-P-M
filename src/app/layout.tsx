import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import { Analytics } from "@vercel/analytics/react";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: {
    default: "Steven Modimo | Developer",
    template: "%s | StevenMODIMO",
  },
  description: "Steven Modimo's Personal Portfoli Website.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={rubik.className + "w-fit h-fit bg-[#333333]"}
      >
        <Navbar />
        <div className="mt-20 md:mt-28 font-medium ">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
