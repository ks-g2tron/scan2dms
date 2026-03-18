import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides — Document Scanning & DMS | scan2dms",
  description: "Practical guides on document scanning, DMS setup, and going PC-free.",
};

const guides = [
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
            Practical advice on document scanning, DMS setup, and going paperless.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide) => (
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
