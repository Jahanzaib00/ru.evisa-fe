/**
 * JSON-LD Structured Data Utilities
 * Generates Schema.org markup for rich search results
 * Implements best practices for Google Search, Knowledge Graph, and rich snippets
 */

import {
  WithContext,
  Organization,
  WebSite,
  WebPage,
  FAQPage,
  Article,
  BreadcrumbList,
  Service,
  HowTo,
} from "schema-dts";

const SITE_NAME = "ESTA Visa Portal";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.com";
const LOGO_URL = `${SITE_URL}/images/logo.png`;
const CONTACT_EMAIL = "support@visaportal.online";

/**
 * Organization Schema
 * Used on homepage to establish brand identity in Knowledge Graph
 */
export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      "Expert ESTA visa application assistance service for U.S. travel authorization. Fast, secure, and reliable ESTA processing with 24/7 support.",
    email: CONTACT_EMAIL,
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: CONTACT_EMAIL,
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    sameAs: [
      // Add social media profiles when available
      // 'https://facebook.com/estavisaportal',
      // 'https://twitter.com/estavisaportal',
      // 'https://linkedin.com/company/estavisaportal',
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1247",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * WebSite Schema
 * Enables sitelinks search box in Google results
 */
export function generateWebSiteSchema(): WithContext<WebSite> {
  const potentialAction: any = {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
  };
  // preserve the JSON-LD "query-input" key while avoiding TypeScript object-literal checks
  potentialAction["query-input"] = "required name=search_term_string";

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Fast and reliable ESTA visa application service for U.S. travel authorization",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    potentialAction: potentialAction,
  };
}

/**
 * WebPage Schema
 * Generic page markup for all pages
 */
export function generateWebPageSchema(config: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
}): WithContext<WebPage> {
  const { title, description, url, datePublished, dateModified, breadcrumbs } =
    config;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    ...(breadcrumbs && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      },
    }),
  };
}

/**
 * BreadcrumbList Schema
 * Standalone breadcrumb navigation for better site structure understanding
 */
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * FAQPage Schema
 * For pages with FAQ sections - enables rich FAQ results in Google
 */
export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>
): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Article Schema
 * For blog posts and guide articles
 */
export function generateArticleSchema(config: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: string;
  image?: string;
  keywords?: string[];
}): WithContext<Article> {
  const {
    title,
    description,
    url,
    datePublished,
    dateModified,
    author,
    image,
    keywords,
  } = config;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: image,
      },
    }),
    ...(keywords && { keywords: keywords.join(", ") }),
  };
}

/**
 * Service Schema
 * For ESTA application service description
 */
export function generateServiceSchema(): WithContext<Service> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "ESTA Visa Application Assistance",
    name: "ESTA Application Service",
    description:
      "Expert assistance with U.S. ESTA (Electronic System for Travel Authorization) applications. Fast processing, 99% approval rate, 24/7 support.",
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/apply`,
      servicePhone: {
        "@type": "ContactPoint",
        email: CONTACT_EMAIL,
      },
      availableLanguage: ["English"],
    },
    offers: {
      "@type": "Offer",
      price: "45.00",
      priceCurrency: "USD",
      description:
        "Complete ESTA application service including government fee ($40) and service fee ($5)",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.95",
      reviewCount: "66000",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

/**
 * HowTo Schema
 * For guide pages explaining processes step-by-step
 */
export function generateHowToSchema(config: {
  name: string;
  description: string;
  url: string;
  totalTime?: string; // ISO 8601 duration format (e.g., "PT10M" for 10 minutes)
  steps: Array<{
    name: string;
    text: string;
    url?: string;
    image?: string;
  }>;
}): WithContext<HowTo> {
  const { name, description, url, totalTime, steps } = config;

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url,
    ...(totalTime && { totalTime }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && {
        image: {
          "@type": "ImageObject",
          url: step.image,
        },
      }),
    })),
  };
}

/**
 * Country-specific Page Schema
 * Combines WebPage + Service for country landing pages
 */
export function generateCountryPageSchema(config: {
  countryName: string;
  countrySlug: string;
  description: string;
}): Array<WithContext<WebPage> | WithContext<Service>> {
  const { countryName, countrySlug, description } = config;
  const url = `${SITE_URL}/countries/${countrySlug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `ESTA for ${countryName} Citizens`,
      description,
      url,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Countries",
            item: `${SITE_URL}/countries`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: countryName,
            item: url,
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: `ESTA Application Service for ${countryName} Citizens`,
      name: `ESTA for ${countryName}`,
      description: `Specialized ESTA application assistance for ${countryName} nationals traveling to the United States.`,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
      },
      areaServed: {
        "@type": "Country",
        name: countryName,
      },
      offers: {
        "@type": "Offer",
        price: "45.00",
        priceCurrency: "USD",
      },
    },
  ];
}

/**
 * Helper function to render JSON-LD as string
 * Use this in your page metadata or script tags
 *
 * Example usage in Next.js page:
 * ```tsx
 * export default function Page() {
 *   const schema = generateOrganizationSchema();
 *   return (
 *     <>
 *       <script
 *         type="application/ld+json"
 *         dangerouslySetInnerHTML={{ __html: renderStructuredData(schema) }}
 *       />
 *       ...
 *     </>
 *   );
 * }
 * ```
 */
export function renderStructuredData(
  schema: WithContext<any> | Array<WithContext<any>>
): string {
  const data = Array.isArray(schema) ? schema : [schema];
  return data.map((s) => JSON.stringify(s, null, 2)).join("\n");
}
