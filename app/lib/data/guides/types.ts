/**
 * Multi-Service Guides Types
 * Supports ESTA, UK ETA, and future services
 * Based on official sources (CBP, GOV.UK, etc.)
 */

import { ServiceType } from "@/app/lib/config/services";

export interface GuideSection {
  id: string;
  title: string;
  content: Array<
    | string
    | {
        type: "list";
        items: string[];
      }
    | {
        type: "callout";
        title?: string;
        text: string;
      }
    | {
        type: "warning";
        title?: string;
        text: string;
      }
  >;
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

/**
 * Pillar Content Types
 * For implementing Topic Cluster SEO Strategy
 */
export type PillarTopic =
  | "service-overview"     // What is ESTA/ETA, Requirements, Cost
  | "application"          // How to apply, documents, payment
  | "status-management"    // Check status, renewal, updates
  | "travel"              // Transit, business, tourism, minors
  | "troubleshooting"     // Denials, errors, appeals
  | "comparison";         // vs Visa, vs other services

export interface Guide {
  slug: string;
  title: string;
  description: string;

  // Service Association
  serviceType: ServiceType; // US_ESTA, UK_ETA, CANADA_ETA

  // Category (existing)
  category:
    | "main"
    | "process"
    | "status"
    | "renewal"
    | "travel"
    | "questions"
    | "requirements"
    | "tips"
    | "comparison";

  // Topic Cluster Strategy (NEW)
  pillarTopic?: PillarTopic;        // Which pillar this belongs to
  isPillarPage?: boolean;           // True if this is the main pillar page
  clusterOf?: string;               // Slug of the pillar page this clusters under

  priority: number;
  keywords: string[];
  estimatedReadTime?: number; // in minutes
  lastUpdated?: string;
  sections?: GuideSection[];
  faqs?: GuideFAQ[];
  relatedGuides?: string[]; // slugs of related guides
}
