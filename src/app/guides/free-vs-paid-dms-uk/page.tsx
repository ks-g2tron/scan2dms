import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free vs Paid DMS: Is Open Source Worth It for UK Businesses?",
  description: "Is a free or open source DMS good enough for your UK business? We break down the real costs, risks, and when it makes sense.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/free-vs-paid-dms-uk" },
};

export default function FreeVsPaidDmsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Free vs Paid DMS: Is Open Source Worth It for UK Businesses?</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Before deciding on price point, make sure you know what to look for — our <Link href="/guides/how-to-choose-document-management-system-uk" className="text-blue-600 hover:underline">best document management system UK</Link> guide covers the full feature set. This article addresses the specific question of whether free or open source DMS options are worth considering for UK businesses.</p>

        <h2 className="text-2xl font-bold text-navy">What Free DMS Options Actually Exist</h2>

        <h3 className="text-xl font-bold text-navy">Paperless-NGX</h3>
        <p>The most popular open source document management system right now. Self-hosted, runs on Docker, strong community. Features: OCR, tagging, full-text search, document types, correspondents. Actively maintained. Genuinely good software — but requires a Linux server, Docker knowledge, and ongoing self-management. Popular among technically confident individuals and small businesses.</p>

        <h3 className="text-xl font-bold text-navy">SharePoint (included in Microsoft 365)</h3>
        <p>Not open source, but effectively free if you&apos;re already on Microsoft 365. SharePoint Business Basic starts at £4.50/user/month and includes SharePoint. The software cost is sunk — but configuration time is real.</p>

        <h3 className="text-xl font-bold text-navy">Alfresco Community Edition</h3>
        <p>Enterprise-grade open source ECM platform. Powerful, but complex to install and maintain. The community edition lacks vendor support. Realistic only for organisations with dedicated IT staff.</p>

        <h3 className="text-xl font-bold text-navy">Google Drive</h3>
        <p>Free up to 15GB, very cheap beyond that. Reasonable for very small teams with simple needs. Not a DMS — no metadata, no retention rules, no audit trail beyond basic activity logs.</p>

        <h2 className="text-2xl font-bold text-navy">The Real Cost of &quot;Free&quot; Software</h2>
        <p>Free software isn&apos;t free to run. The costs shift from licence fees to time and risk:</p>
        <ul>
          <li><strong>Hosting:</strong> Paperless-NGX needs a server — a small VPS costs £5–20/month. A Raspberry Pi works for personal use but isn&apos;t suitable for business-critical storage.</li>
          <li><strong>Setup time:</strong> Installing, configuring, and testing a self-hosted DMS typically takes 4–8 hours for someone comfortable with Linux and Docker.</li>
          <li><strong>Ongoing maintenance:</strong> Updates, backups, monitoring, troubleshooting — ongoing overhead that a SaaS platform handles for you.</li>
          <li><strong>No support:</strong> When something breaks, you&apos;re on Stack Overflow and GitHub issues. No SLA, no support ticket, no phone call.</li>
          <li><strong>No compliance guarantee:</strong> Open source software doesn&apos;t come with GDPR compliance certification, ISO 27001 accreditation, or any of the compliance evidence that regulated sectors require.</li>
        </ul>
        <p>A realistic comparison: Paperless-NGX &quot;free&quot; vs a £10/user/month SaaS DMS for a 10-person team. The SaaS costs £100/month. Paperless-NGX costs £10/month in hosting plus 2 hours/month of maintenance at staff time — at £15/hour, that&apos;s £40/month. Plus the 8-hour setup cost. The saving is real but smaller than it looks.</p>

        <h2 className="text-2xl font-bold text-navy">When Free Makes Sense</h2>
        <ul>
          <li>Tech-savvy team comfortable with self-hosting</li>
          <li>No regulatory compliance requirements beyond basic GDPR</li>
          <li>Small scale — under 10 users</li>
          <li>Cost is genuinely a hard constraint (startup with no budget)</li>
          <li>Primarily storing digital documents, not scanning paper</li>
          <li>Personal use or single-person business</li>
        </ul>
        <p>Paperless-NGX is genuinely excellent for a one or two-person business with the technical confidence to run it. For that use case, it beats many paid options.</p>

        <h2 className="text-2xl font-bold text-navy">When You Should Pay</h2>
        <ul>
          <li>Regulated sector (legal, financial, healthcare) — compliance evidence required</li>
          <li>More than 15 users — maintenance overhead scales with users</li>
          <li>No internal IT resource to maintain a self-hosted system</li>
          <li>You need vendor support and an SLA</li>
          <li>Audit trail quality matters — open source logging is variable</li>
          <li>You scan paper and need direct scan-to-DMS integration</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">The Middle Ground — Low-Cost Paid DMS</h2>
        <p>Between free and enterprise there&apos;s a useful middle tier at £5–20/user/month that gives you the reliability of SaaS without the enterprise price tag. At this price point you get vendor-managed hosting, automatic updates, basic support, and a compliance-ready audit trail.</p>
        <p>For most small businesses, this middle tier is the right answer: too complex for free software to handle reliably, too small for enterprise pricing to make sense.</p>

        <h2 className="text-2xl font-bold text-navy">5-Year Total Cost of Ownership</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Option</th>
                <th className="border border-gray-200 p-3 text-left">Year 1</th>
                <th className="border border-gray-200 p-3 text-left">Year 2–5 /yr</th>
                <th className="border border-gray-200 p-3 text-left">5yr Total</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Paperless-NGX (10 users)</td><td className="border border-gray-200 p-3">£600 (setup+hosting)</td><td className="border border-gray-200 p-3">£360</td><td className="border border-gray-200 p-3">~£2,040</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Low-cost SaaS £10/u/mo</td><td className="border border-gray-200 p-3">£1,200</td><td className="border border-gray-200 p-3">£1,200</td><td className="border border-gray-200 p-3">~£4,800</td></tr>
              <tr><td className="border border-gray-200 p-3">Mid-market SaaS £25/u/mo</td><td className="border border-gray-200 p-3">£3,000</td><td className="border border-gray-200 p-3">£3,000</td><td className="border border-gray-200 p-3">~£12,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">10 users. Paperless-NGX estimate includes 8hr setup + 2hr/month maintenance at £15/hr + £10/month hosting.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Compare DMS pricing across 20+ platforms</h2>
        <p className="text-gray-300 mb-6">Filter by price, deployment type, and sector to find the right fit.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Browse the DMS Directory →</Link>
      </div>
    </main>
  );
}
