import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMS Project Brief Template: What to Include Before Talking to Vendors",
  description: "A project brief template for a document management system implementation — so you can brief vendors and consultants properly without wasting time.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/dms-project-brief-template" },
};

export default function DmsProjectBriefPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Template</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">DMS Project Brief Template: What to Include Before Talking to Vendors</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Walking into a DMS vendor demo without a project brief means the vendor controls the conversation. A written brief gives you and any <Link href="/guides/find-hire-dms-consultant-uk" className="text-blue-600 hover:underline">consultant you hire</Link> a common starting point. Use this template as a starting structure — adapt it to your business.</p>

        <h2 className="text-2xl font-bold text-navy">Section 1: Business Overview</h2>
        <ul>
          <li><strong>Organisation name and sector</strong></li>
          <li><strong>Number of employees</strong> (total and document system users)</li>
          <li><strong>Number of sites / locations</strong></li>
          <li><strong>Current technology environment</strong> — Microsoft 365 / Google Workspace / other; cloud or on-premise infrastructure?</li>
          <li><strong>IT resources</strong> — do you have in-house IT, an IT support company, or nothing?</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Section 2: Current State (the Problem)</h2>
        <ul>
          <li><strong>Where documents currently live</strong> — shared drive, SharePoint, email, paper, a mix?</li>
          <li><strong>Current pain points</strong> — can&apos;t find documents, version confusion, no mobile access, compliance concerns, security gaps?</li>
          <li><strong>Approximate document volumes</strong> — how many documents are created or received per month? How many years of existing documents need to be migrated?</li>
          <li><strong>Document types in scope</strong> — contracts, invoices, client files, HR records, quality documents — list the main categories</li>
          <li><strong>Paper documents in scope?</strong> — yes/no; if yes, estimate volumes and how documents currently arrive on paper</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Section 3: Requirements</h2>
        <ul>
          <li><strong>Mandatory requirements</strong> — things the system must do to be considered (e.g. GDPR-compliant, integrates with Sage, works on mobile)</li>
          <li><strong>Important requirements</strong> — things that matter but aren&apos;t absolute dealbreakers</li>
          <li><strong>Nice to have</strong> — things you&apos;d value but wouldn&apos;t pay significantly more for</li>
          <li><strong>Integration requirements</strong> — list every other system the DMS should connect to: CRM, ERP, accounting, HR, email</li>
          <li><strong>Compliance requirements</strong> — GDPR, ISO 9001, sector-specific regulations?</li>
          <li><strong>Access requirements</strong> — does it need to work from mobile? From remote locations? By external partners or clients?</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Section 4: Project Constraints</h2>
        <ul>
          <li><strong>Budget range</strong> — be honest with consultants and vendors; they can filter options to your range. Give a realistic range rather than &quot;as low as possible.&quot;</li>
          <li><strong>Timeline</strong> — is there a deadline driving the project (lease on premises, compliance audit, contract expiry)?</li>
          <li><strong>Internal resource</strong> — how much staff time can be committed to the project? Who is the internal project lead?</li>
          <li><strong>Technical constraints</strong> — anything the system must or must not use (e.g. must be UK-hosted, must not require VPN, must support ADFS/SSO)</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Section 5: Success Criteria</h2>
        <ul>
          <li>How will you know the project has succeeded? Define 3–5 measurable outcomes:
            <ul>
              <li>&quot;Staff can find any document in under 60 seconds&quot;</li>
              <li>&quot;No documents stored outside the DMS within six months of go-live&quot;</li>
              <li>&quot;Retention schedule implemented and retention labels applied to all document types&quot;</li>
              <li>&quot;SAR response time reduced to under one hour&quot;</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Section 6: Stakeholders</h2>
        <ul>
          <li><strong>Project sponsor</strong> — senior leader with authority to approve spend and remove barriers</li>
          <li><strong>Project lead</strong> — day-to-day manager of the implementation</li>
          <li><strong>Key users to involve in requirements</strong> — one or two representatives from each major user group</li>
          <li><strong>Decision maker(s)</strong> — who signs off on vendor selection?</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">How to Use This Brief</h2>
        <p>Send this brief to any consultant you&apos;re evaluating before your first meeting. It allows them to prepare relevant questions and relevant experience rather than starting from zero. It also filters out consultants who can&apos;t engage meaningfully with a brief. When talking to vendors, share the brief — it prevents demos being a generic walkthrough and forces them to address your specific requirements.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to brief a consultant?</h2>
        <p className="text-gray-300 mb-6">Browse specialists who can take your brief and run with it.</p>
        <Link href="/consultants" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Find a Consultant →</Link>
      </div>
    </main>
  );
}
