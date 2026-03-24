import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Going Paperless on the Manufacturing Shopfloor: A Practical Guide",
  description: "How UK manufacturers can go paperless on the shopfloor — job cards, inspection sheets, delivery notes, and PC-free scanning workflows.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/going-paperless-manufacturing-shopfloor" },
};

export default function PaperlessManufacturingPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Going Paperless on the Manufacturing Shopfloor: A Practical Guide</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Manufacturing has unique challenges that generic going-paperless guides don&apos;t address. Our <Link href="/guides/going-paperless-uk-businesses" className="text-blue-600 hover:underline">how to go paperless</Link> guide covers the fundamentals. This article covers the shopfloor specifically — where paper is most damaging and most difficult to eliminate.</p>

        <h2 className="text-2xl font-bold text-navy">Why the Shopfloor Is Different</h2>
        <p>Office-based going-paperless projects have it relatively easy. Workers are at desks, near PCs, comfortable with computers. The shopfloor is none of these things. Workers move between machines, often have dirty or wet hands, are focused on physical tasks, and don&apos;t have time to navigate IT systems between operations.</p>
        <p>Any paperless solution for the shopfloor must meet one requirement above all others: it must be <em>faster and simpler</em> than the paper it replaces. If going digital takes longer or requires more steps, it won&apos;t happen.</p>

        <h2 className="text-2xl font-bold text-navy">The Three Critical Document Types</h2>

        <h3 className="text-xl font-bold text-navy">Job cards / works orders</h3>
        <p>Travels with every job from order entry to despatch. Records: operation details, operator, machine, times, any deviations. Gets dirty, wet, lost, illegible. When a customer queries an order 6 months later, finding the original job card from paper filing is a significant challenge.</p>

        <h3 className="text-xl font-bold text-navy">Quality inspection sheets</h3>
        <p>Completed by QA inspectors for every batch or operation. Evidence of conformance to specification. Critical for ISO 9001 compliance and for investigating non-conformances. Currently: filled in by hand, stacked at end of shift, maybe filed, often lost.</p>

        <h3 className="text-xl font-bold text-navy">Delivery notes</h3>
        <p>Arrive with every goods delivery. Record what was received, from whom, when, and in what condition. The basis for supplier payment disputes. Currently: signed, stamped, maybe passed to purchasing, often misfiled or lost before they get there.</p>

        <h2 className="text-2xl font-bold text-navy">The One-Button Scanning Solution</h2>
        <p>The practical answer for all three document types: a standalone PC-free network scanner positioned on or near the shopfloor, with one-touch job buttons pre-configured for each document type.</p>
        <p>The workflow for a job card:</p>
        <ol>
          <li>Operator completes the job card (still on paper — that&apos;s fine)</li>
          <li>At end of job, operator feeds card into the scanner</li>
          <li>Presses the &quot;Job Cards&quot; button</li>
          <li>Barcode on the job card reads the job number automatically</li>
          <li>Document files to SharePoint &quot;Job Cards&quot; library, tagged with job number</li>
          <li>Original card either retained physically (if required for traceability) or recycled</li>
        </ol>
        <p>Total operator time: 15 seconds. No PC, no login, no navigation. The job card is now searchable, retrievable by anyone with access, and safe from loss, damage, or flooding.</p>
        <p>For inspection sheets: the QA inspector scans a batch of completed sheets at end of shift. Barcode splitting separates the stack automatically — one PDF per batch, each named with the batch number. <Link href="/guides/barcode-document-splitting-explained" className="text-blue-600 hover:underline">See our barcode splitting guide</Link> for how this works.</p>

        <h2 className="text-2xl font-bold text-navy">Positioning the Scanner</h2>
        <p>Scanner placement is critical to adoption. Too far from the work area and it won&apos;t be used. Options:</p>
        <ul>
          <li><strong>Central shopfloor location:</strong> Accessible to all operators, near the production supervisor&apos;s station if there is one. WiFi required unless Ethernet cabling is practical.</li>
          <li><strong>Goods-in desk:</strong> For delivery notes — scanner at the goods-in point means delivery notes get scanned on arrival rather than stacking up.</li>
          <li><strong>QA station:</strong> For inspection sheets — at or near where inspections are performed.</li>
          <li><strong>Multiple scanners:</strong> For large facilities, consider one scanner per area. The cost (£450–700 per scanner) is typically justified by the document volume and the operational benefit.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">The ISO 9001 Payoff</h2>
        <p>ISO 9001 auditors require documented evidence that processes are controlled and followed. With paper-based quality records, audit preparation typically takes days — retrieving physical files, organising them for the auditor&apos;s review. With a properly configured SharePoint library, the audit evidence is available in seconds: search by batch number, part number, date range, or operator. The auditor gets what they need immediately. The preparation time drops from days to hours.</p>
        <p>For businesses pursuing ISO 9001 certification, a digital quality record system is effectively a prerequisite for practical compliance. <Link href="/guides/document-scanning-iso-9001-quality-management" className="text-blue-600 hover:underline">See our ISO 9001 scanning guide</Link>.</p>

        <h2 className="text-2xl font-bold text-navy">Managing the Transition</h2>
        <p>Don&apos;t try to eliminate paper everywhere at once. Start with one document type — delivery notes are often the easiest because they have a natural single-point workflow (goods-in). Get that working, let operators get comfortable with the scanner, then add job cards. Then inspection sheets. The technology is simple; the behaviour change takes time.</p>
        <p>The paper job card or inspection sheet doesn&apos;t need to disappear immediately. Scan and retain physical for the first month — it gives operators confidence that the system works before you remove the paper safety net.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">PC-free scanning for the shopfloor</h2>
        <p className="text-gray-300 mb-6">One button. Document files to SharePoint. No PC, no IT ticket.</p>
        <Link href="/products/escan-a450-pro" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">View the eScan A450 Pro →</Link>
        <Link href="/guides/scan-to-dms-document-scanning-workflows" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Scanning Workflow Guide →</Link>
      </div>
    </main>
  );
}
