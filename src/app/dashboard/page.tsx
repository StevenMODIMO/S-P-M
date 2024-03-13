"use client";
import { Russo_One } from "next/font/google";
import DashNav from "../(components)/DashNav";
import MarkdownEditor from "../(components)/Markdown.jsx";
import { useState } from "react";

interface DashProps {}

const Dashboard: React.FC<DashProps> = () => {
  const [tab, setTab] = useState(1);

  return (
    <main className="h-[95vh] bg-[#1a1a1a] -mt-28">
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
