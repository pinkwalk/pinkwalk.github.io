export type PartnershipCategory =
  | "media"
  | "medical"
  | "logistics"
  | "merchandise"
  | "corporate"
  | "community"
  | "other";

export interface PartnershipTypeOption {
  id: PartnershipCategory;
  label: string;
  description: string;
}

export const partnershipCategories: PartnershipTypeOption[] = [
  {
    id: "media",
    label: "Media & Communications",
    description: "Amplify PinkWalk through TV, Radio, Print, or Digital Media.",
  },
  {
    id: "medical",
    label: "Medical & Healthcare",
    description: "Provide health checkups, screening camps, or emergency medical support.",
  },
  {
    id: "logistics",
    label: "Logistics & Venue",
    description: "Support sound systems, staging, signage, security, or route management.",
  },
  {
    id: "merchandise",
    label: "Refreshment & Merchandise",
    description: "Sponsor official PinkWalk t-shirts, drinking water, snacks, or caps.",
  },
  {
    id: "corporate",
    label: "Corporate & Financial Sponsor",
    description: "Provide financial sponsorship or corporate CSR participation.",
  },
  {
    id: "community",
    label: "Community & NGO Partner",
    description: "Mobilize volunteer groups, youth clubs, or community networks.",
  },
  {
    id: "other",
    label: "Other Contribution",
    description: "Have another unique way to support or collaborate with PinkWalk?",
  },
];

export interface PartnerInquiryInput {
  organizationName: string;
  contactPerson: string;
  designation?: string;
  contactNumber: string;
  email: string;
  partnershipType: PartnershipCategory | string;
  contributionText: string;
  website?: string;
  honeypot?: string; // Spam protection
}

export interface PartnerInquirySubmission extends PartnerInquiryInput {
  createdAt?: string | Date;
  status: "pending" | "reviewed" | "contacted" | "approved";
  source: string;
}
