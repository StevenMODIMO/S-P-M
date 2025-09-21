"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // import styles

NProgress.configure({
  barSelector: ".bar",
  showSpinner: true,
  trickleSpeed: 200,
});

export default function TopProgressBar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // start progress
    NProgress.start();

    // simulate end after short delay
    const timer = setTimeout(() => {
      NProgress.done();
    }, 200); // 200ms minimum so it actually shows

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname, searchParams?.toString()]); // trigger on route change

  return null; // no UI, NProgress injects itself
}
