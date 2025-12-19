import Link from "next/link";
import { Content } from "@/app/lib/api/services/content.service";

interface ContentGridProps {
  items: Content[];
  title?: string;
  columns?: 2 | 3 | 4;
  showExcerpt?: boolean;
  showCategory?: boolean;
  showDate?: boolean;
  showViews?: boolean;
}

/**
 * ContentGrid
 *
 * Reusable grid component for displaying content items
 * Used for related content, blog listings, guide listings
 */
export default function ContentGrid({
  items,
  title = "Related Content",
  columns = 3,
  showExcerpt = true,
  showCategory = true,
  showDate = true,
  showViews = false,
}: ContentGridProps) {
  if (items.length === 0) return null;

  const gridClass =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 3
      ? "md:grid-cols-2 lg:grid-cols-3"
      : "md:grid-cols-2 lg:grid-cols-4";

  const getContentUrl = (item: Content) => {
    switch (item.type) {
      case "BLOG":
        return `/blog/${item.destination}/${item.slug}`;
      default:
        return `/${item.slug}`;
    }
  };

  return (
    <div className="my-12">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          {title}
        </h2>
      )}
      <div className={`grid gap-6 ${gridClass}`}>
        {items.map((item) => (
          <Link
            key={item.id}
            href={getContentUrl(item)}
            className="group bg-white border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-6">
              {/* Meta Information */}
              <div className="flex items-center gap-3 mb-3 text-xs">
                {showCategory && item.category && (
                  <span className="inline-block bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded uppercase">
                    {item.category}
                  </span>
                )}
                {showDate && item.createdAt && (
                  <span className="text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                )}
                {showViews && (
                  <span className="text-gray-500 flex items-center gap-1">
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
                    {item.views.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>

              {/* Excerpt */}
              {showExcerpt && item.excerpt && (
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
              )}

              {/* Read More */}
              <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700">
                Read more
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
          </Link>
        ))}
      </div>
    </div>
  );
}
