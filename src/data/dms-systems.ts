export interface DMSSystem {
  name: string;
  slug: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  pricingModel: "per_user" | "flat" | "custom" | "free_tier";
  pricingNotes: string;
  deployment: "cloud" | "on_premise" | "hybrid";
  sectors: string[];
  integrations: string[];
  scanCompatible: boolean;
  scanNotes: string;
}

export const dmsSystems: DMSSystem[] = [
  {
    name: "Microsoft SharePoint",
    slug: "microsoft-sharepoint",
    emoji: "📘",
    shortDescription:
      "Enterprise content management and collaboration platform deeply integrated with Microsoft 365.",
    fullDescription:
      "Microsoft SharePoint is the backbone of document management for millions of organisations worldwide. As part of the Microsoft 365 ecosystem, it offers document libraries, version control, metadata tagging, workflow automation via Power Automate, and tight integration with Teams, OneDrive, and Outlook. SharePoint Online is cloud-hosted, while SharePoint Server can run on-premise or in hybrid configurations.",
    features: [
      "Document libraries with version history",
      "Metadata-driven content organisation",
      "Power Automate workflow integration",
      "Advanced search with Microsoft Search",
      "Role-based access control and sensitivity labels",
      "Co-authoring with Office apps",
      "Records management and retention policies",
      "Custom lists and site templates",
    ],
    pricingModel: "per_user",
    pricingNotes:
      "Included in Microsoft 365 Business Basic (from ~£4.50/user/month). Standalone SharePoint Online Plan 1 from ~£3.80/user/month.",
    deployment: "hybrid",
    sectors: ["Legal", "Finance", "Healthcare", "Education", "Public Sector", "General"],
    integrations: ["Microsoft Teams", "OneDrive", "Outlook", "Power Automate", "Power BI", "Dynamics 365"],
    scanCompatible: true,
    scanNotes:
      "Native scan-to-SharePoint support via Plustek eScan. Documents land directly in SharePoint document libraries with metadata.",
  },
  {
    name: "DocuWare",
    slug: "docuware",
    emoji: "📂",
    shortDescription:
      "Cloud-native document management and workflow automation for mid-market businesses.",
    fullDescription:
      "DocuWare is a cloud-first document management platform designed for organisations that need structured workflows, intelligent indexing, and strong compliance features without heavy IT overhead. It excels at automating accounts payable, HR onboarding, and contract management. DocuWare is available as a cloud service or on-premise installation.",
    features: [
      "Intelligent document indexing",
      "Workflow automation and task routing",
      "Full-text OCR search",
      "Digital stamps and annotations",
      "Retention and compliance policies",
      "Web and mobile access",
      "Email integration and archiving",
      "Prebuilt workflow templates",
    ],
    pricingModel: "per_user",
    pricingNotes:
      "Cloud pricing starts around £250/user/year. On-premise licensing available on request.",
    deployment: "hybrid",
    sectors: ["Finance", "Healthcare", "Manufacturing", "General"],
    integrations: ["Microsoft 365", "SAP", "Sage", "QuickBooks", "Outlook"],
    scanCompatible: true,
    scanNotes:
      "Supports TWAIN/ISIS scanning and network scanner integration. Plustek eScan can scan to DocuWare via network folder or email connector.",
  },
  {
    name: "M-Files",
    slug: "m-files",
    emoji: "🗃️",
    shortDescription:
      "Metadata-driven DMS that organises documents by what they are, not where they are stored.",
    fullDescription:
      "M-Files takes a fundamentally different approach to document management by organising content based on metadata rather than folder structures. This means users find documents by their properties — client, project, document type — rather than remembering which folder they saved to. M-Files connects to existing repositories (SharePoint, network drives, legacy DMS) and presents a unified view.",
    features: [
      "Metadata-driven organisation (no folder dependency)",
      "AI-powered automatic classification",
      "External repository connectors",
      "Version control and check-in/check-out",
      "Automated workflows and approvals",
      "Compliance and audit trails",
      "Offline access and mobile apps",
      "Integration with CRM and ERP systems",
    ],
    pricingModel: "per_user",
    pricingNotes:
      "Subscription pricing from approximately £35/user/month. Volume discounts available.",
    deployment: "hybrid",
    sectors: ["Legal", "Finance", "Manufacturing", "Construction", "General"],
    integrations: ["SharePoint", "Salesforce", "SAP", "Microsoft 365", "AutoCAD"],
    scanCompatible: true,
    scanNotes:
      "Supports scan profiles with automatic metadata tagging. Plustek eScan can deliver scans to M-Files via network folder integration.",
  },
  {
    name: "Laserfiche",
    slug: "laserfiche",
    emoji: "📊",
    shortDescription:
      "Enterprise content management with powerful workflow automation and forms processing.",
    fullDescription:
      "Laserfiche is a well-established enterprise content management platform popular with government, education, and financial services organisations. It combines document management with electronic forms, workflow automation, and records management. Laserfiche Cloud launched in recent years to complement its long-standing on-premise offering.",
    features: [
      "Electronic forms with auto-population",
      "Business process automation",
      "Records management with retention schedules",
      "Full-text search and metadata fields",
      "Role-based security and audit trails",
      "Public portal for citizen/client access",
      "Robotic process automation (RPA)",
      "Cloud and self-hosted options",
    ],
    pricingModel: "custom",
    pricingNotes:
      "Custom pricing based on user count and modules. Typically suited to mid-to-large organisations.",
    deployment: "hybrid",
    sectors: ["Public Sector", "Education", "Finance", "Healthcare"],
    integrations: ["Microsoft 365", "Salesforce", "SAP", "Active Directory", "DocuSign"],
    scanCompatible: true,
    scanNotes:
      "Native scan import with zone OCR for automatic indexing. Network scanners like Plustek eScan can deliver to Laserfiche via watched folders.",
  },
  {
    name: "OpenText Content Suite",
    slug: "opentext-content-suite",
    emoji: "🏢",
    shortDescription:
      "Large-scale enterprise content management for complex, regulated organisations.",
    fullDescription:
      "OpenText Content Suite (formerly Documentum) is one of the largest enterprise content management platforms globally. It serves heavily regulated industries that require rigorous governance, massive scalability, and deep integration with SAP and other enterprise systems. OpenText offers a broad portfolio including records management, archiving, and intelligent capture.",
    features: [
      "Enterprise-scale content repository",
      "Records management and compliance",
      "SAP Extended ECM integration",
      "Intelligent capture and classification",
      "Advanced security and access controls",
      "Lifecycle management and archiving",
      "Business workspace views",
      "Cloud, on-premise, and hybrid deployment",
    ],
    pricingModel: "custom",
    pricingNotes:
      "Enterprise pricing — contact OpenText directly. Typically six-figure annual contracts for large deployments.",
    deployment: "hybrid",
    sectors: ["Finance", "Public Sector", "Healthcare", "Manufacturing", "Legal"],
    integrations: ["SAP", "Microsoft 365", "Salesforce", "Oracle", "ServiceNow"],
    scanCompatible: true,
    scanNotes:
      "Integrates with high-volume capture solutions. Plustek eScan can deliver scans via network folder for import into Content Suite.",
  },
  {
    name: "Hyland OnBase",
    slug: "hyland-onbase",
    emoji: "🔷",
    shortDescription:
      "Enterprise content services platform with deep vertical solutions for healthcare and government.",
    fullDescription:
      "Hyland OnBase is an enterprise content services platform with particularly strong offerings for healthcare (integrating with Epic, Cerner), higher education, government, and financial services. It combines document management, workflow, case management, and capture in a single platform with extensive pre-built vertical solutions.",
    features: [
      "Healthcare EMR integration (Epic, Cerner)",
      "Case management and workflow",
      "Intelligent capture and classification",
      "Integration with 500+ enterprise applications",
      "Mobile access and offline sync",
      "Records management and retention",
      "E-forms and digital signatures",
      "Cloud, on-premise, and hosted options",
    ],
    pricingModel: "custom",
    pricingNotes:
      "Custom enterprise pricing. Contact Hyland or a certified reseller for quotes.",
    deployment: "hybrid",
    sectors: ["Healthcare", "Public Sector", "Education", "Finance"],
    integrations: ["Epic", "Cerner", "SAP", "Microsoft 365", "Workday", "Ellucian"],
    scanCompatible: true,
    scanNotes:
      "Supports distributed capture via network scanners. Plustek eScan can deliver to OnBase through watched folder or Unity API integration.",
  },
  {
    name: "Alfresco",
    slug: "alfresco",
    emoji: "🌿",
    shortDescription:
      "Open-source content management platform for enterprises that want flexibility and control.",
    fullDescription:
      "Alfresco (now part of Hyland) is an open-source enterprise content management platform that gives organisations flexibility to customise and extend their DMS. It offers both a Community Edition (free, open-source) and an Enterprise Edition with commercial support, clustering, and advanced features. Alfresco is popular with organisations that want to avoid vendor lock-in.",
    features: [
      "Open-source Community Edition available",
      "Standards-based (CMIS, REST API)",
      "Document management with version control",
      "Workflow engine (Activiti-based)",
      "Full-text search (Solr/Elasticsearch)",
      "Records management module",
      "Extensive API for customisation",
      "Cloud-native deployment option (Alfresco Cloud)",
    ],
    pricingModel: "free_tier",
    pricingNotes:
      "Community Edition is free. Enterprise Edition pricing on request — typically per-CPU or per-user licensing.",
    deployment: "hybrid",
    sectors: ["Public Sector", "Finance", "Healthcare", "Education", "General"],
    integrations: ["Microsoft 365", "SAP", "Salesforce", "Google Workspace", "Slack"],
    scanCompatible: true,
    scanNotes:
      "Supports scan import via CMIS or REST API. Plustek eScan can deliver to Alfresco via network folder or email ingestion.",
  },
  {
    name: "Nuxeo",
    slug: "nuxeo",
    emoji: "⚙️",
    shortDescription:
      "Cloud-native, API-first content services platform built for developers and digital-first organisations.",
    fullDescription:
      "Nuxeo (now part of Hyland) is a modern, API-first content services platform designed for organisations that need to embed content management into their applications and workflows. Built on a cloud-native architecture with Kubernetes support, Nuxeo excels at handling large volumes of digital assets, technical documents, and rich media alongside traditional business documents.",
    features: [
      "API-first architecture (REST, GraphQL)",
      "Cloud-native with Kubernetes support",
      "AI-powered content enrichment",
      "Digital asset management",
      "Flexible content modelling",
      "Elasticsearch-powered search",
      "Workflow and task management",
      "Renditions and media processing",
    ],
    pricingModel: "custom",
    pricingNotes:
      "Enterprise pricing based on usage and deployment. Contact Hyland/Nuxeo for details.",
    deployment: "cloud",
    sectors: ["Manufacturing", "Finance", "Public Sector", "General"],
    integrations: ["AWS", "Azure", "Google Cloud", "Salesforce", "SAP", "Slack"],
    scanCompatible: true,
    scanNotes:
      "REST API allows flexible scan integration. Plustek eScan can deliver via network folder for Nuxeo import.",
  },
  {
    name: "LogicalDOC",
    slug: "logicaldoc",
    emoji: "📑",
    shortDescription:
      "Intuitive document management system with strong search and an easy learning curve.",
    fullDescription:
      "LogicalDOC is a document management system known for its intuitive interface and straightforward deployment. Available in both Community (open-source) and Enterprise editions, it provides solid DMS fundamentals — version control, full-text search, tagging, and workflow — without the complexity of larger enterprise platforms. It is a good fit for SMEs that need a capable DMS quickly.",
    features: [
      "Drag-and-drop document upload",
      "Full-text search with OCR",
      "Version control and check-out",
      "Tagging and metadata",
      "Workflow automation",
      "WebDAV and CMIS support",
      "Barcode and zone OCR processing",
      "Multi-language support",
    ],
    pricingModel: "free_tier",
    pricingNotes:
      "Community Edition is free. Enterprise from approximately €1,500/year for small teams.",
    deployment: "hybrid",
    sectors: ["General", "Finance", "Legal", "Education"],
    integrations: ["Microsoft Office", "LibreOffice", "Outlook", "Zapier"],
    scanCompatible: true,
    scanNotes:
      "Supports watched folder import and barcode-based filing. Plustek eScan can scan to a network folder monitored by LogicalDOC.",
  },
  {
    name: "Zoho Docs",
    slug: "zoho-docs",
    emoji: "📒",
    shortDescription:
      "Affordable cloud document management from the Zoho suite, ideal for small businesses.",
    fullDescription:
      "Zoho Docs is part of the broader Zoho ecosystem and provides cloud-based document storage, sharing, and collaboration at an affordable price point. While not as feature-rich as dedicated enterprise DMS platforms, it integrates natively with Zoho CRM, Zoho Projects, and the rest of the Zoho suite, making it a natural choice for existing Zoho customers.",
    features: [
      "Cloud storage with folder structure",
      "Real-time collaboration and editing",
      "File sharing with permissions",
      "Integration with Zoho ecosystem",
      "Offline sync via Zoho WorkDrive",
      "Admin console and audit logs",
      "Mobile apps for iOS and Android",
      "Version history and restore",
    ],
    pricingModel: "per_user",
    pricingNotes:
      "Zoho WorkDrive from ~£2/user/month. Included in some Zoho One bundles (~£30/user/month for all Zoho apps).",
    deployment: "cloud",
    sectors: ["General", "Retail", "Education"],
    integrations: ["Zoho CRM", "Zoho Projects", "Zoho Sign", "Slack", "Zapier"],
    scanCompatible: true,
    scanNotes:
      "Supports email-to-upload and folder sync. Plustek eScan can deliver scans to Zoho Docs via email or synced network folder.",
  },
  {
    name: "Google Workspace",
    slug: "google-workspace",
    emoji: "🔵",
    shortDescription:
      "Cloud-native productivity and document management built around Google Drive.",
    fullDescription:
      "Google Workspace (formerly G Suite) centres document management around Google Drive, offering cloud-native storage, real-time collaboration in Docs/Sheets/Slides, and integration with Gmail, Calendar, and Meet. While it lacks some traditional DMS features like formal records management, its simplicity, collaboration capabilities, and AI-powered search make it a popular choice for modern businesses.",
    features: [
      "Google Drive cloud storage",
      "Real-time multi-user collaboration",
      "AI-powered search and suggestions",
      "Shared drives for team content",
      "Labels and metadata (Business Standard+)",
      "DLP and data classification rules",
      "Google Vault for archiving and eDiscovery",
      "Extensive third-party add-on marketplace",
    ],
    pricingModel: "per_user",
    pricingNotes:
      "Business Starter from ~£5/user/month. Business Standard from ~£9.20/user/month adds shared drives and Vault.",
    deployment: "cloud",
    sectors: ["Education", "General", "Retail", "Manufacturing"],
    integrations: ["Gmail", "Google Meet", "Google Chat", "Salesforce", "Slack", "Zapier"],
    scanCompatible: true,
    scanNotes:
      "Plustek eScan can scan to Google Drive via email attachment or via a synced network folder using Google Drive for Desktop.",
  },
  {
    name: "Box",
    slug: "box",
    emoji: "📦",
    shortDescription:
      "Secure cloud content management with strong compliance and enterprise governance features.",
    fullDescription:
      "Box is a cloud content management platform focused on security, compliance, and governance. It is widely used in regulated industries where data residency, access controls, and audit trails are critical. Box goes beyond simple file storage with workflow automation (Box Relay), e-signatures (Box Sign), and a robust developer platform for building custom integrations.",
    features: [
      "Enterprise-grade security and encryption",
      "Granular access controls and watermarking",
      "Box Relay workflow automation",
      "Box Sign electronic signatures",
      "Metadata templates and cascading policies",
      "Box Shield threat detection",
      "1,500+ app integrations",
      "Data residency options (Box Zones)",
    ],
    pricingModel: "per_user",
    pricingNotes:
      "Business plan from ~£12/user/month. Enterprise plans with advanced security features from ~£28/user/month.",
    deployment: "cloud",
    sectors: ["Finance", "Healthcare", "Legal", "Public Sector", "General"],
    integrations: ["Microsoft 365", "Salesforce", "Slack", "ServiceNow", "Okta", "DocuSign"],
    scanCompatible: true,
    scanNotes:
      "Supports email upload and folder sync. Plustek eScan can scan to Box via email connector or synced local folder.",
  },
  {
    name: "Dropbox Business",
    slug: "dropbox-business",
    emoji: "💧",
    shortDescription:
      "Simple, familiar cloud storage and collaboration with smart sync and easy sharing.",
    fullDescription:
      "Dropbox Business provides straightforward cloud file storage and sharing with a focus on simplicity and reliability. Known for its excellent desktop sync (Smart Sync), Dropbox Business adds team management, admin controls, and integrations on top of the consumer Dropbox experience. It suits teams that prioritise ease of use over complex DMS features.",
    features: [
      "Smart Sync — access files without using local storage",
      "File requests and transfer tools",
      "Admin console with activity logging",
      "Dropbox Paper for collaborative docs",
      "Version history (180 days on Business)",
      "Third-party app integrations",
      "Dropbox Sign (formerly HelloSign)",
      "Remote device wipe for security",
    ],
    pricingModel: "per_user",
    pricingNotes:
      "Business plan from ~£10/user/month. Business Plus from ~£16/user/month with extended audit and compliance.",
    deployment: "cloud",
    sectors: ["General", "Education", "Retail", "Construction"],
    integrations: ["Microsoft 365", "Google Workspace", "Slack", "Zoom", "Trello", "Asana"],
    scanCompatible: true,
    scanNotes:
      "Excellent desktop sync makes Dropbox a natural scan destination. Plustek eScan scans to a network folder synced via Dropbox.",
  },
  {
    name: "Egnyte",
    slug: "egnyte",
    emoji: "🟢",
    shortDescription:
      "Hybrid cloud content platform designed for industries with strict data governance needs.",
    fullDescription:
      "Egnyte is a hybrid cloud content platform that bridges on-premise file servers and cloud storage. It is particularly popular in architecture, engineering, construction (AEC), life sciences, and financial services where teams need to work with large files, maintain data residency, and comply with strict regulations. Egnyte's content governance engine automatically classifies and protects sensitive data.",
    features: [
      "Hybrid cloud — sync between local and cloud storage",
      "Content governance and classification engine",
      "Data residency and compliance controls",
      "Large file handling optimised for AEC",
      "Granular permissions and link sharing",
      "AI-powered content intelligence",
      "Desktop and mobile access",
      "Ransomware detection and recovery",
    ],
    pricingModel: "per_user",
    pricingNotes:
      "Business plan from ~£16/user/month. Enterprise pricing on request with advanced governance.",
    deployment: "hybrid",
    sectors: ["Construction", "Finance", "Healthcare", "Manufacturing", "Legal"],
    integrations: ["Microsoft 365", "Google Workspace", "Salesforce", "AutoCAD", "Slack"],
    scanCompatible: true,
    scanNotes:
      "Hybrid sync means scans to a local Egnyte-connected folder are automatically synced to the cloud. Works well with Plustek eScan.",
  },
  {
    name: "Objective ECM",
    slug: "objective-ecm",
    emoji: "🏛️",
    shortDescription:
      "Enterprise content management built for government and regulated public sector organisations.",
    fullDescription:
      "Objective ECM is an Australian-origin enterprise content management platform with a strong footprint in government and public sector, particularly in Australia, New Zealand, and the UK. It provides records management, document collaboration, and compliance tools designed to meet the specific needs of government agencies, including integration with government classification schemes and retention authorities.",
    features: [
      "Government-grade records management",
      "Classification scheme support",
      "Retention and disposal authority compliance",
      "Document collaboration and review",
      "Secure external collaboration (Objective Connect)",
      "Integration with Microsoft Office",
      "Workflow and approval routing",
      "Audit trails and reporting",
    ],
    pricingModel: "custom",
    pricingNotes:
      "Enterprise pricing tailored to government and public sector contracts. Contact Objective Corporation.",
    deployment: "hybrid",
    sectors: ["Public Sector", "Healthcare", "Education"],
    integrations: ["Microsoft 365", "SAP", "TechnologyOne", "Active Directory"],
    scanCompatible: true,
    scanNotes:
      "Supports capture via watched folders and TWAIN integration. Plustek eScan delivers to Objective ECM via network folder import.",
  },
  {
    name: "Kofax/Tungsten",
    slug: "kofax-tungsten",
    emoji: "🔶",
    shortDescription:
      "Intelligent automation and capture platform specialising in document processing at scale.",
    fullDescription:
      "Kofax (now Tungsten Automation) specialises in intelligent document processing, robotic process automation (RPA), and workflow orchestration. While it includes document management capabilities, its primary strength is capturing, classifying, and extracting data from documents at high volume — invoices, forms, correspondence — and routing the results to downstream systems like ERP, DMS, or databases.",
    features: [
      "Intelligent document capture and OCR",
      "AI-powered data extraction",
      "Robotic process automation (RPA)",
      "Multi-channel capture (scan, email, fax, mobile)",
      "Workflow orchestration",
      "Integration with 100+ enterprise systems",
      "Analytics and process intelligence",
      "High-volume batch processing",
    ],
    pricingModel: "custom",
    pricingNotes:
      "Enterprise pricing based on volume, modules, and deployment. Contact Tungsten Automation for quotes.",
    deployment: "hybrid",
    sectors: ["Finance", "Healthcare", "Public Sector", "Manufacturing"],
    integrations: ["SAP", "Microsoft 365", "SharePoint", "Oracle", "Salesforce", "ServiceNow"],
    scanCompatible: true,
    scanNotes:
      "Kofax Capture is designed for high-volume scanning workflows. Plustek eScan can feed documents into Kofax processing pipelines via network folder.",
  },
  {
    name: "Contentverse",
    slug: "contentverse",
    emoji: "🌐",
    shortDescription:
      "Document management with strong workflow automation for mid-market companies.",
    fullDescription:
      "Contentverse (by Computhink) is a document management system targeting mid-market organisations that need structured workflows, compliance, and easy retrieval without the complexity of large enterprise platforms. It offers a desktop client, web interface, and mobile access with features like OCR, barcode processing, and email management built in.",
    features: [
      "Desktop client and web interface",
      "Built-in OCR and barcode recognition",
      "Workflow automation with visual designer",
      "Email management and archiving",
      "Full-text search and indexing",
      "Version control and audit trails",
      "Records retention management",
      "API for custom integrations",
    ],
    pricingModel: "per_user",
    pricingNotes:
      "Per-user licensing. Contact Computhink for pricing — typically mid-market range.",
    deployment: "hybrid",
    sectors: ["Finance", "Healthcare", "Manufacturing", "General"],
    integrations: ["Microsoft Office", "Outlook", "QuickBooks", "SAP", "Active Directory"],
    scanCompatible: true,
    scanNotes:
      "Native TWAIN scanner integration and watched folder import. Plustek eScan can deliver to Contentverse via network folder.",
  },
  {
    name: "DocuSign CLM",
    slug: "docusign-clm",
    emoji: "✍️",
    shortDescription:
      "Contract lifecycle management with document generation, negotiation, and e-signature.",
    fullDescription:
      "DocuSign CLM (Contract Lifecycle Management) extends beyond e-signatures into full contract management — document generation, clause libraries, negotiation workflows, and post-signature obligations tracking. While not a general-purpose DMS, it is the document management system of record for contracts in many legal and procurement teams.",
    features: [
      "Contract generation from templates",
      "Clause library and smart clauses",
      "Negotiation and redlining workflows",
      "Electronic signature (DocuSign eSignature)",
      "Post-signature obligation tracking",
      "AI-powered contract analytics",
      "Central contract repository with search",
      "Integration with CRM and ERP systems",
    ],
    pricingModel: "custom",
    pricingNotes:
      "Enterprise pricing based on envelope volume and CLM modules. Contact DocuSign for quotes.",
    deployment: "cloud",
    sectors: ["Legal", "Finance", "Healthcare", "General"],
    integrations: ["Salesforce", "Microsoft 365", "SAP", "Oracle", "Workday", "ServiceNow"],
    scanCompatible: true,
    scanNotes:
      "Scanned contracts can be uploaded to DocuSign CLM for archiving. Plustek eScan can scan signed documents to DocuSign via email or network folder.",
  },
  {
    name: "Bitrix24",
    slug: "bitrix24",
    emoji: "🟦",
    shortDescription:
      "All-in-one workspace with CRM, project management, and document storage for SMEs.",
    fullDescription:
      "Bitrix24 is an all-in-one business platform that includes CRM, project management, communication tools, website builder, and document management. Its document features — online storage, shared drives, document editing, and approval workflows — are part of a broader suite rather than a standalone DMS. The free tier is generous, making it popular with small businesses and startups.",
    features: [
      "Online document storage and sharing",
      "Built-in document editor",
      "CRM with deal and pipeline management",
      "Project management and Kanban boards",
      "Internal chat and video calls",
      "Approval workflows for documents",
      "Free tier for up to 5 users (with limits)",
      "Self-hosted option available",
    ],
    pricingModel: "free_tier",
    pricingNotes:
      "Free plan available (limited storage). Paid plans from ~£39/month for 5 users (Basic). Standard from ~£79/month.",
    deployment: "hybrid",
    sectors: ["General", "Retail", "Education", "Construction"],
    integrations: ["Google Workspace", "Microsoft 365", "Mailchimp", "Zapier", "Xero"],
    scanCompatible: true,
    scanNotes:
      "Documents can be uploaded via email or folder sync. Plustek eScan can scan to Bitrix24 via email attachment or synced folder.",
  },
  {
    name: "Folderit",
    slug: "folderit",
    emoji: "📁",
    shortDescription:
      "Simple, affordable cloud DMS designed for small businesses that need compliance without complexity.",
    fullDescription:
      "Folderit is a lightweight, cloud-based document management system built for small businesses, non-profits, and teams that need proper document management without enterprise complexity. It offers approval workflows, OCR, audit trails, and retention policies at an accessible price point. Its simplicity is its strength — minimal training needed to get a team up and running.",
    features: [
      "Simple folder-based organisation",
      "Built-in OCR for scanned documents",
      "Approval workflows",
      "Audit trails and activity logging",
      "Retention policies and reminders",
      "Email-to-folder document capture",
      "Mobile access",
      "ISO 27001 certified hosting",
    ],
    pricingModel: "per_user",
    pricingNotes:
      "From approximately £20/user/month. Volume discounts for larger teams.",
    deployment: "cloud",
    sectors: ["General", "Finance", "Legal", "Healthcare"],
    integrations: ["Google Workspace", "Microsoft 365", "Zapier", "Outlook"],
    scanCompatible: true,
    scanNotes:
      "Email-to-folder feature allows Plustek eScan to scan directly into Folderit via email. Simple and effective for small teams.",
  },
];
