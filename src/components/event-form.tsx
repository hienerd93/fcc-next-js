"use client";
import { usePathname } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

export default function EventForm() {
  const inputEmail = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const emailValue = inputEmail.current?.value;
    console.log(emailValue, pathname);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, pathname }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);
      console.log(response);
      setMessage("");
      if (inputEmail.current) {
        inputEmail.current.value = "";
      }
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Get Registered for this event!</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </>
  );
}
