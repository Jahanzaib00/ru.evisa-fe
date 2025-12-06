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
      // Get categories (backend handles filtering)
      async getCategories(type) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "api"
        ].get("/content/public/categories", {
          params: type
            ? {
                type,
              }
            : undefined,
        });
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
  "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx [app-rsc] (client reference proxy) <module evaluation>",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"
      );
    const __TURBOPACK__default__export__ = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
        );
      },
      "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx <module evaluation>",
      "default"
    );
  },
  "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx [app-rsc] (client reference proxy)",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"
      );
    const __TURBOPACK__default__export__ = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
        );
      },
      "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
      "default"
    );
  },
  "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx [app-rsc] (client reference proxy) <module evaluation>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx [app-rsc] (client reference proxy)"
      );
    __turbopack_context__.n(
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__
    );
  },
  "[project]/Documents/Self /esta/frontend/app/components/home/Footer.tsx [app-rsc] (client reference proxy) <module evaluation>",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"
      );
    const __TURBOPACK__default__export__ = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/home/Footer.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
        );
      },
      "[project]/Documents/Self /esta/frontend/app/components/home/Footer.tsx <module evaluation>",
      "default"
    );
  },
  "[project]/Documents/Self /esta/frontend/app/components/home/Footer.tsx [app-rsc] (client reference proxy)",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"
      );
    const __TURBOPACK__default__export__ = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/home/Footer.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
        );
      },
      "[project]/Documents/Self /esta/frontend/app/components/home/Footer.tsx",
      "default"
    );
  },
  "[project]/Documents/Self /esta/frontend/app/components/home/Footer.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$home$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/home/Footer.tsx [app-rsc] (client reference proxy) <module evaluation>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$home$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/home/Footer.tsx [app-rsc] (client reference proxy)"
      );
    __turbopack_context__.n(
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$home$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__
    );
  },
  "[project]/Documents/Self /esta/frontend/app/components/ui/Section.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Section]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)"
      );
    function Section({
      id,
      children,
      className = "",
      background = "white",
      padding = "lg",
    }) {
      const backgroundStyles = {
        white: "bg-white",
        gray: "bg-gray-lightest",
        blue: "bg-primary",
        dark: "bg-gray-dark",
      };
      const paddingStyles = {
        sm: "py-8 md:py-12",
        md: "py-12 md:py-16",
        lg: "py-16 md:py-24",
        xl: "py-20 md:py-32",
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "section",
        {
          id: id,
          className: `${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`,
          children: children,
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Documents/Self /esta/frontend/app/components/ui/Section.tsx",
          lineNumber: 33,
          columnNumber: 5,
        },
        this
      );
    }
  },
  "[project]/Documents/Self /esta/frontend/app/components/ui/Container.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => Container]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)"
      );
    function Container({ children, className = "", maxWidth = "lg" }) {
      const maxWidthStyles = {
        sm: "max-w-3xl",
        md: "max-w-5xl",
        lg: "max-w-7xl",
        xl: "max-w-[1400px]",
        full: "max-w-full",
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: `${maxWidthStyles[maxWidth]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`,
          children: children,
        },
        void 0,
        false,
        {
          fileName:
            "[project]/Documents/Self /esta/frontend/app/components/ui/Container.tsx",
          lineNumber: 23,
          columnNumber: 5,
        },
        this
      );
    }
  },
  "[project]/Documents/Self /esta/frontend/app/components/content/GuidesListClient.tsx [app-rsc] (client reference proxy) <module evaluation>",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"
      );
    const __TURBOPACK__default__export__ = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/content/GuidesListClient.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
        );
      },
      "[project]/Documents/Self /esta/frontend/app/components/content/GuidesListClient.tsx <module evaluation>",
      "default"
    );
  },
  "[project]/Documents/Self /esta/frontend/app/components/content/GuidesListClient.tsx [app-rsc] (client reference proxy)",
  (__turbopack_context__) => {
    "use strict";

    // This file is generated by next-core EcmascriptClientReferenceModule.
    __turbopack_context__.s(["default", () => __TURBOPACK__default__export__]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"
      );
    const __TURBOPACK__default__export__ = (0,
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
      "registerClientReference"
    ])(
      function () {
        throw new Error(
          "Attempted to call the default export of [project]/Documents/Self /esta/frontend/app/components/content/GuidesListClient.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component."
        );
      },
      "[project]/Documents/Self /esta/frontend/app/components/content/GuidesListClient.tsx",
      "default"
    );
  },
  "[project]/Documents/Self /esta/frontend/app/components/content/GuidesListClient.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$GuidesListClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/content/GuidesListClient.tsx [app-rsc] (client reference proxy) <module evaluation>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$GuidesListClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/content/GuidesListClient.tsx [app-rsc] (client reference proxy)"
      );
    __turbopack_context__.n(
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$GuidesListClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__
    );
  },
  "[project]/Documents/Self /esta/frontend/app/guides/page.tsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    /**
     * Guides Listing Page
     * Displays all published guides from backend API
     * NO STATIC DATA - Uses NestJS backend following industry standards
     *
     * PROFESSIONAL DESIGN:
     * - Uses Section/Container components
     * - Category filtering
     * - Pagination
     * - Search functionality
     * - Government-inspired design
     */ __turbopack_context__.s([
      "default",
      () => GuidesPage,
      "generateMetadata",
      () => generateMetadata,
      "revalidate",
      () => revalidate,
    ]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/seo/metadata.ts [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/index.ts [app-rsc] (ecmascript) <locals>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/lib/api/services/content.service.ts [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$home$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/home/Footer.tsx [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/ui/Section.tsx [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/ui/Container.tsx [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$GuidesListClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/components/content/GuidesListClient.tsx [app-rsc] (ecmascript)"
      );
    async function generateMetadata({ searchParams }) {
      const params = await searchParams;
      const currentPage = parseInt(params.page || "1");
      const category = params.category;
      const searchQuery = params.search;
      // Build dynamic title and description
      let title = "ESTA Guides & Resources";
      let description =
        "Complete collection of ESTA guides and resources. Learn everything about ESTA requirements, application process, fees, validity, and more. Expert guidance for U.S. travel authorization.";
      if (searchQuery) {
        title = `Search results for "${searchQuery}" - ESTA Guides`;
        description = `Search results for "${searchQuery}" in our ESTA guides. Find expert advice and step-by-step instructions.`;
      } else if (category) {
        title = `${category} Guides - ESTA Resources`;
        description = `Browse ${category} guides about ESTA applications, travel tips, and visa waiver program information.`;
      } else if (currentPage > 1) {
        title = `ESTA Guides - Page ${currentPage}`;
        description = `Browse ESTA guides and resources - Page ${currentPage}. Expert advice for U.S. travel authorization.`;
      }
      // Build canonical URL
      const baseUrl =
        ("TURBOPACK compile-time value", "https://www.visaportal.online") ||
        "https://www.visaportal.online";
      let canonicalUrl = `${baseUrl}/guides`;
      if (category && !searchQuery && currentPage === 1) {
        canonicalUrl = `${baseUrl}/guides?category=${category}`;
      }
      const metadata = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$seo$2f$metadata$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "generateMetadata"
      ])({
        title,
        description,
        keywords: [
          "ESTA guides",
          "ESTA resources",
          "ESTA information",
          "ESTA help",
          "travel authorization guides",
          "ESTA knowledge base",
        ],
        canonicalUrl,
      });
      // Add noindex for paginated/filtered pages to avoid duplicate content
      if (currentPage > 1 || searchQuery) {
        metadata.robots = {
          index: false,
          follow: true,
        };
      }
      return metadata;
    }
    const revalidate = 3600; // Revalidate every hour
    const GUIDES_PER_PAGE = 12;
    async function GuidesPage({ searchParams }) {
      const params = await searchParams;
      const currentPage = parseInt(params.page || "1");
      const category = params.category;
      const searchQuery = params.search;
      // SERVER-SIDE PAGINATION - fetch only what we need
      const offset = (currentPage - 1) * GUIDES_PER_PAGE;
      const [response, categories] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "contentService"
        ].getGuides({
          category,
          search: searchQuery,
          limit: GUIDES_PER_PAGE,
          offset,
        }),
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$content$2e$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
          "contentService"
        ].getCategories("GUIDE"),
      ]);
      const guides = response?.data || [];
      const total = response?.total || 0;
      const totalPages = Math.ceil(total / GUIDES_PER_PAGE);
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
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {},
              void 0,
              false,
              {
                fileName:
                  "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                lineNumber: 114,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "main",
              {
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      "default"
                    ],
                    {
                      id: "guides-hero",
                      background: "blue",
                      padding: "lg",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          maxWidth: "lg",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "div",
                            {
                              className: "text-center text-white",
                              children: [
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "h1",
                                  {
                                    className:
                                      "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
                                    children: "ESTA Guides & Resources",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                                /*#__PURE__*/ (0,
                                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                                  "jsxDEV"
                                ])(
                                  "p",
                                  {
                                    className:
                                      "text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed",
                                    children:
                                      "Everything you need to know about ESTA in one place. Expert guides covering all aspects of ESTA applications.",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName:
                                      "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                                    lineNumber: 124,
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
                                "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                              lineNumber: 120,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                          lineNumber: 119,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                      lineNumber: 118,
                      columnNumber: 9,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                      "default"
                    ],
                    {
                      id: "guides-content",
                      background: "gray",
                      padding: "xl",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Container$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          maxWidth: "xl",
                          children: /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$content$2f$GuidesListClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                              "default"
                            ],
                            {
                              guides: guides,
                              categories: categories,
                              currentPage: currentPage,
                              totalPages: totalPages,
                              selectedCategory: category,
                              searchQuery: searchQuery,
                              totalGuides: total,
                            },
                            void 0,
                            false,
                            {
                              fileName:
                                "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                              lineNumber: 135,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                          lineNumber: 134,
                          columnNumber: 11,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName:
                        "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                      lineNumber: 133,
                      columnNumber: 9,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName:
                  "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                lineNumber: 116,
                columnNumber: 7,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$home$2f$Footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {},
              void 0,
              false,
              {
                fileName:
                  "[project]/Documents/Self /esta/frontend/app/guides/page.tsx",
                lineNumber: 148,
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
  "[project]/Documents/Self /esta/frontend/app/guides/page.tsx [app-rsc] (ecmascript, Next.js Server Component)",
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        "[project]/Documents/Self /esta/frontend/app/guides/page.tsx [app-rsc] (ecmascript)"
      )
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4f084efa._.js.map
