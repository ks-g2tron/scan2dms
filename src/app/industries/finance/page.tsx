import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScannerIllustration, DirectoryIllustration } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Document Scanning for Finance Teams — Scan to SharePoint",
  description:
    "Scan invoices, receipts, and compliance documents directly to SharePoint. Designed for UK accountancy practices and finance departments.",
  alternates: { canonical: "https://scan2dms.com/industries/finance" },
};

export default function FinancePage() {
  return (
    <>
      {/* Section 1 — HERO */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Paperless Document Management for Finance Teams
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Automate invoice processing, compliance filing, and client records with direct-to-DMS scanning.
          </p>
        </div>
      </section>

      {/* Section 2 — INTRO (2-column) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-[55%]">
            <h2 className="text-2xl font-bold text-navy mb-4">The Paper Problem in Finance</h2>
            <p className="text-gray-700 mb-4">
              Finance and accountancy practices generate enormous paper trails — invoices, tax records, client files. Manual handling creates errors, delays, and compliance exposure.
            </p>
            <p className="text-gray-700">
              Direct scanning to cloud DMS eliminates the bottleneck, ensuring every document is correctly filed and instantly retrievable.
            </p>
          </div>
          <div className="md:w-[45%] flex justify-center">
            <ScannerIllustration />
          </div>
        </div>
      </section>

      {/* Section 3 — KEY BENEFITS (3 cards) */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-navy mb-2">Audit-Ready Records</h3>
              <p className="text-gray-600">Every document scanned, indexed, and timestamped automatically.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-lg font-bold text-navy mb-2">Faster Invoice Processing</h3>
              <p className="text-gray-600">Cut invoice handling time by scanning direct to your AP workflow.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-lg font-bold text-navy mb-2">GDPR Compliant</h3>
              <p className="text-gray-600">Controlled access and automated retention policies protect client data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — PHOTO SECTION (2-column) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/industries/finance.jpg"
              alt="Document scanning in a finance office"
              width={900}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <div className="bg-navy text-white rounded-xl p-8">
              <p className="text-3xl font-extrabold mb-2">30%</p>
              <p className="text-gray-300 mb-6">of time wasted searching for documents — <span className="italic">AIIM</span></p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2"><span>•</span> Eliminate manual data entry</li>
                <li className="flex items-start gap-2"><span>•</span> Accelerate month-end close</li>
                <li className="flex items-start gap-2"><span>•</span> Reduce compliance risk</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — USE CASES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Common Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">🧾</span>
              <p className="text-gray-700">Invoice and receipt capture for accounts payable processing.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">👤</span>
              <p className="text-gray-700">Client onboarding documents scanned and filed instantly.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">📑</span>
              <p className="text-gray-700">Tax return filing with automatic indexing by client and year.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">📋</span>
              <p className="text-gray-700">Year-end audit preparation with complete, searchable records.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">🗂️</span>
              <p className="text-gray-700">Regulatory compliance archiving with automated retention policies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — SCANNER CTA */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Need a scanner that works with your DMS?</h2>
            <p className="text-gray-300 mb-8">
              The Plustek eScan integrates with Sage, Xero, and SharePoint out of the box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products/escan-a450-pro"
                className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                View the Plustek eScan
              </Link>
              <Link
                href="/consultants"
                className="border border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
              >
                Find a DMS Consultant
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <DirectoryIllustration />
          </div>
        </div>
      </section>
    </>
  );
}
