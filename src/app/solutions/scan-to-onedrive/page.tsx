import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scan Documents Directly to OneDrive — No PC Required",
  description:
    "Scan documents directly to OneDrive without a PC. The Plustek eScan connects natively to OneDrive for Business as part of Microsoft 365.",
  alternates: { canonical: "https://scan2dms.co.uk/solutions/scan-to-onedrive" },
};

export default function ScanToOneDrivePage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Scan Documents Directly to OneDrive — Without a PC
          </h1>
          <p className="text-lg text-gray-300">
            Send scanned documents straight to your OneDrive for Business folder — no desktop software, no drivers, no manual upload.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">What Is Scan-to-OneDrive?</h2>
          <p className="text-gray-700 mb-4">
            Scan-to-OneDrive means sending a scanned paper document directly from a physical scanner into your OneDrive for Business cloud storage — without the file ever passing through a PC. For individual professionals and small teams who use OneDrive as their primary file store within Microsoft 365, this is a game-changer.
          </p>
          <p className="text-gray-700">
            OneDrive for Business gives every Microsoft 365 user 1 TB of personal cloud storage. It syncs across devices, supports version history, and integrates with the full Microsoft 365 suite. Getting paper documents into OneDrive quickly — without the detour through a PC desktop — means less friction and fewer lost files.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Why Scan Directly to OneDrive?</h2>
          <p className="text-gray-700 mb-4">
            The traditional scanning process — scan to PC, save locally, open OneDrive, upload — creates unnecessary steps and opportunities for error. Documents get saved to the wrong folder, left on the PC desktop, or forgotten entirely. For professionals handling sensitive documents like contracts, invoices, or client correspondence, this is a compliance risk as well as a productivity drain.
          </p>
          <p className="text-gray-700">
            Direct scan-to-OneDrive removes all of these intermediate steps. The document goes from paper to cloud in one action. It is immediately available on your laptop, phone, and tablet through OneDrive sync — and it is backed up, versioned, and searchable from the moment it arrives.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">How the Plustek eScan Does It</h2>
          <p className="text-gray-700 mb-4">
            The Plustek eScan A450 Pro connects natively to OneDrive for Business as part of its Microsoft 365 integration. You configure your OneDrive destination through the scanner&apos;s touchscreen or web admin panel, authenticate with your Microsoft 365 credentials, and choose which folder to scan to.
          </p>
          <p className="text-gray-700 mb-4">
            From that point, scanning to OneDrive is a three-step process: place document, select your OneDrive profile on the touchscreen, press scan. The file appears in your OneDrive folder within seconds, in whatever format you have configured — PDF, searchable PDF, TIFF, JPEG, or others.
          </p>
          <p className="text-gray-700">
            Because the eScan supports multiple user profiles, each person in the office can have their own OneDrive destination configured. A solicitor might scan to their client folder. An accountant might scan to their tax returns folder. Everyone uses the same device, but files go to the right place for each user.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Key Benefits</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold mt-1">•</span>No PC or driver required — scan directly from the device</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold mt-1">•</span>Files are immediately available across all your synced devices</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold mt-1">•</span>Built-in OCR creates searchable PDFs automatically</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold mt-1">•</span>Multiple user profiles — shared device, personal folders</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold mt-1">•</span>Works alongside SharePoint, Teams, email, and network folder scanning</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Can I scan directly to OneDrive without a PC?", a: "Yes. The Plustek eScan connects to OneDrive for Business natively over your office network. No PC, driver, or desktop software is involved." },
              { q: "Does scan-to-OneDrive work with personal OneDrive accounts?", a: "The eScan is designed for OneDrive for Business (part of Microsoft 365). Personal OneDrive accounts may have limited support — contact us for details on your specific setup." },
              { q: "Can I scan to a specific OneDrive folder?", a: "Yes. You can configure any folder path within your OneDrive as a scan destination, and set up different folder destinations for different scan profiles." },
              { q: "What file formats are supported?", a: "PDF, searchable PDF (with OCR), PDF/A, TIFF, JPEG, BMP, and PNG. Searchable PDF is recommended for most business documents." },
              { q: "Can I scan to OneDrive and SharePoint from the same device?", a: "Absolutely. The eScan supports multiple destinations simultaneously. You can configure profiles for OneDrive, SharePoint, Teams, email, and network folders all on the same device." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-4">
                <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Ready to Scan Directly to OneDrive?</h2>
          <p className="text-gray-600 mb-6">Get in touch with a UK-based specialist to discuss your setup.</p>
          <Link href="/contact" className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
            Get a Quote
          </Link>
        </section>
      </article>
    </>
  );
}
