import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SharePoint Scanner Setup — How to Scan Directly to SharePoint Online",
  description:
    "Step-by-step guide to setting up a Plustek eScan network scanner to scan directly to SharePoint Online without a PC. Covers authentication, libraries, and scan profiles.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/sharepoint-scanner-setup" },
};

export default function SharepointScannerSetupPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Set Up a Scanner for SharePoint Online",
    description: metadata.description,
    step: [
      {
        "@type": "HowToStep",
        name: "Connect the scanner to your network",
        text: "Connect the eScan to your office network via Ethernet or WiFi and power it on.",
      },
      {
        "@type": "HowToStep",
        name: "Access the admin panel",
        text: "Open a browser and navigate to the scanner's IP address to access the web-based admin console.",
      },
      {
        "@type": "HowToStep",
        name: "Configure SharePoint Online",
        text: "In the scan destination settings, add SharePoint Online and authenticate with your Microsoft 365 credentials.",
      },
      {
        "@type": "HowToStep",
        name: "Select document libraries",
        text: "Browse and select the SharePoint document libraries you want as scan destinations.",
      },
      {
        "@type": "HowToStep",
        name: "Create scan profiles",
        text: "Set up one-touch scan profiles on the touchscreen for each destination with your preferred settings.",
      },
      {
        "@type": "HowToStep",
        name: "Test and deploy",
        text: "Run test scans to verify documents arrive in the correct SharePoint libraries, then roll out to users.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
        <h1 className="text-4xl font-extrabold text-navy mb-6">SharePoint Scanner Setup</h1>

        <div className="prose prose-lg text-gray-700 space-y-6">
          <p>
            This guide walks you through setting up a Plustek eScan network scanner to scan
            directly to SharePoint Online. The entire process takes around 30 minutes and
            requires no software installation on any PC.
          </p>

          <h2 className="text-2xl font-bold text-navy">What You&apos;ll Need</h2>
          <ul>
            <li>A Plustek eScan A450 Pro (or other eScan model with SharePoint support)</li>
            <li>An office network with internet access</li>
            <li>A Microsoft 365 subscription with SharePoint Online</li>
            <li>Admin credentials for your M365 tenant (for initial setup only)</li>
            <li>The SharePoint site URL and document library names you want to scan to</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy">Step 1: Connect the Scanner</h2>
          <p>
            Unbox the eScan and connect it to your network using the included Ethernet cable.
            Alternatively, you can configure WiFi during the initial setup wizard on the
            touchscreen. Plug in the power adapter and switch it on. The scanner will boot up
            and obtain an IP address from your DHCP server.
          </p>
          <p>
            You can find the scanner&apos;s IP address on the touchscreen under Settings &gt; Network.
            Make a note of this — you&apos;ll need it for the next step.
          </p>

          <h2 className="text-2xl font-bold text-navy">Step 2: Access the Admin Panel</h2>
          <p>
            Open a web browser on any device on the same network and navigate to the scanner&apos;s
            IP address (e.g. <code>http://192.168.1.50</code>). Log in with the default admin
            credentials (printed on the quick-start card). We recommend changing the admin
            password immediately.
          </p>

          <h2 className="text-2xl font-bold text-navy">Step 3: Add SharePoint Online</h2>
          <p>
            In the admin panel, navigate to <strong>Scan Destinations</strong> and click{" "}
            <strong>Add New</strong>. Select <strong>SharePoint Online</strong> as the
            destination type.
          </p>
          <p>
            You&apos;ll be prompted to authenticate with Microsoft. Enter your M365 admin
            credentials and grant the eScan application the required permissions. This uses
            OAuth 2.0 — the scanner never stores your password, only a secure token.
          </p>
          <p>
            Once authenticated, the admin panel will show your available SharePoint sites.
            Select the site and document library you want to use as a scan destination. You can
            add multiple libraries as separate destinations.
          </p>

          <h2 className="text-2xl font-bold text-navy">Step 4: Configure Scan Profiles</h2>
          <p>
            Scan profiles are the one-touch buttons that appear on the scanner&apos;s touchscreen.
            Each profile combines a destination with scan settings like file format (PDF, TIFF,
            JPEG), colour mode, resolution, and duplex options.
          </p>
          <p>
            For most office documents, we recommend: PDF format, colour mode set to auto-detect,
            300 DPI resolution, and duplex scanning enabled. These settings give you a good
            balance of quality and file size.
          </p>
          <p>
            Create a profile for each department or document type. For example: &quot;Legal —
            Client Files&quot;, &quot;Finance — Invoices&quot;, &quot;HR — Employee Records&quot;. Each profile can
            point to a different SharePoint library.
          </p>

          <h2 className="text-2xl font-bold text-navy">Step 5: Test and Roll Out</h2>
          <p>
            Before rolling out to users, test each scan profile. Place a few sample documents in
            the ADF, select a profile on the touchscreen, and press scan. Check that the files
            appear in the correct SharePoint library with the expected quality and file format.
          </p>
          <p>
            Once testing is complete, the scanner is ready for use. There&apos;s no per-user
            configuration needed — anyone in the office can walk up and scan. The one-touch
            profiles guide users to the correct destination every time.
          </p>

          <h2 className="text-2xl font-bold text-navy">Tips for a Smooth Deployment</h2>
          <ul>
            <li><strong>Use a static IP:</strong> Assign the scanner a static IP or DHCP reservation so the admin panel URL doesn&apos;t change.</li>
            <li><strong>Label profiles clearly:</strong> Use descriptive names that non-technical users will understand.</li>
            <li><strong>Set folder structures in SharePoint first:</strong> Create your document libraries and folder hierarchies before configuring the scanner.</li>
            <li><strong>Enable email notifications:</strong> Configure the scanner to email a confirmation when scans complete — useful for audit trails.</li>
            <li><strong>Plan for multi-site:</strong> If you have multiple offices, each site needs its own scanner. Configuration can be exported and imported between devices.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy">Need Help?</h2>
          <p>
            We help UK businesses set up SharePoint scanning every day. If you&apos;d like expert
            guidance on configuration, scan profiles, or multi-site deployments,{" "}
            <a href="/contact" className="text-blue-accent hover:underline">
              get in touch
            </a>{" "}
            and we&apos;ll walk you through it.
          </p>
        </div>
      </main>
    </>
  );
}
