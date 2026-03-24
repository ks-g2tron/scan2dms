import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Going Paperless Checklist: Step-by-Step Template for UK Businesses",
  description: "A printable going paperless checklist for UK businesses — from scanner selection through to backlog clearance and staff training.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/going-paperless-checklist-uk" },
};

export default function PaperlessChecklistPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Going Paperless Checklist: Step-by-Step Template for UK Businesses</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>This checklist supports our full <Link href="/guides/going-paperless-uk-businesses" className="text-blue-600 hover:underline">how to go paperless</Link> guide. Use it to track your project from decision to fully operational digital workflow.</p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="font-semibold text-navy mb-2">How to use this checklist</p>
          <p className="text-gray-600 text-sm">Work through each phase in order. Don&apos;t skip ahead — each phase depends on the previous one being done properly. Print it out or copy it into your project tracker.</p>
        </div>

        <h2 className="text-2xl font-bold text-navy">Phase 1 — Planning (Week 1)</h2>
        <ul className="space-y-2">
          <li>☐ Appoint an internal project owner (not just IT — a business owner)</li>
          <li>☐ Identify all document types your business handles</li>
          <li>☐ Estimate document volumes (pages per week, total backlog)</li>
          <li>☐ Audit current storage: how many filing cabinets, what off-site archive?</li>
          <li>☐ Define retention requirements per document type (HMRC, SRA, NHS, GDPR as applicable)</li>
          <li>☐ Identify which documents require physical originals to be retained</li>
          <li>☐ Decide on destination: SharePoint, OneDrive, or dedicated DMS</li>
          <li>☐ Decide on scanner type: desktop USB or standalone PC-free network scanner</li>
          <li>☐ Get sign-off from management on budget and timeline</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Phase 2 — System Design (Week 2)</h2>
        <ul className="space-y-2">
          <li>☐ Design folder/library structure (before touching any documents)</li>
          <li>☐ Define metadata fields for each document type</li>
          <li>☐ Agree file naming convention</li>
          <li>☐ Define access permissions: who sees what</li>
          <li>☐ Set retention labels per document type</li>
          <li>☐ Create the folder structure in SharePoint/DMS</li>
          <li>☐ Test the structure with 20–30 real documents before proceeding</li>
          <li>☐ Get sign-off from each department head on their section&apos;s structure</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Phase 3 — Scanner Setup (Week 2–3)</h2>
        <ul className="space-y-2">
          <li>☐ Order and receive scanner</li>
          <li>☐ Connect to network (WiFi or Ethernet)</li>
          <li>☐ Authenticate with Microsoft 365 / DMS destination</li>
          <li>☐ Configure job buttons for each document type</li>
          <li>☐ Test scan for each job button — verify documents land correctly</li>
          <li>☐ Test metadata population — verify fields are populated correctly</li>
          <li>☐ Test barcode recognition if using (scan barcoded test document)</li>
          <li>☐ Train scanner operators (30 minutes each)</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Phase 4 — Backlog Digitisation (Weeks 3–8, depending on volume)</h2>
        <ul className="space-y-2">
          <li>☐ Triage all paper: scan / physical archive / shred</li>
          <li>☐ Start with active files (documents referenced regularly)</li>
          <li>☐ Scan compliance-critical records (needed for audits)</li>
          <li>☐ Verify scanned documents: image quality, correct filing, metadata</li>
          <li>☐ Securely shred or archive physical originals as appropriate</li>
          <li>☐ Historical archive: decide scan now vs defer (cost vs benefit)</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Phase 5 — Go Live and Training (Week 4–5)</h2>
        <ul className="space-y-2">
          <li>☐ Train all staff by role (scanner operators, regular users, power users, admins)</li>
          <li>☐ Appoint team champions in each department</li>
          <li>☐ Announce go-live date — clear communication to all staff</li>
          <li>☐ On go-live day: make old shared drive / filing system read-only</li>
          <li>☐ Establish &quot;scan on arrival&quot; rule for all new documents</li>
          <li>☐ Set date for old system archival (30 days after go-live recommended)</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Phase 6 — Embed and Review (Weeks 6–12)</h2>
        <ul className="space-y-2">
          <li>☐ Week 2 check-in: identify any adoption issues, fix quickly</li>
          <li>☐ Monitor scan volumes and document upload rates</li>
          <li>☐ Week 6 review: interview each department — what&apos;s working, what isn&apos;t</li>
          <li>☐ Archive old system (remove access per scheduled date)</li>
          <li>☐ Test document retrieval: can anyone find any document in under 30 seconds?</li>
          <li>☐ Verify retention labels are working (spot check documents past retention date)</li>
          <li>☐ Document final process for new staff onboarding</li>
          <li>☐ Calculate actual time saved vs pre-implementation baseline</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Ongoing Maintenance</h2>
        <ul className="space-y-2">
          <li>☐ Monthly: review documents pending retention action</li>
          <li>☐ Quarterly: audit random sample — are documents filed correctly with metadata?</li>
          <li>☐ Annually: review folder structure — does it still reflect how the business works?</li>
          <li>☐ Annually: review retention schedules — any regulatory changes?</li>
          <li>☐ When staff join: include DMS training in onboarding</li>
          <li>☐ When staff leave: reassign their documents and review their permissions</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Key Decisions Checklist</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Decision</th>
                <th className="border border-gray-200 p-3 text-left">Options</th>
                <th className="border border-gray-200 p-3 text-left">Your Choice</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Scanner type</td><td className="border border-gray-200 p-3">Desktop USB / PC-free network / MFP</td><td className="border border-gray-200 p-3">___</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Storage platform</td><td className="border border-gray-200 p-3">SharePoint / OneDrive / Dedicated DMS</td><td className="border border-gray-200 p-3">___</td></tr>
              <tr><td className="border border-gray-200 p-3">Implementation approach</td><td className="border border-gray-200 p-3">DIY / Consultant-led</td><td className="border border-gray-200 p-3">___</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Backlog approach</td><td className="border border-gray-200 p-3">In-house / Scanning bureau / Defer</td><td className="border border-gray-200 p-3">___</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Start with the full guide</h2>
        <p className="text-gray-300 mb-6">The going paperless guide covers each phase in detail.</p>
        <Link href="/guides/going-paperless-uk-businesses" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Going Paperless Guide →</Link>
        <Link href="/dms" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Compare DMS Systems →</Link>
      </div>
    </main>
  );
}
