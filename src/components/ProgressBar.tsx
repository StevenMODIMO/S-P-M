"use client";
import React from "react";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";
export default function ProgressBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgressProvider
        height="2px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      >
        {children}
      </ProgressProvider>
    </>
  );
}
