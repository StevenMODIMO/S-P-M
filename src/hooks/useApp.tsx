"use client";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw Error("useApp() Hook must be used insided an AppContext Provider");
  }
  return context
};
