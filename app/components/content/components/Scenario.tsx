interface ScenarioProps {
  content: string;
}

interface ScenarioData {
  type: 'SUCCESS' | 'FAILURE';
  date: string;
  nationality: string;
  situation: string;
  action: string;
  outcome: string;
  cost?: string;
  delay?: string;
  lesson: string;
}

/**
 * Parse [SCENARIO] marker content
 * Format:
 * type: SUCCESS or FAILURE
 * date: Month Year
 * nationality: Nationality
 * situation: What happened
 * action: What they did
 * outcome: Result
 * cost: Cost impact (optional)
 * delay: Time impact (optional)
 * lesson: Key takeaway
 */
function parseScenario(content: string): ScenarioData | null {
  const lines = content.trim().split('\n').map(line => line.trim()).filter(Boolean);

  const data: Partial<ScenarioData> = {};

  for (const line of lines) {
    if (line.startsWith('type:')) {
      const type = line.replace('type:', '').trim().toUpperCase();
      data.type = (type === 'SUCCESS' || type === 'FAILURE') ? type : 'FAILURE';
    } else if (line.startsWith('date:')) {
      data.date = line.replace('date:', '').trim();
    } else if (line.startsWith('nationality:')) {
      data.nationality = line.replace('nationality:', '').trim();
    } else if (line.startsWith('situation:')) {
      data.situation = line.replace('situation:', '').trim();
    } else if (line.startsWith('action:')) {
      data.action = line.replace('action:', '').trim();
    } else if (line.startsWith('outcome:')) {
      data.outcome = line.replace('outcome:', '').trim();
    } else if (line.startsWith('cost:')) {
      data.cost = line.replace('cost:', '').trim();
    } else if (line.startsWith('delay:')) {
      data.delay = line.replace('delay:', '').trim();
    } else if (line.startsWith('lesson:')) {
      data.lesson = line.replace('lesson:', '').trim();
    }
  }

  if (!data.type || !data.situation || !data.outcome || !data.lesson) {
    return null;
  }

  return data as ScenarioData;
}

export default function Scenario({ content }: ScenarioProps) {
  const scenario = parseScenario(content);

  if (!scenario) return null;

  const isFailure = scenario.type === 'FAILURE';

  return (
    <div className={`border-l-4 ${isFailure ? 'border-accent bg-red-50' : 'border-success bg-green-50'} p-4 md:p-6 my-6 rounded-r-lg shadow-md`}>
      <div className="flex items-start gap-3 mb-4">
        {isFailure ? (
          <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-success flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-bold ${isFailure ? 'bg-accent text-white' : 'bg-success text-white'}`}>
              {scenario.type}
            </span>
            {scenario.date && (
              <span className="text-xs md:text-sm text-gray font-medium">{scenario.date}</span>
            )}
            {scenario.nationality && (
              <span className="text-xs md:text-sm text-gray font-medium">• {scenario.nationality}</span>
            )}
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-xs md:text-sm font-bold text-gray uppercase tracking-wide mb-1">Situation</div>
              <div className="text-sm md:text-base text-gray-dark">{scenario.situation}</div>
            </div>

            {scenario.action && (
              <div>
                <div className="text-xs md:text-sm font-bold text-gray uppercase tracking-wide mb-1">Action Taken</div>
                <div className="text-sm md:text-base text-gray-dark">{scenario.action}</div>
              </div>
            )}

            <div>
              <div className="text-xs md:text-sm font-bold text-gray uppercase tracking-wide mb-1">Outcome</div>
              <div className="text-sm md:text-base text-gray-dark">{scenario.outcome}</div>
            </div>

            {(scenario.cost || scenario.delay) && (
              <div className="flex gap-4">
                {scenario.cost && (
                  <div>
                    <div className="text-xs md:text-sm font-bold text-gray uppercase tracking-wide mb-1">Cost</div>
                    <div className="text-sm md:text-base text-gray-dark font-semibold">{scenario.cost}</div>
                  </div>
                )}
                {scenario.delay && (
                  <div>
                    <div className="text-xs md:text-sm font-bold text-gray uppercase tracking-wide mb-1">Delay</div>
                    <div className="text-sm md:text-base text-gray-dark font-semibold">{scenario.delay}</div>
                  </div>
                )}
              </div>
            )}

            <div className={`border-t-2 ${isFailure ? 'border-accent/20' : 'border-success/20'} pt-3 mt-3`}>
              <div className="text-xs md:text-sm font-bold text-gray uppercase tracking-wide mb-1">Key Lesson</div>
              <div className="text-sm md:text-base text-gray-dark font-medium italic">{scenario.lesson}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
