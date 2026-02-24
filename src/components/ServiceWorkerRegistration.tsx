 "use client";

 import { useEffect } from "react";

 export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      return;
    }
    if (!("serviceWorker" in navigator)) {
      return;
    }

     const onLoad = () => {
       navigator.serviceWorker
         .register("/sw.js")
         .catch((err) => console.error("SW registration failed", err));
     };

     window.addEventListener("load", onLoad);
     return () => window.removeEventListener("load", onLoad);
   }, []);

   return null;
 }
