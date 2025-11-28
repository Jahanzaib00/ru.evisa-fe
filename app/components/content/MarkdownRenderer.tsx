"use client";

import ReactMarkdown, { Components } from "react-markdown";
import InlineCTA from "./InlineCTA";

interface MarkdownRendererProps {
  content: string;
  injectCTAs?: boolean;
  ctaFrequency?: number;
}

/**
 * MarkdownRenderer
 *
 * Rich markdown rendering using YOUR design system
 * - Uses government-inspired color palette from globals.css
 * - Custom styled components for ALL markdown elements
 * - Professional, branded appearance
 * - Follows YOUR existing component patterns
 */
export default function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  // Process content as-is (CTA injection disabled for now to avoid complexity)
  const processedContent = content;

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

    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary bg-gray-lightest p-4 md:p-6 my-6 rounded-r-lg">
        <div className="text-sm md:text-base text-gray-dark italic">
          {children}
        </div>
      </blockquote>
    ),

    // Code blocks
    code: ({ inline, children, ...props }: any) => {
      if (inline) {
        return (
          <code className="bg-gray-lightest text-accent px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs md:text-sm font-mono">
            {children}
          </code>
        );
      }
      return (
        <code
          className="block bg-gray-dark text-gray-lightest p-3 md:p-4 rounded-lg overflow-x-auto my-6 text-xs md:text-sm font-mono"
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

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary-light font-semibold hover:text-primary hover:underline transition-colors overflow-wrap-anywhere"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),

    // Strong/Bold
    strong: ({ children }) => (
      <strong className="font-bold text-gray-dark">{children}</strong>
    ),

    // Emphasis/Italic
    em: ({ children }) => <em className="italic text-gray-dark">{children}</em>,

    // Horizontal rule
    hr: () => <hr className="border-t-2 border-gray-light my-8 md:my-12" />,

    // Tables - responsive
    table: ({ children }) => (
      <div className="overflow-x-auto my-6 md:my-8 -mx-4 md:mx-0">
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
      <th className="px-3 md:px-6 py-3 md:py-4 text-left text-sm md:text-base font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-3 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray">
        {children}
      </td>
    ),
  };

  return (
    <div className="markdown-content">
      <ReactMarkdown components={components}>{processedContent}</ReactMarkdown>
    </div>
  );
}
