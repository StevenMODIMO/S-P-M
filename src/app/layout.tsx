import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Steven Modimo",
    template: "%s - Steven Modimo",
  },
  description: "Portfolio",
  twitter: {
    description: "summary_large_image",
  },
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
        <div className="mt-20 md:mt-28">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
