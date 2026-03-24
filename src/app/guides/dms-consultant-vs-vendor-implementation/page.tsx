import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMS Consultant vs Vendor Implementation Team: What's the Difference?",
  description: "Should you use the vendor's own implementation team or an independent consultant? The difference matters — especially when things go wrong.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/dms-consultant-vs-vendor-implementation" },
};

export default function ConsultantVsVendorPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">DMS Consultant vs Vendor Implementation Team: What&apos;s the Difference?</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>When you buy a DMS, the vendor often offers their own implementation services. Should you use them, or hire an independent consultant? Our main <Link href="/guides/find-hire-dms-consultant-uk" className="text-blue-600 hover:underline">DMS consultant guide</Link> covers finding independent help. This article compares the two options.</p>

        <h2 className="text-2xl font-bold text-navy">What Vendor Implementation Teams Do</h2>
        <p>Most DMS vendors sell professional services alongside their software. Their implementation team will: install and configure the system, help design your folder structure and metadata, migrate existing data, integrate with other systems (sometimes at additional cost), and deliver training. They know their own product extremely well.</p>

        <h2 className="text-2xl font-bold text-navy">What Independent Consultants Do</h2>
        <p>An independent consultant provides advice before, during, and sometimes after implementation. They may: help you select the right vendor (something the vendor&apos;s own team can&apos;t do objectively), act as your representative during implementation — holding the vendor accountable, bridging the gap between your business requirements and the technical configuration, manage the project independently from the vendor, and continue supporting you after go-live if issues arise.</p>

        <h2 className="text-2xl font-bold text-navy">The Key Difference: Whose Side Are They On?</h2>
        <p>The vendor implementation team is employed by or contracted to the vendor. Their objective is a successful implementation of that vendor&apos;s product. If your requirements don&apos;t fit well with the product, they will configure what they can and manage your expectations about the gaps.</p>
        <p>An independent consultant&apos;s objective is a successful outcome for you. If the vendor is under-delivering, the independent consultant will say so and hold them to account. If the product genuinely doesn&apos;t meet a requirement, the independent consultant will escalate it — not explain why the gap doesn&apos;t matter.</p>

        <h2 className="text-2xl font-bold text-navy">When Vendor Implementation Is Fine</h2>
        <p>Using the vendor&apos;s own team is reasonable when:</p>
        <ul>
          <li>You&apos;ve already done independent research and you&apos;re confident in the system choice</li>
          <li>The implementation is straightforward — standard configuration, no complex integrations</li>
          <li>You have an experienced internal project manager who can hold the vendor accountable</li>
          <li>The vendor is highly reputable with strong client references for similar implementations</li>
          <li>The implementation cost is included in the software price (common for smaller DMS platforms)</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">When You Should Use an Independent Consultant</h2>
        <p>An independent consultant adds most value when:</p>
        <ul>
          <li>You haven&apos;t yet selected a vendor — the consultant helps you choose objectively</li>
          <li>The implementation is complex — multiple integrations, large data migration, multiple departments or sites</li>
          <li>You&apos;ve been burned before — a previous DMS implementation that failed</li>
          <li>You&apos;re in a regulated sector with specific compliance requirements the vendor may not fully understand</li>
          <li>You don&apos;t have internal technical expertise to evaluate vendor claims during implementation</li>
          <li>You&apos;re paying significant amounts for the software — the consultant fee is small relative to the investment being protected</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Can You Use Both?</h2>
        <p>Yes — and for larger projects, this is common. The independent consultant handles requirements definition, vendor selection, and oversight. The vendor&apos;s implementation team does the technical configuration and migration. The consultant acts as a check on the vendor&apos;s delivery, and as the client&apos;s advocate when technical decisions need to be made.</p>
        <p>This structure works best when both parties understand their roles. Make it clear to the vendor that you have an independent consultant involved — good vendors welcome this; it reduces misunderstandings and scope disputes.</p>

        <h2 className="text-2xl font-bold text-navy">The Cost Comparison</h2>
        <p>Vendor implementation fees are typically bundled into the overall software price or quoted separately as a services day rate similar to an independent consultant. An independent consultant is an additional cost on top. For a £20,000 software investment, an independent consultant fee of £4,000–6,000 is reasonable insurance. For a £2,000 software subscription, the same consultant fee would be disproportionate.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Find an independent DMS consultant</h2>
        <p className="text-gray-300 mb-6">Specialists who work for you, not for the vendor.</p>
        <Link href="/consultants" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Find a Consultant →</Link>
        <Link href="/dms" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Compare DMS Systems →</Link>
      </div>
    </main>
  );
}
