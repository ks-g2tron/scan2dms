import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ScannerIllustration, DirectoryIllustration } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Document Scanning for Law Firms — Scan to SharePoint",
  description:
    "Streamline document scanning in your law firm. Scan case files, contracts, and court bundles directly to SharePoint matter folders with the Plustek eScan.",
  alternates: { canonical: "https://scan2dms.co.uk/industries/legal" },
};

export default function LegalPage() {
  return (
    <>
      {/* Section 1 — HERO */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Document Scanning for UK Law Firms
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Go paperless without disrupting your workflow. Scan case files direct to your DMS.
          </p>
        </div>
      </section>

      {/* Section 2 — INTRO (2-column) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-[55%]">
            <h2 className="text-2xl font-bold text-navy mb-4">The Scanning Challenge in Legal</h2>
            <p className="text-gray-700 mb-4">
              Law firms handle vast volumes of paper — contracts, correspondence, court documents. Manual filing creates compliance risk and slows fee earners.
            </p>
            <p className="text-gray-700">
              PC-free scanning to SharePoint or iManage transforms document intake, eliminating misfiling and giving every team member instant access to matter files.
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
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-lg font-bold text-navy mb-2">Compliance Ready</h3>
              <p className="text-gray-600">Scan and index documents to meet SRA record-keeping requirements automatically.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-lg font-bold text-navy mb-2">Secure by Design</h3>
              <p className="text-gray-600">Role-based access and audit trails built into every scan workflow.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-navy mb-2">Fee Earner Efficiency</h3>
              <p className="text-gray-600">Documents reach the matter file in seconds, not hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — PHOTO SECTION (2-column) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/industries/legal.jpg"
              alt="Document scanning in a law firm"
              width={900}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <div className="bg-navy text-white rounded-xl p-8">
              <p className="text-3xl font-extrabold mb-2">20%</p>
              <p className="text-gray-300 mb-6">of billable time spent on document admin — <span className="italic">LPM Magazine</span></p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2"><span>•</span> Reduce document handling time</li>
                <li className="flex items-start gap-2"><span>•</span> Improve matter file accuracy</li>
                <li className="flex items-start gap-2"><span>•</span> Audit-ready from day one</li>
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
              <span className="text-3xl">📄</span>
              <p className="text-gray-700">Contract intake scanning for new matters and client instructions.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">🏛️</span>
              <p className="text-gray-700">Court document filing and bundle preparation for hearings.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">✉️</span>
              <p className="text-gray-700">Client correspondence archiving to the correct matter folder.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">🔍</span>
              <p className="text-gray-700">Compliance audit preparation with indexed, searchable records.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">🏠</span>
              <p className="text-gray-700">Conveyancing document processing for property transactions.</p>
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
              The Plustek eScan connects directly to iManage, SharePoint, and NetDocuments.
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
