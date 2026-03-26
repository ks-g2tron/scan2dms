import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NHS Document Scanning — IG Toolkit & Records Management | Scan2DMS",
  description:
    "How NHS trusts, CCGs, and primary care networks implement compliant document scanning. Covers the Data Security and Protection Toolkit, CQC requirements, and scan-to-SharePoint for NHS.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/nhs-document-scanning" },
};

export default function NHSDocumentScanningPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Document Scanning for NHS Organisations</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>NHS organisations face a unique combination of pressures: immense paper volumes, strict information governance requirements, limited IT budgets, and regulatory scrutiny from CQC. This guide covers the regulatory framework, practical implementation steps, and technology choices for NHS document scanning projects.</p>

        <h2 className="text-2xl font-bold text-navy">NHS Records Management Code of Practice 2021</h2>
        <p>The NHS Records Management Code of Practice (2021 edition) replaced the previous 2006 version and is the primary guidance document for managing records across the NHS in England. It applies to NHS trusts, foundation trusts, clinical commissioning groups (now Integrated Care Boards), GP practices, and any organisation delivering NHS-funded care.</p>
        <p>The Code establishes key principles for document scanning:</p>
        <ul>
          <li><strong>Digital equivalence:</strong> A scanned copy of a paper document has the same evidential weight as the original, provided the scanning process is quality-assured</li>
          <li><strong>Retention schedules:</strong> Minimum retention periods for over 100 record types, from patient clinical records to corporate governance documents</li>
          <li><strong>Destruction authority:</strong> Paper originals may be destroyed after scanning, but only with documented authorisation and a destruction log</li>
          <li><strong>Provenance:</strong> The scanning system must record who scanned the document, when, and the quality assurance steps taken</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Data Security and Protection Toolkit (DSPT)</h2>
        <p>Every NHS organisation and supplier handling NHS data must complete the DSPT annually. The toolkit replaced the old IG Toolkit and aligns with the National Data Guardian&apos;s ten data security standards. For document scanning, the relevant DSPT assertions include:</p>
        <ul>
          <li><strong>Standard 1:</strong> Personal confidential data is only accessible to staff who need it — scanning systems must enforce role-based access</li>
          <li><strong>Standard 3:</strong> All access to personal confidential data is logged — the scanning system must maintain audit trails</li>
          <li><strong>Standard 7:</strong> IT systems are kept up to date — scanning hardware and software must receive security patches</li>
          <li><strong>Standard 9:</strong> IT systems are protected from cyber threats — network scanners must sit behind appropriate firewalls and use encrypted connections</li>
        </ul>
        <p>When selecting a scanning solution, ensure the vendor can provide evidence of compliance with these standards. For cloud destinations like SharePoint Online, Microsoft&apos;s NHS Data Security and Protection Toolkit submission covers the platform — you need to demonstrate compliant configuration and usage.</p>

        <h2 className="text-2xl font-bold text-navy">CQC and Document Management</h2>
        <p>The Care Quality Commission assesses document management as part of its &quot;Well-Led&quot; key question. CQC inspectors look for evidence that records are accurate, complete, legible, and accessible to those who need them. A well-implemented digital scanning system strengthens CQC evidence because:</p>
        <ul>
          <li>Every document has a clear audit trail showing when it was created, modified, and by whom</li>
          <li>Records are instantly retrievable — no delays from pulling physical files</li>
          <li>Version control prevents confusion between draft and final documents</li>
          <li>Access controls demonstrate that confidential information is appropriately protected</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Scan-to-SharePoint for NHS</h2>
        <p>Many NHS organisations now use Microsoft 365, including SharePoint Online, through the NHS Microsoft agreement. SharePoint provides a natural destination for scanned documents, particularly for non-clinical records: HR files, governance documents, policies, meeting minutes, estates documentation, and procurement records.</p>
        <p>For clinical records, the primary destination remains the EPR (electronic patient record) system — EMIS, SystmOne, or the trust&apos;s EPR. However, SharePoint can complement clinical systems by storing departmental documents, clinical audit records, training evidence, and CQC preparation documentation.</p>
        <p>A <Link href="/industries/healthcare" className="text-blue-600 hover:underline">PC-free scanner with direct SharePoint connectivity</Link> simplifies the workflow for administrative staff. No need to log into a PC, open scanning software, navigate to the correct folder — the scan profiles are pre-configured on the scanner&apos;s touchscreen.</p>

        <h2 className="text-2xl font-bold text-navy">Implementation Steps for NHS Scanning Projects</h2>
        <ol>
          <li><strong>Audit current paper volumes:</strong> Quantify the backlog (linear metres of paper) and daily incoming paper volume. This determines scanner specification and project timeline.</li>
          <li><strong>Map document types to destinations:</strong> Clinical documents go to the EPR; administrative documents go to SharePoint; HR records may go to a dedicated HR system.</li>
          <li><strong>Define quality assurance process:</strong> Who checks scanned images? What&apos;s the escalation route for poor-quality scans? Document this before scanning begins.</li>
          <li><strong>Configure retention policies:</strong> Align SharePoint retention labels with the NHS Records Management Code of Practice schedules.</li>
          <li><strong>Train staff:</strong> Reception, medical records, admin teams, and clinicians all need role-appropriate training.</li>
          <li><strong>Run a pilot:</strong> Start with one department or document type. Resolve issues before scaling.</li>
          <li><strong>Scale and monitor:</strong> Roll out to remaining departments. Monitor scanning volumes, quality rejection rates, and user adoption.</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">Choosing the Right Scanner for NHS</h2>
        <p>NHS environments need scanners that are reliable, easy to use without IT support, and secure. Key selection criteria:</p>
        <ul>
          <li><strong>PC-free operation:</strong> Staff walk up, scan, and walk away. No PC login, no driver issues, no desktop software to maintain</li>
          <li><strong>Touchscreen interface:</strong> Pre-configured scan profiles for each document type — reception staff shouldn&apos;t need to make decisions about file format or destination</li>
          <li><strong>ADF capacity:</strong> 50+ sheets minimum for batch scanning of patient folders</li>
          <li><strong>Duplex scanning:</strong> Most medical correspondence is double-sided</li>
          <li><strong>Network connectivity:</strong> Ethernet for reliability; WiFi for flexibility in clinical areas where network points are scarce</li>
        </ul>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Explore NHS scanning solutions</h2>
        <p className="text-gray-300 mb-6">See how Scan2DMS supports healthcare document management.</p>
        <Link href="/industries/healthcare" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Healthcare Solutions</Link>
        <Link href="/contact" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Get in Touch</Link>
      </div>
    </main>
  );
}
