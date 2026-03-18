import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "scan2dms — The UK's DMS & Document Scanning Resource",
  description:
    "Compare document management systems, find a UK specialist, and discover the right scanning solution for your business. DMS directory, consultant listings, and expert guides.",
  alternates: { canonical: "https://scan2dms.com" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            The UK&apos;s DMS &amp; Document
            <br />
            <span className="text-blue-accent">Scanning Resource</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Compare document management systems, find a UK specialist, and
            discover the right scanning solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dms"
              className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Browse DMS Systems
            </Link>
            <Link
              href="/consultants"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Find a Consultant
            </Link>
          </div>
        </div>
      </section>

      {/* Directory Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            Everything You Need in One Place
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "DMS Directory",
                desc: "Compare 20 document management systems side by side. Filter by sector, deployment type, and pricing to find the right platform for your organisation.",
                icon: "📋",
                href: "/dms",
                cta: "Browse Systems",
              },
              {
                title: "Consultant Directory",
                desc: "Find UK-based DMS specialists, consultancies, and resellers who can help you implement and optimise your document management strategy.",
                icon: "🤝",
                href: "/consultants",
                cta: "Find Specialists",
              },
              {
                title: "Guides & Resources",
                desc: "Learn about scan-to-DMS workflows, PC-free scanning, SharePoint setup, and best practices for going paperless in your industry.",
                icon: "📖",
                href: "/guides/what-is-scan-to-dms",
                cta: "Read Guides",
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

      {/* Featured Hardware */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-blue-accent font-semibold mb-2">Featured Hardware</p>
                <h2 className="text-3xl font-bold text-navy mb-4">
                  Need a Scanner That Works With Any DMS?
                </h2>
                <p className="text-gray-600 mb-6">
                  The Plustek eScan connects directly to SharePoint, OneDrive and
                  more — no PC, no driver, no IT ticket. Place your document, tap
                  the 7&quot; touchscreen, done.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-center gap-3"><span className="text-blue-accent font-bold">60 PPM</span> colour and mono scanning</li>
                  <li className="flex items-center gap-3"><span className="text-blue-accent font-bold">7&quot; Touchscreen</span> for intuitive operation</li>
                  <li className="flex items-center gap-3"><span className="text-blue-accent font-bold">100-Sheet ADF</span> with duplex scanning</li>
                  <li className="flex items-center gap-3"><span className="text-blue-accent font-bold">WiFi + Ethernet</span> connectivity</li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/products/escan-a450-pro"
                    className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block text-center"
                  >
                    View Full Specs
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block text-center"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl h-64 md:h-80 flex items-center justify-center">
                <p className="text-gray-400 text-lg">Product Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24 bg-gray-50">
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
      <section className="py-16 md:py-24">
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

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Are You a DMS Consultant?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            List your practice for free and get found by UK businesses looking
            for document management expertise.
          </p>
          <Link
            href="/list-your-practice"
            className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
          >
            List Your Practice — Free
          </Link>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-gray-500">
            <span>20 DMS Systems Compared</span>
            <span className="hidden md:inline">|</span>
            <span>UK Consultant Directory</span>
            <span className="hidden md:inline">|</span>
            <span>SharePoint Native Scanning</span>
            <span className="hidden md:inline">|</span>
            <span>Free to List</span>
          </div>
        </div>
      </section>
    </>
  );
}
