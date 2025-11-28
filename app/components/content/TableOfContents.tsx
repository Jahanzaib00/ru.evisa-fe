"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef?: React.RefObject<HTMLDivElement>;
}

/**
 * TableOfContents
 *
 * Automatically generates TOC from h2/h3 headings in content
 * - Improves user experience and engagement
 * - Reduces bounce rate
 * - Helps with SEO (longer time on page)
 */
export default function TableOfContents({ contentRef }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Get all h2 and h3 elements from content
    const content = contentRef?.current || document.querySelector("article");
    if (!content) return;

    const headingElements = content.querySelectorAll("h2, h3");
    const items: TOCItem[] = [];

    headingElements.forEach((heading) => {
      const level = parseInt(heading.tagName.substring(1));
      const text = heading.textContent || "";
      let id = heading.id;

      // Generate ID if not exists
      if (!id) {
        id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        heading.id = id;
      }

      items.push({ id, text, level });
    });

    setHeadings(items);

    // Intersection Observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -66% 0px",
      }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => {
      headingElements.forEach((heading) => observer.unobserve(heading));
    };
  }, [contentRef]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sticky top-24">
      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        Table of Contents
      </h3>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.id}
              className={heading.level === 3 ? "ml-4" : ""}
            >
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`text-left w-full text-sm hover:text-blue-600 transition-colors ${
                  activeId === heading.id
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
