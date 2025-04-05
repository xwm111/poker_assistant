import React from 'react';

interface ActionInputProps {
  actions: string;
  onActionsChange: (actions: string) => void;
  selectedPosition: number | null;
  selectedStreet: string;
}

const ActionInput: React.FC<ActionInputProps> = ({
  actions,
  onActionsChange,
  selectedPosition,
  selectedStreet,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        行动记录
      </label>
      <textarea
        className="w-full px-3 py-2 border rounded-md"
        rows={3}
        value={actions}
        onChange={(e) => onActionsChange(e.target.value)}
        placeholder="例如: BTN raise 3BB, SB call, BB fold"
      />
    </div>
  );
};

export default ActionInput; 