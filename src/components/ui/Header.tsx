"use client";
export default function Header({ children }: { children: string }) {
  return <div className="py-2 font-semibold text-5xl dark:text-white">{children}</div>;
}
