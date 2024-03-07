import { Metadata } from "next";
import { Russo_One } from "next/font/google";
import DashNav from "../(components)/DashNav";
import MarkdownEditor from "../(components)/Markdown";

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Modimo's Dashboard",
  description: "Dashboard page where I monitor my private stuffs.",
};

export default function Dashboard() {
  return (
    <main className="h-screen bg-black -mt-28">
      <DashNav />
      <MarkdownEditor />
    </main>
  );
}
