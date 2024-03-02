"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      setError(json.error);
    } else {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <main>
      <div>
        <form
          onSubmit={sendEmail}
          onFocus={() => setError(null)}
          className="grid grid-cols-1 items-center gap-3 sm:w-96"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className={
              name
                ? "p-2 rounded-sm outline-none bg-[#302f2a] border-b-2 border-[#DEC544] text-white"
                : "p-2 rounded-sm outline-none bg-[#302f2a]"
            }
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={
              email
                ? "p-2 rounded-sm outline-none bg-[#302f2a] border-b-2 border-[#DEC544] text-white"
                : "p-2 rounded-sm outline-none bg-[#302f2a]"
            }
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            className={
              subject
                ? "p-2 rounded-sm outline-none bg-[#302f2a] border-b-2 border-[#DEC544] text-white"
                : "p-2 rounded-sm outline-none bg-[#302f2a]"
            }
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className={
              message
                ? "p-2 rounded-sm outline-none bg-[#302f2a] border-b-2 border-[#DEC544] h-40 text-white"
                : "p-2 rounded-sm outline-none bg-[#302f2a] h-40"
            }
          ></textarea>
          <AnimatePresence>
            {isFormValid && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-[#DEC544] text-black w-fit p-1 rounded-sm mx-auto text-lg font-bold"
              >
                Send
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                className="text-center p-1 rounded-sm bg-red-400 text-white w-fit mx-auto"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </main>
  );
}
