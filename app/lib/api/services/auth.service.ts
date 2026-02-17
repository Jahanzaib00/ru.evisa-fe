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

    // Store token and user in localStorage
    if (typeof window !== "undefined" && response) {
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  },

  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      "/auth/login",
      data
    );

    // Store token and user in localStorage
    if (typeof window !== "undefined" && response) {
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  },

  async getProfile(): Promise<{ user: User }> {
    return api.get<{ user: User }>("/auth/me");
  },

  async forgotPassword(email: string): Promise<{ message: string }> {
    return api.post<{ message: string }>("/auth/forgot-password", { email });
  },

  async verifyOtp(email: string, otp: string): Promise<{ valid: boolean }> {
    return api.post<{ valid: boolean }>("/auth/verify-otp", { email, otp });
  },

  async resetPassword(
    email: string,
    otp: string,
    newPassword: string,
  ): Promise<{ message: string }> {
    return api.post<{ message: string }>("/auth/reset-password", {
      email,
      otp,
      newPassword,
    });
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
