"use client";

import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`w-[90%] sm:w-[80%] lg:w-[90%] mx-auto p-2 ${className}`}>
      {children}
    </div>
  );
}
