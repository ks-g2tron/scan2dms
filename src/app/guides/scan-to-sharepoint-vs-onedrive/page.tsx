import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scan to SharePoint vs Scan to OneDrive: Which Should You Use?",
  description: "SharePoint and OneDrive both store documents — but they're designed for very different use cases. Which is right for your scanning workflow?",
  alternates: { canonical: "https://scan2dms.co.uk/guides/scan-to-sharepoint-vs-onedrive" },
};

export default function ScanSharePointVsOnedrivePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Scan to SharePoint vs Scan to OneDrive: Which Should You Use?</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>For the full picture on <Link href="/guides/scan-to-dms-document-scanning-workflows" className="text-blue-600 hover:underline">scan documents to SharePoint</Link> workflows, see our complete guide. This article covers the specific question of SharePoint vs OneDrive as a scan destination — they&apos;re both part of Microsoft 365 but serve very different purposes.</p>

        <h2 className="text-2xl font-bold text-navy">SharePoint vs OneDrive — The Fundamental Difference</h2>
        <p><strong>OneDrive for Business</strong> is personal cloud storage. Each Microsoft 365 user gets 1TB of OneDrive storage that belongs to them. It&apos;s designed for individual files — your own work documents, personal reference material, drafts in progress. When you leave the organisation, your OneDrive goes with the off-boarding process.</p>
        <p><strong>SharePoint</strong> is organisational document storage. Document libraries in SharePoint belong to the organisation, not an individual. Multiple users can access, collaborate on, and manage the same documents. When someone leaves, the documents stay.</p>
        <p>Both are accessible from anywhere, both integrate with Teams and Outlook, and both appear in the same Microsoft 365 interface. The difference is ownership and access scope.</p>

        <h2 className="text-2xl font-bold text-navy">When to Scan to OneDrive</h2>
        <p>OneDrive makes sense as a scan destination in limited circumstances:</p>
        <ul>
          <li><strong>Personal receipts and expenses:</strong> A home worker scanning their own expense receipts before submitting them. The document only needs to be accessible to one person.</li>
          <li><strong>Personal reference material:</strong> Research documents, personal notes, reference PDFs that only one person uses.</li>
          <li><strong>Draft documents:</strong> Working copies of documents that will eventually be moved to SharePoint when ready for team access.</li>
          <li><strong>Solo traders:</strong> A one-person business where all documents belong to one individual anyway.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">When to Scan to SharePoint</h2>
        <p>SharePoint should be the default for almost all business document scanning:</p>
        <ul>
          <li><strong>Any document that multiple people need:</strong> Invoices, contracts, quality records, delivery notes, HR documents — anything that&apos;s a business record rather than a personal file.</li>
          <li><strong>Documents with metadata requirements:</strong> SharePoint has full column metadata (supplier name, job number, document type); OneDrive has very limited tagging capability.</li>
          <li><strong>Compliance documents:</strong> SharePoint supports retention labels, legal holds, and audit trails required for GDPR and sector-specific compliance. OneDrive has limited compliance features.</li>
          <li><strong>Documents that need access controls:</strong> SharePoint allows granular permissions at the library, folder, and document level. OneDrive permissions are primarily designed for personal use.</li>
          <li><strong>Searchable across the organisation:</strong> SharePoint documents appear in organisation-wide search. OneDrive documents appear only in personal search.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Key Differences for Scanning Workflows</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Feature</th>
                <th className="border border-gray-200 p-3 text-left">SharePoint</th>
                <th className="border border-gray-200 p-3 text-left">OneDrive</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Metadata columns</td><td className="border border-gray-200 p-3">✅ Full custom columns</td><td className="border border-gray-200 p-3">❌ Limited</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Multi-user access</td><td className="border border-gray-200 p-3">✅ Team-wide</td><td className="border border-gray-200 p-3">⚠️ Share required</td></tr>
              <tr><td className="border border-gray-200 p-3">Retention policies</td><td className="border border-gray-200 p-3">✅ Full support</td><td className="border border-gray-200 p-3">❌ Limited</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Audit trail</td><td className="border border-gray-200 p-3">✅ Full audit log</td><td className="border border-gray-200 p-3">⚠️ Basic</td></tr>
              <tr><td className="border border-gray-200 p-3">Org-wide search</td><td className="border border-gray-200 p-3">✅ Yes</td><td className="border border-gray-200 p-3">❌ Personal only</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Document survives leaver</td><td className="border border-gray-200 p-3">✅ Yes</td><td className="border border-gray-200 p-3">⚠️ Needs off-boarding process</td></tr>
              <tr><td className="border border-gray-200 p-3">Setup complexity</td><td className="border border-gray-200 p-3">Medium</td><td className="border border-gray-200 p-3">Low</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-navy">Can the eScan Scan to Both?</h2>
        <p>Yes. The Plustek eScan supports both SharePoint and OneDrive for Business as separate destinations. You can create different job buttons for each — one button that sends to the team SharePoint library, another that sends to the operator&apos;s personal OneDrive. Users select the appropriate button for each document type.</p>
        <p>The authentication works the same way for both — the user signs in with their Microsoft 365 credentials via OAuth 2.0, and the scanner gains access to both SharePoint sites and OneDrive that the user has permission to access.</p>

        <h2 className="text-2xl font-bold text-navy">The Practical Rule</h2>
        <p>Default to SharePoint for all business document scanning. Use OneDrive only for documents that genuinely belong to one person and don&apos;t need to be part of the organisational record. If in doubt — use SharePoint. The metadata, retention, and audit capabilities are worth the slightly more complex setup.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Set up your scanning workflow</h2>
        <p className="text-gray-300 mb-6">Step-by-step guide to connecting the eScan to SharePoint.</p>
        <Link href="/guides/scan-to-sharepoint-without-pc-setup" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">SharePoint Setup Guide →</Link>
      </div>
    </main>
  );
}
