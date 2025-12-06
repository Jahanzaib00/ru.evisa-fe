module.exports = [
  '[project]/Documents/Self /esta/frontend/app/icon.png.mjs { IMAGE => "[project]/Documents/Self /esta/frontend/app/icon.png (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)',
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        '[project]/Documents/Self /esta/frontend/app/icon.png.mjs { IMAGE => "[project]/Documents/Self /esta/frontend/app/icon.png (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript)'
      )
    );
  },
  '[project]/Documents/Self /esta/frontend/app/apple-icon.png.mjs { IMAGE => "[project]/Documents/Self /esta/frontend/app/apple-icon.png (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)',
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        '[project]/Documents/Self /esta/frontend/app/apple-icon.png.mjs { IMAGE => "[project]/Documents/Self /esta/frontend/app/apple-icon.png (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript)'
      )
    );
  },
  "[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/shared/lib/no-fallback-error.external.js",
      () => require("next/dist/shared/lib/no-fallback-error.external.js")
    );

    module.exports = mod;
  },
  "[project]/Documents/Self /esta/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)",
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/layout.tsx [app-rsc] (ecmascript)"
      )
    );
  },
  "[externals]/tty [external] (tty, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("tty", () => require("tty"));

    module.exports = mod;
  },
  "[externals]/os [external] (os, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("os", () => require("os"));

    module.exports = mod;
  },
  "[externals]/node:path [external] (node:path, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("node:path", () =>
      require("node:path")
    );

    module.exports = mod;
  },
  "[externals]/node:path [external] (node:path, cjs) <export default as minpath>",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "minpath",
      () =>
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__[
          "default"
        ],
    ]);
    var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ =
      __turbopack_context__.i(
        "[externals]/node:path [external] (node:path, cjs)"
      );
  },
  "[externals]/node:process [external] (node:process, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("node:process", () =>
      require("node:process")
    );

    module.exports = mod;
  },
  "[externals]/node:process [external] (node:process, cjs) <export default as minproc>",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "minproc",
      () =>
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__[
          "default"
        ],
    ]);
    var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ =
      __turbopack_context__.i(
        "[externals]/node:process [external] (node:process, cjs)"
      );
  },
  "[externals]/node:url [external] (node:url, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x("node:url", () => require("node:url"));

    module.exports = mod;
  },
  "[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s([
      "urlToPath",
      () =>
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__[
          "fileURLToPath"
        ],
    ]);
    var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ =
      __turbopack_context__.i(
        "[externals]/node:url [external] (node:url, cjs)"
      );
  },
  "[project]/Documents/Self /esta/frontend/app/lib/seo/structured-data.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    /**
     * JSON-LD Structured Data Utilities
     * Generates Schema.org markup for rich search results
     * Implements best practices for Google Search, Knowledge Graph, and rich snippets
     */ __turbopack_context__.s([
      "generateArticleSchema",
      () => generateArticleSchema,
      "generateBreadcrumbSchema",
      () => generateBreadcrumbSchema,
      "generateCountryPageSchema",
      () => generateCountryPageSchema,
      "generateFAQPageSchema",
      () => generateFAQPageSchema,
      "generateHowToSchema",
      () => generateHowToSchema,
      "generateOrganizationSchema",
      () => generateOrganizationSchema,
      "generateServiceSchema",
      () => generateServiceSchema,
      "generateWebPageSchema",
      () => generateWebPageSchema,
      "generateWebSiteSchema",
      () => generateWebSiteSchema,
      "renderStructuredData",
      () => renderStructuredData,
    ]);
    const SITE_NAME = "ESTA Visa Portal";
    const SITE_URL =
      ("TURBOPACK compile-time value", "https://www.visaportal.online") ||
      "https://www.visaportal.online";
    const LOGO_URL = `${SITE_URL}/images/logo.png`;
    const CONTACT_EMAIL = "support@visaportal.online";
    function generateOrganizationSchema() {
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
        sameAs: [],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "1247",
          bestRating: "5",
          worstRating: "1",
        },
      };
    }
    function generateWebSiteSchema() {
      const potentialAction = {
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
    function generateWebPageSchema(config) {
      const {
        title,
        description,
        url,
        datePublished,
        dateModified,
        breadcrumbs,
      } = config;
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url,
        ...(datePublished && {
          datePublished,
        }),
        ...(dateModified && {
          dateModified,
        }),
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
    function generateBreadcrumbSchema(breadcrumbs) {
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
    function generateFAQPageSchema(faqs) {
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
    function generateArticleSchema(config) {
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
        ...(keywords && {
          keywords: keywords.join(", "),
        }),
      };
    }
    function generateServiceSchema() {
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
    function generateHowToSchema(config) {
      const { name, description, url, totalTime, steps } = config;
      return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name,
        description,
        url,
        ...(totalTime && {
          totalTime,
        }),
        step: steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
          ...(step.url && {
            url: step.url,
          }),
          ...(step.image && {
            image: {
              "@type": "ImageObject",
              url: step.image,
            },
          }),
        })),
      };
    }
    function generateCountryPageSchema(config) {
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
    function renderStructuredData(schema) {
      const data = Array.isArray(schema) ? schema : [schema];
      return data.map((s) => JSON.stringify(s, null, 2)).join("\n");
    }
  },
  "[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    /**
     * API Client for Backend Communication
     * Following Rails Controller → View pattern
     * Frontend NEVER touches database - only calls backend API
     */ __turbopack_context__.s(["APIError", () => APIError, "api", () => api]);
    const API_BASE_URL =
      ("TURBOPACK compile-time value", "http://localhost:3001") ||
      "http://localhost:3001";
    class APIError extends Error {
      status;
      constructor(status, message) {
        super(message), (this.status = status);
        this.name = "APIError";
      }
    }
    async function fetchAPI(endpoint, options = {}) {
      let url = `${API_BASE_URL}${endpoint}`;
      // Handle query parameters
      if (options.params) {
        const searchParams = new URLSearchParams();
        Object.entries(options.params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            searchParams.append(key, String(value));
          }
        });
        const queryString = searchParams.toString();
        if (queryString) {
          url += `?${queryString}`;
        }
      }
      const response = await fetch(url, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });
      if (!response.ok) {
        throw Error(`API Error: ${response.statusText}`);
      }
      const result = await response.json();
      // Unwrap the TransformInterceptor response
      return result.data;
    }
    const api = {
      // GET request with optional query params
      get: (endpoint, options) =>
        fetchAPI(endpoint, {
          ...options,
          method: "GET",
        }),
      // POST request
      post: (endpoint, data, options) =>
        fetchAPI(endpoint, {
          ...options,
          method: "POST",
          body: JSON.stringify(data),
        }),
      // PUT request
      put: (endpoint, data, options) =>
        fetchAPI(endpoint, {
          ...options,
          method: "PUT",
          body: JSON.stringify(data),
        }),
      // PATCH request
      patch: (endpoint, data, options) =>
        fetchAPI(endpoint, {
          ...options,
          method: "PATCH",
          body: JSON.stringify(data),
        }),
      // DELETE request
      delete: (endpoint, options) =>
        fetchAPI(endpoint, {
          ...options,
          method: "DELETE",
        }),
    };
  },
  "[project]/Documents/Self /esta/frontend/app/lib/api/services/auth.service.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["authService", () => authService]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)"
      );
    const authService = {
      async register(data) {
        const response =
          await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            "api"
          ].post("/auth/register", data);
        // Store tokens and user in localStorage
        if (
          ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        );
        return response;
      },
      async login(data) {
        const response =
          await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            "api"
          ].post("/auth/login", data);
        // Store tokens and user in localStorage
        if (
          ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        );
        return response;
      },
      async getProfile() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/auth/me");
      },
      async refreshToken(refreshToken) {
        const response =
          await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            "api"
          ].post("/auth/refresh", {
            refresh_token: refreshToken,
          });
        // Update tokens in localStorage
        if (
          ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        );
        return response;
      },
      isAuthenticated() {
        if (("TURBOPACK compile-time truthy", 1)) return false;
        //TURBOPACK unreachable
      },
      getUser() {
        if (("TURBOPACK compile-time truthy", 1)) return null;
        //TURBOPACK unreachable
        const userStr = undefined;
      },
    };
  },
  "[project]/Documents/Self /esta/frontend/app/lib/api/services/applications.service.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["applicationsService", () => applicationsService]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)"
      );
    const applicationsService = {
      async create(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].post("/applications", data);
      },
      async getAll(params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/applications", {
          params,
        });
      },
      async getMyApplications(params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/applications/my", {
          params,
        });
      },
      async getById(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get(`/applications/${id}`);
      },
      async update(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].put(`/applications/${id}`, data);
      },
      async saveDraft(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].post(`/applications/${id}/draft`, data);
      },
      async submit(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].post(`/applications/${id}/submit`, {});
      },
      async updateStatus(id, status, adminNotes) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].patch(`/applications/${id}/status`, {
          status,
          adminNotes,
        });
      },
      async delete(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].delete(`/applications/${id}`);
      },
      async saveTravelers(id, travelers) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].post(`/applications/${id}/travelers`, travelers);
      },
    };
  },
  "[project]/Documents/Self /esta/frontend/app/lib/api/services/payments.service.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["paymentsService", () => paymentsService]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)"
      );
    const paymentsService = {
      async createPaymentIntent(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].post("/payments/create-payment-intent", data);
      },
      async getPaymentStatus(applicationId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get(`/payments/application/${applicationId}`);
      },
    };
  },
  "[project]/Documents/Self /esta/frontend/app/lib/api/services/countries.service.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["countriesService", () => countriesService]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)"
      );
    const countriesService = {
      async getEligibleCountries() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/countries/eligible");
      },
      async getAllCountries() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/countries/all");
      },
      async checkEligibility(countryCode) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get(`/countries/${countryCode}/eligible`);
      },
    };
  },
  "[project]/Documents/Self /esta/frontend/app/lib/api/services/users.service.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["usersService", () => usersService]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)"
      );
    const usersService = {
      async getProfile() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/users/me");
      },
      async updateProfile(data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].put("/users/me", data);
      },
      async getMyApplications() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/users/me/applications");
      },
      async getAllUsers(params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/users", {
          params,
        });
      },
      async getUserById(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get(`/users/${id}`);
      },
      async updateUser(id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].put(`/users/${id}`, data);
      },
      async deactivateUser(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].patch(`/users/${id}/deactivate`, {});
      },
      async activateUser(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].patch(`/users/${id}/activate`, {});
      },
      async getUserApplications(id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get(`/users/${id}/applications`);
      },
    };
  },
  "[project]/Documents/Self /esta/frontend/app/lib/api/services/content.service.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["contentService", () => contentService]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)"
      );
    const contentService = {
      // Get all published content (client unwraps TransformInterceptor automatically)
      async getPublicContent(params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/content/public", {
          params,
        });
      },
      // Get content by slug (client unwraps TransformInterceptor automatically)
      async getBySlug(slug) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get(`/content/public/slug/${slug}`);
      },
      // Get content statistics (client unwraps TransformInterceptor automatically)
      async getStats() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/content/public/stats");
      },
      // Get blog posts
      async getBlogPosts(params) {
        return this.getPublicContent({
          ...params,
          type: "BLOG",
        });
      },
      // Get country content
      async getCountryContent(params) {
        return this.getPublicContent({
          ...params,
          type: "COUNTRY",
        });
      },
      // Get guides
      async getGuides(params) {
        return this.getPublicContent({
          ...params,
          type: "GUIDE",
        });
      },
      // Get related content
      async getRelatedContent(slug, limit = 3) {
        const current = await this.getBySlug(slug);
        const { data } = await this.getPublicContent({
          type: current.type,
          category: current.category,
          limit: limit + 1,
        });
        // Filter out current content and limit results
        return data.filter((item) => item.slug !== slug).slice(0, limit);
      },
    };
  },
  "[project]/Documents/Self /esta/frontend/app/lib/api/types.ts [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    // API Response Types
    __turbopack_context__.s([
      "ApplicationStatus",
      () => ApplicationStatus,
      "ApplicationType",
      () => ApplicationType,
      "PaymentStatus",
      () => PaymentStatus,
      "TravelPurpose",
      () => TravelPurpose,
    ]);
    var ApplicationType = /*#__PURE__*/ (function (ApplicationType) {
      ApplicationType["INDIVIDUAL"] = "INDIVIDUAL";
      ApplicationType["GROUP"] = "GROUP";
      return ApplicationType;
    })({});
    var TravelPurpose = /*#__PURE__*/ (function (TravelPurpose) {
      TravelPurpose["TOURISM"] = "TOURISM";
      TravelPurpose["BUSINESS"] = "BUSINESS";
      TravelPurpose["TRANSIT"] = "TRANSIT";
      TravelPurpose["MEDICAL"] = "MEDICAL";
      return TravelPurpose;
    })({});
    var ApplicationStatus = /*#__PURE__*/ (function (ApplicationStatus) {
      ApplicationStatus["DRAFT"] = "DRAFT";
      ApplicationStatus["PENDING_PAYMENT"] = "PENDING_PAYMENT";
      ApplicationStatus["PROCESSING"] = "PROCESSING";
      ApplicationStatus["APPROVED"] = "APPROVED";
      ApplicationStatus["DENIED"] = "DENIED";
      return ApplicationStatus;
    })({});
    var PaymentStatus = /*#__PURE__*/ (function (PaymentStatus) {
      PaymentStatus["PENDING"] = "PENDING";
      PaymentStatus["SUCCEEDED"] = "SUCCEEDED";
      PaymentStatus["FAILED"] = "FAILED";
      PaymentStatus["CANCELED"] = "CANCELED";
      return PaymentStatus;
    })({});
  },
  "[project]/Documents/Self /esta/frontend/app/lib/api/index.ts [app-rsc] (ecmascript) <locals>",
  (__turbopack_context__) => {
    "use strict";

    // Export all API services
    __turbopack_context__.s([]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/services/auth.service.ts [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/services/applications.service.ts [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$payments$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/services/payments.service.ts [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$countries$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/services/countries.service.ts [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$users$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/services/users.service.ts [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/services/content.service.ts [app-rsc] (ecmascript)"
      );
    // Export types
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/types.ts [app-rsc] (ecmascript)"
      );
    // Export client
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)"
      );
  },
  "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    /**
     * Individual Blog Post Page
     * Displays single blog post with full content
     * Fetches from backend API - NO PRISMA
     */ __turbopack_context__.s([
      "default",
      () => BlogPostPage,
      "generateMetadata",
      () => generateMetadata,
      "generateStaticParams",
      () => generateStaticParams,
      "revalidate",
      () => revalidate,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/react-markdown/lib/index.js [app-rsc] (ecmascript) <export Markdown as default>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/seo/metadata.ts [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$seo$2f$structured$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/seo/structured-data.ts [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/index.ts [app-rsc] (ecmascript) <locals>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/services/content.service.ts [app-rsc] (ecmascript)"
      );
    async function generateStaticParams() {
      try {
        const response =
          await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            "contentService"
          ].getBlogPosts({
            limit: 1000,
          });
        const posts = response?.data || [];
        return posts.map((post) => ({
          slug: post.slug,
        }));
      } catch (error) {
        console.error("Error fetching blog posts for static params:", error);
        return [];
      }
    }
    async function generateMetadata({ params }) {
      try {
        const { slug } = await params;
        const post =
          await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            "contentService"
          ].getBySlug(slug);
        if (!post || post.status !== "PUBLISHED") {
          return {
            title: "Blog Post Not Found",
          };
        }
        return (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "generateBlogMetadata"
        ])(
          post.metaTitle || post.title,
          post.metaDescription || post.excerpt || "",
          post.slug,
          post.publishedAt || new Date().toISOString(),
          post.updatedAt,
          "ESTA Visa Portal Team",
          post.keywords,
          post.featuredImage || undefined
        );
      } catch (error) {
        return {
          title: "Blog Post Not Found",
        };
      }
    }
    const revalidate = 3600; // Revalidate every hour
    async function BlogPostPage({ params }) {
      const { slug } = await params;
      let post;
      try {
        post =
          await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
            "contentService"
          ].getBySlug(slug);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "notFound"
        ])();
      }
      if (!post || post.status !== "PUBLISHED") {
        (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "notFound"
        ])();
      }
      // Note: View count increment should be handled by backend API
      // Backend will increment on GET request
      // Generate structured data
      const structuredData = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$seo$2f$structured$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "generateArticleSchema"
      ])({
        title: post.title,
        description: post.metaDescription || post.excerpt || "",
        url: `${
          ("TURBOPACK compile-time value", "https://www.visaportal.online") ||
          "https://www.visaportal.online"
        }/blog/${post.slug}`,
        datePublished: post.publishedAt || new Date().toISOString(),
        dateModified: post.updatedAt,
        author: "ESTA Visa Portal Team",
        image: post.featuredImage,
        keywords: post.keywords,
      });
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "Fragment"
        ],
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "script",
              {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                  __html: JSON.stringify(structuredData),
                },
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                lineNumber: 99,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "min-h-screen bg-white",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "article",
                  {
                    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "header",
                        {
                          className: "mb-8",
                          children: [
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "div",
                              {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                  post.category &&
                                    /*#__PURE__*/ (0,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                      "jsxDEV"
                                    ])(
                                      "span",
                                      {
                                        className:
                                          "text-sm font-medium text-blue-600 uppercase tracking-wide",
                                        children: post.category,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName:
                                          "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "span",
                                    {
                                      className: "text-sm text-gray-500",
                                      children: post.publishedAt
                                        ? new Date(
                                            post.publishedAt
                                          ).toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                          })
                                        : "Draft",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                      lineNumber: 116,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "span",
                                    {
                                      className: "text-sm text-gray-500",
                                      children: [
                                        post.views.toLocaleString(),
                                        " views",
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName:
                                        "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                      lineNumber: 125,
                                      columnNumber: 15,
                                    },
                                    this
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName:
                                  "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                lineNumber: 110,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /*#__PURE__*/ (0,
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              "jsxDEV"
                            ])(
                              "h1",
                              {
                                className:
                                  "text-4xl font-bold text-gray-900 mb-4",
                                children: post.title,
                              },
                              void 0,
                              false,
                              {
                                fileName:
                                  "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                lineNumber: 130,
                                columnNumber: 13,
                              },
                              this
                            ),
                            post.excerpt &&
                              /*#__PURE__*/ (0,
                              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                "jsxDEV"
                              ])(
                                "p",
                                {
                                  className:
                                    "text-xl text-gray-600 leading-relaxed",
                                  children: post.excerpt,
                                },
                                void 0,
                                false,
                                {
                                  fileName:
                                    "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                  lineNumber: 135,
                                  columnNumber: 15,
                                },
                                this
                              ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName:
                            "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                          lineNumber: 109,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "div",
                        {
                          className: "prose prose-lg prose-blue max-w-none",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__[
                              "default"
                            ],
                            {
                              children: post.content,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                              lineNumber: 143,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                          lineNumber: 142,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        "footer",
                        {
                          className: "mt-12 pt-8 border-t border-gray-200",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "flex items-center justify-between",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "div",
                                  {
                                    className: "text-sm text-gray-500",
                                    children: [
                                      "Last updated:",
                                      " ",
                                      new Date(
                                        post.updatedAt
                                      ).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                      }),
                                    ],
                                  },
                                  void 0,
                                  true,
                                  {
                                    fileName:
                                      "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                                post.aiGenerated &&
                                  /*#__PURE__*/ (0,
                                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                    "jsxDEV"
                                  ])(
                                    "div",
                                    {
                                      className: "text-xs text-gray-400",
                                      children: "AI-Enhanced Content",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName:
                                        "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                      lineNumber: 158,
                                      columnNumber: 17,
                                    },
                                    this
                                  ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName:
                                "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                              lineNumber: 148,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                          lineNumber: 147,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                    lineNumber: 107,
                    columnNumber: 9,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName:
                  "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                lineNumber: 106,
                columnNumber: 7,
              },
              this
            ),
          ],
        },
        void 0,
        true
      );
    }
  },
  "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)",
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"
      )
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fa361026._.js.map
