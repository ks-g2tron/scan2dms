import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMS Consultants for UK Manufacturing: What to Look For",
  description: "Manufacturing document management has specific requirements — quality records, ISO 9001, shop floor access. What to look for in a consultant with manufacturing experience.",
  alternates: { canonical: "https://scan2dms.co.uk/guides/dms-consultants-manufacturing-sector" },
};

export default function DmsConsultantsManufacturingPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-blue-accent font-semibold text-sm uppercase tracking-wide mb-2">Guide</p>
      <h1 className="text-4xl font-extrabold text-navy mb-6">DMS Consultants for UK Manufacturing: What to Look For</h1>
      <div className="prose prose-lg text-gray-700 space-y-6">
        <p>Manufacturing document management has requirements that a generic DMS consultant may not understand. Our main guide covers <Link href="/guides/find-hire-dms-consultant-uk" className="text-blue-600 hover:underline">how to find and hire a DMS consultant</Link>. This article covers the manufacturing-specific requirements you should verify before hiring.</p>

        <h2 className="text-2xl font-bold text-navy">What Makes Manufacturing DMS Different</h2>
        <p>Manufacturing organisations manage several document types that don&apos;t exist in most other sectors:</p>
        <ul>
          <li><strong>Quality documentation:</strong> Inspection reports, non-conformance reports, corrective action reports, batch records — often linked to specific production runs and required for customer audits</li>
          <li><strong>Technical documentation:</strong> Engineering drawings, CAD files, BOMs (Bills of Materials), work instructions — documents with strict version control requirements where using an outdated version causes production errors</li>
          <li><strong>Certificates and approvals:</strong> Material test certificates, supplier approvals, customer-specific quality plans — often required for traceability in aerospace, automotive, medical device sectors</li>
          <li><strong>Shopfloor access:</strong> Workers on the production floor need to access work instructions, quality documents, and job cards at the machine — from tablets, terminals, or shared PCs, not desktop workstations</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">ISO 9001 and Quality Management System Requirements</h2>
        <p>ISO 9001:2015 clause 7.5 specifically addresses documented information — what must be maintained, how it must be controlled, and what must be retained as evidence. A DMS consultant working in manufacturing should understand:</p>
        <ul>
          <li>The difference between &quot;documented information to be maintained&quot; (controlled documents: procedures, work instructions) and &quot;documented information to be retained&quot; (quality records: inspection reports, NCRs)</li>
          <li>Version control requirements — only the current approved version should be accessible at the point of use</li>
          <li>Approval workflows — new documents and revisions require approval by defined individuals before release</li>
          <li>External documents (customer drawings, standards) require identification and control</li>
          <li>Obsolete documents must be protected from unintended use</li>
        </ul>
        <p>A consultant without ISO 9001 knowledge will miss these requirements in the DMS configuration. Your ISO 9001 certification auditor will find them.</p>

        <h2 className="text-2xl font-bold text-navy">ERP Integration</h2>
        <p>Most manufacturers run an ERP system (SAP, Epicor, Sage 200, Access, SYSPRO, Infor). Documents often need to link to ERP records: an inspection report links to a production order; a delivery note links to a sales order; a job card links to a works order. A consultant with manufacturing experience understands what these integrations need to look like and can specify them properly.</p>

        <h2 className="text-2xl font-bold text-navy">Sector-Specific Compliance</h2>
        <p><strong>Aerospace (AS9100):</strong> Even stricter document control than ISO 9001. FOD (Foreign Object Debris) prevention documentation, first article inspection reports, flow-down requirements from prime contractors.</p>
        <p><strong>Automotive (IATF 16949):</strong> PPAP documentation (Production Part Approval Process), control plans, MSA studies, SPC records — all need to be managed and traceable.</p>
        <p><strong>Medical devices (ISO 13485 / MDR):</strong> Design history files, Device Master Records, Device History Records — strict retention requirements and traceability.</p>
        <p>If your manufacturing business operates under any of these standards, your DMS consultant needs specific experience with the documentation requirements, not just general document management experience.</p>

        <h2 className="text-2xl font-bold text-navy">Questions to Ask a Manufacturing DMS Consultant</h2>
        <ul>
          <li>Have you implemented a DMS for an ISO 9001-certified manufacturer? Have you supported their surveillance audit?</li>
          <li>How do you handle engineering drawing version control — specifically ensuring only the current approved revision is accessible?</li>
          <li>What&apos;s your experience with ERP integration? Which ERP systems have you connected to a DMS?</li>
          <li>Have you set up shopfloor document access — tablets, terminals, or shared devices on the production floor?</li>
          <li>Have you worked with manufacturers under IATF 16949 / AS9100 / ISO 13485?</li>
        </ul>

        <h2 className="text-2xl font-bold text-navy">The Right DMS for Manufacturing</h2>
        <p>Generic DMS platforms often lack manufacturing-specific features. Platforms with strong manufacturing track records include: M-Files (strong metadata-driven retrieval for technical documents), DocuWare (good for quality and production documentation), SharePoint with a specialist overlay, or sector-specific systems like Ideagen Quality (formerly Qualtrax) for quality management documentation. A consultant with manufacturing experience knows which platform suits which manufacturer type.</p>
      </div>
      <div className="mt-16 bg-navy rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Find a manufacturing DMS consultant</h2>
        <p className="text-gray-300 mb-6">Specialists with ISO 9001, ERP integration, and shopfloor experience.</p>
        <Link href="/consultants" className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors mr-4">Find a Consultant →</Link>
        <Link href="/guides/best-dms-manufacturing-uk" className="inline-block border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-navy transition-colors">Best DMS for Manufacturing →</Link>
      </div>
    </main>
  );
}
