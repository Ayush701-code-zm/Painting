"use client";

import { useState, useCallback } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const INITIAL: FormState = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
    },
    []
  );

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-[3rem]">
        <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-[rgba(196,81,42,0.12)] flex items-center justify-center mb-[1.25rem]">
          <span className="text-[#c4512a] text-[1.5rem]">✓</span>
        </div>
        <h3 className="font-['Instrument_Serif'] italic text-[1.75rem] text-[#1c1b18] mb-[0.75rem]">
          Message sent
        </h3>
        <p className="font-['Inter'] text-[0.9375rem] font-light text-[rgba(28,27,24,0.6)] leading-[1.7]">
          I&apos;ll get back to you within 1–2 business days.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full font-['Inter'] text-sm text-[#1c1b18] placeholder:text-[rgba(28,27,24,0.38)] bg-white border border-[rgba(28,27,24,0.14)] rounded-[0.75rem] px-[1rem] py-[0.8125rem] outline-none focus:border-[rgba(28,27,24,0.35)] transition-colors duration-200";

  const labelClass =
    "font-['Inter'] text-xs font-medium tracking-[0.06em] uppercase text-[rgba(28,27,24,0.5)] block mb-[0.5rem]";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[1.25rem]">
      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What would you like to know?"
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full font-['Inter'] text-[0.9375rem] font-semibold text-[#1c1b18] bg-[#fcc010] py-[0.9375rem] rounded-[3rem] hover:bg-[#e8ae00] transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
