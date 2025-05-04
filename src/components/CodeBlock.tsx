import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'python', title }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md mb-6 bg-gray-900 text-white">
      {title && (
        <div className="px-4 py-2 bg-gray-800 text-gray-200 font-mono text-sm border-b border-gray-700">
          {title}
        </div>
      )}
      <pre className="p-4 overflow-x-auto">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;