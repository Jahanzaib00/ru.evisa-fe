import { api } from "../client";
import type {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "../types";

export const authService = {
  async register(data: RegisterRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      "/auth/register",
      data
    );

    // Store tokens and user in localStorage
    if (typeof window !== "undefined" && response) {
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);
      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  },

  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      "/auth/login",
      data
    );

    // Store tokens and user in localStorage
    if (typeof window !== "undefined" && response) {
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);
      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  },

  async getProfile(): Promise<{ user: User }> {
    return api.get<{ user: User }>("/auth/me");
  },

  async refreshToken(
    refreshToken: string
  ): Promise<{ access_token: string; refresh_token: string }> {
    const response = await api.post<{ access_token: string; refresh_token: string }>(
      "/auth/refresh",
      { refresh_token: refreshToken }
    );

    // Update tokens in localStorage
    if (typeof window !== "undefined" && response) {
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("refresh_token", response.refresh_token);
    }

    return response;
  },

  isAuthenticated(): boolean {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("access_token");
  },

  getUser(): User | null {
    if (typeof window === "undefined") return null;
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },
};
