"use client";
import { useState } from "react";
import ProjectForm from "./ProjectForm";
import ViewProjects from "./ViewProjects";
import {
  FolderKanban,
  FolderPlus,
  Bolt,
  MonitorCog,
  User,
  Users,
  Columns3Cog,
  ChartPie,
} from "lucide-react";

export default function MainContainer() {
  const [tab, setTab] = useState("viewProjects");
  return (
    <div className="text-[#393a1f] bg-[#fafafa] rounded shadow my-4 flex gap-3 h-[85vh]">
      <header className="flex flex-col gap-3 bg-[#393a1f] text-[#dfdfdf] rounded-t w-[20%]">
        <button
          onClick={() => setTab("viewProjects")}
          className={`cursor-pointer flex items-center gap-2 p-2 ${
            tab === "viewProjects" ? "text-[#E7EE1A]" : ""
          }`}
        >
          <FolderKanban size={20} />
          <span>Projects</span>
        </button>
        <button
          onClick={() => setTab("addProject")}
          className={`cursor-pointer flex items-center gap-2 p-2 ${
            tab === "addProject" ? "text-[#E7EE1A]" : ""
          }`}
        >
          <FolderPlus size={20} />
          <span>New</span>
        </button>
        <button
          onClick={() => setTab("addProject")}
          className={`cursor-pointer flex items-center gap-2 p-2 ${
            tab === "" ? "text-[#E7EE1A]" : ""
          }`}
        >
          <MonitorCog size={20} />
          <span>Manage</span>
        </button>
        <button
          onClick={() => setTab("addProject")}
          className={`cursor-pointer flex items-center gap-2 p-2 ${
            tab === "" ? "text-[#E7EE1A]" : ""
          }`}
        >
          <User size={20} />
          <span>Profile</span>
        </button>
        <button
          onClick={() => setTab("addProject")}
          className={`cursor-pointer flex items-center gap-2 p-2 ${
            tab === "" ? "text-[#E7EE1A]" : ""
          }`}
        >
          <Bolt size={20} />
          <span>Settings</span>
        </button>
        <button
          onClick={() => setTab("addProject")}
          className={`cursor-pointer flex items-center gap-2 p-2 ${
            tab === "" ? "text-[#E7EE1A]" : ""
          }`}
        >
          <ChartPie size={20} />
          <span>Analytics</span>
        </button>
        <button
          onClick={() => setTab("addProject")}
          className={`cursor-pointer flex items-center gap-2 p-2 ${
            tab === "" ? "text-[#E7EE1A]" : ""
          }`}
        >
          <Users size={20} />
          <span>Visitors</span>
        </button>
        <button
          onClick={() => setTab("addProject")}
          className={`cursor-pointer flex items-center gap-2 p-2 ${
            tab === "" ? "text-[#E7EE1A]" : ""
          }`}
        >
          <Columns3Cog size={20} />
          <span>Config</span>
        </button>
      </header>
      <section className="overflow-y-auto w-full">
        {tab === "viewProjects" ? (
          <ViewProjects />
        ) : tab === "addProject" ? (
          <ProjectForm />
        ) : (
          <></>
        )}
      </section>
    </div>
  );
}
