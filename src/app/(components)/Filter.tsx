"use client";
import { useState } from "react";
import { filterOptions } from "../data/data";

interface CategoryProps {
  category: string;
}

const Filter: React.FC<CategoryProps> = ({ category }) => {
  return (
    <main>
      <header className="flex gap-1 mt-10 items-center outline-none mx-auto w-60 rounded sm:mt-10 md:mt-8">
        <select
          className="bg-[#201d1d] text-white p-2 w-[100%] focus:outline-none lg:text-xl"
          onChange={(e) => category === e.target.value}
        >
          {filterOptions.map((option) => {
            return (
              <option
                key={option.id}
                value={option.option}
                className="outline-none hover:bg-[#dec544] p-2 lg:text-xl"
              >
                {option.option}
              </option>
            );
          })}
        </select>
      </header>
    </main>
  );
};

export default Filter;
