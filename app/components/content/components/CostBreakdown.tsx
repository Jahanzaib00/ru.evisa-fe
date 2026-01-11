interface CostBreakdownProps {
  content: string;
}

interface CostItem {
  name: string;
  amount: string;
  notes: string;
}

/**
 * Parse [COST_BREAKDOWN] marker content
 * Format:
 * title: Title
 * item: Name | Amount | Notes
 * total: Total amount
 */
function parseCostBreakdown(content: string): { title: string; items: CostItem[]; total: string } {
  const lines = content.trim().split('\n').map(line => line.trim()).filter(Boolean);

  let title = '';
  const items: CostItem[] = [];
  let total = '';

  for (const line of lines) {
    if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim();
    } else if (line.startsWith('item:')) {
      const itemContent = line.replace('item:', '').trim();
      const parts = itemContent.split('|').map(p => p.trim());
      if (parts.length >= 3) {
        items.push({
          name: parts[0],
          amount: parts[1],
          notes: parts[2],
        });
      }
    } else if (line.startsWith('total:')) {
      total = line.replace('total:', '').trim();
    }
  }

  return { title, items, total };
}

export default function CostBreakdown({ content }: CostBreakdownProps) {
  const { title, items, total } = parseCostBreakdown(content);

  if (items.length === 0) return null;

  return (
    <div className="border border-gray-light rounded-lg shadow-sm my-6 md:my-8 overflow-hidden">
      {title && (
        <div className="bg-gradient-to-r from-primary to-primary-light text-white px-4 md:px-6 py-3 md:py-4">
          <h4 className="text-lg md:text-xl font-bold flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {title}
          </h4>
        </div>
      )}

      <div className="bg-white">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start justify-between gap-4 px-4 md:px-6 py-3 md:py-4 border-b border-gray-light last:border-b-0 hover:bg-blue-50 transition-colors"
          >
            <div className="flex-1">
              <div className="text-sm md:text-base font-semibold text-gray-dark">{item.name}</div>
              {item.notes && (
                <div className="text-xs md:text-sm text-gray mt-1">{item.notes}</div>
              )}
            </div>
            <div className="text-base md:text-lg font-bold text-primary flex-shrink-0">
              {item.amount}
            </div>
          </div>
        ))}

        {total && (
          <div className="bg-gradient-to-r from-gray-lightest to-white px-4 md:px-6 py-3 md:py-4 border-t-2 border-primary">
            <div className="flex items-center justify-between">
              <span className="text-base md:text-lg font-bold text-gray-dark">Total</span>
              <span className="text-xl md:text-2xl font-bold text-primary">{total}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
