import { type Metadata } from "next";
import Header from "@/components/ui/Header";

export const metadata: Metadata = {
  title: "Projects",
};

export default function DashboardProjects() {
  return (
    <div>
      <h1 className="font-semibold text-[#393a1f] text-xl">
        Dashboard Projects.
      </h1>
    </div>
  );
}
