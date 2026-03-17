import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scan to Email — Send Scanned Documents Directly from the Scanner",
  description:
    "Scan documents and send them as email attachments directly from the Plustek eScan — no PC required. Configure SMTP and scan-to-email in minutes.",
  alternates: { canonical: "https://scan2dms.com/solutions/scan-to-email" },
};

export default function ScanToEmailPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Scan to Email — Send Documents Directly from the Scanner
          </h1>
          <p className="text-lg text-gray-300">
            Scan a document and send it as an email attachment in one step — no PC, no manual attachment, no hassle.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">What Is Scan-to-Email?</h2>
          <p className="text-gray-700 mb-4">
            Scan-to-email is one of the most common scanning workflows in any office. You scan a paper document and it is sent as an email attachment to one or more recipients — directly from the scanner, without needing to open a PC, save the file, compose an email, and attach the file manually.
          </p>
          <p className="text-gray-700">
            The Plustek eScan handles scan-to-email natively. You configure your email settings (SMTP server, sender address) once during setup, and from that point any user can scan a document, enter or select a recipient on the touchscreen, and send it as an email attachment with one tap.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">How to Configure Scan-to-Email</h2>
          <p className="text-gray-700 mb-4">
            The eScan sends email via SMTP, which means it works with virtually any email system — Microsoft 365, Google Workspace, on-premises Exchange, or any SMTP relay. Configuration involves:
          </p>
          <ul className="space-y-2 text-gray-700 ml-4 mb-4">
            <li>• SMTP server address (e.g., smtp.office365.com for Microsoft 365)</li>
            <li>• SMTP port (typically 587 for TLS)</li>
            <li>• Authentication credentials (sender email and password or app password)</li>
            <li>• Default sender name and address</li>
          </ul>
          <p className="text-gray-700">
            Once configured, users can enter recipient addresses directly on the touchscreen, or select from a pre-configured address book. You can also set up scan profiles with pre-filled recipients for common workflows — for example, a &quot;Send to Accounts&quot; button that automatically emails scans to your finance team.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">When to Use Scan-to-Email vs Scan-to-SharePoint</h2>
          <p className="text-gray-700 mb-4">
            Scan-to-email is best for one-off document sharing — sending a signed contract to a client, forwarding a delivery note to a supplier, or emailing a receipt to your accountant. It is quick, familiar, and the recipient does not need access to your SharePoint environment.
          </p>
          <p className="text-gray-700 mb-4">
            However, for internal document management and filing, scan-to-SharePoint is almost always the better choice. Documents filed in SharePoint are organised, searchable, version-controlled, and accessible to authorised colleagues. Email attachments, by contrast, get buried in inboxes, duplicated across mailboxes, and are difficult to audit.
          </p>
          <p className="text-gray-700">
            The eScan supports both — so you can use scan-to-email when sharing externally and scan-to-SharePoint for everything else, all from the same device.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Does scan-to-email work with Microsoft 365?", a: "Yes. The eScan supports SMTP connections to Microsoft 365 (smtp.office365.com). You can send scanned documents as email attachments using your M365 email account." },
              { q: "Can I scan to email without a PC?", a: "Yes. The eScan handles scan-to-email entirely on the device itself. No PC, no driver, no desktop email client needed." },
              { q: "What is the maximum attachment size?", a: "This depends on your email provider's limits (typically 25 MB for Microsoft 365). The eScan allows you to configure compression and resolution settings to keep file sizes within limits." },
              { q: "Can I send to multiple recipients?", a: "Yes. You can enter multiple email addresses on the touchscreen or configure profiles with pre-set recipient lists for common workflows." },
              { q: "Is scan-to-email secure?", a: "The eScan supports TLS/SSL encryption for SMTP connections, ensuring your scanned documents are transmitted securely. For sensitive documents, we recommend scan-to-SharePoint where you have more granular access controls." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Need Help Setting Up Scan-to-Email?</h2>
          <p className="text-gray-600 mb-6">Our UK-based specialists can help configure your eScan for email, SharePoint, and more.</p>
          <Link href="/contact" className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
            Contact Us
          </Link>
        </section>
      </article>
    </>
  );
}
