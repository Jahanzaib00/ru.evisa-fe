/**
 * SEO Metadata Utilities
 * Comprehensive system for generating SEO-optimized meta tags
 * Inspired by Rails project but enhanced for Next.js 13+ App Router
 */

import { Metadata } from "next";
import { ServiceConfig } from "@/app/lib/config/services";
import { Country } from "@/app/lib/data/countries";

const SITE_NAME = "eVisa Portal";
const SITE_TAGLINE = "ESTA, UK ETA & eVisa Services";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online";
const TWITTER_HANDLE = "@eVisaPortal"; // Update with actual handle

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Generate comprehensive metadata for a page
 * This creates optimal meta tags for Google, social media, and other platforms
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage,
    ogType = "website",
    publishedTime,
    modifiedTime,
    author,
    noindex = false,
    nofollow = false,
  } = config;

  const fullTitle = `${title}`;
  const canonical = canonicalUrl || SITE_URL;
  const imageUrl = ogImage || `${SITE_URL}/images/og-image.jpg`;

  // Base metadata
  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(", ") : undefined,

    // Authors
    authors: author ? [{ name: author }] : [{ name: SITE_NAME }],

    // Creator info
    creator: SITE_NAME,
    publisher: SITE_NAME,

    // Robots directive
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Alternates (canonical)
    alternates: {
      canonical,
    },

    // Open Graph
    openGraph: {
      type: ogType,
      locale: "en_US",
      url: canonical,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      images: [imageUrl],
    },

    // Additional meta tags
    other: {
      "application-name": SITE_NAME,
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": SITE_NAME,
      "format-detection": "telephone=no",
      "mobile-web-app-capable": "yes",
      "msapplication-tap-highlight": "no",
      "theme-color": "#1a56db",
    },
  };

  return metadata;
}

/**
 * Generate metadata for home page
 * Updated for multi-service eVisa Portal
 */
export function generateHomeMetadata(): Metadata {
  const currentYear = new Date().getFullYear();
  return generateMetadata({
    title: `EVISA Portal`,
    description:
      "Apply for US ESTA, UK ETA, and eVisa services online. Expert assistance, 99% approval rate, 24/7 support. Fast processing for all travel authorizations. Trusted by 50,000+ travelers worldwide.",
    keywords: [
      "eVisa application",
      "ESTA application",
      "UK ETA application",
      "US ESTA",
      "UK ETA",
      "travel authorization",
      "visa waiver program",
      "electronic travel authorization",
      "evisa online",
      "apply ESTA",
      "apply UK ETA",
      "USA travel permit",
      "UK travel authorization",
      "eVisa assistance",
      "fast evisa approval",
    ],
  });
}

/**
 * Generate metadata for guide pages
 * @param destination - The destination slug (e.g., "united-states")
 */
export function generateGuideMetadata(
  guideTitle: string,
  guideDescription: string,
  guideSlug: string,
  destination: string = "united-states",
  keywords: string[] = [],
): Metadata {
  return generateMetadata({
    title: guideTitle,
    description: guideDescription,
    keywords: [
      "ESTA guide",
      "ESTA information",
      "travel authorization guide",
      "USA travel requirements",
      ...keywords,
    ],
    canonicalUrl: `${SITE_URL}/${destination}/guide/${guideSlug}`,
    ogType: "article",
    author: "eVisa Portal Team",
  });
}

/**
 * Generate metadata for blog posts
 * @param slug - Must be in format "destination/slug" (e.g., "united-states/esta-guide")
 */
export function generateBlogMetadata(
  title: string,
  description: string,
  slug: string,
  createdAt: string,
  updatedAt: string,
  author: string,
  keywords: string[] = [],
  featuredImage?: string,
): Metadata {
  return generateMetadata({
    title,
    description,
    keywords: [
      "travel authorization",
      "visa guide",
      "travel requirements",
      ...keywords,
    ],
    canonicalUrl: `${SITE_URL}/blog/${slug}`,
    ogType: "article",
    publishedTime: createdAt,
    modifiedTime: updatedAt,
    author,
  });
}

/**
 * Service-specific content templates
 */
interface ServiceTemplate {
  programName: string;
  validity: string;
  maxStay: string;
  processingTime: string;
}

const SERVICE_TEMPLATES: Record<string, ServiceTemplate> = {
  US_ESTA: {
    programName: "Visa Waiver Program",
    validity: "2 years validity",
    maxStay: "90 days max stay",
    processingTime: "24-72 hours processing",
  },
  UK_ETA: {
    programName: "Electronic Travel Authorisation",
    validity: "2 years validity",
    maxStay: "6 months max stay",
    processingTime: "Usually instant",
  },
  CANADA_ETA: {
    programName: "Electronic Travel Authorization",
    validity: "5 years validity",
    maxStay: "6 months max stay",
    processingTime: "Minutes to hours",
  },
};

/**
 * Generate metadata for individual country page
 */
export function generateCountryPageMetadata(
  country: Country,
  service: ServiceConfig,
): Metadata {
  const template = SERVICE_TEMPLATES[service.type];

  return generateMetadata({
    title: `${service.name} for ${country.name} Citizens`,
    description: `Complete guide to ${service.name} for ${country.name} citizens. ${template.validity}, ${template.maxStay}, ${template.processingTime}. Requirements, application process, and fees for ${country.name} nationals traveling to ${service.destination}. Apply now with expert assistance.`,
    keywords: [
      `${service.slug} ${country.name}`,
      `${country.name} ${service.slug} application`,
      `${country.name} ${service.destination} travel`,
      `${country.name} travel authorization`,
      `${service.slug} for ${country.name} citizens`,
      `${country.name} ${template.programName}`,
      `${country.name} to ${service.destination}`,
      `${service.destination} visa ${country.name}`,
    ],
    canonicalUrl: `${SITE_URL}/${service.destination.toLowerCase().replace(/ /g, "-")}/${service.slug}-for-${country.slug}`,
    ogImage: `${SITE_URL}/images/countries/${country.code.toLowerCase()}-${
      service.slug
    }.jpg`,
  });
}
