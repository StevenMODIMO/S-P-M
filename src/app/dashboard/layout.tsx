import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardLoadingProgress from "./components/DashboardLoadingProgress"

const rubik = Rubik({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: {
    default: "Steven Modimo | Full Stack Developer",
    template: "%s | Steven Modimo's Dashboard",
  },
  description: "",
};

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className} dark:bg-[#262626] h-screen`}>
        <DashboardLoadingProgress />
        <main className="flex flex-1 dark:text-white h-full">
        <DashboardNavbar />
        <div className="p-4 w-[90%] h-screen overflow-auto">
        {children}
        </div>
        </main>
      </body>
    </html>
  );
}
