import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Go Paperless for a UK SME? (2025)",
  description: "Real costs of going paperless for a UK small business — scanners, DMS, implementation, and what you actually save. Honest numbers.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/going-paperless-cost-uk-sme" },
};

export default function GoingPaperlessCostPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">How Much Does It Cost to Go Paperless for a UK SME? (2025)</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>For the full picture on <Link href="/guides/going-paperless-uk-businesses" className="text-blue-600 hover:underline">how to go paperless</Link> — including what you need and the step-by-step process — read our complete guide. This article focuses purely on the numbers: what it costs and what you save.</p>

        <h2 className="text-2xl font-bold text-navy">The Three Cost Components</h2>
        <p>Going paperless has three cost areas: the scanner, the storage/DMS platform, and implementation (your time or a consultant&apos;s). Most businesses underestimate the third.</p>

        <h2 className="text-2xl font-bold text-navy">Scanner Costs</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Scanner Type</th>
                <th className="border border-gray-200 p-3 text-left">Price Range</th>
                <th className="border border-gray-200 p-3 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Entry desktop (USB)</td><td className="border border-gray-200 p-3">£80–200</td><td className="border border-gray-200 p-3">1–3 person office, low volume</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Mid desktop (USB)</td><td className="border border-gray-200 p-3">£200–400</td><td className="border border-gray-200 p-3">Small office, daily scanning</td></tr>
              <tr><td className="border border-gray-200 p-3">Standalone PC-free network</td><td className="border border-gray-200 p-3">£400–700</td><td className="border border-gray-200 p-3">Shared use, no PC required, shopfloor</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">MFP with scan</td><td className="border border-gray-200 p-3">£500–2,000+</td><td className="border border-gray-200 p-3">Already printing — scan as add-on</td></tr>
            </tbody>
          </table>
        </div>
        <p>For most UK SMEs going paperless seriously, a standalone PC-free network scanner is the right investment. It serves multiple users, doesn&apos;t depend on a PC being on, and scans directly to SharePoint without IT involvement. One-off cost, no ongoing licence.</p>

        <h2 className="text-2xl font-bold text-navy">DMS / Storage Platform Costs</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Platform</th>
                <th className="border border-gray-200 p-3 text-left">Cost</th>
                <th className="border border-gray-200 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">SharePoint (M365 Basic)</td><td className="border border-gray-200 p-3">£4.50/user/month</td><td className="border border-gray-200 p-3">Included if already on M365</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Google Drive Business</td><td className="border border-gray-200 p-3">£9.20/user/month</td><td className="border border-gray-200 p-3">Simple, limited metadata</td></tr>
              <tr><td className="border border-gray-200 p-3">Dedicated DMS (mid-market)</td><td className="border border-gray-200 p-3">£15–40/user/month</td><td className="border border-gray-200 p-3">Full features, compliance ready</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Dedicated DMS (enterprise)</td><td className="border border-gray-200 p-3">£40–100/user/month</td><td className="border border-gray-200 p-3">Regulated sectors, complex workflows</td></tr>
            </tbody>
          </table>
        </div>
        <p>For a 20-person SME already on Microsoft 365: SharePoint is effectively free. The scanner is the main investment. For businesses without M365, factor in the platform cost.</p>

        <h2 className="text-2xl font-bold text-navy">Implementation Costs</h2>
        <p>This is what people forget to budget for:</p>
        <ul>
          <li><strong>DIY implementation:</strong> Free in cash, but estimate 20–40 hours of staff time — setting up folder structure, configuring scan destinations, sorting backlog. At £20/hour, that&apos;s £400–800 in real cost.</li>
          <li><strong>Consultant-led implementation:</strong> £500–2,500 for a typical SME. Covers discovery, setup, configuration, and training. Often pays back quickly by getting it right first time.</li>
          <li><strong>Backlog digitisation:</strong> If you have years of paper to digitise, factor in either staff time or a scanning bureau. Bureau rates: typically £0.03–0.08 per page for high-volume work.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Total Cost for a 20-Person UK SME</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Item</th>
                <th className="border border-gray-200 p-3 text-left">DIY Route</th>
                <th className="border border-gray-200 p-3 text-left">Consultant Route</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Scanner (PC-free network)</td><td className="border border-gray-200 p-3">£500</td><td className="border border-gray-200 p-3">£500</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Platform (SharePoint on M365)</td><td className="border border-gray-200 p-3">£0 (included)</td><td className="border border-gray-200 p-3">£0 (included)</td></tr>
              <tr><td className="border border-gray-200 p-3">Implementation</td><td className="border border-gray-200 p-3">£600 (staff time)</td><td className="border border-gray-200 p-3">£1,500</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3 font-semibold">Year 1 total</td><td className="border border-gray-200 p-3 font-semibold">~£1,100</td><td className="border border-gray-200 p-3 font-semibold">~£2,000</td></tr>
              <tr><td className="border border-gray-200 p-3">Ongoing (per year)</td><td className="border border-gray-200 p-3">~£200 (maintenance)</td><td className="border border-gray-200 p-3">~£200</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-navy">What You Save</h2>
        <p>The savings are typically 3–5x the cost within the first year:</p>
        <ul>
          <li><strong>Search time:</strong> 20 staff × 15 min/day saved × 250 days × £15/hr = <strong>£18,750/year</strong></li>
          <li><strong>Paper and print:</strong> £1,500–3,000/year</li>
          <li><strong>Physical storage (filing cabinets, archive):</strong> £500–2,000/year</li>
          <li><strong>Total annual saving: £20,000–25,000</strong> for a 20-person office</li>
        </ul>
        <p>Payback period: typically 3–6 weeks. Going paperless is one of the few IT investments that pays back in weeks, not years.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to start?</h2>
        <p className="text-gray-300 mb-6">Compare DMS systems and see the full going-paperless guide.</p>
        <Link href="/guides/going-paperless-uk-businesses" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Going Paperless Guide →</Link>
        <Link href="/dms" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Compare DMS →</Link>
      </div>
    </main>
  );
}
