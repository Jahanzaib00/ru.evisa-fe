"use client";

import { ReactNode, useState } from "react";
import { ChevronDown, User, Check } from "lucide-react";

interface Traveler {
  id: string;
  firstName: string;
  lastName: string;
  completed?: boolean;
}

interface TravelerAccordionProps {
  travelers: Traveler[];
  activeTravelerId?: string;
  onTravelerChange?: (travelerId: string) => void;
  renderContent: (traveler: Traveler, index: number) => ReactNode;
}

export default function TravelerAccordion({
  travelers,
  activeTravelerId,
  onTravelerChange,
  renderContent,
}: TravelerAccordionProps) {
  const [openTravelerId, setOpenTravelerId] = useState<string>(
    activeTravelerId || travelers[0]?.id
  );

  console.log("Active Traveler ID:", activeTravelerId);

  const handleToggle = (travelerId: string) => {
    setOpenTravelerId(openTravelerId === travelerId ? "" : travelerId);
    onTravelerChange?.(travelerId);
  };

  return (
    <div className="space-y-4">
      {travelers.map((traveler, index) => {
        const isOpen = openTravelerId === traveler.id;

        return (
          <div
            key={traveler.id}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all"
          >
            {/* Accordion Header */}
            <button
              type="button"
              onClick={() => handleToggle(traveler.id)}
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                    ${
                      traveler.completed
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }
                  `}
                >
                  {traveler.completed ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">
                    Traveler {index + 1}
                  </p>
                  {(traveler.firstName || traveler.lastName) && (
                    <p className="text-sm text-gray-600">
                      {traveler.firstName} {traveler.lastName}
                    </p>
                  )}
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${
                  isOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {/* Accordion Content */}
            {isOpen && (
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                {renderContent(traveler, index)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
