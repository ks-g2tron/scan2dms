import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Residency After Brexit: Where Is Your Document Data Stored?",
  description: "Post-Brexit, UK GDPR restricts where your business data can be stored. What UK businesses need to know about data residency for cloud DMS and document storage.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/data-residency-post-brexit-dms" },
};

export default function DataResidencyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Data Residency After Brexit: Where Is Your Document Data Stored?</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Data residency is a compliance consideration that many UK businesses underestimate when choosing a cloud DMS. Our <Link href="/guides/document-management-gdpr-compliance-uk" className="text-blue-600 hover:underline">document management GDPR compliance</Link> guide covers the full framework. This article covers the post-Brexit data residency question specifically.</p>

        <h2 className="text-2xl font-bold text-navy">What Changed After Brexit</h2>
        <p>Before Brexit, UK businesses could freely transfer personal data to any EU/EEA country and vice versa. After Brexit (specifically from 1 January 2021), the UK became a &quot;third country&quot; from the EU&apos;s perspective, and the EU became a &quot;third country&quot; from the UK&apos;s perspective.</p>
        <p>In practice: the EU granted the UK an adequacy decision in June 2021, meaning personal data can still flow freely from EU to UK. The UK granted adequacy decisions to EEA countries, meaning data can flow freely from UK to EEA. But for transfers to countries outside UK/EEA (including the US, India, and many others), both EU and UK GDPR require additional safeguards.</p>

        <h2 className="text-2xl font-bold text-navy">Why This Matters for Cloud DMS</h2>
        <p>When you store documents in a cloud DMS, the data is held in data centres owned by the vendor or their infrastructure provider (typically AWS, Azure, or Google Cloud). Those data centres may be in the US, Ireland, Germany, Singapore, or anywhere else.</p>
        <p>If your documents contain personal data about UK individuals (customers, employees, patients) and those documents are stored in data centres outside the UK/EEA — that&apos;s a restricted international transfer. You need to ensure it&apos;s covered by an adequate transfer mechanism.</p>

        <h2 className="text-2xl font-bold text-navy">UK Adequacy Decisions: Where Can Your Data Go?</h2>
        <p>The UK has recognised the following countries as providing adequate data protection (personal data can transfer freely):</p>
        <ul>
          <li>All EEA countries (EU member states, Iceland, Liechtenstein, Norway)</li>
          <li>Andorra, Argentina, Canada (commercial organisations), Faroe Islands, Guernsey, Israel, Isle of Man, Japan, Jersey, New Zealand, Republic of Korea, Switzerland, Uruguay</li>
          <li>USA: only for organisations certified under the UK-US Data Bridge (formerly Privacy Shield successor)</li>
        </ul>
        <p>For countries not on this list, a transfer impact assessment and appropriate safeguards (UK Standard Contractual Clauses, binding corporate rules) are required.</p>

        <h2 className="text-2xl font-bold text-navy">What to Ask Your DMS Vendor</h2>
        <p>Before signing a DMS contract, ask:</p>
        <ol>
          <li><strong>Where are my documents physically stored?</strong> Not just &quot;in the cloud&quot; — specific data centre regions and countries.</li>
          <li><strong>Is UK data residency available as an option?</strong> Many enterprise vendors offer data residency selection at the account level.</li>
          <li><strong>What sub-processors do you use?</strong> Even if the vendor is UK-based, they may use AWS US East or similar for infrastructure. Their sub-processors are relevant to your transfer obligations.</li>
          <li><strong>Do you have a Data Processing Agreement that covers UK GDPR?</strong> Not just EU GDPR — UK GDPR is a separate legal instrument post-Brexit.</li>
          <li><strong>If data is transferred outside UK/EEA, what mechanism do you use?</strong> UK SCCs, binding corporate rules, or reliance on an adequacy decision.</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">Major Vendor Positions</h2>
        <p><strong>Microsoft 365 / SharePoint:</strong> UK data residency available — data stored in Microsoft&apos;s UK South and UK West data centres. Requires selecting UK as your data location in the Microsoft 365 admin centre. Microsoft&apos;s DPA covers UK GDPR.</p>
        <p><strong>Google Workspace:</strong> UK data residency available for some products (Drive, Gmail) through Google&apos;s data regions feature. Check current coverage as it varies by product.</p>
        <p><strong>DocuWare Cloud:</strong> EU data residency standard; UK-specific data residency available on request. Check current terms.</p>
        <p><strong>US-headquartered DMS vendors:</strong> Many smaller DMS vendors are hosted on AWS or Azure US regions. Ask specifically about UK data residency — it may not be offered or may require a premium tier.</p>

        <h2 className="text-2xl font-bold text-navy">The Practical Test</h2>
        <p>Log into your current DMS or SharePoint admin console. Find the data location or data residency setting. Does it show UK or EEA? If it shows &quot;United States&quot; or an unspecified global location — you need to investigate whether adequate transfer safeguards are in place.</p>
        <p>This isn&apos;t a theoretical risk. The ICO has the power to investigate international data transfers and has issued enforcement notices against UK organisations using US-hosted services without adequate transfer mechanisms.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Find a DMS with UK data residency</h2>
        <p className="text-gray-300 mb-6">Compare platforms with clear UK data storage options.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Compare DMS Systems →</Link>
      </div>
    </main>
  );
}
