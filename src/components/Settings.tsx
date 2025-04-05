import React from 'react';
import { X } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';

interface SettingsProps {
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  const { settings, updateSettings } = useSettings();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">设置</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <div className="space-y-6">
          {/* 玩家数量设置 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              玩家数量
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[6, 7, 8, 9].map(count => (
                <button
                  key={count}
                  onClick={() => updateSettings({ playerCount: count })}
                  className={`px-4 py-2 text-sm font-medium rounded-md
                    ${settings.playerCount === count
                      ? 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                      : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                >
                  {count}
                </button>
              ))}
            </div>
          </div>

          {/* 小盲注设置 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              小盲注
            </label>
            <input
              type="number"
              value={settings.smallBlind}
              onChange={(e) => updateSettings({ smallBlind: parseInt(e.target.value) || 0 })}
              className="w-full px-3 py-2 border rounded-md text-sm"
              placeholder="输入小盲注金额"
            />
          </div>

          {/* 玩家风格设置 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              玩家风格
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => updateSettings({ playStyle: 'LAG' })}
                className={`px-4 py-2 text-sm font-medium rounded-md
                  ${settings.playStyle === 'LAG'
                    ? 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
              >
                松凶 (LAG)
              </button>
              <button
                onClick={() => updateSettings({ playStyle: 'TAG' })}
                className={`px-4 py-2 text-sm font-medium rounded-md
                  ${settings.playStyle === 'TAG'
                    ? 'bg-indigo-50 text-indigo-600 border border-indigo-200'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                  }`}
              >
                紧凶 (TAG)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 