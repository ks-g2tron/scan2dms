import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Digitise 10 Years of Paper Files (Without Losing Your Mind)",
  description: "Practical guide to tackling a large paper backlog — what to scan, what to shred, how to batch, and when to use a scanning bureau instead.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/digitise-paper-files-backlog" },
};

export default function DigitiseBacklogPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">How to Digitise 10 Years of Paper Files (Without Losing Your Mind)</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>The backlog is the part of going paperless everyone dreads. Our <Link href="/guides/going-paperless-uk-businesses" className="text-blue-600 hover:underline">how to go paperless</Link> guide covers the full process. This article tackles the hardest step: what to do with years of accumulated paper.</p>

        <h2 className="text-2xl font-bold text-navy">The First Rule: Don&apos;t Scan Everything</h2>
        <p>The biggest mistake in any backlog digitisation project is treating it as a scanning project. It&apos;s not — it&apos;s a document management project that happens to involve some scanning.</p>
        <p>Before a single page goes through a scanner, you need to decide what&apos;s worth keeping. Most businesses find that 30–50% of their paper backlog is redundant — duplicate copies, outdated versions, documents past their retention period, personal files that shouldn&apos;t be there, junk mail that somehow accumulated for a decade.</p>
        <p>Scanning redundant documents wastes time, wastes storage, and clutters your new digital system from day one.</p>

        <h2 className="text-2xl font-bold text-navy">Step 1 — Triage Your Backlog</h2>
        <p>Sort everything into four categories before you scan anything:</p>
        <ul>
          <li><strong>Scan and keep digital only:</strong> Documents still within retention period, referenced occasionally, not legally required as originals</li>
          <li><strong>Scan and retain physical:</strong> Documents where originals have legal value (signed deeds, some contracts, wet-signature documents)</li>
          <li><strong>Archive without scanning:</strong> Documents legally required to be kept but never referenced (very old records approaching end of retention period — cheaper to archive than scan)</li>
          <li><strong>Shred:</strong> Everything past retention period, duplicates, personal files, junk</li>
        </ul>
        <p>This triage step is tedious but it determines the scope of the scanning project. Most teams find it reduces the scanning volume by 40–60%.</p>

        <h2 className="text-2xl font-bold text-navy">Step 2 — Prioritise by Business Value</h2>
        <p>Don&apos;t digitise chronologically. Digitise by business value:</p>
        <ol>
          <li><strong>Active files first:</strong> Documents referenced regularly. These deliver the most immediate benefit — staff can find them digitally from day one.</li>
          <li><strong>Compliance-critical records second:</strong> Documents needed for audits, legal proceedings, or regulatory inspection. These reduce risk most urgently.</li>
          <li><strong>Historical archive last:</strong> Old records rarely accessed. These can be a slow background project over weeks or months.</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">Step 3 — Set Up Your Digital Structure First</h2>
        <p>Don&apos;t start scanning until your SharePoint or DMS folder structure and metadata schema are defined and tested. Scanning without a destination structure creates a digital version of the paper pile — same chaos, different format.</p>
        <p>Define: folder hierarchy, metadata fields per document type, naming conventions, retention labels. Scan 50 documents as a test to validate the structure works before processing thousands.</p>

        <h2 className="text-2xl font-bold text-navy">Step 4 — Choose Your Scanning Approach</h2>

        <h3 className="text-xl font-bold text-navy">DIY batch scanning</h3>
        <p>Use a high-speed ADF scanner (35–60ppm) with a 50–100 sheet ADF. Remove staples, unfold documents, batch by document type. Scan in batches of 50–100 pages, applying metadata per batch. For a 20-person office with 5 filing cabinets: expect 40–80 hours of scanning work.</p>

        <h3 className="text-xl font-bold text-navy">Dedicated scanning project days</h3>
        <p>Block out specific days — one department at a time. Clear the decks, assign someone to the scanner, work through systematically. More effective than an open-ended &quot;scan when you have time&quot; approach that drags on for months.</p>

        <h3 className="text-xl font-bold text-navy">Scanning bureau</h3>
        <p>For large volumes (10,000+ pages), professional scanning bureaus are often more cost-effective than staff time. Typical rates: £0.03–0.08/page for straightforward documents, including OCR and basic indexing. A 50,000-page archive: £1,500–4,000. The bureau handles preparation, scanning, OCR, and returns structured digital files ready to import into your DMS.</p>
        <p>Bureau advantages: fast (days not months), consistent quality, no staff time diverted, GDPR-compliant handling (reputable bureaus are ISO 27001 certified). Disadvantages: cost, security consideration of sending documents off-site, some quality control required on the output.</p>

        <h2 className="text-2xl font-bold text-navy">Step 5 — Verify and Index as You Go</h2>
        <p>Don&apos;t scan everything and then try to index it all at the end. Index as you go — apply metadata to each batch immediately after scanning. Catch errors while the documents are still on the desk in front of you.</p>
        <p>Random quality checks: after every 200 pages scanned, verify 10 random documents. Check image quality, correct filing, metadata accuracy. Catching a systematic problem early prevents hours of remediation work later.</p>

        <h2 className="text-2xl font-bold text-navy">Step 6 — Secure Disposal</h2>
        <p>Once documents are scanned and verified, originals that don&apos;t need physical retention should be securely shredded — not put in a recycling bin. Documents containing personal data require GDPR-compliant disposal. Options: in-house cross-cut shredder (suitable for small volumes), confidential waste sacks collected by a shredding company (most cost-effective for medium volumes), on-site shredding service (most secure for large volumes or sensitive material).</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Need help structuring your backlog project?</h2>
        <p className="text-gray-300 mb-6">Find a UK DMS specialist who can scope and manage it for you.</p>
        <Link href="/consultants" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Find a Consultant →</Link>
        <Link href="/guides/going-paperless-uk-businesses" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Going Paperless Guide →</Link>
      </div>
    </main>
  );
}
