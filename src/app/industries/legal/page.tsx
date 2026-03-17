import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Scanning for Law Firms — Scan to SharePoint",
  description:
    "Streamline document scanning in your law firm. Scan case files, contracts, and court bundles directly to SharePoint matter folders with the Plustek eScan.",
  alternates: { canonical: "https://scan2dms.com/industries/legal" },
};

export default function LegalPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Document Scanning Solutions for Law Firms
          </h1>
          <p className="text-lg text-gray-300">
            Digitise case files, contracts, and court bundles directly into SharePoint — without a PC bottleneck.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">The Scanning Challenge in Legal</h2>
          <p className="text-gray-700 mb-4">
            Law firms handle enormous volumes of paper. Client correspondence, contracts, court bundles, witness statements, land registry documents, identity verification — paper is still central to legal work, even as firms move to digital case management systems and cloud platforms like SharePoint.
          </p>
          <p className="text-gray-700 mb-4">
            The challenge is getting that paper into the digital system efficiently. In most firms, scanning means finding a PC with a working scanner driver, scanning to the desktop, renaming the file, navigating to the correct client matter folder in SharePoint, and uploading. Support staff spend hours each week on this manual process. Documents get misfiled, named inconsistently, or left on PC desktops for days.
          </p>
          <p className="text-gray-700">
            For firms subject to SRA regulations and client confidentiality obligations, disorganised document management is more than an inconvenience — it is a compliance risk.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">How the eScan Solves It</h2>
          <p className="text-gray-700 mb-4">
            The Plustek eScan A450 Pro lets fee earners and support staff scan documents directly to SharePoint matter folders — from the scanner itself, without touching a PC. Each user can have profiles configured for their active matters, so scanning a bundle of client documents is as simple as: load the feeder, select the matter on the touchscreen, press scan.
          </p>
          <p className="text-gray-700 mb-4">
            The eScan&apos;s 100-sheet automatic document feeder and 60 pages per minute scan speed make it practical for large bundles. Built-in OCR means every scanned document is text-searchable in SharePoint immediately — crucial for matter searches and disclosure exercises.
          </p>
          <p className="text-gray-700">
            Because the eScan is a shared network device, it can be placed in the post room, the secretarial area, or anywhere documents arrive. Multiple users share the device, each with their own scan profiles. No driver installations, no IT tickets, no PC dependency.
          </p>
        </section>

        <section className="mb-10 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Case Study: Harrison &amp; Webb LLP</h2>
          <p className="text-gray-700 mb-4">
            Harrison &amp; Webb LLP is a 12-person solicitors firm in Manchester specialising in commercial property and corporate law. Before the eScan, their two secretaries spent an estimated 8 hours per week scanning, renaming, and uploading documents to their SharePoint-based case management system.
          </p>
          <p className="text-gray-700 mb-4">
            The firm placed an eScan A450 Pro in their post room and configured scan profiles for each active matter. Incoming post is now scanned directly to the relevant SharePoint matter folder as it arrives. Fee earners can also scan documents at the device after client meetings.
          </p>
          <p className="text-gray-700">
            Within three months, the firm reported an 80% reduction in paper filing, a significant reduction in misfiled documents, and secretarial time freed up for higher-value work. The total setup took one afternoon.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Key Benefits for Law Firms</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Scan directly to SharePoint matter folders — no PC, no manual upload</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Built-in OCR for text-searchable documents (essential for disclosure)</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>100-sheet ADF handles large bundles and court document packs</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Per-user profiles prevent misfiling and enforce folder structure</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>No driver or IT dependency — reduces support overhead</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Supports PDF/A for long-term archiving and regulatory compliance</li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Modernise Your Firm&apos;s Scanning</h2>
          <p className="text-gray-600 mb-6">Talk to a UK specialist about scanning solutions for your law firm.</p>
          <Link href="/contact" className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
            Get a Quote
          </Link>
        </section>
      </article>
    </>
  );
}
