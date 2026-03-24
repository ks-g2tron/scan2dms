import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is Barcode Document Splitting? How It Works and Who Needs It",
  description: "Barcode document splitting automatically separates stacked documents into individual files using barcodes. Here's how it works and when it's worth it.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/barcode-document-splitting-explained" },
};

export default function BarcodeSplittingPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">What Is Barcode Document Splitting? How It Works and Who Needs It</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Barcode splitting is one of the advanced features covered in our <Link href="/guides/scan-to-dms-document-scanning-workflows" className="text-blue-600 hover:underline">scan documents to SharePoint</Link> workflow guide. This article goes deeper on exactly how it works and the use cases where it saves significant time.</p>

        <h2 className="text-2xl font-bold text-navy">The Problem It Solves</h2>
        <p>Picture the end of a production shift: 40 quality inspection sheets, each relating to a different batch, stacked in a pile. Without barcode splitting, filing these digitally means one of three things: scan them all as one 40-page PDF (useless for retrieval), scan them one at a time (40 individual scan jobs), or scan them as a batch and split the PDF manually afterwards (slow and error-prone).</p>
        <p>With barcode splitting, all 40 sheets go into the scanner&apos;s ADF at once. The scanner reads the barcode on the first page of each document, uses each barcode as a split point, and outputs 40 individual named PDFs — one per batch, correctly filed, metadata populated — in the time it takes to scan 40 pages. That&apos;s typically under 2 minutes on a 35ppm scanner.</p>

        <h2 className="text-2xl font-bold text-navy">How Barcode Document Splitting Works</h2>
        <p>The process has three steps:</p>
        <ol>
          <li><strong>Barcode detection:</strong> As each page passes through the scanner, optical barcode recognition analyses the image for barcode patterns. This happens in real-time during the scan.</li>
          <li><strong>Split triggering:</strong> When a barcode is detected on a page (typically the first page of a new document), the scanner treats it as a document boundary and starts a new output file.</li>
          <li><strong>Metadata population:</strong> The barcode value is used to name the output file and/or populate metadata fields in the destination (SharePoint columns, folder names, file naming conventions).</li>
        </ol>
        <p>The entire stack is processed in a single pass through the ADF. The operator doesn&apos;t need to separate documents, enter reference numbers, or sort output files. Everything is automated from the point of pressing Scan.</p>

        <h2 className="text-2xl font-bold text-navy">Barcode Types Supported</h2>
        <p><strong>1D barcodes</strong> (linear barcodes) encode a single string of characters — typically a reference number. Types include Code128 (most common in business applications), Code39, EAN-13, and UPC. These are the barcodes you see on packages and job cards. They encode up to 80 characters reliably.</p>
        <p><strong>QR codes</strong> (2D barcodes) can encode significantly more data — URLs, multiple fields, structured data. They&apos;re useful when you want to encode more than just a reference number in the barcode, for example: batch number + product code + production date in a single scan.</p>
        <p><strong>DataMatrix</strong> codes are compact 2D barcodes used in manufacturing and aerospace, particularly where space on the document is limited.</p>
        <p>The Plustek eScan A450 Pro supports 12 barcode types including all of the above. For most manufacturing and logistics applications, Code128 or QR is the right choice.</p>

        <h2 className="text-2xl font-bold text-navy">What the Barcode Data Can Do</h2>
        <ul>
          <li><strong>Split the stack into individual files:</strong> The primary use case. Each barcode triggers a new output file.</li>
          <li><strong>Auto-name each file:</strong> Output files are named from the barcode value, e.g. &quot;BATCH-447-A.pdf&quot;, &quot;JOB-1094.pdf&quot;. No manual renaming.</li>
          <li><strong>Populate SharePoint metadata:</strong> The barcode value flows into the corresponding metadata column — Job Number, Batch ID, PO Number — without any operator input at the scanner.</li>
          <li><strong>Route to different destinations:</strong> Documents with barcodes starting with &quot;JOB-&quot; go to the Job Cards library; documents starting with &quot;BATCH-&quot; go to the Quality Inspection library. One scan job, automatically sorted.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Where It Saves the Most Time</h2>

        <h3 className="text-xl font-bold text-navy">Manufacturing — quality inspection sheets</h3>
        <p>Each sheet has a batch barcode. End-of-shift: the QA inspector stacks the day&apos;s sheets, feeds the stack, presses one button. Every sheet files automatically under the correct batch record in SharePoint. No typing, no sorting, no individual scans.</p>

        <h3 className="text-xl font-bold text-navy">Logistics — delivery notes</h3>
        <p>Each delivery note from a different supplier has a PO number barcode. The goods-in team scans the day&apos;s delivery notes as a batch. Each note files automatically under the correct PO number. Disputes with suppliers can be resolved in seconds — search by PO number, original delivery note is there.</p>

        <h3 className="text-xl font-bold text-navy">Legal — matter bundles</h3>
        <p>Court bundles and matter files pre-printed with matter reference barcodes. The post room scans incoming correspondence as a batch. Each letter files automatically into the correct matter folder.</p>

        <h3 className="text-xl font-bold text-navy">Healthcare — patient forms</h3>
        <p>Intake forms and consent documents with patient ID barcodes. Reception scans a batch of completed forms. Each form routes to the correct patient record automatically.</p>

        <h2 className="text-2xl font-bold text-navy">Do Your Documents Already Have Barcodes?</h2>
        <p>Many do. Delivery notes from suppliers almost always include a barcode (usually the supplier&apos;s order number or your PO number). Pre-printed job card templates from an ERP system typically include job number barcodes. NHS patient forms include NHS number barcodes.</p>
        <p>If your documents don&apos;t have barcodes: add a barcode field to your document template in Word or Excel. Generate the barcode from the reference number using free barcode font libraries. Print your documents with the barcode included. Alternatively, print barcode separator sheets to insert between documents that don&apos;t have their own barcodes.</p>

        <h2 className="text-2xl font-bold text-navy">Setting Up Barcode Splitting on the eScan</h2>
        <p>In the eScan job button configuration: enable Barcode Recognition, select the barcode types to detect, configure the split trigger (barcode on first page of each document), set the file naming rule (barcode value + optional suffix), and configure the metadata mapping (barcode value → SharePoint column name). Test with a small stack before deploying to production.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">See barcode splitting in practice</h2>
        <p className="text-gray-300 mb-6">The Plustek eScan A450 Pro supports 12 barcode types with automatic document splitting and metadata population.</p>
        <Link href="/products/escan-a450-pro" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">View the eScan A450 Pro →</Link>
      </div>
    </main>
  );
}
