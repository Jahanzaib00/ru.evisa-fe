"use client";

import ReactMarkdown, { Components } from "react-markdown";
import { ReactNode } from "react";
import {
  RequiredMarker,
  DisqualifierMarker,
  StepMarker,
  WarningCallout,
  TipCallout,
  TakeawayCallout,
  FailureCallout,
  detectMarker,
  stripMarker,
} from "./markers";
import {
  ComparisonTable,
  Flowchart,
  Checklist,
  Timeline,
  Steps,
  Scenario,
  ProsCons,
  CostBreakdown,
  Alert,
} from "./components";

interface MarkdownRendererProps {
  content: string;
}

interface ComponentBlock {
  type: string;
  content: string;
  index: number;
}

/**
 * Extract component markers from content
 * Returns array of {type, content, index} and cleaned content
 */
function extractComponentMarkers(content: string): { components: ComponentBlock[]; cleanedContent: string } {
  const components: ComponentBlock[] = [];
  const componentPatterns = [
    'COMPARISON',
    'FLOWCHART',
    'CHECKLIST',
    'TIMELINE',
    'STEPS',
    'SCENARIO',
    'PROSCONS',
    'COST_BREAKDOWN',
    'ALERT',
  ];

  let cleanedContent = content;
  let componentIndex = 0;

  // Extract each component type
  for (const componentType of componentPatterns) {
    const openTag = `[${componentType}]`;
    const closeTag = `[/${componentType}]`;
    const regex = new RegExp(`\\[${componentType}\\]([\\s\\S]*?)\\[\\/${componentType}\\]`, 'gi');

    cleanedContent = cleanedContent.replace(regex, (match, componentContent) => {
      const placeholder = `{{COMPONENT:${componentIndex}}}`;
      components.push({
        type: componentType,
        content: componentContent.trim(),
        index: componentIndex,
      });
      componentIndex++;
      return placeholder;
    });
  }

  return { components, cleanedContent };
}

/**
 * Render a component based on type
 */
function renderComponent(component: ComponentBlock): ReactNode {
  switch (component.type) {
    case 'COMPARISON':
      return <ComparisonTable key={component.index} content={component.content} />;
    case 'FLOWCHART':
      return <Flowchart key={component.index} content={component.content} />;
    case 'CHECKLIST':
      return <Checklist key={component.index} content={component.content} />;
    case 'TIMELINE':
      return <Timeline key={component.index} content={component.content} />;
    case 'STEPS':
      return <Steps key={component.index} content={component.content} />;
    case 'SCENARIO':
      return <Scenario key={component.index} content={component.content} />;
    case 'PROSCONS':
      return <ProsCons key={component.index} content={component.content} />;
    case 'COST_BREAKDOWN':
      return <CostBreakdown key={component.index} content={component.content} />;
    case 'ALERT':
      return <Alert key={component.index} content={component.content} />;
    default:
      return null;
  }
}

/**
 * Extract text content from React children
 */
function extractTextFromChildren(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(extractTextFromChildren).join("");
  if (children && typeof children === "object" && "props" in children) {
    return extractTextFromChildren((children as any).props.children);
  }
  return "";
}

/**
 * MarkdownRenderer - Clean, scalable markdown rendering with marker support
 */
export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Extract component markers first
  const { components: extractedComponents, cleanedContent } = extractComponentMarkers(content);

  // Create a map of component placeholders
  const componentMap = new Map<string, ComponentBlock>();
  extractedComponents.forEach(comp => {
    componentMap.set(`{{COMPONENT:${comp.index}}}`, comp);
  });

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

    // Paragraphs (with component placeholder detection)
    p: ({ children }) => {
      const text = extractTextFromChildren(children).trim();

      // Check if this is a component placeholder
      const placeholderMatch = text.match(/^\{\{COMPONENT:(\d+)\}\}$/);
      if (placeholderMatch) {
        const component = componentMap.get(text);
        if (component) {
          return renderComponent(component);
        }
      }

      return (
        <p className="text-base md:text-lg text-gray leading-relaxed mb-6">
          {children}
        </p>
      );
    },

    // Lists with marker support
    ul: ({ children }) => (
      <ul className="list-disc list-outside ml-4 md:ml-6 text-gray space-y-2 md:space-y-3 mb-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside ml-4 md:ml-6 text-gray space-y-3 md:space-y-4 mb-6">
        {children}
      </ol>
    ),

    li: ({ children }) => {
      const childText = extractTextFromChildren(children);
      const marker = detectMarker(childText, 'list');

      if (marker === 'REQUIRED') {
        return <RequiredMarker>{stripMarker(childText, marker)}</RequiredMarker>;
      }
      if (marker === 'DISQUALIFIER') {
        return <DisqualifierMarker>{stripMarker(childText, marker)}</DisqualifierMarker>;
      }
      if (marker === 'STEP') {
        return <StepMarker>{stripMarker(childText, marker)}</StepMarker>;
      }

      // Checkbox support (backward compat)
      const checkboxMatch = childText.match(/^(\[\s?\]|\[x\])\s*/i);
      if (checkboxMatch) {
        const isChecked = /\[x\]/i.test(checkboxMatch[0]);
        const textWithoutCheckbox = childText.replace(/^(\[\s?\]|\[x\])\s*/i, '');
        return (
          <li className="flex items-start gap-3 text-base md:text-lg leading-relaxed list-none ml-0">
            <span className={`flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded border-2 flex items-center justify-center mt-1 ${
              isChecked ? 'bg-success border-success' : 'bg-white border-primary'
            }`}>
              {isChecked && (
                <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </span>
            <span className={`flex-1 ${isChecked ? 'line-through text-gray' : 'text-gray-dark'}`}>
              {textWithoutCheckbox}
            </span>
          </li>
        );
      }

      return (
        <li className="text-base md:text-lg text-gray leading-relaxed pl-2">
          {children}
        </li>
      );
    },

    // Blockquotes with callout marker support
    blockquote: ({ children }) => {
      const childText = extractTextFromChildren(children);
      const marker = detectMarker(childText, 'blockquote');

      if (marker === 'WARNING') {
        return <WarningCallout>{stripMarker(childText, marker)}</WarningCallout>;
      }
      if (marker === 'TIP') {
        return <TipCallout>{stripMarker(childText, marker)}</TipCallout>;
      }
      if (marker === 'TAKEAWAY') {
        return <TakeawayCallout>{stripMarker(childText, marker)}</TakeawayCallout>;
      }
      if (marker === 'FAILURE') {
        return <FailureCallout>{stripMarker(childText, marker)}</FailureCallout>;
      }

      // Decision flowchart detection
      if (childText.includes('→') && (childText.includes('YES:') || childText.includes('NO:'))) {
        return (
          <div className="border-2 border-primary bg-gradient-to-br from-blue-50 to-white p-4 md:p-6 my-6 rounded-lg shadow-md">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm md:text-base text-gray-dark flex-1 leading-relaxed">
                {children}
              </div>
            </div>
          </div>
        );
      }

      // Default blockquote
      return (
        <blockquote className="border-l-4 border-primary bg-gray-lightest p-4 md:p-6 my-6 rounded-r-lg">
          <div className="text-sm md:text-base text-gray-dark italic">
            {children}
          </div>
        </blockquote>
      );
    },

    // Tables
    table: ({ children }) => (
      <div className="overflow-x-auto my-6 md:my-8 -mx-4 md:mx-0 shadow-md rounded-lg border border-gray-light">
        <table className="min-w-full border-collapse bg-white">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-gradient-to-r from-primary to-primary-light text-white">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody className="bg-white divide-y divide-gray-light">
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="hover:bg-blue-50 transition-colors">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold uppercase tracking-wider border-b-2 border-white/20">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-dark">
        {children}
      </td>
    ),

    // Code
    code: ({ inline, children, ...props }: any) => {
      if (inline) {
        return (
          <code className="bg-gray-lightest text-accent px-2 py-1 rounded text-sm font-mono font-semibold">
            {children}
          </code>
        );
      }
      return (
        <code className="block bg-gray-dark text-gray-lightest p-4 rounded-lg overflow-x-auto my-6 text-sm font-mono leading-relaxed" {...props}>
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
            <svg className="w-4 h-4 inline-block opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
        </a>
      );
    },

    // Text formatting
    strong: ({ children }) => (
      <strong className="font-bold text-gray-dark">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-dark font-medium border-b border-dotted border-gray-light pb-0.5">
        {children}
      </em>
    ),
    hr: () => <hr className="border-t-2 border-gray-light my-8 md:my-12" />,
  };

  return (
    <div className="markdown-content">
      <ReactMarkdown components={components}>{cleanedContent}</ReactMarkdown>
    </div>
  );
}
