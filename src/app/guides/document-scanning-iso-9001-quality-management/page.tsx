import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Scanning for ISO 9001: What UK Manufacturers Need to Know",
  description: "ISO 9001 requires documented information to be controlled and available. Here's how a scan-to-DMS workflow meets clause 7.5 practically and cost-effectively.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/document-scanning-iso-9001-quality-management" },
};

export default function Iso9001ScanningPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Document Scanning for ISO 9001: What UK Manufacturers Need to Know</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>For the full scanning workflow setup, see our <Link href="/guides/scan-to-dms-document-scanning-workflows" className="text-blue-600 hover:underline">scan documents to SharePoint</Link> guide. This article covers the ISO 9001 requirements specifically — what clause 7.5 requires, and how a scan-to-DMS workflow meets those requirements in practice.</p>

        <h2 className="text-2xl font-bold text-navy">What ISO 9001 Clause 7.5 Actually Requires</h2>
        <p>ISO 9001:2015 clause 7.5 (Documented Information) requires organisations to control documented information to ensure it is:</p>
        <ul>
          <li><strong>Available and suitable for use:</strong> The right version, accessible where and when needed</li>
          <li><strong>Adequately protected:</strong> From loss of confidentiality, improper use, or loss of integrity</li>
          <li><strong>Distributed, accessed, retrieved, and used</strong> appropriately</li>
          <li><strong>Stored and preserved</strong> including legibility</li>
          <li><strong>Controlled for changes</strong> (version control)</li>
          <li><strong>Retained and disposed of</strong> according to defined periods</li>
        </ul>
        <p>Paper-based document systems struggle with almost every one of these requirements. A paper job card in a filing cabinet is not &quot;accessible where and when needed&quot; when a customer calls with a quality query. A paper quality procedure is not &quot;controlled for changes&quot; if staff have printed copies at their workstations that don&apos;t get updated.</p>

        <h2 className="text-2xl font-bold text-navy">The Three Document Types ISO Auditors Focus On</h2>

        <h3 className="text-xl font-bold text-navy">Quality procedures and work instructions</h3>
        <p>These are &quot;documented information to be maintained&quot; — they define how work is done and must be version-controlled, approved before issue, and current versions clearly identified. Previous versions must be archived (not deleted) but prevented from unintentional use. In a DMS: version history is automatic, approval workflow can be configured, and a &quot;Status&quot; column (Draft/Approved/Obsolete) makes current versions immediately identifiable.</p>

        <h3 className="text-xl font-bold text-navy">Quality records</h3>
        <p>Inspection sheets, test results, non-conformance reports, calibration records — these are &quot;documented information to be retained&quot; as evidence of conformance. They need to be retrievable by product, batch, or date. In a paper system, retrieving a specific inspection sheet from 8 months ago for a customer quality query can take hours. In a DMS with barcode-indexed records, it takes 10 seconds.</p>

        <h3 className="text-xl font-bold text-navy">External documents</h3>
        <p>Customer specifications, supplier standards, regulatory requirements — documents you don&apos;t create but must control. The current version must be identifiable, and obsolete versions must not be inadvertently used. A DMS handles this with version control and the ability to mark documents as superseded.</p>

        <h2 className="text-2xl font-bold text-navy">How Scan-to-SharePoint Meets ISO 9001 Requirements</h2>

        <h3 className="text-xl font-bold text-navy">Version control</h3>
        <p>SharePoint&apos;s built-in versioning creates a new version every time a document is edited. The version history shows who changed what and when. You can roll back to any previous version. The current version is always the one displayed in the library — no ambiguity about which revision is current.</p>
        <p>For quality procedures: configure major versioning (v1.0, v2.0) with required check-in comments. Each major version represents an approved revision. Previous versions are accessible for reference but clearly labelled as superseded.</p>

        <h3 className="text-xl font-bold text-navy">Availability where needed</h3>
        <p>Documents in SharePoint are accessible from any device with internet access — office PCs, shopfloor tablets, mobile phones. A QA engineer on the shopfloor can pull up the current work instruction on a tablet without leaving their station. An auditor can access the full quality record archive from a laptop in the boardroom.</p>

        <h3 className="text-xl font-bold text-navy">Retention and disposal</h3>
        <p>SharePoint retention labels automate the document lifecycle. Assign a retention period to each document type — quality records: 10 years; calibration certificates: 5 years; non-conformance reports: 7 years. The system automatically flags or deletes documents at expiry. No manual calendar reminders, no risk of premature deletion or indefinite retention.</p>

        <h3 className="text-xl font-bold text-navy">Access control and integrity protection</h3>
        <p>Library-level permissions ensure only authorised staff can modify quality procedures. Read-only access for production staff, edit access for quality engineers, admin access for the QMS manager. The audit log records every view, edit, and download — meeting the ISO requirement for &quot;protection from loss of integrity.&quot;</p>

        <h2 className="text-2xl font-bold text-navy">The Shopfloor Scanning Workflow for ISO 9001</h2>
        <p>The practical implementation for a manufacturing business:</p>
        <ol>
          <li>Job card completed → scanned at shopfloor eScan → barcode reads job number → files to &quot;Job Cards&quot; library tagged with job number, machine, operator, date</li>
          <li>Inspection sheet completed → scanned in batch → QR code splits and files each sheet to &quot;Quality Records&quot; library tagged with batch number, product, inspector, pass/fail result</li>
          <li>Non-conformance raised → paper NCR form scanned → files to &quot;Non-Conformances&quot; library → triggers approval workflow for disposition decision</li>
          <li>Calibration certificate received → scanned and filed to &quot;Calibration Records&quot; library tagged with equipment ID and calibration date → retention label applied automatically</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">What an ISO Auditor Will Ask For</h2>
        <p>In a typical ISO 9001 surveillance audit, expect requests like:</p>
        <ul>
          <li>&quot;Show me the inspection record for batch X from last month&quot; — search by batch number: result in 5 seconds</li>
          <li>&quot;Show me the current version of your welding procedure&quot; — filter by Status = Approved, one result</li>
          <li>&quot;Who approved the last revision of this work instruction and when?&quot; — version history: name and timestamp immediately visible</li>
          <li>&quot;Show me all non-conformances raised in the last 12 months&quot; — filter by document type and date range: complete list in seconds</li>
        </ul>
        <p>Organisations that prepare for audits by spending days printing and organising paper folders will find this approach transformative. Everything an auditor might request is retrievable in under a minute.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Compare DMS options with ISO 9001 document control</h2>
        <p className="text-gray-300 mb-6">Find systems with version control, retention policies, and audit trail built in.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Browse the DMS Directory →</Link>
      </div>
    </main>
  );
}
