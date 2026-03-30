import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { ScannerIllustration, DirectoryIllustration } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Document Scanning for Schools and Universities",
  description:
    "Streamline admissions, student records, and admin paperwork with PC-free scanning to SharePoint. Built for UK schools, colleges, and universities.",
  alternates: { canonical: "https://scan2dms.co.uk/industries/education" },
};

export default function EducationPage() {
  return (
    <>
      {/* Section 1 — HERO */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Document Scanning for Schools and Universities
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            From admissions to HR, digitise your school&apos;s paper trail without IT complexity.
          </p>
        </div>
      </section>

      {/* Section 2 — INTRO (2-column) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-[55%]">
            <h2 className="text-2xl font-bold text-navy mb-4">The Paper Challenge in Education</h2>
            <p className="text-gray-700 mb-4">
              Schools, colleges, and universities manage huge volumes of paper — student records, admissions forms, staff files, Ofsted documentation.
            </p>
            <p className="text-gray-700">
              A simple scanning solution that connects directly to SharePoint or your MIS keeps everything organised and retrievable, without adding IT burden.
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
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-lg font-bold text-navy mb-2">Ofsted Ready</h3>
              <p className="text-gray-600">All documentation digitised, indexed, and retrievable within seconds.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-lg font-bold text-navy mb-2">Safeguarding Compliant</h3>
              <p className="text-gray-600">Sensitive student records stored with appropriate access controls.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">📁</div>
              <h3 className="text-lg font-bold text-navy mb-2">Simple for Staff</h3>
              <p className="text-gray-600">No PC, no software — any staff member can scan on day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — PHOTO SECTION (2-column) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/industries/education.jpg"
              alt="Document scanning in a school office"
              width={900}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <div className="bg-navy text-white rounded-xl p-8">
              <p className="text-3xl font-extrabold mb-2">2.5 hrs/week</p>
              <p className="text-gray-300 mb-6">per admin spent on document filing — <span className="italic">BESA</span></p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2"><span>•</span> Reduce admin workload</li>
                <li className="flex items-start gap-2"><span>•</span> Secure student and staff records</li>
                <li className="flex items-start gap-2"><span>•</span> Support Ofsted and ISI inspections</li>
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
              <span className="text-3xl">📝</span>
              <p className="text-gray-700">Student admissions processing with automatic folder routing.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">🛡️</span>
              <p className="text-gray-700">Safeguarding record management with restricted access controls.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">👥</span>
              <p className="text-gray-700">HR and staff file digitisation for centralised personnel records.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">📄</span>
              <p className="text-gray-700">Exam script archiving with searchable, indexed document storage.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">✅</span>
              <p className="text-gray-700">Ofsted evidence compilation from across departments in minutes.</p>
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
              The Plustek eScan integrates with SIMS, Arbor, and Microsoft 365 for Education.
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
