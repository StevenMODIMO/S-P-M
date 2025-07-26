"use client";
import { ReactNode, createContext, useEffect, useState } from "react";

interface AppContextTypes {
  theme: "light" | "dark";
}

export const AppContext = createContext<AppContextTypes | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const getSystemTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    // Set theme on initial load
    setTheme(getSystemTheme());

    // Set up real-time listener
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <AppContext.Provider value={{ theme }}>{children}</AppContext.Provider>
  );
};

export default AppContext;
