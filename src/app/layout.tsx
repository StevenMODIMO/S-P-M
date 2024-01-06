import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(components)/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DEV - Steven Modimo.",
  description: "Steven Modimo's Developer Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + "w-fit h-fit bg-black"}>
        <Navbar />
        {children}  
      </body>
    </html>
  );
}
