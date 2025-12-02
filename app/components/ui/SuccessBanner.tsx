'use client';

import { useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessBannerProps {
  title: string;
  message: string;
  dismissible?: boolean;
}

export default function SuccessBanner({
  title,
  message,
  dismissible = true,
}: SuccessBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-start">
        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-semibold text-green-900">{title}</h3>
          <p className="text-sm text-green-700 mt-1">{message}</p>
        </div>
        {dismissible && (
          <button
            onClick={() => setIsVisible(false)}
            className="ml-3 flex-shrink-0 p-1 rounded-lg hover:bg-green-100 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4 text-green-600" />
          </button>
        )}
      </div>
    </div>
  );
}
