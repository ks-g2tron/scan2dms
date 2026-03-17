"use client";
import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    jobTitle: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-8">
          <h1 className="text-3xl font-extrabold text-navy mb-4">Thank you!</h1>
          <p className="text-gray-700 text-lg">Your enquiry has been received. We&apos;ll get back to you within one working day.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-navy mb-4">Get in Touch</h1>
      <p className="text-gray-600 mb-8">Tell us about your scanning requirements and we&apos;ll come back to you with a recommendation.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        {([
          { key: "name", label: "Full Name", type: "text", required: true },
          { key: "company", label: "Company", type: "text", required: false },
          { key: "jobTitle", label: "Job Title", type: "text", required: false },
          { key: "phone", label: "Phone", type: "tel", required: false },
          { key: "email", label: "Email", type: "email", required: true },
        ] as const).map((f) => (
          <div key={f.key}>
            <label htmlFor={f.key} className="block text-sm font-medium text-gray-700 mb-1">
              {f.label} {f.required && <span className="text-red-500">*</span>}
            </label>
            <input
              id={f.key}
              type={f.type}
              required={f.required}
              value={form[f.key]}
              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-accent focus:border-blue-accent outline-none"
            />
          </div>
        ))}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-accent focus:border-blue-accent outline-none"
          />
        </div>
        {status === "error" && (
          <p className="text-red-600 text-sm">Something went wrong. Please try again or email ks@scan2dms.com directly.</p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-navy text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Enquiry"}
        </button>
      </form>
    </main>
  );
}
