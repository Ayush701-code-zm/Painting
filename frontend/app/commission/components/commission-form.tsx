"use client";

import { useState, useCallback } from "react";

type FormState = {
  name: string;
  email: string;
  vision: string;
  size: string;
  budget: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  vision: "",
  size: "",
  budget: "",
};

export default function CommissionForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      <div className="flex flex-col items-center text-center py-[3rem] px-[2rem]">
        <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-[rgba(196,81,42,0.12)] flex items-center justify-center mb-[1.25rem]">
          <span className="text-[#c4512a] text-[1.5rem]">✓</span>
        </div>
        <h3 className="font-['Instrument_Serif'] italic text-[1.75rem] text-[#1c1b18] mb-[0.75rem]">
          Request received
        </h3>
        <p className="font-['Inter'] text-[0.9375rem] font-light text-[rgba(28,27,24,0.6)] leading-[1.7] max-w-[22rem]">
          I&apos;ll review your vision and be in touch within 2–3 days to
          discuss details, timeline, and pricing.
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.25rem]">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
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
      </div>

      <div>
        <label htmlFor="vision" className={labelClass}>
          Describe your vision
        </label>
        <textarea
          id="vision"
          name="vision"
          required
          rows={5}
          placeholder="Tell me about the painting you have in mind — the mood, colours, subject, or feeling you want it to carry."
          value={form.vision}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1.25rem]">
        <div>
          <label htmlFor="size" className={labelClass}>
            Preferred Size
          </label>
          <select
            id="size"
            name="size"
            required
            value={form.size}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Select a size</option>
            <option>Small (up to 12 × 16 in)</option>
            <option>Medium (up to 20 × 24 in)</option>
            <option>Large (up to 30 × 40 in)</option>
            <option>Custom — let&apos;s discuss</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={form.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="" disabled>Select a range</option>
            <option>₹5,000 – ₹10,000</option>
            <option>₹10,000 – ₹25,000</option>
            <option>₹25,000 – ₹50,000</option>
            <option>₹50,000+</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full font-['Inter'] text-[0.9375rem] font-semibold text-[#1c1b18] bg-[#fcc010] py-[0.9375rem] rounded-[3rem] hover:bg-[#e8ae00] hover:shadow-[0px_6px_20px_0px_rgba(252,192,16,0.3)] transition duration-200 mt-[0.5rem]"
      >
        Send Commission Request
      </button>

      <p className="font-['Inter'] text-xs text-center text-[rgba(28,27,24,0.38)]">
        No payment now. I&apos;ll send a quote after reviewing your request.
      </p>
    </form>
  );
}
