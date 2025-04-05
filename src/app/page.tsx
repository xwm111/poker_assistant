'use client'
import HandInput from '@/components/poker-analyzer/HandInput';
import AnalysisResult from '@/components/poker-analyzer/AnalysisResult';
import Settings from '@/components/Settings';
import { SettingsProvider } from '@/contexts/SettingsContext';
import { Settings as SettingsIcon } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [showSettings, setShowSettings] = useState(false);

  const handleAnalysisResult = (result: string) => {
    setAnalysisResult(result);
  };

  return (
    <SettingsProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
          <div className="px-4 py-3 flex justify-between items-center">
            <h1 className="text-xl font-bold">德州扑克助手</h1>
            <button
              onClick={() => setShowSettings(true)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <SettingsIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
        
        <main className="pt-16 pb-20">
          <div className="flex flex-col items-center">
            <HandInput onAnalysisResult={handleAnalysisResult} />
            <div className="w-full max-w-md px-4">
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
