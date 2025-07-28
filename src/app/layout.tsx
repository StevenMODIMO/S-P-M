import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { AppContextProvider } from "@/context/AppContext";

const rubik = Rubik({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Steven Modimo | Developer",
  description: "Steven Modimo's Personal Portfolio Website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} dark:bg-[#262626] h-screen test`}>
        <AppContextProvider>
          {" "}
          <Navbar />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
