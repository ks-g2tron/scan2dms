import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is Scan to DMS? A Guide to Document Management Scanning",
  description:
    "Learn what scan-to-DMS means, how it works, and why UK businesses use it to get paper documents into SharePoint, OneDrive, and other document management systems.",
  alternates: { canonical: "https://scan2dms.com/guides/what-is-scan-to-dms" },
};

export default function WhatIsScanToDmsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is Scan to DMS?",
    description: metadata.description,
    author: { "@type": "Organization", name: "scan2dms.com" },
    publisher: { "@type": "Organization", name: "scan2dms.com" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
        <h1 className="text-4xl font-extrabold text-navy mb-6">What Is Scan to DMS?</h1>

        <div className="prose prose-lg text-gray-700 space-y-6">
          <p>
            &quot;Scan to DMS&quot; refers to the process of converting paper documents into digital
            files and sending them directly into a Document Management System (DMS). A DMS is
            software that stores, organises, and tracks electronic documents — common examples
            include Microsoft SharePoint, OneDrive for Business, Google Drive, and dedicated
            platforms like iManage or NetDocuments.
          </p>

          <h2 className="text-2xl font-bold text-navy">How Does Scan to DMS Work?</h2>
          <p>
            In a traditional setup, you scan a document to your PC, open the DMS, navigate to
            the right folder, and upload the file. This works, but it&apos;s slow and relies on
            every user having the right software and knowing where to save files.
          </p>
          <p>
            Modern scan-to-DMS solutions cut out the PC entirely. A network scanner with
            built-in DMS integration — like the Plustek eScan A450 Pro — connects directly to
            your document management system over your network. The user selects a destination on
            the scanner&apos;s touchscreen, feeds in their documents, and presses scan. The files
            land in the correct DMS location within seconds.
          </p>

          <h2 className="text-2xl font-bold text-navy">Why Is It Important?</h2>
          <p>
            Paper is still everywhere in UK businesses. Legal firms handle contracts and court
            bundles. Accountancy practices process receipts and invoices. Healthcare providers
            manage patient records and referral letters. Schools deal with consent forms and
            admissions paperwork.
          </p>
          <p>
            Without a scan-to-DMS workflow, these documents either stay as paper (creating
            storage and retrieval problems) or get scanned to random folders on local PCs (where
            they&apos;re hard to find and not backed up). Scan to DMS solves both problems by
            putting every scanned document exactly where it belongs, instantly searchable and
            accessible to authorised users.
          </p>

          <h2 className="text-2xl font-bold text-navy">Scan to DMS with Microsoft 365</h2>
          <p>
            If your organisation uses Microsoft 365, your DMS is likely SharePoint Online or
            OneDrive for Business. These are included in most M365 subscriptions, so there&apos;s
            no additional DMS licence cost.
          </p>
          <p>
            The challenge has always been getting paper into SharePoint efficiently. Traditional
            scanners require a PC with drivers and upload software. The Plustek eScan range
            solves this by scanning directly to SharePoint document libraries — no PC, no
            drivers, no IT involvement.
          </p>

          <h2 className="text-2xl font-bold text-navy">Key Benefits of Scan to DMS</h2>
          <ul>
            <li><strong>Faster filing:</strong> Documents go straight from paper to the right digital location in seconds.</li>
            <li><strong>Better compliance:</strong> Scanned documents are stored in managed, auditable systems with version control and access permissions.</li>
            <li><strong>Reduced storage:</strong> Digital documents replace filing cabinets, freeing up expensive office space.</li>
            <li><strong>Easy retrieval:</strong> Find any document instantly with full-text search, metadata, and folder structures.</li>
            <li><strong>Lower IT overhead:</strong> PC-free scanners mean no drivers to manage, no software to update, and no support tickets.</li>
          </ul>

          <h2 className="text-2xl font-bold text-navy">Getting Started</h2>
          <p>
            If you&apos;re considering scan-to-DMS for your business, the first step is to identify
            where your documents need to go. For most UK businesses on Microsoft 365, that means
            SharePoint Online. From there, choosing the right scanner — one that connects
            directly without a PC — makes the whole process seamless.
          </p>
          <p>
            We specialise in helping UK businesses set up PC-free scanning to SharePoint and
            Microsoft 365. <a href="/contact" className="text-blue-accent hover:underline">Get in touch</a> to
            discuss your requirements.
          </p>
        </div>
      </main>
    </>
  );
}
