import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides — Document Scanning & DMS | scan2dms",
  description: "Practical guides on document scanning, DMS setup, going paperless, GDPR compliance, and finding a consultant. For UK businesses.",
  alternates: { canonical: "https://scan2dms.co.uk/guides" },
};

const pillars = [
  {
    href: "/guides/going-paperless-uk-businesses",
    emoji: "📋",
    title: "The Complete Guide to Going Paperless",
    description: "Everything UK businesses need to go paperless — scanner choice, DMS selection, step-by-step workflow, and a printable checklist.",
    readTime: "12 min read",
    badge: "Pillar Guide",
  },
  {
    href: "/guides/how-to-choose-document-management-system-uk",
    emoji: "🗂️",
    title: "How to Choose a DMS: UK Buyer's Guide",
    description: "Five key questions, feature checklist, cloud vs on-premise, and a sector-by-sector breakdown to help you pick the right system.",
    readTime: "14 min read",
    badge: "Pillar Guide",
  },
  {
    href: "/guides/scan-to-dms-document-scanning-workflows",
    emoji: "🖨️",
    title: "Scan to DMS: Document Scanning Workflows",
    description: "How to scan directly to SharePoint or a DMS without a PC — including why HP scan-to-SharePoint broke in 2025 and how to fix it.",
    readTime: "11 min read",
    badge: "Pillar Guide",
  },
  {
    href: "/guides/document-management-gdpr-compliance-uk",
    emoji: "🔒",
    title: "Document Management and GDPR Compliance",
    description: "UK GDPR retention periods, right of erasure, audit trail requirements, and sector-specific rules for legal, finance, and healthcare.",
    readTime: "12 min read",
    badge: "Pillar Guide",
  },
  {
    href: "/guides/find-hire-dms-consultant-uk",
    emoji: "👤",
    title: "How to Find and Hire a DMS Consultant",
    description: "What consultants do, when you need one, what implementation costs, and how to avoid the red flags when choosing.",
    readTime: "10 min read",
    badge: "Pillar Guide",
  },
];

const foundationGuides = [
  {
    href: "/guides/what-is-scan-to-dms",
    emoji: "📄",
    title: "What is Scan to DMS?",
    description: "A plain-English guide to document management systems and why scan-to-DMS is replacing manual filing.",
    readTime: "4 min read",
  },
  {
    href: "/guides/sharepoint-scanner-setup",
    emoji: "☁️",
    title: "SharePoint Scanner Setup",
    description: "Step-by-step: how to connect a scanner directly to SharePoint without a PC.",
    readTime: "6 min read",
  },
  {
    href: "/guides/why-pc-free-scanning",
    emoji: "🖨️",
    title: "Why PC-Free Scanning?",
    description: "The case for dedicated scanners that work without a connected computer — and who they suit.",
    readTime: "3 min read",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Guides</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Practical advice on document scanning, DMS selection, going paperless, and staying GDPR-compliant — for UK businesses.
          </p>
        </div>
      </section>

      {/* Pillar guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-navy mb-2">In-Depth Guides</h2>
        <p className="text-gray-500 mb-8">Comprehensive topic guides for businesses evaluating their document management options.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{guide.emoji}</div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {guide.badge}
                </span>
              </div>
              <h2 className="text-xl font-bold text-navy mb-3 group-hover:text-blue-600 transition-colors">
                {guide.title}
              </h2>
              <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
              <span className="text-gray-400 text-xs">{guide.readTime}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Foundation guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl font-bold text-navy mb-2">Quick Guides</h2>
        <p className="text-gray-500 mb-8">Short, focused guides on specific topics.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {foundationGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <div className="text-4xl mb-4">{guide.emoji}</div>
              <h2 className="text-xl font-bold text-navy mb-3 group-hover:text-blue-600 transition-colors">
                {guide.title}
              </h2>
              <p className="text-gray-600 mb-4 text-sm">{guide.description}</p>
              <span className="text-gray-400 text-xs">{guide.readTime}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
