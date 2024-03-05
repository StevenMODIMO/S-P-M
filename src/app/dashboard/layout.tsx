import React from "react";
import DashNav from "../(components)/DashNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <DashNav />
      {children}
    </main>
  );
}
