import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Calculate the ROI of a Document Management System",
  description: "Before you buy a DMS, calculate the ROI. We show you the real numbers — time savings, storage costs, compliance risk, and payback period.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/dms-roi-calculation-uk" },
};

export default function DmsRoiPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">How to Calculate the ROI of a Document Management System</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>ROI is one of the key decision factors in our <Link href="/guides/how-to-choose-document-management-system-uk" className="text-blue-600 hover:underline">best document management system UK</Link> guide — see the full evaluation framework there. This article gives you the numbers: how to build a real ROI calculation for a DMS investment.</p>

        <h2 className="text-2xl font-bold text-navy">Why ROI Calculation Matters</h2>
        <p>Most DMS purchases are approved on gut feel — &quot;we need to get off paper&quot; — or blocked the same way — &quot;it&apos;s too expensive.&quot; A simple ROI calculation changes the conversation. It quantifies what the problem costs today, what the solution costs, and how long it takes to pay back. For a board or finance director, that&apos;s a much more compelling argument than &quot;it&apos;ll be more efficient.&quot;</p>

        <h2 className="text-2xl font-bold text-navy">The Costs to Include</h2>
        <p><strong>DMS licence/subscription:</strong> The monthly per-user fee. For a 20-person team at £25/user/month: £6,000/year.</p>
        <p><strong>Implementation:</strong> One-off cost. Self-implemented: staff time (estimate honestly). Consultant-led: typically £1,500–5,000 for an SME.</p>
        <p><strong>Training:</strong> Staff time for training sessions, typically 2–4 hours per user. At £20/hour for 20 users: £800–1,600.</p>
        <p><strong>Ongoing IT overhead:</strong> Cloud DMS: near-zero. On-premise: add server maintenance and IT staff time.</p>

        <h2 className="text-2xl font-bold text-navy">The Savings to Quantify</h2>

        <h3 className="text-xl font-bold text-navy">Document search time</h3>
        <p>This is consistently the biggest saving. Studies put the average knowledge worker time spent searching for documents at 15–30 minutes per day. The AIIM (Association for Intelligent Information Management) puts it at 18 minutes daily. For a UK business:</p>
        <p><strong>20 staff × 18 min/day × 250 working days × £15/hr average = £22,500/year</strong></p>
        <p>A DMS that reduces search time to 2 minutes (finding documents by metadata search in seconds) captures most of that saving. Even a 50% reduction saves £11,250/year on a 20-person team.</p>

        <h3 className="text-xl font-bold text-navy">Physical storage costs</h3>
        <p>Filing cabinets: £300–600 each. A 20-person office typically has 6–15 cabinets: £1,800–9,000 in capital cost, plus floor space. Off-site archive storage: £50–300/month for a small business. Paper and print spend: typically £1,000–3,000/year for a 20-person office.</p>
        <p>After a successful DMS implementation, most businesses reduce physical document volume by 60–80% within two years.</p>

        <h3 className="text-xl font-bold text-navy">Admin and filing labour</h3>
        <p>How many hours per week does your team spend filing, sorting, and managing paper? For a 20-person office, 5–10 hours/week is typical. At £12/hour: £3,000–6,000/year in direct labour cost for document management tasks.</p>

        <h3 className="text-xl font-bold text-navy">Compliance risk reduction</h3>
        <p>ICO fines for GDPR breaches can reach £17.5m or 4% of global turnover. The average UK SME data breach costs £3,400–16,700 in direct costs (ICO investigation, legal fees, notification costs, remediation). A DMS with proper access controls and retention rules materially reduces this risk. Even if the probability of a breach is low, the expected cost reduction is significant.</p>
        <p>For regulated sectors: solicitors risk SRA intervention, FCA firms risk regulatory action, healthcare organisations risk CQC enforcement. The compliance cost of a document management failure is much higher than the DMS licence cost.</p>

        <h2 className="text-2xl font-bold text-navy">Worked Example — 20-Person Office</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Saving</th>
                <th className="border border-gray-200 p-3 text-left">Annual Value</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Search time (50% reduction)</td><td className="border border-gray-200 p-3">£11,250</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Physical storage (paper, archive, cabinets)</td><td className="border border-gray-200 p-3">£3,600</td></tr>
              <tr><td className="border border-gray-200 p-3">Filing and admin labour</td><td className="border border-gray-200 p-3">£4,000</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-semibold">Total annual saving</td><td className="border border-gray-200 p-3 font-semibold">£18,850</td></tr>
            </tbody>
          </table>
        </div>
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Cost</th>
                <th className="border border-gray-200 p-3 text-left">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">DMS licence (£25/user/month)</td><td className="border border-gray-200 p-3">£6,000/yr</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Implementation (one-off)</td><td className="border border-gray-200 p-3">£3,000</td></tr>
              <tr><td className="border border-gray-200 p-3 font-semibold">Net Year 1</td><td className="border border-gray-200 p-3 font-semibold">+£9,850</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-semibold">Net Year 2+</td><td className="border border-gray-200 p-3 font-semibold">+£12,850/yr</td></tr>
            </tbody>
          </table>
        </div>
        <p>Payback period: under 3 months in year one. That&apos;s a strong ROI by any measure.</p>

        <h2 className="text-2xl font-bold text-navy">Typical Payback Periods</h2>
        <ul>
          <li><strong>Small business (under 20 users):</strong> 3–6 months</li>
          <li><strong>Mid-size (20–100 users):</strong> 2–4 months</li>
          <li><strong>Enterprise (100+ users):</strong> 1–3 months (volume amplifies the search time saving)</li>
        </ul>
        <p>DMS projects are unusual in that the payback period is almost always under 12 months. The main reason implementations get blocked isn&apos;t ROI — it&apos;s change management resistance and uncertainty about which system to choose.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to compare DMS pricing?</h2>
        <p className="text-gray-300 mb-6">Build your own cost model with real pricing from 20+ systems.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Browse the DMS Directory →</Link>
      </div>
    </main>
  );
}
