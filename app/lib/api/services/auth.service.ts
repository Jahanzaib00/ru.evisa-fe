import { apiClient } from '../client';
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  ApiResponse,
  User,
} from '../types';

export const authService = {
  async register(data: RegisterRequest): Promise<ApiResponse<AuthResponse>> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/register', data);

    // Store tokens and user in localStorage
    if (typeof window !== 'undefined' && response.data) {
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response;
  },

  async login(data: LoginRequest): Promise<ApiResponse<AuthResponse>> {
    const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/login', data);

    // Store tokens and user in localStorage
    if (typeof window !== 'undefined' && response.data) {
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response;
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post('/auth/logout');
    } finally {
      // Always clear local storage even if API call fails
      if (typeof window !== 'undefined') {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
      }
    }
  },

  async getProfile(): Promise<ApiResponse<{ user: User }>> {
    return apiClient.get<ApiResponse<{ user: User }>>('/auth/me');
  },

  async refreshToken(refreshToken: string): Promise<ApiResponse<{ access_token: string; refresh_token: string }>> {
    const response = await apiClient.post<ApiResponse<{ access_token: string; refresh_token: string }>>(
      '/auth/refresh',
      { refresh_token: refreshToken }
    );

    // Update tokens in localStorage
    if (typeof window !== 'undefined' && response.data) {
      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
    }

    return response;
  },

  isAuthenticated(): boolean {
    if (typeof window === 'undefined') return false;
    return !!localStorage.getItem('access_token');
  },

  getUser(): User | null {
    if (typeof window === 'undefined') return null;
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },
};
