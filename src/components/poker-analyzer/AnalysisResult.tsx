import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface AnalysisResultProps {
  result: Response | null;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!result) {
      setContent('');
      return;
    }

    setIsLoading(true);
    setContent(''); // 清空之前的内容

    const reader = result.body?.getReader();
    const decoder = new TextDecoder();

    async function readStream() {
      if (!reader) return;

      try {
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) {
            setIsLoading(false);
            break;
          }

          const text = decoder.decode(value);
          setContent(prev => prev + text);
        }
      } catch (error) {
        console.error('Error reading stream:', error);
        setIsLoading(false);
      }
    }

    readStream();

    return () => {
      reader?.cancel();
    };
  }, [result]);

  if (!result && !content) {
    return null;
  }

  return (
    <div className="mt-6">
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b px-6 py-4 flex items-center space-x-3">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <h3 className="text-lg font-medium text-gray-900">
            分析结果 {isLoading && <span className="text-sm text-gray-500">(正在生成...)</span>}
          </h3>
        </div>
        <div className="px-6 py-4">
          <div className="prose prose-slate max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({node, ...props}) => (
                  <h1 className="text-2xl font-bold text-gray-900 mt-6 mb-4" {...props} />
                ),
                h2: ({node, ...props}) => (
                  <h2 className="text-xl font-bold text-gray-900 mt-5 mb-3" {...props} />
                ),
                h3: ({node, ...props}) => (
                  <h3 className="text-lg font-bold text-gray-800 mt-4 mb-2" {...props} />
                ),
                h4: ({node, ...props}) => (
                  <h4 className="text-base font-bold text-gray-800 mt-3 mb-2" {...props} />
                ),
                p: ({node, children, ...props}) => {
                  if (children && typeof children === 'string' && children.trim() === '') {
                    return null;
                  }
                  if (children && typeof children === 'string' && children === '---') {
                    return <hr className="my-4 border-t border-gray-200" />;
                  }
                  return (
                    <p className="text-gray-700 mb-4 leading-relaxed" {...props}>
                      {children}
                    </p>
                  );
                },
                ul: ({node, ...props}) => (
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4" {...props} />
                ),
                li: ({node, children, ...props}) => (
                  <li className="text-gray-700 leading-relaxed" {...props}>
                    {children}
                  </li>
                ),
                hr: ({node, ...props}) => (
                  <hr className="my-6 border-t border-gray-200" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisResult;