import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About — scan2dms.com | Scan to SharePoint Specialists",
  description: "scan2dms.com is a specialist resource for UK businesses implementing PC-free document scanning with Microsoft 365 and SharePoint.",
  alternates: { canonical: "https://scan2dms.com/about" },
};
export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-navy mb-6">About scan2dms</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>scan2dms.com is a specialist resource for UK businesses looking to implement PC-free document scanning with Microsoft 365 and SharePoint.</p>
        <p>We recommend and supply the Plustek eScan series — in our view the most capable PC-free network document scanner available for M365 environments. The eScan A450 Pro scans directly to SharePoint Online, OneDrive, network folders, and email without any PC, driver, or IT involvement.</p>
        <p>All enquiries are handled by a UK-based specialist with extensive experience in document management and Microsoft 365 deployments. We work with businesses across legal, finance, healthcare, and education sectors.</p>
        <p>Whether you need one scanner for a small office or a multi-site deployment, we can advise on the right configuration and provide ongoing UK support.</p>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <p className="text-sm text-gray-500 italic">This site is not an official Plustek website. scan2dms.com is an independent specialist resource. Plustek and eScan are trademarks of Plustek Inc.</p>
        </div>
      </div>
    </main>
  );
}
