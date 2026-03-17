import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Scanning for Finance Teams — Scan to SharePoint",
  description:
    "Scan invoices, receipts, and compliance documents directly to SharePoint. Designed for UK accountancy practices and finance departments.",
  alternates: { canonical: "https://scan2dms.com/industries/finance" },
};

export default function FinancePage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Document Scanning for Finance and Accounting Teams
          </h1>
          <p className="text-lg text-gray-300">
            Scan invoices, receipts, and compliance documents straight to SharePoint — with audit-ready filing from day one.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">The Paper Problem in Finance</h2>
          <p className="text-gray-700 mb-4">
            Finance teams and accountancy practices handle a relentless flow of paper: supplier invoices, expense receipts, bank statements, HMRC correspondence, client records, and tax returns. Every one of these documents needs to be captured, filed correctly, and retained for the required period — typically 6 years for HMRC purposes.
          </p>
          <p className="text-gray-700">
            The traditional scanning workflow — scan to PC, save locally, rename, upload to SharePoint — is slow and unreliable. Documents get saved to the wrong client folder, named inconsistently, or left in limbo on a desktop. When HMRC or the FCA come knocking, finding the right document quickly is critical.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">How the eScan Streamlines Financial Document Capture</h2>
          <p className="text-gray-700 mb-4">
            The Plustek eScan A450 Pro lets finance teams scan documents directly to structured SharePoint libraries — no PC, no manual upload, no room for filing errors. Set up profiles for each client, tax year, or document type, and scanned documents go to exactly the right place every time.
          </p>
          <p className="text-gray-700 mb-4">
            Built-in OCR creates searchable PDFs automatically, so you can find that one invoice from 2023 in seconds using SharePoint search. PDF/A output ensures documents meet long-term archiving requirements for regulatory retention.
          </p>
          <p className="text-gray-700">
            The 100-sheet ADF and 60 PPM scan speed handle batch processing of monthly invoice runs, quarterly returns, or year-end document packs without bottlenecks.
          </p>
        </section>

        <section className="mb-10 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Case Study: Clearview Accountants</h2>
          <p className="text-gray-700 mb-4">
            Clearview Accountants is an 8-person practice in Leeds handling personal tax, corporation tax, and bookkeeping for approximately 200 clients. Paper documents — tax forms, receipts, bank statements sent by post — were being scanned on a USB scanner connected to one shared PC.
          </p>
          <p className="text-gray-700 mb-4">
            The scanner driver frequently failed after Windows updates, creating multi-day scanning backlogs. Documents were sometimes filed to the wrong client folder in their SharePoint-based practice management system.
          </p>
          <p className="text-gray-700">
            After deploying the eScan A450 Pro with per-client scan profiles, the practice eliminated the PC dependency entirely. Staff scan incoming post directly to client folders in SharePoint as it arrives. The driver-related IT tickets stopped overnight, and a recent HMRC enquiry was resolved in minutes because the supporting documents were correctly filed and searchable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Key Benefits for Finance</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Scan invoices and receipts directly to client folders in SharePoint</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Searchable PDFs for instant document retrieval during audits</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>PDF/A format for HMRC-compliant long-term archiving</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Per-client scan profiles eliminate misfiling</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Batch scanning at 60 PPM for month-end processing</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>No PC dependency — zero driver-related IT tickets</li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Streamline Your Document Capture</h2>
          <p className="text-gray-600 mb-6">Talk to a UK specialist about scanning solutions for your finance team or practice.</p>
          <Link href="/contact" className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
            Get a Quote
          </Link>
        </section>
      </article>
    </>
  );
}
