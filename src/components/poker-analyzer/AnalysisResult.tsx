import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface AnalysisResultProps {
  result: string | null;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <div className="mt-6 space-y-4">
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <CheckCircle2 className="h-5 w-5 text-green-400" />
          </div>
          <div className="ml-3 w-full">
            <h3 className="text-sm font-medium text-gray-900">
              分析结果
            </h3>
            <div className="mt-2 text-sm text-gray-700 prose prose-sm max-w-none">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;