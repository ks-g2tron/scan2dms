import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Compliance Checklist for UK Law Firms",
  description: "A practical GDPR compliance checklist for UK solicitors and law firms — covering document management, client data, retention, and SRA obligations.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/gdpr-compliance-checklist-law-firms" },
};

export default function GdprLawFirmsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">GDPR Compliance Checklist for UK Law Firms</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Law firms handle some of the most sensitive personal data of any sector — client instructions, financial details, medical records in personal injury matters, family information in family law. Our <Link href="/guides/document-management-gdpr-compliance-uk" className="text-blue-600 hover:underline">document management GDPR compliance</Link> guide covers the general framework. This checklist covers the legal sector specifically.</p>

        <h2 className="text-2xl font-bold text-navy">The SRA and GDPR Overlap</h2>
        <p>SRA Principle 6 requires solicitors to behave in a way that maintains trust in the profession. SRA Rule 6.3 requires that client information is kept confidential. These obligations overlap significantly with GDPR — failing to protect client data properly is both a GDPR breach and an SRA breach, potentially triggering both ICO enforcement and SRA regulatory action.</p>

        <h2 className="text-2xl font-bold text-navy">Document Management GDPR Checklist — Law Firms</h2>

        <h3 className="text-xl font-bold text-navy">Data mapping and ROPA</h3>
        <ul className="space-y-1">
          <li>☐ Record of Processing Activities (ROPA) maintained and up to date</li>
          <li>☐ All personal data categories documented: client data, matter data, employee data, witness data</li>
          <li>☐ Processing purposes documented for each data category</li>
          <li>☐ Third-party data processors documented (DMS vendor, cloud provider, email provider)</li>
          <li>☐ Data flows documented (where data goes: client → firm → counsel → court)</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">Matter and client file management</h3>
        <ul className="space-y-1">
          <li>☐ Client files held only for the matter duration + 6 years minimum after closure</li>
          <li>☐ Destruction policy in place — certificates of destruction maintained</li>
          <li>☐ Files not retained indefinitely by default</li>
          <li>☐ Conflict check system integrated with client/matter data to prevent data access breaches</li>
          <li>☐ Ethical walls enforced at system level, not just by policy</li>
          <li>☐ Access to closed matter files restricted and logged</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">Client data and consent</h3>
        <ul className="space-y-1">
          <li>☐ Privacy notice provided to clients covering: data collected, purpose, retention, rights</li>
          <li>☐ Lawful basis documented for each type of client data processing</li>
          <li>☐ Marketing communications: consent obtained and records kept</li>
          <li>☐ Third-party data sharing with counsel/experts: covered in engagement letter or privacy notice</li>
          <li>☐ ID verification documents (AML checks): retention limited to 5 years after matter close (MLRO guidance)</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">Access controls and security</h3>
        <ul className="space-y-1">
          <li>☐ DMS/document system has user-level access controls</li>
          <li>☐ Fee earner access limited to matters they are working on</li>
          <li>☐ Admin access restricted to a small number of authorised staff</li>
          <li>☐ Multi-factor authentication enabled for all staff accessing client data</li>
          <li>☐ Audit log active — records who accessed which file and when</li>
          <li>☐ External sharing controls configured — documents shared with clients via secure portal, not email</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">Subject access requests</h3>
        <ul className="space-y-1">
          <li>☐ SAR procedure documented and all staff trained on it</li>
          <li>☐ Designated person to handle SARs identified</li>
          <li>☐ Ability to search all systems for a named individual&apos;s data confirmed</li>
          <li>☐ Response time tracking in place (30-day deadline)</li>
        </ul>

        <h3 className="text-xl font-bold text-navy">Breach management</h3>
        <ul className="space-y-1">
          <li>☐ Data breach procedure documented</li>
          <li>☐ 72-hour ICO reporting obligation known and understood</li>
          <li>☐ Breach log maintained (even for breaches not reported to ICO)</li>
          <li>☐ Staff trained to recognise and report potential breaches</li>
          <li>☐ Note: SRA must also be notified of serious breaches as part of SRA transparency obligations</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">The Document System Requirements</h2>
        <p>The checklist above is only achievable with a document management system that provides: matter-centric access controls, ethical wall enforcement, comprehensive audit logging, retention scheduling with automatic flagging, and secure external sharing (client portal). A shared file server or unstructured SharePoint library cannot reliably deliver all of these.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Find a legal DMS that covers all of this</h2>
        <p className="text-gray-300 mb-6">Compare legal DMS options with built-in SRA and GDPR compliance features.</p>
        <Link href="/guides/best-dms-law-firms-uk" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Best DMS for Law Firms →</Link>
        <Link href="/consultants" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Find a Consultant →</Link>
      </div>
    </main>
  );
}
