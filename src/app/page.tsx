import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "scan2dms — Scan Directly to SharePoint Without a PC",
  description:
    "Scan documents directly to SharePoint and Microsoft 365 without a PC. Plustek eScan network scanners for UK businesses — 60 PPM, touchscreen, no drivers needed.",
  alternates: { canonical: "https://scan2dms.com" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Scan Directly to SharePoint.
            <br />
            <span className="text-blue-accent">No PC. No Driver. No IT Ticket.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            The Plustek eScan connects straight to SharePoint, OneDrive and Microsoft 365 over your network.
            Place your document, tap the screen, done. No desktop software, no driver installs, no IT dependency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              href="/products/escan-a450-pro"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              View Product
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            Why UK Businesses Choose scan2dms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No PC Required",
                desc: "The eScan is a standalone network scanner with its own touchscreen interface. No desktop, no laptop, no driver — just plug in and scan.",
                icon: "🖥️",
              },
              {
                title: "Native SharePoint Integration",
                desc: "Scans go directly to your SharePoint document libraries, OneDrive folders, or Teams channels. No middleware, no third-party connectors.",
                icon: "☁️",
              },
              {
                title: "UK Specialist Support",
                desc: "We are a UK-based specialist in document scanning solutions for Microsoft 365 environments. Hands-on support from someone who knows the product.",
                icon: "🇬🇧",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { step: "1", title: "Place Document", desc: "Load your documents into the 100-sheet automatic document feeder or place on the flatbed." },
              { step: "2", title: "Select Destination", desc: "On the 7-inch touchscreen, choose your SharePoint library, OneDrive folder, or other destination." },
              { step: "3", title: "Done", desc: "Your scanned document is delivered directly to Microsoft 365 in seconds. No PC involved at any stage." },
            ].map((item) => (
              <div key={item.step}>
                <div className="w-16 h-16 bg-blue-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Spotlight */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-blue-accent font-semibold mb-2">Product Spotlight</p>
                <h2 className="text-3xl font-bold text-navy mb-4">
                  Plustek eScan A450 Pro
                </h2>
                <p className="text-gray-600 mb-6">
                  The most capable PC-free network document scanner for Microsoft 365 environments.
                  Designed for offices that need fast, reliable scanning directly into SharePoint,
                  OneDrive, Teams, email, and network folders — all from the device itself.
                </p>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li className="flex items-center gap-3"><span className="text-blue-accent font-bold">60 PPM</span> colour and mono scanning</li>
                  <li className="flex items-center gap-3"><span className="text-blue-accent font-bold">7&quot; Touchscreen</span> for intuitive operation</li>
                  <li className="flex items-center gap-3"><span className="text-blue-accent font-bold">100-Sheet ADF</span> with duplex scanning</li>
                  <li className="flex items-center gap-3"><span className="text-blue-accent font-bold">WiFi + Ethernet</span> connectivity</li>
                </ul>
                <Link
                  href="/products/escan-a450-pro"
                  className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-block"
                >
                  View Full Specs
                </Link>
              </div>
              <div className="bg-gray-100 rounded-xl h-64 md:h-80 flex items-center justify-center">
                <p className="text-gray-400 text-lg">Product Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-navy mb-12">
            Built for Your Industry
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Legal", href: "/industries/legal", desc: "Digitise case files, contracts, and court bundles directly into SharePoint matter folders." },
              { title: "Finance", href: "/industries/finance", desc: "Scan invoices, receipts, and compliance documents straight to your M365 archive." },
              { title: "Healthcare", href: "/industries/healthcare", desc: "Capture patient forms, referrals, and clinical records with NHS-grade security." },
              { title: "Education", href: "/industries/education", desc: "Streamline admissions, student records, and administration paperwork." },
            ].map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-accent transition-all group"
              >
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-blue-accent transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm">{industry.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 md:py-24 bg-navy text-white" id="enquiry">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-center mb-10">
            Tell us about your scanning needs and we will get back to you within one business day.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-accent" />
              <input type="text" placeholder="Company" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-accent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-accent" />
              <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-accent" />
            </div>
            <textarea placeholder="Tell us about your scanning needs..." rows={4} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-accent" />
            <button type="submit" className="w-full bg-blue-accent hover:bg-blue-600 text-white font-semibold py-4 rounded-lg text-lg transition-colors">
              Send Enquiry
            </button>
          </form>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-gray-500">
            <span>Microsoft 365 Compatible</span>
            <span className="hidden md:inline">|</span>
            <span>SharePoint Native</span>
            <span className="hidden md:inline">|</span>
            <span>UK-Based Support</span>
            <span className="hidden md:inline">|</span>
            <span>60 PPM Scanning</span>
          </div>
        </div>
      </section>
    </>
  );
}
