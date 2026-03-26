import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scan Documents Directly to SharePoint — Without a PC",
  description:
    "Learn how to scan documents directly to SharePoint without a PC using the Plustek eScan. No drivers, no desktop software — just place, tap, and scan to your SharePoint library.",
  alternates: { canonical: "https://scan2dms.co.uk/solutions/scan-to-sharepoint" },
  openGraph: {
    title: "Scan Documents Directly to SharePoint — Without a PC",
    description: "The complete guide to PC-free SharePoint scanning with the Plustek eScan A450 Pro.",
    url: "https://scan2dms.co.uk/solutions/scan-to-sharepoint",
  },
};

const faqs = [
  {
    q: "Can I scan to SharePoint without a computer?",
    a: "Yes. The Plustek eScan A450 Pro is a standalone network scanner with a built-in 7-inch touchscreen. It connects directly to SharePoint Online over your network — no PC, no laptop, and no desktop software required. You simply place your document, select your SharePoint destination on the touchscreen, and press scan.",
  },
  {
    q: "What is the best PC-free SharePoint scanner?",
    a: "The Plustek eScan A450 Pro is widely regarded as the most capable PC-free scanner for SharePoint environments. It offers native Microsoft 365 integration, a 100-sheet automatic document feeder, 60 pages per minute scanning, and a 7-inch touchscreen — all without requiring any PC or driver installation.",
  },
  {
    q: "Does Plustek eScan work with SharePoint Online?",
    a: "Yes. The eScan A450 Pro connects natively to SharePoint Online as part of Microsoft 365. It authenticates using your Microsoft 365 credentials and can scan directly to any SharePoint document library your account has access to. It also supports SharePoint on-premises with appropriate network configuration.",
  },
  {
    q: "How do I connect a scanner to SharePoint?",
    a: "With the Plustek eScan, you configure SharePoint as a scan destination through the device's touchscreen interface. You enter your Microsoft 365 credentials, select the SharePoint site and document library, and optionally configure subfolder paths and file naming conventions. The entire setup takes around 10 minutes.",
  },
  {
    q: "Is there a scanner that scans directly to Microsoft 365?",
    a: "Yes. The Plustek eScan series scans directly to Microsoft 365 services including SharePoint, OneDrive, and Teams. It is a standalone network device that requires no PC — it connects to Microsoft 365 over your office network and delivers scanned documents directly to your chosen cloud destination.",
  },
  {
    q: "What is a network scanner?",
    a: "A network scanner is a document scanner that connects to your office network via WiFi or Ethernet, rather than being plugged into a single PC via USB. This means it can be shared by multiple users and, in the case of the Plustek eScan, can send scanned documents directly to cloud destinations like SharePoint without needing a computer as an intermediary.",
  },
  {
    q: "Do I need IT support to set up scan-to-SharePoint?",
    a: "In most cases, no. The Plustek eScan's touchscreen interface guides you through configuration step by step. You will need your Microsoft 365 login credentials and network access details, but the setup itself is straightforward. Most users complete it in under 15 minutes without IT assistance.",
  },
  {
    q: "How fast is the Plustek eScan A450 Pro?",
    a: "The eScan A450 Pro scans at 60 pages per minute (120 images per minute in duplex mode) in both colour and monochrome. Combined with its 100-sheet automatic document feeder, it can process large batches of documents quickly — making it suitable for busy office environments.",
  },
  {
    q: "Can the eScan scan to OneDrive as well as SharePoint?",
    a: "Yes. The eScan supports scanning to both SharePoint and OneDrive as part of its native Microsoft 365 integration. You can configure multiple scan destinations and switch between them on the touchscreen. It also supports Teams channels, network folders, email, USB drives, and FTP.",
  },
  {
    q: "What document formats does the eScan A450 Pro support?",
    a: "The eScan A450 Pro can output scanned documents in PDF, PDF/A (for archiving), TIFF, JPEG, BMP, and PNG formats. It also supports searchable PDF with built-in OCR (optical character recognition), which means your scanned documents are text-searchable in SharePoint immediately after scanning.",
  },
  {
    q: "Is the Plustek eScan compatible with SharePoint Online?",
    a: "Yes, fully compatible. The eScan A450 Pro integrates natively with SharePoint Online through Microsoft 365 authentication. It works with all standard SharePoint Online plans including Business Basic, Business Standard, E3, and E5. No third-party connectors or middleware are required.",
  },
  {
    q: "Can multiple users share one eScan scanner?",
    a: "Yes. The eScan is a network device designed to be shared across a team or department. Each user can have their own profile on the touchscreen with their preferred scan destinations and settings. The scanner supports multiple concurrent user profiles, so everyone in the office can use it without reconfiguring settings each time.",
  },
  {
    q: "Does the eScan A450 Pro support duplex scanning?",
    a: "Yes. The eScan A450 Pro features single-pass duplex scanning, meaning it scans both sides of a page in one pass through the automatic document feeder. This doubles throughput when processing double-sided documents and avoids the need to manually flip and re-feed pages.",
  },
  {
    q: "What is the difference between scan-to-email and scan-to-SharePoint?",
    a: "Scan-to-email sends a scanned document as an email attachment, which is useful for one-off sharing but creates filing and version control challenges. Scan-to-SharePoint delivers the document directly to a structured SharePoint library where it is filed, searchable, and accessible to authorised colleagues — making it far better for document management and compliance.",
  },
  {
    q: "How do I get support for a Plustek eScan scanner in the UK?",
    a: "scan2dms.com provides specialist UK-based support for the Plustek eScan series. We offer guidance on setup, configuration, troubleshooting, and ongoing use. Contact us through the enquiry form on this site, by email at ks@scan2dms.com, or via WhatsApp for a prompt response.",
  },
];

export default function ScanToSharePointPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Scan Documents Directly to SharePoint — Without a PC
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            The complete guide to eliminating the PC from your document scanning workflow.
            Learn how the Plustek eScan sends scanned documents straight to SharePoint Online —
            no drivers, no desktop software, no IT tickets.
          </p>
          <Link
            href="/contact"
            className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
          >
            Talk to a Specialist
          </Link>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* What is Scan to SharePoint */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">What Is Scan-to-SharePoint?</h2>
          <p className="text-gray-700 mb-4">
            Scan-to-SharePoint is the ability to send a scanned document directly from a physical scanner into a SharePoint document library — without the document ever touching a PC desktop, a local folder, or a USB drive. The scanned file goes straight from the scanner to SharePoint over your office network.
          </p>
          <p className="text-gray-700 mb-4">
            For organisations using Microsoft 365, SharePoint is typically the central hub for document storage, collaboration, and compliance. Getting paper documents into SharePoint quickly and reliably is essential — but the traditional scanning process makes this surprisingly difficult.
          </p>
          <p className="text-gray-700">
            True scan-to-SharePoint means the scanner itself handles the connection to Microsoft 365. The user places a document, selects a SharePoint destination on the scanner&apos;s screen, and presses scan. The document appears in SharePoint within seconds, filed in the correct library, in the correct format, with no manual upload step.
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">The Problem with Traditional Scanners</h2>
          <p className="text-gray-700 mb-4">
            Most document scanners on the market today — even expensive departmental models — still rely on a PC to function. The typical workflow looks like this:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4 ml-4">
            <li>Place the document in the scanner</li>
            <li>Open the scanning software on a connected PC</li>
            <li>Scan the document to a local folder on the PC</li>
            <li>Open SharePoint in a web browser</li>
            <li>Navigate to the correct document library</li>
            <li>Upload the scanned file manually</li>
            <li>Delete the local copy (or forget to, creating duplicates)</li>
          </ol>
          <p className="text-gray-700 mb-4">
            This seven-step process is slow, error-prone, and creates multiple points of failure. The scanner requires a specific driver installed on a specific PC. If that PC is in use, offline, or has a driver issue, scanning stops entirely. Users frequently save scans to the wrong folder, forget to upload them, or create filing inconsistencies.
          </p>
          <p className="text-gray-700 mb-4">
            The IT burden is significant too. Scanning drivers are notoriously unreliable across Windows updates. Each PC-scanner pairing needs individual setup and maintenance. When a driver breaks — and they do break — users raise IT tickets and scanning grinds to a halt.
          </p>
          <p className="text-gray-700">
            For businesses that have invested in Microsoft 365 and SharePoint as their document management platform, this clunky scanning workflow is a bottleneck. It undermines the efficiency gains that SharePoint is supposed to deliver.
          </p>
        </section>

        {/* How eScan Solves It */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">How the Plustek eScan Solves It</h2>
          <p className="text-gray-700 mb-4">
            The Plustek eScan A450 Pro takes a fundamentally different approach. It is a standalone network device with its own operating system, touchscreen interface, and direct cloud connectivity. There is no PC in the loop at any stage.
          </p>
          <p className="text-gray-700 mb-4">
            The eScan connects to your office network via WiFi or Gigabit Ethernet. It authenticates directly with Microsoft 365 using your organisation&apos;s credentials. When a user wants to scan a document to SharePoint, they simply:
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4 ml-4">
            <li>Place the document in the 100-sheet automatic document feeder</li>
            <li>Select their SharePoint destination on the 7-inch touchscreen</li>
            <li>Press scan</li>
          </ol>
          <p className="text-gray-700 mb-4">
            That&apos;s it. Three steps. The document is delivered to SharePoint Online in seconds, in the format of your choice (PDF, searchable PDF, TIFF, JPEG, and more). No driver, no desktop software, no manual upload.
          </p>
          <p className="text-gray-700 mb-4">
            The eScan supports multiple user profiles, so each team member can have their own set of scan destinations pre-configured. A solicitor might have profiles for different client matter folders. An accountant might have profiles for invoices, receipts, and tax returns. A receptionist might have a general incoming post profile.
          </p>
          <p className="text-gray-700">
            Because the eScan is a network device, it can be placed anywhere in the office — a shared area, a reception desk, a post room — and accessed by anyone with a profile. No need to queue for the one PC that has the scanner driver installed.
          </p>
        </section>

        {/* Setup Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-4">Step-by-Step Setup Guide</h2>
          <p className="text-gray-700 mb-6">Setting up the Plustek eScan for SharePoint scanning is straightforward:</p>
          <div className="space-y-6">
            {[
              { step: 1, title: "Connect to Your Network", desc: "Plug the eScan into your office network via Ethernet cable, or connect it to your WiFi network through the touchscreen settings. The device will obtain an IP address automatically via DHCP." },
              { step: 2, title: "Access the Admin Panel", desc: "Open a web browser on any PC on the same network and navigate to the eScan's IP address. This opens the web-based administration panel where you can configure scan destinations." },
              { step: 3, title: "Add SharePoint as a Destination", desc: "In the scan destination settings, select SharePoint/OneDrive. Enter your Microsoft 365 tenant details and authenticate with your organisational credentials. Select the SharePoint site and document library you want to scan to." },
              { step: 4, title: "Configure Scan Profiles", desc: "Create user profiles on the device for each person or department. Assign default scan destinations, file formats (e.g., searchable PDF), resolution settings, and naming conventions." },
              { step: 5, title: "Test and Go", desc: "Place a test document in the feeder, select your profile on the touchscreen, and scan. Verify the document appears in the correct SharePoint library. The entire setup typically takes 10–15 minutes." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-accent text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-6">eScan vs PC-Dependent Scanners</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Plustek eScan A450 Pro</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Traditional PC Scanner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["PC Required", "No", "Yes"],
                  ["Driver Installation", "None", "Required on each PC"],
                  ["SharePoint Integration", "Native — built into device", "Requires PC software + manual upload"],
                  ["Setup Time", "10–15 minutes", "30+ minutes per PC"],
                  ["IT Dependency", "Minimal", "High — driver updates, troubleshooting"],
                  ["Multi-user Support", "Yes — individual profiles on device", "One user per PC at a time"],
                  ["Steps to Scan to SharePoint", "3 steps", "7+ steps"],
                  ["Scan Speed", "60 PPM / 120 IPM duplex", "Varies, typically 20–40 PPM"],
                  ["Network Placement", "Anywhere on the network", "Tethered to one PC"],
                  ["Cloud Destinations", "SharePoint, OneDrive, Teams, Email, FTP", "Depends on PC software"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="border border-gray-200 px-4 py-3 font-medium">{row[0]}</td>
                    <td className="border border-gray-200 px-4 py-3 text-green-700">{row[1]}</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-500">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-navy mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Talk to a Specialist</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to eliminate the PC from your scanning workflow? Get in touch with a UK-based
            SharePoint scanning specialist. We will help you find the right setup for your office.
          </p>
          <Link
            href="/contact"
            className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </section>
      </article>
    </>
  );
}
