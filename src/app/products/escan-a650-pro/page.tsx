import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plustek eScan A650 Pro — A3 PC-Free Network Scanner UK | Scan2DMS",
  description:
    "The Plustek eScan A650 Pro is a truly PC-free A3 network scanner. 60ppm, 100-sheet ADF, 7-inch touchscreen, built-in OCR, direct SharePoint and OneDrive connectivity. No PC or software needed.",
  alternates: { canonical: "https://scan2dms.co.uk/products/escan-a650-pro" },
};

const specs = [
  { label: "Scan Speed", value: "60 PPM / 120 IPM (duplex)" },
  { label: "Max Paper Size", value: "A3+ (up to 12 x 200 inch)" },
  { label: "Display", value: '7" capacitive touchscreen' },
  { label: "ADF Capacity", value: "100 sheets" },
  { label: "Duplex", value: "Single-pass duplex scanning" },
  { label: "Resolution", value: "Up to 600 DPI optical" },
  { label: "Connectivity", value: "Gigabit Ethernet + WiFi" },
  { label: "PC Required", value: "No — fully standalone" },
  { label: "OCR", value: "Built-in, searchable PDF output" },
  { label: "Daily Duty", value: "Up to 10,000 pages/day" },
];

const destinations = [
  "SharePoint Online",
  "OneDrive for Business",
  "Microsoft Teams",
  "Network Folders (SMB/FTP)",
  "Email (SMTP)",
  "USB Drive",
  "Google Drive",
];

export default function EScanA650ProPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Plustek eScan A650 Pro",
    description:
      "PC-free A3 network document scanner with direct SharePoint, OneDrive and Microsoft 365 integration. 60 PPM, 100-sheet ADF, duplex, 7-inch touchscreen, built-in OCR.",
    brand: { "@type": "Brand", name: "Plustek" },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Scan2DMS" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="mb-12">
          <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">
            Featured Product
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">
            Plustek eScan A650 Pro — Standalone A3 Network Scanner
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            The only truly PC-free A3 scanner for Microsoft 365. Scan A3
            drawings, plans, and large documents directly to SharePoint from the
            touchscreen — no PC, no drivers, no desktop software.
          </p>
        </div>

        {/* Key differentiator */}
        <section className="mb-12 bg-blue-50 border border-blue-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Why the A650 Pro? Truly PC-Free A3 Scanning.</h2>
          <p className="text-gray-700 mb-4">
            Most A3 scanners — including the Epson DS-70000N — require a
            connected PC running scanning software like Document Capture Pro.
            That means driver installations, software updates, Windows
            compatibility issues, and IT support tickets every time something
            breaks after an update.
          </p>
          <p className="text-gray-700 mb-4">
            The eScan A650 Pro is different. It runs its own embedded operating
            system with a 7-inch capacitive touchscreen. Users walk up, select a
            destination (a SharePoint library, OneDrive folder, or network path),
            feed A3 documents into the 100-sheet ADF, and press scan. No PC
            login. No desktop software. No IT dependency.
          </p>
          <p className="text-gray-700">
            For organisations scanning A3 documents regularly — architecture
            firms, manufacturing, schools, councils, NHS — this eliminates the
            single biggest source of scanning downtime: the PC in the middle.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Key Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {specs.map((s) => (
              <div
                key={s.label}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4"
              >
                <p className="text-sm text-gray-500 mb-1">{s.label}</p>
                <p className="font-semibold text-navy">{s.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Scan Destinations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {destinations.map((d) => (
              <div
                key={d}
                className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3"
              >
                <svg className="w-5 h-5 text-blue-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-navy">{d}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Who Needs an A3 Scanner?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="text-lg font-bold text-navy mb-2">Architecture &amp; Engineering Firms</h3>
              <p className="text-gray-600">Scan A3 drawings, blueprints, and technical specifications directly to project folders in SharePoint. No need to reduce to A4 or use a separate large-format scanner for standard A3.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🏭</div>
              <h3 className="text-lg font-bold text-navy mb-2">Manufacturing &amp; Quality</h3>
              <p className="text-gray-600">Floor plans, equipment manuals, quality certificates, and inspection records — many arrive in A3 format. Scan on the shop floor without sending documents to a separate scanning station.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-lg font-bold text-navy mb-2">Legal — Large Exhibits</h3>
              <p className="text-gray-600">Court exhibits, property plans, and large-format contracts that arrive in A3. Scan into the matter folder alongside A4 correspondence without compromising on quality.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="text-lg font-bold text-navy mb-2">Schools &amp; Education</h3>
              <p className="text-gray-600">A3 worksheets, exam papers, student artwork, and safeguarding records. Scan at the school office without needing a dedicated PC — staff walk up and scan between tasks.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🏛️</div>
              <h3 className="text-lg font-bold text-navy mb-2">Local Councils</h3>
              <p className="text-gray-600">Planning applications, building control documents, and legacy A3 records from archives. Digitise decades of paper records without the overhead of PC-based scanning stations.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-bold text-navy mb-2">NHS &amp; Healthcare</h3>
              <p className="text-gray-600">Legacy A3 patient records, large-format clinical charts, and estates documentation. Scan to SharePoint for administrative records or to the clinical system for patient documents.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">Built-In OCR — Every Scan is Searchable</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              The A650 Pro includes built-in optical character recognition. Every
              document scanned is automatically converted to a searchable PDF —
              the text layer is embedded in the file so you can search by keyword
              in SharePoint, OneDrive, or any other system that indexes PDF text.
            </p>
            <p>
              This happens on the scanner itself, not on a PC. There&apos;s no
              post-processing step, no OCR software licence to maintain, and no
              delay between scanning and the document being fully searchable.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-4">A650 Pro vs. PC-Dependent A3 Scanners</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Feature</th>
                  <th className="text-left px-4 py-3">Plustek eScan A650 Pro</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg">Typical PC-Dependent A3 Scanner</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">PC Required</td>
                  <td className="px-4 py-3">No — fully standalone</td>
                  <td className="px-4 py-3">Yes — dedicated PC + software</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium">SharePoint Integration</td>
                  <td className="px-4 py-3">Direct from touchscreen</td>
                  <td className="px-4 py-3">Via PC software (e.g. Document Capture Pro)</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">Driver Updates</td>
                  <td className="px-4 py-3">None — firmware auto-updates</td>
                  <td className="px-4 py-3">Required after Windows updates</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="px-4 py-3 font-medium">IT Support Needed</td>
                  <td className="px-4 py-3">Minimal — network config only</td>
                  <td className="px-4 py-3">Ongoing — PC, drivers, software</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 font-medium">User Interface</td>
                  <td className="px-4 py-3">7&quot; touchscreen with scan profiles</td>
                  <td className="px-4 py-3">PC desktop application</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Scan Speed</td>
                  <td className="px-4 py-3">60 PPM / 120 IPM</td>
                  <td className="px-4 py-3">Varies (often limited by PC processing)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-navy text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Request a Quote</h2>
          <p className="text-gray-300 mb-6">
            Tell us about your A3 scanning requirements and we&apos;ll provide
            pricing and deployment advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </a>
            <Link
              href="/solutions/scan-to-sharepoint"
              className="inline-block border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Scan to SharePoint
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
