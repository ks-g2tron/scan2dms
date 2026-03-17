import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plustek eScan A450 Pro — 60 PPM PC-Free SharePoint Scanner",
  description:
    "The Plustek eScan A450 Pro scans directly to SharePoint, OneDrive, Teams and email at 60 PPM with no PC required. 7-inch touchscreen, 100-sheet ADF, duplex, WiFi.",
  alternates: { canonical: "https://scan2dms.com/products/escan-a450-pro" },
};

const specs = [
  { label: "Scan Speed", value: "60 PPM colour / mono" },
  { label: "Display", value: '7" capacitive touchscreen' },
  { label: "ADF Capacity", value: "100 sheets" },
  { label: "Duplex", value: "Single-pass duplex scanning" },
  { label: "Resolution", value: "Up to 600 DPI optical" },
  { label: "Connectivity", value: "Gigabit Ethernet + WiFi" },
  { label: "PC Required", value: "No — fully standalone" },
  { label: "Daily Duty", value: "Up to 10,000 pages/day" },
];

const destinations = [
  "SharePoint Online",
  "OneDrive for Business",
  "Microsoft Teams",
  "Network Folders (SMB/FTP)",
  "Email (SMTP)",
  "USB Drive",
];

export default function EScanA450ProPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Plustek eScan A450 Pro",
    description:
      "PC-free network document scanner with direct SharePoint, OneDrive and Microsoft 365 integration. 60 PPM, 100-sheet ADF, duplex, 7-inch touchscreen.",
    brand: { "@type": "Brand", name: "Plustek" },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "scan2dms.com" },
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
            Plustek eScan A450 Pro
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            The fastest PC-free network scanner for Microsoft 365. Scan directly
            to SharePoint, OneDrive, Teams, email and network folders — no
            drivers, no desktop software, no IT tickets.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Key Specifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          <h2 className="text-2xl font-bold text-navy mb-4">Why the eScan A450 Pro?</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>
              Most document scanners need a PC with drivers and scanning
              software. The eScan A450 Pro is different — it runs its own
              embedded operating system with a 7-inch touchscreen. Users walk up,
              select a destination (e.g. a SharePoint library), feed documents
              into the 100-sheet ADF, and press scan. The scanned files appear in
              SharePoint within seconds.
            </p>
            <p>
              For IT teams, this means no driver rollouts, no desktop software to
              maintain, and no support tickets when scanning breaks after a
              Windows update. For end users, it means fast, reliable scanning
              that just works.
            </p>
            <p>
              With single-pass duplex scanning at 60 pages per minute, the A450
              Pro handles high-volume workloads across legal, finance, healthcare
              and education environments. WiFi and Gigabit Ethernet connectivity
              gives flexibility for any office layout.
            </p>
          </div>
        </section>

        <div className="bg-navy text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Request a Quote</h2>
          <p className="text-gray-300 mb-6">
            Tell us about your requirements and we&apos;ll provide pricing and
            deployment advice.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </main>
    </>
  );
}
