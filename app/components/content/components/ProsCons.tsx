interface ProsConsProps {
  content: string;
}

/**
 * Parse [PROSCONS] marker content
 * Format:
 * title: Topic
 * pro: Advantage
 * con: Disadvantage
 */
function parseProsCons(content: string): { title: string; pros: string[]; cons: string[] } {
  const lines = content.trim().split('\n').map(line => line.trim()).filter(Boolean);

  let title = '';
  const pros: string[] = [];
  const cons: string[] = [];

  for (const line of lines) {
    if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim();
    } else if (line.startsWith('pro:')) {
      pros.push(line.replace('pro:', '').trim());
    } else if (line.startsWith('con:')) {
      cons.push(line.replace('con:', '').trim());
    }
  }

  return { title, pros, cons };
}

export default function ProsCons({ content }: ProsConsProps) {
  const { title, pros, cons } = parseProsCons(content);

  if (pros.length === 0 && cons.length === 0) return null;

  return (
    <div className="my-6 md:my-8">
      {title && (
        <h4 className="text-xl md:text-2xl font-bold text-gray-dark mb-6">{title}</h4>
      )}

      <div className="grid md:grid-cols-2 gap-4 md:gap-6">
        {/* Pros */}
        {pros.length > 0 && (
          <div className="border-l-4 border-success bg-green-50 p-4 md:p-5 rounded-r-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-base md:text-lg font-bold text-gray-dark">Pros</span>
            </div>
            <ul className="space-y-2 md:space-y-3">
              {pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-success font-bold mt-0.5">+</span>
                  <span className="flex-1 text-sm md:text-base text-gray-dark">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Cons */}
        {cons.length > 0 && (
          <div className="border-l-4 border-accent bg-red-50 p-4 md:p-5 rounded-r-lg shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-base md:text-lg font-bold text-gray-dark">Cons</span>
            </div>
            <ul className="space-y-2 md:space-y-3">
              {cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent font-bold mt-0.5">−</span>
                  <span className="flex-1 text-sm md:text-base text-gray-dark">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
