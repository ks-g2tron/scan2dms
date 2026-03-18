import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Document Scanning for Schools and Universities",
  description:
    "Streamline admissions, student records, and admin paperwork with PC-free scanning to SharePoint. Built for UK schools, colleges, and universities.",
  alternates: { canonical: "https://scan2dms.com/industries/education" },
};

export default function EducationPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Document Scanning for Education
          </h1>
          <p className="text-lg text-gray-300">
            Digitise admissions paperwork, student records, and Ofsted documentation — directly into SharePoint, without IT overhead.
          </p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Paper in Education</h2>
          <p className="text-gray-700 mb-4">
            Schools, colleges, and universities process significant volumes of paperwork: admissions applications, consent forms, medical records, SEND (Special Educational Needs and Disabilities) documentation, safeguarding records, staff HR files, and Ofsted preparation materials.
          </p>
          <p className="text-gray-700">
            Many educational institutions have adopted Microsoft 365 and SharePoint for staff collaboration and document management. But the link between incoming paper and the digital system is often a weak point — relying on ageing MFPs with unreliable scan-to-email workflows, or USB scanners tethered to a single admin PC.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">How the eScan Supports Education</h2>
          <p className="text-gray-700 mb-4">
            The Plustek eScan can be placed in the school office, admissions department, SENCO office, or HR area. Staff scan documents directly to SharePoint folders organised by student, department, or function — with no PC in the loop.
          </p>
          <p className="text-gray-700 mb-4">
            Pre-configured scan profiles mean admin staff do not need to make filing decisions at the point of scanning. A profile labelled &quot;Year 7 Admissions&quot; sends scans to the correct SharePoint library automatically. A profile labelled &quot;SEND Records&quot; files to the appropriate restricted-access folder.
          </p>
          <p className="text-gray-700">
            The simple touchscreen interface requires minimal training — important in environments with high staff turnover or volunteer support. And because no drivers or PC connections are needed, the device works reliably without IT support.
          </p>
        </section>

        <section className="mb-10 bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-navy mb-4">Case Study: Ashfield Academy</h2>
          <p className="text-gray-700 mb-4">
            Ashfield Academy is a secondary school in the West Midlands with 1,100 pupils and 80 staff. The school office processes approximately 30 paper documents per day — consent forms, medical notes, absence letters, SEND referrals, and supplier invoices.
          </p>
          <p className="text-gray-700 mb-4">
            The school&apos;s existing MFP (multifunction printer) had a scan-to-email function, but scanned documents went to a shared inbox where they were manually saved and re-uploaded to SharePoint by admin staff. During busy periods like admissions season, the backlog grew to several days.
          </p>
          <p className="text-gray-700">
            The eScan was placed in the main office with profiles for Admissions, SEND, Finance, and General Admin. Documents now go directly to the correct SharePoint folder as they are scanned. The admin team estimated a 60% reduction in time spent on document filing, and the backlog issue was eliminated entirely.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy mb-4">Key Benefits for Education</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Scan directly to SharePoint — admissions, SEND, HR, and finance folders</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Pre-configured profiles prevent misfiling and simplify workflows</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Touchscreen requires minimal training for office and support staff</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>No PC or driver dependency — reliable in IT-lean environments</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Supports restricted-access folders for safeguarding documents</li>
            <li className="flex items-start gap-3"><span className="text-blue-accent font-bold">•</span>Handles batch scanning for admissions season and Ofsted prep</li>
          </ul>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Simplify Document Management for Your School</h2>
          <p className="text-gray-600 mb-6">Talk to a UK specialist about scanning solutions for education.</p>
          <Link href="/contact" className="bg-blue-accent hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-block">
            Get a Quote
          </Link>
        </section>
      </article>
    </>
  );
}
