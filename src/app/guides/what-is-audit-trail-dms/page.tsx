import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is an Audit Trail and Why Does Your DMS Need One?",
  description: "An audit trail records who accessed, edited, or deleted every document. Here's why it matters for GDPR, compliance audits, and internal accountability.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/what-is-audit-trail-dms" },
};

export default function AuditTrailPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">What Is an Audit Trail and Why Does Your DMS Need One?</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Audit trails are a core compliance requirement for any document management system. Our <Link href="/guides/document-management-gdpr-compliance-uk" className="text-blue-600 hover:underline">document management GDPR compliance</Link> guide explains the full compliance framework. This article focuses specifically on what audit trails are, what they record, and why they matter.</p>

        <h2 className="text-2xl font-bold text-navy">What an Audit Trail Records</h2>
        <p>An audit trail (also called an activity log or document history) is a timestamped record of every action taken on every document. A comprehensive DMS audit trail records:</p>
        <ul>
          <li><strong>Who:</strong> The user account that performed the action</li>
          <li><strong>What:</strong> The specific action — viewed, downloaded, edited, shared, deleted, restored</li>
          <li><strong>When:</strong> Date and time stamp (UTC, immutable)</li>
          <li><strong>Where from:</strong> IP address and/or device (in more detailed systems)</li>
          <li><strong>Document:</strong> Which specific document was affected, and which version</li>
        </ul>
        <p>This creates an immutable record that cannot be altered after the fact — the timestamp and entry are written once and cannot be edited by any user, including administrators.</p>

        <h2 className="text-2xl font-bold text-navy">Why GDPR Requires Audit Trails</h2>
        <p>UK GDPR Article 5(2) requires data controllers to be able to demonstrate compliance with the data protection principles — this is called the accountability principle. Demonstrating compliance means showing evidence. For document management, that evidence is the audit trail.</p>
        <p>Specific scenarios where an audit trail provides the evidence:</p>
        <ul>
          <li><strong>Subject access requests:</strong> &quot;Has this individual&apos;s data been accessed only by authorised staff?&quot; The audit trail answers this.</li>
          <li><strong>Data breach investigation:</strong> &quot;Who accessed this file containing personal data before it was reported as breached?&quot; The audit trail shows the access history.</li>
          <li><strong>ICO investigation:</strong> The ICO can ask for evidence that you only process personal data for stated purposes. Audit trails show who has accessed what and when.</li>
          <li><strong>Retention compliance:</strong> &quot;Was this document deleted at the end of its retention period, or was it accessed after expiry?&quot; The audit trail shows the deletion event and any prior access.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Audit Trails for Regulated Sectors</h2>
        <p><strong>Legal (SRA):</strong> The SRA requires evidence that client confidentiality has been maintained. An audit trail showing that only the fee earner assigned to a matter accessed the client file is that evidence. Ethical wall breaches are detectable only if an audit trail exists.</p>
        <p><strong>Financial services (FCA):</strong> FCA SYSC rules require firms to maintain records sufficient to demonstrate regulatory compliance. For document management, an audit trail of who accessed what client communication or transaction document, and when, is part of that evidence.</p>
        <p><strong>Healthcare (CQC / NHS DSPT):</strong> The NHS Data Security and Protection Toolkit requires documented evidence of data access controls and monitoring. CQC inspectors ask to see evidence that patient data has been accessed appropriately. The audit trail provides this.</p>
        <p><strong>ISO 9001 / ISO 27001:</strong> Both standards require evidence of controlled document access and change management. An audit trail is the evidence that satisfies the auditor&apos;s evidence requirements.</p>

        <h2 className="text-2xl font-bold text-navy">What a Good DMS Audit Trail Looks Like in Practice</h2>
        <p>For each document, you should be able to see a chronological log like:</p>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
          <p>2026-01-15 09:23 | j.smith@company.com | Created | Contract_Supplier_ABC_v1.pdf</p>
          <p>2026-01-16 14:11 | m.jones@company.com | Viewed | Contract_Supplier_ABC_v1.pdf</p>
          <p>2026-01-17 10:44 | j.smith@company.com | Edited → v2 | Contract_Supplier_ABC_v2.pdf</p>
          <p>2026-01-20 16:02 | j.smith@company.com | Shared (external link) | Contract_Supplier_ABC_v2.pdf</p>
          <p>2026-07-15 09:00 | system | Retention review flagged | Contract_Supplier_ABC_v2.pdf</p>
        </div>
        <p>This tells a complete story: who created the document, who accessed it, what changes were made, whether it was shared externally, and when its retention period was reviewed. No paper-based system can provide this.</p>

        <h2 className="text-2xl font-bold text-navy">Audit Trail vs Version History</h2>
        <p>These are related but distinct:</p>
        <ul>
          <li><strong>Version history:</strong> Records changes to the document content — what changed between v1 and v2, who made the changes, ability to restore previous versions.</li>
          <li><strong>Audit trail:</strong> Records access and actions — who opened the document, who downloaded it, who deleted it — regardless of whether any changes were made.</li>
        </ul>
        <p>You need both. Version history answers &quot;what changed in the document.&quot; Audit trail answers &quot;who did what with the document.&quot;</p>

        <h2 className="text-2xl font-bold text-navy">What Doesn&apos;t Have an Audit Trail</h2>
        <p>For comparison: a shared network drive logs very little. Windows file server event logging can be enabled but is rarely configured, generates enormous log volumes, and is difficult to query. SharePoint provides basic access logs but they require Microsoft Purview configuration to be useful. Email has no audit trail at all — once a document is emailed, who accessed it is unknown.</p>
        <p>A purpose-built DMS includes comprehensive audit trails by default, configured for compliance use rather than as an afterthought.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Find a DMS with built-in audit trails</h2>
        <p className="text-gray-300 mb-6">Compare platforms with compliance-ready audit logging across 20+ systems.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Compare DMS Systems →</Link>
      </div>
    </main>
  );
}
