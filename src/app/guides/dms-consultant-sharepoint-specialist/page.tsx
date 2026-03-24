import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Do You Need a SharePoint Specialist or a DMS Consultant?",
  description: "If you're planning to use SharePoint as your DMS, should you hire a SharePoint specialist or a document management consultant? The answer depends on your problem.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/dms-consultant-sharepoint-specialist" },
};

export default function SharePointSpecialistPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Do You Need a SharePoint Specialist or a DMS Consultant?</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Many UK businesses plan to use SharePoint as their document management system. But when they need outside help, they face a choice: a SharePoint technical specialist, or a document management consultant? Our <Link href="/guides/find-hire-dms-consultant-uk" className="text-blue-600 hover:underline">DMS consultant guide</Link> explains the consultant role. This article addresses the SharePoint-vs-DMS-consultant question directly.</p>

        <h2 className="text-2xl font-bold text-navy">What a SharePoint Specialist Does</h2>
        <p>A SharePoint specialist is a technical expert in Microsoft SharePoint — they know how to configure sites, libraries, metadata columns, content types, permissions, workflows (Power Automate), retention labels (Microsoft Purview), and integrations with other Microsoft 365 services. They can build what you ask them to build in SharePoint.</p>
        <p>What they are typically not: experts in document management <em>process design</em>. They can configure metadata columns — but they may not know that for your sector, you need a specific set of metadata to support GDPR compliance or ISO 9001. They can set up folders — but they won&apos;t necessarily know that your folder structure should be built on metadata rather than hierarchy to scale properly. They can set retention labels — but they probably don&apos;t know the specific HMRC and employment law retention periods that apply to your document types.</p>

        <h2 className="text-2xl font-bold text-navy">What a DMS Consultant Does</h2>
        <p>A DMS consultant understands document management <em>strategy and practice</em> — how documents should be classified, retained, accessed, shared, and controlled — across multiple technology platforms including SharePoint. They may not have deep SharePoint technical configuration skills, but they know what SharePoint should be configured to do, and they can specify that clearly enough for a SharePoint specialist to build it.</p>

        <h2 className="text-2xl font-bold text-navy">The Common Gap</h2>
        <p>Businesses often hire a SharePoint specialist without having defined their document management strategy first. The specialist builds a technically correct SharePoint environment — but it&apos;s built to the wrong specification. Libraries are structured around how files are currently stored (mirroring a chaotic file server) rather than how they should be managed. Metadata is minimal. Retention isn&apos;t configured. Three months later, the SharePoint environment is as messy as the shared drive it replaced.</p>
        <p>The SharePoint specialist did exactly what was asked — they just weren&apos;t asked the right thing.</p>

        <h2 className="text-2xl font-bold text-navy">The Right Combination</h2>
        <p>For a SharePoint-based DMS, the ideal sequence is:</p>
        <ol>
          <li><strong>DMS consultant:</strong> Defines the document taxonomy, metadata schema, retention schedule, access control model, and compliance configuration requirements. Produces a specification document.</li>
          <li><strong>SharePoint specialist:</strong> Builds the SharePoint environment to that specification.</li>
          <li><strong>DMS consultant:</strong> Reviews the built environment against requirements. Signs off.</li>
        </ol>
        <p>Sometimes one person can do both — a SharePoint specialist with document management experience is a genuine specialist. But this is rarer than it might appear. Most SharePoint specialists have strong Microsoft 365 technical skills and limited document management process knowledge. Most DMS consultants have strong document management knowledge and variable SharePoint technical depth.</p>

        <h2 className="text-2xl font-bold text-navy">If You&apos;re Still Undecided: Ask This Question</h2>
        <p>Is your problem &quot;we don&apos;t know how to use SharePoint technically&quot; or &quot;we don&apos;t know how our documents should be organised, retained, and managed&quot;?</p>
        <p>Technical problem → SharePoint specialist. Strategy and process problem → DMS consultant. Both problems → you may need both, or you need a rare individual who genuinely covers both disciplines.</p>

        <h2 className="text-2xl font-bold text-navy">Finding Someone Who Covers Both</h2>
        <p>Look for consultants who specifically reference both document management strategy and SharePoint implementation in their practice. Ask them: &quot;If you were building our SharePoint DMS, what questions would you ask me before you touched a single library setting?&quot; A good answer covers taxonomy, metadata, retention, access policy, and compliance. A weak answer goes straight to technical options.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Find a consultant who covers both</h2>
        <p className="text-gray-300 mb-6">DMS strategy plus SharePoint implementation expertise.</p>
        <Link href="/consultants" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Find a Consultant →</Link>
        <Link href="/guides/is-sharepoint-good-enough-as-dms" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Is SharePoint Good Enough as a DMS? →</Link>
      </div>
    </main>
  );
}
