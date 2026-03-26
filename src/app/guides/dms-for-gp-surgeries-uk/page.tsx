import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Management for GP Surgeries UK — Going Paperless | Scan2DMS",
  description:
    "How UK GP surgeries go paperless with compliant document scanning. Covers GP records retention, EMIS and SystmOne integration, CQC requirements, and NHS Digital standards.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/dms-for-gp-surgeries-uk" },
};

export default function DMSForGPSurgeriesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Going Paperless in Your GP Surgery</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>GP surgeries are drowning in paper. Lloyd George envelopes, incoming referrals, hospital discharge summaries, pathology results, prescription requests, insurance reports — the volume is relentless. Going paperless isn&apos;t just about saving storage space. It&apos;s about giving clinicians instant access to the complete patient record, reducing the risk of misfiled results, and freeing up rooms currently used for paper storage.</p>

        <h2 className="text-2xl font-bold text-navy">GP Records Retention Periods</h2>
        <p>The NHS Records Management Code of Practice sets minimum retention periods for GP records:</p>
        <ul>
          <li><strong>Adult patient records:</strong> 10 years after the patient&apos;s death, or 10 years after the patient has permanently left the practice</li>
          <li><strong>Children&apos;s records:</strong> Retain until the patient&apos;s 25th birthday (or 26th if the last entry was made when the patient was 17)</li>
          <li><strong>Maternity records:</strong> 25 years after the birth of the last child</li>
          <li><strong>Mental health records:</strong> 20 years after no further treatment, or 8 years after death</li>
          <li><strong>GP records relating to armed forces personnel:</strong> Retain for 30 years</li>
        </ul>
        <p>These are minimums. Many practices apply a blanket policy of retaining records for 10 years after the patient leaves or dies, which satisfies most categories. A digital DMS with retention policies handles this automatically — flagging records that have reached their review date and preventing premature deletion.</p>

        <h2 className="text-2xl font-bold text-navy">EMIS Web and SystmOne Integration</h2>
        <p>The two dominant GP clinical systems in England — EMIS Web and SystmOne — both support document attachment, but the workflow differs:</p>

        <h3 className="text-xl font-bold text-navy">EMIS Web</h3>
        <p>EMIS Web includes a document management module that allows scanned documents to be attached to the patient record. The workflow: scan the document, save to a shared network location or import folder, then attach it to the correct patient in EMIS using the document management tab. Once attached, the document appears in the patient&apos;s consultation record and is visible to all clinicians with access.</p>
        <p>EMIS supports document coding — tagging scanned documents with Read/SNOMED codes so they appear in the correct section of the clinical record (e.g. a scanned hospital letter coded as &quot;Letter from hospital&quot; appears in the correspondence view).</p>

        <h3 className="text-xl font-bold text-navy">SystmOne (TPP)</h3>
        <p>SystmOne has more tightly integrated document management. Documents can be scanned directly into SystmOne using the built-in document import function. SystmOne supports auto-matching of documents to patients using barcoded cover sheets — print a cover sheet from SystmOne, attach it to the paper document, scan, and the system files it automatically.</p>
        <p>Both systems benefit from a fast, reliable scanner at the point of entry. Scanning at reception as post arrives means documents are available in the clinical record within minutes of arrival.</p>

        <h2 className="text-2xl font-bold text-navy">CQC Requirements for Records Management</h2>
        <p>CQC inspects GP practices under the &quot;Well-Led&quot; and &quot;Safe&quot; key questions. Records management is assessed in both areas:</p>
        <ul>
          <li><strong>Safe:</strong> Are records accurate, complete, and accessible? Can clinicians access the information they need to make safe decisions? Are records stored securely?</li>
          <li><strong>Well-Led:</strong> Is there a systematic approach to records management? Are retention and destruction policies in place and followed? Is there an information governance framework?</li>
        </ul>
        <p>A digital document management system strengthens CQC evidence on both counts. Every document has an audit trail, access is controlled and logged, retention policies are enforced automatically, and records are instantly retrievable — no waiting for files to be pulled from storage.</p>

        <h2 className="text-2xl font-bold text-navy">NHS Digital Standards</h2>
        <p>NHS Digital (now part of NHS England) sets the technical standards for digital systems in primary care. Relevant standards for GP document management include:</p>
        <ul>
          <li><strong>DCB0160:</strong> Clinical Risk Management — any system that stores or displays clinical information must have a clinical safety case</li>
          <li><strong>Data Security and Protection Toolkit (DSPT):</strong> GP practices must complete the DSPT annually, demonstrating appropriate data security controls including document management</li>
          <li><strong>GP IT Futures framework:</strong> Clinical systems used in GP practices must meet the GP IT Futures standards, which include document management capabilities</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">The Day-Forward Approach</h2>
        <p>Most GP practices find it practical to adopt a &quot;day-forward&quot; approach: start scanning everything from today, then tackle the backlog of Lloyd George envelopes as a separate project. This delivers immediate benefits — incoming post is digitised from day one — while the larger backlog project runs in parallel.</p>
        <p>For the day-forward workflow, place a PC-free network scanner at reception. When post arrives:</p>
        <ol>
          <li>Open and sort the post by patient</li>
          <li>Select the patient on the scanner&apos;s touchscreen (search by name or NHS number)</li>
          <li>Select the document type (referral, results, correspondence, hospital letter)</li>
          <li>Feed the paper into the scanner</li>
          <li>The scanned document appears in the patient&apos;s record within seconds</li>
        </ol>
        <p>For the Lloyd George backlog, consider whether to scan in-house or outsource. In-house gives more control but takes staff time. Outsourced bureau scanning is faster but requires secure transport of patient records off-site.</p>

        <h2 className="text-2xl font-bold text-navy">SharePoint for Non-Clinical Documents</h2>
        <p>Not everything in a GP surgery is clinical. Practice policies, employment records, meeting minutes, CQC evidence, risk assessments, significant event analyses — these administrative documents are best managed in SharePoint rather than the clinical system.</p>
        <p>Many practices now use <Link href="/industries/healthcare" className="text-blue-600 hover:underline">Microsoft 365 through the NHS agreement</Link>, giving them access to SharePoint Online. A single scanner can be configured with two scan profiles: one for clinical documents (routed to EMIS/SystmOne) and one for administrative documents (routed to SharePoint).</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to go paperless in your practice?</h2>
        <p className="text-gray-300 mb-6">See how Scan2DMS supports GP surgeries across the UK.</p>
        <Link href="/industries/healthcare" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Healthcare Solutions</Link>
        <Link href="/contact" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Get in Touch</Link>
      </div>
    </main>
  );
}
