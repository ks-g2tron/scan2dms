import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is SharePoint GDPR Compliant? What UK Businesses Need to Know",
  description: "SharePoint can be configured to be GDPR-compliant — but out of the box, it's not. Here's what you need to do and what to check.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/is-sharepoint-gdpr-compliant" },
};

export default function SharePointGdprPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Is SharePoint GDPR Compliant? What UK Businesses Need to Know</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>SharePoint is used by millions of UK businesses to store documents. But is storing personal data in SharePoint GDPR-compliant? Our <Link href="/guides/document-management-gdpr-compliance-uk" className="text-blue-600 hover:underline">document management GDPR compliance</Link> guide covers the principles. This article addresses the SharePoint-specific question.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-5">
          <p className="font-semibold text-navy mb-1">Short answer</p>
          <p className="text-gray-700">SharePoint <em>can</em> be GDPR-compliant, but it isn&apos;t by default. Compliance depends on how your SharePoint environment is configured. Most organisations using SharePoint are missing at least some of the configuration needed for full compliance.</p>
        </div>

        <h2 className="text-2xl font-bold text-navy">What Microsoft Does (and Doesn&apos;t) Cover</h2>
        <p><strong>Microsoft&apos;s responsibility:</strong> Microsoft is a data processor when you use SharePoint. They are responsible for the security of the infrastructure, service availability, data centre physical security, and their own staff access to your data. Microsoft&apos;s compliance with ISO 27001, SOC 2, and UK data protection law at the infrastructure level is well-documented.</p>
        <p><strong>Your responsibility:</strong> You are the data controller. You are responsible for: who has access to your SharePoint data, what retention periods apply, whether data is shared appropriately, and whether you can respond to data subject requests. Microsoft provides the tools; you configure them.</p>

        <h2 className="text-2xl font-bold text-navy">The Five Things You Must Configure</h2>

        <h3 className="text-xl font-bold text-navy">1. Access controls and permissions</h3>
        <p>Personal data must only be accessible to staff who need it for their role. Default SharePoint permissions are often too permissive — new libraries inherit site permissions, giving all site members access to everything. You need library-level permissions for sensitive document types: HR records, financial data, client confidential files. Review and tighten permissions; don&apos;t rely on defaults.</p>

        <h3 className="text-xl font-bold text-navy">2. Retention labels and policies</h3>
        <p>GDPR requires that personal data is deleted when no longer needed. SharePoint doesn&apos;t delete anything automatically without retention labels configured in Microsoft Purview. This requires Microsoft 365 Compliance admin access and deliberate configuration. Most SMEs have never done this. Without it, personal data in SharePoint accumulates indefinitely — a clear GDPR breach.</p>

        <h3 className="text-xl font-bold text-navy">3. Audit logging</h3>
        <p>SharePoint has audit logging capability, but it must be enabled and configured. Unified audit logs in Microsoft 365 record access, sharing, and deletion events — but by default they may not capture everything you need, and the retention of audit logs (90 days in most plans, longer in E3/E5) may not meet your compliance requirements. Enable and test audit logging before relying on it.</p>

        <h3 className="text-xl font-bold text-navy">4. External sharing controls</h3>
        <p>SharePoint allows external sharing — links sent to people outside your organisation. If not controlled, personal data can be shared externally by any user with access to a document. Review your SharePoint external sharing settings: disable sharing with anonymous links for any library containing personal data; require sign-in for all external share recipients; set link expiry on shared links.</p>

        <h3 className="text-xl font-bold text-navy">5. Data residency</h3>
        <p>UK GDPR requires that personal data transferred outside the UK/EEA has adequate safeguards. Microsoft offers UK-based data residency for SharePoint through Microsoft 365 Multi-Geo or by selecting UK South/UK West as your data centre region during tenant setup. Check your Microsoft 365 admin centre: Settings → Org Settings → Data locations. If it shows a location outside the UK/EEA, you need to confirm what transfer mechanisms apply.</p>

        <h2 className="text-2xl font-bold text-navy">GDPR Checklist for SharePoint</h2>
        <ul className="space-y-2">
          <li>☐ Library permissions reviewed — sensitive data restricted to authorised users only</li>
          <li>☐ Retention labels created and applied for each document type with personal data</li>
          <li>☐ Audit logging enabled and retention of audit logs confirmed</li>
          <li>☐ External sharing settings reviewed — anonymous links disabled for sensitive libraries</li>
          <li>☐ Data residency confirmed as UK or EEA</li>
          <li>☐ Data Processing Agreement with Microsoft in place (via Microsoft Products and Services Data Protection Addendum)</li>
          <li>☐ SharePoint sites and libraries documented in your Record of Processing Activities</li>
          <li>☐ Process in place to respond to Subject Access Requests across SharePoint content</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">The Bottom Line</h2>
        <p>SharePoint is a legitimate platform for storing personal data, and Microsoft provides the tools to make it GDPR-compliant. But those tools require deliberate configuration. An unconfigured SharePoint tenancy with default settings is not GDPR-compliant for personal data storage — it&apos;s too permissive, doesn&apos;t auto-delete, and doesn&apos;t have adequate audit logging configured.</p>
        <p>If you don&apos;t have the Microsoft 365 admin expertise to configure these features, a dedicated DMS that comes compliance-configured out of the box may be a simpler path to the same outcome.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Compare GDPR-ready document management options</h2>
        <p className="text-gray-300 mb-6">Systems that come compliance-configured from day one.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Compare DMS Systems →</Link>
        <Link href="/guides/document-management-gdpr-compliance-uk" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">GDPR Compliance Guide →</Link>
      </div>
    </main>
  );
}
