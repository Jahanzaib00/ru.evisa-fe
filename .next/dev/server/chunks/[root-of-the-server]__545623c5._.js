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
"[project]/Documents/Self /esta/frontend/app/lib/data/countries.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Visa Waiver Program (VWP) Countries Data
 * All 41 countries eligible for ESTA
 * Used for generating country-specific landing pages
 */ __turbopack_context__.s([
    "VWP_COUNTRIES",
    ()=>VWP_COUNTRIES,
    "getAllCountrySlugs",
    ()=>getAllCountrySlugs,
    "getCountriesByRegion",
    ()=>getCountriesByRegion,
    "getCountryBySlug",
    ()=>getCountryBySlug,
    "searchCountries",
    ()=>searchCountries
]);
const VWP_COUNTRIES = [
    // Europe
    {
        name: 'Andorra',
        slug: 'andorra',
        code: 'AD',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇦🇩'
    },
    {
        name: 'Austria',
        slug: 'austria',
        code: 'AT',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇦🇹',
        capitalCity: 'Vienna',
        population: 9000000
    },
    {
        name: 'Belgium',
        slug: 'belgium',
        code: 'BE',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇧🇪',
        capitalCity: 'Brussels',
        population: 11500000
    },
    {
        name: 'Croatia',
        slug: 'croatia',
        code: 'HR',
        region: 'Europe',
        joinedYear: 2021,
        flagEmoji: '🇭🇷',
        capitalCity: 'Zagreb',
        population: 4000000
    },
    {
        name: 'Czech Republic',
        slug: 'czech-republic',
        code: 'CZ',
        region: 'Europe',
        joinedYear: 2008,
        flagEmoji: '🇨🇿',
        capitalCity: 'Prague',
        population: 10700000
    },
    {
        name: 'Denmark',
        slug: 'denmark',
        code: 'DK',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇩🇰',
        capitalCity: 'Copenhagen',
        population: 5800000
    },
    {
        name: 'Estonia',
        slug: 'estonia',
        code: 'EE',
        region: 'Europe',
        joinedYear: 2008,
        flagEmoji: '🇪🇪',
        capitalCity: 'Tallinn',
        population: 1300000
    },
    {
        name: 'Finland',
        slug: 'finland',
        code: 'FI',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇫🇮',
        capitalCity: 'Helsinki',
        population: 5500000
    },
    {
        name: 'France',
        slug: 'france',
        code: 'FR',
        region: 'Europe',
        joinedYear: 1989,
        flagEmoji: '🇫🇷',
        capitalCity: 'Paris',
        population: 67000000
    },
    {
        name: 'Germany',
        slug: 'germany',
        code: 'DE',
        region: 'Europe',
        joinedYear: 1989,
        flagEmoji: '🇩🇪',
        capitalCity: 'Berlin',
        population: 83000000
    },
    {
        name: 'Greece',
        slug: 'greece',
        code: 'GR',
        region: 'Europe',
        joinedYear: 2010,
        flagEmoji: '🇬🇷',
        capitalCity: 'Athens',
        population: 10700000
    },
    {
        name: 'Hungary',
        slug: 'hungary',
        code: 'HU',
        region: 'Europe',
        joinedYear: 2008,
        flagEmoji: '🇭🇺',
        capitalCity: 'Budapest',
        population: 9700000
    },
    {
        name: 'Iceland',
        slug: 'iceland',
        code: 'IS',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇮🇸',
        capitalCity: 'Reykjavik',
        population: 370000
    },
    {
        name: 'Ireland',
        slug: 'ireland',
        code: 'IE',
        region: 'Europe',
        joinedYear: 1995,
        flagEmoji: '🇮🇪',
        capitalCity: 'Dublin',
        population: 5000000
    },
    {
        name: 'Italy',
        slug: 'italy',
        code: 'IT',
        region: 'Europe',
        joinedYear: 1989,
        flagEmoji: '🇮🇹',
        capitalCity: 'Rome',
        population: 60000000
    },
    {
        name: 'Latvia',
        slug: 'latvia',
        code: 'LV',
        region: 'Europe',
        joinedYear: 2008,
        flagEmoji: '🇱🇻',
        capitalCity: 'Riga',
        population: 1900000
    },
    {
        name: 'Liechtenstein',
        slug: 'liechtenstein',
        code: 'LI',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇱🇮',
        population: 38000
    },
    {
        name: 'Lithuania',
        slug: 'lithuania',
        code: 'LT',
        region: 'Europe',
        joinedYear: 2008,
        flagEmoji: '🇱🇹',
        capitalCity: 'Vilnius',
        population: 2800000
    },
    {
        name: 'Luxembourg',
        slug: 'luxembourg',
        code: 'LU',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇱🇺',
        capitalCity: 'Luxembourg City',
        population: 630000
    },
    {
        name: 'Malta',
        slug: 'malta',
        code: 'MT',
        region: 'Europe',
        joinedYear: 2008,
        flagEmoji: '🇲🇹',
        capitalCity: 'Valletta',
        population: 515000
    },
    {
        name: 'Monaco',
        slug: 'monaco',
        code: 'MC',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇲🇨',
        population: 39000
    },
    {
        name: 'Netherlands',
        slug: 'netherlands',
        code: 'NL',
        region: 'Europe',
        joinedYear: 1989,
        flagEmoji: '🇳🇱',
        capitalCity: 'Amsterdam',
        population: 17500000
    },
    {
        name: 'Norway',
        slug: 'norway',
        code: 'NO',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇳🇴',
        capitalCity: 'Oslo',
        population: 5400000
    },
    {
        name: 'Poland',
        slug: 'poland',
        code: 'PL',
        region: 'Europe',
        joinedYear: 2019,
        flagEmoji: '🇵🇱',
        capitalCity: 'Warsaw',
        population: 38000000
    },
    {
        name: 'Portugal',
        slug: 'portugal',
        code: 'PT',
        region: 'Europe',
        joinedYear: 1999,
        flagEmoji: '🇵🇹',
        capitalCity: 'Lisbon',
        population: 10300000
    },
    {
        name: 'San Marino',
        slug: 'san-marino',
        code: 'SM',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇸🇲',
        population: 34000
    },
    {
        name: 'Slovakia',
        slug: 'slovakia',
        code: 'SK',
        region: 'Europe',
        joinedYear: 2008,
        flagEmoji: '🇸🇰',
        capitalCity: 'Bratislava',
        population: 5500000
    },
    {
        name: 'Slovenia',
        slug: 'slovenia',
        code: 'SI',
        region: 'Europe',
        joinedYear: 1997,
        flagEmoji: '🇸🇮',
        capitalCity: 'Ljubljana',
        population: 2100000
    },
    {
        name: 'Spain',
        slug: 'spain',
        code: 'ES',
        region: 'Europe',
        joinedYear: 1991,
        flagEmoji: '🇪🇸',
        capitalCity: 'Madrid',
        population: 47000000
    },
    {
        name: 'Sweden',
        slug: 'sweden',
        code: 'SE',
        region: 'Europe',
        joinedYear: 1989,
        flagEmoji: '🇸🇪',
        capitalCity: 'Stockholm',
        population: 10400000
    },
    {
        name: 'Switzerland',
        slug: 'switzerland',
        code: 'CH',
        region: 'Europe',
        joinedYear: 1989,
        flagEmoji: '🇨🇭',
        capitalCity: 'Bern',
        population: 8700000
    },
    {
        name: 'United Kingdom',
        slug: 'united-kingdom',
        code: 'GB',
        region: 'Europe',
        joinedYear: 1988,
        flagEmoji: '🇬🇧',
        capitalCity: 'London',
        population: 67000000
    },
    // Asia-Pacific
    {
        name: 'Australia',
        slug: 'australia',
        code: 'AU',
        region: 'Asia-Pacific',
        joinedYear: 1996,
        flagEmoji: '🇦🇺',
        capitalCity: 'Canberra',
        population: 26000000
    },
    {
        name: 'Brunei',
        slug: 'brunei',
        code: 'BN',
        region: 'Asia-Pacific',
        joinedYear: 1993,
        flagEmoji: '🇧🇳',
        capitalCity: 'Bandar Seri Begawan',
        population: 440000
    },
    {
        name: 'Israel',
        slug: 'israel',
        code: 'IL',
        region: 'Asia-Pacific',
        joinedYear: 2023,
        flagEmoji: '🇮🇱',
        capitalCity: 'Jerusalem',
        population: 9500000
    },
    {
        name: 'Japan',
        slug: 'japan',
        code: 'JP',
        region: 'Asia-Pacific',
        joinedYear: 1988,
        flagEmoji: '🇯🇵',
        capitalCity: 'Tokyo',
        population: 125000000
    },
    {
        name: 'New Zealand',
        slug: 'new-zealand',
        code: 'NZ',
        region: 'Asia-Pacific',
        joinedYear: 1991,
        flagEmoji: '🇳🇿',
        capitalCity: 'Wellington',
        population: 5100000
    },
    {
        name: 'Singapore',
        slug: 'singapore',
        code: 'SG',
        region: 'Asia-Pacific',
        joinedYear: 1999,
        flagEmoji: '🇸🇬',
        capitalCity: 'Singapore',
        population: 5700000
    },
    {
        name: 'South Korea',
        slug: 'south-korea',
        code: 'KR',
        region: 'Asia-Pacific',
        joinedYear: 2008,
        flagEmoji: '🇰🇷',
        capitalCity: 'Seoul',
        population: 51000000
    },
    {
        name: 'Taiwan',
        slug: 'taiwan',
        code: 'TW',
        region: 'Asia-Pacific',
        joinedYear: 2012,
        flagEmoji: '🇹🇼',
        capitalCity: 'Taipei',
        population: 23500000
    },
    // Americas
    {
        name: 'Chile',
        slug: 'chile',
        code: 'CL',
        region: 'Americas',
        joinedYear: 2014,
        flagEmoji: '🇨🇱',
        capitalCity: 'Santiago',
        population: 19000000
    }
];
function getCountryBySlug(slug) {
    return VWP_COUNTRIES.find((country)=>country.slug === slug);
}
function getAllCountrySlugs() {
    return VWP_COUNTRIES.map((country)=>country.slug);
}
function getCountriesByRegion(region) {
    return VWP_COUNTRIES.filter((country)=>country.region === region);
}
function searchCountries(query) {
    const lowerQuery = query.toLowerCase();
    return VWP_COUNTRIES.filter((country)=>country.name.toLowerCase().includes(lowerQuery) || country.slug.toLowerCase().includes(lowerQuery));
}
}),
"[project]/Documents/Self /esta/frontend/app/countries/sitemap.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>sitemap,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$data$2f$countries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/lib/data/countries.ts [app-route] (ecmascript)");
;
function sitemap() {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://visaportal.online';
    return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$lib$2f$data$2f$countries$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VWP_COUNTRIES"].map((country)=>({
            url: `${baseUrl}/countries/${country.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9
        }));
}
const revalidate = 43200;
}),
"[project]/Documents/Self /esta/frontend/app/countries/sitemap--route-entry.js [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$countries$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/countries/sitemap.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-route] (ecmascript)");
;
;
;
const contentType = "application/xml";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "sitemap";
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$countries$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"] !== 'function') {
    throw new Error('Default export is missing in "./sitemap.ts"');
}
async function GET() {
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$countries$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
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
"[project]/Documents/Self /esta/frontend/app/countries/sitemap--route-entry.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$countries$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["GET"],
    "revalidate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$countries$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["revalidate"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$countries$2f$sitemap$2d2d$route$2d$entry$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/countries/sitemap--route-entry.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Self__$2f$esta$2f$frontend$2f$app$2f$countries$2f$sitemap$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Self /esta/frontend/app/countries/sitemap.ts [app-route] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__545623c5._.js.map