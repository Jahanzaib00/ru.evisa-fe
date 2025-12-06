module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
    // DELETE request
    delete: (endpoint, options)=>fetchAPI(endpoint, {
            ...options,
            method: "DELETE"
        })
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/auth.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-route] (ecmascript)");
;
const authService = {
    async register (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].post("/auth/register", data);
        // Store tokens and user in localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return response;
    },
    async login (data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].post("/auth/login", data);
        // Store tokens and user in localStorage
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return response;
    },
    async getProfile () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get("/auth/me");
    },
    async refreshToken (refreshToken) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].post("/auth/refresh", {
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
"[project]/Documents/Self /esta/frontend/app/lib/api/services/applications.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applicationsService",
    ()=>applicationsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-route] (ecmascript)");
;
const applicationsService = {
    async create (data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].post("/applications", data);
    },
    async getAll (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get("/applications", {
            params
        });
    },
    async getMyApplications (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get("/applications/my", {
            params
        });
    },
    async getById (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get(`/applications/${id}`);
    },
    async update (id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].put(`/applications/${id}`, data);
    },
    async saveDraft (id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].post(`/applications/${id}/draft`, data);
    },
    async submit (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].post(`/applications/${id}/submit`);
    },
    async updateStatus (id, status, adminNotes) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].patch(`/applications/${id}/status`, {
            status,
            adminNotes
        });
    },
    async delete (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].delete(`/applications/${id}`);
    },
    async saveTravelers (id, travelers) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].post(`/applications/${id}/travelers`, travelers);
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/payments.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paymentsService",
    ()=>paymentsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-route] (ecmascript)");
;
const paymentsService = {
    async createPaymentIntent (data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].post("/payments/create-payment-intent", data);
    },
    async getPaymentStatus (applicationId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get(`/payments/application/${applicationId}`);
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/countries.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "countriesService",
    ()=>countriesService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-route] (ecmascript)");
;
const countriesService = {
    async getEligibleCountries () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get("/countries/eligible");
    },
    async getAllCountries () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get("/countries/all");
    },
    async checkEligibility (countryCode) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get(`/countries/${countryCode}/eligible`);
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/users.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usersService",
    ()=>usersService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-route] (ecmascript)");
;
const usersService = {
    async getProfile () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get("/users/me");
    },
    async updateProfile (data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].put("/users/me", data);
    },
    async getMyApplications () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get("/users/me/applications");
    },
    async getAllUsers (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get("/users", {
            params
        });
    },
    async getUserById (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get(`/users/${id}`);
    },
    async updateUser (id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].put(`/users/${id}`, data);
    },
    async deactivateUser (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].patch(`/users/${id}/deactivate`);
    },
    async activateUser (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].patch(`/users/${id}/activate`);
    },
    async getUserApplications (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get(`/users/${id}/applications`);
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/content.service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentService",
    ()=>contentService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-route] (ecmascript)");
;
const contentService = {
    // Get all published content (client unwraps TransformInterceptor automatically)
    async getPublicContent (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get("/content/public", {
            params
        });
    },
    // Get content by slug (client unwraps TransformInterceptor automatically)
    async getBySlug (slug) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get(`/content/public/slug/${slug}`);
    },
    // Get content statistics (client unwraps TransformInterceptor automatically)
    async getStats () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["api"].get("/content/public/stats");
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
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/types.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
    ApplicationStatus["EXPIRED"] = "EXPIRED";
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
"[project]/Documents/Self /esta/frontend/app/lib/api/index.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Export all API services
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$auth$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/auth.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/applications.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$payments$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/payments.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$countries$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/countries.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$users$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/users.service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/content.service.ts [app-route] (ecmascript)");
// Export types
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$types$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/types.ts [app-route] (ecmascript)");
// Export client
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/Documents/Self /esta/frontend/app/blog/sitemap.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sitemap,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/index.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/content.service.ts [app-route] (ecmascript)");
;
async function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://visaportal.online';
    try {
        // Fetch all blog posts (up to 50K limit)
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["contentService"].getBlogPosts({
            limit: 50000
        });
        const posts = response?.data || [];
        return posts.map((post)=>({
                url: `${baseUrl}/blog/${post.slug}`,
                lastModified: new Date(post.updatedAt),
                changeFrequency: 'monthly',
                priority: 0.7
            }));
    } catch (error) {
        console.error('Error generating blog sitemap:', error);
        // Return empty array on error (Next.js will handle gracefully)
        return [];
    }
}
const revalidate = 3600;
}),
"[project]/Documents/Self /esta/frontend/app/blog/sitemap--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$blog$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/blog/sitemap.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/xml";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "sitemap";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$blog$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./sitemap.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$blog$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
;
}),
"[project]/Documents/Self /esta/frontend/app/blog/sitemap--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$blog$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"],
    "revalidate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$blog$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidate"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$blog$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/blog/sitemap--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$blog$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/blog/sitemap.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d6afda4c._.js.map