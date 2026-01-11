export interface MarkerConfig {
  pattern: RegExp;
  type: 'list' | 'blockquote' | 'inline';
  component: string;
}

/**
 * Marker Registry - Single source of truth for all content markers
 */
export const MARKER_REGISTRY: Record<string, MarkerConfig> = {
  // List item markers
  REQUIRED: {
    pattern: /^\[REQUIRED\]\s*/i,
    type: 'list',
    component: 'RequiredMarker',
  },
  DISQUALIFIER: {
    pattern: /^\[DISQUALIFIER\]\s*/i,
    type: 'list',
    component: 'DisqualifierMarker',
  },
  STEP: {
    pattern: /^\[STEP\]\s*/i,
    type: 'list',
    component: 'StepMarker',
  },

  // Blockquote markers
  WARNING: {
    pattern: /\[WARNING\]/i,
    type: 'blockquote',
    component: 'WarningCallout',
  },
  TIP: {
    pattern: /\[TIP\]/i,
    type: 'blockquote',
    component: 'TipCallout',
  },
  TAKEAWAY: {
    pattern: /\[TAKEAWAY\]/i,
    type: 'blockquote',
    component: 'TakeawayCallout',
  },
  FAILURE: {
    pattern: /\[FAILURE\]/i,
    type: 'blockquote',
    component: 'FailureCallout',
  },

  // Inline markers
  YES: {
    pattern: /\[YES\]|^YES$/i,
    type: 'inline',
    component: 'YesBadge',
  },
  NO: {
    pattern: /\[NO\]|^NO$/i,
    type: 'inline',
    component: 'NoBadge',
  },
};

/**
 * Detect which marker (if any) is present in text
 */
export function detectMarker(text: string, type: 'list' | 'blockquote' | 'inline'): string | null {
  for (const [markerName, config] of Object.entries(MARKER_REGISTRY)) {
    if (config.type === type && config.pattern.test(text)) {
      return markerName;
    }
  }
  return null;
}

/**
 * Remove marker from text
 */
export function stripMarker(text: string, markerName: string): string {
  const config = MARKER_REGISTRY[markerName];
  if (!config) return text;
  return text.replace(config.pattern, '').trim();
}
