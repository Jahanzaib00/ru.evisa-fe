/**
 * ESTA Guides Data
 * All guide topics for SEO-optimized content pages
 * Content can be enhanced with OpenAI generation
 */

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: 'main' | 'process' | 'status' | 'renewal' | 'travel' | 'questions' | 'requirements' | 'tips' | 'comparison';
  priority: number;
  keywords: string[];
  estimatedReadTime?: number; // in minutes
  lastUpdated?: string;
}

export const ESTA_GUIDES: Guide[] = [
  // Main guides
  {
    slug: 'what-is-esta',
    title: 'What is ESTA?',
    description: 'Complete guide to ESTA (Electronic System for Travel Authorization) - what it is, who needs it, and how it works for U.S. travel.',
    category: 'main',
    priority: 0.9,
    keywords: ['what is ESTA', 'ESTA definition', 'electronic travel authorization', 'ESTA explained'],
    estimatedReadTime: 5,
  },
  {
    slug: 'esta-requirements',
    title: 'ESTA Requirements',
    description: 'Complete list of requirements to qualify for ESTA. Learn about passport requirements, eligibility criteria, and what you need to apply.',
    category: 'main',
    priority: 0.9,
    keywords: ['ESTA requirements', 'ESTA eligibility', 'who can apply ESTA', 'ESTA qualifications'],
    estimatedReadTime: 7,
  },
  {
    slug: 'how-to-apply-esta',
    title: 'How to Apply for ESTA',
    description: 'Step-by-step guide to completing your ESTA application online. Complete instructions from start to finish.',
    category: 'main',
    priority: 0.9,
    keywords: ['how to apply ESTA', 'ESTA application guide', 'apply for ESTA online', 'ESTA application steps'],
    estimatedReadTime: 6,
  },
  {
    slug: 'esta-validity-period',
    title: 'ESTA Validity Period',
    description: 'How long is ESTA valid? Learn about ESTA validity, expiration dates, and when you need to renew.',
    category: 'main',
    priority: 0.8,
    keywords: ['ESTA validity', 'how long ESTA valid', 'ESTA expiration', 'ESTA duration'],
    estimatedReadTime: 4,
  },
  {
    slug: 'esta-vs-visa',
    title: 'ESTA vs. U.S. Visa',
    description: 'What\'s the difference between ESTA and a U.S. visa? Compare requirements, costs, and benefits.',
    category: 'main',
    priority: 0.8,
    keywords: ['ESTA vs visa', 'difference ESTA visa', 'ESTA or visa', 'do I need ESTA or visa'],
    estimatedReadTime: 5,
  },

  // Process guides
  {
    slug: 'esta-application-process',
    title: 'ESTA Application Process',
    description: 'Detailed walkthrough of the ESTA application process from start to finish.',
    category: 'process',
    priority: 0.8,
    keywords: ['ESTA process', 'ESTA application process', 'how ESTA works'],
    estimatedReadTime: 8,
  },
  {
    slug: 'esta-application-fees',
    title: 'ESTA Application Fees',
    description: 'Complete breakdown of ESTA costs, fees, and payment methods. Understand what you\'re paying for.',
    category: 'process',
    priority: 0.8,
    keywords: ['ESTA fees', 'ESTA cost', 'how much ESTA', 'ESTA price'],
    estimatedReadTime: 4,
  },
  {
    slug: 'filling-esta-form',
    title: 'Filling Out the ESTA Form',
    description: 'Field-by-field guide to completing the ESTA application form correctly.',
    category: 'process',
    priority: 0.7,
    keywords: ['ESTA form', 'fill ESTA application', 'ESTA form guide'],
    estimatedReadTime: 10,
  },
  {
    slug: 'esta-payment-methods',
    title: 'ESTA Payment Methods',
    description: 'Accepted payment methods for ESTA applications. Credit cards, debit cards, and other options.',
    category: 'process',
    priority: 0.7,
    keywords: ['ESTA payment', 'pay for ESTA', 'ESTA payment methods'],
    estimatedReadTime: 3,
  },
  {
    slug: 'esta-confirmation-email',
    title: 'ESTA Confirmation Email',
    description: 'What to expect after submitting your ESTA application. Understanding your confirmation email.',
    category: 'process',
    priority: 0.7,
    keywords: ['ESTA confirmation', 'ESTA email', 'ESTA receipt'],
    estimatedReadTime: 4,
  },

  // Status & tracking
  {
    slug: 'check-esta-status',
    title: 'How to Check ESTA Status',
    description: 'Check your ESTA application status online. Track your application and understand the different status types.',
    category: 'status',
    priority: 0.8,
    keywords: ['check ESTA status', 'ESTA status check', 'track ESTA application'],
    estimatedReadTime: 5,
  },
  {
    slug: 'esta-pending-status',
    title: 'ESTA Pending Status',
    description: 'What does "Authorization Pending" mean? How long to wait and what to do next.',
    category: 'status',
    priority: 0.7,
    keywords: ['ESTA pending', 'authorization pending', 'ESTA in process'],
    estimatedReadTime: 4,
  },
  {
    slug: 'esta-approved-what-next',
    title: 'ESTA Approved - What Next?',
    description: 'Your ESTA is approved - now what? Next steps before traveling to the United States.',
    category: 'status',
    priority: 0.7,
    keywords: ['ESTA approved', 'approved ESTA next steps', 'after ESTA approval'],
    estimatedReadTime: 5,
  },
  {
    slug: 'esta-denied-what-to-do',
    title: 'ESTA Denied - What to Do',
    description: 'Why was your ESTA denied? Common reasons for denial and what to do if your ESTA is rejected.',
    category: 'status',
    priority: 0.8,
    keywords: ['ESTA denied', 'ESTA rejected', 'travel not authorized', 'ESTA denial reasons'],
    estimatedReadTime: 7,
  },
  {
    slug: 'esta-authorization-expired',
    title: 'ESTA Authorization Expired',
    description: 'What happens when your ESTA expires? How to renew and continue traveling to the U.S.',
    category: 'status',
    priority: 0.7,
    keywords: ['ESTA expired', 'expired ESTA', 'ESTA expiration'],
    estimatedReadTime: 5,
  },

  // Renewal & updates
  {
    slug: 'renew-esta',
    title: 'How to Renew ESTA',
    description: 'Step-by-step guide to renewing your expired ESTA. When to renew and how the process works.',
    category: 'renewal',
    priority: 0.8,
    keywords: ['renew ESTA', 'ESTA renewal', 'reapply ESTA'],
    estimatedReadTime: 6,
  },
  {
    slug: 'update-esta-information',
    title: 'Update ESTA Information',
    description: 'How to update or change information on your ESTA application after submission.',
    category: 'renewal',
    priority: 0.7,
    keywords: ['update ESTA', 'change ESTA information', 'modify ESTA'],
    estimatedReadTime: 5,
  },
  {
    slug: 'new-passport-need-new-esta',
    title: 'New Passport - Do I Need a New ESTA?',
    description: 'Got a new passport? Learn whether you need to apply for a new ESTA or if your current one is still valid.',
    category: 'renewal',
    priority: 0.7,
    keywords: ['new passport ESTA', 'ESTA with new passport', 'passport renewal ESTA'],
    estimatedReadTime: 4,
  },

  // Travel-specific
  {
    slug: 'esta-for-minors',
    title: 'ESTA for Minors and Children',
    description: 'Do children need ESTA? How to apply for ESTA for minors, infants, and children traveling to the U.S.',
    category: 'travel',
    priority: 0.7,
    keywords: ['ESTA for children', 'ESTA for minors', 'child ESTA', 'baby ESTA'],
    estimatedReadTime: 6,
  },
  {
    slug: 'esta-for-business-travel',
    title: 'ESTA for Business Travel',
    description: 'Using ESTA for business trips to the United States. What business activities are allowed.',
    category: 'travel',
    priority: 0.7,
    keywords: ['ESTA business travel', 'business ESTA', 'ESTA for work'],
    estimatedReadTime: 6,
  },
  {
    slug: 'esta-for-tourism',
    title: 'ESTA for Tourism',
    description: 'Using ESTA for tourist visits to the United States. Vacation travel requirements and tips.',
    category: 'travel',
    priority: 0.7,
    keywords: ['ESTA tourism', 'tourist ESTA', 'vacation ESTA'],
    estimatedReadTime: 5,
  },
  {
    slug: 'esta-for-transit',
    title: 'ESTA for Transit',
    description: 'Do you need ESTA if you\'re just transiting through the U.S.? Transit requirements explained.',
    category: 'travel',
    priority: 0.7,
    keywords: ['ESTA transit', 'transit through USA', 'connecting flight USA'],
    estimatedReadTime: 5,
  },
  {
    slug: 'multiple-trips-with-esta',
    title: 'Multiple Trips with One ESTA',
    description: 'Can you use ESTA for multiple trips? How many times can you visit the U.S. with one ESTA approval.',
    category: 'travel',
    priority: 0.7,
    keywords: ['multiple trips ESTA', 'ESTA multiple entries', 'reuse ESTA'],
    estimatedReadTime: 4,
  },

  // Common questions
  {
    slug: 'esta-processing-time',
    title: 'ESTA Processing Time',
    description: 'How long does ESTA take to process? Average approval times and expedited options.',
    category: 'questions',
    priority: 0.8,
    keywords: ['ESTA processing time', 'how long ESTA', 'ESTA approval time'],
    estimatedReadTime: 4,
  },
  {
    slug: 'esta-urgent-application',
    title: 'Urgent ESTA Application',
    description: 'Need ESTA urgently? Emergency and last-minute ESTA application options.',
    category: 'questions',
    priority: 0.8,
    keywords: ['urgent ESTA', 'emergency ESTA', 'last minute ESTA', 'expedited ESTA'],
    estimatedReadTime: 5,
  },
  {
    slug: 'esta-group-application',
    title: 'ESTA Group Application',
    description: 'Applying for ESTA for a group or family. How to manage multiple applications efficiently.',
    category: 'questions',
    priority: 0.7,
    keywords: ['group ESTA', 'family ESTA', 'multiple ESTA applications'],
    estimatedReadTime: 6,
  },
  {
    slug: 'esta-third-party-application',
    title: 'ESTA Third-Party Application',
    description: 'Can someone else apply for ESTA on your behalf? Third-party and assisted applications explained.',
    category: 'questions',
    priority: 0.7,
    keywords: ['third party ESTA', 'apply ESTA for someone', 'ESTA assistance'],
    estimatedReadTime: 5,
  },
  {
    slug: 'esta-errors-how-to-fix',
    title: 'ESTA Application Errors - How to Fix',
    description: 'Common ESTA application errors and how to fix them. Troubleshooting guide.',
    category: 'questions',
    priority: 0.7,
    keywords: ['ESTA errors', 'fix ESTA mistakes', 'ESTA troubleshooting'],
    estimatedReadTime: 7,
  },

  // Requirements by category
  {
    slug: 'passport-requirements-esta',
    title: 'Passport Requirements for ESTA',
    description: 'Detailed passport requirements for ESTA applications. E-passport specifications and validity rules.',
    category: 'requirements',
    priority: 0.7,
    keywords: ['ESTA passport requirements', 'e-passport ESTA', 'passport for ESTA'],
    estimatedReadTime: 6,
  },
  {
    slug: 'esta-eligibility-criteria',
    title: 'ESTA Eligibility Criteria',
    description: 'Complete eligibility requirements for ESTA. Who qualifies and who doesn\'t.',
    category: 'requirements',
    priority: 0.8,
    keywords: ['ESTA eligibility', 'who can apply ESTA', 'ESTA qualifications'],
    estimatedReadTime: 8,
  },
  {
    slug: 'criminal-record-esta',
    title: 'ESTA with Criminal Record',
    description: 'Can you get ESTA with a criminal record? How arrests and convictions affect ESTA eligibility.',
    category: 'requirements',
    priority: 0.7,
    keywords: ['criminal record ESTA', 'arrest ESTA', 'conviction ESTA'],
    estimatedReadTime: 7,
  },
  {
    slug: 'previous-visa-denial-esta',
    title: 'ESTA After Visa Denial',
    description: 'Previously denied a U.S. visa? How visa denials affect ESTA eligibility.',
    category: 'requirements',
    priority: 0.7,
    keywords: ['visa denial ESTA', 'denied visa ESTA', 'visa refusal ESTA'],
    estimatedReadTime: 6,
  },
  {
    slug: 'dual-citizenship-esta',
    title: 'ESTA with Dual Citizenship',
    description: 'Applying for ESTA with dual citizenship. Which passport to use and special considerations.',
    category: 'requirements',
    priority: 0.7,
    keywords: ['dual citizenship ESTA', 'two passports ESTA', 'multiple citizenship ESTA'],
    estimatedReadTime: 6,
  },

  // Tips & best practices
  {
    slug: 'esta-application-tips',
    title: 'ESTA Application Tips',
    description: 'Expert tips for a successful ESTA application. Best practices to ensure approval.',
    category: 'tips',
    priority: 0.7,
    keywords: ['ESTA tips', 'ESTA advice', 'ESTA best practices'],
    estimatedReadTime: 8,
  },
  {
    slug: 'common-esta-mistakes',
    title: 'Common ESTA Mistakes to Avoid',
    description: 'The most common mistakes people make on ESTA applications and how to avoid them.',
    category: 'tips',
    priority: 0.7,
    keywords: ['ESTA mistakes', 'ESTA errors to avoid', 'ESTA application errors'],
    estimatedReadTime: 7,
  },
  {
    slug: 'esta-approval-chances',
    title: 'ESTA Approval Chances',
    description: 'What are your chances of ESTA approval? Factors that affect approval rates.',
    category: 'tips',
    priority: 0.7,
    keywords: ['ESTA approval rate', 'ESTA approval chances', 'ESTA success rate'],
    estimatedReadTime: 6,
  },
  {
    slug: 'prepare-for-esta-interview',
    title: 'Prepare for U.S. Entry with ESTA',
    description: 'What to expect at U.S. customs and border protection with ESTA. Interview preparation.',
    category: 'tips',
    priority: 0.6,
    keywords: ['ESTA customs', 'ESTA border crossing', 'ESTA entry USA'],
    estimatedReadTime: 7,
  },

  // Comparison pages
  {
    slug: 'esta-vs-b2-tourist-visa',
    title: 'ESTA vs. B-2 Tourist Visa',
    description: 'Detailed comparison between ESTA and B-2 tourist visa. Which one do you need?',
    category: 'comparison',
    priority: 0.8,
    keywords: ['ESTA vs B2 visa', 'tourist visa vs ESTA', 'B2 or ESTA'],
    estimatedReadTime: 7,
  },
  {
    slug: 'esta-vs-visa-waiver',
    title: 'ESTA vs. Visa Waiver Program',
    description: 'Understanding the relationship between ESTA and the Visa Waiver Program.',
    category: 'comparison',
    priority: 0.7,
    keywords: ['ESTA vs VWP', 'visa waiver vs ESTA', 'VWP explained'],
    estimatedReadTime: 5,
  },
  {
    slug: 'official-esta-vs-third-party',
    title: 'Official ESTA vs. Third-Party Services',
    description: 'Should you use the official ESTA website or a third-party service? Pros and cons explained.',
    category: 'comparison',
    priority: 0.8,
    keywords: ['official ESTA', 'third party ESTA', 'ESTA service comparison'],
    estimatedReadTime: 6,
  },

  // Country-specific common queries (these link to country pages but also exist as guides)
  {
    slug: 'esta-from-uk',
    title: 'ESTA from United Kingdom',
    description: 'Comprehensive guide for UK citizens applying for ESTA. Requirements and tips for British travelers.',
    category: 'main',
    priority: 0.7,
    keywords: ['ESTA UK', 'ESTA from UK', 'British ESTA'],
    estimatedReadTime: 6,
  },
  {
    slug: 'esta-from-australia',
    title: 'ESTA from Australia',
    description: 'Complete guide for Australian citizens applying for ESTA to visit the United States.',
    category: 'main',
    priority: 0.7,
    keywords: ['ESTA Australia', 'ESTA from Australia', 'Australian ESTA'],
    estimatedReadTime: 6,
  },
  {
    slug: 'esta-from-germany',
    title: 'ESTA from Germany',
    description: 'Guide for German citizens applying for ESTA. Requirements and application tips.',
    category: 'main',
    priority: 0.7,
    keywords: ['ESTA Germany', 'ESTA from Germany', 'German ESTA'],
    estimatedReadTime: 6,
  },
  {
    slug: 'esta-from-france',
    title: 'ESTA from France',
    description: 'Complete ESTA guide for French citizens traveling to the United States.',
    category: 'main',
    priority: 0.7,
    keywords: ['ESTA France', 'ESTA from France', 'French ESTA'],
    estimatedReadTime: 6,
  },
  {
    slug: 'esta-from-japan',
    title: 'ESTA from Japan',
    description: 'ESTA application guide for Japanese citizens. Requirements and tips for travelers from Japan.',
    category: 'main',
    priority: 0.7,
    keywords: ['ESTA Japan', 'ESTA from Japan', 'Japanese ESTA'],
    estimatedReadTime: 6,
  },
];

/**
 * Get guide by slug
 */
export function getGuideBySlug(slug: string): Guide | undefined {
  return ESTA_GUIDES.find(guide => guide.slug === slug);
}

/**
 * Get all guide slugs for static generation
 */
export function getAllGuideSlugs(): string[] {
  return ESTA_GUIDES.map(guide => guide.slug);
}

/**
 * Get guides by category
 */
export function getGuidesByCategory(category: Guide['category']): Guide[] {
  return ESTA_GUIDES.filter(guide => guide.category === category);
}

/**
 * Search guides
 */
export function searchGuides(query: string): Guide[] {
  const lowerQuery = query.toLowerCase();
  return ESTA_GUIDES.filter(
    guide =>
      guide.title.toLowerCase().includes(lowerQuery) ||
      guide.description.toLowerCase().includes(lowerQuery) ||
      guide.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get related guides based on category and keywords
 */
export function getRelatedGuides(slug: string, limit: number = 5): Guide[] {
  const guide = getGuideBySlug(slug);
  if (!guide) return [];

  // Find guides in same category or with overlapping keywords
  const related = ESTA_GUIDES.filter(g => {
    if (g.slug === slug) return false;
    if (g.category === guide.category) return true;
    return g.keywords.some(k => guide.keywords.includes(k));
  });

  return related.slice(0, limit);
}
