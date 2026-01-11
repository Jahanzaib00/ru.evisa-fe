import { parseMarkdownLinks } from './utils';

interface TimelineProps {
  content: string;
}

interface TimelineStep {
  timeframe: string;
  action: string;
  details: string;
}

/**
 * Parse [TIMELINE] marker content
 * Format:
 * title: Timeline title
 * step: Timeframe | Action | Details
 */
function parseTimeline(content: string): { title: string; steps: TimelineStep[] } {
  const lines = content.trim().split('\n').map(line => line.trim()).filter(Boolean);

  let title = '';
  const steps: TimelineStep[] = [];

  for (const line of lines) {
    if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim();
    } else if (line.startsWith('step:')) {
      const stepContent = line.replace('step:', '').trim();
      const parts = stepContent.split('|').map(p => p.trim());
      if (parts.length >= 3) {
        steps.push({
          timeframe: parts[0],
          action: parts[1],
          details: parts[2],
        });
      }
    }
  }

  return { title, steps };
}

export default function Timeline({ content }: TimelineProps) {
  const { title, steps } = parseTimeline(content);

  if (steps.length === 0) return null;

  return (
    <div className="my-6 md:my-8">
      {title && (
        <h4 className="text-xl md:text-2xl font-bold text-gray-dark mb-6">{title}</h4>
      )}

      <div className="relative pl-8 md:pl-10">
        {/* Vertical line */}
        <div className="absolute left-3 md:left-4 top-0 bottom-0 w-0.5 bg-primary-light"></div>

        {steps.map((step, idx) => (
          <div key={idx} className="relative mb-6 md:mb-8 last:mb-0">
            {/* Timeline dot */}
            <div className="absolute -left-8 md:-left-10 w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary border-4 border-white shadow-md flex items-center justify-center">
              <span className="text-white text-xs md:text-sm font-bold">{idx + 1}</span>
            </div>

            {/* Content */}
            <div className="bg-white border border-gray-light rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wide mb-1">
                {parseMarkdownLinks(step.timeframe)}
              </div>
              <div className="text-base md:text-lg font-bold text-gray-dark mb-2">
                {parseMarkdownLinks(step.action)}
              </div>
              <div className="text-sm md:text-base text-gray leading-relaxed">
                {parseMarkdownLinks(step.details)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
