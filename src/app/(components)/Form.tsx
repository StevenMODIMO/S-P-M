"use client";
import React from "react";
import { useState } from "react";

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
        <form onSubmit={sendEmail}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
          />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
          <button className="disabled:opacity-50" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
