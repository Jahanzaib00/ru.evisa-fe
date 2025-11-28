"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GuideSection } from "@/app/lib/data/guides";

interface GuideSidebarProps {
  sections: GuideSection[];
}

export default function GuideSidebar({ sections }: GuideSidebarProps) {
  const [activeSection, setActiveSection] = useState<string>("");

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
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0,
      }
    );

    // Observe all section elements
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!sections || sections.length === 0) {
    return (
      <div className="sticky top-24">
        <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-900">On This Page</h3>
          <nav className="space-y-2 text-sm">
            <a
              href="#content"
              className="block text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Overview
            </a>
            <a
              href="#faqs"
              className="block text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              FAQs
            </a>
          </nav>
          <div className="mt-6 pt-6 border-t border-gray-300">
            <Link
              href="/apply"
              className="block bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="sticky top-24">
      <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-900">On This Page</h3>
        <nav className="space-y-2 text-sm">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block font-medium transition-colors ${
                activeSection === section.id
                  ? "text-blue-600 font-bold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {section.title}
            </a>
          ))}
          <a
            href="#faqs"
            className={`block font-medium transition-colors ${
              activeSection === "faqs"
                ? "text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            FAQs
          </a>
        </nav>
        <div className="mt-6 pt-6 border-t border-gray-300">
          <Link
            href="/apply"
            className="block bg-blue-600 text-white text-center px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
