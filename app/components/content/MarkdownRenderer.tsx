"use client";

import ReactMarkdown, { Components } from "react-markdown";
import InlineCTA from "./InlineCTA";
import { ReactNode } from "react";

interface MarkdownRendererProps {
  content: string;
  injectCTAs?: boolean;
  ctaFrequency?: number;
}

/**
 * Helper function to extract text content from React children
 */
function extractTextFromChildren(children: ReactNode): string {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }

  if (children && typeof children === "object" && "props" in children) {
    return extractTextFromChildren((children as any).props.children);
  }

  return "";
}

/**
 * Helper to extract text and remove semantic markers
 * Returns plain text without the marker
 */
function removeMarker(children: ReactNode, marker: string): string {
  const text = extractTextFromChildren(children);
  return text.replace(marker, "").trim();
}

/**
 * MarkdownRenderer - Professional Content Rendering
 *
 * Uses semantic markers from AI to render professional, accessible content:
 * - [WARNING], [TIP], [TAKEAWAY], [FAILURE] → Styled callout cards with Heroicons
 * - Links → External link icons, proper hover states
 * - Strong/Em → Proper visual weight and distinction
 * - Government-inspired design system
 */
export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Custom component overrides for react-markdown
  const components: Components = {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-dark mb-6 mt-12 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-dark mb-6 mt-12 leading-tight border-l-4 border-primary pl-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-dark mb-4 mt-8 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-dark mb-4 mt-6">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base md:text-lg lg:text-xl font-semibold text-gray-dark mb-3 mt-6">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm md:text-base lg:text-lg font-semibold text-gray-dark mb-3 mt-4">
        {children}
      </h6>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="text-base md:text-lg text-gray leading-relaxed mb-6">
        {children}
      </p>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-4 md:ml-6 text-gray space-y-2 md:space-y-3 mb-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-4 md:ml-6 text-gray space-y-2 md:space-y-3 mb-6">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-base md:text-lg text-gray leading-relaxed pl-2">
        {children}
      </li>
    ),

    // Blockquotes - Semantic marker detection with professional icons
    blockquote: ({ children }) => {
      const childText = extractTextFromChildren(children);

      // [WARNING] marker - Yellow/Orange alert card (distinct from red FAILURE)
      if (childText.includes("[WARNING]")) {
        const cleanedChildren = removeMarker(children, "[WARNING]");
        return (
          <div className="border-l-4 border-warning bg-yellow-50 p-4 md:p-6 my-6 rounded-r-lg shadow-sm">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-warning flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div className="text-sm md:text-base text-gray-dark font-medium flex-1">
                {cleanedChildren}
              </div>
            </div>
          </div>
        );
      }

      // [TIP] marker - Blue tip card
      if (childText.includes("[TIP]")) {
        const cleanedChildren = removeMarker(children, "[TIP]");
        return (
          <div className="border-l-4 border-primary-light bg-blue-50 p-4 md:p-6 my-6 rounded-r-lg shadow-sm">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-primary-light flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <div className="text-sm md:text-base text-gray-dark font-medium flex-1">
                {cleanedChildren}
              </div>
            </div>
          </div>
        );
      }

      // [TAKEAWAY] marker - Green success card
      if (childText.includes("[TAKEAWAY]")) {
        const cleanedChildren = removeMarker(children, "[TAKEAWAY]");
        return (
          <div className="border-l-4 border-success bg-green-50 p-4 md:p-6 my-6 rounded-r-lg shadow-sm">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-success flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="text-sm md:text-base text-gray-dark font-medium flex-1">
                {cleanedChildren}
              </div>
            </div>
          </div>
        );
      }

      // [FAILURE] marker - Red error card with X icon
      if (childText.includes("[FAILURE]")) {
        const cleanedChildren = removeMarker(children, "[FAILURE]");
        return (
          <div className="border-l-4 border-accent bg-red-50 p-4 md:p-6 my-6 rounded-r-lg shadow-md">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="text-sm md:text-base text-gray-dark font-semibold flex-1">
                {cleanedChildren}
              </div>
            </div>
          </div>
        );
      }

      // Default blockquote style
      return (
        <blockquote className="border-l-4 border-primary bg-gray-lightest p-4 md:p-6 my-6 rounded-r-lg">
          <div className="text-sm md:text-base text-gray-dark italic">
            {children}
          </div>
        </blockquote>
      );
    },

    // Code blocks
    code: ({ inline, children, ...props }: any) => {
      if (inline) {
        return (
          <code className="bg-gray-lightest text-accent px-2 py-1 rounded text-sm font-mono font-semibold">
            {children}
          </code>
        );
      }
      return (
        <code
          className="block bg-gray-dark text-gray-lightest p-4 rounded-lg overflow-x-auto my-6 text-sm font-mono leading-relaxed"
          {...props}
        >
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="bg-gray-dark text-gray-lightest p-4 md:p-6 rounded-lg overflow-x-auto my-6">
        {children}
      </pre>
    ),

    // Links - Enhanced with external link icons and better styling
    a: ({ href, children }) => {
      const isExternal = href?.startsWith("http");

      return (
        <a
          href={href}
          className="text-primary-light font-semibold hover:text-primary hover:underline transition-colors inline-flex items-center gap-1 group"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
          {isExternal && (
            <svg
              className="w-4 h-4 inline-block opacity-70 group-hover:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
        </a>
      );
    },

    // Strong/Bold - Prominent styling
    strong: ({ children }) => (
      <strong className="font-bold text-gray-dark">{children}</strong>
    ),

    // Emphasis/Italic - Clear distinction with underline
    em: ({ children }) => (
      <em className="italic text-gray-dark font-medium border-b border-dotted border-gray-light pb-0.5">
        {children}
      </em>
    ),

    // Horizontal rule
    hr: () => <hr className="border-t-2 border-gray-light my-8 md:my-12" />,

    // Tables - responsive
    table: ({ children }) => (
      <div className="overflow-x-auto my-6 md:my-8 -mx-4 md:mx-0 shadow-sm rounded-lg">
        <table className="min-w-full border-collapse border border-gray-light">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-primary text-white">{children}</thead>
    ),
    tbody: ({ children }) => <tbody className="bg-white">{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b border-gray-light hover:bg-gray-lightest transition-colors">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-sm md:text-base font-bold uppercase tracking-wide">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray font-medium">
        {children}
      </td>
    ),
  };

  return (
    <div className="markdown-content">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
