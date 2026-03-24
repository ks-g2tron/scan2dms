import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scan to DMS: The Complete Guide to Document Scanning Workflows (2025)",
  description:
    "How to scan documents directly to SharePoint, OneDrive, or a DMS — without a PC. Covers scanners, workflows, barcode splitting, and the 2025 HP authentication issue.",
  alternates: {
    canonical: "https://scan2dms.co.uk/guides/scan-to-dms-document-scanning-workflows",
  },
};

export default function ScanToDmsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Scan to DMS: The Complete Guide to Document Scanning Workflows",
    description: metadata.description,
    author: { "@type": "Organization", name: "scan2dms.co.uk" },
    publisher: { "@type": "Organization", name: "scan2dms.co.uk" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
        <h1 className="text-4xl font-extrabold text-navy mb-6">
          Scan to DMS: The Complete Guide to Document Scanning Workflows
        </h1>

        {/* Featured snippet */}
        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-10">
          <p className="font-semibold text-navy mb-2">Quick answer</p>
          <p className="text-gray-700">
            To scan documents directly to SharePoint without a PC, you need a standalone
            network scanner — a device that connects to your WiFi or Ethernet and
            authenticates with SharePoint independently. The Plustek eScan range does exactly
            this: connect to the network, sign in with your Microsoft 365 credentials on the
            7&quot; touchscreen, and scan directly to any SharePoint document library. No PC, no
            server, no IT ticket.
          </p>
        </div>

        <div className="prose prose-lg text-gray-700 space-y-6">

          <p>
            Most businesses scan to email or scan to a shared folder — and then spend time
            manually sorting. That creates digital chaos and security risks. A proper
            scan-to-DMS workflow means documents go directly from the scanner into the right
            place, tagged correctly, ready to find immediately. This guide covers everything
            you need to set one up.
          </p>

          <h2 className="text-2xl font-bold text-navy">
            Why Scan-to-DMS Matters — and Why Most Businesses Get It Wrong
          </h2>

          <h3 className="text-xl font-bold text-navy">The problem with scan-to-email</h3>
          <p>
            Scan-to-email is how most offices start. It&apos;s on every printer, it requires no
            setup, and it works. The problem is that email attachments are one of the primary
            routes for business data breaches, there&apos;s no audit trail of who received what,
            and the filing burden falls entirely on whoever gets the email. Documents end up
            scattered across inboxes — unsearchable, uncontrolled, ungoverned.
          </p>

          <h3 className="text-xl font-bold text-navy">The problem with scan-to-folder</h3>
          <p>
            Better than email — documents land somewhere central — but shared folders have
            no metadata, no version control, no access controls beyond basic Windows
            permissions. Without strict discipline, they become unnavigable within months.
            There&apos;s no way to search by client name or document type; you rely entirely on
            whoever named and placed the file.
          </p>

          <h3 className="text-xl font-bold text-navy">What a proper scan-to-DMS workflow looks like</h3>
          <p>
            Document scanned → metadata entered at point of scan (or read from a barcode
            automatically) → file lands in the correct library tagged and searchable → zero
            manual sorting. The person scanning spends 5 seconds, not 5 minutes.
          </p>

          <h2 className="text-2xl font-bold text-navy">
            The 2025 Wake-Up Call: Why HP Scan-to-SharePoint Broke
          </h2>
          <p>
            If your HP scanner stopped sending to SharePoint in late 2025, you&apos;re not alone —
            and the cause isn&apos;t your scanner settings.
          </p>

          <h3 className="text-xl font-bold text-navy">What happened</h3>
          <p>
            Microsoft deprecated basic authentication across Microsoft 365 in August 2025.
            Devices that used legacy authentication to connect to SharePoint — including a
            large number of HP LaserJet and OfficeJet models — lost their scan-to-SharePoint
            functionality immediately. Thousands of UK businesses were affected, many without
            warning. Community threads on Spiceworks and Reddit filled up with reports of the
            same issue within days.
          </p>
          <p>
            For some HP models, a firmware update restored functionality. For many others,
            no fix was available — the hardware simply didn&apos;t support modern authentication
            and never would. The workaround (routing scans via Power Automate) works but adds
            complexity and ongoing maintenance overhead.
          </p>

          <h3 className="text-xl font-bold text-navy">Why dedicated network scanners aren&apos;t affected</h3>
          <p>
            Standalone network scanners like the Plustek eScan authenticate via OAuth 2.0 —
            the same standard your web browser uses to sign into Microsoft 365. They were
            built for cloud-first environments from the ground up, not retrofitted. There is
            no dependency on basic authentication, and no risk of breaking when Microsoft
            makes further authentication changes.
          </p>
          <p>
            If your HP scanner broke in 2025, a PC-free dedicated scanner isn&apos;t just a
            replacement — it&apos;s an upgrade that won&apos;t put you in the same position again.
          </p>

          <h2 className="text-2xl font-bold text-navy">Types of Document Scanners</h2>

          <h3 className="text-xl font-bold text-navy">Desktop scanners (PC-dependent)</h3>
          <p>
            Connect via USB to a PC. Low upfront cost (£100–300). Adequate for low-volume
            scanning at a desk. The limitations: the PC must be on and logged in, drivers
            need maintenance, and the scanner can&apos;t be shared across a team without a shared
            PC. Not suitable for shopfloor or reception environments where PCs aren&apos;t present.
          </p>

          <h3 className="text-xl font-bold text-navy">Multifunction printers with scan capability</h3>
          <p>
            Most offices have one. MFP scanning works but comes with trade-offs: lower scan
            speeds, limited file naming options, clunky interfaces, and — as of 2025 — basic
            authentication dependency for cloud integration on many models. MFPs are optimised
            for printing, not document capture.
          </p>

          <h3 className="text-xl font-bold text-navy">Standalone PC-free network scanners</h3>
          <p>
            The right choice for any business that scans more than a handful of documents per
            day. Connect via WiFi or Ethernet, authenticate directly with SharePoint or a DMS,
            no PC required. Multiple users can walk up and use the device without logging into
            anything separately. Purpose-built for document capture at volume.
          </p>

          <h2 className="text-2xl font-bold text-navy">
            PC-Free Scanning with the Plustek eScan
          </h2>

          <h3 className="text-xl font-bold text-navy">What it does</h3>
          <p>
            The Plustek eScan is a standalone network scanner with a 7&quot; colour touchscreen.
            It connects to WiFi or Ethernet, authenticates with Microsoft 365 via OAuth 2.0,
            and scans directly to SharePoint Online, SharePoint On-Premises, OneDrive for
            Business, network folders, and email — without any PC or server software between
            the device and the destination.
          </p>

          <h3 className="text-xl font-bold text-navy">Models at a glance</h3>
          <ul>
            <li><strong>eScan A350 SharePoint:</strong> Dedicated SharePoint model, 35ppm, 50-sheet ADF</li>
            <li><strong>eScan A350 Essential:</strong> Broader cloud destinations, 35ppm</li>
            <li><strong>eScan A450 Pro:</strong> 60ppm, 100-sheet ADF, WiFi + Ethernet, advanced features including barcode recognition</li>
          </ul>

          <h3 className="text-xl font-bold text-navy">Key features in practice</h3>
          <p>
            Barcode recognition (12 types including QR, Code128, Code39) reads document
            identifiers and uses them to auto-populate metadata fields — no typing needed
            at the scanner. One-touch job buttons let you pre-configure destinations so
            users press one button and walk away. Individual user logins provide audit trail
            per scan. Batch splitting automatically separates a stack of barcoded documents
            into individual named files.
          </p>

          <h2 className="text-2xl font-bold text-navy">Document Scanning Workflows</h2>

          <h3 className="text-xl font-bold text-navy">Scan to SharePoint</h3>
          <p>
            Set up a SharePoint document library with the metadata columns you need (supplier
            name, document type, date, reference number). On the eScan, authenticate with your
            Microsoft 365 account and point a job button to that library. When a user scans,
            they see a simple metadata form on the touchscreen — fill in two or three fields,
            press scan, done. The document arrives in SharePoint, correctly tagged, immediately
            searchable.
          </p>
          <p>
            For a step-by-step setup walkthrough,{" "}
            <Link href="/guides/sharepoint-scanner-setup" className="text-blue-600 hover:underline">
              see our SharePoint scanner setup guide
            </Link>
            .
          </p>

          <h3 className="text-xl font-bold text-navy">Scan to a dedicated DMS</h3>
          <p>
            Most enterprise DMS platforms offer a scan-in endpoint — a web destination or
            network folder that the DMS monitors and automatically indexes. The eScan connects
            to this endpoint as a network destination. Documents are captured, OCR-processed,
            and indexed automatically. Consult your DMS vendor for their specific integration
            method.
          </p>

          <h3 className="text-xl font-bold text-navy">Scan to network folder</h3>
          <p>
            Still valid for simpler environments. Scan to an SMB network share, with a folder
            structure that provides organisation. Limitation: no metadata beyond the folder
            path, no search by content unless an indexing tool is layered on top.
          </p>

          <h2 className="text-2xl font-bold text-navy">
            Barcode Recognition and Batch Splitting
          </h2>

          <h3 className="text-xl font-bold text-navy">What is barcode document splitting?</h3>
          <p>
            You feed a stack of 30 documents into the scanner. Each document has a barcode on
            the first page — a job number, batch ID, or client reference. The scanner reads each
            barcode, uses it to split the stack into separate PDFs, and names each file with
            the barcode data. 30 documents become 30 individually named, tagged files without
            any manual intervention.
          </p>

          <h3 className="text-xl font-bold text-navy">Where it saves serious time</h3>
          <p>
            Manufacturing quality inspection sheets (one per batch, stacked for end-of-shift
            scanning). Delivery notes from multiple suppliers received in one go. Legal matter
            documents with matter reference barcodes. GP patient intake forms. Any environment
            where documents arrive in batches that need individual filing.
          </p>

          <h2 className="text-2xl font-bold text-navy">Scan-to-DMS for the Manufacturing Shopfloor</h2>
          <p>
            The shopfloor presents a unique challenge: workers aren&apos;t at desks, and asking
            them to walk to an office PC every time a job card or inspection sheet needs filing
            simply doesn&apos;t work. Paper piles up, gets lost, and creates compliance headaches
            at audit time.
          </p>
          <p>
            A standalone eScan positioned on or near the shopfloor changes this. One operator
            presses one button — configured for &quot;Job Cards&quot; or &quot;Inspection Sheets&quot; — and the
            document goes straight to the right SharePoint library. The barcode on the job card
            auto-populates the Job Number field in SharePoint. No typing, no PC, no delay.
          </p>
          <p>
            {/* TODO: link to manufacturing industry page when built */}
            For a detailed look at the manufacturing workflow, see our manufacturing document
            management guide.
          </p>

          <h2 className="text-2xl font-bold text-navy">Frequently Asked Questions</h2>

          <h3 className="text-xl font-bold text-navy">
            Does the Plustek eScan work with SharePoint On-Premises?
          </h3>
          <p>
            Yes. The eScan supports both SharePoint Online (Microsoft 365) and SharePoint
            On-Premises (2016 and 2019). Configuration differs slightly between the two —
            contact your reseller for the specific setup steps for on-premise environments.
          </p>

          <h3 className="text-xl font-bold text-navy">
            Can multiple users share one eScan device?
          </h3>
          <p>
            Yes. The eScan supports individual user login, so each user can authenticate with
            their own Microsoft 365 credentials. Scan activity is logged per user, providing
            a complete audit trail. Multiple users sharing one device is the standard deployment
            model.
          </p>

          <h3 className="text-xl font-bold text-navy">
            My HP scan to SharePoint broke — what are my options?
          </h3>
          <p>
            Check if a firmware update is available for your model (HP&apos;s support site has a
            lookup tool). If not, the workaround via Power Automate adds complexity. For a
            permanent fix, a standalone PC-free scanner like the eScan resolves the
            authentication issue entirely and won&apos;t be affected by future Microsoft auth changes.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">See the eScan in action</h2>
          <p className="text-gray-300 mb-6">
            The Plustek eScan scans directly to SharePoint without a PC — one button,
            no drivers, no IT ticket.
          </p>
          <Link
            href="/products/escan-a450-pro"
            className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4"
          >
            View the eScan A450 Pro →
          </Link>
          <Link
            href="/dms"
            className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors"
          >
            Compare DMS Systems →
          </Link>
        </div>
      </main>
    </>
  );
}
