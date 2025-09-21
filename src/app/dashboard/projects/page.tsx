import { type Metadata } from "next";
import Header from "@/components/ui/Header"

export const metadata: Metadata = {
  title: "Projects",
};

export default function DashboardProjects() {
  return <div>
    <Header>Dashboard Projects.</Header>
  </div>;
}
