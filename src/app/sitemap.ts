import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://scan2dms.co.uk";

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/solutions/scan-to-sharepoint", priority: 0.9 },
    { path: "/solutions/scan-to-onedrive", priority: 0.8 },
    { path: "/solutions/scan-to-network-folder", priority: 0.8 },
    { path: "/solutions/scan-to-email", priority: 0.8 },
    { path: "/industries/legal", priority: 0.8 },
    { path: "/industries/finance", priority: 0.8 },
    { path: "/industries/healthcare", priority: 0.8 },
    { path: "/industries/education", priority: 0.8 },
    { path: "/products/escan-a450-pro", priority: 0.9 },
    // Pillar guides — high priority
    { path: "/guides", priority: 0.9 },
    { path: "/guides/going-paperless-uk-businesses", priority: 0.9 },
    { path: "/guides/how-to-choose-document-management-system-uk", priority: 0.9 },
    { path: "/guides/scan-to-dms-document-scanning-workflows", priority: 0.9 },
    { path: "/guides/document-management-gdpr-compliance-uk", priority: 0.9 },
    { path: "/guides/find-hire-dms-consultant-uk", priority: 0.9 },
    // Pillar 1 cluster posts — Going Paperless
    { path: "/guides/going-paperless-cost-uk-sme", priority: 0.7 },
    { path: "/guides/going-paperless-checklist-uk", priority: 0.7 },
    { path: "/guides/hidden-cost-of-paper-in-business", priority: 0.7 },
    { path: "/guides/scan-to-email-vs-scan-to-dms", priority: 0.7 },
    { path: "/guides/digitise-paper-files-backlog", priority: 0.7 },
    { path: "/guides/going-paperless-law-firm-uk", priority: 0.7 },
    { path: "/guides/going-paperless-manufacturing-shopfloor", priority: 0.7 },
    { path: "/guides/is-sharepoint-good-enough-as-dms", priority: 0.7 },
    { path: "/guides/train-team-go-paperless", priority: 0.7 },
    { path: "/guides/paper-vs-digital-when-manual-wins", priority: 0.7 },
    // Pillar 5 cluster posts — DMS Consultant
    { path: "/guides/what-does-dms-consultant-do", priority: 0.7 },
    { path: "/guides/dms-consultant-cost-uk", priority: 0.7 },
    { path: "/guides/dms-implementation-questions-ask-consultant", priority: 0.7 },
    { path: "/guides/dms-implementation-failed-lessons", priority: 0.7 },
    { path: "/guides/document-management-strategy-uk-sme", priority: 0.7 },
    { path: "/guides/dms-project-brief-template", priority: 0.7 },
    { path: "/guides/dms-consultant-vs-vendor-implementation", priority: 0.7 },
    { path: "/guides/dms-consultants-manufacturing-sector", priority: 0.7 },
    { path: "/guides/dms-consultant-red-flags", priority: 0.7 },
    { path: "/guides/dms-consultant-sharepoint-specialist", priority: 0.7 },
    // Pillar 4 cluster posts — GDPR Compliance
    { path: "/guides/uk-document-retention-periods-guide", priority: 0.7 },
    { path: "/guides/gdpr-paper-documents-business-uk", priority: 0.7 },
    { path: "/guides/handle-subject-access-request-dms", priority: 0.7 },
    { path: "/guides/what-is-audit-trail-dms", priority: 0.7 },
    { path: "/guides/secure-document-disposal-uk", priority: 0.7 },
    { path: "/guides/gdpr-retention-schedule-template", priority: 0.7 },
    { path: "/guides/is-sharepoint-gdpr-compliant", priority: 0.7 },
    { path: "/guides/data-residency-post-brexit-dms", priority: 0.7 },
    { path: "/guides/gdpr-compliance-checklist-law-firms", priority: 0.7 },
    { path: "/guides/gdpr-compliance-checklist-accountants", priority: 0.7 },
    // Pillar 2 cluster posts
    { path: "/guides/sharepoint-vs-dedicated-dms-uk", priority: 0.7 },
    { path: "/guides/best-dms-law-firms-uk", priority: 0.7 },
    { path: "/guides/best-dms-accountants-finance-uk", priority: 0.7 },
    { path: "/guides/best-dms-healthcare-nhs-uk", priority: 0.7 },
    { path: "/guides/free-vs-paid-dms-uk", priority: 0.7 },
    { path: "/guides/migrate-shared-drive-to-dms", priority: 0.7 },
    { path: "/guides/document-management-remote-hybrid-teams-uk", priority: 0.7 },
    { path: "/guides/cloud-dms-vs-on-premise-uk", priority: 0.7 },
    { path: "/guides/dms-roi-calculation-uk", priority: 0.7 },
    { path: "/guides/dms-implementation-guide-uk", priority: 0.7 },
    { path: "/guides/best-dms-manufacturing-uk", priority: 0.7 },
    // Foundation guides
    { path: "/guides/what-is-scan-to-dms", priority: 0.7 },
    { path: "/guides/why-pc-free-scanning", priority: 0.7 },
    { path: "/guides/sharepoint-scanner-setup", priority: 0.7 },
    { path: "/about", priority: 0.5 },
    { path: "/contact", priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority,
  }));
}
