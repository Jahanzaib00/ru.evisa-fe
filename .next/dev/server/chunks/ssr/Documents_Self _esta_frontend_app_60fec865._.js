module.exports = [
"[project]/Documents/Self /esta/frontend/app/lib/store/postPaymentStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePostPaymentStore",
    ()=>usePostPaymentStore,
    "useTravelers",
    ()=>useTravelers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
;
;
const usePostPaymentStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        application: null,
        currentTravelerId: null,
        isLoading: false,
        error: null,
        setApplication: (application)=>set({
                application
            }),
        setCurrentTravelerId: (id)=>set({
                currentTravelerId: id
            }),
        setLoading: (loading)=>set({
                isLoading: loading
            }),
        setError: (error)=>set({
                error
            }),
        updateApplicationField: (field, value)=>set((state)=>({
                    application: state.application ? {
                        ...state.application,
                        [field]: value
                    } : null
                })),
        updateTravelerField: (travelerId, field, value)=>set((state)=>{
                if (!state.application?.travelers) return state;
                return {
                    application: {
                        ...state.application,
                        travelers: state.application.travelers.map((t)=>t.id === travelerId ? {
                                ...t,
                                [field]: value
                            } : t)
                    }
                };
            }),
        clearStore: ()=>set({
                application: null,
                currentTravelerId: null,
                isLoading: false,
                error: null
            })
    }), {
    name: "post-payment-storage",
    partialize: (state)=>({
            application: state.application,
            currentTravelerId: state.currentTravelerId
        })
}));
const useTravelers = ()=>usePostPaymentStore((state)=>state.application?.travelers ?? []);
}),
"[project]/Documents/Self /esta/frontend/app/lib/api/services/applications.service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applicationsService",
    ()=>applicationsService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/client.ts [app-ssr] (ecmascript)");
;
const applicationsService = {
    async create (data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/applications", data);
    },
    async getAll (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/applications", {
            params
        });
    },
    async getMyApplications (params) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/applications/my", {
            params
        });
    },
    async getById (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/applications/${id}`);
    },
    async update (id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put(`/applications/${id}`, data);
    },
    async saveDraft (id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/applications/${id}/draft`, data);
    },
    async submit (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/applications/${id}/submit`, {});
    },
    async updateStatus (id, status, adminNotes) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/applications/${id}/status`, {
            status,
            adminNotes
        });
    },
    async delete (id) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/applications/${id}`);
    },
    async saveTravelers (id, travelers) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post(`/applications/${id}/travelers`, travelers);
    },
    // Post-payment unified progress endpoint
    async saveProgress (id, data) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/applications/${id}/progress`, data);
    },
    // Helper methods for convenience (wrapper around saveProgress)
    async updateUsContact (id, data) {
        return this.saveProgress(id, {
            application: data
        });
    },
    async updateUsStay (id, data) {
        return this.saveProgress(id, {
            application: data
        });
    },
    async updateTravelDetails (id, data) {
        return this.saveProgress(id, {
            application: data
        });
    },
    async updateTravelerPersonal (id, travelerId, data) {
        return this.saveProgress(id, {
            travelers: [
                {
                    id: travelerId,
                    ...data
                }
            ]
        });
    },
    async updateTravelerParents (id, travelerId, data) {
        return this.saveProgress(id, {
            travelers: [
                {
                    id: travelerId,
                    ...data
                }
            ]
        });
    },
    async updateTravelerContact (id, travelerId, data) {
        return this.saveProgress(id, {
            travelers: [
                {
                    id: travelerId,
                    ...data
                }
            ]
        });
    },
    async updateTravelerPassport (id, travelerId, data) {
        return this.saveProgress(id, {
            travelers: [
                {
                    id: travelerId,
                    ...data
                }
            ]
        });
    },
    async updateTravelerCitizenship (id, travelerId, data) {
        return this.saveProgress(id, {
            travelers: [
                {
                    id: travelerId,
                    ...data
                }
            ]
        });
    },
    async updateTravelerEmployment (id, travelerId, data) {
        return this.saveProgress(id, {
            travelers: [
                {
                    id: travelerId,
                    ...data
                }
            ]
        });
    },
    async updateTravelerEmergencyContact (id, travelerId, data) {
        return this.saveProgress(id, {
            travelers: [
                {
                    id: travelerId,
                    ...data
                }
            ]
        });
    },
    async updateTravelerGlobalEntry (id, travelerId, data) {
        return this.saveProgress(id, {
            travelers: [
                {
                    id: travelerId,
                    ...data
                }
            ]
        });
    },
    async updateTravelerSocialMedia (id, travelerId, data) {
        return this.saveProgress(id, {
            travelers: [
                {
                    id: travelerId,
                    ...data
                }
            ]
        });
    },
    async updateTravelerEligibility (id, travelerId, data) {
        return this.saveProgress(id, {
            travelers: [
                {
                    id: travelerId,
                    ...data
                }
            ]
        });
    }
};
}),
"[project]/Documents/Self /esta/frontend/app/lib/utils/errorHandler.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractErrorMessage",
    ()=>extractErrorMessage,
    "isAuthError",
    ()=>isAuthError,
    "isErrorType",
    ()=>isErrorType,
    "isNetworkError",
    ()=>isNetworkError,
    "isNotFoundError",
    ()=>isNotFoundError,
    "isValidationError",
    ()=>isValidationError,
    "logError",
    ()=>logError
]);
function extractErrorMessage(error, defaultMessage = "An unexpected error occurred. Please try again.") {
    // Handle Axios errors
    if (error && typeof error === "object" && "response" in error) {
        const axiosError = error;
        // Try multiple paths for the error message
        // Backend might return: { message, error, statusCode } or { data: { message }, statusCode, ... }
        const response = axiosError.response;
        if (response?.data) {
            // Path 1: response.data.message (NestJS exception format)
            if (response.data.message) {
                if (Array.isArray(response.data.message)) {
                    // Validation errors come as array
                    return response.data.message.join(", ");
                }
                return response.data.message;
            }
            // Path 2: response.data.data.message (wrapped response)
            if (response.data.data?.message) {
                if (Array.isArray(response.data.data.message)) {
                    return response.data.data.message.join(", ");
                }
                return response.data.data.message;
            }
            // Path 3: response.data.error
            if (response.data.error && typeof response.data.error === "string") {
                return response.data.error;
            }
        }
        // If no message in response data, use status text
        if (response?.statusText) {
            return response.statusText;
        }
    }
    // Handle standard Error objects
    if (error instanceof Error) {
        return error.message;
    }
    // Handle string errors
    if (typeof error === "string") {
        return error;
    }
    // Fallback to default message
    return defaultMessage;
}
function isErrorType(error, errorType) {
    const message = extractErrorMessage(error, "");
    return message.toLowerCase().includes(errorType.toLowerCase());
}
function isNetworkError(error) {
    if (error && typeof error === "object" && "code" in error) {
        return error.code === "ERR_NETWORK";
    }
    return isErrorType(error, "network");
}
function isAuthError(error) {
    if (error && typeof error === "object" && "response" in error) {
        const axiosError = error;
        return axiosError.response?.status === 401;
    }
    return false;
}
function isValidationError(error) {
    if (error && typeof error === "object" && "response" in error) {
        const axiosError = error;
        return axiosError.response?.status === 400;
    }
    return false;
}
function isNotFoundError(error) {
    if (error && typeof error === "object" && "response" in error) {
        const axiosError = error;
        return axiosError.response?.status === 404;
    }
    return false;
}
function logError(error, context) {
    if ("TURBOPACK compile-time truthy", 1) {
        console.error(`[Error${context ? ` - ${context}` : ""}]:`, error);
    } else //TURBOPACK unreachable
    ;
}
}),
"[project]/Documents/Self /esta/frontend/app/lib/hooks/usePostPaymentApplication.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePostPaymentApplication",
    ()=>usePostPaymentApplication
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$store$2f$postPaymentStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/store/postPaymentStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/api/services/applications.service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/utils/errorHandler.ts [app-ssr] (ecmascript)");
;
;
;
;
function usePostPaymentApplication() {
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { application, currentTravelerId, setApplication, setCurrentTravelerId, setError: setStoreError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$store$2f$postPaymentStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePostPaymentStore"])();
    /**
   * Load application data from server
   * Called once in layout on mount
   */ const loadApplication = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        setIsLoading(true);
        setError(null);
        try {
            console.log("Loading application with ID:", id);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].getById(id);
            setApplication(data);
            // Set first traveler as current if exists
            if (data.travelers && data.travelers.length > 0) {
                setCurrentTravelerId(data.travelers[0].id);
            }
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Loading application");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to load application.");
            setError(errorMsg);
            setStoreError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        setApplication,
        setCurrentTravelerId,
        setStoreError
    ]);
    /**
   * Update US contact information
   */ const updateUsContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateUsContact(application.id, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating US contact");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save US contact information.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update US stay address
   */ const updateUsStay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateUsStay(application.id, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating US stay");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save US stay address.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update travel details
   */ const updateTravelDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelDetails(application.id, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating travel details");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save travel details.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update traveler personal information
   */ const updateTravelerPersonal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (travelerId, data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelerPersonal(application.id, travelerId, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating traveler personal info");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save personal information.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update traveler parents information
   */ const updateTravelerParents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (travelerId, data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelerParents(application.id, travelerId, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating traveler parents");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save parents information.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update traveler contact information
   */ const updateTravelerContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (travelerId, data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelerContact(application.id, travelerId, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating traveler contact");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save contact information.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update traveler passport information
   */ const updateTravelerPassport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (travelerId, data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelerPassport(application.id, travelerId, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating traveler passport");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save passport information.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update traveler citizenship information
   */ const updateTravelerCitizenship = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (travelerId, data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelerCitizenship(application.id, travelerId, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating traveler citizenship");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save citizenship information.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update traveler employment information
   */ const updateTravelerEmployment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (travelerId, data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelerEmployment(application.id, travelerId, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating traveler employment");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save employment information.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update traveler emergency contact
   */ const updateTravelerEmergencyContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (travelerId, data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelerEmergencyContact(application.id, travelerId, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating emergency contact");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save emergency contact.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update traveler global entry information
   */ const updateTravelerGlobalEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (travelerId, data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelerGlobalEntry(application.id, travelerId, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating global entry");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save Global Entry information.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update traveler social media information
   */ const updateTravelerSocialMedia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (travelerId, data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelerSocialMedia(application.id, travelerId, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating social media");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save social media information.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Update traveler eligibility questions
   */ const updateTravelerEligibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (travelerId, data)=>{
        if (!application?.id) return false;
        setIsLoading(true);
        setError(null);
        try {
            const updated = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$api$2f$services$2f$applications$2e$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applicationsService"].updateTravelerEligibility(application.id, travelerId, data);
            setApplication(updated);
            setIsLoading(false);
            return true;
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(err, "Updating eligibility");
            const errorMsg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$utils$2f$errorHandler$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractErrorMessage"])(err, "Failed to save eligibility information.");
            setError(errorMsg);
            setIsLoading(false);
            return false;
        }
    }, [
        application?.id,
        setApplication
    ]);
    /**
   * Set current traveler being edited
   */ const setCurrentTraveler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setCurrentTravelerId(id);
    }, [
        setCurrentTravelerId
    ]);
    return {
        isLoading,
        error,
        application,
        travelers: application?.travelers || [],
        currentTravelerId,
        loadApplication,
        updateUsContact,
        updateUsStay,
        updateTravelDetails,
        updateTravelerPersonal,
        updateTravelerParents,
        updateTravelerContact,
        updateTravelerPassport,
        updateTravelerCitizenship,
        updateTravelerEmployment,
        updateTravelerEmergencyContact,
        updateTravelerGlobalEntry,
        updateTravelerSocialMedia,
        updateTravelerEligibility,
        setCurrentTraveler
    };
}
}),
"[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSpinner",
    ()=>LoadingSpinner,
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-6 w-6 border-2",
    lg: "h-8 w-8 border-2",
    xl: "h-12 w-12 border-2"
};
const variantClasses = {
    primary: "border-primary border-b-transparent",
    white: "border-white border-b-transparent",
    gray: "border-gray border-b-transparent"
};
function Spinner({ size = "md", variant = "primary", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `animate-spin rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`,
        role: "status",
        "aria-label": "Loading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function LoadingSpinner({ text = "Loading...", size = "xl", variant = "primary", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center py-12 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                    size: size,
                    variant: variant,
                    className: "mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray text-sm",
                    children: text
                }, void 0, false, {
                    fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx",
                    lineNumber: 86,
                    columnNumber: 18
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Self /esta/frontend/app/hooks/useAuth.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/hooks/useAuth.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/contexts/AuthContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Header() {
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$contexts$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsUserMenuOpen(false);
    };
    const toggleUserMenu = ()=>{
        setIsUserMenuOpen(!isUserMenuOpen);
    };
    const handleLogout = ()=>{
        logout();
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "jsx-b5e19618c52795de" + " " + "sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "jsx-b5e19618c52795de" + " " + "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b5e19618c52795de" + " " + "flex items-center justify-between h-16 md:h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b5e19618c52795de" + " " + "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/logo.png",
                                    alt: "ESTA Application Online",
                                    width: 140,
                                    height: 40,
                                    className: "h-10 md:h-12 w-auto transition-transform duration-200 group-hover:scale-105",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b5e19618c52795de" + " " + "hidden md:flex! items-center space-x-8",
                            children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b5e19618c52795de" + " " + "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: toggleUserMenu,
                                        className: "jsx-b5e19618c52795de" + " " + "flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b5e19618c52795de" + " " + "w-9 h-9 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm",
                                                children: [
                                                    user.firstName[0],
                                                    user.lastName[0]
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-b5e19618c52795de" + " " + "hidden lg:block",
                                                children: user.firstName
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                className: "jsx-b5e19618c52795de" + " " + `w-4 h-4 transition-transform duration-200 ${isUserMenuOpen ? "rotate-180" : ""}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M19 9l-7 7-7-7",
                                                    className: "jsx-b5e19618c52795de"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    isUserMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-b5e19618c52795de" + " " + "absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 animate-fadeIn",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-b5e19618c52795de" + " " + "px-4 py-3 border-b border-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-b5e19618c52795de" + " " + "text-sm font-medium text-gray-900",
                                                        children: [
                                                            user.firstName,
                                                            " ",
                                                            user.lastName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-b5e19618c52795de" + " " + "text-xs text-gray-500 truncate",
                                                        children: user.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                                lineNumber: 79,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/orders",
                                                className: "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150",
                                                onClick: ()=>setIsUserMenuOpen(false),
                                                children: "My Applications"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                                lineNumber: 87,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLogout,
                                                className: "jsx-b5e19618c52795de" + " " + "w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150",
                                                children: "Sign Out"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                                lineNumber: 101,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-b5e19618c52795de" + " " + "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        className: "text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200",
                                        children: "Sign In"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/apply",
                                        className: "inline-flex items-center px-5 py-2.5 bg-primary hover:bg-white text-white hover:text-primary border-2 border-primary font-medium rounded-lg",
                                        children: "APPLY NOW"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b5e19618c52795de" + " " + "md:hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMobileMenu,
                                "aria-expanded": "false",
                                className: "jsx-b5e19618c52795de" + " " + "inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-b5e19618c52795de" + " " + "sr-only",
                                        children: "Open main menu"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    !isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2",
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        className: "jsx-b5e19618c52795de" + " " + "block h-6 w-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M4 6h16M4 12h16M4 18h16",
                                            className: "jsx-b5e19618c52795de"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2",
                                        stroke: "currentColor",
                                        "aria-hidden": "true",
                                        className: "jsx-b5e19618c52795de" + " " + "block h-6 w-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            d: "M6 18L18 6M6 6l12 12",
                                            className: "jsx-b5e19618c52795de"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                        lineNumber: 152,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-b5e19618c52795de" + " " + "md:hidden border-t border-gray-200 bg-white shadow-lg animate-slideDown",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-b5e19618c52795de" + " " + "px-4 pt-2 pb-3 space-y-1",
                    children: [
                        user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b5e19618c52795de" + " " + "px-3 py-3 mb-2 bg-linear-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b5e19618c52795de" + " " + "text-sm font-semibold text-gray-900",
                                    children: [
                                        user.firstName,
                                        " ",
                                        user.lastName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                    lineNumber: 178,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-b5e19618c52795de" + " " + "text-xs text-gray-600 mt-0.5",
                                    children: user.email
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                    lineNumber: 181,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                            lineNumber: 177,
                            columnNumber: 15
                        }, this),
                        user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/orders",
                                    className: "block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150",
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    children: "My Applications"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                    lineNumber: 187,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: "jsx-b5e19618c52795de" + " " + "w-full text-left block px-3 py-2 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-150",
                                    children: "Sign Out"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-b5e19618c52795de" + " " + "space-y-2 pt-2 border-t border-gray-200 mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-150",
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/apply",
                                    className: "block px-3 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md text-center",
                                    onClick: ()=>setIsMobileMenuOpen(false),
                                    children: "APPLY NOW"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                                    lineNumber: 217,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                            lineNumber: 209,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                    lineNumber: 175,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "b5e19618c52795de",
                children: "@keyframes fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes slideDown{0%{opacity:0;max-height:0}to{opacity:1;max-height:500px}}.animate-fadeIn.jsx-b5e19618c52795de{animation:.2s ease-out fadeIn}.animate-slideDown.jsx-b5e19618c52795de{animation:.3s ease-out slideDown}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApplicationLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$hooks$2f$usePostPaymentApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/hooks/usePostPaymentApplication.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/layout/Header.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const STEPS = [
    {
        number: 1,
        label: "Personal Info",
        path: "/step-1-personal"
    },
    {
        number: 2,
        label: "Passport",
        path: "/step-2-passport"
    },
    {
        number: 3,
        label: "U.S. Travel",
        path: "/step-3-us-travel"
    },
    {
        number: 4,
        label: "Contact",
        path: "/step-4-contact"
    },
    {
        number: 5,
        label: "Employment",
        path: "/step-5-employment"
    },
    {
        number: 6,
        label: "Eligibility",
        path: "/step-6-eligibility"
    },
    {
        number: 7,
        label: "Review",
        path: "/step-7-review"
    }
];
function ApplicationLayout({ children, params: paramsPromise }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(paramsPromise);
    const { loadApplication, isLoading, error, application } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$hooks$2f$usePostPaymentApplication$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePostPaymentApplication"])();
    const currentStepIndex = STEPS.findIndex((step)=>pathname.includes(step.path));
    const currentStep = currentStepIndex >= 0 ? currentStepIndex + 1 : 1;
    // Load application data once on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (params.id) {
            loadApplication(params.id);
        }
    }, [
        params.id,
        loadApplication
    ]);
    // Show loading state while fetching application
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Loader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingSpinner"], {}, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    // Show error state if failed to load
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto px-4 py-12 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border border-red-200 text-red-800 px-6 py-6 rounded-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-lg mb-2",
                                children: "Unable to load application"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm mb-4",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-light transition-colors font-medium",
                                children: "Return to Home"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    const totalTravelers = application?.travelers?.length || 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pt-8 lg:py-12 border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: STEPS.map((step, index)=>{
                        const isCompleted = step.number < currentStep;
                        const isCurrent = step.number === currentStep;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center sm:items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                               ${isCompleted ? "bg-primary text-white" : isCurrent ? "bg-primary text-white" : "bg-gray-lightest text-gray border-2 border-gray-light"}`,
                                            children: isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                lineNumber: 106,
                                                columnNumber: 23
                                            }, this) : step.number
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `mt-2 text-xs sm:text-sm font-medium hidden sm:block
                               ${isCurrent ? "text-gray-dark" : "text-gray"}`,
                                            children: step.label
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this),
                                index < STEPS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-0.5 mx-2 sm:mx-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-full transition-all
                                 ${step.number < currentStep ? "bg-primary" : "bg-gray-light"}`
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                        lineNumber: 134,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                    lineNumber: 133,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, step.number, true, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-12 gap-8 py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-7",
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:block md:col-span-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg border border-gray-light p-6 shadow-sm sticky top-24",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-gray-dark mb-4",
                                                children: "Application Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray",
                                                                children: "Application ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-gray-dark font-semibold",
                                                                children: params?.id?.slice(0, 8)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray",
                                                                children: "Travelers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-dark",
                                                                children: totalTravelers
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray",
                                                                children: "Step"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-gray-dark",
                                                                children: [
                                                                    currentStep,
                                                                    " of ",
                                                                    STEPS.length
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                                lineNumber: 184,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-light pt-5",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: STEPS.map((step)=>{
                                                const isCompleted = step.number < currentStep;
                                                const isCurrent = step.number === currentStep;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex items-center gap-3 px-3 py-2 rounded-md ${isCurrent ? "bg-gray-lightest" : ""}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${isCompleted ? "bg-primary text-white" : isCurrent ? "bg-primary text-white" : "bg-gray-lightest text-gray border border-gray-light"}`,
                                                            children: isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "currentColor",
                                                                viewBox: "0 0 20 20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    fillRule: "evenodd",
                                                                    d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                                    clipRule: "evenodd"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                                    lineNumber: 222,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 29
                                                            }, this) : step.number
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-sm font-medium ${isCurrent ? "text-gray-dark" : isCompleted ? "text-gray" : "text-gray"}`,
                                                            children: step.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, step.number, true, {
                                                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                            lineNumber: 193,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 pt-6 border-t border-gray-light",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3 text-xs text-gray",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-success shrink-0 mt-0.5",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 20 20",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "We take strong measures to protect your information."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/layout.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_Self%20_esta_frontend_app_60fec865._.js.map