import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { AppContextProvider } from "@/context/AppContext";

const rubik = Rubik({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: {
    default: "Steven Modimo | Full Stack Developer",
    template: "%s | Steven Modimo",
  },
  description:
    "Portfolio of Steven Modimo, a creative and detail-oriented web developer crafting interactive, responsive, and user-friendly digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Vvsl0yxnWZr_i4JwsMa7DsdUu7Wi0gwbgVhbLqhDFz0"
        />
      </head>
      <body className={`${rubik.className} dark:bg-[#262626] h-screen`}>
        <AppContextProvider>
          {" "}
          <Navbar />
          <main className="pt-20">{children}</main>
        </AppContextProvider>
      </body>
    </html>
  );
}
