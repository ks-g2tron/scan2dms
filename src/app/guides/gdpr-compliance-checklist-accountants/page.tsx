import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Compliance Checklist for UK Accountants",
  description: "A practical GDPR compliance checklist for UK accountancy practices — client data, HMRC retention, secure file sharing, and practice management obligations.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/gdpr-compliance-checklist-accountants" },
};

export default function GdprAccountantsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">GDPR Compliance Checklist for UK Accountants</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Accountancy practices handle significant amounts of personal financial data — payroll records, tax returns, bank statements, personal details. Our <Link href="/guides/document-management-gdpr-compliance-uk" className="text-blue-600 hover:underline">document management GDPR compliance</Link> guide covers the general requirements. This checklist is specific to accountancy.</p>

        <h2 className="text-2xl font-bold text-navy">The Accountancy Compliance Context</h2>
        <p>Accountants face a dual compliance obligation: HMRC records retention requirements (typically 6 years) AND GDPR storage limitation (don&apos;t keep personal data longer than necessary). These are sometimes in tension — you must keep HMRC records for 6 years, but you must also not retain personal data beyond what&apos;s necessary. The resolution: your retention schedule should specify retention periods that satisfy both obligations, with HMRC minimums as the floor.</p>

        <h2 className="text-2xl font-bold text-navy">GDPR Compliance Checklist — Accountancy Practices</h2>

        <h3 className="text-xl font-bold text-navy">Client engagement and privacy</h3>
        <ul className="space-y-1">
          <li>☐ Privacy notice provided to all clients at engagement</li>
          <li>☐ Privacy notice covers: data collected, purposes, third-party sharing, retention, rights</li>
          <li>☐ Engagement letter references data protection obligations</li>
          <li>☐ Marketing emails: opt-in consent obtained, records kept</li>
          <li>☐ Client referrals: data shared only with client&apos;s knowledge/consent</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">Document retention and disposal</h3>
        <ul className="space-y-1">
          <li>☐ Written retention schedule covering all document types</li>
          <li>☐ HMRC-required records kept for minimum 6 years (5 years for self-assessment)</li>
          <li>☐ Records not kept beyond retention period without documented business reason</li>
          <li>☐ Secure disposal process — shredding or certified digital deletion</li>
          <li>☐ Destruction records maintained</li>
          <li>☐ Former client files: retention clock starts from end of engagement</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">Data security and access</h3>
        <ul className="space-y-1">
          <li>☐ Client documents accessible only to staff working on that client</li>
          <li>☐ Client portal used for document exchange (not email attachments)</li>
          <li>☐ MFA enabled for all staff accessing client data</li>
          <li>☐ Audit log active — who accessed which client file, when</li>
          <li>☐ External sharing reviewed — no anonymous share links for client documents</li>
          <li>☐ Laptops and devices encrypted</li>
          <li>☐ Clear desk policy for client documents</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">Third-party data sharing</h3>
        <ul className="space-y-1">
          <li>☐ Data sharing with HMRC: covered by legal obligation (no additional consent needed)</li>
          <li>☐ Data sharing with software providers (Xero, Sage, etc.): Data Processing Agreement in place</li>
          <li>☐ Cloud document storage: Data Processing Agreement with provider, data residency confirmed</li>
          <li>☐ Outsourced payroll or bookkeeping: Data Processing Agreement in place</li>
          <li>☐ Sub-contractors: treated as data processors, appropriate agreements in place</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">Subject access requests and individual rights</h3>
        <ul className="space-y-1">
          <li>☐ SAR process documented</li>
          <li>☐ Can respond to SAR within 30 days — all client data searchable</li>
          <li>☐ Right to erasure process: can delete data on request where no legal obligation to retain</li>
          <li>☐ Right to portability: can export client data in a usable format on request</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">Staff and internal data</h3>
        <ul className="space-y-1">
          <li>☐ Employee privacy notice in place</li>
          <li>☐ Staff personnel files: retention 6 years after employment ends</li>
          <li>☐ CCTV in office: privacy notice displayed, footage retention limited to 31 days</li>
          <li>☐ Staff trained on GDPR and data protection annually</li>
          <li>☐ Training records maintained</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">The Role of Your Document System</h2>
        <p>Several items on this checklist require technology to be practical: client-by-client access controls, comprehensive audit logging, secure client portal for document exchange, automated retention scheduling. A DMS or well-configured SharePoint with a client portal addresses all of these. A shared file server with email document exchange does not.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Find an accountancy DMS with GDPR features</h2>
        <p className="text-gray-300 mb-6">Client portals, retention scheduling, and audit trails built in.</p>
        <Link href="/guides/best-dms-accountants-finance-uk" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Best DMS for Accountants →</Link>
        <Link href="/dms" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Compare DMS Systems →</Link>
      </div>
    </main>
  );
}
