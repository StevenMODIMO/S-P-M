"use client";
import Github from "./social-components/Github";
import { IoShareSocialOutline } from "react-icons/io5";

export default function Social() {
  return (
    <section className="">
      <header className="flex items-center text-white">
        <h1 className="font-bold text-center p-3 text-xl lg:text-2xl">
          Join me socially
        </h1>
        <IoShareSocialOutline className="text-lg" />
      </header>
      <main className="text-[#DEC544] w-72 mx-auto sm:w-96 lg:grid lg:grid-cols-2 lg:w-[800px] lg:gap-3">
        <Github />
        <Github />
        <Github />
        <Github />
      </main>
    </section>
  );
}
