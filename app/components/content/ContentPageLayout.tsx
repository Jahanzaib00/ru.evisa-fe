"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Header from "../layout/Header";
import Footer from "../home/Footer";

interface ContentPageLayoutProps {
  children: ReactNode;
  breadcrumbs?: Array<{ name: string; url: string }>;
  showStickyHeader?: boolean;
}

/**
 * ContentPageLayout
 *
 * Unified layout for all content pages (blog, guides, country pages)
 * - Consistent branding with main site
 * - SEO-optimized structure
 * - Conversion-focused design
 */
export default function ContentPageLayout({
  children,
  breadcrumbs,
  showStickyHeader = true,
}: ContentPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <Header />

      {/* Breadcrumbs */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 max-w-5xl py-3">
            <nav className="flex flex-wrap text-sm" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, index) => (
                <div key={crumb.url} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-gray-400">/</span>
                  )}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-gray-600">{crumb.name}</span>
                  ) : (
                    <Link
                      href={crumb.url}
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
