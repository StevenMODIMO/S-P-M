"use client";
import { Russo_One } from "next/font/google";
import DashNav from "../(components)/DashNav";
import MarkdownEditor from "../(components)/Markdown";
import { useState } from "react";

const russoOne = Russo_One({
  subsets: ["cyrillic", "latin", "latin-ext"],
  weight: "400",
});

interface DashProps {}

const Dashboard: React.FC<DashProps> = () => {
  const [tab, setTab] = useState(1);

  return (
    <main className="h-fit -mt-28">
      <DashNav setTab={setTab} />
      {tab === 1 ? (
        <MarkdownEditor />
      ) : tab === 2 ? (
        <div>Analytics</div>
      ) : tab === 3 ? (
        <div>Manager</div>
      ) : (
        <main>
          <header>
            <h1>Overview Tab</h1>
          </header>
        </main>
      )}
    </main>
  );
};

export default Dashboard;
