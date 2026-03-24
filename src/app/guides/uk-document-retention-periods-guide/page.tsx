import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "UK Document Retention Periods: The Complete Guide by Document Type",
  description: "How long must UK businesses keep different types of documents? Complete retention period guide covering HMRC, employment, legal, and healthcare records.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/uk-document-retention-periods-guide" },
};

export default function RetentionPeriodsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">UK Document Retention Periods: The Complete Guide by Document Type</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Getting document retention right is fundamental to <Link href="/guides/document-management-gdpr-compliance-uk" className="text-blue-600 hover:underline">document management GDPR compliance</Link>. Keep records too long and you&apos;re breaching GDPR. Destroy them too early and you&apos;re breaching your legal obligations. This guide gives you the retention periods for common UK business document types.</p>

        <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-5 mb-4">
          <p className="font-semibold text-amber-900 text-sm">Important note</p>
          <p className="text-amber-800 text-sm mt-1">Retention requirements change. This guide reflects current guidance but always verify against current HMRC, ICO, and sector regulator guidance for your specific circumstances. When in doubt, seek legal advice.</p>
        </div>

        <h2 className="text-2xl font-bold text-navy">Financial and Tax Records</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Document Type</th>
                <th className="border border-gray-200 p-3 text-left">Retention Period</th>
                <th className="border border-gray-200 p-3 text-left">Authority</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">VAT records</td><td className="border border-gray-200 p-3">6 years</td><td className="border border-gray-200 p-3">HMRC</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Company accounting records</td><td className="border border-gray-200 p-3">6 years (private) / 3 years (public)</td><td className="border border-gray-200 p-3">Companies Act 2006</td></tr>
              <tr><td className="border border-gray-200 p-3">Self-assessment tax returns</td><td className="border border-gray-200 p-3">5 years after 31 Jan submission deadline</td><td className="border border-gray-200 p-3">HMRC</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">PAYE records</td><td className="border border-gray-200 p-3">3 years after end of tax year</td><td className="border border-gray-200 p-3">HMRC</td></tr>
              <tr><td className="border border-gray-200 p-3">P60s and P11Ds</td><td className="border border-gray-200 p-3">3 years after end of tax year</td><td className="border border-gray-200 p-3">HMRC</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Payroll records (employer)</td><td className="border border-gray-200 p-3">6 years</td><td className="border border-gray-200 p-3">HMRC / Employment law</td></tr>
              <tr><td className="border border-gray-200 p-3">Purchase invoices</td><td className="border border-gray-200 p-3">6 years</td><td className="border border-gray-200 p-3">HMRC</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Bank statements</td><td className="border border-gray-200 p-3">6 years</td><td className="border border-gray-200 p-3">HMRC</td></tr>
              <tr><td className="border border-gray-200 p-3">Capital allowance records</td><td className="border border-gray-200 p-3">Life of asset + 6 years</td><td className="border border-gray-200 p-3">HMRC</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-navy">Employment Records</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Document Type</th>
                <th className="border border-gray-200 p-3 text-left">Retention Period</th>
                <th className="border border-gray-200 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Personnel files</td><td className="border border-gray-200 p-3">6 years after employment ends</td><td className="border border-gray-200 p-3">Limitation Act 1980</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Recruitment records (unsuccessful)</td><td className="border border-gray-200 p-3">6 months–1 year</td><td className="border border-gray-200 p-3">Discrimination claim risk period</td></tr>
              <tr><td className="border border-gray-200 p-3">Training records</td><td className="border border-gray-200 p-3">Duration + 6 years</td><td className="border border-gray-200 p-3">Longer if health &amp; safety related</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Disciplinary records</td><td className="border border-gray-200 p-3">6 years after employment ends</td><td className="border border-gray-200 p-3">Employment tribunal limitation period</td></tr>
              <tr><td className="border border-gray-200 p-3">Right to work checks</td><td className="border border-gray-200 p-3">Duration + 2 years</td><td className="border border-gray-200 p-3">Home Office requirement</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">DBS check records</td><td className="border border-gray-200 p-3">6 months (result only, not detail)</td><td className="border border-gray-200 p-3">DBS Code of Practice</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-navy">Legal and Contracts</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Document Type</th>
                <th className="border border-gray-200 p-3 text-left">Retention Period</th>
                <th className="border border-gray-200 p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Simple contracts</td><td className="border border-gray-200 p-3">6 years after expiry</td><td className="border border-gray-200 p-3">Limitation Act 1980</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Deeds</td><td className="border border-gray-200 p-3">12 years after expiry</td><td className="border border-gray-200 p-3">Limitation Act 1980</td></tr>
              <tr><td className="border border-gray-200 p-3">Insurance policies</td><td className="border border-gray-200 p-3">Duration + 3 years minimum</td><td className="border border-gray-200 p-3">Longer for EL policies (40 years)</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Employer&apos;s liability insurance</td><td className="border border-gray-200 p-3">40 years</td><td className="border border-gray-200 p-3">Mesothelioma/asbestos claim risk</td></tr>
              <tr><td className="border border-gray-200 p-3">Minutes of board meetings</td><td className="border border-gray-200 p-3">Permanent (Companies Act)</td><td className="border border-gray-200 p-3">Required for life of company</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-navy">Health and Safety</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Document Type</th>
                <th className="border border-gray-200 p-3 text-left">Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Accident book / RIDDOR reports</td><td className="border border-gray-200 p-3">3 years from date of entry</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">H&amp;S training records</td><td className="border border-gray-200 p-3">Duration of employment + 6 years</td></tr>
              <tr><td className="border border-gray-200 p-3">Risk assessments</td><td className="border border-gray-200 p-3">While current + 5 years after superseded</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Asbestos records</td><td className="border border-gray-200 p-3">Life of building / 40 years minimum</td></tr>
              <tr><td className="border border-gray-200 p-3">COSHH records</td><td className="border border-gray-200 p-3">40 years (if hazardous exposure)</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-navy">Healthcare Records</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="border border-gray-200 p-3 text-left">Record Type</th>
                <th className="border border-gray-200 p-3 text-left">Retention Period</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-gray-200 p-3">Adult patient records (NHS)</td><td className="border border-gray-200 p-3">8 years after last treatment</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Children&apos;s records</td><td className="border border-gray-200 p-3">Until 25th birthday (26th if treatment ended at 17)</td></tr>
              <tr><td className="border border-gray-200 p-3">Maternity records</td><td className="border border-gray-200 p-3">25 years</td></tr>
              <tr className="bg-gray-50"><td className="border border-gray-200 p-3">Mental health records</td><td className="border border-gray-200 p-3">20 years after last contact</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-navy">How to Implement Retention in Your DMS</h2>
        <p>A document management system with retention labels automates all of the above. You assign a retention label to each document type when scanning — the label contains the retention period. The DMS automatically flags documents for review when they expire and can be configured to auto-delete or archive. This eliminates the risk of over-retention (GDPR breach) or premature deletion (legal obligation breach) without any manual calendar management.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Automate retention in your DMS</h2>
        <p className="text-gray-300 mb-6">Compare DMS platforms with built-in UK retention management.</p>
        <Link href="/dms" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Compare DMS Systems →</Link>
        <Link href="/guides/document-management-gdpr-compliance-uk" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">GDPR Compliance Guide →</Link>
      </div>
    </main>
  );
}
