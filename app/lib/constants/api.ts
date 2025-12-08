/**
 * API Configuration Constants
 */

// API endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Timeouts (in milliseconds)
export const API_TIMEOUT = 30000; // 30 seconds
export const LONG_REQUEST_TIMEOUT = 60000; // 60 seconds for file uploads, etc.

// Retry configuration
export const MAX_RETRIES = 3;
export const RETRY_DELAY = 1000; // 1 second

// Storage keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  USER: 'user',
  APPLICATION: 'esta-application-storage',
} as const;
