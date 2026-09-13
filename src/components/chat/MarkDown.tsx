import React from 'react';
import Link from 'next/link';

interface MarkdownTextProps {
  text: string;
}

const ROUTE_CONFIG: Record<string, { label: string; className: string }> = {
  '/rooms': {
    label: '🏠 View Rooms',
    className: 'inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-700 transition-colors no-underline',
  },
  '/faq': {
    label: '❓ Frequently Asked Questions',
    className: 'inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-800 text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors no-underline border border-gray-300',
  },
};

const MarkdownText = ({ text }: MarkdownTextProps) => {
  if (!text) return null;

  const parseLine = (line: string) => {
    const COMBINED_REGEX = /\*\*(.*?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;

    while ((match = COMBINED_REGEX.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(line.slice(lastIndex, match.index));
      }

      const [fullMatch, boldContent, linkLabel, linkUrl] = match;

      if (boldContent !== undefined) {
        parts.push(
          <strong key={`bold-${match.index}`} className="font-bold">
            {boldContent}
          </strong>
        );
      } else if (linkLabel && linkUrl) {
        const isInternal = linkUrl.startsWith('/');
        const routeConfig = ROUTE_CONFIG[linkUrl];

        parts.push(
          isInternal ? (
            <Link
              key={`link-${match.index}`}
              href={linkUrl}
              className={routeConfig ? routeConfig.className : 'text-blue-500 underline hover:text-blue-700 font-medium'}
            >
              {routeConfig ? routeConfig.label : linkLabel}
            </Link>
          ) : (
            <a
              key={`link-${match.index}`}
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700 font-medium"
            >
              {linkLabel}
            </a>
          )
        );
      }

      lastIndex = match.index + fullMatch.length;
    }

    if (lastIndex < line.length) {
      parts.push(line.slice(lastIndex));
    }

    return parts;
  };

  const lines = text.split('\n');

  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {parseLine(line)}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
};

export default MarkdownText;