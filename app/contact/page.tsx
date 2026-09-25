"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative w-full flex items-center justify-center min-h-screen mt-20 px-4 overflow-hidden bg-black">
  <div className="relative z-10 w-full max-w-xl">
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Contact Us
      </h1>
      <p className="text-neutral-400 text-sm md:text-base max-w-md mx-auto leading-relaxed">
        We are here to help you with any queries, courses, programs or
        events. Reach us and let us know how we can assist you in your
        musical journey.
      </p>
    </div>

    <div className="bg-neutral-900/60 backdrop-blur-md border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xl">
      {submitted ? (
        <div className="text-center py-8">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">Message Sent!</h2>
          <p className="text-neutral-300 text-sm">
            Thank you for reaching out. We will get back to you shortly.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold border border-neutral-700 transition"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contactemail"
              className="text-sm text-neutral-300 font-medium"
            >
              Email Address
            </label>
            <input
              required
              type="email"
              name="contactemail"
              id="contactemail"
              placeholder="Enter your e-mail address"
              className="w-full rounded-lg bg-neutral-800/80 border border-neutral-700 text-white placeholder:text-neutral-500 px-4 py-3 text-sm
                transition-all duration-300 ease-in-out
                focus:outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500/30"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contactmessage"
              className="text-sm text-neutral-300 font-medium"
            >
              Message
            </label>
            <textarea
              required
              name="contactmessage"
              id="contactmessage"
              rows={5}
              placeholder="Your message"
              className="w-full rounded-lg bg-neutral-800/80 border border-neutral-700 text-white placeholder:text-neutral-500 px-4 py-3 text-sm resize-none
                transition-all duration-300 ease-in-out
                focus:outline-none focus:border-neutral-500 focus:ring-2 focus:ring-neutral-500/30"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm py-3 border border-neutral-700
              transition-all duration-300 ease-in-out
              hover:scale-[1.02] hover:shadow-md
              active:scale-95
              cursor-pointer mt-2"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  </div>

  <BackgroundBeams />
</div>
  )
}
