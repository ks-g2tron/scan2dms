import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Handle a Subject Access Request When Documents Are in a DMS",
  description: "A subject access request gives you 30 days to find all personal data on an individual. Here's how a DMS makes this manageable — and how paper doesn't.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/handle-subject-access-request-dms" },
};

export default function SarDmsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">How to Handle a Subject Access Request When Your Documents Are in a DMS</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Subject access requests are one of the most practical tests of your document management system&apos;s compliance capability. Our <Link href="/guides/document-management-gdpr-compliance-uk" className="text-blue-600 hover:underline">document management GDPR compliance</Link> guide covers the full compliance framework. This article focuses specifically on handling SARs.</p>

        <h2 className="text-2xl font-bold text-navy">What a Subject Access Request Is</h2>
        <p>Under UK GDPR Article 15, any individual has the right to request copies of all personal data you hold about them. This is a Subject Access Request (SAR). You must respond within <strong>one calendar month</strong> of receiving it. There is no charge. You cannot refuse unless the request is manifestly unfounded or excessive.</p>
        <p>The response must include: confirmation of whether you process their data, a copy of all personal data you hold, the purposes for which you process it, the categories of data, and information about retention periods and their rights.</p>

        <h2 className="text-2xl font-bold text-navy">Why SARs Are Hard Without a DMS</h2>
        <p>A SAR requires you to find <em>all</em> personal data relating to an individual across all your systems. In a typical business without a proper DMS:</p>
        <ul>
          <li>Documents in SharePoint or network folders — searchable but unstructured</li>
          <li>Email attachments — in multiple inboxes, not easily searched by subject</li>
          <li>Paper files — physically searched, no full-text capability</li>
          <li>CRM records — usually easy, separate system</li>
          <li>HR system — usually easy, separate system</li>
          <li>Accounting software — usually easy, separate system</li>
        </ul>
        <p>The documents and emails are the problem. A thorough SAR response for a customer who has been dealing with a business for several years can involve searching through thousands of documents and emails across multiple mailboxes. Doing this in 30 days while running a normal business is genuinely difficult.</p>

        <h2 className="text-2xl font-bold text-navy">How a DMS Makes SARs Manageable</h2>

        <h3 className="text-xl font-bold text-navy">Metadata-based search</h3>
        <p>If documents are tagged with a Client Name or Customer ID metadata field, a single search returns every document relating to that individual instantly. Search &quot;Smith, John&quot; → 47 documents returned, from 6 different document types, spanning 3 years. This takes 10 seconds in a DMS; it takes hours in paper files or an unstructured SharePoint library.</p>

        <h3 className="text-xl font-bold text-navy">Full-text search</h3>
        <p>OCR-processed documents are searchable by their content. If a person&apos;s name appears in the body of a document that wasn&apos;t tagged with their name, full-text search finds it. This is the safety net for documents that weren&apos;t perfectly tagged.</p>

        <h3 className="text-xl font-bold text-navy">Audit trail</h3>
        <p>A DMS audit trail shows who accessed a document and when. This is useful if the SAR includes questions about data access history, or if you need to demonstrate that personal data was only accessed by authorised staff.</p>

        <h3 className="text-xl font-bold text-navy">Redaction tools</h3>
        <p>SARs often involve documents that contain personal data about multiple individuals. You may need to redact third-party personal data before providing the response. DMS platforms with built-in redaction tools allow this without altering the original document.</p>

        <h2 className="text-2xl font-bold text-navy">Step-by-Step SAR Response Process</h2>
        <ol>
          <li><strong>Acknowledge receipt:</strong> Immediately confirm you&apos;ve received the SAR and state the response deadline (one month from receipt).</li>
          <li><strong>Verify identity:</strong> Confirm the requester is who they say they are before disclosing any data. Request reasonable identification — this doesn&apos;t extend the response deadline unless you need to wait for ID documents.</li>
          <li><strong>Search all systems:</strong> DMS (search by name/ID), email, CRM, HR system, accounting software, paper files.</li>
          <li><strong>Review results:</strong> Identify all personal data relating to the individual. Review for any data that should be withheld (legal professional privilege, third-party personal data, information that could prejudice an investigation).</li>
          <li><strong>Redact third-party data:</strong> Where documents contain personal data about other individuals, redact those details before providing the response.</li>
          <li><strong>Compile the response:</strong> Provide copies of all identified personal data, plus the required information about processing purposes, retention periods, and rights.</li>
          <li><strong>Document what you did:</strong> Keep a record of the SAR, your search methodology, what was found, and what was provided. This demonstrates accountability if the ICO ever asks.</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">What Happens If You Miss the Deadline</h2>
        <p>Failure to respond to a SAR within one month is a breach of UK GDPR. The individual can complain to the ICO. The ICO can issue an enforcement notice requiring you to respond, and in serious or repeat cases, can issue a fine. Practical first response: if you genuinely cannot compile a full response within one month (complex SARs involving very large volumes of data), you can extend by a further two months — but you must notify the individual of the extension within the first month, explaining why.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Make SAR responses a 10-minute job</h2>
        <p className="text-gray-300 mb-6">A DMS with proper metadata makes finding all personal data on any individual instant.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Compare DMS Systems →</Link>
        <Link href="/guides/document-management-gdpr-compliance-uk" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">GDPR Compliance Guide →</Link>
      </div>
    </main>
  );
}
