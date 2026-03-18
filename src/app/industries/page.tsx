import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries — Document Scanning Solutions | scan2dms",
  description: "Document scanning and DMS solutions for legal, finance, healthcare, and education sectors.",
};

const industries = [
  {
    href: "/industries/legal",
    emoji: "⚖️",
    title: "Legal",
    description: "Secure document scanning for law firms. Scan case files, contracts, and correspondence directly to SharePoint or your DMS.",
  },
  {
    href: "/industries/finance",
    emoji: "💼",
    title: "Finance & Accounting",
    description: "Streamline invoice processing, compliance documents, and client records with PC-free scanning.",
  },
  {
    href: "/industries/healthcare",
    emoji: "🏥",
    title: "Healthcare",
    description: "GDPR-compliant scanning for patient records, referrals, and clinical documents direct to your document management system.",
  },
  {
    href: "/industries/education",
    emoji: "🎓",
    title: "Education",
    description: "Scan admissions forms, staff records, and administrative documents straight to OneDrive or SharePoint.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Tailored document scanning solutions for UK businesses across key sectors.
          </p>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <p className="text-lg text-gray-600 max-w-3xl">
          UK businesses across every sector are moving to digital document management. Find your industry below for tailored scanning and DMS guidance.
        </p>
      </section>

      {/* Industry Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry) => (
            <Link
              key={industry.href}
              href={industry.href}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="text-5xl mb-4">{industry.emoji}</div>
              <h2 className="text-2xl font-bold text-navy mb-3 group-hover:text-blue-600 transition-colors">
                {industry.title}
              </h2>
              <p className="text-gray-600 mb-4">{industry.description}</p>
              <span className="text-blue-600 font-medium text-sm">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Not sure which solution fits?</h2>
          <p className="text-gray-600 mb-8">Talk to a UK DMS specialist who knows your sector.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/consultants"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Find a Consultant
            </Link>
            <Link
              href="/contact"
              className="border border-navy text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
