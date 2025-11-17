/**
 * Analytics tracking utilities for conversion optimization
 */

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Track custom events (works with Google Analytics 4)
 */
export const trackEvent = ({ action, category, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Track CTA clicks across the landing page
 */
export const trackCTAClick = (location: string) => {
  trackEvent({
    action: 'cta_click',
    category: 'engagement',
    label: location,
  });
};

/**
 * Track section views (scroll tracking)
 */
export const trackSectionView = (sectionName: string) => {
  trackEvent({
    action: 'section_view',
    category: 'engagement',
    label: sectionName,
  });
};

/**
 * Track FAQ interactions
 */
export const trackFAQInteraction = (question: string) => {
  trackEvent({
    action: 'faq_open',
    category: 'engagement',
    label: question,
  });
};

/**
 * Track external link clicks
 */
export const trackExternalClick = (url: string) => {
  trackEvent({
    action: 'external_click',
    category: 'navigation',
    label: url,
  });
};

/**
 * Track form start
 */
export const trackFormStart = () => {
  trackEvent({
    action: 'form_start',
    category: 'conversion',
    label: 'esta_application',
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number) => {
  trackEvent({
    action: 'scroll_depth',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};
