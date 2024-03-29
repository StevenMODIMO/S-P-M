"use client";
import { FaFilter } from "react-icons/fa";
import { filterOptions } from "../data/data";

export default function Filter() {
  return (
    <main>
      <header className="flex gap-1 mt-10 items-center outline-none mx-auto bg-[#201d1d] w-fit rounded sm:mt-10 md:mt-8 md:w-96">
        <select className="text-black p-2 focus:outline-none">
          {filterOptions.map((option) => {
            return (
              <option key={option.id} value={option.option} className="outline-none">
                {option.option}
              </option>
            );
          })}
        </select>
        <FaFilter />
      </header>
    </main>
  );
}
