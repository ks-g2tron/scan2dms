import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Set Up Scan to SharePoint Without a PC: Step-by-Step Guide",
  description: "Step-by-step guide to connecting a PC-free scanner to SharePoint Online — library setup, metadata columns, scanner config, and first scan.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/scan-to-sharepoint-without-pc-setup" },
};

export default function ScanSharePointSetupPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">How to Set Up Scan to SharePoint Without a PC: Step-by-Step</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>This guide covers the setup. For full context on <Link href="/guides/scan-to-dms-document-scanning-workflows" className="text-blue-600 hover:underline">scan documents to SharePoint</Link> workflows — including scanner types, authentication options, and use cases — see our overview guide first.</p>

        <h2 className="text-2xl font-bold text-navy">What You Need Before You Start</h2>
        <ul>
          <li>A standalone PC-free network scanner (this guide uses the Plustek eScan as the example)</li>
          <li>A Microsoft 365 account with SharePoint included</li>
          <li>SharePoint site admin access (or a SharePoint admin to help with initial setup)</li>
          <li>Network connection — either WiFi credentials or an Ethernet cable to a network port near the scanner</li>
          <li>A device (laptop, phone) to access the SharePoint admin interface for initial configuration</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">Step 1 — Create Your SharePoint Document Library</h2>
        <p>Log into your SharePoint site (sharepoint.com → your organisation&apos;s site). Navigate to the site where you want documents to land. Click <strong>New → Document Library</strong>. Give it a clear name — &quot;Invoices&quot;, &quot;Job Cards&quot;, &quot;HR Documents&quot;, &quot;Delivery Notes&quot;.</p>
        <p>One library per document type is generally cleaner than trying to put everything in one library with a document type column. Libraries are easy to navigate; a single massive library with hundreds of mixed documents is not.</p>

        <h2 className="text-2xl font-bold text-navy">Step 2 — Add Metadata Columns</h2>
        <p>Metadata columns are the fields that will be filled in when documents are scanned. Go to your new library → <strong>Settings (gear icon) → Library Settings → Create Column</strong>.</p>
        <p>Add the columns that matter for your document type. Examples:</p>
        <ul>
          <li><strong>Invoices:</strong> Supplier Name (text), Invoice Number (text), Invoice Date (date), Amount (number), Status (choice: Received/Approved/Paid)</li>
          <li><strong>Job Cards:</strong> Job Number (text), Operator (text), Machine (text), Date (date)</li>
          <li><strong>Delivery Notes:</strong> Supplier (text), PO Number (text), Date Received (date), Received By (text)</li>
        </ul>
        <p>Keep metadata simple. Every field you add is a field someone has to fill in at the scanner. 3–5 fields per document type is usually the right balance between searchability and scanning speed.</p>

        <h2 className="text-2xl font-bold text-navy">Step 3 — Set Permissions</h2>
        <p>In Library Settings, check the permissions. By default, the library inherits permissions from the SharePoint site. If some document types need restricted access (HR documents, finance records), break the inheritance and set permissions at the library level: <strong>Library Settings → Permissions for this document library → Stop Inheriting Permissions</strong>.</p>
        <p>Apply least privilege: people who need to view documents get View; people who file documents get Contribute; library managers get Edit.</p>

        <h2 className="text-2xl font-bold text-navy">Step 4 — Connect the eScan to Your Network</h2>
        <p>Unbox the eScan and power it on. On the 7&quot; touchscreen, navigate to <strong>Settings → Network</strong>. For WiFi: select your network and enter the password. For Ethernet: connect the cable — the scanner detects the connection automatically. Confirm the scanner has a valid IP address in network settings before proceeding.</p>

        <h2 className="text-2xl font-bold text-navy">Step 5 — Authenticate with Microsoft 365</h2>
        <p>On the eScan touchscreen, navigate to <strong>Settings → Cloud Services → Microsoft 365</strong>. Select &quot;Sign In.&quot; The scanner displays a code and a URL (microsoft.com/devicelogin). On any device (phone, laptop), open that URL, enter the code, and sign in with your Microsoft 365 credentials. Grant the requested permissions.</p>
        <p>This OAuth 2.0 flow means no password is stored on the device. The scanner receives a token that it uses for all subsequent SharePoint connections. The token refreshes automatically — you won&apos;t need to repeat this process unless you revoke access.</p>
        <p>If your organisation requires admin consent for the scanner&apos;s app registration, a Microsoft 365 Global Administrator may need to approve the permissions in Azure Active Directory. This is a one-time step.</p>

        <h2 className="text-2xl font-bold text-navy">Step 6 — Create a Job Button</h2>
        <p>A job button is a pre-configured one-touch scan destination. On the eScan: <strong>Settings → Job Buttons → Add New</strong>. Configure:</p>
        <ul>
          <li><strong>Name:</strong> Something clear — &quot;→ Invoices&quot;, &quot;→ Job Cards&quot;</li>
          <li><strong>Destination:</strong> SharePoint → select your site → select the library you created</li>
          <li><strong>Metadata prompts:</strong> Select which columns the operator fills in at scan time</li>
          <li><strong>Scan settings:</strong> Colour or greyscale, resolution (300dpi recommended for OCR), duplex or simplex, file format (searchable PDF)</li>
          <li><strong>File naming:</strong> Auto-name from date+time, or from a metadata field value</li>
        </ul>
        <p>The job button now appears on the eScan home screen. Users press it, fill in any metadata prompts on the touchscreen, feed documents, and press Scan. Done.</p>

        <h2 className="text-2xl font-bold text-navy">Step 7 — Test Scan</h2>
        <p>Feed a test document. Press your new job button. Fill in the metadata prompts. Press Scan. Open SharePoint on any device and confirm the document appears in the library with the correct metadata. Check the filename and that the document is searchable (PDF with OCR).</p>
        <p><strong>If the document doesn&apos;t appear:</strong> Check that the authenticated user has Contribute permissions on the library. Check network connectivity. Check there are no conditional access policies in Azure AD blocking the scanner&apos;s authentication.</p>

        <h2 className="text-2xl font-bold text-navy">Going Further — Multiple Users</h2>
        <p>Multiple users can authenticate on the same eScan device. Each user signs in with their own M365 credentials. Scan activity is logged per user, providing a complete audit trail. Users can personalise their own job buttons or share organisation-wide buttons configured by an admin.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to set up scan to SharePoint?</h2>
        <p className="text-gray-300 mb-6">The Plustek eScan connects to SharePoint in minutes — no PC, no IT ticket.</p>
        <Link href="/products/escan-a450-pro" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">View the eScan A450 Pro →</Link>
      </div>
    </main>
  );
}
