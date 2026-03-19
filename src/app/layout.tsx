import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    default: "scan2dms — Scan Directly to SharePoint Without a PC",
    template: "%s | scan2dms",
  },
  description:
    "UK specialist for PC-free document scanning to SharePoint, OneDrive and Microsoft 365. Plustek eScan network scanners — no drivers, no IT tickets.",
  metadataBase: new URL("https://scan2dms.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "scan2dms",
  },
};

function Navbar() {
  const links = [
    { href: "/dms", label: "DMS Systems" },
    { href: "/consultants", label: "Find a Consultant" },
    { href: "/list-your-practice", label: "List Your Practice" },
    { href: "/guides", label: "Guides" },
    { href: "/industries", label: "Industries" },
    { href: "/products/escan-a450-pro", label: "Hardware" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-navy">
            scan2dms
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-navy text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
          <div className="md:hidden">
            <Link
              href="/contact"
              className="bg-navy text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">scan2dms</h3>
            <p className="text-gray-400 text-sm">
              UK specialist for PC-free document scanning to SharePoint and
              Microsoft 365.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Solutions</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/solutions/scan-to-sharepoint" className="hover:text-white">Scan to SharePoint</Link></li>
              <li><Link href="/solutions/scan-to-onedrive" className="hover:text-white">Scan to OneDrive</Link></li>
              <li><Link href="/solutions/scan-to-network-folder" className="hover:text-white">Scan to Network Folder</Link></li>
              <li><Link href="/solutions/scan-to-email" className="hover:text-white">Scan to Email</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Directory</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/dms" className="hover:text-white">DMS Systems</Link></li>
              <li><Link href="/consultants" className="hover:text-white">Find a Consultant</Link></li>
              <li><Link href="/list-your-practice" className="hover:text-white">List Your Practice</Link></li>
              <li><Link href="/products/escan-a450-pro" className="hover:text-white">Hardware</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:ks@scan2dms.com" className="hover:text-white">ks@scan2dms.com</a></li>
              <li><Link href="/contact" className="hover:text-white">Enquiry Form</Link></li>
              <li><a href="https://wa.me/447700000000" target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} scan2dms.com. Not an official Plustek website.</p>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447700000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Replace MEASUREMENT_ID with your GA4 ID */}
        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');` }} /> */}
        {/* Replace with your Tawk.to widget script */}
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script src="https://analytics.buyandscrap.com/script.js" data-website-id="d9c31ea5-03e3-42a2-bb30-f0bdbeb20653" strategy="afterInteractive" />
      </body>
    </html>
  );
}
