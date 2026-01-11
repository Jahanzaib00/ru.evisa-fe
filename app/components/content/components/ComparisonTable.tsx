interface ComparisonTableProps {
  content: string;
}

/**
 * Parse [COMPARISON] marker content into table data
 * Format:
 * headers: Col1 | Col2 | Col3
 * row: Data1 | Data2 | Data3
 */
function parseComparisonTable(content: string): { headers: string[]; rows: string[][] } {
  const lines = content.trim().split('\n').map(line => line.trim()).filter(Boolean);

  let headers: string[] = [];
  const rows: string[][] = [];

  for (const line of lines) {
    if (line.startsWith('headers:')) {
      headers = line.replace('headers:', '').split('|').map(h => h.trim());
    } else if (line.startsWith('row:')) {
      rows.push(line.replace('row:', '').split('|').map(d => d.trim()));
    }
  }

  return { headers, rows };
}

export default function ComparisonTable({ content }: ComparisonTableProps) {
  const { headers, rows } = parseComparisonTable(content);

  if (headers.length === 0) return null;

  return (
    <div className="overflow-x-auto my-6 md:my-8 -mx-4 md:mx-0 shadow-lg rounded-lg border border-gray-light">
      <table className="min-w-full border-collapse bg-white">
        <thead className="bg-gradient-to-r from-primary to-primary-light text-white">
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-bold uppercase tracking-wider border-b-2 border-white/20"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-light">
          {rows.map((row, rowIdx) => (
            <tr key={rowIdx} className="hover:bg-blue-50 transition-colors">
              {row.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-dark"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
