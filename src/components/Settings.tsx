import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';

interface SettingsProps {
  onClose: () => void;
}

const Settings: React.FC<SettingsProps> = ({ onClose }) => {
  const { settings, updateSettings } = useSettings();
  const [playerCount, setPlayerCount] = useState(settings.playerCount);
  const [smallBlind, setSmallBlind] = useState(settings.smallBlind);

  const handleSave = () => {
    updateSettings({
      playerCount,
      smallBlind,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">设置</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <div className="space-y-6">
          {/* 玩家人数设置 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              默认牌桌人数
            </label>
            <select
              value={playerCount}
              onChange={(e) => setPlayerCount(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded-md bg-white"
            >
              {[6, 7, 8, 9].map(count => (
                <option key={count} value={count}>
                  {count} 人桌
                </option>
              ))}
            </select>
          </div>

          {/* 小盲注设置 */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              小盲注金额
            </label>
            <div className="relative">
              <input
                type="number"
                value={smallBlind}
                onChange={(e) => setSmallBlind(Number(e.target.value))}
                min={1}
                step={1}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="输入小盲注金额"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
          >
            取消
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings; 