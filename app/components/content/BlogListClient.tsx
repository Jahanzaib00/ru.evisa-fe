"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";
import { Content } from "@/app/lib/api/services/content.service";

interface BlogListClientProps {
  posts: Content[];
  categories: string[];
  currentPage: number;
  totalPages: number;
  selectedCategory?: string;
  searchQuery?: string;
  totalPosts: number;
}

/**
 * BlogListClient
 *
 * Server-rendered blog listing with:
 * - URL-based category filtering
 * - URL-based pagination
 * - Featured post
 * - Uses YOUR design system
 * - PROPER server-side data fetching
 */
export default function BlogListClient({
  posts,
  categories,
  currentPage,
  totalPages,
  selectedCategory,
  searchQuery,
  totalPosts,
}: BlogListClientProps) {
  const router = useRouter();

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams();
    if (category && category !== "all") {
      params.set("category", category);
    }
    if (searchQuery) {
      params.set("search", searchQuery);
    }
    const query = params.toString();
    router.push(`/blog${query ? `?${query}` : ""}`);
  };

  const handleSearch = (search: string) => {
    const params = new URLSearchParams();
    if (selectedCategory) {
      params.set("category", selectedCategory);
    }
    if (search) {
      params.set("search", search);
    }
    const query = params.toString();
    router.push(`/blog${query ? `?${query}` : ""}`);
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams();
    if (selectedCategory) {
      params.set("category", selectedCategory);
    }
    if (searchQuery) {
      params.set("search", searchQuery);
    }
    if (page > 1) {
      params.set("page", page.toString());
    }
    const query = params.toString();
    router.push(`/blog${query ? `?${query}` : ""}`);
  };

  // Featured post (first post on first page only)
  const showFeatured = currentPage === 1 && !selectedCategory;
  const featuredPost = showFeatured ? posts[0] : null;
  const displayPosts = showFeatured ? posts.slice(1) : posts;

  return (
    <div>
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-dark">
              Latest Article
            </h2>
            <span className="inline-flex items-center gap-2 text-sm text-primary font-semibold">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              New
            </span>
          </div>
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-white border-2 border-primary rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {featuredPost.category && (
                    <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                      {featuredPost.category}
                    </span>
                  )}
                  <span className="text-sm text-gray flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {featuredPost.publishedAt
                      ? new Date(featuredPost.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )
                      : "Draft"}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-dark mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                {featuredPost.excerpt && (
                  <p className="text-base md:text-lg text-gray leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                )}
                <span className="inline-flex items-center text-primary-light font-semibold text-base md:text-lg hover:text-primary">
                  Read full article
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex items-center justify-center bg-gray-lightest rounded-lg p-6 md:p-8">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <p className="text-gray font-semibold text-sm md:text-base">
                    {featuredPost.views.toLocaleString()} views
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Filters Section */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const search = formData.get("search") as string;
              handleSearch(search);
            }}
            className="relative"
          >
            <input
              type="text"
              name="search"
              defaultValue={searchQuery || ""}
              placeholder="Search articles..."
              className="w-full px-4 py-3 pr-12 border border-gray-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-base"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-primary-light transition-colors"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {searchQuery && (
              <button
                type="button"
                onClick={() => handleSearch("")}
                className="absolute right-12 top-1/2 -translate-y-1/2 p-1 text-gray hover:text-gray-dark transition-colors"
                aria-label="Clear search"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </form>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray">
            Showing {totalPosts} total article{totalPosts !== 1 ? "s" : ""}
            {selectedCategory && ` in ${selectedCategory}`}
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange("all")}
            className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
              !selectedCategory
                ? "bg-primary text-white"
                : "bg-white text-gray-dark border border-gray-light hover:border-primary"
            }`}
          >
            All Articles
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white text-gray-dark border border-gray-light hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {displayPosts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray text-lg">
            No articles found. Try adjusting your filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {displayPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-light rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                  {post.category && (
                    <span className="inline-block bg-gray-lightest text-gray-dark font-semibold px-2 py-1 rounded uppercase">
                      {post.category}
                    </span>
                  )}
                  <span className="text-gray">
                    {post.publishedAt
                      ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })
                      : "Draft"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                {post.excerpt && (
                  <p className="text-gray text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center text-primary-light font-semibold group-hover:text-primary">
                    Read more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <span className="text-gray flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    {post.views.toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-light">
          <p className="text-sm text-gray">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Previous
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next →
            </Button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="mt-16 bg-primary text-white rounded-lg p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Ready to Apply for Your ESTA?
        </h3>
        <p className="text-lg md:text-xl text-blue-100 mb-6">
          Join thousands of travelers who trust us. 99% approval rate, 24/7
          support.
        </p>
        <Link href="/apply">
          <Button
            variant="primary"
            size="lg"
            className="bg-white hover:text-primary hover:bg-gray-lightest"
          >
            Start Your Application
          </Button>
        </Link>
      </div>
    </div>
  );
}
