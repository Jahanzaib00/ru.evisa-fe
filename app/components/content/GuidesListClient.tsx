"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "../ui/Button";
import { Content } from "@/app/lib/api/services/content.service";

interface GuidesListClientProps {
  guides: Content[];
  categories: string[];
  currentPage: number;
  totalPages: number;
  selectedCategory?: string;
  searchQuery?: string;
  totalGuides: number;
}

/**
 * GuidesListClient
 *
 * Server-rendered guides listing with:
 * - URL-based category filtering
 * - URL-based pagination
 * - Search functionality
 * - Uses YOUR design system
 * - PROPER server-side data fetching
 */
export default function GuidesListClient({
  guides,
  categories,
  currentPage,
  totalPages,
  selectedCategory,
  searchQuery,
  totalGuides,
}: GuidesListClientProps) {
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
    router.push(`/guides${query ? `?${query}` : ""}`);
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
    router.push(`/guides${query ? `?${query}` : ""}`);
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
    router.push(`/guides${query ? `?${query}` : ""}`);
  };

  return (
    <div>
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
              placeholder="Search guides..."
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
            Showing {totalGuides} total guide{totalGuides !== 1 ? "s" : ""}
            {selectedCategory && ` in ${selectedCategory}`}
            {searchQuery && ` for "${searchQuery}"`}
          </div>
        </div>

        {/* Category Filters */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                !selectedCategory
                  ? "bg-primary text-white"
                  : "bg-white text-gray-dark border border-gray-light hover:border-primary"
              }`}
            >
              All Guides
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
        )}
      </div>

      {/* Guides Grid */}
      {guides.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg">
          <p className="text-gray text-lg">
            No guides found. Try adjusting your filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guide/${guide.slug}`}
              className="group bg-white border border-gray-light rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 mb-3 text-xs">
                  {guide.category && (
                    <span className="inline-block bg-gray-lightest text-gray-dark font-semibold px-2 py-1 rounded uppercase">
                      {guide.category}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-dark mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>

                {/* Excerpt */}
                {guide.excerpt && (
                  <p className="text-gray text-sm line-clamp-3 mb-4">
                    {guide.excerpt}
                  </p>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between text-sm">
                  <span className="inline-flex items-center text-primary-light font-semibold group-hover:text-primary">
                    Read guide
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
                    {guide.views.toLocaleString()}
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
          Get US ESTA in $45 with our fast and easy application process.
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
