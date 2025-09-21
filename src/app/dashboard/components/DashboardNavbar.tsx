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
  User,
  Users,
  Columns3Cog,
  ChartPie,
  ReceiptText,
  Mail,
  Film,
  Banknote,
} from "lucide-react";

export default function DashboardNavbar() {
  return (
    <div className="w-[10%] h-screen bg-[#393a1fa6] dark:text-white p-4 flex flex-col gap-4">
      <header className="flex items-center gap-3">
        <div className="relative w-10 h-10">
          <Image
            src="/images/bg-modimo.webp"
            alt="logo"
            fill={true}
            className="rounded-full shadow-md"
          />
        </div>
        <Header className="text-xl text-[#393a1f] font-bold">CMS</Header>
      </header>
      <div className="flex flex-col gap-3">
        {dashboardLinks.map(({ id, title, path }) => {
          return (
            <div key={id}>
              <Link
                href={`/dashboard${path}`}
                className="flex items-center gap-2"
              >
                {title === "Projects" ? (
                  <FolderKanban size={20} />
                ) : title === "New" ? (
                  <FolderPlus size={20} />
                ) : title === "Manage" ? (
                  <MonitorCog size={20} />
                ) : title === "Analytics" ? (
                  <ChartPie size={20} />
                ) : title === "Config" ? (
                  <Columns3Cog size={20} />
                ) : title === "Contracts" ? (
                  <ReceiptText size={20} />
                ) : title === "Expenses" ? (
                  <Banknote size={20} />
                ) : title === "E-mails" ? (
                  <Mail size={20} />
                ) : title === "Media" ? (
                  <Film size={20} />
                ) : title === "Settings" ? (
                  <Bolt size={20} />
                ) : null}
                <span>{title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
