import { parseMarkdownLinks } from './utils';

interface StepsProps {
  content: string;
}

/**
 * Parse [STEPS] marker content
 * Format:
 * title: Process title
 * step: First step
 * step: Second step
 */
function parseSteps(content: string): { title: string; steps: string[] } {
  const lines = content.trim().split('\n').map(line => line.trim()).filter(Boolean);

  let title = '';
  const steps: string[] = [];

  for (const line of lines) {
    if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim();
    } else if (line.startsWith('step:')) {
      steps.push(line.replace('step:', '').trim());
    }
  }

  return { title, steps };
}

export default function Steps({ content }: StepsProps) {
  const { title, steps } = parseSteps(content);

  if (steps.length === 0) return null;

  return (
    <div className="my-6 md:my-8">
      {title && (
        <h4 className="text-xl md:text-2xl font-bold text-gray-dark mb-6">{title}</h4>
      )}

      <ol className="space-y-4 md:space-y-5">
        {steps.map((step, idx) => (
          <li key={idx} className="flex items-start gap-3 md:gap-4">
            <span className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary text-white text-base md:text-lg font-bold flex-shrink-0 mt-0.5">
              {idx + 1}
            </span>
            <span className="flex-1 text-base md:text-lg text-gray-dark leading-relaxed pt-1">
              {parseMarkdownLinks(step)}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
