import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Management and GDPR Compliance: What UK Businesses Must Know",
  description:
    "UK GDPR rules on paper and digital documents — retention periods, right of erasure, audit trails, and what regulators actually check. Practical guide for businesses.",
  alternates: {
    canonical: "https://scan2dms.co.uk/guides/document-management-gdpr-compliance-uk",
  },
};

export default function GdprCompliancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Document Management and GDPR Compliance: What UK Businesses Must Know",
    description: metadata.description,
    author: { "@type": "Organization", name: "scan2dms.co.uk" },
    publisher: { "@type": "Organization", name: "scan2dms.co.uk" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
        <h1 className="text-4xl font-extrabold text-navy mb-6">
          Document Management and GDPR Compliance: What Every UK Business Must Know
        </h1>

        {/* Featured snippet */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-10">
          <p className="font-semibold text-navy mb-2">Quick answer</p>
          <p className="text-gray-700">
            UK GDPR requires businesses to: keep personal data only for as long as necessary
            (retention limits), be able to find and delete an individual&apos;s data on request
            (right of erasure), protect data from unauthorised access (security controls), and
            keep records of processing activities. A DMS with defined retention rules, access
            controls, and an audit trail is the most reliable way to meet these obligations.
          </p>
        </div>

        <div className="prose prose-lg text-gray-700 space-y-6">

          <p>
            GDPR compliance isn&apos;t just about websites and email lists. Physical and digital
            documents containing personal data are fully in scope — and the way you manage
            those documents either helps or hinders compliance. This guide covers what UK GDPR
            actually requires for document management, what regulators look for, and how a
            well-configured DMS makes compliance manageable.
          </p>

          <h2 className="text-2xl font-bold text-navy">UK GDPR and Documents — The Basics</h2>

          <h3 className="text-xl font-bold text-navy">What counts as personal data in a document?</h3>
          <p>
            Any information that identifies or could identify a living individual. In a document
            context: names, addresses, National Insurance numbers, signatures, health information,
            financial data, employee records, customer details. Even a delivery note with a
            recipient&apos;s name and address is personal data. The scope is wide, and most business
            documents contain at least some.
          </p>

          <h3 className="text-xl font-bold text-navy">
            Paper documents vs digital — are the rules different?
          </h3>
          <p>
            No. UK GDPR applies equally to paper files and digital records. Going digital
            doesn&apos;t automatically make you compliant — it just makes compliance easier to
            implement. A scanned document stored in an uncontrolled SharePoint folder with no
            retention rules is just as problematic as the paper equivalent sitting in an
            unlocked filing cabinet.
          </p>

          <h2 className="text-2xl font-bold text-navy">Document Retention — How Long Can You Keep Personal Data?</h2>

          <h3 className="text-xl font-bold text-navy">The general rule</h3>
          <p>
            The storage limitation principle requires that personal data is kept &quot;no longer than
            necessary for the purpose for which it was collected.&quot; There is no single universal
            retention period — it depends on the type of document and the legal or business
            purpose behind keeping it.
          </p>

          <h3 className="text-xl font-bold text-navy">UK document retention periods by type</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 p-3 text-left font-semibold">Document Type</th>
                  <th className="border border-gray-200 p-3 text-left font-semibold">Retention Period</th>
                  <th className="border border-gray-200 p-3 text-left font-semibold">Authority</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3">Employee records</td>
                  <td className="border border-gray-200 p-3">Employment + 6 years</td>
                  <td className="border border-gray-200 p-3">HMRC / Employment law</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-3">Payroll / tax records</td>
                  <td className="border border-gray-200 p-3">6 years</td>
                  <td className="border border-gray-200 p-3">HMRC</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">VAT records</td>
                  <td className="border border-gray-200 p-3">6 years</td>
                  <td className="border border-gray-200 p-3">HMRC</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-3">Company accounts</td>
                  <td className="border border-gray-200 p-3">6 years</td>
                  <td className="border border-gray-200 p-3">Companies Act 2006</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Contracts</td>
                  <td className="border border-gray-200 p-3">Duration + 6 years</td>
                  <td className="border border-gray-200 p-3">Limitation Act 1980</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-3">Client files (solicitors)</td>
                  <td className="border border-gray-200 p-3">6 years post-closure</td>
                  <td className="border border-gray-200 p-3">SRA</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3">Patient records (NHS adults)</td>
                  <td className="border border-gray-200 p-3">8 years minimum</td>
                  <td className="border border-gray-200 p-3">NHS guidelines</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-3">CCTV footage</td>
                  <td className="border border-gray-200 p-3">31 days maximum (typical)</td>
                  <td className="border border-gray-200 p-3">ICO guidance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Note: Always verify current requirements for your specific document types and sector.
            This table provides general guidance only.
          </p>

          <h2 className="text-2xl font-bold text-navy">The Right to Erasure</h2>

          <h3 className="text-xl font-bold text-navy">When does it apply?</h3>
          <p>
            The right to erasure (sometimes called &quot;the right to be forgotten&quot;) allows
            individuals to request deletion of their personal data in certain circumstances:
            the data is no longer needed for its original purpose, the individual withdraws
            consent, or they object to processing and there is no overriding legitimate interest.
            It does <em>not</em> apply where you have a legal obligation to retain the data —
            HMRC records, for example, cannot simply be deleted on request.
          </p>

          <h3 className="text-xl font-bold text-navy">How a DMS makes erasure manageable</h3>
          <p>
            The practical challenge of erasure is finding all documents that contain a
            specific individual&apos;s data. In an unorganised folder structure or paper archive,
            this is nearly impossible within the 30-day response window. In a DMS with proper
            metadata, you search by name or identifier, see every matching record instantly,
            and action deletions or redactions with a documented audit trail.
          </p>

          <h2 className="text-2xl font-bold text-navy">Security Requirements</h2>

          <h3 className="text-xl font-bold text-navy">Access controls</h3>
          <p>
            UK GDPR requires &quot;appropriate technical and organisational measures&quot; to protect
            personal data. For documents, this means: only authorised individuals can access
            sensitive documents, permissions follow the least-privilege principle (people see
            only what they need), and access is reviewed when roles change. A shared network
            drive where everyone can see everything is a GDPR liability.
          </p>

          <h3 className="text-xl font-bold text-navy">Audit trails</h3>
          <p>
            If the ICO investigates a complaint, one of the first things they ask for is
            evidence of who accessed what and when. A DMS provides this automatically — every
            view, edit, download, and deletion is logged with a timestamp and user ID. A shared
            folder provides none of this.
          </p>

          <h3 className="text-xl font-bold text-navy">Secure document disposal</h3>
          <p>
            GDPR requires that personal data is securely deleted when it&apos;s no longer needed.
            For digital documents, this means deletion from the DMS with a logged audit entry —
            not just moving to a Recycle Bin. For paper, certified shredding (not the recycling
            bin). A DMS with automated retention rules handles digital disposal without
            requiring staff to remember to do it.
          </p>

          <h2 className="text-2xl font-bold text-navy">Sector-Specific Compliance</h2>

          <h3 className="text-xl font-bold text-navy">Legal (SRA)</h3>
          <p>
            The Solicitors Regulation Authority requires client files to be retained for at
            least 6 years after matter closure. Financial records: 6 years. The SRA also has
            specific requirements around client confidentiality and conflict checks — a DMS
            with matter-centric access controls supports both.
          </p>

          <h3 className="text-xl font-bold text-navy">Financial services (FCA)</h3>
          <p>
            The FCA requires retention of 5–7 years for most financial records, with specific
            rules for client communications, suitability reports, and transaction records.
            FCA-regulated firms are subject to supervisory inspection — having searchable,
            audited records is not optional.
          </p>

          <h3 className="text-xl font-bold text-navy">Healthcare (CQC, NHS)</h3>
          <p>
            NHS patient records must be retained for a minimum of 8 years for adults and
            25 years for records relating to children. The NHS Data Security and Protection
            Toolkit requires documented evidence of data handling practices. CQC inspectors
            will ask for document evidence — a DMS with audit trails significantly reduces
            inspection preparation time.
          </p>

          <h2 className="text-2xl font-bold text-navy">How a DMS Helps You Stay Compliant</h2>

          <h3 className="text-xl font-bold text-navy">Automated retention and deletion</h3>
          <p>
            Set retention periods per document type. The DMS automatically flags documents
            for review at expiry, or deletes them based on your policy. No calendar reminders,
            no manual checks, no forgotten archives.
          </p>

          <h3 className="text-xl font-bold text-navy">Audit trails that satisfy regulators</h3>
          <p>
            Every action logged — view, edit, share, delete — with timestamp and user. Exportable
            in formats suitable for ICO or regulatory submissions. This is the single most
            valuable compliance feature a DMS provides.
          </p>

          <h3 className="text-xl font-bold text-navy">UK data residency</h3>
          <p>
            Post-Brexit, ensure your DMS vendor stores data in UK or EEA data centres, or can
            provide a valid international transfer mechanism. Most major vendors now offer
            explicit UK data residency options — ask before you sign.
          </p>

          <h2 className="text-2xl font-bold text-navy">Frequently Asked Questions</h2>

          <h3 className="text-xl font-bold text-navy">
            Is it GDPR-compliant to keep scanned copies of documents?
          </h3>
          <p>
            Yes — a properly stored digital copy with appropriate access controls is
            GDPR-compliant. The key word is &quot;properly stored&quot;: in a system with access
            controls, retention rules, and audit trails. An unsecured SharePoint folder is
            not proper storage.
          </p>

          <h3 className="text-xl font-bold text-navy">
            Can I store personal data in SharePoint and be GDPR-compliant?
          </h3>
          <p>
            Yes, if SharePoint is configured correctly — appropriate permissions, retention
            labels, audit logging enabled. Microsoft 365 offers the tools; compliance depends
            on how your SharePoint environment is set up. Most SMEs don&apos;t configure these
            features, which is why a dedicated DMS often provides more reliable compliance
            out of the box.
          </p>

          <h3 className="text-xl font-bold text-navy">
            How do I prove GDPR compliance if the ICO investigates?
          </h3>
          <p>
            You need documentary evidence: a record of your processing activities (ROPA),
            your data retention schedule, evidence of staff training, and — for any specific
            complaint — an audit log showing who accessed the data in question and when. A
            DMS provides the audit log automatically; the others require documented policies.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Find a GDPR-ready DMS</h2>
          <p className="text-gray-300 mb-6">
            Compare DMS platforms with built-in retention rules, audit trails, and UK data
            residency options.
          </p>
          <Link
            href="/dms"
            className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4"
          >
            Browse the DMS Directory →
          </Link>
          <Link
            href="/guides/find-hire-dms-consultant-uk"
            className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors"
          >
            Find a UK Consultant →
          </Link>
        </div>
      </main>
    </>
  );
}
