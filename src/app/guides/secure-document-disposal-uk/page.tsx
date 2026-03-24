import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Secure Document Disposal UK: Shredding vs Digital Deletion",
  description: "How to securely dispose of documents under UK GDPR — paper shredding standards, digital deletion requirements, and what counts as a breach.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/secure-document-disposal-uk" },
};

export default function SecureDisposalPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Secure Document Disposal UK: Shredding vs Digital Deletion</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Document disposal is the final step in the retention lifecycle — and it&apos;s one of the most common sources of GDPR breaches. Our <Link href="/guides/document-management-gdpr-compliance-uk" className="text-blue-600 hover:underline">document management GDPR compliance</Link> guide covers the full framework. This article covers the disposal step specifically.</p>

        <h2 className="text-2xl font-bold text-navy">Why Disposal Matters Under GDPR</h2>
        <p>UK GDPR requires that personal data is erased when it&apos;s no longer needed for its original purpose. Keeping data longer than necessary is a breach of the storage limitation principle. But the method of disposal matters as much as the timing — improper disposal is a separate breach in itself.</p>
        <p>The ICO has issued fines and reprimands for documents found in public recycling bins, general waste, skips during office moves, and paper sacks left outside premises for collection by unauthorised parties. Each of these is a reportable breach, potentially affecting multiple individuals&apos; personal data.</p>

        <h2 className="text-2xl font-bold text-navy">Paper Disposal: What You Need to Know</h2>

        <h3 className="text-xl font-bold text-navy">The recycling bin problem</h3>
        <p>Putting documents containing personal data in a recycling bin — even a confidential recycling sack — without shredding first is risky. Recycling sacks can be opened. Documents can be reconstructed from strips. The ICO&apos;s position is clear: personal data must be rendered unreadable before disposal.</p>

        <h3 className="text-xl font-bold text-navy">Shredding standards</h3>
        <p>Not all shredders are equal. The relevant standard is DIN 66399, which defines security levels from P-1 (strip cut, strips 12mm wide — reconstructable) to P-7 (particles of 1mm² — used for top-secret government documents).</p>
        <ul>
          <li><strong>P-2 / P-3:</strong> Strip cut, strips 5.8mm or narrower. Minimum for personal data but strips can theoretically be reassembled.</li>
          <li><strong>P-4 (cross-cut):</strong> Particles 160mm² or smaller. Appropriate for most business personal data. The ICO recommends a minimum of P-4 for personal data.</li>
          <li><strong>P-5 (micro-cut):</strong> Particles 30mm² or smaller. Recommended for sensitive personal data (health records, financial data, employee records).</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">In-house shredding</h3>
        <p>A P-4 or P-5 cross-cut shredder for the office: £80–300 for a desktop model, £500–2,000 for a high-capacity department shredder. Suitable for regular ongoing disposal of moderate volumes. Limitation: requires staff to use it consistently — documents left in &quot;to shred&quot; piles for weeks defeat the purpose.</p>

        <h3 className="text-xl font-bold text-navy">Confidential waste sacks with collection</h3>
        <p>Lockable consoles in the office, collected by a certified shredding company. Documents placed in the console are shredded off-site by the collection company, which provides a certificate of destruction. Cost: typically £20–60/month for regular collection from a small office. The certificate of destruction is useful evidence for GDPR accountability.</p>

        <h3 className="text-xl font-bold text-navy">On-site mobile shredding</h3>
        <p>A shredding company brings a shredding vehicle to your premises. Documents are shredded on-site, you watch it happen, you receive a certificate of destruction immediately. Most secure option for large one-off disposal projects (office moves, archive clearances). Cost: typically £100–300 for a van visit.</p>

        <h2 className="text-2xl font-bold text-navy">Digital Disposal: What Counts as &quot;Deleted&quot;</h2>
        <p>Simply pressing delete does not securely dispose of digital personal data. Deleted files go to the Recycle Bin. Emptying the Recycle Bin removes the file entry but the data typically remains on disk until overwritten. On cloud platforms, &quot;deleted&quot; files are often retained for 30–90 days in a recoverable state.</p>

        <h3 className="text-xl font-bold text-navy">DMS deletion</h3>
        <p>In a properly configured DMS, deletion triggered by a retention policy should create an audit log entry confirming permanent deletion, and the data should be removed from all backups within the backup retention period. Confirm with your DMS vendor what &quot;deleted&quot; means: is it permanent deletion or soft deletion (recoverable for a period)?</p>

        <h3 className="text-xl font-bold text-navy">Cloud storage deletion</h3>
        <p>SharePoint and OneDrive: deleted items go to the Recycle Bin (93-day recovery period by default). After that, items go to the second-stage Recycle Bin (another 93 days). Only after both stages does deletion become permanent — approximately 6 months after initial deletion. For GDPR disposal purposes, you need to actively empty both Recycle Bin stages to confirm permanent deletion.</p>

        <h3 className="text-xl font-bold text-navy">Devices and storage media</h3>
        <p>When decommissioning computers, servers, or storage devices: simply deleting files or even formatting a drive is not sufficient — data recovery tools can retrieve deleted data from unformatted drives. Use certified data wiping tools (NCSC recommends data wiping to HMG IS 5 baseline for sensitive data) or physical destruction (degaussing, shredding hard drives) for highly sensitive data.</p>

        <h2 className="text-2xl font-bold text-navy">Keeping a Destruction Record</h2>
        <p>Maintain a record of what was destroyed, when, by what method, and who authorised it. For paper: the certificate of destruction from your shredding company. For digital: the audit log entry from your DMS confirming deletion. This record is your evidence of compliance if the ICO ever asks why you no longer hold certain data.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Automate retention and deletion</h2>
        <p className="text-gray-300 mb-6">A DMS with retention policies handles disposal automatically with a full audit log.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Compare DMS Systems →</Link>
      </div>
    </main>
  );
}
