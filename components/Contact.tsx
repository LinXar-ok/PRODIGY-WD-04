"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import TailwindButton from "./ui/TailwindButton";
import { LuSendHorizonal } from "react-icons/lu";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      to_name: "Linus",
      from_name: fullName,
      from_email: email,
      mobileNumber,
      emailSubject,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      .then(
        (response) => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          console.log("Email sent successfully!", response);

          setFullName("");
          setEmail("");
          setMobileNumber("");
          setEmailSubject("");
          setMessage("");
        },
        (error) => {
          setLoading(false);
          console.error("Email failed to send:", error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="min-h-96 max-w-7xl m-auto">
      <h1 className="text-3xl md:text-5xl font-bold text-center bg-[#2A2A2A] py-6 ">
        Contact Me
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="relative  md:flex justify-between my-4">
          <input
            name="fullName"
            type="text"
            placeholder="Your Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            autoComplete="name"
            className="w-full p-3 border border-[#2A2A2A] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 mr-5 bg-inherit mb-4 md:mb-0"
          />

          <input
            name="email"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="w-full p-3 border border-[#2A2A2A] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-inherit"
          />
        </div>

        <div className="relative  md:flex justify-between my-4">
          <input
            name="mobileNumber"
            type="number"
            placeholder="Mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            autoComplete="tel"
            className="w-full p-3 border border-[#2A2A2A] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 mr-5 bg-inherit mb-4 md:mb-0"
          />

          <input
            name="emailSubject"
            type="text"
            placeholder="Email Subject"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
            required
            autoComplete="off"
            className="w-full p-3 border border-[#2A2A2A] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-inherit"
          />
        </div>

        <div className="">
          <textarea
            name="message"
            cols={30}
            rows={10}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            autoComplete="off"
            className="w-full p-3 border border-[#2A2A2A] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-inherit"
          />
        </div>
        <div className="w-full flex justify-center py-5">
          <TailwindButton
            title={loading ? "Sending..." : "Send"}
            icon={<LuSendHorizonal size={20} />}
            position="right"
            otherClasses="py-5 px-6 text-lg"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
