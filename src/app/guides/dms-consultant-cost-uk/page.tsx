import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does a DMS Consultant Cost in the UK?",
  description: "Day rates, project fees, and what's typical for UK document management consultants at different project sizes. What you get and how to avoid overpaying.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/dms-consultant-cost-uk" },
};

export default function DmsConsultantCostPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">How Much Does a DMS Consultant Cost in the UK?</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Before you start talking to consultants, you should understand what&apos;s normal to pay. Our main guide on <Link href="/guides/find-hire-dms-consultant-uk" className="text-blue-600 hover:underline">finding and hiring a DMS consultant</Link> covers the full process. This article focuses on cost.</p>

        <h2 className="text-2xl font-bold text-navy">How DMS Consultants Charge</h2>
        <p>UK DMS consultants typically charge one of three ways:</p>
        <ul>
          <li><strong>Day rate:</strong> A fixed charge per day of consultancy work. Most common for ongoing engagements or where scope isn&apos;t fully defined at the start.</li>
          <li><strong>Fixed-price project fee:</strong> A single price for a defined scope — usually used for requirements and selection phases where the work can be scoped in advance.</li>
          <li><strong>Retainer:</strong> Monthly fee for ongoing advisory support — less common in DMS consultancy, more common in larger IT consultancy relationships.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Typical Day Rates (2026)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Consultant Type</th>
                <th className="border border-gray-200 p-3 text-left">Day Rate Range</th>
                <th className="border border-gray-200 p-3 text-left">Typical Experience</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Independent specialist (SME focus)</td><td className="border border-gray-200 p-3">£400–700/day</td><td className="border border-gray-200 p-3">5–15 years DMS implementation</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Mid-tier IT consultancy</td><td className="border border-gray-200 p-3">£700–1,200/day</td><td className="border border-gray-200 p-3">Team with project management overhead</td></tr>
              <tr><td className="border border-gray-200 p-3">Large consultancy (Big 4, Accenture)</td><td className="border border-gray-200 p-3">£1,200–2,500/day</td><td className="border border-gray-200 p-3">Enterprise projects, 200+ users</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Vendor-side implementation consultant</td><td className="border border-gray-200 p-3">£500–900/day</td><td className="border border-gray-200 p-3">Employed by or contracted to DMS vendor</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-navy">Typical Project Costs by Scope</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Project Scope</th>
                <th className="border border-gray-200 p-3 text-left">Typical Fee Range</th>
                <th className="border border-gray-200 p-3 text-left">Days of Consultant Time</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Requirements &amp; vendor selection only</td><td className="border border-gray-200 p-3">£2,000–6,000</td><td className="border border-gray-200 p-3">4–10 days</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Requirements, selection + implementation oversight (SME, 10–50 users)</td><td className="border border-gray-200 p-3">£8,000–20,000</td><td className="border border-gray-200 p-3">15–35 days</td></tr>
              <tr><td className="border border-gray-200 p-3">Full project (mid-market, 50–200 users)</td><td className="border border-gray-200 p-3">£20,000–60,000</td><td className="border border-gray-200 p-3">35–100 days</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Enterprise (200+ users, complex integration)</td><td className="border border-gray-200 p-3">£60,000+</td><td className="border border-gray-200 p-3">100+ days</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">Note: These are consultant fees only — separate from DMS software licence costs, vendor implementation fees, and internal staff time.</p>

        <h2 className="text-2xl font-bold text-navy">What Drives Cost Up</h2>
        <ul>
          <li><strong>Complex integrations:</strong> Every system the DMS needs to connect to (ERP, CRM, HR) adds discovery, testing, and configuration work.</li>
          <li><strong>Large data migration:</strong> Migrating years of existing documents from file servers or legacy systems is labour-intensive.</li>
          <li><strong>Multiple sites or departments:</strong> Each has its own requirements and change management needs.</li>
          <li><strong>Regulated sector:</strong> Healthcare, legal, financial services add compliance configuration complexity.</li>
          <li><strong>London location:</strong> London-based consultants typically charge 20–30% more than equivalent specialists outside London.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">What Drives Cost Down</h2>
        <ul>
          <li><strong>Defined scope:</strong> A consultant can give a fixed price when they can clearly scope the work. Vague requirements = day rate risk.</li>
          <li><strong>Remote working:</strong> Remote discovery calls and implementation oversight eliminate travel costs and time.</li>
          <li><strong>Pre-packaged methodology:</strong> Some consultants offer packaged selection processes (fixed scope, fixed price) that are faster and cheaper than bespoke engagements.</li>
          <li><strong>Independent vs firm:</strong> An independent consultant without overheads is typically cheaper than a named firm.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Is It Worth Paying?</h2>
        <p>Consider: a DMS implementation that gets the wrong system costs you the software investment plus implementation cost plus the time to rip it out and start again. For a 30-person business, that could easily be £30,000–50,000 in wasted spend plus disruption. Paying £5,000 for independent advice to avoid that outcome is a reasonable insurance premium. The calculation changes for very small, simple projects where the risk is lower.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Get matched with a DMS consultant</h2>
        <p className="text-gray-300 mb-6">Independent specialists for requirements, selection, and implementation projects.</p>
        <Link href="/consultants" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Find a Consultant →</Link>
        <Link href="/guides/find-hire-dms-consultant-uk" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Full Hiring Guide →</Link>
      </div>
    </main>
  );
}
