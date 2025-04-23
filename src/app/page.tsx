'use client'
import HandInput from '@/components/poker-analyzer/HandInput';
import AnalysisResult from '@/components/poker-analyzer/AnalysisResult';
import Settings from '@/components/Settings';
import { SettingsProvider } from '@/contexts/SettingsContext';
import { Settings as SettingsIcon } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<Response | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const handleAnalysisResult = (result: Response) => {
    setAnalysisResult(result);
  };

  return (
    <SettingsProvider>
      <div className="min-h-screen bg-background">
        <div className="fixed top-0 left-0 right-0 bg-card shadow-sm z-10">
          <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold text-foreground">德州扑克助手</h1>
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 rounded-full hover:bg-secondary"
            >
              <SettingsIcon className="h-6 w-6 text-muted-foreground" />
            </button>
          </div>
        </div>
        
        <main className="pt-16 pb-20">
          <div className="max-w-4xl mx-auto flex flex-col items-center px-4">
            <HandInput onAnalysisResult={handleAnalysisResult} />
            <div className="w-full">
              <AnalysisResult result={analysisResult} />
            </div>
          </div>
        </main>

        {showSettings && (
          <Settings onClose={() => setShowSettings(false)} />
        )}
      </div>
    </SettingsProvider>
  );
}
