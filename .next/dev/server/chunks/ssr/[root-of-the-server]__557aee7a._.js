module.exports = [
"[project]/Documents/Self /esta/frontend/app/icon.png.mjs { IMAGE => \"[project]/Documents/Self /esta/frontend/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/icon.png.mjs { IMAGE => \"[project]/Documents/Self /esta/frontend/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Documents/Self /esta/frontend/app/apple-icon.png.mjs { IMAGE => \"[project]/Documents/Self /esta/frontend/app/apple-icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/apple-icon.png.mjs { IMAGE => \"[project]/Documents/Self /esta/frontend/app/apple-icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/Self /esta/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/Self /esta/frontend/app/lib/seo/structured-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * JSON-LD Structured Data Utilities
 * Generates Schema.org markup for rich search results
 * Implements best practices for Google Search, Knowledge Graph, and rich snippets
 */ __turbopack_context__.s([
    "generateArticleSchema",
    ()=>generateArticleSchema,
    "generateBreadcrumbSchema",
    ()=>generateBreadcrumbSchema,
    "generateCountryPageSchema",
    ()=>generateCountryPageSchema,
    "generateFAQPageSchema",
    ()=>generateFAQPageSchema,
    "generateHowToSchema",
    ()=>generateHowToSchema,
    "generateOrganizationSchema",
    ()=>generateOrganizationSchema,
    "generateServiceSchema",
    ()=>generateServiceSchema,
    "generateWebPageSchema",
    ()=>generateWebPageSchema,
    "generateWebSiteSchema",
    ()=>generateWebSiteSchema,
    "renderStructuredData",
    ()=>renderStructuredData
]);
const SITE_NAME = "ESTA Visa Portal";
const SITE_URL = ("TURBOPACK compile-time value", "https://www.visaportal.com") || "https://www.visaportal.com";
const LOGO_URL = `${SITE_URL}/images/logo.png`;
const CONTACT_EMAIL = "support@visaportal.online";
function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: LOGO_URL,
        description: "Expert ESTA visa application assistance service for U.S. travel authorization. Fast, secure, and reliable ESTA processing with 24/7 support.",
        email: CONTACT_EMAIL,
        foundingDate: "2024",
        contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: CONTACT_EMAIL,
            availableLanguage: [
                "English"
            ],
            areaServed: "Worldwide"
        },
        sameAs: [],
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "1247",
            bestRating: "5",
            worstRating: "1"
        }
    };
}
function generateWebSiteSchema() {
    const potentialAction = {
        "@type": "SearchAction",
        target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/search?q={search_term_string}`
        }
    };
    // preserve the JSON-LD "query-input" key while avoiding TypeScript object-literal checks
    potentialAction["query-input"] = "required name=search_term_string";
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: "Fast and reliable ESTA visa application service for U.S. travel authorization",
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: {
                "@type": "ImageObject",
                url: LOGO_URL
            }
        },
        potentialAction: potentialAction
    };
}
function generateWebPageSchema(config) {
    const { title, description, url, datePublished, dateModified, breadcrumbs } = config;
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: title,
        description,
        url,
        ...datePublished && {
            datePublished
        },
        ...dateModified && {
            dateModified
        },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: {
                "@type": "ImageObject",
                url: LOGO_URL
            }
        },
        ...breadcrumbs && {
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: breadcrumbs.map((crumb, index)=>({
                        "@type": "ListItem",
                        position: index + 1,
                        name: crumb.name,
                        item: crumb.url
                    }))
            }
        }
    };
}
function generateBreadcrumbSchema(breadcrumbs) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index)=>({
                "@type": "ListItem",
                position: index + 1,
                name: crumb.name,
                item: crumb.url
            }))
    };
}
function generateFAQPageSchema(faqs) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq)=>({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                }
            }))
    };
}
function generateArticleSchema(config) {
    const { title, description, url, datePublished, dateModified, author, image, keywords } = config;
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
            name: author
        },
        publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: {
                "@type": "ImageObject",
                url: LOGO_URL
            }
        },
        ...image && {
            image: {
                "@type": "ImageObject",
                url: image
            }
        },
        ...keywords && {
            keywords: keywords.join(", ")
        }
    };
}
function generateServiceSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "ESTA Visa Application Assistance",
        name: "ESTA Application Service",
        description: "Expert assistance with U.S. ESTA (Electronic System for Travel Authorization) applications. Fast processing, 99% approval rate, 24/7 support.",
        provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL
        },
        areaServed: {
            "@type": "Place",
            name: "Worldwide"
        },
        availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${SITE_URL}/apply`,
            servicePhone: {
                "@type": "ContactPoint",
                email: CONTACT_EMAIL
            },
            availableLanguage: [
                "English"
            ]
        },
        offers: {
            "@type": "Offer",
            price: "45.00",
            priceCurrency: "USD",
            description: "Complete ESTA application service including government fee ($40) and service fee ($5)",
            availability: "https://schema.org/InStock"
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.95",
            reviewCount: "66000",
            bestRating: "5",
            worstRating: "1"
        }
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
        ...totalTime && {
            totalTime
        },
        step: steps.map((step, index)=>({
                "@type": "HowToStep",
                position: index + 1,
                name: step.name,
                text: step.text,
                ...step.url && {
                    url: step.url
                },
                ...step.image && {
                    image: {
                        "@type": "ImageObject",
                        url: step.image
                    }
                }
            }))
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
                        item: SITE_URL
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: "Countries",
                        item: `${SITE_URL}/countries`
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        name: countryName,
                        item: url
                    }
                ]
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: `ESTA Application Service for ${countryName} Citizens`,
            name: `ESTA for ${countryName}`,
            description: `Specialized ESTA application assistance for ${countryName} nationals traveling to the United States.`,
            provider: {
                "@type": "Organization",
                name: SITE_NAME
            },
            areaServed: {
                "@type": "Country",
                name: countryName
            },
            offers: {
                "@type": "Offer",
                price: "45.00",
                priceCurrency: "USD"
            }
        }
    ];
}
function renderStructuredData(schema) {
    const data = Array.isArray(schema) ? schema : [
        schema
    ];
    return data.map((s)=>JSON.stringify(s, null, 2)).join("\n");
}
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Client for Backend Communication
 * Following Rails Controller → View pattern
 * Frontend NEVER touches database - only calls backend API
 */ __turbopack_context__.s([
    "APIError",
    ()=>APIError,
    "api",
    ()=>api
]);
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:3001") || "http://localhost:3001";
class APIError extends Error {
    status;
    constructor(status, message){
        super(message), this.status = status;
        this.name = "APIError";
    }
}
async function fetchAPI(endpoint, options = {}) {
    let url = `${API_BASE_URL}${endpoint}`;
    // Handle query parameters
    if (options.params) {
        const searchParams = new URLSearchParams();
        Object.entries(options.params).forEach(([key, value])=>{
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
            ...options.headers
        }
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
    get: (endpoint, options)=>fetchAPI(endpoint, {
            ...options,
            method: "GET"
        }),
    // POST request
    post: (endpoint, data, options)=>fetchAPI(endpoint, {
            ...options,
            method: "POST",
            body: JSON.stringify(data)
        }),
    // PUT request
    put: (endpoint, data, options)=>fetchAPI(endpoint, {
            ...options,
            method: "PUT",
            body: JSON.stringify(data)
        }),
    // PATCH request
    patch: (endpoint, data, options)=>fetchAPI(endpoint, {
            ...options,
            method: "PATCH",
            body: JSON.stringify(data)
        }),
    // DELETE request
    delete: (endpoint, options)=>fetchAPI(endpoint, {
            ...options,
            method: "DELETE"
        })
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/auth.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)");
;
const authService = {
    async register (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post("/auth/register", data);
        // Store tokens and user in localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return response;
    },
    async login (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post("/auth/login", data);
        // Store tokens and user in localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return response;
    },
    async getProfile () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/auth/me");
    },
    async refreshToken (refreshToken) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post("/auth/refresh", {
            refresh_token: refreshToken
        });
        // Update tokens in localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return response;
    },
    isAuthenticated () {
        if ("TURBOPACK compile-time truthy", 1) return false;
        //TURBOPACK unreachable
        ;
    },
    getUser () {
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const userStr = undefined;
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/applications.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applicationsService",
    ()=>applicationsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)");
;
const applicationsService = {
    async create (data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post("/applications", data);
    },
    async getAll (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/applications", {
            params
        });
    },
    async getMyApplications (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/applications/my", {
            params
        });
    },
    async getById (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get(`/applications/${id}`);
    },
    async update (id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].put(`/applications/${id}`, data);
    },
    async saveDraft (id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post(`/applications/${id}/draft`, data);
    },
    async submit (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post(`/applications/${id}/submit`, {});
    },
    async updateStatus (id, status, adminNotes) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].patch(`/applications/${id}/status`, {
            status,
            adminNotes
        });
    },
    async delete (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].delete(`/applications/${id}`);
    },
    async saveTravelers (id, travelers) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post(`/applications/${id}/travelers`, travelers);
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/payments.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paymentsService",
    ()=>paymentsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)");
;
const paymentsService = {
    async createPaymentIntent (data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].post("/payments/create-payment-intent", data);
    },
    async getPaymentStatus (applicationId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get(`/payments/application/${applicationId}`);
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/countries.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countriesService",
    ()=>countriesService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)");
;
const countriesService = {
    async getEligibleCountries () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/countries/eligible");
    },
    async getAllCountries () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/countries/all");
    },
    async checkEligibility (countryCode) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get(`/countries/${countryCode}/eligible`);
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/users.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usersService",
    ()=>usersService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)");
;
const usersService = {
    async getProfile () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/users/me");
    },
    async updateProfile (data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].put("/users/me", data);
    },
    async getMyApplications () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/users/me/applications");
    },
    async getAllUsers (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/users", {
            params
        });
    },
    async getUserById (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get(`/users/${id}`);
    },
    async updateUser (id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].put(`/users/${id}`, data);
    },
    async deactivateUser (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].patch(`/users/${id}/deactivate`, {});
    },
    async activateUser (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].patch(`/users/${id}/activate`, {});
    },
    async getUserApplications (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get(`/users/${id}/applications`);
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/content.service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentService",
    ()=>contentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)");
;
const contentService = {
    // Get all published content (client unwraps TransformInterceptor automatically)
    async getPublicContent (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/content/public", {
            params
        });
    },
    // Get content by slug (client unwraps TransformInterceptor automatically)
    async getBySlug (slug) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get(`/content/public/slug/${slug}`);
    },
    // Get content statistics (client unwraps TransformInterceptor automatically)
    async getStats () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/content/public/stats");
    },
    // Get blog posts
    async getBlogPosts (params) {
        return this.getPublicContent({
            ...params,
            type: "BLOG"
        });
    },
    // Get country content
    async getCountryContent (params) {
        return this.getPublicContent({
            ...params,
            type: "COUNTRY"
        });
    },
    // Get guides
    async getGuides (params) {
        return this.getPublicContent({
            ...params,
            type: "GUIDE"
        });
    },
    // Get related content
    async getRelatedContent (slug, limit = 3) {
        const current = await this.getBySlug(slug);
        const { data } = await this.getPublicContent({
            type: current.type,
            category: current.category,
            limit: limit + 1
        });
        // Filter out current content and limit results
        return data.filter((item)=>item.slug !== slug).slice(0, limit);
    },
    // Get categories (backend handles filtering)
    async getCategories (type) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["api"].get("/content/public/categories", {
            params: type ? {
                type
            } : undefined
        });
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// API Response Types
__turbopack_context__.s([
    "ApplicationStatus",
    ()=>ApplicationStatus,
    "ApplicationType",
    ()=>ApplicationType,
    "PaymentStatus",
    ()=>PaymentStatus,
    "TravelPurpose",
    ()=>TravelPurpose
]);
var ApplicationType = /*#__PURE__*/ function(ApplicationType) {
    ApplicationType["INDIVIDUAL"] = "INDIVIDUAL";
    ApplicationType["GROUP"] = "GROUP";
    return ApplicationType;
}({});
var TravelPurpose = /*#__PURE__*/ function(TravelPurpose) {
    TravelPurpose["TOURISM"] = "TOURISM";
    TravelPurpose["BUSINESS"] = "BUSINESS";
    TravelPurpose["TRANSIT"] = "TRANSIT";
    TravelPurpose["MEDICAL"] = "MEDICAL";
    return TravelPurpose;
}({});
var ApplicationStatus = /*#__PURE__*/ function(ApplicationStatus) {
    ApplicationStatus["DRAFT"] = "DRAFT";
    ApplicationStatus["PENDING_PAYMENT"] = "PENDING_PAYMENT";
    ApplicationStatus["PROCESSING"] = "PROCESSING";
    ApplicationStatus["APPROVED"] = "APPROVED";
    ApplicationStatus["DENIED"] = "DENIED";
    return ApplicationStatus;
}({});
var PaymentStatus = /*#__PURE__*/ function(PaymentStatus) {
    PaymentStatus["PENDING"] = "PENDING";
    PaymentStatus["SUCCEEDED"] = "SUCCEEDED";
    PaymentStatus["FAILED"] = "FAILED";
    PaymentStatus["CANCELED"] = "CANCELED";
    return PaymentStatus;
}({});
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Export all API services
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/auth.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/applications.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$payments$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/payments.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$countries$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/countries.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$users$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/users.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/content.service.ts [app-rsc] (ecmascript)");
// Export types
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/types.ts [app-rsc] (ecmascript)");
// Export client
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/Documents/Self /esta/frontend/app/components/content/ContentPageLayout.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/content/ContentPageLayout.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Self /esta/frontend/app/components/content/ContentPageLayout.tsx <module evaluation>", "default");
}),
"[project]/Documents/Self /esta/frontend/app/components/content/ContentPageLayout.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/content/ContentPageLayout.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Self /esta/frontend/app/components/content/ContentPageLayout.tsx", "default");
}),
"[project]/Documents/Self /esta/frontend/app/components/content/ContentPageLayout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$ContentPageLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/ContentPageLayout.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$ContentPageLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/ContentPageLayout.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$ContentPageLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/Self /esta/frontend/app/components/content/InlineCTA.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/content/InlineCTA.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Self /esta/frontend/app/components/content/InlineCTA.tsx <module evaluation>", "default");
}),
"[project]/Documents/Self /esta/frontend/app/components/content/InlineCTA.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/content/InlineCTA.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Self /esta/frontend/app/components/content/InlineCTA.tsx", "default");
}),
"[project]/Documents/Self /esta/frontend/app/components/content/InlineCTA.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$InlineCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/InlineCTA.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$InlineCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/InlineCTA.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$InlineCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/Self /esta/frontend/app/components/content/TableOfContents.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/content/TableOfContents.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Self /esta/frontend/app/components/content/TableOfContents.tsx <module evaluation>", "default");
}),
"[project]/Documents/Self /esta/frontend/app/components/content/TableOfContents.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/content/TableOfContents.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Self /esta/frontend/app/components/content/TableOfContents.tsx", "default");
}),
"[project]/Documents/Self /esta/frontend/app/components/content/TableOfContents.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$TableOfContents$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/TableOfContents.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$TableOfContents$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/TableOfContents.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$TableOfContents$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContentGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function ContentGrid({ items, title = "Related Content", columns = 3, showExcerpt = true, showCategory = true, showDate = true, showViews = false }) {
    if (items.length === 0) return null;
    const gridClass = columns === 2 ? "md:grid-cols-2" : columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";
    const getContentUrl = (item)=>{
        switch(item.type){
            case "BLOG":
                return `/blog/${item.slug}`;
            case "GUIDE":
                return `/guides/${item.slug}`;
            case "COUNTRY":
                return `/countries/${item.slug}`;
            default:
                return `/${item.slug}`;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-12",
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl md:text-3xl font-bold text-gray-900 mb-6",
                children: title
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid gap-6 ${gridClass}`,
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: getContentUrl(item),
                        className: "group bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-xl transition-all duration-300 overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 mb-3 text-xs",
                                    children: [
                                        showCategory && item.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded uppercase",
                                            children: item.category
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                            lineNumber: 69,
                                            columnNumber: 19
                                        }, this),
                                        showDate && item.publishedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500",
                                            children: new Date(item.publishedAt).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric"
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this),
                                        showViews && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-500 flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this),
                                                item.views.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                showExcerpt && item.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm line-clamp-3 mb-4",
                                    children: item.excerpt
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700",
                                    children: [
                                        "Read more",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Self /esta/frontend/app/components/content/MarkdownRenderer.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/content/MarkdownRenderer.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Self /esta/frontend/app/components/content/MarkdownRenderer.tsx <module evaluation>", "default");
}),
"[project]/Documents/Self /esta/frontend/app/components/content/MarkdownRenderer.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/content/MarkdownRenderer.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/Self /esta/frontend/app/components/content/MarkdownRenderer.tsx", "default");
}),
"[project]/Documents/Self /esta/frontend/app/components/content/MarkdownRenderer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/MarkdownRenderer.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/MarkdownRenderer.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Individual Blog Post Page
 * Displays single blog post with full content
 * Fetches from backend API - NO PRISMA
 *
 * CONVERSION-OPTIMIZED DESIGN:
 * - Multiple CTAs throughout content (early, mid, bottom)
 * - Table of contents for engagement
 * - Related content for increased page views
 * - Sticky CTA bar for mobile conversions
 * - SEO-optimized with structured data
 */ __turbopack_context__.s([
    "default",
    ()=>BlogPostPage,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/seo/metadata.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$seo$2f$structured$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/seo/structured-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/content.service.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$ContentPageLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/ContentPageLayout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$InlineCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/InlineCTA.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$TableOfContents$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/TableOfContents.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$ContentGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/ContentGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/content/MarkdownRenderer.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const dynamicParams = true;
async function generateMetadata({ params }) {
    try {
        const { slug } = await params;
        const post = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentService"].getBySlug(slug);
        if (!post || post.status !== "PUBLISHED") {
            return {
                title: "Blog Post Not Found",
                robots: {
                    index: false,
                    follow: false
                }
            };
        }
        const baseUrl = ("TURBOPACK compile-time value", "https://www.visaportal.com") || "https://www.visaportal.com";
        const canonicalUrl = `${baseUrl}/blog/${post.slug}`;
        const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateBlogMetadata"])(post.metaTitle || post.title, post.metaDescription || post.excerpt || "", post.slug, post.publishedAt || new Date().toISOString(), post.updatedAt, "ESTA Visa Portal Team", post.keywords, post.featuredImage || undefined);
        // Ensure canonical URL is set
        if (!metadata.alternates) {
            metadata.alternates = {};
        }
        metadata.alternates.canonical = canonicalUrl;
        // Ensure Open Graph image is set
        if (!metadata.openGraph) {
            metadata.openGraph = {};
        }
        if (post.featuredImage && !metadata.openGraph.images) {
            metadata.openGraph.images = [
                {
                    url: post.featuredImage,
                    width: 1200,
                    height: 630,
                    alt: post.title
                }
            ];
        }
        // Twitter card
        if (post.featuredImage) {
            metadata.twitter = {
                card: "summary_large_image",
                images: [
                    post.featuredImage
                ]
            };
        }
        return metadata;
    } catch (error) {
        return {
            title: "Blog Post Not Found",
            robots: {
                index: false,
                follow: false
            }
        };
    }
}
const revalidate = 3600; // Revalidate every hour
async function BlogPostPage({ params }) {
    const { slug } = await params;
    let post;
    let relatedContent;
    try {
        post = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentService"].getBySlug(slug);
        relatedContent = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentService"].getRelatedContent(slug, 3);
    } catch (error) {
        console.error("Error fetching blog post:", error);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    if (!post || post.status !== "PUBLISHED") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Generate structured data
    const structuredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$seo$2f$structured$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateArticleSchema"])({
        title: post.title,
        description: post.metaDescription || post.excerpt || "",
        url: `${("TURBOPACK compile-time value", "https://www.visaportal.com") || "https://www.visaportal.com"}/blog/${post.slug}`,
        datePublished: post.publishedAt || new Date().toISOString(),
        dateModified: post.updatedAt,
        author: "ESTA Visa Portal Team",
        image: post.featuredImage,
        keywords: post.keywords
    });
    const breadcrumbs = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "Blog",
            url: "/blog"
        },
        {
            name: post.title,
            url: `/blog/${post.slug}`
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(structuredData)
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$InlineCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                variant: "sticky",
                position: "sticky-bottom"
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$ContentPageLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                breadcrumbs: breadcrumbs,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-12 bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 max-w-7xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-[1fr_300px] gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "max-w-4xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                            className: "mb-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-3 mb-4 text-sm",
                                                    children: [
                                                        post.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-full uppercase",
                                                            children: post.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 23
                                                                }, this),
                                                                post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                                                                    month: "long",
                                                                    day: "numeric",
                                                                    year: "numeric"
                                                                }) : "Draft"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-500 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-4 h-4",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                                            lineNumber: 203,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                                            lineNumber: 209,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                                    lineNumber: 197,
                                                                    columnNumber: 23
                                                                }, this),
                                                                post.views.toLocaleString(),
                                                                " views"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                            lineNumber: 196,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight",
                                                    children: post.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this),
                                                post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xl text-gray-600 leading-relaxed border-l-4 border-blue-600 pl-6 py-2",
                                                    children: post.excerpt
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$InlineCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "minimal",
                                            position: "early",
                                            title: "Need help with your ESTA application?",
                                            description: "Our experts are available 24/7 to assist you. Start your application now."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-none mb-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                content: post.content,
                                                injectCTAs: true,
                                                ctaFrequency: 3
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$InlineCTA$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "banner",
                                            position: "bottom",
                                            title: "Ready to Start Your ESTA Application?",
                                            description: "Join thousands of travelers who trust us for their ESTA needs. 99% approval rate guaranteed.",
                                            buttonText: "Apply Now"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                            className: "mt-12 pt-8 border-t border-gray-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-600 mb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Last updated:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ",
                                                                new Date(post.updatedAt).toLocaleDateString("en-US", {
                                                                    month: "long",
                                                                    day: "numeric",
                                                                    year: "numeric"
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Written by:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 25
                                                                }, this),
                                                                " ESTA Visa Portal Team"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, this),
                                        relatedContent && relatedContent.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-16 pt-12 border-t border-gray-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$ContentGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                items: relatedContent,
                                                title: "Related Articles",
                                                columns: 3,
                                                showExcerpt: true,
                                                showCategory: true,
                                                showDate: false
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "hidden lg:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$TableOfContents$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                    lineNumber: 158,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__557aee7a._.js.map