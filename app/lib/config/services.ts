/**
 * Service Configuration System
 *
 * Central source of truth for all visa/ETA services
 * Defines metadata, pricing, steps, and business logic for each service
 */

export enum ServiceType {
  US_ESTA = "US_ESTA",
  UK_ETA = "UK_ETA",
  CANADA_ETA = "CANADA_ETA",
  THAILAND_TDAC = "THAILAND_TDAC",
  INDONESIA_EVOA = "INDONESIA_EVOA",
  MALAYSIA_MDAC = "MALAYSIA_MDAC",
}

export enum StepType {
  PERSONAL = "PERSONAL",
  PASSPORT = "PASSPORT",
  TRAVEL = "TRAVEL",
  CONTACT = "CONTACT",
  EMPLOYMENT = "EMPLOYMENT",
  ELIGIBILITY = "ELIGIBILITY",
  REVIEW = "REVIEW",
}

/**
 * A single field definition that drives BOTH step completion checking AND review display.
 *
 * For completion: fields with `required` set are checked against traveler/application data.
 * For review:     fields with a `label` are rendered in the review step.
 *
 * One config, two purposes — no duplication.
 */
export interface StepField {
  /** Display label shown in the review. Omit to use the field for completion only (not rendered). */
  label?: string;
  /** Where to read the value from. Defaults to "traveler". */
  source?: "traveler" | "application";
  /**
   * Which keys must be non-null for the step to be considered complete.
   * - true  → auto-detect from the field format (key / date keys / boolean key / map key / first concat key)
   * - string[] → explicitly list the keys to check
   * - omit  → not a completion requirement
   */
  required?: boolean | string[];

  // ── Value resolution (choose one) ──────────────────────────────────────────
  /** Single field key. */
  key?: string;
  /** Join multiple field keys into one string. */
  concat?: string[];
  /** Separator for concat. Defaults to " ". */
  separator?: string;
  /** Render three date-part keys as DD/MM/YYYY. */
  date?: { day: string; month: string; year: string };
  /** Render a boolean field with custom labels. */
  boolean?: { key: string; trueLabel: string; falseLabel: string };
  /** Map a raw value to a display string. */
  map?: { key: string; values: Record<string, string> };
  /** Static summary text (e.g. "All questions answered"). No completion check. */
  summary?: string;
}

export interface StepConfig {
  type: StepType;
  component: string;
  title: string;
  description?: string;
  /** Set true for steps that are never "done" (e.g. Review). */
  neverComplete?: boolean;
  /** Unified field definitions — drives both completion checking and review display. */
  fields?: StepField[];
}

export interface PrePaymentStepConfig {
  title: string;
  description?: string;
  emailHelperText?: string; // Custom helper text for email field
}

export enum ProcessingTierType {
  STANDARD = "STANDARD",
  RUSH = "RUSH",
  SUPER_RUSH = "SUPER_RUSH",
}

export interface ProcessingTier {
  type: ProcessingTierType;
  label: string; // e.g., "Standard", "Rush", "Fast Track"
  description: string; // e.g., "24 hour processing"
  processingTime: number; // in hours
  serviceFee: number; // Our service fee for this tier (government fee is separate)
  isDefault?: boolean; // Whether this is the default tier
}

export interface ServiceConfig {
  // Identity
  type: ServiceType;
  slug: string;
  name: string;
  destination: string;
  destinationCode: string; // ISO country code

  // Eligibility
  eligibleNationalities: string[]; // ISO country codes that can apply

  // Pricing
  pricing: {
    government: number; // Government fee (constant)
    currency: string; // USD, GBP, EUR, etc.
  };

  // Processing Tiers - different service fees and processing times
  processingTiers: ProcessingTier[];

  // Validity
  validity: {
    duration: string; // e.g., "2 years", "30 days", "Single use"
    stays: string; // e.g., "90 days per visit", "30 days per entry"
    multipleEntry: boolean; // Whether the authorization allows multiple entries
  };

  // Processing times (deprecated - kept for backward compatibility)
  processing: {
    standard: string;
    rush?: string;
    superRush?: string;
  };

  // SEO
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };

  // Pre-payment steps (before user pays)
  prePaymentSteps: {
    tripDetails: PrePaymentStepConfig;
    personalDetails: PrePaymentStepConfig;
    passportDetails: PrePaymentStepConfig;
  };

  // Pre-payment flow options
  /** Skip the processing-options step (flat-fee services). Defaults to false. */
  skipProcessingOptions?: boolean;

  // Post-payment form steps (after payment)
  steps: StepConfig[];

  // Included services (for marketing)
  includedServices: string[];
}

// ============================================
// US ESTA Configuration
// ============================================
export const US_ESTA_CONFIG: ServiceConfig = {
  type: ServiceType.US_ESTA,
  slug: "esta",
  name: "United States ESTA",
  destination: "united-states",
  destinationCode: "US",

  eligibleNationalities: [
    // Visa Waiver Program countries
    "AD",
    "AU",
    "AT",
    "BE",
    "BN",
    "CL",
    "HR",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "HU",
    "IS",
    "IE",
    "IT",
    "JP",
    "LV",
    "LI",
    "LT",
    "LU",
    "MT",
    "MC",
    "NL",
    "NZ",
    "NO",
    "PL",
    "PT",
    "SM",
    "SG",
    "SK",
    "SI",
    "KR",
    "ES",
    "SE",
    "CH",
    "TW",
    "GB",
  ],

  pricing: {
    government: 3600,

    currency: "RUB",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Стандарт",
      description: "Обработка за 24 часа",
      processingTime: 24,
      serviceFee: 1790,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Срочный",
      description: "Обработка за 4 часа",
      processingTime: 4,
      serviceFee: 2690,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Экспресс",
      description: "Обработка за 1 час",
      processingTime: 1,
      serviceFee: 3590,
    },
  ],

  validity: {
    duration: "2 года",
    stays: "до 90 дней за визит",
    multipleEntry: true,
  },

  processing: {
    standard: "24 часа",
    rush: "4 часа",
    superRush: "1 час",
  },

  meta: {
    title: "Оформление US ESTA | Быстрая обработка ESTA",
    description:
      "Оформите US ESTA онлайн. Быстрая обработка, поддержка 24/7 и мгновенное одобрение для граждан подходящих стран.",
    keywords: [
      "esta",
      "виза сша",
      "разрешение на въезд",
      "поездка в сша",
      "оформление esta",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Оформите United States ESTA прямо сейчас",
      description:
        "United States ESTA обязательна для владельцев паспортов {nationality}, планирующих въезд в {destination}",
    },
    personalDetails: {
      title: "Ваши личные данные",
      description: "Введите данные, как указано в вашем паспорте.",
      emailHelperText:
        "Одобренная United States ESTA будет отправлена на этот адрес электронной почты.",
    },
    passportDetails: {
      title: "Данные паспорта",
      description: "Введите данные вашего паспорта.",
    },
  },

  steps: [
    {
      type: StepType.PERSONAL,
      component: "ESTAPersonalStep",
      title: "Личные данные",
      description:
        "Укажите точные личные данные, как в вашем паспорте",
      fields: [
        {
          label: "Полное имя",
          concat: ["firstName", "middleName", "lastName"],
          required: ["firstName", "lastName"],
        },
        {
          label: "Дата рождения",
          date: { day: "birthDay", month: "birthMonth", year: "birthYear" },
        },
        {
          label: "Пол",
          map: {
            key: "gender",
            values: { M: "Мужской", F: "Женский", X: "Другой" },
          },
        },
        { label: "Город рождения", key: "cityOfBirth" },
        { label: "Страна рождения", key: "countryOfBirth" },
        { label: "Семейное положение", key: "maritalStatus" },
        { label: "Email", key: "email", required: true },
        {
          label: "Имя отца",
          concat: ["fatherFirstName", "fatherFamilyName"],
        },
        {
          label: "Имя матери",
          concat: ["motherFirstName", "motherFamilyName"],
        },
      ],
    },
    {
      type: StepType.PASSPORT,
      component: "ESTAPassportStep",
      title: "Паспортные данные",
      description: "Введите данные паспорта и загрузите необходимые документы",
      fields: [
        { label: "Номер паспорта", key: "passportNumber", required: true },
        { label: "Тип паспорта", key: "passportType" },
        {
          label: "Дата выдачи",
          date: {
            day: "passportIssueDay",
            month: "passportIssueMonth",
            year: "passportIssueYear",
          },
        },
        {
          label: "Срок действия",
          date: {
            day: "passportExpiryDay",
            month: "passportExpiryMonth",
            year: "passportExpiryYear",
          },
        },
        { label: "Гражданство", key: "nationalityOnPassport", required: true },
        {
          label: "Электронный паспорт",
          boolean: { key: "isEPassport", trueLabel: "Да", falseLabel: "Нет" },
        },
        { label: "Страна проживания", key: "countryOfResidence" },
        { label: "Национальный ID", key: "nationalIdNumber" },
        { key: "passportUrl", required: true },
      ],
    },
    {
      type: StepType.TRAVEL,
      component: "ESTAUSTravelStep",
      title: "Детали поездки в США",
      description: "Расскажите о ваших планах поездки в Соединённые Штаты",
      fields: [
        {
          label: "Цель визита",
          key: "purposeOfVisit",
          source: "application",
          required: true,
        },
        {
          label: "Транзит",
          boolean: { key: "isTransiting", trueLabel: "Да", falseLabel: "Нет" },
          source: "application",
        },
        { label: "Дата прибытия", key: "arrivalDate", source: "application" },
        {
          label: "Номер рейса / судна",
          key: "flightVesselNumber",
          source: "application",
        },
        { label: "Пункт въезда", key: "pointOfEntry", source: "application" },
        {
          label: "Адрес пребывания в США",
          concat: ["usStayAddressLine1", "usStayCity", "usStayState"],
          separator: ", ",
          source: "application",
        },
        {
          label: "Контактное лицо в США",
          key: "usPointOfContactName",
          source: "application",
        },
      ],
    },
    {
      type: StepType.CONTACT,
      component: "ESTAContactStep",
      title: "Контактная информация",
      description: "Укажите контактные данные и экстренный контакт",
      fields: [
        { label: "Номер телефона", key: "phoneNumber", required: true },
        { label: "Тип телефона", key: "phoneType" },
        {
          label: "Домашний адрес",
          concat: [
            "addressLine1",
            "addressLine2",
            "city",
            "stateProvinceRegion",
            "postalCode",
            "country",
          ],
          separator: ", ",
          required: ["addressLine1"],
        },
        {
          label: "Экстренный контакт",
          concat: ["emergencyContactFirstName", "emergencyContactLastName"],
        },
        { label: "Email экстренного контакта", key: "emergencyContactEmail" },
        { label: "Телефон экстренного контакта", key: "emergencyContactPhone" },
      ],
    },
    {
      type: StepType.EMPLOYMENT,
      component: "ESTAEmploymentStep",
      title: "Информация о занятости",
      description: "Расскажите о вашем текущем трудоустройстве",
      fields: [
        {
          label: "Статус занятости",
          boolean: {
            key: "isEmployed",
            trueLabel: "Работаю",
            falseLabel: "Не работаю",
          },
          required: true,
        },
        { label: "Должность", key: "jobTitle" },
        { label: "Работодатель", key: "employerName" },
        { label: "Город работодателя", key: "employerCity" },
        { label: "Страна работодателя", key: "employerCountry" },
      ],
    },
    {
      type: StepType.ELIGIBILITY,
      component: "ESTAEligibilityStep",
      title: "Вопросы о праве на въезд",
      description: "Пожалуйста, ответьте на все вопросы честно",
      fields: [
        { key: "eligibilityQ1", required: true },
        {
          label: "Статус",
          summary: "Все 9 вопросов о праве на въезд заполнены.",
        },
      ],
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Проверка и отправка",
      description: "Проверьте все данные перед отправкой",
      neverComplete: true,
    },
  ],

  includedServices: [
    "Проверка формы на ошибки",
    "Отслеживание статуса в реальном времени",
    "Уведомления по email и SMS",
    "Поддержка 24/7",
    "Помощь с повторной подачей (при необходимости)",
    "Проверка и консультация по документам",
  ],
};

// ============================================
// UK ETA Configuration
// ============================================
export const UK_ETA_CONFIG: ServiceConfig = {
  type: ServiceType.UK_ETA,
  slug: "uk-eta",
  name: "United Kingdom ETA",
  destination: "united-kingdom",
  destinationCode: "GB",

  eligibleNationalities: [
    // All visa-exempt nationals (85 countries as of 2025)
    "AD",
    "AG",
    "AR",
    "AU",
    "AT",
    "BS",
    "BH",
    "BB",
    "BE",
    "BZ",
    "BR",
    "BN",
    "BG",
    "CA",
    "CL",
    "CR",
    "HR",
    "CY",
    "CZ",
    "DK",
    "EE",
    "FI",
    "FR",
    "DE",
    "GR",
    "GD",
    "GT",
    "GY",
    "HK",
    "HU",
    "IS",
    "IT",
    "IL",
    "JP",
    "KI",
    "KW",
    "LV",
    "LI",
    "LT",
    "LU",
    "MO",
    "MY",
    "MV",
    "MT",
    "MH",
    "MU",
    "MX",
    "FM",
    "MC",
    "NL",
    "NZ",
    "NI",
    "NO",
    "OM",
    "PW",
    "PA",
    "PG",
    "PY",
    "PE",
    "PL",
    "PT",
    "QA",
    "RO",
    "WS",
    "SM",
    "SA",
    "SC",
    "SG",
    "SB",
    "KR",
    "SK",
    "SI",
    "ES",
    "KN",
    "LC",
    "VC",
    "SE",
    "CH",
    "TO",
    "TV",
    "AE",
    "US",
    "UY",
    "VA",
    "TW",
  ],

  pricing: {
    government: 1890,

    currency: "RUB",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Стандарт",
      description: "Обработка за 24 часа",
      processingTime: 24,
      serviceFee: 1490,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Срочный",
      description: "Обработка за 4 часа",
      processingTime: 4,
      serviceFee: 2190,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Экспресс",
      description: "Обработка за 1 час",
      processingTime: 1,
      serviceFee: 2890,
    },
  ],

  validity: {
    duration: "2 года",
    stays: "до 180 дней за визит",
    multipleEntry: true,
  },

  processing: {
    standard: "24 часа",
    rush: "4 часа",
    superRush: "1 час",
  },

  meta: {
    title: "Оформление UK ETA | Электронное разрешение на въезд",
    description:
      "Оформите UK ETA онлайн. Быстрая и безопасная обработка с мгновенным одобрением для граждан подходящих стран.",
    keywords: [
      "uk eta",
      "виза великобритания",
      "разрешение на въезд в великобританию",
      "электронное разрешение",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Оформите United Kingdom ETA прямо сейчас",
      description:
        "United Kingdom ETA обязательна для владельцев паспортов {nationality}, планирующих въезд в {destination}",
    },
    personalDetails: {
      title: "Ваши личные данные",
      description: "Введите данные, как указано в вашем паспорте.",
      emailHelperText:
        "Одобренная United Kingdom ETA будет отправлена на этот адрес электронной почты.",
    },
    passportDetails: {
      title: "Данные паспорта",
      description: "Введите данные вашего паспорта.",
    },
  },

  steps: [
    {
      type: StepType.PERSONAL,
      component: "UKETAPersonalStep",
      title: "Личные данные",
      description: "Укажите основные личные данные",
      fields: [
        {
          label: "Полное имя",
          concat: ["firstName", "lastName"],
          required: ["firstName", "lastName"],
        },
        {
          label: "Дата рождения",
          date: { day: "birthDay", month: "birthMonth", year: "birthYear" },
        },
        {
          label: "Пол",
          map: {
            key: "gender",
            values: { M: "Мужской", F: "Женский", X: "Другой" },
          },
        },
        { label: "Email", key: "email", required: true },
      ],
    },
    {
      type: StepType.PASSPORT,
      component: "UKETAPassportStep",
      title: "Паспортные данные",
      description: "Введите данные паспорта и загрузите документы",
      fields: [
        { label: "Номер паспорта", key: "passportNumber", required: true },
        {
          label: "Срок действия",
          date: {
            day: "passportExpiryDay",
            month: "passportExpiryMonth",
            year: "passportExpiryYear",
          },
        },
        { key: "passportUrl", required: true },
      ],
    },
    {
      type: StepType.EMPLOYMENT,
      component: "UKETAEmploymentStep",
      title: "Информация о занятости",
      description: "Расскажите о вашей профессии",
      fields: [
        { label: "Текущая профессия", key: "jobTitle", required: true },
      ],
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Проверка и отправка",
      description: "Проверьте все данные перед отправкой",
      neverComplete: true,
    },
  ],

  includedServices: [
    "Проверка заявки",
    "Отслеживание статуса в реальном времени",
    "Email-уведомления",
    "Поддержка 24/7",
    "Безопасное хранение документов",
    "Варианты ускоренной обработки",
  ],
};

// ============================================
// Canada eTA Configuration
// ============================================
export const CANADA_ETA_CONFIG: ServiceConfig = {
  type: ServiceType.CANADA_ETA,
  slug: "canada-eta",
  name: "Canada eTA",
  destination: "canada",
  destinationCode: "CA",

  // Citizens of these countries require an eTA to fly to/transit through Canada.
  // US citizens are excluded — they enter on their passport only.
  eligibleNationalities: [
    "AD", // Andorra
    "AG", // Antigua and Barbuda
    "AU", // Australia
    "AT", // Austria
    "BS", // Bahamas
    "BB", // Barbados
    "BE", // Belgium
    "BN", // Brunei
    "BG", // Bulgaria
    "CL", // Chile
    "HR", // Croatia
    "CY", // Cyprus
    "CZ", // Czech Republic
    "DK", // Denmark
    "EE", // Estonia
    "FI", // Finland
    "FR", // France
    "DE", // Germany
    "GR", // Greece
    "HU", // Hungary
    "IS", // Iceland
    "IE", // Ireland
    "IT", // Italy
    "JP", // Japan
    "KR", // South Korea
    "LV", // Latvia
    "LI", // Liechtenstein
    "LT", // Lithuania
    "LU", // Luxembourg
    "MT", // Malta
    "MX", // Mexico
    "MC", // Monaco
    "NL", // Netherlands
    "NZ", // New Zealand
    "NO", // Norway
    "PG", // Papua New Guinea
    "PL", // Poland
    "PT", // Portugal
    "RO", // Romania
    "WS", // Samoa
    "SM", // San Marino
    "SG", // Singapore
    "SK", // Slovakia
    "SI", // Slovenia
    "SB", // Solomon Islands
    "ES", // Spain
    "SE", // Sweden
    "CH", // Switzerland
    "TW", // Taiwan
    "TL", // Timor-Leste
    "GB", // United Kingdom
  ],

  pricing: {
    government: 490,

    currency: "RUB",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Стандарт",
      description: "Обработка за 24 часа",
      processingTime: 24,
      serviceFee: 1990,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Срочный",
      description: "Обработка за 4 часа",
      processingTime: 4,
      serviceFee: 3290,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Экспресс",
      description: "Обработка за 1 час",
      processingTime: 1,
      serviceFee: 3790,
    },
  ],

  validity: {
    duration: "5 лет",
    stays: "до 6 месяцев за визит",
    multipleEntry: true,
  },

  processing: {
    standard: "24 часа",
    rush: "4 часа",
    superRush: "1 час",
  },

  meta: {
    title: "Оформление Canada eTA | Быстрое электронное разрешение",
    description:
      "Оформите Canada eTA онлайн. Быстрая обработка, поддержка 24/7 и оперативное одобрение для граждан подходящих стран.",
    keywords: [
      "canada eta",
      "разрешение на въезд в канаду",
      "канадская eta",
      "eta канада",
      "безвизовый въезд канада",
      "оформить canada eta",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Оформите Canada eTA прямо сейчас",
      description:
        "Canada eTA обязательна для владельцев паспортов {nationality}, планирующих въезд в {destination}",
    },
    personalDetails: {
      title: "Ваши личные данные",
      description: "Введите данные, как указано в вашем паспорте.",
      emailHelperText:
        "Одобренная Canada eTA будет отправлена на этот адрес электронной почты.",
    },
    passportDetails: {
      title: "Данные паспорта",
      description: "Введите данные вашего паспорта.",
    },
  },

  // Post-payment form steps — UI components implemented in the post-payment flow
  steps: [
    {
      type: StepType.PERSONAL,
      component: "CanadaETAPersonalStep",
      title: "Личные данные",
      description:
        "Укажите личные данные, как в вашем паспорте",
      fields: [
        {
          label: "Полное имя",
          concat: ["firstName", "lastName"],
          required: ["firstName", "lastName"],
        },
        {
          label: "Дата рождения",
          date: { day: "birthDay", month: "birthMonth", year: "birthYear" },
        },
        {
          label: "Пол",
          map: {
            key: "gender",
            values: { M: "Мужской", F: "Женский", X: "Другой" },
          },
        },
        { label: "Семейное положение", key: "maritalStatus" },
        { label: "Email", key: "email", required: true },
      ],
    },
    {
      type: StepType.PASSPORT,
      component: "CanadaETAPassportStep",
      title: "Паспортные данные",
      description: "Введите данные паспорта и загрузите необходимые документы",
      fields: [
        { label: "Номер паспорта", key: "passportNumber", required: true },
        {
          label: "Дата выдачи",
          date: {
            day: "passportIssueDay",
            month: "passportIssueMonth",
            year: "passportIssueYear",
          },
        },
        {
          label: "Срок действия",
          date: {
            day: "passportExpiryDay",
            month: "passportExpiryMonth",
            year: "passportExpiryYear",
          },
        },
        { label: "Гражданство", key: "nationalityOnPassport", required: true },
        {
          label: "Электронный паспорт",
          boolean: { key: "isEPassport", trueLabel: "Да", falseLabel: "Нет" },
        },
        { label: "Страна проживания", key: "countryOfResidence" },
        { key: "passportUrl", required: true },
      ],
    },
    {
      type: StepType.ELIGIBILITY,
      component: "CanadaETAEligibilityStep",
      title: "Вопросы о праве на въезд",
      description: "Пожалуйста, ответьте на все вопросы честно",
      fields: [
        { key: "eligibilityQ1", required: true },
        {
          label: "Статус",
          summary: "Все вопросы о праве на въезд заполнены.",
        },
      ],
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Проверка и отправка",
      description: "Проверьте все данные перед отправкой",
      neverComplete: true,
    },
  ],

  includedServices: [
    "Проверка заявки",
    "Отслеживание статуса в реальном времени",
    "Уведомления по email и SMS",
    "Поддержка 24/7",
    "Безопасное хранение документов",
    "Помощь с повторной подачей (при необходимости)",
  ],
};

// ============================================
// Thailand TDAC Configuration
// ============================================
export const THAILAND_TDAC_CONFIG: ServiceConfig = {
  type: ServiceType.THAILAND_TDAC,
  slug: "thailand-tdac",
  name: "Thailand Digital Arrival Card",
  destination: "thailand",
  destinationCode: "TH",

  // All non-Thai nationals are required to complete TDAC
  eligibleNationalities: [
    "AD",
    "AE",
    "AF",
    "AG",
    "AL",
    "AM",
    "AO",
    "AR",
    "AT",
    "AU",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BN",
    "BO",
    "BR",
    "BS",
    "BT",
    "BW",
    "BY",
    "BZ",
    "CA",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CL",
    "CM",
    "CN",
    "CO",
    "CR",
    "CU",
    "CV",
    "CY",
    "CZ",
    "DE",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "ER",
    "ES",
    "ET",
    "FI",
    "FJ",
    "FM",
    "FR",
    "GA",
    "GB",
    "GD",
    "GE",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GR",
    "GT",
    "GW",
    "GY",
    "HK",
    "HN",
    "HR",
    "HT",
    "HU",
    "ID",
    "IE",
    "IL",
    "IN",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KI",
    "KM",
    "KN",
    "KP",
    "KR",
    "KW",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "ME",
    "MG",
    "MH",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MR",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MY",
    "MZ",
    "NA",
    "NE",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NR",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PG",
    "PH",
    "PK",
    "PL",
    "PT",
    "PW",
    "PY",
    "QA",
    "RO",
    "RS",
    "RU",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SI",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "SS",
    "ST",
    "SV",
    "SY",
    "SZ",
    "TD",
    "TG",
    "TJ",
    "TL",
    "TM",
    "TN",
    "TO",
    "TR",
    "TT",
    "TV",
    "TW",
    "TZ",
    "UA",
    "UG",
    "US",
    "UY",
    "UZ",
    "VA",
    "VC",
    "VE",
    "VN",
    "VU",
    "WS",
    "YE",
    "ZA",
    "ZM",
    "ZW",
  ],

  pricing: {
    government: 0,

    currency: "RUB",
  },

  skipProcessingOptions: true,

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Стандарт",
      description: "Обработка за 1 час",
      processingTime: 1,
      serviceFee: 990,
      isDefault: true,
    },
  ],

  validity: {
    duration: "30 дней после прибытия",
    stays: "30 дней за въезд",
    multipleEntry: false,
  },

  processing: {
    standard: "1 час",
  },

  meta: {
    title: "Оформление Thailand TDAC | Цифровая карта прибытия онлайн",
    description:
      "Оформите цифровую карту прибытия в Таиланд (TDAC) онлайн. Быстрая обработка с проверкой и поддержкой 24/7.",
    keywords: [
      "thailand tdac",
      "цифровая карта прибытия таиланд",
      "оформление tdac",
      "карта прибытия таиланд",
      "поездка в таиланд",
      "tdac онлайн",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Оформите цифровую карту прибытия в Таиланд",
      description:
        "Цифровая карта прибытия в Таиланд (TDAC) обязательна для владельцев паспортов {nationality}, планирующих въезд в {destination}",
    },
    personalDetails: {
      title: "Ваши личные данные",
      description: "Введите данные, как указано в вашем паспорте.",
      emailHelperText:
        "Заполненная Thailand TDAC будет отправлена на этот адрес электронной почты.",
    },
    passportDetails: {
      title: "Данные паспорта",
      description: "Введите данные вашего паспорта.",
    },
  },

  steps: [
    {
      type: StepType.TRAVEL,
      component: "TDACTripDetailsStep",
      title: "Детали поездки",
      description: "Основная информация",
      fields: [
        { label: "Номер телефона", key: "phoneNumber", required: true },
        {
          label: "Дата прибытия",
          key: "arrivalDate",
          source: "application",
          required: true,
        },
        {
          label: "Номер рейса",
          key: "flightVesselNumber",
          source: "application",
        },
      ],
    },
    {
      type: StepType.PERSONAL,
      component: "TDACPersonalDetailsStep",
      title: "Личные данные",
      description: "Основная личная информация",
      fields: [
        {
          label: "Пол",
          map: {
            key: "gender",
            values: { M: "Мужской", F: "Женский" },
          },
          required: true,
        },
        {
          label: "Страна проживания",
          key: "countryOfResidence",
          required: true,
        },
        {
          label: "Статус занятости",
          map: {
            key: "jobTitle",
            values: {
              EMPLOYED: "Работаю",
              RETIRED: "На пенсии",
              STUDENT: "Студент",
              UNEMPLOYED: "Не работаю",
            },
          },
          required: true,
        },
      ],
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Проверка и отправка",
      description: "Проверьте все данные перед отправкой",
      neverComplete: true,
    },
  ],

  includedServices: [
    "Экспертная проверка формы",
    "Отслеживание статуса в реальном времени",
    "Уведомления по email и SMS",
    "Поддержка 24/7",
    "Гарантия безошибочной подачи",
    "Персональный агент поддержки",
  ],
};

// ============================================
// Indonesia eVOA Configuration
// ============================================
export const INDONESIA_EVOA_CONFIG: ServiceConfig = {
  type: ServiceType.INDONESIA_EVOA,
  slug: "indonesia-evoa",
  name: "Indonesia eVOA",
  destination: "indonesia",
  destinationCode: "ID",

  // Countries eligible for Indonesia eVOA (Visa on Arrival)
  eligibleNationalities: [
    "AE",
    "AR",
    "AT",
    "AU",
    "BA",
    "BE",
    "BG",
    "BH",
    "BR",
    "CA",
    "CH",
    "CN",
    "CY",
    "CZ",
    "DE",
    "DK",
    "EE",
    "EG",
    "ES",
    "FI",
    "FR",
    "GB",
    "GR",
    "HK",
    "HR",
    "HU",
    "IE",
    "IN",
    "IS",
    "IT",
    "JO",
    "JP",
    "KR",
    "KW",
    "LI",
    "LT",
    "LU",
    "LV",
    "MC",
    "ME",
    "MK",
    "MT",
    "MX",
    "MY",
    "NL",
    "NO",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PH",
    "PL",
    "PT",
    "QA",
    "RO",
    "RS",
    "RU",
    "SA",
    "SE",
    "SG",
    "SI",
    "SK",
    "TH",
    "TN",
    "TR",
    "TW",
    "UA",
    "US",
    "VA",
    "VN",
    "ZA",
  ],

  pricing: {
    government: 2900,
    currency: "RUB",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Стандарт",
      description: "Обработка за 24 часа",
      processingTime: 24,
      serviceFee: 1790,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Срочный",
      description: "Обработка за 4 часа",
      processingTime: 4,
      serviceFee: 2690,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Экспресс",
      description: "Обработка за 1 час",
      processingTime: 1,
      serviceFee: 3190,
    },
  ],

  validity: {
    duration: "90 дней после выдачи",
    stays: "30 дней",
    multipleEntry: false,
  },

  processing: {
    standard: "24 часа",
    rush: "4 часа",
    superRush: "1 час",
  },

  meta: {
    title: "Оформление Indonesia eVOA | Электронная виза по прибытии",
    description:
      "Оформите Indonesia eVOA (электронная виза по прибытии) онлайн. Быстрая обработка с проверкой и поддержкой 24/7.",
    keywords: [
      "indonesia evoa",
      "виза по прибытии индонезия",
      "электронная виза индонезия",
      "оформление evoa",
      "виза индонезия",
      "виза бали",
      "виза индонезия онлайн",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Оформите Indonesia eVOA прямо сейчас",
      description:
        "Indonesia eVOA (электронная виза по прибытии) обязательна для владельцев паспортов {nationality}, планирующих въезд в {destination}",
    },
    personalDetails: {
      title: "Ваши личные данные",
      description: "Введите данные, как указано в вашем паспорте.",
      emailHelperText:
        "Заполненная Indonesia eVOA будет отправлена на этот адрес электронной почты.",
    },
    passportDetails: {
      title: "Данные паспорта",
      description: "Введите данные вашего паспорта.",
    },
  },

  steps: [
    {
      type: StepType.TRAVEL,
      component: "EVOATripDetailsStep",
      title: "Детали поездки",
      description: "Основная информация",
      fields: [
        { label: "Номер телефона", key: "phoneNumber", required: true },
        {
          label: "Дата прибытия",
          key: "arrivalDate",
          source: "application",
          required: true,
        },
        {
          label: "Номер рейса",
          key: "flightVesselNumber",
          source: "application",
        },
      ],
    },
    {
      type: StepType.PERSONAL,
      component: "EVOAPersonalDetailsStep",
      title: "Личные данные",
      description: "Основная личная информация",
      fields: [
        {
          label: "Пол",
          map: {
            key: "gender",
            values: { M: "Мужской", F: "Женский" },
          },
          required: true,
        },
        {
          label: "Страна проживания",
          key: "countryOfResidence",
          required: true,
        },
        {
          label: "Статус занятости",
          map: {
            key: "jobTitle",
            values: {
              EMPLOYED: "Работаю",
              RETIRED: "На пенсии",
              STUDENT: "Студент",
              UNEMPLOYED: "Не работаю",
            },
          },
          required: true,
        },
      ],
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Проверка и отправка",
      description: "Проверьте все данные перед отправкой",
      neverComplete: true,
    },
  ],

  includedServices: [
    "Экспертная проверка формы",
    "Отслеживание статуса в реальном времени",
    "Уведомления по email и SMS",
    "Поддержка 24/7",
    "Гарантия безошибочной подачи",
    "Персональный агент поддержки",
  ],
};

// ============================================
// Malaysia MDAC Configuration
// ============================================
export const MALAYSIA_MDAC_CONFIG: ServiceConfig = {
  type: ServiceType.MALAYSIA_MDAC,
  slug: "malaysia-mdac",
  name: "Malaysia Digital Arrival Card",
  destination: "malaysia",
  destinationCode: "MY",

  // All non-Malaysian nationals are required to complete MDAC
  eligibleNationalities: [
    "AD",
    "AE",
    "AF",
    "AG",
    "AL",
    "AM",
    "AO",
    "AR",
    "AT",
    "AU",
    "AZ",
    "BA",
    "BB",
    "BD",
    "BE",
    "BF",
    "BG",
    "BH",
    "BI",
    "BJ",
    "BN",
    "BO",
    "BR",
    "BS",
    "BT",
    "BW",
    "BY",
    "BZ",
    "CA",
    "CD",
    "CF",
    "CG",
    "CH",
    "CI",
    "CL",
    "CM",
    "CN",
    "CO",
    "CR",
    "CU",
    "CV",
    "CY",
    "CZ",
    "DE",
    "DJ",
    "DK",
    "DM",
    "DO",
    "DZ",
    "EC",
    "EE",
    "EG",
    "ER",
    "ES",
    "ET",
    "FI",
    "FJ",
    "FM",
    "FR",
    "GA",
    "GB",
    "GD",
    "GE",
    "GH",
    "GM",
    "GN",
    "GQ",
    "GR",
    "GT",
    "GW",
    "GY",
    "HK",
    "HN",
    "HR",
    "HT",
    "HU",
    "ID",
    "IE",
    "IL",
    "IN",
    "IQ",
    "IR",
    "IS",
    "IT",
    "JM",
    "JO",
    "JP",
    "KE",
    "KG",
    "KH",
    "KI",
    "KM",
    "KN",
    "KP",
    "KR",
    "KW",
    "KZ",
    "LA",
    "LB",
    "LC",
    "LI",
    "LK",
    "LR",
    "LS",
    "LT",
    "LU",
    "LV",
    "LY",
    "MA",
    "MC",
    "MD",
    "ME",
    "MG",
    "MH",
    "MK",
    "ML",
    "MM",
    "MN",
    "MO",
    "MR",
    "MT",
    "MU",
    "MV",
    "MW",
    "MX",
    "MZ",
    "NA",
    "NE",
    "NG",
    "NI",
    "NL",
    "NO",
    "NP",
    "NR",
    "NZ",
    "OM",
    "PA",
    "PE",
    "PG",
    "PH",
    "PK",
    "PL",
    "PT",
    "PW",
    "PY",
    "QA",
    "RO",
    "RS",
    "RU",
    "RW",
    "SA",
    "SB",
    "SC",
    "SD",
    "SE",
    "SG",
    "SI",
    "SK",
    "SL",
    "SM",
    "SN",
    "SO",
    "SR",
    "SS",
    "ST",
    "SV",
    "SY",
    "SZ",
    "TD",
    "TG",
    "TH",
    "TJ",
    "TL",
    "TM",
    "TN",
    "TO",
    "TR",
    "TT",
    "TV",
    "TW",
    "TZ",
    "UA",
    "UG",
    "US",
    "UY",
    "UZ",
    "VA",
    "VC",
    "VE",
    "VN",
    "VU",
    "WS",
    "YE",
    "ZA",
    "ZM",
    "ZW",
  ],

  pricing: {
    government: 0,

    currency: "RUB",
  },

  processingTiers: [
    {
      type: ProcessingTierType.STANDARD,
      label: "Стандарт",
      description: "Обработка за 24 часа",
      processingTime: 24,
      serviceFee: 890,
      isDefault: true,
    },
    {
      type: ProcessingTierType.RUSH,
      label: "Срочный",
      description: "Обработка за 4 часа",
      processingTime: 4,
      serviceFee: 1290,
    },
    {
      type: ProcessingTierType.SUPER_RUSH,
      label: "Экспресс",
      description: "Обработка за 1 час",
      processingTime: 1,
      serviceFee: 1590,
    },
  ],

  validity: {
    duration: "90 дней после прибытия",
    stays: "90 дней за въезд",
    multipleEntry: false,
  },

  processing: {
    standard: "24 часа",
    rush: "4 часа",
    superRush: "1 час",
  },

  meta: {
    title: "Оформление Malaysia MDAC | Цифровая карта прибытия онлайн",
    description:
      "Оформите цифровую карту прибытия в Малайзию (MDAC) онлайн. Быстрая обработка с проверкой и поддержкой 24/7.",
    keywords: [
      "malaysia mdac",
      "цифровая карта прибытия малайзия",
      "оформление mdac",
      "карта прибытия малайзия",
      "поездка в малайзию",
      "mdac онлайн",
      "карта въезда малайзия",
    ],
  },

  prePaymentSteps: {
    tripDetails: {
      title: "Оформите цифровую карту прибытия в Малайзию",
      description:
        "Цифровая карта прибытия в Малайзию (MDAC) обязательна для владельцев паспортов {nationality}, планирующих въезд в {destination}",
    },
    personalDetails: {
      title: "Ваши личные данные",
      description: "Введите данные, как указано в вашем паспорте.",
      emailHelperText:
        "Заполненная Malaysia MDAC будет отправлена на этот адрес электронной почты.",
    },
    passportDetails: {
      title: "Данные паспорта",
      description: "Введите данные вашего паспорта.",
    },
  },

  steps: [
    {
      type: StepType.TRAVEL,
      component: "MDACTripDetailsStep",
      title: "Детали поездки",
      description: "Основная информация",
      fields: [
        { label: "Номер телефона", key: "phoneNumber", required: true },
        {
          label: "Дата прибытия",
          key: "arrivalDate",
          source: "application",
          required: true,
        },
        {
          label: "Номер рейса",
          key: "flightVesselNumber",
          source: "application",
        },
      ],
    },
    {
      type: StepType.PERSONAL,
      component: "MDACPersonalDetailsStep",
      title: "Личные данные",
      description: "Основная личная информация",
      fields: [
        {
          label: "Пол",
          map: {
            key: "gender",
            values: { M: "Мужской", F: "Женский" },
          },
          required: true,
        },
        {
          label: "Страна проживания",
          key: "countryOfResidence",
          required: true,
        },
        {
          label: "Статус занятости",
          map: {
            key: "jobTitle",
            values: {
              EMPLOYED: "Работаю",
              RETIRED: "На пенсии",
              STUDENT: "Студент",
              UNEMPLOYED: "Не работаю",
            },
          },
          required: true,
        },
      ],
    },
    {
      type: StepType.REVIEW,
      component: "SharedReviewStep",
      title: "Проверка и отправка",
      description: "Проверьте все данные перед отправкой",
      neverComplete: true,
    },
  ],

  includedServices: [
    "Экспертная проверка формы",
    "Отслеживание статуса в реальном времени",
    "Уведомления по email и SMS",
    "Поддержка 24/7",
    "Гарантия безошибочной подачи",
    "Персональный агент поддержки",
  ],
};

// ============================================
// Service Registry
// ============================================
export const SERVICES: Record<ServiceType, ServiceConfig> = {
  [ServiceType.US_ESTA]: US_ESTA_CONFIG,
  [ServiceType.UK_ETA]: UK_ETA_CONFIG,
  [ServiceType.CANADA_ETA]: CANADA_ETA_CONFIG,
  [ServiceType.THAILAND_TDAC]: THAILAND_TDAC_CONFIG,
  [ServiceType.INDONESIA_EVOA]: INDONESIA_EVOA_CONFIG,
  [ServiceType.MALAYSIA_MDAC]: MALAYSIA_MDAC_CONFIG,
};

// ============================================
// Helper Functions
// ============================================

/**
 * Get service configuration by type
 */
export function getService(type: ServiceType): ServiceConfig {
  const service = SERVICES[type];
  if (!service || !service.slug) {
    throw new Error(`Service type ${type} not implemented yet`);
  }
  return service;
}

/**
 * Get service configuration by destination slug
 * Used by [destination] routes for backward compatibility
 */
export function getServiceByDestination(
  destination: string,
): ServiceConfig | undefined {
  const destinationMap: Record<string, ServiceType> = {
    "united-states": ServiceType.US_ESTA,
    "united-kingdom": ServiceType.UK_ETA,
    canada: ServiceType.CANADA_ETA,
    thailand: ServiceType.THAILAND_TDAC,
    indonesia: ServiceType.INDONESIA_EVOA,
    malaysia: ServiceType.MALAYSIA_MDAC,
  };

  const serviceType = destinationMap[destination.toLowerCase()];
  if (serviceType && SERVICES[serviceType]?.slug) {
    return SERVICES[serviceType];
  }

  return undefined;
}

/**
 * Get service configuration by service slug ONLY
 * Only accepts valid service slugs: esta, uk-eta, canada-eta
 * Returns undefined for invalid slugs (which triggers 404)
 * Used by [service] routes for strict SEO compliance
 */
export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  // Only accept direct service slug matches (esta, uk-eta, etc.)
  const service = Object.values(SERVICES).find((s) => s.slug === slug);

  // Return undefined if not found or not fully implemented
  if (!service || !service.slug) {
    return undefined;
  }

  return service;
}

/**
 * Check if a nationality is eligible for a service
 */
export function isEligible(
  serviceType: ServiceType,
  nationalityCode: string,
): boolean {
  const service = getService(serviceType);
  return service.eligibleNationalities.includes(nationalityCode);
}

/**
 * Get all services available for a nationality traveling to a destination
 */
export function getEligibleServices(
  passportCountry: string,
  destinationCountry: string,
): ServiceConfig[] {
  return Object.values(SERVICES).filter((service) => {
    // Skip unimplemented services
    if (!service.slug) return false;

    // Check destination matches
    if (service.destinationCode !== destinationCountry) return false;

    // Check nationality is eligible
    return service.eligibleNationalities.includes(passportCountry);
  });
}

/**
 * Get currency symbol for a currency code
 */
export function getCurrencySymbol(currencyCode: string): string {
  const symbols: Record<string, string> = {
    USD: "$",
    usd: "$",
    GBP: "£",
    gbp: "£",
    EUR: "€",
    eur: "€",
    CAD: "CA$",
    cad: "CA$",
    RUB: "₽",
    rub: "₽",
  };
  return symbols[currencyCode] || "₽";
}

/**
 * Get the default processing tier for a service
 */
export function getDefaultProcessingTier(
  serviceType: ServiceType,
): ProcessingTier {
  const service = getService(serviceType);
  const defaultTier = service.processingTiers.find((tier) => tier.isDefault);
  return defaultTier || service.processingTiers[0];
}

/**
 * Get a specific processing tier by type
 */
export function getProcessingTier(
  serviceType: ServiceType,
  tierType: ProcessingTierType,
): ProcessingTier | undefined {
  const service = getService(serviceType);
  return service.processingTiers.find((tier) => tier.type === tierType);
}

/**
 * Calculate total price for a service with processing tier
 */
export function calculatePrice(
  serviceType: ServiceType,
  applicants: number = 1,
  processingTierType?: ProcessingTierType,
): { subtotal: number; total: number; perApplicant: number; currency: string } {
  const service = getService(serviceType);

  // Get the processing tier (default if not specified)
  const tier = processingTierType
    ? getProcessingTier(serviceType, processingTierType) ||
      getDefaultProcessingTier(serviceType)
    : getDefaultProcessingTier(serviceType);

  const perApplicant = service.pricing.government + tier.serviceFee;
  const total = perApplicant * applicants;

  return {
    subtotal: total,
    total,
    perApplicant,
    currency: service.pricing.currency,
  };
}
