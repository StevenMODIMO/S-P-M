"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCallSharp } from "react-icons/io5";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isFormValid = name && email && message;

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const json = await response.json();

    if (json.error) {
      setError(json.error);
    } else {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <main>
      <div>
        <form
          onSubmit={sendEmail}
          onFocus={() => setError(null)}
          className="flex flex-col items-center gap-6 mt-6 text-white lg:items-start lg:w-fit lg:mx-auto"
        >
          <section className="flex flex-col items-center gap-6 lg:flex-row">
            <div className="flex flex-col items-start gap-2 m-2">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-72 border-b border-[#dec544] outline-none bg-black sm:w-80 md:w-96"
              />
            </div>
            <div className="flex flex-col items-start gap-2 m-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@email.com"
                className="w-72 border-b border-[#dec544] outline-none bg-black sm:w-80 md:w-96"
              />
            </div>
          </section>
          <div className="flex flex-col items-start gap-2 m-2">
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hi Steven, .... ..... .... .... ...."
              className="w-72 h-32 border-b border-[#dec544] outline-none bg-black sm:w-80 md:w-96 lg:w-[820px]"
            ></textarea>
          </div>
          <AnimatePresence>
            {isFormValid && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-[#1a1a1a] text-white w-fit p-1 rounded-sm mx-auto text-lg font-bold"
              >
                Send
              </motion.button>
            )}
          </AnimatePresence>
        </form>
      </div>
    </main>
  );
}

{
  /* <AnimatePresence>
{error && (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1 }}
    className="text-center p-1 rounded-sm bg-red-400 text-whitew w-96 mx-auto"
  >
    {error}
  </motion.div>
)}
</AnimatePresence> */
}
