"use client";

import { useState } from "react";
import { parseMarkdownLinks } from './utils';

interface ChecklistProps {
  content: string;
}

/**
 * Parse [CHECKLIST] marker content
 * Format:
 * title: Checklist title
 * item: First item
 * item: Second item
 */
function parseChecklist(content: string): { title: string; items: string[] } {
  const lines = content.trim().split('\n').map(line => line.trim()).filter(Boolean);

  let title = '';
  const items: string[] = [];

  for (const line of lines) {
    if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim();
    } else if (line.startsWith('item:')) {
      items.push(line.replace('item:', '').trim());
    }
  }

  return { title, items };
}

export default function Checklist({ content }: ChecklistProps) {
  const { title, items } = parseChecklist(content);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  if (items.length === 0) return null;

  const toggleItem = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="border-l-4 border-primary-light bg-blue-50 p-4 md:p-6 my-6 rounded-r-lg shadow-sm">
      {title && (
        <h4 className="text-lg md:text-xl font-bold text-gray-dark mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          {title}
        </h4>
      )}

      <ul className="space-y-3">
        {items.map((item, idx) => {
          const isChecked = checkedItems.has(idx);
          return (
            <li
              key={idx}
              className="flex items-start gap-3 cursor-pointer"
              onClick={() => toggleItem(idx)}
            >
              <span
                className={`flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded border-2 flex items-center justify-center mt-0.5 transition-colors ${
                  isChecked ? 'bg-success border-success' : 'bg-white border-primary'
                }`}
              >
                {isChecked && (
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className={`flex-1 text-sm md:text-base ${isChecked ? 'line-through text-gray' : 'text-gray-dark'}`}>
                {parseMarkdownLinks(item)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
