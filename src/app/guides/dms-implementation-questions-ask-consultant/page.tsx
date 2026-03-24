import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "20 Questions to Ask a DMS Consultant Before You Hire Them",
  description: "Before committing to a document management consultant, ask these questions. The answers will tell you whether they're right for your project.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/dms-implementation-questions-ask-consultant" },
};

export default function QuestionsAskConsultantPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">20 Questions to Ask a DMS Consultant Before You Hire Them</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Hiring a DMS consultant is itself a selection process. The questions below help you evaluate whether a consultant genuinely understands document management — or just sells software. Our full <Link href="/guides/find-hire-dms-consultant-uk" className="text-blue-600 hover:underline">guide to finding and hiring a DMS consultant</Link> covers the broader process.</p>

        <h2 className="text-2xl font-bold text-navy">About Their Experience</h2>
        <ol>
          <li><strong>How many DMS implementations have you delivered in the last three years?</strong> — Look for a specific number (5–20 is typical for an active independent specialist). Vague answers suggest limited recent experience.</li>
          <li><strong>What sectors do you specialise in?</strong> — A consultant who has done 20 implementations in legal or healthcare has sector-specific knowledge that a generalist doesn&apos;t. Match sector experience to your industry.</li>
          <li><strong>Can you give me three client references from similar-sized organisations?</strong> — Anyone serious can provide references. Reluctance is a red flag.</li>
          <li><strong>What was the most difficult DMS implementation you&apos;ve handled and what went wrong?</strong> — This tests honesty and experience. The answer reveals how they handle problems.</li>
          <li><strong>Have you ever recommended a client not proceed with a DMS project?</strong> — A good consultant sometimes advises against purchase. If the answer is &quot;never,&quot; they may be primarily interested in billing days.</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">About Their Independence</h2>
        <ol start={6}>
          <li><strong>Do you have commercial relationships with any DMS vendors?</strong> — Referral fees, reseller agreements, or white-label arrangements create conflicts of interest. They must be disclosed.</li>
          <li><strong>Do you earn commission or referral fees from vendor recommendations?</strong> — Same question, more direct. Get the answer in writing.</li>
          <li><strong>What DMS platforms have you recommended most in the last year?</strong> — A consultant who always recommends the same platform is probably a reseller in disguise.</li>
          <li><strong>What platforms do you recommend against, and why?</strong> — A genuinely independent consultant has opinions about what doesn&apos;t work. No opinions = no real experience.</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">About Their Methodology</h2>
        <ol start={10}>
          <li><strong>What does your requirements discovery process look like?</strong> — They should describe interviews, document audits, process mapping, and a written output. A consultant who skips requirements and goes straight to demo is doing it wrong.</li>
          <li><strong>How do you handle a situation where the client&apos;s stated requirements conflict with what they actually need?</strong> — Experience shows that what clients ask for and what they need are often different. A good consultant manages this.</li>
          <li><strong>How many vendors do you typically shortlist and what&apos;s your evaluation framework?</strong> — 3–5 vendors is typical. A single vendor &quot;recommendation&quot; without a competitive process is suspicious.</li>
          <li><strong>How do you handle data migration? Who does the actual migration work?</strong> — Often sub-contracted or done by the vendor. The consultant should be able to specify who does it and how it&apos;s overseen.</li>
          <li><strong>What does a typical implementation timeline look like for a project of our size?</strong> — They should give you a realistic range. Optimistic timelines that don&apos;t materialise are a common source of client frustration.</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">About the Commercial Relationship</h2>
        <ol start={15}>
          <li><strong>How do you charge — day rate or fixed price?</strong> — Either is acceptable, but understand which and why. Day rate on an ill-defined scope can escalate; fixed price requires them to scope accurately.</li>
          <li><strong>What&apos;s your estimate of days required for this project and how did you arrive at it?</strong> — They should be able to break down their estimate by phase.</li>
          <li><strong>What&apos;s not included in your fee?</strong> — Travel, expenses, software licences, vendor implementation fees, training materials. Understand what you&apos;ll pay separately.</li>
          <li><strong>What happens if the project scope changes?</strong> — Change control process should be clearly defined before you start.</li>
          <li><strong>What are the payment terms and milestone structure?</strong> — Paying everything upfront is not advisable. A milestone-based payment structure (discovery, selection, implementation, go-live) protects you if the project is terminated early.</li>
          <li><strong>Do you have professional indemnity insurance?</strong> — Any professional consultant should carry PI insurance. It&apos;s a basic indicator of seriousness. Ask for the certificate.</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">What the Answers Tell You</h2>
        <p>A strong candidate: gives specific answers with numbers and examples, discloses vendor relationships proactively, has a clear methodology they can walk you through, provides references without hesitation, and is honest about project risks and what can go wrong.</p>
        <p>Walk away if: they can&apos;t provide references, they push a single vendor without a selection process, they&apos;re vague about conflicts of interest, or they give you an optimistic timeline with no contingency.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Find pre-vetted DMS consultants</h2>
        <p className="text-gray-300 mb-6">Specialists who have already answered the hard questions.</p>
        <Link href="/consultants" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Find a Consultant →</Link>
      </div>
    </main>
  );
}
