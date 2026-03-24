import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Create a GDPR-Compliant Document Retention Schedule",
  description: "A step-by-step guide to building a document retention schedule that satisfies UK GDPR — with a template you can adapt for your business.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/gdpr-retention-schedule-template" },
};

export default function RetentionSchedulePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">How to Create a GDPR-Compliant Document Retention Schedule</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>A retention schedule is a document that lists each type of record your business holds, the legal basis for holding it, how long to keep it, and what to do when that period expires. It&apos;s one of the practical tools covered in our <Link href="/guides/document-management-gdpr-compliance-uk" className="text-blue-600 hover:underline">document management GDPR compliance</Link> guide.</p>

        <h2 className="text-2xl font-bold text-navy">Why You Need a Written Retention Schedule</h2>
        <p>UK GDPR Article 30 requires data controllers to maintain a Record of Processing Activities (ROPA). A retention schedule is the document management component of your ROPA — it demonstrates that you&apos;ve thought about what personal data you hold, why, and for how long. Without a written schedule, you have no defence if the ICO asks how you manage data retention.</p>
        <p>Practically, a retention schedule gives every member of staff a clear answer to &quot;how long do we keep this?&quot; — removing guesswork and the tendency to keep everything indefinitely because nobody wants to be responsible for disposing of something they might need later.</p>

        <h2 className="text-2xl font-bold text-navy">Step 1 — Inventory Your Documents</h2>
        <p>List every category of document your business creates, receives, or stores. Don&apos;t work at the individual document level — work at the category level. Examples:</p>
        <ul>
          <li>Customer contracts</li>
          <li>Supplier invoices</li>
          <li>Employee personnel files</li>
          <li>Payroll records</li>
          <li>Health and safety risk assessments</li>
          <li>Marketing consent records</li>
          <li>CCTV footage</li>
          <li>Job applications (successful and unsuccessful)</li>
        </ul>
        <p>For each category, note: does it contain personal data? If yes, whose personal data (employees, customers, suppliers, visitors)?</p>

        <h2 className="text-2xl font-bold text-navy">Step 2 — Identify the Legal Basis and Purpose</h2>
        <p>For each document category containing personal data, identify: the lawful basis for processing (contract, legal obligation, legitimate interests), and the business or legal purpose for keeping it. This is what justifies the retention period. The period should be the minimum necessary to fulfil that purpose — not longer.</p>

        <h2 className="text-2xl font-bold text-navy">Step 3 — Set the Retention Period</h2>
        <p>Use the legal requirements as your starting point (HMRC, employment law, sector regulations) and set retention at the required minimum. Don&apos;t exceed the legal minimum without a documented business reason. Common UK periods:</p>
        <ul>
          <li>Financial records: 6 years (HMRC)</li>
          <li>Employment records: 6 years after employment ends</li>
          <li>Contracts: 6 years after expiry (12 for deeds)</li>
          <li>CCTV: 31 days maximum (ICO guidance)</li>
          <li>Unsuccessful job applications: 6 months</li>
          <li>Marketing consent records: Until consent withdrawn + 1 year</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Step 4 — Define the Disposal Action</h2>
        <p>For each document type, define what happens at the end of the retention period:</p>
        <ul>
          <li><strong>Permanent deletion:</strong> Digital deletion + audit log; physical shredding</li>
          <li><strong>Review and decide:</strong> Assess whether there&apos;s an ongoing business need before deletion (useful for contracts where litigation is possible)</li>
          <li><strong>Archive:</strong> Move to cold storage for a further defined period before final deletion</li>
          <li><strong>Transfer:</strong> Transfer to another organisation that takes responsibility (e.g. demerged business)</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Retention Schedule Template</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-2 text-left">Document Type</th>
                <th className="border border-gray-200 p-2 text-left">Personal Data?</th>
                <th className="border border-gray-200 p-2 text-left">Lawful Basis</th>
                <th className="border border-gray-200 p-2 text-left">Retention Period</th>
                <th className="border border-gray-200 p-2 text-left">Trigger</th>
                <th className="border border-gray-200 p-2 text-left">Disposal Action</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-2">Customer contracts</td><td className="border border-gray-200 p-2">Yes</td><td className="border border-gray-200 p-2">Contract</td><td className="border border-gray-200 p-2">6 years</td><td className="border border-gray-200 p-2">Contract end date</td><td className="border border-gray-200 p-2">Secure deletion</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-2">Employee personnel files</td><td className="border border-gray-200 p-2">Yes</td><td className="border border-gray-200 p-2">Legal obligation</td><td className="border border-gray-200 p-2">6 years</td><td className="border border-gray-200 p-2">Employment end date</td><td className="border border-gray-200 p-2">Secure deletion</td></tr>
              <tr><td className="border border-gray-200 p-2">Supplier invoices</td><td className="border border-gray-200 p-2">Limited</td><td className="border border-gray-200 p-2">Legal obligation</td><td className="border border-gray-200 p-2">6 years</td><td className="border border-gray-200 p-2">Financial year end</td><td className="border border-gray-200 p-2">Secure deletion</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-2">Job applications (unsuccessful)</td><td className="border border-gray-200 p-2">Yes</td><td className="border border-gray-200 p-2">Legitimate interest</td><td className="border border-gray-200 p-2">6 months</td><td className="border border-gray-200 p-2">Decision date</td><td className="border border-gray-200 p-2">Secure deletion</td></tr>
              <tr><td className="border border-gray-200 p-2">CCTV footage</td><td className="border border-gray-200 p-2">Yes</td><td className="border border-gray-200 p-2">Legitimate interest</td><td className="border border-gray-200 p-2">31 days</td><td className="border border-gray-200 p-2">Recording date</td><td className="border border-gray-200 p-2">Auto-overwrite</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-navy">Step 5 — Implement in Your DMS</h2>
        <p>Once your schedule is written, configure retention labels in your DMS to match. Each document type gets a label with the retention period and disposal action. Documents scanned into the system are automatically labelled at point of filing. The DMS handles the rest: flagging for review at expiry, or auto-deleting according to the schedule.</p>

        <h2 className="text-2xl font-bold text-navy">Step 6 — Review Annually</h2>
        <p>Retention requirements change — HMRC guidance updates, sector regulations change, business activities evolve. Review and update your retention schedule at least annually. Document the review date and any changes made.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Implement your retention schedule in a DMS</h2>
        <p className="text-gray-300 mb-6">Compare DMS platforms with retention label and automated disposal features.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Compare DMS Systems →</Link>
        <Link href="/guides/document-management-gdpr-compliance-uk" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">GDPR Compliance Guide →</Link>
      </div>
    </main>
  );
}
