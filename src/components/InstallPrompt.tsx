 "use client";

 import { useEffect, useState } from "react";

 type BeforeInstallPromptEvent = Event & {
   prompt: () => Promise<void>;
   userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
 };

 export default function InstallPrompt() {
   const [deferredPrompt, setDeferredPrompt] =
     useState<BeforeInstallPromptEvent | null>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     const handler = (event: Event) => {
       event.preventDefault();
       setDeferredPrompt(event as BeforeInstallPromptEvent);
       setIsVisible(true);
     };

     window.addEventListener("beforeinstallprompt", handler);
     return () => window.removeEventListener("beforeinstallprompt", handler);
   }, []);

   const onInstallClick = async () => {
     if (!deferredPrompt) return;
     await deferredPrompt.prompt();
     const choice = await deferredPrompt.userChoice;
     setDeferredPrompt(null);
     setIsVisible(false);
     if (choice.outcome === "accepted") {
       console.log("App installed");
     }
   };

   if (!isVisible) return null;

   return (
     <div className="fixed bottom-4 right-4 z-50">
       <button
         type="button"
         onClick={onInstallClick}
         className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-neutral-800"
       >
         Install App
       </button>
     </div>
   );
 }
