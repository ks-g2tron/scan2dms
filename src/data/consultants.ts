// Placeholder data — real listings come via /list-your-practice

export interface Consultant {
  name: string;
  company: string;
  slug: string;
  type: "Individual" | "Consultancy" | "Reseller";
  city: string;
  region: string;
  specialisms: string[];
  sectors: string[];
  description: string;
  website: string;
  linkedin: string;
  email: string;
  phone?: string;
}

export const consultants: Consultant[] = [
  {
    name: "James Hartley",
    company: "Hartley Document Solutions",
    slug: "james-hartley",
    type: "Consultancy",
    city: "Manchester",
    region: "North West",
    specialisms: [
      "SharePoint",
      "Microsoft 365",
      "DMS Implementation",
      "Scanning & Capture",
    ],
    sectors: ["Legal", "Finance & Accounting"],
    description:
      "Specialist SharePoint and document management consultancy helping law firms and financial services companies digitise their paper workflows. Over 12 years of experience implementing M365-based DMS solutions across the North West.",
    website: "https://www.hartleydocs.example.co.uk",
    linkedin: "https://www.linkedin.com/in/james-hartley-example",
    email: "james@hartleydocs.example.co.uk",
    phone: "0161 496 0012",
  },
  {
    name: "Sarah Chen",
    company: "Apex Information Management",
    slug: "sarah-chen",
    type: "Consultancy",
    city: "London",
    region: "London",
    specialisms: [
      "DMS Implementation",
      "Document Workflow",
      "Records Management",
      "Cloud Migration",
    ],
    sectors: ["Healthcare", "Public Sector"],
    description:
      "Apex IM delivers document management and records management solutions for NHS trusts, local authorities, and housing associations. We specialise in migrating legacy paper and electronic records to modern cloud platforms.",
    website: "https://www.apexim.example.co.uk",
    linkedin: "https://www.linkedin.com/in/sarah-chen-example",
    email: "sarah@apexim.example.co.uk",
  },
  {
    name: "David McAllister",
    company: "McAllister IT Consulting",
    slug: "david-mcallister",
    type: "Individual",
    city: "Edinburgh",
    region: "Scotland",
    specialisms: [
      "Microsoft 365",
      "SharePoint",
      "Cloud Migration",
    ],
    sectors: ["Education", "General"],
    description:
      "Independent Microsoft 365 consultant helping Scottish universities and colleges move from on-premise file shares to SharePoint Online. Practical, hands-on approach with a focus on user adoption and training.",
    website: "https://www.mcallisterit.example.co.uk",
    linkedin: "https://www.linkedin.com/in/david-mcallister-example",
    email: "david@mcallisterit.example.co.uk",
    phone: "0131 555 0034",
  },
  {
    name: "Rachel Thompson",
    company: "DocFlow Partners",
    slug: "rachel-thompson",
    type: "Reseller",
    city: "Bristol",
    region: "South West",
    specialisms: [
      "Scanning & Capture",
      "DMS Implementation",
      "Document Workflow",
      "SharePoint",
    ],
    sectors: ["Construction", "Manufacturing"],
    description:
      "DocFlow Partners supplies and implements document scanning and management solutions for construction and manufacturing firms across the South West. Authorised reseller for leading scanner hardware and DMS platforms.",
    website: "https://www.docflowpartners.example.co.uk",
    linkedin: "https://www.linkedin.com/in/rachel-thompson-example",
    email: "rachel@docflowpartners.example.co.uk",
    phone: "0117 329 0056",
  },
  {
    name: "Amir Patel",
    company: "Patel Records Management",
    slug: "amir-patel",
    type: "Consultancy",
    city: "Birmingham",
    region: "West Midlands",
    specialisms: [
      "Records Management",
      "DMS Implementation",
      "Document Workflow",
      "Microsoft 365",
    ],
    sectors: ["Legal", "Finance & Accounting", "Public Sector"],
    description:
      "Records management and compliance consultancy serving Midlands-based legal practices and financial firms. IRMS-qualified with deep expertise in retention scheduling, GDPR compliance, and electronic records migration.",
    website: "https://www.patelrm.example.co.uk",
    linkedin: "https://www.linkedin.com/in/amir-patel-example",
    email: "amir@patelrm.example.co.uk",
  },
];
