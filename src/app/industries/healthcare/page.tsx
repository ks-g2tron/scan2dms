import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Scanning for Healthcare — NHS and Private Practice",
  description:
    "Scan patient forms, referrals, and clinical records directly to SharePoint. Designed for NHS trusts, GP practices, and private healthcare providers in the UK.",
  alternates: { canonical: "https://scan2dms.com/industries/healthcare" },
};

export default function HealthcarePage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Document Scanning for Healthcare Providers
          </h1>
          <p className="text-lg text-gray-300">
            Capture patient forms, referrals, and clinical correspondence with a scanner built for healthcare workflows and NHS environments.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Paper in Healthcare</h2>
          <p className="text-gray-700 mb-4">
            Despite the push towards digital records, paper remains deeply embedded in UK healthcare. GP practices receive referral letters, discharge summaries, insurance forms, patient consent documents, and clinical correspondence by post and fax daily. NHS trusts process thousands of paper documents across departments.
          </p>
          <p className="text-gray-700">
            These documents need to be digitised, filed to the correct patient or department record, and retained in compliance with NHS information governance standards. The scanning process must be fast, reliable, and secure — with minimal disruption to clinical and administrative workflows.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">How the eScan Supports Healthcare</h2>
          <p className="text-gray-700 mb-4">
            The Plustek eScan A450 Pro can be deployed in reception areas, admin offices, or clinical departments. It scans documents directly to SharePoint document libraries or network folders — no PC required. Practice managers can set up profiles for different document types: patient referrals, consent forms, insurance claims, internal correspondence.
          </p>
          <p className="text-gray-700 mb-4">
            The touchscreen interface is simple enough for any staff member to use without training. Built-in OCR creates searchable PDFs, so documents can be found quickly during patient consultations or audits. The device supports encrypted network connections for data in transit.
          </p>
          <p className="text-gray-700">
            For practices using Microsoft 365 — increasingly common across NHS and private healthcare — the eScan integrates natively with SharePoint and OneDrive, providing a direct path from paper to your existing digital infrastructure.
          </p>
        </section>

        <section className="mb-10 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Case Study: Riverside Medical Centre</h2>
          <p className="text-gray-700 mb-4">
            Riverside Medical Centre is a 4-GP practice in Surrey with approximately 8,000 registered patients. The practice receives around 50 paper documents per day — referral letters, hospital discharge summaries, insurance reports, and patient consent forms.
          </p>
          <p className="text-gray-700 mb-4">
            Previously, a receptionist scanned documents on a USB-connected scanner, saved them to a shared PC, then manually uploaded each one to the practice&apos;s SharePoint document library. The process took approximately 2 hours per day and was frequently delayed by scanner driver issues.
          </p>
          <p className="text-gray-700">
            After deploying the eScan in reception, incoming documents are now scanned directly to SharePoint as they arrive. The receptionist loads the document feeder, selects the document type on the touchscreen, and presses scan. GPs can access scanned documents during consultations within minutes of arrival. The daily scanning workload dropped from 2 hours to 30 minutes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Key Benefits for Healthcare</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Scan patient documents directly to SharePoint — no PC required</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Touchscreen interface requires minimal staff training</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Searchable PDFs for rapid retrieval during consultations</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Supports encrypted connections for information governance</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>100-sheet ADF for batch processing of daily post</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>No driver or PC dependency — reliable daily operation</li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Improve Document Capture in Your Practice</h2>
          <p className="text-gray-600 mb-6">Speak with a UK specialist about scanning solutions for healthcare.</p>
          <Link href="/contact" className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
            Get a Quote
          </Link>
        </section>
      </article>
    </>
  );
}
