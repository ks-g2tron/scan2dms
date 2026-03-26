import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScannerIllustration, DirectoryIllustration } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Document Scanning for Healthcare — NHS and Private Practice",
  description:
    "Scan patient forms, referrals, and clinical records directly to SharePoint. Designed for NHS trusts, GP practices, and private healthcare providers in the UK.",
  alternates: { canonical: "https://scan2dms.co.uk/industries/healthcare" },
};

export default function HealthcarePage() {
  return (
    <>
      {/* Section 1 — HERO */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            GDPR-Compliant Document Scanning for Healthcare
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Digitise patient records, referrals, and clinical documents securely and compliantly.
          </p>
        </div>
      </section>

      {/* Section 2 — INTRO (2-column) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-[55%]">
            <h2 className="text-2xl font-bold text-navy mb-4">The Paper Challenge in Healthcare</h2>
            <p className="text-gray-700 mb-4">
              NHS trusts, GP practices, and private clinics face mounting paper volumes alongside strict data governance requirements.
            </p>
            <p className="text-gray-700">
              Secure, auditable scanning to your clinical document management system reduces risk and improves patient care by putting the right records in front of clinicians when they need them.
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
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-lg font-bold text-navy mb-2">Patient Data Security</h3>
              <p className="text-gray-600">Encrypted scanning with full audit trails meets NHS data security standards.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-navy mb-2">Referral Processing</h3>
              <p className="text-gray-600">Scan and route referral letters to the right team in seconds.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-lg font-bold text-navy mb-2">CQC Compliant</h3>
              <p className="text-gray-600">Document retention policies enforced automatically at point of scan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — PHOTO SECTION (2-column) */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/images/industries/healthcare.jpg"
              alt="Document scanning in a healthcare setting"
              width={900}
              height={600}
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <div className="bg-navy text-white rounded-xl p-8">
              <p className="text-3xl font-extrabold mb-2">&pound;1.3bn</p>
              <p className="text-gray-300 mb-6">spent annually on paper document management — <span className="italic">NHS Digital</span></p>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2"><span>•</span> Faster patient record retrieval</li>
                <li className="flex items-start gap-2"><span>•</span> Reduced admin burden on clinical staff</li>
                <li className="flex items-start gap-2"><span>•</span> Full audit trail for CQC inspections</li>
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
              <span className="text-3xl">📁</span>
              <p className="text-gray-700">Patient record digitisation for secure, searchable clinical archives.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">📨</span>
              <p className="text-gray-700">GP referral letter processing routed directly to the right department.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">✍️</span>
              <p className="text-gray-700">Consent form archiving with timestamped, tamper-proof records.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">💊</span>
              <p className="text-gray-700">Prescription and medication records scanned for compliance auditing.</p>
            </div>
            <div className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
              <span className="text-3xl">🔍</span>
              <p className="text-gray-700">Clinical audit documentation compiled and indexed automatically.</p>
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
              The Plustek eScan works with EMIS, SystmOne document modules, and SharePoint.
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
