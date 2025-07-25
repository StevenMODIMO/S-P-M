import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Steven Modimo | Developer",
    template: "%s | StevenMODIMO",
  },
  description: "Steven Modimo's Personal Portfolio Website.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "w-fit h-fit bg-[#1E1E1E]"}>
        {/* <Navbar />
        <div className="mt-20 md:mt-28 font-medium ">
          {children}
          <Analytics />
        </div> */}
        {children}
      </body>
    </html>
  );
}
