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
    let buffer = '';

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
          buffer += text;
          
          // 尝试提取实际的分析内容
          const contentMatch = buffer.match(/(?:总结|分析结果)[\s\S]*$/);
          if (contentMatch) {
            const cleanContent = contentMatch[0]
              .replace(/^\s*\{[^}]*\}\s*/gm, '') // 移除 JSON 对象
              .replace(/^\s*"[^"]*"\s*:\s*"[^"]*",?\s*$/gm, '') // 移除 JSON 键值对
              .trim();
            
            setContent(cleanContent);
          }
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