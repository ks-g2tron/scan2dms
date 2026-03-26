import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Scanning for Accountants UK — HMRC Compliance | Scan2DMS",
  description:
    "How UK accountancy practices scan client records, tax documents, and receipts. Covers HMRC 6-year retention, Making Tax Digital requirements, and ICAEW guidance on digital records.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/document-scanning-accountants-uk" },
};

export default function DocumentScanningAccountantsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Document Scanning for UK Accountancy Practices</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Accountancy practices handle vast volumes of paper — client records, bank statements, receipts, invoices, tax correspondence, and Companies House filings. Every document needs to be retained for a defined period, retrievable on demand, and secure. Scanning into a structured document management system transforms how practices manage this burden.</p>

        <h2 className="text-2xl font-bold text-navy">HMRC Six-Year Retention Requirement</h2>
        <p>HMRC requires businesses and their accountants to retain records for specific periods:</p>
        <ul>
          <li><strong>Self-assessment records:</strong> 5 years after the 31 January submission deadline for that tax year (effectively ~6 years from the end of the tax year)</li>
          <li><strong>Corporation tax records:</strong> 6 years from the end of the accounting period</li>
          <li><strong>VAT records:</strong> 6 years (or 10 years for partial exemption methods)</li>
          <li><strong>PAYE records:</strong> 3 years after the end of the tax year to which they relate</li>
          <li><strong>CIS records:</strong> 3 years after the end of the tax year</li>
        </ul>
        <p>HMRC explicitly accepts digital copies of records. Their guidance states: &quot;You can keep records on paper, digitally or as part of a software program. You must be able to provide them to HMRC if asked.&quot; A scanned copy of an invoice or receipt has the same evidential standing as the paper original, provided it is legible and complete.</p>

        <h2 className="text-2xl font-bold text-navy">Making Tax Digital (MTD)</h2>
        <p>Making Tax Digital is driving the accountancy profession towards digital record-keeping whether firms are ready or not. MTD for VAT has been mandatory since April 2022 for all VAT-registered businesses. MTD for Income Tax Self-Assessment (ITSA) is being phased in from April 2026 for businesses and landlords with income over £50,000.</p>
        <p>MTD doesn&apos;t require scanning specifically, but it requires digital records. For clients who still provide paper records — and many do — scanning is the bridge between paper and the digital record-keeping MTD demands. Practices that can offer a scanning service to clients add value and reduce the friction of MTD compliance.</p>

        <h2 className="text-2xl font-bold text-navy">Client Records Scanning Workflow</h2>
        <p>The most effective workflow for accountancy practices follows the client engagement cycle:</p>
        <ol>
          <li><strong>Client onboarding:</strong> Scan engagement letters, proof of identity (anti-money laundering), and initial records into the client folder</li>
          <li><strong>Year-end document collection:</strong> When clients deliver their annual box of paperwork, scan everything on receipt. Tag each document with client code, document type, and tax year</li>
          <li><strong>Working papers:</strong> As the engagement progresses, scan any paper working documents and file alongside digital files in the same client folder</li>
          <li><strong>Final documents:</strong> Scan signed accounts, tax returns, and HMRC correspondence to the client file</li>
          <li><strong>Archive:</strong> At year-end, the entire engagement file is complete in digital form — no need to box and store paper</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">ICAEW Guidance on Digital Records</h2>
        <p>The Institute of Chartered Accountants in England and Wales (ICAEW) supports the use of digital records. ICAEW&apos;s guidance on record retention states that firms should:</p>
        <ul>
          <li>Maintain records in a form that allows them to be produced to regulators on request</li>
          <li>Ensure digital records are backed up and protected from loss, corruption, or unauthorised access</li>
          <li>Retain engagement files for a minimum period appropriate to the nature of the engagement — typically 6 years, or longer for tax-related work where HMRC enquiry windows remain open</li>
          <li>Consider professional indemnity insurance requirements, which may specify longer retention periods</li>
        </ul>
        <p>ACCA provides similar guidance for its members. Both bodies recognise that digital records, properly maintained, are preferable to paper for reliability, security, and accessibility.</p>

        <h2 className="text-2xl font-bold text-navy">Folder Structure for Accountancy Practices</h2>
        <p>A consistent client folder structure makes scanning efficient and retrieval reliable. Recommended structure:</p>
        <ul>
          <li><strong>01 - Engagement</strong> — engagement letter, terms of business, anti-money laundering verification</li>
          <li><strong>02 - Accounts</strong> — annual accounts, management accounts, trial balance</li>
          <li><strong>03 - Tax</strong> — corporation tax returns, self-assessment returns, HMRC correspondence</li>
          <li><strong>04 - VAT</strong> — VAT returns, supporting schedules, HMRC correspondence</li>
          <li><strong>05 - Payroll</strong> — RTI submissions, P60s, P11Ds, employment contracts</li>
          <li><strong>06 - Companies House</strong> — confirmation statements, Articles, board minutes</li>
          <li><strong>07 - Correspondence</strong> — client correspondence not specific to a work type</li>
          <li><strong>08 - Source Documents</strong> — scanned invoices, receipts, bank statements provided by the client</li>
        </ul>
        <p>Each folder is replicated per tax year (e.g. Client Name → 2025-26 → sub-folders). This maps naturally to how accountants think about client records.</p>

        <h2 className="text-2xl font-bold text-navy">Scanning Client-Provided Records</h2>
        <p>The annual document collection — the client&apos;s carrier bag of receipts and invoices — is the scanning bottleneck for many practices. Speed and accuracy matter here:</p>
        <ul>
          <li><strong>Batch scanning:</strong> A scanner with a 100-sheet ADF processes a client&apos;s annual records in minutes rather than hours</li>
          <li><strong>OCR:</strong> Optical character recognition makes scanned invoices searchable by supplier name, amount, or date</li>
          <li><strong>Auto-naming:</strong> Configure the scanner to name files by date and document type (e.g. 2025-03-15_Invoice_Supplier.pdf)</li>
          <li><strong>Direct to SharePoint:</strong> Scanned documents go straight to the correct client folder — no saving to desktop, then uploading, then filing</li>
        </ul>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Streamline your practice&apos;s document handling</h2>
        <p className="text-gray-300 mb-6">See scanning solutions for accountancy and finance practices.</p>
        <Link href="/industries/finance" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Finance Industry Solutions</Link>
        <Link href="/contact" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Get in Touch</Link>
      </div>
    </main>
  );
}
