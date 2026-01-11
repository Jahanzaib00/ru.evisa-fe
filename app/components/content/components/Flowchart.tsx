interface FlowchartProps {
  content: string;
}

/**
 * Parse [FLOWCHART] marker content
 * Format:
 * question: Main question?
 * yes: Outcome if yes
 * no: Outcome if no
 */
function parseFlowchart(content: string): { question: string; yes: string; no: string } {
  const lines = content.trim().split('\n').map(line => line.trim()).filter(Boolean);

  let question = '';
  let yes = '';
  let no = '';

  for (const line of lines) {
    if (line.startsWith('question:')) {
      question = line.replace('question:', '').trim();
    } else if (line.startsWith('yes:')) {
      yes = line.replace('yes:', '').trim();
    } else if (line.startsWith('no:')) {
      no = line.replace('no:', '').trim();
    }
  }

  return { question, yes, no };
}

export default function Flowchart({ content }: FlowchartProps) {
  const { question, yes, no } = parseFlowchart(content);

  if (!question) return null;

  return (
    <div className="border-2 border-primary bg-gradient-to-br from-blue-50 to-white p-4 md:p-6 my-6 rounded-lg shadow-md">
      <div className="flex items-start gap-3 mb-4">
        <svg
          className="w-6 h-6 text-primary flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="flex-1">
          <div className="text-base md:text-lg font-bold text-gray-dark mb-4">
            {question}
          </div>

          {yes && (
            <div className="mb-3 flex items-start gap-2">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-success text-white text-xs md:text-sm font-bold flex-shrink-0">
                YES
              </span>
              <span className="text-sm md:text-base text-gray-dark flex-1">{yes}</span>
            </div>
          )}

          {no && (
            <div className="flex items-start gap-2">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-accent text-white text-xs md:text-sm font-bold flex-shrink-0">
                NO
              </span>
              <span className="text-sm md:text-base text-gray-dark flex-1">{no}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
