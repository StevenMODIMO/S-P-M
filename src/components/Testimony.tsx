"use client";
import { useState } from "react";
import { BiLogoUpwork } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

export default function Testimony() {
  const [description, setDescription] = useState(false);
  const [feedback, setFeedback] = useState(false);
  return (
    <main className="bg-[#110f0f] p-2 text-white mt-3 text-lg sm:w-[500px] mx-auto md:mt-6">
      <header className="flex items-center gap-1 m-3">
        <BiLogoUpwork className="text-green-500 text-xl" />
        <h1 className="font-bold text-xl">ReactJS Developer</h1>
      </header>
      <section className="m-3">
        <header
          className="flex items-center justify-between gap-1 cursor-pointer"
          onClick={() => setDescription(!description)}
        >
          <div>Job description</div>
          <IoIosArrowDown
            className={
              description
                ? "text-white text-xl rotate-180 transition-all duration-75 ease-in-out"
                : "text-white text-xl transition-all duration-75 ease-in-out"
            }
          />
        </header>
        {description && (
          <p className="text-center text-sm m-2">
            Hello there We are looking for react js developer. Work is
            straightforward. We have backend available in fast api and we are
            building a face recognition attendance system. Job is to recover
            front end with professional look and do the testing. API's are
            almost integrated
          </p>
        )}
      </section>
      <section className="m-3">
        <header
          className="flex items-center justify-between gap-1 cursor-pointer"
          onClick={() => setFeedback(!feedback)}
        >
          <div>Client's feedback</div>
          <IoIosArrowDown
            className={
              feedback
                ? "text-white text-xl rotate-180 transition-all duration-75 ease-in-out"
                : "text-white text-xl transition-all duration-75 ease-in-out"
            }
          />
        </header>
        {feedback && (
          <div className="text-center text-sm m-2">
            <p>
              "Awesome guy to work with Completed works in less than expected
              time and beyond expectations"
            </p>
            <p className="font-bold text-lg">Deepanshu Bhinda</p>
          </div>
        )}
      </section>
      <section>
        <header className="flex gap-3 m-3">
          <div className="flex gap-1 items-center">
            <FaRegStar className="text-yellow-500" />
            <FaRegStar className="text-yellow-500" />
            <FaRegStar className="text-yellow-500" />
            <FaRegStar className="text-yellow-500" />
            <FaRegStar className="text-yellow-500" />
          </div>
          <div className="">5.0</div>
        </header>
      </section>
      <Link
        href="https://www.upwork.com/freelancers/~010260cfee91eda24e"
        target="_blank"
        className="flex gap-1 items-center bg-green-500 mx-auto w-fit text-black m-3"
      >
        <h1>Proof</h1>
        <HiOutlineExternalLink className="text-xl" />
      </Link>
    </main>
  );
}
