/**
 * API Client for Backend Communication
 * Following Rails Controller → View pattern
 * Frontend NEVER touches database - only calls backend API
 */

const API_BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "APIError";
  }
}

interface RequestOptions extends RequestInit {
  params?: Record<string, any>;
}

// Backend TransformInterceptor wraps all responses in this format
interface BackendResponse<T> {
  data: T;
  statusCode: number;
  timestamp: string;
  path: string;
}

async function fetchAPI<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  let url = `${API_BASE_URL}${endpoint}`;

  // Handle query parameters
  if (options.params) {
    const searchParams = new URLSearchParams();
    Object.entries(options.params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
    const queryString = searchParams.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
  }

  // Get auth token from localStorage
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;

  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData.message || errorData.error || response.statusText;
    throw new APIError(response.status, message);
  }

  const result: BackendResponse<T> = await response.json();

  // Unwrap the TransformInterceptor response
  return result.data;
}

export const api = {
  // GET request with optional query params
  get: <T>(endpoint: string, options?: RequestOptions) =>
    fetchAPI<T>(endpoint, { ...options, method: "GET" }),

  // POST request
  post: <T>(endpoint: string, data: unknown, options?: RequestOptions) =>
    fetchAPI<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }),

  // PUT request
  put: <T>(endpoint: string, data: unknown, options?: RequestOptions) =>
    fetchAPI<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    }),

  // PATCH request
  patch: <T>(endpoint: string, data: unknown, options?: RequestOptions) =>
    fetchAPI<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  // DELETE request
  delete: <T>(endpoint: string, options?: RequestOptions) =>
    fetchAPI<T>(endpoint, { ...options, method: "DELETE" }),
};
