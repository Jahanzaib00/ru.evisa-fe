interface AlertProps {
  content: string;
}

/**
 * Parse [ALERT] marker content
 * Format:
 * type: WARNING or CRITICAL or INFO
 * title: Alert title
 * message: Alert message
 */
function parseAlert(content: string): { type: string; title: string; message: string } | null {
  const lines = content.trim().split('\n').map(line => line.trim()).filter(Boolean);

  let type = 'INFO';
  let title = '';
  let message = '';

  for (const line of lines) {
    if (line.startsWith('type:')) {
      type = line.replace('type:', '').trim().toUpperCase();
    } else if (line.startsWith('title:')) {
      title = line.replace('title:', '').trim();
    } else if (line.startsWith('message:')) {
      message = line.replace('message:', '').trim();
    }
  }

  if (!message) return null;

  return { type, title, message };
}

export default function Alert({ content }: AlertProps) {
  const alert = parseAlert(content);

  if (!alert) return null;

  const styles = {
    CRITICAL: {
      border: 'border-accent',
      bg: 'bg-red-50',
      icon: 'text-accent',
      iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    },
    WARNING: {
      border: 'border-warning',
      bg: 'bg-yellow-50',
      icon: 'text-warning',
      iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    },
    INFO: {
      border: 'border-primary-light',
      bg: 'bg-blue-50',
      icon: 'text-primary-light',
      iconPath: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  };

  const style = styles[alert.type as keyof typeof styles] || styles.INFO;

  return (
    <div className={`border-2 ${style.border} ${style.bg} p-4 md:p-6 my-6 md:my-8 rounded-lg shadow-lg`}>
      <div className="flex items-start gap-3">
        <svg className={`w-6 h-6 md:w-8 md:h-8 ${style.icon} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={style.iconPath} />
        </svg>
        <div className="flex-1">
          {alert.title && (
            <div className="text-lg md:text-xl font-bold text-gray-dark mb-2">
              {alert.title}
            </div>
          )}
          <div className="text-sm md:text-base text-gray-dark leading-relaxed">
            {alert.message}
          </div>
        </div>
      </div>
    </div>
  );
}
