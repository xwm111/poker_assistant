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
          // 确保每个响应片段都是有效的markdown
          const formattedText = text
            .replace(/^[^#\n]*$/, (match) => match + '\n') // 如果没有标题和换行，添加换行
            .replace(/^(#{1,3}[^#\n]*$)/, '$1\n'); // 如果以标题结尾，添加换行

          setContent(prev => prev + formattedText);
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
                h2: ({node, ...props}) => (
                  <h2 className="text-lg font-medium text-gray-900 mt-6 mb-3 pb-2 border-b" {...props} />
                ),
                h3: ({node, ...props}) => (
                  <h3 className="text-base font-medium text-gray-800 mt-4 mb-2" {...props} />
                ),
                p: ({node, children, ...props}) => {
                  if (children && typeof children === 'string' && children.trim() === '') {
                    return <br />;
                  }
                  return (
                    <p className="text-gray-600 mb-3 leading-relaxed whitespace-pre-wrap" {...props}>
                      {children}
                    </p>
                  );
                },
                ul: ({node, ...props}) => (
                  <ul className="list-disc pl-4 text-gray-600 space-y-1 mb-3" {...props} />
                ),
                li: ({node, children, ...props}) => (
                  <li className="text-gray-600 leading-relaxed" {...props}>
                    {children}
                  </li>
                ),
                strong: ({node, ...props}) => (
                  <strong className="font-semibold text-gray-900" {...props} />
                ),
                code: ({node, ...props}) => (
                  <code className="px-1 py-0.5 bg-gray-100 rounded text-sm font-mono" {...props} />
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