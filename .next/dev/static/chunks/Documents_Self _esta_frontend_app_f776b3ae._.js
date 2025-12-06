(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Self /esta/frontend/app/lib/validations/application.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "travelDetailsSchema",
    ()=>travelDetailsSchema,
    "travelerCitizenshipSchema",
    ()=>travelerCitizenshipSchema,
    "travelerContactSchema",
    ()=>travelerContactSchema,
    "travelerEligibilitySchema",
    ()=>travelerEligibilitySchema,
    "travelerEmergencyContactSchema",
    ()=>travelerEmergencyContactSchema,
    "travelerEmploymentSchema",
    ()=>travelerEmploymentSchema,
    "travelerGlobalEntrySchema",
    ()=>travelerGlobalEntrySchema,
    "travelerParentsSchema",
    ()=>travelerParentsSchema,
    "travelerPassportSchema",
    ()=>travelerPassportSchema,
    "travelerPersonalSchema",
    ()=>travelerPersonalSchema,
    "travelerSocialMediaSchema",
    ()=>travelerSocialMediaSchema,
    "usContactSchema",
    ()=>usContactSchema,
    "usStaySchema",
    ()=>usStaySchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const usContactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    usPointOfContactType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'PERSON',
        'HOTEL',
        'COMPANY'
    ], {
        message: 'Please select a contact type'
    }),
    usPointOfContactName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Contact name is required'),
    usContactAddressLine1: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Address is required'),
    usContactAddressLine2: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    usContactCity: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'City is required'),
    usContactState: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'State is required'),
    usContactZipCode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code'),
    usContactPhone: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\+?1?\d{10,}$/, 'Invalid phone number')
});
const usStaySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    usStayAddressLine1: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Address is required'),
    usStayAddressLine2: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    usStayCity: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'City is required'),
    usStayState: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'State is required'),
    usStayZipCode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code')
});
const travelDetailsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    isTransiting: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    transitDestination: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    pointOfEntry: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Point of entry is required'),
    arrivalDate: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Arrival date is required'),
    flightVesselNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Flight/Vessel number is required'),
    purposeOfVisit: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'TOURISM',
        'BUSINESS',
        'TRANSIT'
    ], {
        message: 'Purpose of visit is required'
    })
}).refine((data)=>!data.isTransiting || data.transitDestination, {
    message: 'Transit destination is required when transiting',
    path: [
        'transitDestination'
    ]
});
const travelerPersonalSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    firstName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'First name is required'),
    middleName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    lastName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Last name is required'),
    aliases: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    gender: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'M',
        'F',
        'X'
    ], {
        message: 'Gender is required'
    }),
    birthDay: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(31),
    birthMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(12),
    birthYear: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1900).max(new Date().getFullYear()),
    cityOfBirth: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'City of birth is required'),
    countryOfBirth: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Country of birth is required'),
    maritalStatus: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'SINGLE',
        'MARRIED',
        'DIVORCED',
        'WIDOWED'
    ], {
        message: 'Marital status is required'
    }),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Invalid email address')
});
const travelerParentsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    fatherFamilyName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Father's family name is required"),
    fatherFirstName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Father's first name is required"),
    motherFamilyName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Mother's family name is required"),
    motherFirstName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Mother's first name is required")
});
const travelerContactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Phone number is required'),
    phoneType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'MOBILE',
        'HOME',
        'WORK'
    ], {
        message: 'Phone type is required'
    }),
    addressLine1: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Address is required'),
    addressLine2: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    city: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'City is required'),
    stateProvinceRegion: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'State/Province is required'),
    postalCode: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Postal code is required'),
    country: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Country is required')
});
const travelerPassportSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    passportNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Passport number is required'),
    passportType: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'REGULAR',
        'DIPLOMATIC',
        'SERVICE',
        'OFFICIAL'
    ], {
        message: 'Passport type is required'
    }),
    passportIssueDay: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(31),
    passportIssueMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(12),
    passportIssueYear: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1900),
    passportExpiryDay: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(31),
    passportExpiryMonth: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(1).max(12),
    passportExpiryYear: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(2024),
    nationalityOnPassport: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Nationality is required'),
    isEPassport: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    nationalIdNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    countryOfResidence: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Country of residence is required')
});
const travelerCitizenshipSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    hasOtherCitizenship: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    otherCitizenshipCountry: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    citizenshipAcquisition: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        'BIRTH',
        'PARENTS',
        'NATURALIZATION',
        'OTHER'
    ], {
        message: 'Citizenship acquisition is required'
    }),
    previousCitizenship: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    hasOtherPassports: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    otherPassportDetails: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].any().optional()
}).refine((data)=>!data.hasOtherCitizenship || data.otherCitizenshipCountry, {
    message: 'Other citizenship country is required',
    path: [
        'otherCitizenshipCountry'
    ]
});
const travelerEmploymentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    isEmployed: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    jobTitle: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    employerName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    employerAddressLine1: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    employerAddressLine2: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    employerCity: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    employerStateProvince: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    employerCountry: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    employerPhone: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).refine((data)=>{
    if (data.isEmployed) {
        return data.jobTitle && data.employerName && data.employerCity && data.employerCountry;
    }
    return true;
}, {
    message: 'Employment details are required when employed',
    path: [
        'jobTitle'
    ]
});
const travelerEmergencyContactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    emergencyContactFirstName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'First name is required'),
    emergencyContactLastName: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Last name is required'),
    emergencyContactEmail: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email('Invalid email address'),
    emergencyContactPhone: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Phone number is required')
});
const travelerGlobalEntrySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    isGlobalEntryMember: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    globalEntryPassId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
}).refine((data)=>!data.isGlobalEntryMember || data.globalEntryPassId, {
    message: 'Global Entry Pass ID is required for members',
    path: [
        'globalEntryPassId'
    ]
});
const travelerSocialMediaSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    socialMediaPlatforms: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional(),
    socialMediaHandles: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).optional()
});
const travelerEligibilitySchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    eligibilityQ1: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    eligibilityQ2: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    eligibilityQ3: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    eligibilityQ4: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    eligibilityQ5: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    eligibilityQ6: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    eligibilityQ7: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    eligibilityQ8: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean(),
    eligibilityQ9: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean()
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Self /esta/frontend/app/lib/constants/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Configuration Constants
 */ // API endpoints
__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "API_TIMEOUT",
    ()=>API_TIMEOUT,
    "LONG_REQUEST_TIMEOUT",
    ()=>LONG_REQUEST_TIMEOUT,
    "MAX_RETRIES",
    ()=>MAX_RETRIES,
    "RETRY_DELAY",
    ()=>RETRY_DELAY,
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const API_TIMEOUT = 30000; // 30 seconds
const LONG_REQUEST_TIMEOUT = 60000; // 60 seconds for file uploads, etc.
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second
const STORAGE_KEYS = {
    ACCESS_TOKEN: 'access_token',
    REFRESH_TOKEN: 'refresh_token',
    USER: 'user',
    APPLICATION: 'esta-application-storage'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSpinner",
    ()=>LoadingSpinner,
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `animate-spin rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`,
        role: "status",
        "aria-label": "Loading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_c = Spinner;
function LoadingSpinner({ text = "Loading...", size = "xl", variant = "primary", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center justify-center py-12 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spinner, {
                    size: size,
                    variant: variant,
                    className: "mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_c1 = LoadingSpinner;
var _c, _c1;
__turbopack_context__.k.register(_c, "Spinner");
__turbopack_context__.k.register(_c1, "LoadingSpinner");
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
"[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SocialMediaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$validations$2f$application$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/validations/application.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/constants/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/ui/Loader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$application$2f$TravelerAccordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/components/application/TravelerAccordion.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
const SOCIAL_PLATFORMS = [
    'Facebook',
    'Twitter',
    'Instagram',
    'LinkedIn',
    'YouTube',
    'TikTok'
];
function SocialMediaPage({ params }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [travelers, setTravelers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentTravelerId, setCurrentTravelerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPlatforms, setSelectedPlatforms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { register, handleSubmit, setValue, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$validations$2f$application$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["travelerSocialMediaSchema"])
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SocialMediaPage.useEffect": ()=>{
            fetchApplicationData();
        }
    }["SocialMediaPage.useEffect"], [
        params.id
    ]);
    const fetchApplicationData = async ()=>{
        try {
            const token = localStorage.getItem('access_token');
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/applications/${params.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTravelers(data.travelers || []);
            if (data.travelers?.length > 0) {
                setCurrentTravelerId(data.travelers[0].id);
                loadTravelerData(data.travelers[0]);
            }
        } catch (error) {
            console.error('Failed to fetch application:', error);
        } finally{
            setLoading(false);
        }
    };
    const loadTravelerData = (traveler)=>{
        setSelectedPlatforms(traveler.socialMediaPlatforms || []);
        setValue('socialMediaPlatforms', traveler.socialMediaPlatforms || []);
        setValue('socialMediaHandles', traveler.socialMediaHandles || {});
    };
    const handleTravelerChange = (travelerId)=>{
        const traveler = travelers.find((t)=>t.id === travelerId);
        if (traveler) {
            setCurrentTravelerId(travelerId);
            loadTravelerData(traveler);
        }
    };
    const handlePlatformToggle = (platform)=>{
        const newPlatforms = selectedPlatforms.includes(platform) ? selectedPlatforms.filter((p)=>p !== platform) : [
            ...selectedPlatforms,
            platform
        ];
        setSelectedPlatforms(newPlatforms);
        setValue('socialMediaPlatforms', newPlatforms);
    };
    const onSubmit = async (data)=>{
        if (!currentTravelerId) return;
        setSubmitting(true);
        try {
            const token = localStorage.getItem('access_token');
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$constants$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_BASE_URL"]}/applications/${params.id}/travelers/${currentTravelerId}/social-media`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const currentIndex = travelers.findIndex((t)=>t.id === currentTravelerId);
            if (currentIndex < travelers.length - 1) {
                const nextTraveler = travelers[currentIndex + 1];
                setCurrentTravelerId(nextTraveler.id);
                loadTravelerData(nextTraveler);
                setSubmitting(false);
            } else {
                router.push(`/application/${params.id}/eligibility`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert(error.response?.data?.message || 'Failed to save. Please try again.');
            setSubmitting(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Loader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {}, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl md:text-3xl font-bold text-gray-900 mb-2",
                        children: "Social Media (Optional)"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Providing social media information is optional but may expedite your application."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                lineNumber: 133,
                columnNumber: 7
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
                                className: "bg-gray-50 border border-gray-200 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Note:"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, void 0),
                                        " This information is optional. Select the platforms you use and provide your usernames/handles (not full URLs)."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, void 0)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-900",
                                        children: "Select platforms you use:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-3 gap-3",
                                        children: SOCIAL_PLATFORMS.map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: `
                      flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all
                      ${selectedPlatforms.includes(platform) ? 'border-primary bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
                    `,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: selectedPlatforms.includes(platform),
                                                        onChange: ()=>handlePlatformToggle(platform),
                                                        className: "sr-only"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        children: platform
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, void 0)
                                                ]
                                            }, platform, true, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, void 0),
                            selectedPlatforms.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-900",
                                        children: "Enter your username/handle for each platform:"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: selectedPlatforms.map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                label: `${platform} Handle`,
                                                placeholder: `@username`,
                                                ...register(`socialMediaHandles.${platform}`)
                                            }, platform, false, {
                                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 21
                                            }, void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, void 0),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: "button",
                                        variant: "outline",
                                        onClick: ()=>router.back(),
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        type: "submit",
                                        disabled: submitting,
                                        className: "min-w-[200px]",
                                        children: submitting ? 'Saving...' : 'Save & Continue'
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, void 0)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Self /esta/frontend/app/application/[id]/social-media/page.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_s(SocialMediaPage, "a85myfDseBuLQtije4VyV/vL3qc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = SocialMediaPage;
var _c;
__turbopack_context__.k.register(_c, "SocialMediaPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Self%20_esta_frontend_app_f776b3ae._.js.map