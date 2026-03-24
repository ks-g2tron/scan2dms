import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Train Your Team to Go Paperless (And Keep It That Way)",
  description: "The technology is the easy part. Getting staff to actually change their habits is the hard part. Here's how to make it stick.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/train-team-go-paperless" },
};

export default function TrainTeamPaperlessPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">How to Train Your Team to Go Paperless (And Keep It That Way)</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>The technology works. The process makes sense. And yet paperless initiatives fail all the time — because of people, not systems. Our <Link href="/guides/going-paperless-uk-businesses" className="text-blue-600 hover:underline">how to go paperless</Link> guide covers the full process. This article focuses on the human side: how to get your team to actually change their habits.</p>

        <h2 className="text-2xl font-bold text-navy">Why Paperless Projects Fail</h2>
        <p>Most paperless implementations that fail do so for the same reasons:</p>
        <ul>
          <li>Staff weren&apos;t consulted and don&apos;t understand why the change is happening</li>
          <li>Training was a one-off session that nobody remembered two weeks later</li>
          <li>The old system (shared drive, email, filing cabinet) stayed available &quot;just in case&quot;</li>
          <li>No one is accountable for adoption — it&apos;s everyone&apos;s responsibility and therefore no one&apos;s</li>
          <li>Early problems weren&apos;t addressed quickly, reinforcing the view that &quot;the new system doesn&apos;t work&quot;</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Start with Why — Before Any Technology</h2>
        <p>Before you show anyone a scanner or a SharePoint library, explain why you&apos;re doing this. Not in technical terms — in terms that matter to the people in the room.</p>
        <p>For most staff, the compelling reasons are: &quot;you&apos;ll be able to find documents instantly instead of spending 20 minutes looking&quot;, &quot;you can access everything from home or on your phone&quot;, and &quot;no more losing things.&quot; These land. &quot;We need to achieve ISO 9001 document control compliance&quot; does not.</p>
        <p>Acknowledge that change is uncomfortable and there will be a learning curve. Don&apos;t oversell instant perfection. People who are told it will be easy and then find it difficult become more resistant than people who were told &quot;it&apos;ll take a few weeks to get used to, but it&apos;s worth it.&quot;</p>

        <h2 className="text-2xl font-bold text-navy">Appoint a Champion in Each Team</h2>
        <p>Top-down mandates work for compliance; they don&apos;t work for behaviour change. What works is a peer champion in each team — someone who uses the new system publicly, helps colleagues when they&apos;re stuck, and advocates for it informally. This is more influential than any amount of management communication.</p>
        <p>Champions should be involved in the system design before go-live — they understand how their team works and will catch issues in the setup that a top-down implementation would miss.</p>

        <h2 className="text-2xl font-bold text-navy">Role-Based Training, Not One-Size-Fits-All</h2>
        <p>Different staff need different training. A 2-hour all-hands session covering everything leaves nobody knowing anything specific well enough to use it confidently.</p>
        <ul>
          <li><strong>Scanners (reception, post room, shopfloor):</strong> 30 minutes. Covers: how to use the scanner, job buttons, what to do if a scan fails. That&apos;s it.</li>
          <li><strong>Regular users:</strong> 45 minutes. Covers: how to find a document, how to upload a document, how to share a document. Practical exercises with real documents.</li>
          <li><strong>Power users / department heads:</strong> 90 minutes. Covers: metadata fields, organising documents, managing permissions, creating shortcuts.</li>
          <li><strong>Administrators:</strong> Half-day. Covers: system configuration, adding users, troubleshooting, retention policies.</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">The First Two Weeks Are Critical</h2>
        <p>More paperless projects fail in the first two weeks than at any other point. Problems that aren&apos;t fixed immediately become permanent objections — &quot;remember when that didn&apos;t work? The system is unreliable.&quot;</p>
        <p>In the first two weeks: have a designated support contact available for questions (phone/Teams message, not a ticket system). Fix reported problems same day. Run brief 10-minute check-ins with each team to catch issues early. Visibly celebrate the first time something works well — &quot;Sarah found that contract in 10 seconds that used to take 20 minutes to dig out.&quot;</p>

        <h2 className="text-2xl font-bold text-navy">Remove the Escape Routes</h2>
        <p>The single most effective action for ensuring adoption: remove the old system. Not immediately — give a defined transition period. But on the cutover date, make the old shared drive read-only and announce a date 30 days later when it will be archived.</p>
        <p>When the old system is still available, people use it when the new one is confusing. When it&apos;s not available, they figure out the new one. This sounds harsh, but it&apos;s kindness — extended transition periods drag out the uncertainty and resistance rather than resolving it.</p>

        <h2 className="text-2xl font-bold text-navy">Measuring Adoption</h2>
        <p>Track: number of documents scanned per week, search queries in SharePoint, documents uploaded via the new workflow vs via email. SharePoint&apos;s usage analytics show which libraries are being used and by whom. If adoption is low in a specific team, investigate rather than assuming they&apos;ll come around.</p>
        <p>Six-week review: sit down with each team, ask what&apos;s working and what isn&apos;t. Adjust. The system should adapt to how the team works — within reason — not the other way around.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Need help with the change management side?</h2>
        <p className="text-gray-300 mb-6">Good DMS consultants handle implementation AND change management.</p>
        <Link href="/consultants" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Find a Consultant →</Link>
        <Link href="/guides/going-paperless-uk-businesses" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Going Paperless Guide →</Link>
      </div>
    </main>
  );
}
