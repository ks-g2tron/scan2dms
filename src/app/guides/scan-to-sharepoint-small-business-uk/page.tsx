import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scan to SharePoint for Small Business UK — No IT Required | Scan2DMS",
  description:
    "Set up scan-to-SharePoint in your small business without IT support. Step-by-step guide using the Plustek eScan with Microsoft 365 Business Basic, Standard, or Premium.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/scan-to-sharepoint-small-business-uk" },
};

export default function ScanToSharePointSmallBusinessPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">Scan to SharePoint for UK Small Business</h1>
      <Image src="/images/guides/scan-to-sharepoint-small-business-uk/small-business-uk-paper-documents-overwhelmed.jpg" alt="UK small business owner overwhelmed by piles of invoices, receipts and paper documents on office desk" width={1280} height={720} className="rounded-xl shadow-lg w-full h-auto object-cover mb-8" priority />
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>You don&apos;t need an IT department to scan documents into SharePoint. If your business already pays for Microsoft 365, you have SharePoint — and with the right scanner, you can be scanning documents into organised folders within an hour of unboxing. This guide walks through the setup for UK small businesses with no dedicated IT support.</p>

        <h2 className="text-2xl font-bold text-navy">What You Already Have</h2>
        <p>If you&apos;re paying for any of these Microsoft 365 plans, you already have SharePoint Online included:</p>
        <ul>
          <li><strong>Microsoft 365 Business Basic</strong> (from ~£4.60/user/month) — web-only Office apps plus SharePoint, OneDrive, and Teams</li>
          <li><strong>Microsoft 365 Business Standard</strong> (from ~£9.40/user/month) — desktop Office apps plus SharePoint, OneDrive, and Teams</li>
          <li><strong>Microsoft 365 Business Premium</strong> (from ~£17.60/user/month) — everything above plus advanced security</li>
        </ul>
        <p>Most UK small businesses already pay for one of these plans for email and Office apps. SharePoint is included but often unused — it&apos;s free filing cabinet space sitting empty.</p>

        <h2 className="text-2xl font-bold text-navy">Why SharePoint Beats a Shared Drive</h2>
        <p>Many small businesses still scan to a shared network folder or a USB drive. This works until it doesn&apos;t — no version control, no search, no access from outside the office, no automatic backup. SharePoint solves all of these:</p>
        <ul>
          <li><strong>Search:</strong> Find any document by keyword, even inside scanned PDFs (with OCR)</li>
          <li><strong>Access anywhere:</strong> Open documents from home, a client site, or your phone</li>
          <li><strong>Version history:</strong> See previous versions and who changed what</li>
          <li><strong>Permissions:</strong> Control who sees what — accounts staff don&apos;t need to see HR files</li>
          <li><strong>Automatic backup:</strong> Microsoft handles backups, redundancy, and disaster recovery</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">The Plug-and-Play Approach: Plustek eScan</h2>
        <p>Traditional scanners need a PC with drivers and scanning software installed. When the PC updates, the scanner often breaks. When staff change, someone needs to reconfigure the software. For a small business without IT support, this creates ongoing friction.</p>
        <p>The <Link href="/products/escan-a450-pro" className="text-blue-600 hover:underline">Plustek eScan A450 Pro</Link> is a standalone network scanner with a 7-inch touchscreen. It connects directly to your SharePoint Online — no PC in the middle. Staff walk up, select the destination folder on the touchscreen, feed the paper, and press scan. The document appears in SharePoint within seconds.</p>

        <Image src="/images/guides/scan-to-sharepoint-small-business-uk/scan-to-sharepoint-small-business-plustek-scanner.jpg" alt="Small business owner using Plustek network scanner to scan documents directly to Microsoft SharePoint" width={900} height={600} className="rounded-xl shadow-lg w-full h-auto object-cover" />

        <h2 className="text-2xl font-bold text-navy">Step-by-Step Setup</h2>
        <ol>
          <li><strong>Create your SharePoint site:</strong> In your Microsoft 365 admin centre, create a team site (e.g. &quot;Company Documents&quot;). Create document libraries for each category: Invoices, Contracts, Client Files, HR, Policies.</li>
          <li><strong>Connect the scanner to your network:</strong> Plug the eScan into your office router via Ethernet cable, or connect to WiFi through the touchscreen setup wizard.</li>
          <li><strong>Add your Microsoft 365 account:</strong> On the scanner&apos;s touchscreen, go to Settings → Cloud Destinations → SharePoint Online. Sign in with your Microsoft 365 admin account. The scanner authenticates using modern authentication (OAuth 2.0) — no app passwords or legacy authentication needed.</li>
          <li><strong>Create scan profiles:</strong> Set up one-touch scan buttons for each document type. For example: &quot;Scan Invoice&quot; sends to the Invoices library as a searchable PDF; &quot;Scan Contract&quot; sends to Contracts. Each profile pre-sets the destination, file format, colour mode, and resolution.</li>
          <li><strong>Test and train:</strong> Scan a few test documents, verify they appear in the correct SharePoint libraries, then show your team. The touchscreen interface needs minimal training — most staff are comfortable within 5 minutes.</li>
        </ol>

        <h2 className="text-2xl font-bold text-navy">Folder Structure for Small Businesses</h2>
        <p>Keep it simple. A folder structure that&apos;s too deep or too complex won&apos;t be used consistently. For most small businesses, this works well:</p>
        <ul>
          <li><strong>Invoices</strong> — incoming supplier invoices and outgoing sales invoices</li>
          <li><strong>Contracts</strong> — client contracts, supplier agreements, leases</li>
          <li><strong>Client Files</strong> — one sub-folder per client, containing all correspondence and project documents</li>
          <li><strong>HR</strong> — employee contracts, right-to-work documents, appraisals (restricted access)</li>
          <li><strong>Policies &amp; Compliance</strong> — health and safety, GDPR policies, insurance certificates</li>
          <li><strong>Accounts</strong> — bank statements, receipts, VAT returns (restricted access)</li>
        </ul>

        <Image src="/images/guides/scan-to-sharepoint-small-business-uk/paperless-small-business-office-sharepoint-uk.jpg" alt="Paperless small business office with documents organised in SharePoint on screen, scanner in background" width={900} height={600} className="rounded-xl shadow-lg w-full h-auto object-cover" />

        <h2 className="text-2xl font-bold text-navy">Common Questions from Small Business Owners</h2>

        <h3 className="text-xl font-bold text-navy">Do I need to buy extra Microsoft licences?</h3>
        <p>No. SharePoint Online is included in every Microsoft 365 business plan. If you already have Microsoft 365 for email, you already have SharePoint.</p>

        <h3 className="text-xl font-bold text-navy">How much storage do I get?</h3>
        <p>Microsoft 365 business plans include 1 TB of SharePoint storage plus 10 GB per licence purchased. For most small businesses, this is more than enough — a year of scanned documents at 100 pages per day is approximately 15 GB.</p>

        <h3 className="text-xl font-bold text-navy">Can I access scanned documents on my phone?</h3>
        <p>Yes. The SharePoint mobile app (iOS and Android) gives full access to your document libraries. You can also access them through the OneDrive app or the Teams mobile app.</p>

        <h3 className="text-xl font-bold text-navy">What if my internet goes down?</h3>
        <p>The eScan stores scanned documents locally and uploads them when the connection is restored. You won&apos;t lose any scans.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Start scanning to SharePoint today</h2>
        <p className="text-gray-300 mb-6">No IT department needed. Plug in, connect, and scan.</p>
        <Link href="/solutions/scan-to-sharepoint" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Scan to SharePoint</Link>
        <Link href="/products/escan-a450-pro" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">View the eScan A450 Pro</Link>
      </div>
    </main>
  );
}
