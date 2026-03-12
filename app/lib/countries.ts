/**
 * Country utility functions and data
 */

export interface Country {
  code: string;
  name: string;
  nameEn: string;
}

/**
 * Get flag emoji for a country code
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @returns Flag emoji or empty string if invalid code
 */
export const getFlagEmoji = (countryCode: string): string => {
  if (!countryCode || countryCode.length !== 2) return "";
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

/**
 * All countries and passport-issuing territories (ISO 3166-1 alpha-2)
 * Exhaustive list — every sovereign state and territory that issues its own passport
 */
export const ALL_COUNTRIES: Country[] = [
  { code: "AD", name: "Андорра", nameEn: "Andorra" },
  { code: "AE", name: "ОАЭ", nameEn: "United Arab Emirates" },
  { code: "AF", name: "Афганистан", nameEn: "Afghanistan" },
  { code: "AG", name: "Антигуа и Барбуда", nameEn: "Antigua and Barbuda" },
  { code: "AI", name: "Ангилья", nameEn: "Anguilla" },
  { code: "AL", name: "Албания", nameEn: "Albania" },
  { code: "AM", name: "Армения", nameEn: "Armenia" },
  { code: "AO", name: "Ангола", nameEn: "Angola" },
  { code: "AR", name: "Аргентина", nameEn: "Argentina" },
  { code: "AS", name: "Американское Самоа", nameEn: "American Samoa" },
  { code: "AT", name: "Австрия", nameEn: "Austria" },
  { code: "AU", name: "Австралия", nameEn: "Australia" },
  { code: "AW", name: "Аруба", nameEn: "Aruba" },
  { code: "AZ", name: "Азербайджан", nameEn: "Azerbaijan" },
  { code: "BA", name: "Босния и Герцеговина", nameEn: "Bosnia and Herzegovina" },
  { code: "BB", name: "Барбадос", nameEn: "Barbados" },
  { code: "BD", name: "Бангладеш", nameEn: "Bangladesh" },
  { code: "BE", name: "Бельгия", nameEn: "Belgium" },
  { code: "BF", name: "Буркина-Фасо", nameEn: "Burkina Faso" },
  { code: "BG", name: "Болгария", nameEn: "Bulgaria" },
  { code: "BH", name: "Бахрейн", nameEn: "Bahrain" },
  { code: "BI", name: "Бурунди", nameEn: "Burundi" },
  { code: "BJ", name: "Бенин", nameEn: "Benin" },
  { code: "BM", name: "Бермуды", nameEn: "Bermuda" },
  { code: "BN", name: "Бруней", nameEn: "Brunei" },
  { code: "BO", name: "Боливия", nameEn: "Bolivia" },
  { code: "BR", name: "Бразилия", nameEn: "Brazil" },
  { code: "BS", name: "Багамы", nameEn: "Bahamas" },
  { code: "BT", name: "Бутан", nameEn: "Bhutan" },
  { code: "BW", name: "Ботсвана", nameEn: "Botswana" },
  { code: "BY", name: "Беларусь", nameEn: "Belarus" },
  { code: "BZ", name: "Белиз", nameEn: "Belize" },
  { code: "CA", name: "Канада", nameEn: "Canada" },
  { code: "CD", name: "ДР Конго", nameEn: "Democratic Republic of the Congo" },
  { code: "CF", name: "ЦАР", nameEn: "Central African Republic" },
  { code: "CG", name: "Республика Конго", nameEn: "Republic of the Congo" },
  { code: "CH", name: "Швейцария", nameEn: "Switzerland" },
  { code: "CI", name: "Кот-д'Ивуар", nameEn: "Ivory Coast" },
  { code: "CK", name: "Острова Кука", nameEn: "Cook Islands" },
  { code: "CL", name: "Чили", nameEn: "Chile" },
  { code: "CM", name: "Камерун", nameEn: "Cameroon" },
  { code: "CN", name: "Китай", nameEn: "China" },
  { code: "CO", name: "Колумбия", nameEn: "Colombia" },
  { code: "CR", name: "Коста-Рика", nameEn: "Costa Rica" },
  { code: "CU", name: "Куба", nameEn: "Cuba" },
  { code: "CV", name: "Кабо-Верде", nameEn: "Cape Verde" },
  { code: "CW", name: "Кюрасао", nameEn: "Curaçao" },
  { code: "CY", name: "Кипр", nameEn: "Cyprus" },
  { code: "CZ", name: "Чехия", nameEn: "Czech Republic" },
  { code: "DE", name: "Германия", nameEn: "Germany" },
  { code: "DJ", name: "Джибути", nameEn: "Djibouti" },
  { code: "DK", name: "Дания", nameEn: "Denmark" },
  { code: "DM", name: "Доминика", nameEn: "Dominica" },
  { code: "DO", name: "Доминиканская Республика", nameEn: "Dominican Republic" },
  { code: "DZ", name: "Алжир", nameEn: "Algeria" },
  { code: "EC", name: "Эквадор", nameEn: "Ecuador" },
  { code: "EE", name: "Эстония", nameEn: "Estonia" },
  { code: "EG", name: "Египет", nameEn: "Egypt" },
  { code: "ER", name: "Эритрея", nameEn: "Eritrea" },
  { code: "ES", name: "Испания", nameEn: "Spain" },
  { code: "ET", name: "Эфиопия", nameEn: "Ethiopia" },
  { code: "FI", name: "Финляндия", nameEn: "Finland" },
  { code: "FJ", name: "Фиджи", nameEn: "Fiji" },
  { code: "FK", name: "Фолклендские острова", nameEn: "Falkland Islands" },
  { code: "FM", name: "Микронезия", nameEn: "Micronesia" },
  { code: "FO", name: "Фарерские острова", nameEn: "Faroe Islands" },
  { code: "FR", name: "Франция", nameEn: "France" },
  { code: "GA", name: "Габон", nameEn: "Gabon" },
  { code: "GB", name: "Великобритания", nameEn: "United Kingdom" },
  { code: "GD", name: "Гренада", nameEn: "Grenada" },
  { code: "GE", name: "Грузия", nameEn: "Georgia" },
  { code: "GH", name: "Гана", nameEn: "Ghana" },
  { code: "GI", name: "Гибралтар", nameEn: "Gibraltar" },
  { code: "GL", name: "Гренландия", nameEn: "Greenland" },
  { code: "GM", name: "Гамбия", nameEn: "Gambia" },
  { code: "GN", name: "Гвинея", nameEn: "Guinea" },
  { code: "GQ", name: "Экваториальная Гвинея", nameEn: "Equatorial Guinea" },
  { code: "GR", name: "Греция", nameEn: "Greece" },
  { code: "GT", name: "Гватемала", nameEn: "Guatemala" },
  { code: "GU", name: "Гуам", nameEn: "Guam" },
  { code: "GW", name: "Гвинея-Бисау", nameEn: "Guinea-Bissau" },
  { code: "GY", name: "Гайана", nameEn: "Guyana" },
  { code: "HK", name: "Гонконг", nameEn: "Hong Kong" },
  { code: "HN", name: "Гондурас", nameEn: "Honduras" },
  { code: "HR", name: "Хорватия", nameEn: "Croatia" },
  { code: "HT", name: "Гаити", nameEn: "Haiti" },
  { code: "HU", name: "Венгрия", nameEn: "Hungary" },
  { code: "ID", name: "Индонезия", nameEn: "Indonesia" },
  { code: "IE", name: "Ирландия", nameEn: "Ireland" },
  { code: "IL", name: "Израиль", nameEn: "Israel" },
  { code: "IN", name: "Индия", nameEn: "India" },
  { code: "IQ", name: "Ирак", nameEn: "Iraq" },
  { code: "IR", name: "Иран", nameEn: "Iran" },
  { code: "IS", name: "Исландия", nameEn: "Iceland" },
  { code: "IT", name: "Италия", nameEn: "Italy" },
  { code: "JM", name: "Ямайка", nameEn: "Jamaica" },
  { code: "JO", name: "Иордания", nameEn: "Jordan" },
  { code: "JP", name: "Япония", nameEn: "Japan" },
  { code: "KE", name: "Кения", nameEn: "Kenya" },
  { code: "KG", name: "Кыргызстан", nameEn: "Kyrgyzstan" },
  { code: "KH", name: "Камбоджа", nameEn: "Cambodia" },
  { code: "KI", name: "Кирибати", nameEn: "Kiribati" },
  { code: "KM", name: "Коморы", nameEn: "Comoros" },
  { code: "KN", name: "Сент-Китс и Невис", nameEn: "Saint Kitts and Nevis" },
  { code: "KP", name: "Северная Корея", nameEn: "North Korea" },
  { code: "KR", name: "Южная Корея", nameEn: "South Korea" },
  { code: "KW", name: "Кувейт", nameEn: "Kuwait" },
  { code: "KY", name: "Каймановы острова", nameEn: "Cayman Islands" },
  { code: "KZ", name: "Казахстан", nameEn: "Kazakhstan" },
  { code: "LA", name: "Лаос", nameEn: "Laos" },
  { code: "LB", name: "Ливан", nameEn: "Lebanon" },
  { code: "LC", name: "Сент-Люсия", nameEn: "Saint Lucia" },
  { code: "LI", name: "Лихтенштейн", nameEn: "Liechtenstein" },
  { code: "LK", name: "Шри-Ланка", nameEn: "Sri Lanka" },
  { code: "LR", name: "Либерия", nameEn: "Liberia" },
  { code: "LS", name: "Лесото", nameEn: "Lesotho" },
  { code: "LT", name: "Литва", nameEn: "Lithuania" },
  { code: "LU", name: "Люксембург", nameEn: "Luxembourg" },
  { code: "LV", name: "Латвия", nameEn: "Latvia" },
  { code: "LY", name: "Ливия", nameEn: "Libya" },
  { code: "MA", name: "Марокко", nameEn: "Morocco" },
  { code: "MC", name: "Монако", nameEn: "Monaco" },
  { code: "MD", name: "Молдова", nameEn: "Moldova" },
  { code: "ME", name: "Черногория", nameEn: "Montenegro" },
  { code: "MG", name: "Мадагаскар", nameEn: "Madagascar" },
  { code: "MH", name: "Маршалловы Острова", nameEn: "Marshall Islands" },
  { code: "MK", name: "Северная Македония", nameEn: "North Macedonia" },
  { code: "ML", name: "Мали", nameEn: "Mali" },
  { code: "MM", name: "Мьянма", nameEn: "Myanmar" },
  { code: "MN", name: "Монголия", nameEn: "Mongolia" },
  { code: "MO", name: "Макао", nameEn: "Macau" },
  { code: "MR", name: "Мавритания", nameEn: "Mauritania" },
  { code: "MS", name: "Монтсеррат", nameEn: "Montserrat" },
  { code: "MT", name: "Мальта", nameEn: "Malta" },
  { code: "MU", name: "Маврикий", nameEn: "Mauritius" },
  { code: "MV", name: "Мальдивы", nameEn: "Maldives" },
  { code: "MW", name: "Малави", nameEn: "Malawi" },
  { code: "MX", name: "Мексика", nameEn: "Mexico" },
  { code: "MY", name: "Малайзия", nameEn: "Malaysia" },
  { code: "MZ", name: "Мозамбик", nameEn: "Mozambique" },
  { code: "NA", name: "Намибия", nameEn: "Namibia" },
  { code: "NC", name: "Новая Каледония", nameEn: "New Caledonia" },
  { code: "NE", name: "Нигер", nameEn: "Niger" },
  { code: "NG", name: "Нигерия", nameEn: "Nigeria" },
  { code: "NI", name: "Никарагуа", nameEn: "Nicaragua" },
  { code: "NL", name: "Нидерланды", nameEn: "Netherlands" },
  { code: "NO", name: "Норвегия", nameEn: "Norway" },
  { code: "NP", name: "Непал", nameEn: "Nepal" },
  { code: "NR", name: "Науру", nameEn: "Nauru" },
  { code: "NU", name: "Ниуэ", nameEn: "Niue" },
  { code: "NZ", name: "Новая Зеландия", nameEn: "New Zealand" },
  { code: "OM", name: "Оман", nameEn: "Oman" },
  { code: "PA", name: "Панама", nameEn: "Panama" },
  { code: "PE", name: "Перу", nameEn: "Peru" },
  { code: "PF", name: "Французская Полинезия", nameEn: "French Polynesia" },
  { code: "PG", name: "Папуа — Новая Гвинея", nameEn: "Papua New Guinea" },
  { code: "PH", name: "Филиппины", nameEn: "Philippines" },
  { code: "PK", name: "Пакистан", nameEn: "Pakistan" },
  { code: "PL", name: "Польша", nameEn: "Poland" },
  { code: "PR", name: "Пуэрто-Рико", nameEn: "Puerto Rico" },
  { code: "PS", name: "Палестина", nameEn: "Palestine" },
  { code: "PT", name: "Португалия", nameEn: "Portugal" },
  { code: "PW", name: "Палау", nameEn: "Palau" },
  { code: "PY", name: "Парагвай", nameEn: "Paraguay" },
  { code: "QA", name: "Катар", nameEn: "Qatar" },
  { code: "RO", name: "Румыния", nameEn: "Romania" },
  { code: "RS", name: "Сербия", nameEn: "Serbia" },
  { code: "RU", name: "Россия", nameEn: "Russia" },
  { code: "RW", name: "Руанда", nameEn: "Rwanda" },
  { code: "SA", name: "Саудовская Аравия", nameEn: "Saudi Arabia" },
  { code: "SB", name: "Соломоновы Острова", nameEn: "Solomon Islands" },
  { code: "SC", name: "Сейшелы", nameEn: "Seychelles" },
  { code: "SD", name: "Судан", nameEn: "Sudan" },
  { code: "SE", name: "Швеция", nameEn: "Sweden" },
  { code: "SG", name: "Сингапур", nameEn: "Singapore" },
  { code: "SH", name: "Остров Святой Елены", nameEn: "Saint Helena" },
  { code: "SI", name: "Словения", nameEn: "Slovenia" },
  { code: "SK", name: "Словакия", nameEn: "Slovakia" },
  { code: "SL", name: "Сьерра-Леоне", nameEn: "Sierra Leone" },
  { code: "SM", name: "Сан-Марино", nameEn: "San Marino" },
  { code: "SN", name: "Сенегал", nameEn: "Senegal" },
  { code: "SO", name: "Сомали", nameEn: "Somalia" },
  { code: "SR", name: "Суринам", nameEn: "Suriname" },
  { code: "SS", name: "Южный Судан", nameEn: "South Sudan" },
  { code: "ST", name: "Сан-Томе и Принсипи", nameEn: "São Tomé and Príncipe" },
  { code: "SV", name: "Сальвадор", nameEn: "El Salvador" },
  { code: "SX", name: "Синт-Мартен", nameEn: "Sint Maarten" },
  { code: "SY", name: "Сирия", nameEn: "Syria" },
  { code: "SZ", name: "Эсватини", nameEn: "Eswatini" },
  { code: "TC", name: "Тёркс и Кайкос", nameEn: "Turks and Caicos Islands" },
  { code: "TD", name: "Чад", nameEn: "Chad" },
  { code: "TG", name: "Того", nameEn: "Togo" },
  { code: "TH", name: "Таиланд", nameEn: "Thailand" },
  { code: "TJ", name: "Таджикистан", nameEn: "Tajikistan" },
  { code: "TL", name: "Восточный Тимор", nameEn: "Timor-Leste" },
  { code: "TM", name: "Туркменистан", nameEn: "Turkmenistan" },
  { code: "TN", name: "Тунис", nameEn: "Tunisia" },
  { code: "TO", name: "Тонга", nameEn: "Tonga" },
  { code: "TR", name: "Турция", nameEn: "Turkey" },
  { code: "TT", name: "Тринидад и Тобаго", nameEn: "Trinidad and Tobago" },
  { code: "TV", name: "Тувалу", nameEn: "Tuvalu" },
  { code: "TW", name: "Тайвань", nameEn: "Taiwan" },
  { code: "TZ", name: "Танзания", nameEn: "Tanzania" },
  { code: "UA", name: "Украина", nameEn: "Ukraine" },
  { code: "UG", name: "Уганда", nameEn: "Uganda" },
  { code: "US", name: "США", nameEn: "United States" },
  { code: "UY", name: "Уругвай", nameEn: "Uruguay" },
  { code: "UZ", name: "Узбекистан", nameEn: "Uzbekistan" },
  { code: "VA", name: "Ватикан", nameEn: "Vatican City" },
  { code: "VC", name: "Сент-Винсент и Гренадины", nameEn: "Saint Vincent and the Grenadines" },
  { code: "VE", name: "Венесуэла", nameEn: "Venezuela" },
  { code: "VG", name: "Виргинские острова (Брит.)", nameEn: "British Virgin Islands" },
  { code: "VN", name: "Вьетнам", nameEn: "Vietnam" },
  { code: "VU", name: "Вануату", nameEn: "Vanuatu" },
  { code: "WS", name: "Самоа", nameEn: "Samoa" },
  { code: "XK", name: "Косово", nameEn: "Kosovo" },
  { code: "YE", name: "Йемен", nameEn: "Yemen" },
  { code: "ZA", name: "ЮАР", nameEn: "South Africa" },
  { code: "ZM", name: "Замбия", nameEn: "Zambia" },
  { code: "ZW", name: "Зимбабве", nameEn: "Zimbabwe" },
];

/**
 * Get country name by country code
 * @param code - ISO 3166-1 alpha-2 country code
 * @returns Country name or undefined if not found
 */
export const getCountryName = (code: string): string | undefined => {
  return ALL_COUNTRIES.find(
    (country) => country.code.toLowerCase() === code.toLowerCase()
  )?.name;
};

/**
 * Get country by code
 * @param code - ISO 3166-1 alpha-2 country code
 * @returns Country object or undefined if not found
 */
export const getCountryByCode = (code: string): Country | undefined => {
  return ALL_COUNTRIES.find(
    (country) => country.code.toLowerCase() === code.toLowerCase()
  );
};

/**
 * Get country code by country name
 * @param name - Country name
 * @returns Country code or undefined if not found
 */
export const getCountryCodeByName = (name: string): string | undefined => {
  const lower = name.toLowerCase();
  return ALL_COUNTRIES.find(
    (country) =>
      country.name.toLowerCase() === lower ||
      country.nameEn.toLowerCase() === lower
  )?.code;
};
