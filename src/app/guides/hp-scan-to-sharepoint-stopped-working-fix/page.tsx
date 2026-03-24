import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HP Scan to SharePoint Stopped Working? Here's What to Do (2025 Fix)",
  description: "HP scan to SharePoint broke in 2025? Here's why it happened, what your options are, and the permanent fix that won't break again.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/hp-scan-to-sharepoint-stopped-working-fix" },
};

export default function HpScanSharePointFixPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">HP Scan to SharePoint Stopped Working? Here&apos;s What to Do (2025 Fix)</h1>
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-5 mb-8">
        <p className="font-semibold text-amber-900 mb-1">If your HP scanner stopped sending to SharePoint in 2025</p>
        <p className="text-amber-800 text-sm">You&apos;re not alone — Microsoft deprecated basic authentication across Microsoft 365 in August 2025. Thousands of HP scanners lost SharePoint connectivity overnight. This guide explains your options.</p>
      </div>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>For a full guide to scan-to-DMS workflows that won&apos;t break, read our <Link href="/guides/scan-to-dms-document-scanning-workflows" className="text-blue-600 hover:underline">scan documents to SharePoint</Link> guide. This article focuses specifically on the HP authentication issue and what to do about it.</p>

        <h2 className="text-2xl font-bold text-navy">What Happened — Microsoft Killed Basic Authentication</h2>
        <p>In August 2025, Microsoft completed the deprecation of legacy/basic authentication across all Microsoft 365 services, including SharePoint Online. Basic authentication works by storing a username and password on the device and sending it with every request. It&apos;s a decades-old approach that Microsoft (and the wider industry) has been moving away from for years due to its vulnerability to credential theft.</p>
        <p>The problem: a large number of HP multifunction printers and scanners — including popular LaserJet Pro, OfficeJet Pro, and Color LaserJet models — used basic authentication to connect to SharePoint. When Microsoft turned off basic auth, these devices lost their SharePoint connection immediately, with no warning to end users.</p>
        <p>The result: thousands of businesses across the UK and globally arrived at work in late 2025 to find their scan-to-SharePoint function silently broken. Community threads on Spiceworks and Reddit filled with identical reports within days.</p>

        <h2 className="text-2xl font-bold text-navy">Is Your HP Model Affected?</h2>
        <p>The easiest test: try to scan to SharePoint. If it was working before August 2025 and stopped, it&apos;s almost certainly the basic auth issue.</p>
        <p>To confirm: access your printer&apos;s embedded web server (type the printer&apos;s IP address in a browser). Navigate to the scan-to-network or scan-to-SharePoint settings. If the SharePoint connection requires you to enter a username and password stored on the device — that&apos;s basic auth, and it&apos;s broken.</p>
        <p>Most commonly affected models: HP LaserJet Pro MFP M428, M329, M479 series; HP OfficeJet Pro 9010, 9020 series; older HP Color LaserJet MFP models (pre-2022). Newer HP models released after 2023 generally include modern auth support.</p>

        <h2 className="text-2xl font-bold text-navy">Option 1 — Firmware Update (If Available)</h2>
        <p>HP has released firmware updates adding OAuth 2.0 support for some newer models. This is the best outcome if available for your device.</p>
        <p>How to check: go to <strong>support.hp.com</strong>, enter your exact model number, and look for firmware updates released after September 2025. If an update is available, install it via the printer&apos;s web interface or HP Smart app and reconfigure the SharePoint destination using the new modern authentication flow.</p>
        <p><strong>Reality check:</strong> Most affected models will not receive a firmware fix. HP has been explicit that older hardware lacks the compute resources to support OAuth 2.0 natively. If your model is more than 3–4 years old, the firmware fix probably isn&apos;t coming.</p>

        <h2 className="text-2xl font-bold text-navy">Option 2 — The Power Automate Workaround</h2>
        <p>The most commonly suggested workaround: configure your HP printer to scan to email or to a network folder instead of directly to SharePoint. Then create a Microsoft Power Automate flow that monitors that email inbox or folder and moves incoming files to the correct SharePoint library.</p>
        <p>This works — technically. The downsides:</p>
        <ul>
          <li>Adds latency: document takes 30–120 seconds to appear in SharePoint instead of instantly</li>
          <li>Requires Power Automate licence (included in most Microsoft 365 business plans, but worth confirming)</li>
          <li>Requires ongoing maintenance: flows break when SharePoint site structures change</li>
          <li>Email-based routing is a security concern (scan-to-email shares the vulnerabilities of email generally)</li>
          <li>Loses metadata: documents arriving via email or folder don&apos;t carry metadata fields — they land as unnamed files that someone has to manually rename and tag</li>
          <li>Vulnerable to the next auth change: if Microsoft tightens email authentication further, this workaround breaks too</li>
        </ul>
        <p>For a small volume of occasional scans, the Power Automate workaround is acceptable as a short-term fix. For a business that scans daily, it&apos;s a maintenance burden that solves the symptom without fixing the underlying problem.</p>

        <h2 className="text-2xl font-bold text-navy">Option 3 — Replace with a PC-Free Network Scanner (Permanent Fix)</h2>
        <p>The only solution that fully resolves the problem and won&apos;t be affected by future Microsoft authentication changes: replace the HP with a standalone network scanner that was built for cloud-first authentication from the ground up.</p>
        <p>The Plustek eScan range authenticates via OAuth 2.0 natively — the same method your browser uses when you log into Microsoft 365. There is no basic auth dependency, no firmware workaround, and no vulnerability to future Microsoft policy changes. The device obtains an OAuth token when first set up and refreshes it automatically.</p>
        <p>Beyond the authentication fix, you get a purpose-built document scanner rather than a printer&apos;s scanning module: faster speeds (35–60ppm vs 15–25ppm on most HP MFPs), larger ADF capacity, barcode recognition for automatic document splitting and metadata, and a 7&quot; touchscreen with one-touch job buttons.</p>

        <h2 className="text-2xl font-bold text-navy">The Real Cost Comparison</h2>
        <p>The Power Automate workaround feels free. But consider:</p>
        <ul>
          <li>IT staff time to build and maintain the flow: 4–8 hours initially, 1–2 hours per month ongoing</li>
          <li>Staff time lost to slower scanning and manual file naming: 15–30 minutes/day in many offices</li>
          <li>Risk of the workaround breaking again and causing another disruption</li>
          <li>Loss of metadata capability compared to a properly configured scan destination</li>
        </ul>
        <p>A Plustek eScan A350 costs approximately £450–550. At £20/hour for IT staff time, the Power Automate workaround costs the same in maintenance within 6–12 months — without the reliability of a permanent fix.</p>

        <h2 className="text-2xl font-bold text-navy">What to Do Right Now</h2>
        <ol>
          <li>Check if a firmware update is available for your model (HP support site)</li>
          <li>If yes: install and reconfigure with modern auth</li>
          <li>If no: implement the Power Automate workaround as a temporary measure</li>
          <li>Start evaluating a replacement PC-free scanner for a permanent solution</li>
        </ol>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Permanent fix — the Plustek eScan</h2>
        <p className="text-gray-300 mb-6">OAuth 2.0 native authentication. Scans directly to SharePoint. Won&apos;t break on the next Microsoft auth change.</p>
        <Link href="/products/escan-a450-pro" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">View the eScan A450 Pro →</Link>
      </div>
    </main>
  );
}
