(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Self /esta/frontend/app/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ label, error, helperText, className = "", ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-dark mb-1.5",
                children: [
                    label,
                    props.required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-accent ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Input.tsx",
                        lineNumber: 16,
                        columnNumber: 32
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Input.tsx",
                lineNumber: 14,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                className: `w-full px-4 py-3 text-base border rounded-md transition-colors
                     ${error ? "border-accent focus:border-accent focus:ring-accent" : "border-gray-light focus:border-primary focus:ring-primary"}
                     focus:outline-none focus:ring-2 focus:ring-opacity-20
                     bg-white text-gray-dark placeholder-gray
                     disabled:bg-gray-lightest disabled:cursor-not-allowed
                     ${className}`,
                "aria-invalid": error ? "true" : "false",
                "aria-describedby": error ? `${props.id}-error` : helperText ? `${props.id}-helper` : undefined,
                ...props
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Input.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${props.id}-error`,
                className: "mt-1.5 text-sm text-accent font-medium",
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Input.tsx",
                lineNumber: 42,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            helperText && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${props.id}-helper`,
                className: "mt-2 text-sm text-gray",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Input.tsx",
                lineNumber: 50,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Input.tsx",
        lineNumber: 12,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
const __TURBOPACK__default__export__ = Input;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Self /esta/frontend/app/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Button({ variant = "primary", size = "md", children, fullWidth = false, icon, className = "", onClick, ...props }) {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
    const variantStyles = {
        primary: "bg-accent text-white hover:bg-[#a51a1f] focus:ring-accent shadow-[0_4px_12px_rgba(205,32,38,0.3)] hover:shadow-[0_6px_16px_rgba(205,32,38,0.4)] hover:-translate-y-0.5",
        secondary: "bg-primary-light text-white hover:bg-primary focus:ring-primary-light shadow-md hover:shadow-lg",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary"
    };
    const sizeStyles = {
        sm: "px-6 py-2 text-base rounded-md",
        md: "px-12 py-4 text-lg rounded-md",
        lg: "px-16 py-5 text-xl rounded-md"
    };
    const widthStyle = fullWidth ? "w-full" : "";
    const handleClick = (e)=>{
        // Analytics tracking
        if (("TURBOPACK compile-time value", "object") !== "undefined" && window.gtag) {
            window.gtag("event", "cta_click", {
                event_category: "engagement",
                event_label: typeof children === "string" ? children : "Button Click"
            });
        }
        if (onClick) {
            onClick(e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`,
        onClick: handleClick,
        ...props,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-2",
                children: icon
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Button.tsx",
                lineNumber: 63,
                columnNumber: 16
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Button.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TravelerAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TravelerAccordion({ travelers, activeTravelerId, onTravelerChange, renderContent }) {
    _s();
    const [openTravelerId, setOpenTravelerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activeTravelerId || travelers[0]?.id);
    console.log("Active Traveler ID:", activeTravelerId);
    const handleToggle = (travelerId)=>{
        setOpenTravelerId(openTravelerId === travelerId ? "" : travelerId);
        onTravelerChange?.(travelerId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: travelers.map((traveler, index)=>{
            const isOpen = openTravelerId === traveler.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border border-gray-200 rounded-lg overflow-hidden transition-all",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>handleToggle(traveler.id),
                        className: "w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `
                    w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                    ${traveler.completed ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"}
                  `,
                                        children: traveler.completed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                                            lineNumber: 65,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                                            lineNumber: 67,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                                        lineNumber: 54,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-semibold text-gray-900",
                                                children: [
                                                    "Traveler ",
                                                    index + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this),
                                            (traveler.firstName || traveler.lastName) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: [
                                                    traveler.firstName,
                                                    " ",
                                                    traveler.lastName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                                                lineNumber: 75,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                                lineNumber: 53,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `w-5 h-5 text-gray-600 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 bg-gray-50 border-t border-gray-200",
                        children: renderContent(traveler, index)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                        lineNumber: 90,
                        columnNumber: 15
                    }, this)
                ]
            }, traveler.id, true, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
                lineNumber: 43,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(TravelerAccordion, "lZNeJcygv2g5SfWVXDs6nGngLUE=");
_c = TravelerAccordion;
var _c;
__turbopack_context__.k.register(_c, "TravelerAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Self /esta/frontend/app/lib/countries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Country utility functions and data
 */ __turbopack_context__.s([
    "ELIGIBLE_COUNTRIES",
    ()=>ELIGIBLE_COUNTRIES,
    "getCountryByCode",
    ()=>getCountryByCode,
    "getCountryName",
    ()=>getCountryName,
    "getFlagEmoji",
    ()=>getFlagEmoji,
    "isEligibleCountry",
    ()=>isEligibleCountry
]);
const getFlagEmoji = (countryCode)=>{
    if (!countryCode || countryCode.length !== 2) return "";
    const codePoints = countryCode.toUpperCase().split("").map((char)=>127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
};
const ELIGIBLE_COUNTRIES = [
    {
        code: "AD",
        name: "Andorra"
    },
    {
        code: "AU",
        name: "Australia"
    },
    {
        code: "AT",
        name: "Austria"
    },
    {
        code: "BE",
        name: "Belgium"
    },
    {
        code: "BN",
        name: "Brunei"
    },
    {
        code: "CL",
        name: "Chile"
    },
    {
        code: "HR",
        name: "Croatia"
    },
    {
        code: "CZ",
        name: "Czech Republic"
    },
    {
        code: "DK",
        name: "Denmark"
    },
    {
        code: "EE",
        name: "Estonia"
    },
    {
        code: "FI",
        name: "Finland"
    },
    {
        code: "FR",
        name: "France"
    },
    {
        code: "DE",
        name: "Germany"
    },
    {
        code: "GR",
        name: "Greece"
    },
    {
        code: "HU",
        name: "Hungary"
    },
    {
        code: "IS",
        name: "Iceland"
    },
    {
        code: "IE",
        name: "Ireland"
    },
    {
        code: "IL",
        name: "Israel"
    },
    {
        code: "IT",
        name: "Italy"
    },
    {
        code: "JP",
        name: "Japan"
    },
    {
        code: "KR",
        name: "South Korea"
    },
    {
        code: "LV",
        name: "Latvia"
    },
    {
        code: "LI",
        name: "Liechtenstein"
    },
    {
        code: "LT",
        name: "Lithuania"
    },
    {
        code: "LU",
        name: "Luxembourg"
    },
    {
        code: "MT",
        name: "Malta"
    },
    {
        code: "MC",
        name: "Monaco"
    },
    {
        code: "NL",
        name: "Netherlands"
    },
    {
        code: "NZ",
        name: "New Zealand"
    },
    {
        code: "NO",
        name: "Norway"
    },
    {
        code: "PL",
        name: "Poland"
    },
    {
        code: "PT",
        name: "Portugal"
    },
    {
        code: "QA",
        name: "Qatar"
    },
    {
        code: "SM",
        name: "San Marino"
    },
    {
        code: "SG",
        name: "Singapore"
    },
    {
        code: "SK",
        name: "Slovakia"
    },
    {
        code: "SI",
        name: "Slovenia"
    },
    {
        code: "ES",
        name: "Spain"
    },
    {
        code: "SE",
        name: "Sweden"
    },
    {
        code: "CH",
        name: "Switzerland"
    },
    {
        code: "TW",
        name: "Taiwan"
    },
    {
        code: "GB",
        name: "United Kingdom"
    }
];
const getCountryName = (code)=>{
    return ELIGIBLE_COUNTRIES.find((country)=>country.code.toLowerCase() === code.toLowerCase())?.name;
};
const getCountryByCode = (code)=>{
    return ELIGIBLE_COUNTRIES.find((country)=>country.code.toLowerCase() === code.toLowerCase());
};
const isEligibleCountry = (code)=>{
    return ELIGIBLE_COUNTRIES.some((country)=>country.code.toLowerCase() === code.toLowerCase());
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/countries.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const CountrySelect = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(({ label, value, onChange, error, helperText, required = false, disabled = false, placeholder = "Select a country", valueType = "name" }, ref)=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Find selected country
    const selectedCountry = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELIGIBLE_COUNTRIES"].find((country)=>valueType === "code" ? country.code === value : country.name === value);
    // Filter countries based on search
    const filteredCountries = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELIGIBLE_COUNTRIES"].filter((country)=>country.name.toLowerCase().includes(searchTerm.toLowerCase()));
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountrySelect.useEffect": ()=>{
            const handleClickOutside = {
                "CountrySelect.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                        setSearchTerm("");
                    }
                }
            }["CountrySelect.useEffect.handleClickOutside"];
            if (isOpen) {
                document.addEventListener("mousedown", handleClickOutside);
                // Focus search input when dropdown opens
                setTimeout({
                    "CountrySelect.useEffect": ()=>searchInputRef.current?.focus()
                }["CountrySelect.useEffect"], 0);
            }
            return ({
                "CountrySelect.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["CountrySelect.useEffect"];
        }
    }["CountrySelect.useEffect"], [
        isOpen
    ]);
    const handleSelect = (country)=>{
        onChange(valueType === "code" ? country.code : country.name);
        setIsOpen(false);
        setSearchTerm("");
    };
    const toggleDropdown = ()=>{
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full relative",
        ref: dropdownRef,
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-dark mb-1.5",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-accent ml-1",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                        lineNumber: 88,
                        columnNumber: 26
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                lineNumber: 86,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: ref,
                type: "button",
                onClick: toggleDropdown,
                disabled: disabled,
                className: `w-full px-4 py-3 text-base border rounded-md transition-colors text-left
                     flex items-center justify-between
                     ${error ? "border-accent focus:border-accent focus:ring-accent" : "border-gray-light focus:border-primary focus:ring-primary"}
                     focus:outline-none focus:ring-2 focus:ring-opacity-20
                     bg-white text-gray-dark
                     disabled:bg-gray-lightest disabled:cursor-not-allowed
                     ${isOpen ? "ring-2 ring-primary ring-opacity-20" : ""}`,
                "aria-haspopup": "listbox",
                "aria-expanded": isOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: selectedCountry ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl leading-none",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFlagEmoji"])(selectedCountry.code)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: selectedCountry.name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                                    lineNumber: 118,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray",
                            children: placeholder
                        }, void 0, false, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                            lineNumber: 121,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-5 h-5 text-gray transition-transform ${isOpen ? "rotate-180" : ""}`,
                        fill: "none",
                        viewBox: "0 0 20 20",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M6 8l4 4 4-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed z-9999 mt-1 bg-white border border-gray-light rounded-md shadow-lg max-h-80 overflow-hidden",
                style: {
                    width: dropdownRef.current?.offsetWidth,
                    top: dropdownRef.current?.getBoundingClientRect().bottom,
                    left: dropdownRef.current?.getBoundingClientRect().left
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 border-b border-gray-light sticky top-0 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: searchInputRef,
                            type: "text",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            placeholder: "Search countries...",
                            className: "w-full px-3 py-2 text-sm border border-gray-light rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                            lineNumber: 153,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                        lineNumber: 152,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto max-h-64",
                        role: "listbox",
                        children: filteredCountries.length > 0 ? filteredCountries.map((country)=>{
                            const isSelected = valueType === "code" ? country.code === value : country.name === value;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleSelect(country),
                                className: `w-full px-4 py-3 flex items-center gap-3 text-left transition-colors
                               hover:bg-gray-lightest
                               ${isSelected ? "bg-primary bg-opacity-10 text-white font-medium hover:text-primary" : "text-gray-dark"}`,
                                role: "option",
                                "aria-selected": isSelected,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl leading-none shrink-0",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$countries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFlagEmoji"])(country.code)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                                        lineNumber: 188,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1",
                                        children: country.name
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                                        lineNumber: 191,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 shrink-0",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                                            lineNumber: 198,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                                        lineNumber: 193,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, country.code, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                                lineNumber: 174,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0));
                        }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 py-8 text-center text-gray text-sm",
                            children: "No eligible country found"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                            lineNumber: 209,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                lineNumber: 143,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-sm text-accent font-medium",
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                lineNumber: 219,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            helperText && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-sm text-gray",
                children: helperText
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
                lineNumber: 222,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx",
        lineNumber: 84,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "psD4HILMwA+HrM9jtLNK4YSNlYM=")), "psD4HILMwA+HrM9jtLNK4YSNlYM=");
_c1 = CountrySelect;
CountrySelect.displayName = "CountrySelect";
const __TURBOPACK__default__export__ = CountrySelect;
var _c, _c1;
__turbopack_context__.k.register(_c, "CountrySelect$forwardRef");
__turbopack_context__.k.register(_c1, "CountrySelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelectWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$CountrySelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelect.tsx [app-client] (ecmascript)");
;
;
;
const CountrySelectWrapper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ onChange, value, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$CountrySelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        value: value || '',
        onChange: (val)=>onChange?.(val),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelectWrapper.tsx",
        lineNumber: 20,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = CountrySelectWrapper;
CountrySelectWrapper.displayName = 'CountrySelectWrapper';
const __TURBOPACK__default__export__ = CountrySelectWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "CountrySelectWrapper$forwardRef");
__turbopack_context__.k.register(_c1, "CountrySelectWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EmploymentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/app/lib/validations/application'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$hooks$2f$usePostPaymentApplication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/hooks/usePostPaymentApplication.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$application$2f$TravelerAccordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$CountrySelectWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/ui/CountrySelectWrapper.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$store$2f$postPaymentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/store/postPaymentStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
;
function EmploymentPage({ params: paramsPromise }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(paramsPromise);
    const [currentTravelerId, setCurrentTravelerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEmployed, setIsEmployed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const travelers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$store$2f$postPaymentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTravelers"])();
    const { updateTravelerEmployment, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$hooks$2f$usePostPaymentApplication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePostPaymentApplication"])();
    const { register, handleSubmit, setValue, watch, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(travelerEmploymentSchema)
    });
    const watchEmployed = watch("isEmployed");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmploymentPage.useEffect": ()=>{
            setIsEmployed(watchEmployed);
        }
    }["EmploymentPage.useEffect"], [
        watchEmployed
    ]);
    // Set initial traveler on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EmploymentPage.useEffect": ()=>{
            if (travelers.length > 0 && !currentTravelerId) {
                setCurrentTravelerId(travelers[0].id);
                loadTravelerData(travelers[0]);
            }
        }
    }["EmploymentPage.useEffect"], [
        travelers
    ]);
    const loadTravelerData = (traveler)=>{
        setValue("isEmployed", traveler.isEmployed ?? false);
        setValue("jobTitle", traveler.jobTitle || "");
        setValue("employerName", traveler.employerName || "");
        setValue("employerAddressLine1", traveler.employerAddressLine1 || "");
        setValue("employerCity", traveler.employerCity || "");
        setValue("employerCountry", traveler.employerCountry || "");
        setValue("employerPhone", traveler.employerPhone || "");
        setIsEmployed(traveler.isEmployed ?? false);
    };
    const handleTravelerChange = (travelerId)=>{
        const traveler = travelers.find((t)=>t.id === travelerId);
        if (traveler) {
            setCurrentTravelerId(travelerId);
            loadTravelerData(traveler);
        }
    };
    const onSubmit = async (data)=>{
        if (!currentTravelerId) return;
        const success = await updateTravelerEmployment(currentTravelerId, data);
        if (success) {
            const currentIndex = travelers.findIndex((t)=>t.id === currentTravelerId);
            if (currentIndex < travelers.length - 1) {
                const nextTraveler = travelers[currentIndex + 1];
                setCurrentTravelerId(nextTraveler.id);
                loadTravelerData(nextTraveler);
            } else {
                router.push(`/application/${params.id}/emergency-contact`);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl md:text-3xl font-bold text-gray-900 mb-2",
                        children: "Employment Information"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Provide current employment details for each traveler."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6",
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$application$2f$TravelerAccordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                travelers: travelers,
                activeTravelerId: currentTravelerId,
                onTravelerChange: handleTravelerChange,
                renderContent: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit(onSubmit),
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-dark mb-3",
                                        children: "Are you currently employed?"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        value: "false",
                                                        ...register("isEmployed"),
                                                        className: "w-4 h-4 text-primary focus:ring-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700",
                                                        children: "No"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center space-x-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "radio",
                                                        value: "true",
                                                        ...register("isEmployed"),
                                                        className: "w-4 h-4 text-primary focus:ring-primary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 19
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700",
                                                        children: "Yes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, void 0),
                            isEmployed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Job Title",
                                        placeholder: "Your current position",
                                        error: errors.jobTitle?.message,
                                        required: true,
                                        ...register("jobTitle")
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Employer Name",
                                        placeholder: "Company or organization name",
                                        error: errors.employerName?.message,
                                        required: true,
                                        ...register("employerName")
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Employer Address",
                                        placeholder: "Street address",
                                        error: errors.employerAddressLine1?.message,
                                        required: true,
                                        ...register("employerAddressLine1")
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                        lineNumber: 172,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                label: "City",
                                                placeholder: "City",
                                                error: errors.employerCity?.message,
                                                required: true,
                                                ...register("employerCity")
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, void 0),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$CountrySelectWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                label: "Country",
                                                error: errors.employerCountry?.message,
                                                required: true,
                                                ...register("employerCountry")
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        label: "Employer Phone",
                                        placeholder: "+1 234 567 8900",
                                        type: "tel",
                                        error: errors.employerPhone?.message,
                                        ...register("employerPhone")
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, void 0)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>router.back(),
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: "submit",
                                        disabled: isLoading,
                                        className: "min-w-[200px]",
                                        children: isLoading ? "Saving..." : "Save & Continue"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/employment/page.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(EmploymentPage, "lTgHxAcoaZmPCypuDSP8RWuC8Sk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$store$2f$postPaymentStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTravelers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$hooks$2f$usePostPaymentApplication$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePostPaymentApplication"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = EmploymentPage;
var _c;
__turbopack_context__.k.register(_c, "EmploymentPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Self%20_esta_frontend_app_5f13467f._.js.map