"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const isFormValid = name && email && subject && message;

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    });

    const json = await response.json();

    if (json.error) {
      console.log(json.error);
    } else {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <main>
      <h1 className="text-center text-xl p-3 font-bold text-[#DEC544]">
        Shoot me an email.
      </h1>
      <div>
        <form
          onSubmit={sendEmail}
          className="grid grid-cols-1 items-center w-72 mx-auto gap-3 sm:w-80"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className={
              name
                ? "p-2 rounded-sm outline-none bg-[#302f2a] border-b-2 border-[#DEC544]"
                : "p-2 rounded-sm outline-none bg-[#302f2a]"
            }
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={
              email
                ? "p-2 rounded-sm outline-none bg-[#302f2a] border-b-2 border-[#DEC544]"
                : "p-2 rounded-sm outline-none bg-[#302f2a]"
            }
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className={
              subject
                ? "p-2 rounded-sm outline-none bg-[#302f2a] border-b-2 border-[#DEC544]"
                : "p-2 rounded-sm outline-none bg-[#302f2a]"
            }
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className={
              message
                ? "p-2 rounded-sm outline-none bg-[#302f2a] border-b-2 border-[#DEC544] h-40"
                : "p-2 rounded-sm outline-none bg-[#302f2a] h-40"
            }
          ></textarea>
          {isFormValid && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="bg-[#DEC544] text-white w-fit p-1 rounded-sm mx-auto"
            >
              Submit
            </motion.button>
          )}
        </form>
      </div>
    </main>
  );
}
