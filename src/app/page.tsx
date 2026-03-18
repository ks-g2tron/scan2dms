import type { Metadata } from "next";
import Link from "next/link";
import { ScannerIllustration, JoinIllustration } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "scan2dms — The UK's DMS & Document Scanning Resource",
  description:
    "Compare document management systems, find a UK specialist, and discover the right scanning solution for your business. DMS directory, consultant listings, and expert guides.",
  alternates: { canonical: "https://scan2dms.com" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero — 2-column */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              The UK&apos;s DMS &amp; Document
              <br />
              <span className="text-blue-accent">Scanning Resource</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10">
              Compare document management systems, find a UK specialist, and
              discover the right scanning solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dms"
                className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                Browse DMS Systems
              </Link>
              <Link
                href="/consultants"
                className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                Find a Consultant
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <ScannerIllustration className="w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy/95 text-white py-8 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "🗂️", label: "20+ DMS Systems" },
              { icon: "🇬🇧", label: "UK Consultants Listed" },
              { icon: "✅", label: "Free to Use" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 rounded-xl px-6 py-5 border border-white/10"
              >
                <span className="text-2xl block mb-1">{stat.icon}</span>
                <span className="font-semibold text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📋",
                title: "Compare DMS Systems",
                desc: "Browse 20+ platforms side by side — filter by sector, deployment, and pricing.",
                href: "/dms",
                cta: "Browse Systems",
              },
              {
                icon: "🤝",
                title: "Find a UK Specialist",
                desc: "Connect with DMS consultants, resellers, and independent experts across the UK.",
                href: "/consultants",
                cta: "Find Specialists",
              },
              {
                icon: "🖨️",
                title: "Scanning Solutions",
                desc: "Discover PC-free scanners that connect directly to SharePoint, OneDrive, and more.",
                href: "/products/escan-a450-pro",
                cta: "View Hardware",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-accent transition-all group"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-blue-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.desc}</p>
                <span className="text-blue-accent font-semibold text-sm group-hover:underline">
                  {card.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            Built for Your Industry
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Legal", href: "/industries/legal", desc: "Digitise case files, contracts, and court bundles directly into SharePoint matter folders." },
              { title: "Finance", href: "/industries/finance", desc: "Scan invoices, receipts, and compliance documents straight to your M365 archive." },
              { title: "Healthcare", href: "/industries/healthcare", desc: "Capture patient forms, referrals, and clinical records with NHS-grade security." },
              { title: "Education", href: "/industries/education", desc: "Streamline admissions, student records, and administration paperwork." },
            ].map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-accent transition-all group"
              >
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue-accent transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm">{industry.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            Guides &amp; Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "What is Scan to DMS?", href: "/guides/what-is-scan-to-dms", desc: "An introduction to scanning documents directly into document management systems." },
              { title: "Why PC-Free Scanning?", href: "/guides/why-pc-free-scanning", desc: "The case for standalone network scanners that bypass the desktop entirely." },
              { title: "SharePoint Scanner Setup", href: "/guides/sharepoint-scanner-setup", desc: "Step-by-step guide to connecting a scanner to your SharePoint environment." },
            ].map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-accent transition-all group"
              >
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue-accent transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Consultant CTA — 2-column */}
      <section className="py-16 md:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:flex justify-center">
            <JoinIllustration className="w-full max-w-sm" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Are You a DMS Consultant?
            </h2>
            <p className="text-gray-300 text-lg mb-2">
              List your practice for free and get found by UK businesses
              looking for document management expertise.
            </p>
            <p className="text-gray-400 mb-8">
              No fees, no contracts — just visibility where it matters.
            </p>
            <Link
              href="/list-your-practice"
              className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
            >
              List Your Practice Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
