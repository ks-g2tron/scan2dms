import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Migrate from a Shared Drive to a DMS",
  description: "Moving off a shared drive to a DMS? Here's the step-by-step migration process — folder mapping, metadata, and how to avoid losing anything.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/migrate-shared-drive-to-dms" },
};

export default function MigrateSharedDrivePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">How to Migrate from a Shared Drive to a Document Management System</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Before you migrate, make sure you&apos;ve chosen the right system — our <Link href="/guides/how-to-choose-document-management-system-uk" className="text-blue-600 hover:underline">best document management system UK</Link> guide walks through the full decision. This article covers the migration itself: how to move from a shared drive to a DMS without losing files, metadata, or your sanity.</p>

        <h2 className="text-2xl font-bold text-navy">Why Migrating Is Harder Than It Looks</h2>
        <p>Most businesses underestimate a shared drive migration. The temptation is to copy the folder structure across wholesale — same folders, same files, new location. That approach fails because it imports the problems as well as the documents.</p>
        <p>Shared drives accumulate years of disorganisation: duplicate files (final_FINAL_v3_USE_THIS.docx), deeply nested folders nobody can navigate, files in the wrong place because someone was in a hurry, personal files mixed with business documents, outdated templates still in use because nobody knows where the current ones are. Copying that across to a DMS just gives you an expensive, cloud-hosted mess.</p>

        <h2 className="text-2xl font-bold text-navy">Step 1 — Audit Before You Touch Anything</h2>
        <p>Spend time understanding what you actually have before moving anything:</p>
        <ul>
          <li><strong>Volume:</strong> How many files? How many GB? Use Windows Explorer or a tool like TreeSize to get the numbers.</li>
          <li><strong>Age profile:</strong> Sort by last modified. Files not touched in 3+ years are probably archive or redundant — don&apos;t migrate them to live storage.</li>
          <li><strong>Duplicates:</strong> Run a duplicate finder (Duplicate Cleaner Free is good). Most shared drives have 15–30% duplicate files.</li>
          <li><strong>Ownership:</strong> Which department owns which folders? You need them to validate their own areas.</li>
          <li><strong>What can be deleted:</strong> Expired documents, superseded templates, temp files, personal folders. Delete before you migrate, not after.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Step 2 — Design Your DMS Structure First</h2>
        <p>Do not replicate your shared drive folder structure in the DMS. Your shared drive structure evolved organically over years — it reflects how documents were created, not how they&apos;re used. Your DMS structure should reflect how documents are <em>retrieved</em>.</p>
        <p>Work backwards from retrieval: what questions do people ask when looking for a document? &quot;What&apos;s the current version of the X contract?&quot; &quot;Show me all invoices from Supplier Y in Q3 2024.&quot; &quot;Where&apos;s the health and safety policy?&quot; Your metadata fields and folder structure should make those questions answerable in under 10 seconds.</p>
        <p>Define your metadata schema before migration: what fields will every document type have? Document type, date, department, reference number, status? Agree this and document it — it&apos;s the foundation everything else builds on.</p>

        <h2 className="text-2xl font-bold text-navy">Step 3 — Run a Pilot Migration</h2>
        <p>Migrate one department&apos;s files first. Pick a manageable department — not the largest, not the most complex. Migrate their documents, validate the structure works, get feedback from the team. Is everything findable? Are the metadata fields useful? Does the folder hierarchy make sense?</p>
        <p>Fix issues in the structure before you migrate the other 95% of the business. Changes to metadata schema after a full migration are expensive.</p>

        <h2 className="text-2xl font-bold text-navy">Step 4 — The Full Migration</h2>
        <p>Tools for bulk migration:</p>
        <ul>
          <li><strong>SharePoint Migration Tool (SPMT):</strong> Free Microsoft tool for migrating network drives and file shares to SharePoint Online. Handles large volumes, preserves file dates and permissions.</li>
          <li><strong>Mover.io:</strong> Microsoft-owned, handles migrations between cloud platforms (Google Drive → SharePoint, Box → OneDrive, etc.).</li>
          <li><strong>DMS vendor migration tools:</strong> Most enterprise DMS vendors provide their own migration utilities. Ask specifically about network drive migration support.</li>
          <li><strong>Manual migration:</strong> For small volumes (under 5,000 files), drag and drop with careful review is sometimes the most controlled approach.</li>
        </ul>
        <p>During migration, put the shared drive in read-only mode. This prevents new files being created in the old location while the migration is in progress. It forces the conversation about the cutover date.</p>

        <h2 className="text-2xl font-bold text-navy">Step 5 — Decommission the Shared Drive</h2>
        <p>This is the step most businesses skip — and it&apos;s the reason migrations fail. If the shared drive stays available after the DMS goes live, people will keep using it. &quot;Just this once&quot; becomes the new normal. Within a month, half the business is still working from the old drive and the DMS is a ghost town.</p>
        <p>Set a hard cutover date. Communicate it clearly. On that date, make the shared drive read-only (not deleted — read-only). After 30 days of the DMS running cleanly, archive the shared drive to cold storage and remove access.</p>

        <h2 className="text-2xl font-bold text-navy">Common Migration Pitfalls</h2>
        <ul>
          <li><strong>Copying chaos:</strong> Migrating the folder structure as-is. Don&apos;t do it.</li>
          <li><strong>No metadata strategy:</strong> Files land in the DMS without tags. Nobody can find anything.</li>
          <li><strong>Skipping the audit:</strong> Migrating 50,000 files when 20,000 should have been deleted.</li>
          <li><strong>No staff training:</strong> The DMS goes live, nobody knows how to use it, everyone reverts to email.</li>
          <li><strong>Keeping the old drive alive:</strong> Ensures the migration is treated as optional.</li>
        </ul>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Need help with your migration?</h2>
        <p className="text-gray-300 mb-6">Find a UK DMS specialist who&apos;s done this before.</p>
        <Link href="/consultants" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Find a Consultant →</Link>
        <Link href="/dms" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Compare DMS Systems →</Link>
      </div>
    </main>
  );
}
