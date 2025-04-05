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
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 pt-1">
            <CheckCircle2 className="h-5 w-5 text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              分析结果
            </h3>
            <div className="prose prose-sm prose-slate max-w-none">
              <ReactMarkdown>{result}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;