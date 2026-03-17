import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scan to Network Folder — Direct from Scanner to Shared Drive",
  description:
    "Scan documents directly to network folders and shared drives without a PC. The Plustek eScan supports SMB/CIFS network shares alongside cloud destinations.",
  alternates: { canonical: "https://scan2dms.com/solutions/scan-to-network-folder" },
};

export default function ScanToNetworkFolderPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Scan to Network Folder — Direct from Scanner to Shared Drive
          </h1>
          <p className="text-lg text-gray-300">
            Send scanned documents straight to your Windows shared drives, NAS devices, and file servers — no PC middleware required.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Why Network Folder Scanning Still Matters</h2>
          <p className="text-gray-700 mb-4">
            While cloud storage is increasingly popular, many UK businesses still rely on on-premises network shares for document storage. Whether it is a Windows file server, a NAS appliance, or a departmental shared drive, network folders remain a core part of many IT environments — particularly in regulated industries where data residency matters.
          </p>
          <p className="text-gray-700">
            The Plustek eScan supports scanning directly to SMB/CIFS network shares alongside its cloud capabilities. This means you can use the same device to scan to SharePoint, OneDrive, and your local file server — choosing the right destination for each document from the touchscreen.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">How It Works</h2>
          <p className="text-gray-700 mb-4">
            The eScan connects to your office network via WiFi or Ethernet. In the device&apos;s configuration, you specify the network path to your shared folder (e.g., \\server\scans), along with the authentication credentials. You can set up multiple network folder destinations for different departments or document types.
          </p>
          <p className="text-gray-700">
            When scanning, the user selects the network folder profile on the touchscreen and presses scan. The document is delivered directly to the shared folder in the configured format — no PC, no driver, no intermediate step. Files can be named automatically using date stamps, sequential numbering, or custom prefixes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Ideal for Hybrid Environments</h2>
          <p className="text-gray-700 mb-4">
            Many businesses operate hybrid environments where some documents go to SharePoint and others stay on local infrastructure. The eScan handles both seamlessly. You might configure profiles for:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4 mb-4">
            <li>• Client-facing documents → SharePoint document library</li>
            <li>• Internal admin paperwork → departmental network share</li>
            <li>• Financial records → compliance archive on NAS</li>
            <li>• Quick scans → personal OneDrive folder</li>
          </ul>
          <p className="text-gray-700">
            This flexibility makes the eScan suitable for organisations at any stage of their cloud migration journey.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What network protocols does the eScan support?", a: "The eScan supports SMB/CIFS for Windows network shares, FTP and FTPS for file transfer, and direct cloud integration for SharePoint, OneDrive, and other Microsoft 365 services." },
              { q: "Can I scan to both network folders and SharePoint?", a: "Yes. The eScan supports multiple scan destinations simultaneously. You can configure profiles for network folders, SharePoint, OneDrive, email, USB, and FTP — all on the same device." },
              { q: "Does it work with NAS devices?", a: "Yes, any NAS device that supports SMB/CIFS file sharing (which covers virtually all business NAS appliances from Synology, QNAP, and others) can be configured as a scan destination." },
              { q: "Do I need to install software on the file server?", a: "No. The eScan writes directly to the network share using standard SMB protocol. No server-side software or agent is required." },
              { q: "Can different users scan to different folders?", a: "Yes. Each user profile on the eScan can have its own set of scan destinations and folder paths, so documents are filed correctly without manual intervention." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Need Scan-to-Folder for Your Office?</h2>
          <p className="text-gray-600 mb-6">Talk to a UK specialist about setting up network folder scanning alongside Microsoft 365.</p>
          <Link href="/contact" className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
            Get in Touch
          </Link>
        </section>
      </article>
    </>
  );
}
