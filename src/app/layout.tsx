import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";
import { AppContextProvider } from "@/context/AppContext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { headers } from "next/headers";

const rubik = Rubik({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: {
    default: "Steven Modimo | Full Stack Developer",
    template: "%s | Steven Modimo",
  },
  description:
    "Portfolio of Steven Modimo, a creative and detail-oriented web developer crafting interactive, responsive, and user-friendly digital experiences.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const referer = headersList.get("referer") || "";

  let route = "";
  try {
    const url = new URL(referer);
    route = url.pathname; // e.g., "/dashboard"
  } catch (err) {
    route = "";
  }
  console.log(route);
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
          <ScrollToTop />
          <main className={`${route === "/dashboard" ? "" : "pt-20"}`}>
            {children}
            <Footer />
          </main>
        </AppContextProvider>
      </body>
    </html>
  );
}
