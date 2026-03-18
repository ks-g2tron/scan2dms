"use client";

import { useState } from "react";

const regions = [
  "London",
  "South East",
  "South West",
  "East of England",
  "East Midlands",
  "West Midlands",
  "Yorkshire & Humber",
  "North West",
  "North East",
  "Scotland",
  "Wales",
  "Northern Ireland",
];

const specialismOptions = [
  "SharePoint",
  "Microsoft 365",
  "DMS Implementation",
  "Scanning & Capture",
  "Document Workflow",
  "Records Management",
  "Cloud Migration",
  "Other",
];

const sectorOptions = [
  "Legal",
  "Finance & Accounting",
  "Healthcare",
  "Construction",
  "Education",
  "Manufacturing",
  "Retail",
  "Public Sector",
  "General",
];

export default function ListYourPracticePage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("Individual");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [specialisms, setSpecialisms] = useState<string[]>([]);
  const [sectors, setSectors] = useState<string[]>([]);
  const [description, setDescription] = useState("");

  const toggleCheckbox = (
    value: string,
    list: string[],
    setter: (v: string[]) => void
  ) => {
    setter(
      list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/list-practice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          type,
          website,
          email,
          phone,
          linkedin,
          city,
          region,
          specialisms,
          sectors,
          description,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">✅</div>
          <h1 className="text-3xl font-extrabold text-navy mb-4">
            Thanks for Your Submission!
          </h1>
          <p className="text-gray-600 text-lg">
            We&apos;ll review your listing and add it to the directory within 48
            hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            List Your Practice
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join the scan2dms consultant directory for free. Get found by UK
            businesses looking for document management expertise.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-accent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <div className="flex gap-6">
                {["Individual", "Consultancy", "Reseller"].map((t) => (
                  <label key={t} className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="type"
                      value={t}
                      checked={type === t}
                      onChange={(e) => setType(e.target.value)}
                      className="text-blue-accent focus:ring-blue-accent"
                    />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-accent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Website URL
                </label>
                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-accent"
                  placeholder="https://"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-accent"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Region
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-accent"
                >
                  <option value="">Select region...</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialisms
              </label>
              <div className="grid grid-cols-2 gap-2">
                {specialismOptions.map((s) => (
                  <label
                    key={s}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      checked={specialisms.includes(s)}
                      onChange={() =>
                        toggleCheckbox(s, specialisms, setSpecialisms)
                      }
                      className="text-blue-accent focus:ring-blue-accent rounded"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sectors Served
              </label>
              <div className="grid grid-cols-2 gap-2">
                {sectorOptions.map((s) => (
                  <label
                    key={s}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <input
                      type="checkbox"
                      checked={sectors.includes(s)}
                      onChange={() => toggleCheckbox(s, sectors, setSectors)}
                      className="text-blue-accent focus:ring-blue-accent rounded"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brief Description
              </label>
              <textarea
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value.slice(0, 300))
                }
                rows={4}
                maxLength={300}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-accent"
                placeholder="Describe your practice, expertise, and the types of clients you work with..."
              />
              <p className="text-xs text-gray-400 mt-1 text-right">
                {description.length}/300
              </p>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-accent hover:bg-blue-600 disabled:opacity-50 text-white font-semibold py-4 rounded-lg text-lg transition-colors"
            >
              {submitting ? "Submitting..." : "Submit Your Listing"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
