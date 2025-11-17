import { apiClient } from '../client';
import type { User, Application, ApiResponse, PaginatedResponse } from '../types';

interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export const usersService = {
  async getProfile(): Promise<ApiResponse<User>> {
    return apiClient.get<ApiResponse<User>>('/users/me');
  },

  async updateProfile(data: UpdateUserRequest): Promise<ApiResponse<User>> {
    return apiClient.put<ApiResponse<User>>('/users/me', data);
  },

  async getMyApplications(): Promise<ApiResponse<Application[]>> {
    return apiClient.get<ApiResponse<Application[]>>('/users/me/applications');
  },

  async getAllUsers(params?: {
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<User>>> {
    return apiClient.get<ApiResponse<PaginatedResponse<User>>>('/users', { params });
  },

  async getUserById(id: string): Promise<ApiResponse<User>> {
    return apiClient.get<ApiResponse<User>>(`/users/${id}`);
  },

  async updateUser(id: string, data: UpdateUserRequest): Promise<ApiResponse<User>> {
    return apiClient.put<ApiResponse<User>>(`/users/${id}`, data);
  },

  async deactivateUser(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.patch<ApiResponse<{ message: string }>>(`/users/${id}/deactivate`);
  },

  async activateUser(id: string): Promise<ApiResponse<{ message: string }>> {
    return apiClient.patch<ApiResponse<{ message: string }>>(`/users/${id}/activate`);
  },

  async getUserApplications(id: string): Promise<ApiResponse<Application[]>> {
    return apiClient.get<ApiResponse<Application[]>>(`/users/${id}/applications`);
  },
};
