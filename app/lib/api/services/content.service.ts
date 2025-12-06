import { api } from "../client";

export interface Content {
  id: string;
  type: "BLOG";
  category: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  status: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface ContentListResponse {
  data: Content[];
  total: number;
  limit: number;
  offset: number;
}

export interface ContentStats {
  totalContent: number;
  publishedContent: number;
  draftContent: number;
  totalViews: number;
  contentByType: { type: string; _count: number }[];
}

export const contentService = {
  // Get all published content (client unwraps TransformInterceptor automatically)
  async getPublicContent(params?: {
    type?: string;
    category?: string;
    search?: string;
    limit?: number;
    offset?: number;
  }): Promise<ContentListResponse> {
    return api.get<ContentListResponse>("/content/public", { params });
  },

  // Get content by slug (client unwraps TransformInterceptor automatically)
  async getBySlug(slug: string): Promise<Content> {
    return api.get<Content>(`/content/public/slug/${slug}`);
  },

  // Get content statistics (client unwraps TransformInterceptor automatically)
  async getStats(): Promise<ContentStats> {
    return api.get<ContentStats>("/content/public/stats");
  },

  // Get blog posts
  async getBlogPosts(params?: {
    category?: string;
    search?: string;
    limit?: number;
    offset?: number;
  }): Promise<ContentListResponse> {
    return this.getPublicContent({ ...params, type: "BLOG" });
  },

  // Get related content
  async getRelatedContent(slug: string, limit: number = 3): Promise<Content[]> {
    const current = await this.getBySlug(slug);
    const { data } = await this.getPublicContent({
      type: current.type,
      category: current.category,
      limit: limit + 1,
    });

    // Filter out current content and limit results
    return data.filter((item) => item.slug !== slug).slice(0, limit);
  },

  // Get categories (backend handles filtering)
  async getCategories(type?: string): Promise<string[]> {
    return api.get<string[]>("/content/public/categories", {
      params: type ? { type } : undefined,
    });
  },
};
