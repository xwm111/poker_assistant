import React, { useEffect, useState, useRef } from 'react';
import { CheckCircle2, X, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface AnalysisResultProps {
  result: Response | null;
  onClear?: () => void;
}

const AnalysisResult: React.FC<AnalysisResultProps> = ({ result, onClear }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const resultRef = useRef<Response | null>(null);

  useEffect(() => {
    if (!result || result === resultRef.current) {
      return;
    }

    resultRef.current = result;
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

  const handleClear = () => {
    setContent('');
    resultRef.current = null;
    if (onClear) {
      onClear();
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // 2秒后重置复制状态
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="mt-6">
      <div className="bg-card border rounded-lg shadow-sm">
        <div className="border-b px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium text-foreground">
              分析结果 {isLoading && <span className="text-sm text-muted-foreground">(正在生成...)</span>}
            </h3>
          </div>
          {content && !isLoading && (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
                title={isCopied ? "已复制" : "复制内容"}
              >
                {isCopied ? (
                  <Check className="h-5 w-5 text-primary" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={handleClear}
                className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                title="清空内容"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
        <div className="px-6 py-4">
          <div className="prose prose-slate max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h1: ({node, ...props}) => (
                  <h1 className="text-2xl font-bold text-foreground mt-6 mb-4" {...props} />
                ),
                h2: ({node, ...props}) => (
                  <h2 className="text-xl font-bold text-foreground mt-5 mb-3" {...props} />
                ),
                h3: ({node, ...props}) => (
                  <h3 className="text-lg font-bold text-foreground mt-4 mb-2" {...props} />
                ),
                h4: ({node, ...props}) => (
                  <h4 className="text-base font-bold text-foreground mt-3 mb-2" {...props} />
                ),
                p: ({node, children, ...props}) => {
                  if (children && typeof children === 'string' && children.trim() === '') {
                    return null;
                  }
                  if (children && typeof children === 'string' && children === '---') {
                    return <hr className="my-4 border-t border-border" />;
                  }
                  return (
                    <p className="text-foreground mb-4 leading-relaxed" {...props}>
                      {children}
                    </p>
                  );
                },
                ul: ({node, ...props}) => (
                  <ul className="list-disc pl-6 text-foreground space-y-2 mb-4" {...props} />
                ),
                li: ({node, children, ...props}) => (
                  <li className="text-foreground leading-relaxed" {...props}>
                    {children}
                  </li>
                ),
                hr: ({node, ...props}) => (
                  <hr className="my-6 border-t border-border" {...props} />
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