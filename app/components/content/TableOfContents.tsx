"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Book } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  sections?: Section[]; // Optional - if not provided, auto-generates from DOM
  includeFAQs?: boolean;
  contentRef?: React.RefObject<HTMLDivElement>; // For auto-generation mode
}

/**
 * Interactive Table of Contents with Scroll Spy
 * Highlights current section as user scrolls
 * Smooth scroll to sections on click
 * Sticky positioning for easy navigation
 *
 * Two modes:
 * 1. Explicit sections: Pass sections prop
 * 2. Auto-generate: Don't pass sections, will auto-detect h2/h3 headings
 */
export default function TableOfContents({
  sections,
  includeFAQs = false,
  contentRef,
}: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [autoSections, setAutoSections] = useState<TOCItem[]>([]);

  // Auto-generate sections from DOM if not explicitly provided
  useEffect(() => {
    if (sections) return; // Skip auto-generation if explicit sections provided

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

    setAutoSections(items);
  }, [sections, contentRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    // Observe explicit sections if provided
    if (sections) {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });

      if (includeFAQs) {
        const faqSection = document.getElementById("faqs");
        if (faqSection) observer.observe(faqSection);
      }
    } else {
      // Observe auto-generated sections
      autoSections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.observe(element);
      });
    }

    return () => observer.disconnect();
  }, [sections, includeFAQs, autoSections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Use explicit sections if provided, otherwise use auto-generated
  const displaySections =
    sections || autoSections.map((s) => ({ id: s.id, title: s.text }));

  if (displaySections.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 md:block hidden">
      <div className="flex items-center gap-2 mb-4">
        <Book className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-bold text-gray-900">On This Page</h3>
      </div>
      <nav>
        <ul className="space-y-1">
          {displaySections.map((section) => {
            const isH3 =
              autoSections.find((s) => s.id === section.id)?.level === 3;
            return (
              <li key={section.id} className={isH3 ? "ml-4" : ""}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? "bg-blue-600 text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                  }`}
                >
                  <span className="line-clamp-2">{section.title}</span>
                </button>
              </li>
            );
          })}
          {includeFAQs && (
            <li>
              <button
                onClick={() => scrollToSection("faqs")}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeSection === "faqs"
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                }`}
              >
                <span>FAQs</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
