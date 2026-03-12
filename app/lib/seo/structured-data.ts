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
import { CONTACT_EMAIL } from "../constants";
import { ServiceConfig, getDefaultProcessingTier } from "@/app/lib/config/services";
import { Country } from "@/app/lib/data/countries";

const SITE_NAME = "eVisa Portal";
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
      "Профессиональный сервис оформления eVisa: ESTA, UK ETA и разрешения на въезд по всему миру. Быстрая, безопасная и надёжная обработка с поддержкой 24/7. Более 50 000 довольных клиентов.",
    email: CONTACT_EMAIL,
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Служба поддержки",
      email: CONTACT_EMAIL,
      availableLanguage: ["Russian", "English"],
      areaServed: "Worldwide",
    },
    sameAs: [
      // Add social media profiles when available
      // 'https://facebook.com/estavisaportal',
      // 'https://twitter.com/estavisaportal',
      // 'https://linkedin.com/company/estavisaportal',
    ],
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
      "Быстрый и надёжный сервис оформления eVisa: ESTA, UK ETA и разрешения на въезд по всему миру",
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
    name = "Сервис оформления ESTA",
    description = "Профессиональная помощь с оформлением ESTA (Электронная система авторизации поездок) в США. Быстрая обработка, 99% одобрений, поддержка 24/7.",
    provider = "eVisa Portal",
    areaServed = "Worldwide",
    price = "5390",
    priceCurrency = "RUB",
    url = `${SITE_URL}/apply`,
  } = config || {};

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `Помощь в оформлении ${name}`,
    name: `Сервис оформления ${name}`,
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
      availableLanguage: ["Russian", "English"],
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency,
      description: `Complete ${name} — полный сервис оформления, включая государственную пошлину и сервисный сбор`,
      availability: "https://schema.org/InStock",
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
    programName: "Программа безвизового въезда",
    validity: "2 года",
    maxStay: "до 90 дней за визит",
    processingTime: "24–72 часа",
    description:
      "Профессиональная помощь с оформлением ESTA (Электронная система авторизации поездок) в рамках программы безвизового въезда. Действует 2 года, пребывание до 90 дней.",
  },
  UK_ETA: {
    programName: "Электронное разрешение на въезд",
    validity: "2 года",
    maxStay: "до 6 месяцев за визит",
    processingTime: "Обычно мгновенно",
    description:
      "Быстрое оформление UK ETA (электронное разрешение на въезд в Великобританию). Действует 2 года, пребывание до 6 месяцев. Большинство заявок одобряется мгновенно.",
  },
  CANADA_ETA: {
    programName: "Электронное разрешение на въезд",
    validity: "5 лет",
    maxStay: "до 6 месяцев за визит",
    processingTime: "От нескольких минут до часов",
    description:
      "Помощь в оформлении Canada eTA (электронное разрешение на въезд в Канаду). Действует 5 лет, пребывание до 6 месяцев. Быстрая обработка от нескольких минут.",
  },
};

/**
 * Generate WebPage + Service schema for individual country pages
 */
export function generateCountryPageSchema(
  country: Country,
  service: ServiceConfig
): Array<
  WithContext<WebPage> | WithContext<Service> | WithContext<BreadcrumbList>
> {
  const template = SERVICE_TEMPLATES[service.type];
  const destinationSlug = service.destination.toLowerCase().replace(/ /g, "-");
  const url = `${SITE_URL}/${destinationSlug}/${service.slug}-for-${country.slug}`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: `${service.name} для граждан ${country.name}`,
      description: `Полное руководство по ${service.name} для граждан ${country.name}. Действует ${template.validity}, пребывание ${template.maxStay}, обработка ${template.processingTime}.`,
      url,
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Главная",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: service.name,
            item: `${SITE_URL}/services/${service.slug}`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Страны",
            item: `${SITE_URL}/${destinationSlug}/countries`,
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
      serviceType: `${service.name} для граждан ${country.name}`,
      name: `${service.name} для ${country.name}`,
      description: `Специализированная помощь в оформлении ${service.name} для граждан ${country.name}, путешествующих в ${service.destination}. ${template.description}`,
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
        serviceUrl: `${SITE_URL}/${destinationSlug}/apply`,
        availableLanguage: ["Russian", "English"],
      },
      offers: {
        "@type": "Offer",
        price: (
          service.pricing.government + getDefaultProcessingTier(service.type).serviceFee
        ).toString(),
        priceCurrency: service.pricing.currency,
        description: `Complete ${service.name} — полный сервис оформления, включая государственную пошлину и сервисный сбор`,
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
          name: "Главная",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: service.name,
          item: `${SITE_URL}/services/${service.slug}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Countries",
          item: `${SITE_URL}/${destinationSlug}/countries`,
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
      question: `Что такое ${service.name}?`,
      answer: `${service.name} — это ${template.programName}, которое позволяет гражданам ${country.name} путешествовать в ${service.destination} с целью туризма или бизнеса. Действует ${template.validity}, пребывание ${template.maxStay}.`,
    },
    {
      question: `Сколько времени занимает обработка ${service.slug.toUpperCase()} для граждан ${
        country.name
      }?`,
      answer: `${template.processingTime}. Мы обеспечиваем профессиональную помощь, чтобы ваша заявка была заполнена правильно и подана вовремя. Большинство заявителей из ${country.name} получают одобрение быстро при корректном заполнении данных.`,
    },
    {
      question: `Какие документы нужны гражданам ${country.name} для ${service.name}?`,
      answer: `Гражданам ${country.name} необходим действующий паспорт со сроком действия не менее 6 месяцев, личные данные, информация о поездке и платёжные данные. В зависимости от обстоятельств могут потребоваться дополнительные документы.`,
    },
    {
      question: `Сколько стоит ${service.name} для граждан ${country.name}?`,
      answer: `Общая стоимость составляет ${service.pricing.currency} ${
        service.pricing.government + getDefaultProcessingTier(service.type).serviceFee
      }, включая государственную пошлину (${service.pricing.currency} ${
        service.pricing.government
      }) и наш сервисный сбор (${service.pricing.currency} ${
        getDefaultProcessingTier(service.type).serviceFee
      }) за профессиональную помощь в оформлении.`,
    },
    {
      question: `Могут ли граждане ${country.name} оформить ${service.name} онлайн?`,
      answer: `Да, граждане ${country.name} могут оформить ${service.name} полностью онлайн. Наш сервис помогает правильно заполнить заявку, проверяет данные и подаёт их в государственные органы от вашего имени.`,
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
