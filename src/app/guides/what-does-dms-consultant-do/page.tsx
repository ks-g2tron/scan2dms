import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Does a DMS Consultant Actually Do?",
  description: "Thinking of hiring a document management consultant? Here's exactly what they do, what you get, and whether you actually need one.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/what-does-dms-consultant-do" },
};

export default function WhatDoesDmsConsultantDoPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">What Does a DMS Consultant Actually Do?</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Before you engage one, you should know exactly what you&apos;re paying for. Our full guide covers how to <Link href="/guides/find-hire-dms-consultant-uk" className="text-blue-600 hover:underline">find and hire a DMS consultant in the UK</Link>. This article breaks down what the role actually involves, day to day.</p>

        <h2 className="text-2xl font-bold text-navy">The Core Job: Reducing Risk on a Complex Purchase</h2>
        <p>A document management system is a significant business purchase — typically £5,000–100,000+ in total cost of ownership over three years, including software licences, implementation, training, and ongoing support. Most businesses buy a DMS once. A DMS consultant has seen dozens of implementations across different sectors and knows where projects go wrong.</p>
        <p>Their primary value is reducing the risk that you buy the wrong system, implement it badly, or spend six months in a painful rollout that could have been avoided.</p>

        <h2 className="text-2xl font-bold text-navy">Phase 1: Requirements Discovery</h2>
        <p>A consultant starts by understanding your current situation and what you actually need. This typically involves:</p>
        <ul>
          <li>Interviews with key stakeholders — who uses documents, what are the pain points, what does each department need?</li>
          <li>Document audit — what types of documents do you create and receive? What volumes? Where are they currently stored?</li>
          <li>Process mapping — how do documents flow through your business? Where are the bottlenecks?</li>
          <li>Compliance requirements — what regulations apply? GDPR, sector-specific rules?</li>
          <li>Integration requirements — what other systems (ERP, CRM, accounting) does the DMS need to connect with?</li>
        </ul>
        <p>The output is a requirements document that becomes the specification for vendor selection.</p>

        <h2 className="text-2xl font-bold text-navy">Phase 2: Vendor Selection</h2>
        <p>Armed with requirements, the consultant identifies shortlisted vendors appropriate for your needs and budget. They:</p>
        <ul>
          <li>Issue a structured RFP (Request for Proposal) to shortlisted vendors</li>
          <li>Evaluate vendor responses against your requirements</li>
          <li>Arrange product demonstrations — often managing what the vendor demos so it addresses your specific use cases, not a generic script</li>
          <li>Reference checking — talking to existing customers in similar sectors</li>
          <li>Commercial review — evaluating pricing, contract terms, vendor stability</li>
          <li>Recommendation report — usually ranking two or three options with rationale</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Phase 3: Implementation Oversight</h2>
        <p>Some consultants stop at vendor selection; others continue through implementation. Implementation oversight involves:</p>
        <ul>
          <li>Project managing the implementation alongside the vendor&apos;s implementation team</li>
          <li>Designing the folder structure, metadata schema, and document taxonomy</li>
          <li>Configuring retention labels and access controls</li>
          <li>Overseeing data migration — ensuring existing documents are migrated correctly</li>
          <li>User acceptance testing — verifying the system works as specified before go-live</li>
          <li>Training programme design and delivery</li>
          <li>Go-live support</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Phase 4: Post-Implementation Review</h2>
        <p>Better consultants include a 30–90 day post-implementation review: are users adopting the system? Are there issues with configuration? Is the system actually solving the problems it was bought to solve? Adjustments are made based on real-world usage.</p>

        <h2 className="text-2xl font-bold text-navy">What They Are Not</h2>
        <p>A DMS consultant is not a system administrator — they don&apos;t provide ongoing helpdesk support after implementation. They are not a software reseller (or shouldn&apos;t be — beware consultants who only recommend vendors they have commercial relationships with). They are not a legal adviser — they can help you understand GDPR requirements in the context of document management but cannot give legal advice.</p>

        <h2 className="text-2xl font-bold text-navy">Do You Need One?</h2>
        <p>You probably need a consultant if: your project involves more than 20 users, you have complex integration requirements, you&apos;re in a regulated sector with specific compliance needs, or you&apos;ve attempted a DMS implementation before and it failed. You probably don&apos;t need one if: you&apos;re a small team, your requirements are simple, and you have time to do your own research and manage the project.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Find a DMS consultant for your project</h2>
        <p className="text-gray-300 mb-6">Browse vetted consultants by sector and project type.</p>
        <Link href="/consultants" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Find a Consultant →</Link>
        <Link href="/guides/find-hire-dms-consultant-uk" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Hiring Guide →</Link>
      </div>
    </main>
  );
}
