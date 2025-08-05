import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { AppContextProvider } from "@/context/AppContext";

const rubik = Rubik({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Smodimo | Web Developer",
  description: "Steven Modimo's personal portfolio website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} dark:bg-[#262626] h-screen`}>
        <AppContextProvider>
          {" "}
          <Navbar />
          <main className="pt-20">
            {children}
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}
