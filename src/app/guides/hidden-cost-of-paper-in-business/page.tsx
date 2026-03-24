import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Hidden Cost of Paper: How Much Is Your Business Really Spending?",
  description: "Most businesses massively underestimate what paper costs them. Here's the real calculation — storage, search time, printing, compliance risk.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/hidden-cost-of-paper-in-business" },
};

export default function HiddenCostPaperPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">The Hidden Cost of Paper: How Much Is Your Business Really Spending?</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Most businesses think going paperless is a cost. It isn&apos;t — it&apos;s a saving. Our <Link href="/guides/going-paperless-uk-businesses" className="text-blue-600 hover:underline">how to go paperless</Link> guide shows you how to make the switch. This article helps you calculate what paper is currently costing you.</p>

        <h2 className="text-2xl font-bold text-navy">The Cost Nobody Counts: Search Time</h2>
        <p>This is consistently the biggest cost of paper-based document management, and the one almost no business has ever quantified. Studies by AIIM, IDC, and McKinsey consistently find that knowledge workers spend 15–30% of their working day managing, searching for, and dealing with documents.</p>
        <p>The AIIM figure most cited: <strong>18 minutes per day</strong> searching for documents that should be findable in seconds.</p>
        <p>For your business:</p>
        <ul>
          <li>20 staff × 18 min/day × 250 working days = 1,500 hours/year searching for documents</li>
          <li>At an average loaded cost of £20/hour: <strong>£30,000/year in wasted labour</strong></li>
          <li>Even at half that rate: £15,000/year</li>
        </ul>
        <p>This is the cost of not being able to find things. It&apos;s invisible because it never appears on an invoice — it&apos;s just time that evaporates from every working day.</p>

        <h2 className="text-2xl font-bold text-navy">Physical Storage Costs</h2>
        <p><strong>Filing cabinets:</strong> A standard 4-drawer filing cabinet costs £300–600 and holds approximately 10,000–15,000 documents. A 20-person office typically has 8–15 cabinets, representing £2,400–9,000 in capital cost and 10–20 square metres of floor space.</p>
        <p><strong>Floor space:</strong> Commercial office space in the UK costs £200–800+ per square metre per year depending on location. 15 square metres of filing cabinets: £3,000–12,000/year in floor space cost alone.</p>
        <p><strong>Off-site archive storage:</strong> Most businesses accumulate more paper than they have room for. Off-site archive storage costs £50–300/month for a small business, £300–1,000/month for mid-size operations.</p>
        <p><strong>Retrieval from archive:</strong> When you need a document from off-site storage, there&apos;s typically a retrieval fee (£10–50 per box) and a 24–48 hour wait. For urgent retrieval: same-day delivery charges of £50–200.</p>

        <h2 className="text-2xl font-bold text-navy">Paper and Print Spend</h2>
        <p>A 20-person office printing 50 pages/person/day:</p>
        <ul>
          <li><strong>Paper:</strong> 250,000 sheets/year at £5–6 per ream (500 sheets) = £2,500–3,000/year</li>
          <li><strong>Toner/ink:</strong> £1,500–4,000/year depending on printer</li>
          <li><strong>Printer maintenance and replacement:</strong> £500–2,000/year</li>
          <li><strong>Total print spend: £4,500–9,000/year</strong></li>
        </ul>
        <p>Most of this print spend produces documents that are filed, never referenced again, and eventually shredded.</p>

        <h2 className="text-2xl font-bold text-navy">The Cost of Lost Documents</h2>
        <p>The PricewaterhouseCoopers finding: the average cost to recreate a lost document is <strong>£110</strong>. That includes the staff time to recognise it&apos;s missing, search for it, contact the originating party, and recreate or obtain a copy.</p>
        <p>A business that loses 5 documents per week: £110 × 5 × 52 = <strong>£28,600/year</strong>.</p>
        <p>This is a conservative estimate. It doesn&apos;t include the business consequences of a document being missing at a critical moment — a contract not found before a deadline, a compliance record missing during an audit, a customer order not located during a dispute.</p>

        <h2 className="text-2xl font-bold text-navy">Compliance and Risk Costs</h2>
        <p><strong>GDPR over-retention:</strong> Keeping personal data longer than necessary is a GDPR violation. Without retention rules, most businesses keep everything indefinitely — creating regulatory exposure. ICO fines can reach £17.5m or 4% of global turnover.</p>
        <p><strong>Data breach risk:</strong> Paper documents are routinely left on desks, lost in transit, or disposed of insecurely. The average cost of a UK SME data breach: £3,400–16,700 in direct costs, plus reputational damage.</p>
        <p><strong>Audit failure:</strong> In regulated sectors, inability to produce required documentation during an audit carries penalties — SRA intervention for solicitors, FCA enforcement for financial firms, CQC action for healthcare providers.</p>

        <h2 className="text-2xl font-bold text-navy">Your Business&apos;s Paper Cost: A Simple Calculation</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Cost Category</th>
                <th className="border border-gray-200 p-3 text-left">Your Business (fill in)</th>
                <th className="border border-gray-200 p-3 text-left">20-Person Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Search time (staff × 18min/day × 250days × hourly rate)</td><td className="border border-gray-200 p-3">£___</td><td className="border border-gray-200 p-3">£22,500</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Physical storage (floor space + off-site)</td><td className="border border-gray-200 p-3">£___</td><td className="border border-gray-200 p-3">£5,000</td></tr>
              <tr><td className="border border-gray-200 p-3">Paper and print spend</td><td className="border border-gray-200 p-3">£___</td><td className="border border-gray-200 p-3">£6,000</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Lost document recreation (est. 2/week × £110)</td><td className="border border-gray-200 p-3">£___</td><td className="border border-gray-200 p-3">£11,440</td></tr>
              <tr><td className="border border-gray-200 p-3 font-semibold">Total annual cost of paper</td><td className="border border-gray-200 p-3 font-semibold">£___</td><td className="border border-gray-200 p-3 font-semibold">£44,940</td></tr>
            </tbody>
          </table>
        </div>
        <p>For most businesses, the cost of paper is 5–10x the cost of going digital. Once you&apos;ve calculated your number, the business case for a scanner and DMS tends to write itself.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to cut this cost?</h2>
        <p className="text-gray-300 mb-6">Our going paperless guide shows you exactly how to make the switch.</p>
        <Link href="/guides/going-paperless-uk-businesses" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Going Paperless Guide →</Link>
      </div>
    </main>
  );
}
