/**
 * SEO Metadata Utilities
 * Comprehensive system for generating SEO-optimized meta tags
 * Inspired by Rails project but enhanced for Next.js 13+ App Router
 */

import { Metadata } from "next";
import { ServiceConfig } from "@/app/lib/config/services";
import { Country } from "@/app/lib/data/countries";

const SITE_NAME = "eVisa Portal";
const SITE_TAGLINE = "ESTA, UK ETA и электронные визы";
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
      locale: "ru_RU",
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
      "Оформление US ESTA, UK ETA и электронных виз онлайн. Профессиональная помощь, 99% одобрений, поддержка 24/7. Быстрая обработка всех разрешений на въезд. Более 50 000 довольных клиентов.",
    keywords: [
      "электронная виза",
      "оформление ESTA",
      "оформление UK ETA",
      "US ESTA",
      "UK ETA",
      "разрешение на въезд",
      "безвизовый въезд",
      "электронное разрешение",
      "eVisa онлайн",
      "подать ESTA",
      "подать UK ETA",
      "виза в США",
      "виза в Великобританию",
      "помощь с визой",
      "быстрое оформление визы",
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
      "руководство ESTA",
      "информация ESTA",
      "руководство по разрешению на въезд",
      "требования для поездки в США",
      ...keywords,
    ],
    canonicalUrl: `${SITE_URL}/${destination}/guide/${guideSlug}`,
    ogType: "article",
    author: "Команда eVisa Portal",
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
      "разрешение на въезд",
      "визовый гид",
      "требования для поездки",
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
    programName: "Программа безвизового въезда",
    validity: "Действует 2 года",
    maxStay: "До 90 дней пребывания",
    processingTime: "Обработка 24–72 часа",
  },
  UK_ETA: {
    programName: "Электронное разрешение на въезд",
    validity: "Действует 2 года",
    maxStay: "До 6 месяцев пребывания",
    processingTime: "Обычно мгновенно",
  },
  CANADA_ETA: {
    programName: "Электронное разрешение на въезд",
    validity: "Действует 5 лет",
    maxStay: "До 6 месяцев пребывания",
    processingTime: "От нескольких минут до часов",
  },
  THAILAND_TDAC: {
    programName: "Цифровая карта прибытия",
    validity: "Однократное использование",
    maxStay: "30 дней за въезд",
    processingTime: "Обработка в тот же день",
  },
  INDONESIA_EVOA: {
    programName: "Электронная виза по прибытии",
    validity: "Действует 30 дней",
    maxStay: "До 30 дней пребывания",
    processingTime: "Обработка 1–24 часа",
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
    title: `${service.name} для граждан ${country.name}`,
    description: `Полное руководство по ${service.name} для граждан ${country.name}. ${template.validity}, ${template.maxStay}, ${template.processingTime}. Требования, процесс подачи и стоимость для граждан ${country.name}, путешествующих в ${service.destination}. Оформите сейчас с профессиональной помощью.`,
    keywords: [
      `${service.slug} ${country.name}`,
      `${country.name} ${service.slug} оформление`,
      `${country.name} ${service.destination} поездка`,
      `${country.name} разрешение на въезд`,
      `${service.slug} для граждан ${country.name}`,
      `${country.name} ${template.programName}`,
      `${country.name} в ${service.destination}`,
      `${service.destination} виза ${country.name}`,
    ],
    canonicalUrl: `${SITE_URL}/${service.destination.toLowerCase().replace(/ /g, "-")}/${service.slug}-for-${country.slug}`,
    ogImage: `${SITE_URL}/images/countries/${country.code.toLowerCase()}-${
      service.slug
    }.jpg`,
  });
}
