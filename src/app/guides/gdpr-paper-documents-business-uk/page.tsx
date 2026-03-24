import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR and Paper Files: What Your UK Business Is Required to Do",
  description: "UK GDPR applies to paper files, not just digital. What does that mean for your filing cabinets, archive boxes, and paper-based processes?",
  alternates: { canonical: "https://scan2dms.co.uk/guides/gdpr-paper-documents-business-uk" },
};

export default function GdprPaperDocumentsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">GDPR and Paper Files: What Your UK Business Is Required to Do</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Many businesses apply GDPR thinking to their digital systems and ignore their filing cabinets. That&apos;s a compliance gap. Our full <Link href="/guides/document-management-gdpr-compliance-uk" className="text-blue-600 hover:underline">document management GDPR compliance</Link> guide covers both. This article focuses specifically on the obligations around paper documents.</p>

        <h2 className="text-2xl font-bold text-navy">GDPR Applies to Paper</h2>
        <p>UK GDPR applies to &quot;processing of personal data,&quot; which includes storage — regardless of whether that storage is digital or physical. A filing cabinet full of customer records is in scope. A box of employee files in a back office is in scope. A stack of CVs from last year&apos;s recruitment campaign is in scope.</p>
        <p>This means the same obligations apply: you must have a lawful basis for keeping the data, retain it only as long as necessary, protect it from unauthorised access, and be able to respond to subject access requests.</p>

        <h2 className="text-2xl font-bold text-navy">What Your Paper Files Require Under GDPR</h2>

        <h3 className="text-xl font-bold text-navy">Retention limits</h3>
        <p>The storage limitation principle requires that personal data is kept &quot;no longer than necessary for the purposes for which it is processed.&quot; For paper files, this means: you need to know what&apos;s in your filing cabinets, why you&apos;re keeping it, and how long each document type should be retained. Most businesses that haven&apos;t done a paper audit have documents in filing cabinets that should have been destroyed years ago.</p>

        <h3 className="text-xl font-bold text-navy">Access controls</h3>
        <p>Paper files must be protected from unauthorised access. In practice: filing cabinets containing personal data should be locked when unattended. Files containing sensitive personal data (health records, financial data, HR records) should have restricted physical access — not left in open-plan areas accessible to everyone. Visitors should not be able to access areas where personal data files are stored.</p>
        <p>The ICO has issued fines and enforcement notices for exactly this — personal data left accessible in unlocked filing cabinets in areas accessible to visitors or cleaning staff.</p>

        <h3 className="text-xl font-bold text-navy">Subject access requests</h3>
        <p>An individual can ask for copies of all personal data you hold about them. You have 30 days to respond. For digital data, this is manageable — search by name, compile results. For paper data, it requires physically searching filing cabinets, archive boxes, and any other paper storage. If you hold 10 years of paper records across multiple locations, a subject access request can be extraordinarily time-consuming to respond to.</p>

        <h3 className="text-xl font-bold text-navy">Secure disposal</h3>
        <p>When documents containing personal data are no longer needed, they must be securely destroyed. Putting them in a recycling bin is a data breach. Putting them in a general waste bin is a data breach. Requirements: cross-cut shredding (not strip-cut, which can be reassembled), confidential waste sacks collected by a certified disposal company, or on-site shredding service for large volumes.</p>

        <h2 className="text-2xl font-bold text-navy">The ICO and Paper GDPR Breaches</h2>
        <p>The ICO regularly acts on paper-based GDPR breaches. Common incidents:</p>
        <ul>
          <li>Documents found in public bins or recycling — fines of £2,000–150,000</li>
          <li>Personnel files left accessible after office closure or during building works</li>
          <li>Patient records found in skips during NHS estate work</li>
          <li>Customer records sent to wrong address (manual filing error)</li>
          <li>Documents removed from secure premises by staff and lost</li>
        </ul>
        <p>Paper breaches are often more serious than digital ones because they can&apos;t be reversed — you can&apos;t &quot;revoke access&quot; once a paper document is in the wrong hands.</p>

        <h2 className="text-2xl font-bold text-navy">How Digitisation Helps GDPR Compliance</h2>
        <p>Going digital doesn&apos;t automatically make you GDPR-compliant — but it makes compliance far more manageable:</p>
        <ul>
          <li><strong>Retention automation:</strong> Retention labels flag or delete documents automatically — no manual date-checking</li>
          <li><strong>Subject access requests:</strong> Search by name returns every document containing that person&apos;s data in seconds</li>
          <li><strong>Access controls:</strong> Granular digital permissions are more reliable than locked filing cabinets</li>
          <li><strong>Audit trail:</strong> Every access logged — evidence of compliance if challenged</li>
          <li><strong>Secure disposal:</strong> Digital deletion with audit log vs manual shredding management</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Immediate Action List</h2>
        <ul>
          <li>☐ Audit your paper files: what personal data do you hold on paper?</li>
          <li>☐ Identify documents past their retention period and arrange secure destruction</li>
          <li>☐ Ensure filing cabinets with personal data are locked when unattended</li>
          <li>☐ Establish a secure disposal process for documents no longer needed</li>
          <li>☐ Document your retention schedule in writing (required for GDPR accountability)</li>
          <li>☐ Test your ability to respond to a subject access request — how long would it take?</li>
        </ul>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Make GDPR compliance manageable</h2>
        <p className="text-gray-300 mb-6">A DMS with retention rules and audit trails handles the compliance burden automatically.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Compare DMS Systems →</Link>
        <Link href="/guides/document-management-gdpr-compliance-uk" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">GDPR Compliance Guide →</Link>
      </div>
    </main>
  );
}
