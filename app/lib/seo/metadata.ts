/**
 * SEO Metadata Utilities
 * Comprehensive system for generating SEO-optimized meta tags
 * Inspired by Rails project but enhanced for Next.js 13+ App Router
 */

import { Metadata } from "next";

const SITE_NAME = "ESTA Visa Portal";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-image.jpg`;
const TWITTER_HANDLE = "@ESTAVisaPortal"; // Update with actual handle

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
    ogImage = DEFAULT_IMAGE,
    ogType = "website",
    publishedTime,
    modifiedTime,
    author,
    noindex = false,
    nofollow = false,
  } = config;

  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonical = canonicalUrl || SITE_URL;

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
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
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
      images: [ogImage],
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
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
 */
export function generateHomeMetadata(): Metadata {
  return generateMetadata({
    title: "Fast U.S. Travel Authorization",
    description:
      "Apply for U.S. ESTA in 3 easy steps. Expert assistance, 99% approval rate, 24/7 support. Get approved within 24 hours. Fast, secure, and reliable ESTA application service.",
    keywords: [
      "ESTA application",
      "US ESTA",
      "travel authorization",
      "visa waiver program",
      "ESTA online",
      "apply ESTA",
      "USA travel permit",
      "electronic travel authorization",
      "ESTA assistance",
      "fast ESTA approval",
    ],
  });
}

/**
 * Generate metadata for country-specific pages
 */
export function generateCountryMetadata(
  countryName: string,
  countrySlug: string
): Metadata {
  return generateMetadata({
    title: `ESTA for ${countryName} Citizens`,
    description: `Complete guide to ESTA application for ${countryName} citizens. Requirements, process, fees, and tips for ${countryName} nationals traveling to the United States. Apply now with expert assistance.`,
    keywords: [
      `ESTA ${countryName}`,
      `${countryName} ESTA application`,
      `${countryName} USA travel`,
      `${countryName} visa waiver`,
      `ESTA for ${countryName} citizens`,
      `${countryName} travel authorization`,
    ],
    canonicalUrl: `${SITE_URL}/countries/${countrySlug}`,
  });
}

/**
 * Generate metadata for guide pages
 */
export function generateGuideMetadata(
  guideTitle: string,
  guideDescription: string,
  guideSlug: string,
  keywords: string[] = []
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
    canonicalUrl: `${SITE_URL}/guides/${guideSlug}`,
    ogType: "article",
    author: "ESTA Visa Portal Team",
  });
}

/**
 * Generate metadata for blog posts
 */
export function generateBlogMetadata(
  title: string,
  description: string,
  slug: string,
  publishedAt: string,
  updatedAt: string,
  author: string,
  keywords: string[] = [],
  featuredImage?: string
): Metadata {
  return generateMetadata({
    title,
    description,
    keywords: ["ESTA blog", "travel tips", "visa information", ...keywords],
    canonicalUrl: `${SITE_URL}/blog/${slug}`,
    ogImage: featuredImage || DEFAULT_IMAGE,
    ogType: "article",
    publishedTime: publishedAt,
    modifiedTime: updatedAt,
    author,
  });
}
