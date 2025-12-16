"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Guide } from "@/app/lib/data/guides/types";

interface SearchGuidesProps {
  guides: Guide[];
}

export default function SearchGuides({ guides }: SearchGuidesProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter guides based on search query
  const filteredGuides = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return guides
      .filter(
        (guide) =>
          guide.title.toLowerCase().includes(query) ||
          guide.description.toLowerCase().includes(query) ||
          guide.keywords.some((keyword) =>
            keyword.toLowerCase().includes(query)
          )
      )
      .slice(0, 5); // Show top 5 results
  }, [searchQuery, guides]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search guides... (e.g., 'ESTA requirements', 'apply', 'status')"
          className="w-full px-6 py-4 pr-12 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-sm"
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400"
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
      </div>

      {/* Search Results Dropdown */}
      {searchQuery.trim() && (
        <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-2xl max-h-96 overflow-y-auto">
          {filteredGuides.length > 0 ? (
            <div className="p-2">
              {filteredGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guide/${guide.slug}`}
                  className="block p-4 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setSearchQuery("")}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-2xl">📖</div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {guide.description}
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded uppercase font-semibold">
                          {guide.category}
                        </span>
                        {guide.estimatedReadTime && (
                          <span>{guide.estimatedReadTime} min read</span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <svg
                className="w-12 h-12 mx-auto mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm">
                No guides found for &quot;{searchQuery}&quot;
              </p>
              <p className="text-xs mt-1">Try different keywords</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
