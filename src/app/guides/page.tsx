import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides — Document Scanning & DMS | scan2dms",
  description: "Practical guides on document scanning, DMS setup, going paperless, GDPR compliance, and finding a consultant. For UK businesses.",
  alternates: { canonical: "https://scan2dms.co.uk/guides" },
};

const sections = [
  {
    title: "Going Paperless",
    slug: "going-paperless",
    icon: "📋",
    pillar: { href: "/guides/going-paperless-uk-businesses", title: "The Complete Guide to Going Paperless for UK Businesses" },
    posts: [
      { href: "/guides/going-paperless-checklist-uk", title: "Going Paperless Checklist: 20 Steps for UK Businesses" },
      { href: "/guides/going-paperless-cost-uk-sme", title: "How Much Does Going Paperless Cost? UK SME Guide" },
      { href: "/guides/going-paperless-manufacturing-shopfloor", title: "Going Paperless on the Manufacturing Shopfloor" },
      { href: "/guides/going-paperless-law-firm-uk", title: "Going Paperless in a Law Firm: What's Different" },
      { href: "/guides/digitise-paper-files-backlog", title: "How to Digitise a Backlog of Paper Files" },
      { href: "/guides/train-team-go-paperless", title: "How to Train Your Team to Go Paperless" },
      { href: "/guides/hidden-cost-of-paper-in-business", title: "The Hidden Cost of Paper in Business" },
      { href: "/guides/paper-vs-digital-when-manual-wins", title: "Paper vs Digital: When Manual Still Wins" },
      { href: "/guides/document-management-remote-hybrid-teams-uk", title: "Document Management for Remote and Hybrid Teams" },
      { href: "/guides/document-scanning-iso-9001-quality-management", title: "Document Scanning for ISO 9001 Quality Management" },
    ],
  },
  {
    title: "Choosing a DMS",
    slug: "choosing-dms",
    icon: "🗂️",
    pillar: { href: "/guides/how-to-choose-document-management-system-uk", title: "How to Choose a Document Management System: UK Buyer's Guide" },
    posts: [
      { href: "/guides/sharepoint-vs-dedicated-dms-uk", title: "SharePoint vs Dedicated DMS: Which is Right for You?" },
      { href: "/guides/is-sharepoint-good-enough-as-dms", title: "Is SharePoint Good Enough as a DMS?" },
      { href: "/guides/cloud-dms-vs-on-premise-uk", title: "Cloud DMS vs On-Premise: UK Business Guide" },
      { href: "/guides/free-vs-paid-dms-uk", title: "Free vs Paid DMS: When to Upgrade" },
      { href: "/guides/best-dms-law-firms-uk", title: "Best Document Management Systems for UK Law Firms" },
      { href: "/guides/best-dms-accountants-finance-uk", title: "Best DMS for UK Accountants and Finance Teams" },
      { href: "/guides/best-dms-healthcare-nhs-uk", title: "Best DMS for Healthcare and NHS Organisations" },
      { href: "/guides/best-dms-manufacturing-uk", title: "Best DMS for UK Manufacturing Businesses" },
      { href: "/guides/dms-roi-calculation-uk", title: "How to Calculate the ROI of a DMS" },
      { href: "/guides/migrate-shared-drive-to-dms", title: "How to Migrate from a Shared Drive to a DMS" },
      { href: "/guides/dms-implementation-guide-uk", title: "DMS Implementation Guide: From Selection to Go-Live" },
    ],
  },
  {
    title: "Scan to DMS",
    slug: "scan-to-dms",
    icon: "🖨️",
    pillar: { href: "/guides/scan-to-dms-document-scanning-workflows", title: "Scan to DMS: Complete Guide to Document Scanning Workflows" },
    posts: [
      { href: "/guides/what-is-scan-to-dms", title: "What is Scan to DMS?" },
      { href: "/guides/why-pc-free-scanning", title: "Why PC-Free Scanning?" },
      { href: "/guides/scan-to-sharepoint-without-pc-setup", title: "How to Scan to SharePoint Without a PC" },
      { href: "/guides/sharepoint-scanner-setup", title: "SharePoint Scanner Setup Guide" },
      { href: "/guides/hp-scan-to-sharepoint-stopped-working-fix", title: "HP Scan to SharePoint Stopped Working? Here's the Fix" },
      { href: "/guides/connect-scanner-sharepoint-online-modern-auth", title: "Connect Your Scanner to SharePoint Online with Modern Auth" },
      { href: "/guides/scan-to-sharepoint-vs-onedrive", title: "Scan to SharePoint vs OneDrive: Which to Use?" },
      { href: "/guides/scan-to-email-vs-scan-to-dms", title: "Scan to Email vs Scan to DMS: What's the Difference?" },
      { href: "/guides/barcode-document-splitting-explained", title: "Barcode Document Splitting Explained" },
      { href: "/guides/ocr-explained-how-scanners-make-documents-searchable", title: "OCR Explained: How Scanners Make Documents Searchable" },
      { href: "/guides/pc-free-network-scanner-buying-guide-uk", title: "PC-Free Network Scanner Buying Guide (UK)" },
      { href: "/guides/best-document-scanners-manufacturing-shopfloor", title: "Best Document Scanners for Manufacturing Shopfloors" },
      { href: "/guides/scan-to-dms-healthcare-nhs-data-security", title: "Scan to DMS in Healthcare: NHS Data Security Guidance" },
    ],
  },
  {
    title: "GDPR & Compliance",
    slug: "gdpr-compliance",
    icon: "🔒",
    pillar: { href: "/guides/document-management-gdpr-compliance-uk", title: "Document Management and GDPR Compliance" },
    posts: [
      { href: "/guides/uk-document-retention-periods-guide", title: "UK Document Retention Periods: A Plain-English Guide" },
      { href: "/guides/gdpr-retention-schedule-template", title: "GDPR Retention Schedule Template for UK Businesses" },
      { href: "/guides/gdpr-paper-documents-business-uk", title: "GDPR and Paper Documents: What UK Businesses Must Know" },
      { href: "/guides/handle-subject-access-request-dms", title: "How to Handle a Subject Access Request Using Your DMS" },
      { href: "/guides/what-is-audit-trail-dms", title: "What is an Audit Trail in a DMS — and Why It Matters?" },
      { href: "/guides/secure-document-disposal-uk", title: "Secure Document Disposal: UK Business Requirements" },
      { href: "/guides/is-sharepoint-gdpr-compliant", title: "Is SharePoint GDPR Compliant?" },
      { href: "/guides/data-residency-post-brexit-dms", title: "Data Residency After Brexit: What DMS Buyers Need to Know" },
      { href: "/guides/gdpr-compliance-checklist-law-firms", title: "GDPR Document Management Checklist for Law Firms" },
      { href: "/guides/gdpr-compliance-checklist-accountants", title: "GDPR Document Management Checklist for Accountants" },
    ],
  },
  {
    title: "DMS Consultants",
    slug: "dms-consultants",
    icon: "👤",
    pillar: { href: "/guides/find-hire-dms-consultant-uk", title: "How to Find and Hire a DMS Consultant in the UK" },
    posts: [
      { href: "/guides/what-does-dms-consultant-do", title: "What Does a DMS Consultant Actually Do?" },
      { href: "/guides/dms-consultant-cost-uk", title: "How Much Does a DMS Consultant Cost in the UK?" },
      { href: "/guides/dms-implementation-questions-ask-consultant", title: "20 Questions to Ask a DMS Consultant Before You Hire Them" },
      { href: "/guides/dms-implementation-failed-lessons", title: "Why DMS Implementations Fail (and How to Avoid It)" },
      { href: "/guides/document-management-strategy-uk-sme", title: "Document Management Strategy for UK SMEs: Where to Start" },
      { href: "/guides/dms-project-brief-template", title: "DMS Project Brief Template" },
      { href: "/guides/dms-consultant-vs-vendor-implementation", title: "DMS Consultant vs Vendor Implementation Team" },
      { href: "/guides/dms-consultants-manufacturing-sector", title: "DMS Consultants for UK Manufacturing: What to Look For" },
      { href: "/guides/dms-consultant-red-flags", title: "7 Red Flags When Hiring a DMS Consultant" },
      { href: "/guides/dms-consultant-sharepoint-specialist", title: "Do You Need a SharePoint Specialist or a DMS Consultant?" },
    ],
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Guides</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Practical advice on document scanning, DMS selection, going paperless, and GDPR compliance — for UK businesses.
          </p>
          <p className="text-gray-400 mt-2 text-sm">{sections.reduce((n, s) => n + 1 + s.posts.length, 0)} guides across {sections.length} topics</p>
        </div>
      </section>

      {/* Quick jump nav */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 overflow-x-auto py-3 text-sm">
            {sections.map((s) => (
              <a key={s.slug} href={`#${s.slug}`} className="whitespace-nowrap text-gray-600 hover:text-navy font-medium flex items-center gap-1">
                <span>{s.icon}</span> {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {sections.map((section) => (
          <section key={section.slug} id={section.slug}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{section.icon}</span>
              <h2 className="text-2xl font-bold text-navy">{section.title}</h2>
            </div>

            {/* Pillar card */}
            <Link
              href={section.pillar.href}
              className="block bg-navy text-white rounded-xl p-6 mb-6 hover:bg-gray-800 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold bg-white/20 px-2 py-1 rounded mb-2 inline-block">Complete Guide</span>
                  <h3 className="text-lg font-bold group-hover:underline">{section.pillar.title}</h3>
                </div>
                <span className="text-white/60 text-2xl ml-4">→</span>
              </div>
            </Link>

            {/* Cluster posts grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.posts.map((post) => (
                <Link
                  key={post.href}
                  href={post.href}
                  className="bg-white rounded-lg p-5 border border-gray-100 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <span className="text-blue-500 text-xs mt-2 inline-block group-hover:underline">Read →</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Find a DMS consultant, compare systems, or get a quote on the Plustek eScan.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/consultants" className="bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">Find a Consultant →</Link>
            <Link href="/dms" className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Compare DMS Systems →</Link>
            <Link href="/contact" className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Get a Quote →</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
