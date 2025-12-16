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
  CollectionPage,
} from "schema-dts";
import { CONTACT_EMAIL } from "../constants";
import { ServiceConfig } from "@/app/lib/config/services";
import { Country } from "@/app/lib/data/countries";

const SITE_NAME = "ESTA Visa Portal";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online";
const LOGO_URL = `${SITE_URL}/images/logo.png`;

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
 * For service landing pages (ESTA, UK ETA, etc.) and homepage
 */
export function generateServiceSchema(config?: {
  name?: string;
  description?: string;
  provider?: string;
  areaServed?: string;
  price?: string;
  priceCurrency?: string;
  url?: string;
}): WithContext<Service> {
  const {
    name = "ESTA Application Service",
    description = "Expert assistance with U.S. ESTA (Electronic System for Travel Authorization) applications. Fast processing, 99% approval rate, 24/7 support.",
    provider = "Visa Portal",
    areaServed = "Worldwide",
    price = "45.00",
    priceCurrency = "USD",
    url = `${SITE_URL}/apply`,
  } = config || {};

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${name} Application Assistance`,
    name: `${name} Application Service`,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Place",
      name: areaServed,
    },
    url,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      servicePhone: {
        "@type": "ContactPoint",
        email: CONTACT_EMAIL,
      },
      availableLanguage: ["English"],
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency,
      description: `Complete ${name} application service including government fee and processing fee`,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50000",
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

/**
 * Service-specific content templates
 */
interface ServiceTemplate {
  programName: string;
  validity: string;
  maxStay: string;
  processingTime: string;
  description: string;
}

const SERVICE_TEMPLATES: Record<string, ServiceTemplate> = {
  US_ESTA: {
    programName: "Visa Waiver Program",
    validity: "2 years",
    maxStay: "90 days per visit",
    processingTime: "24-72 hours",
    description:
      "Expert assistance with U.S. ESTA (Electronic System for Travel Authorization) applications under the Visa Waiver Program. Valid for 2 years with stays up to 90 days.",
  },
  UK_ETA: {
    programName: "Electronic Travel Authorisation",
    validity: "2 years",
    maxStay: "6 months per visit",
    processingTime: "Usually instant",
    description:
      "Fast UK Electronic Travel Authorisation (ETA) application service. Valid for 2 years with stays up to 6 months. Most applications approved instantly.",
  },
  CANADA_ETA: {
    programName: "Electronic Travel Authorization",
    validity: "5 years",
    maxStay: "6 months per visit",
    processingTime: "Minutes to hours",
    description:
      "Canada Electronic Travel Authorization (eTA) application assistance. Valid for 5 years with stays up to 6 months. Fast processing within minutes to hours.",
  },
};

/**
 * Generate CollectionPage schema for countries index
 */
export function generateCountriesIndexSchema(
  service: ServiceConfig,
  countries: Country[]
): Array<WithContext<CollectionPage> | WithContext<BreadcrumbList>> {
  const template = SERVICE_TEMPLATES[service.type];
  const url = `${SITE_URL}/${service.slug}/countries`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${service.name} - Eligible Countries`,
      description: `Complete list of ${countries.length} countries eligible for ${service.name}. ${template.description}`,
      url,
      mainEntity: {
        "@type": "ItemList",
        name: `Countries Eligible for ${service.name}`,
        description: `All ${countries.length} countries that can apply for ${service.name}`,
        numberOfItems: countries.length,
        itemListElement: countries.map((country, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: country.name,
          url: `${SITE_URL}/${service.slug}/countries/${country.slug}`,
          item: {
            "@type": "Place",
            name: country.name,
            ...(country.capitalCity && {
              containsPlace: {
                "@type": "City",
                name: country.capitalCity,
              },
            }),
          },
        })),
      },
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
            name: service.name,
            item: `${SITE_URL}/${service.slug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Countries",
            item: url,
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
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
          name: service.name,
          item: `${SITE_URL}/${service.slug}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Countries",
          item: url,
        },
      ],
    },
  ];
}

/**
 * Generate WebPage + Service schema for individual country pages
 */
export function generateCountryPageSchema(
  country: Country,
  service: ServiceConfig
): Array<WithContext<WebPage> | WithContext<Service> | WithContext<BreadcrumbList>> {
  const template = SERVICE_TEMPLATES[service.type];
  const url = `${SITE_URL}/${service.slug}/countries/${country.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${service.name} for ${country.name} Citizens`,
      description: `Complete guide to ${service.name} for ${country.name} citizens. Valid for ${template.validity}, stays up to ${template.maxStay}, processing time ${template.processingTime}.`,
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
            name: service.name,
            item: `${SITE_URL}/${service.slug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Countries",
            item: `${SITE_URL}/${service.slug}/countries`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: country.name,
            item: url,
          },
        ],
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: LOGO_URL,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: `${service.name} for ${country.name} Citizens`,
      name: `${service.name} for ${country.name}`,
      description: `Specialized ${service.name} application assistance for ${country.name} nationals traveling to ${service.destination}. ${template.description}`,
      provider: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: country.name,
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${SITE_URL}/${service.slug}/apply`,
        availableLanguage: ["English"],
      },
      offers: {
        "@type": "Offer",
        price: (service.pricing.government + service.pricing.service).toString(),
        priceCurrency: service.pricing.currency,
        description: `Complete ${service.name} application service including government fee and processing fee`,
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
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
          name: service.name,
          item: `${SITE_URL}/${service.slug}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Countries",
          item: `${SITE_URL}/${service.slug}/countries`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: country.name,
          item: url,
        },
      ],
    },
  ];
}

/**
 * Generate FAQPage schema for country-specific FAQs
 */
export function generateCountryFAQSchema(
  country: Country,
  service: ServiceConfig
): WithContext<FAQPage> {
  const template = SERVICE_TEMPLATES[service.type];

  // Service-specific FAQs
  const faqs = [
    {
      question: `What is ${service.name}?`,
      answer: `${service.name} is an ${template.programName} that allows ${country.name} citizens to travel to ${service.destination} for tourism or business. It is valid for ${template.validity} and allows stays of up to ${template.maxStay}.`,
    },
    {
      question: `How long does ${service.slug.toUpperCase()} processing take for ${country.name} citizens?`,
      answer: `${template.processingTime}. We provide expert assistance to ensure your application is completed correctly and submitted promptly. Most ${country.name} applicants receive approval quickly when all information is accurate.`,
    },
    {
      question: `What documents do ${country.name} citizens need for ${service.name}?`,
      answer: `${country.name} citizens need a valid passport with at least 6 months validity, personal information, travel details, and payment information. Additional documents may be required based on your specific circumstances.`,
    },
    {
      question: `How much does ${service.name} cost for ${country.name} citizens?`,
      answer: `The total cost is ${service.pricing.currency} ${service.pricing.government + service.pricing.service}, which includes the government fee (${service.pricing.currency} ${service.pricing.government}) and our service fee (${service.pricing.currency} ${service.pricing.service}) for expert application assistance.`,
    },
    {
      question: `Can ${country.name} citizens apply for ${service.name} online?`,
      answer: `Yes, ${country.name} citizens can apply for ${service.name} entirely online. Our service helps you complete the application correctly, reviews your information, and submits it to the government on your behalf.`,
    },
  ];

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
