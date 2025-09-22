"use client";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/ui/Header";
import { dashboardLinks } from "../lib/data";
import {
  FolderKanban,
  FolderPlus,
  Bolt,
  MonitorCog,
  Calendar1,
  Columns3Cog,
  ChartPie,
  ReceiptText,
  Mail,
  Film,
  Banknote,
  Menu,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function DashboardNavbar() {
  const [collapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const iconMap: Record<string, React.ReactNode> = {
    Projects: <FolderKanban size={20} />,
    New: <FolderPlus size={20} />,
    Manage: <MonitorCog size={20} />,
    Analytics: <ChartPie size={20} />,
    Config: <Columns3Cog size={20} />,
    Contracts: <ReceiptText size={20} />,
    Expenses: <Banknote size={20} />,
    "E-mails": <Mail size={20} />,
    Media: <Film size={20} />,
    Settings: <Bolt size={20} />,
  };

  return (
    <div
      className={`${
        collapsed ? "w-[4rem]" : "w-[12rem]"
      } h-screen bg-[#fafafa] shadow-md dark:bg-inherit dark:text-white p-4 flex flex-col justify-between transition-all duration-300`}
    >
      {/* Header with toggle button */}
      <header className="flex items-center justify-between gap-3">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="/images/bg-modimo.webp"
                alt="logo"
                fill={true}
                className="rounded-full shadow-md"
              />
            </div>
            <Header className="text-xl text-[#393a1f] font-bold dark:text-white">
              CMS
            </Header>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!collapsed)}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-[#4d5000]"
        >
          {collapsed ? (
            <Menu size={20} className="text-[#4d5000] dark:text-[#e7ee1a]" />
          ) : (
            <ChevronLeft size={24} className="text-[#4d5000] dark:text-[#e7ee1a]" />
          )}
        </button>
      </header>

      {/* Links */}
      <div className="flex flex-col gap-2 mt-6">
        {dashboardLinks.map(({ id, title, path }) => {
          const isActive = pathname === `/dashboard${path}`;
          return (
            <Link
              key={id}
              href={`/dashboard${path}`}
              className={`flex items-center gap-2 p-2 rounded-md transition-colors ${
                isActive
                  ? "bg-[#e7ee1a] text-[#393a1f]"
                  : "hover:bg-gray-200 dark:hover:bg-[#4d5000]"
              }`}
            >
              {iconMap[title]}
              {!collapsed && <span>{title}</span>}
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="mt-6">
        <span className="flex items-center gap-2 text-sm">
          <Calendar1 size={20} />
          {!collapsed && (
            <span>
              {new Date().getDate()}-{new Date().getMonth() + 1}-
              {new Date().getFullYear()}
            </span>
          )}
        </span>
      </footer>
    </div>
  );
}
