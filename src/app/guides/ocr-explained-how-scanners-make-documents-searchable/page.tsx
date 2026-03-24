import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "OCR Explained: How Scanners Make Documents Searchable",
  description: "What is OCR, how does it work, and why does it matter for document management? Plain-English guide for UK businesses going paperless.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/ocr-explained-how-scanners-make-documents-searchable" },
};

export default function OcrExplainedPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">OCR Explained: How Scanners Make Documents Searchable</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>OCR is one of the key features to look for in a <Link href="/guides/scan-to-dms-document-scanning-workflows" className="text-blue-600 hover:underline">scan documents to SharePoint</Link> workflow. This guide explains what OCR is, how it works, and why it&apos;s the difference between a useful document archive and a digital filing cabinet you can&apos;t search.</p>

        <h2 className="text-2xl font-bold text-navy">What OCR Is (in Plain English)</h2>
        <p>When a scanner creates an image of a page, it produces a picture — a grid of coloured pixels that looks like text to a human, but contains no actual text data that a computer can read or search.</p>
        <p>OCR (Optical Character Recognition) analyses that pixel image and identifies the characters in it — letters, numbers, punctuation — and converts them into actual text data. The output is a file that contains both the original scanned image (so it looks identical to the paper original) and an invisible text layer underneath it.</p>
        <p>Without OCR: searching for &quot;Invoice Steelworks Direct March 2025&quot; finds nothing — the scanner created a picture, not a document. With OCR: the same search finds the document instantly, even if it was filed under a different name, because the text content is searchable.</p>

        <h2 className="text-2xl font-bold text-navy">Why OCR Matters for Document Management</h2>
        <p>Metadata (the fields you fill in when scanning — supplier name, document type, date) makes documents findable by the information you enter at scan time. OCR makes documents findable by their content — any word anywhere in the document.</p>
        <p>In practice: you scan 500 invoices over a year. You configured the Supplier Name metadata field, so you can find all invoices from a specific supplier. But what if you remember a specific line item or product description, not the supplier? With OCR, searching for that phrase finds the right invoice. Without OCR, you&apos;re scrolling through all 500.</p>
        <p>For compliance purposes: OCR makes it possible to respond to a Subject Access Request by searching for an individual&apos;s name across your entire document archive — something that would take days manually but takes seconds with full-text search on an OCR-processed archive.</p>

        <h2 className="text-2xl font-bold text-navy">How OCR Works</h2>
        <p>Modern OCR has four stages:</p>
        <ol>
          <li><strong>Pre-processing:</strong> The scanned image is cleaned up — skew correction (straightening pages that went through the ADF at a slight angle), noise reduction, contrast enhancement. This significantly improves recognition accuracy.</li>
          <li><strong>Layout analysis:</strong> The OCR engine identifies text regions, distinguishing text from images, tables, and graphics on the page.</li>
          <li><strong>Character recognition:</strong> Each character in the text regions is analysed and matched against font pattern libraries. Modern OCR engines use neural networks trained on millions of document samples.</li>
          <li><strong>Output generation:</strong> The recognised text is embedded in the document as a hidden text layer, creating a searchable PDF while preserving the original image appearance.</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">OCR Quality — What Affects Accuracy</h2>

        <h3 className="text-xl font-bold text-navy">Scan resolution</h3>
        <p>300dpi (dots per inch) is the minimum for reliable OCR. 400dpi improves accuracy for small or condensed fonts. Scanning at 200dpi produces images that look fine to the eye but have noticeably lower OCR accuracy. All modern document scanners default to 300dpi — confirm your scanner settings aren&apos;t set lower for file size reasons.</p>

        <h3 className="text-xl font-bold text-navy">Document condition</h3>
        <p>Faded ink, creased paper, and low-contrast originals all reduce OCR accuracy. A heavily worn job card from a noisy production environment will OCR less accurately than a clean printed invoice. For important documents with poor condition, check OCR output quality and consider manual verification of key fields.</p>

        <h3 className="text-xl font-bold text-navy">Font type</h3>
        <p>Standard printed fonts (Arial, Times New Roman, Helvetica) achieve near-100% OCR accuracy. Decorative or script fonts reduce accuracy. Handwriting is a separate category — modern AI-based handwriting recognition (ICR) achieves 70–85% accuracy on clear handwriting, lower for difficult scripts.</p>

        <h2 className="text-2xl font-bold text-navy">Searchable PDF vs Plain Text Output</h2>
        <p><strong>Searchable PDF</strong> (also called PDF/A or image+text PDF): The scanned image is preserved exactly as it appears, with a hidden text layer added for search. This is the standard output for business document scanning — the document looks identical to the original, but is fully searchable. File size is larger than image-only PDF but manageable (a typical A4 page at 300dpi is 50–150KB as searchable PDF).</p>
        <p><strong>Plain text or Word output:</strong> OCR extracts only the text, discarding the original image. Useful for data extraction workflows where you want to process the text content programmatically — but loses all formatting, tables, signatures, and stamps. Not appropriate for archival scanning where the appearance of the original matters.</p>

        <h2 className="text-2xl font-bold text-navy">When OCR Won&apos;t Help</h2>
        <p>OCR is powerful but not universal. Situations where it provides limited benefit:</p>
        <ul>
          <li><strong>Handwritten documents:</strong> Handwriting recognition accuracy is lower than printed text, particularly for difficult handwriting. For hand-completed forms, barcode-driven metadata is more reliable than relying on OCR to read handwritten field values.</li>
          <li><strong>Complex form layouts:</strong> OCR reads text sequentially and may struggle with multi-column forms, overlapping elements, or rotated text. Specialist forms-processing software handles these better.</li>
          <li><strong>Very poor quality originals:</strong> Documents that are heavily degraded, water damaged, or printed on low-quality paper may produce OCR output that&apos;s worse than no OCR at all.</li>
        </ul>
        <p>For these cases, robust metadata entry at the point of scan — using barcode recognition or prompted metadata fields on the scanner touchscreen — provides more reliable findability than OCR search.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Scan to SharePoint with built-in OCR</h2>
        <p className="text-gray-300 mb-6">The Plustek eScan produces searchable PDFs directly — no post-processing needed.</p>
        <Link href="/products/escan-a450-pro" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">View the eScan A450 Pro →</Link>
      </div>
    </main>
  );
}
