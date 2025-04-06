import React, { useState, useEffect } from 'react';
import { useSettings } from '@/contexts/SettingsContext';
import { PlusCircle, Trash2, X } from 'lucide-react';

interface ActionInputProps {
  actions: string;
  onActionsChange: (actions: string) => void;
  selectedPosition: number | null;
  selectedStreet: string;
  onStacksChange: (stacks: PlayerStack[]) => void;
}

interface PlayerAction {
  position: number;
  action: 'small_blind' | 'big_blind' | 'straddle' | 'fold' | 'call' | 'raise' | 'allin';
  amount?: number;
  street: '翻牌前' | '翻牌' | '转牌' | '河牌';
}

interface PlayerStack {
  position: number;
  stack: number;
}

type Street = '翻牌前' | '翻牌' | '转牌' | '河牌';

const ActionInput: React.FC<ActionInputProps> = ({
  onActionsChange,
  selectedStreet,
  onStacksChange,
}) => {
  const { settings } = useSettings();
  const [playerStacks, setPlayerStacks] = useState<PlayerStack[]>([]);
  const [playerActions, setPlayerActions] = useState<PlayerAction[]>([]);
  const [showActionInput, setShowActionInput] = useState(false);
  const [actionAmount, setActionAmount] = useState<string>('');
  const [currentStreet, setCurrentStreet] = useState<Street>('翻牌前');
  const [selectedActionPosition, setSelectedActionPosition] = useState<number | null>(null);
  const [selectedActionType, setSelectedActionType] = useState<PlayerAction['action'] | null>(null);
  const [selectedActionStreet, setSelectedActionStreet] = useState<Street | null>(null);
  const [displayStreets, setDisplayStreets] = useState<Street[]>(['翻牌前']);

  // 初始化玩家筹码
  useEffect(() => {
    const initialStacks = Array.from({ length: settings.playerCount }, (_, i) => ({
      position: i + 1,
      stack: 4000
    }));
    setPlayerStacks(initialStacks);
  }, [settings.playerCount]);

  // 根据selectedStreet更新当前回合和显示的回合列表
  useEffect(() => {
    const streetMap: { [key: string]: Street } = {
      '翻牌前': '翻牌前',
      '翻牌': '翻牌',
      '转牌': '转牌',
      '河牌': '河牌'
    };
    const allStreets: Street[] = ['翻牌前', '翻牌', '转牌', '河牌'];
    const selectedStreetChinese = streetMap[selectedStreet] || '翻牌前';
    const currentIndex = allStreets.indexOf(selectedStreetChinese);
    
    // 更新当前回合
    setCurrentStreet(selectedStreetChinese);
    // 更新显示的回合列表（包含当前回合及之前的所有回合）
    setDisplayStreets(allStreets.slice(0, currentIndex + 1));
  }, [selectedStreet]);


  // 更新行动记录字符串
  useEffect(() => {
    const actionsText = playerActions
      .map(action => {
        const streetPrefix = `[${action.street}] `;
        switch (action.action) {
          case 'small_blind':
            return `${streetPrefix}位置${action.position} 小盲注 ${settings.smallBlind}`;
          case 'big_blind':
            return `${streetPrefix}位置${action.position} 大盲注 ${settings.smallBlind * 2}`;
          case 'straddle':
            return `${streetPrefix}位置${action.position} straddle ${settings.smallBlind * 4}`;
          case 'fold':
            return `${streetPrefix}位置${action.position} 弃牌`;
          case 'call':
            return `${streetPrefix}位置${action.position} 跟注 ${action.amount}`;
          case 'raise':
            return `${streetPrefix}位置${action.position} 加注到 ${action.amount}`;
          case 'allin':
            return `${streetPrefix}位置${action.position} 全下 ${action.amount}`;
          default:
            return '';
        }
      })
      .filter(text => text)
      .join('\n');
    onActionsChange(actionsText);
  }, [playerActions, settings.smallBlind, onActionsChange]);

  const handleStackChange = (position: number, value: string) => {
    const stack = parseInt(value) || 0;
    const newStacks = playerStacks.map(p => 
      p.position === position ? { ...p, stack } : p
    );
    setPlayerStacks(newStacks);
    onStacksChange(newStacks);
  };

  // 获取当前最大下注金额
  const getCurrentBetAmount = () => {
    const currentStreetActions = playerActions.filter(action => action.street === currentStreet);
    let maxBet = 0;
    
    currentStreetActions.forEach(action => {
      if (action.amount && ['raise', 'call', 'allin', 'straddle', 'big_blind', 'small_blind'].includes(action.action)) {
        maxBet = Math.max(maxBet, action.amount);
      }
    });
    
    return maxBet;
  };

  // 获取所有玩家位置列表
  const getAvailablePlayers = () => {
    return Array.from({ length: settings.playerCount }, (_, i) => i + 1);
  };

  const handleActionSelect = (action: PlayerAction['action']) => {
    setSelectedActionType(action);
    
    // 只有弃牌直接确认，其他操作都需要输入金额
    if (action === 'fold') {
      handleActionConfirm(action);
    } else if (action === 'call') {
      // 跟注时预填当前最大注额
      const currentBet = getCurrentBetAmount();
      setActionAmount(currentBet.toString());
    } else if (action === 'small_blind') {
      // 小盲注预填金额
      setActionAmount(settings.smallBlind.toString());
    } else if (action === 'big_blind') {
      // 大盲注预填金额
      setActionAmount((settings.smallBlind * 2).toString());
    } else if (action === 'straddle') {
      // straddle预填金额
      setActionAmount((settings.smallBlind * 4).toString());
    }
  };

  const handleActionConfirm = (action: PlayerAction['action'], amount?: number) => {
    if (!selectedActionPosition || !selectedActionStreet) return;

    let finalAmount: number | undefined;
    
    // 根据不同的行动类型设置金额
    switch (action) {
      case 'small_blind':
        finalAmount = settings.smallBlind;
        break;
      case 'big_blind':
        finalAmount = settings.smallBlind * 2;
        break;
      case 'straddle':
        finalAmount = settings.smallBlind * 4;
        break;
      case 'fold':
        finalAmount = undefined;
        break;
      default:
        finalAmount = amount || parseInt(actionAmount) || 0;
    }

    setPlayerActions(prev => [...prev, {
      position: selectedActionPosition,
      action,
      amount: finalAmount,
      street: selectedActionStreet
    }]);

    // 重置状态
    setSelectedActionPosition(null);
    setSelectedActionType(null);
    setSelectedActionStreet(null);
    setActionAmount('');
    setShowActionInput(false);
  };

  const resetActions = () => {
    setPlayerActions([]);
  };

  // 检查是否需要自动添加盲注
  useEffect(() => {
    if (currentStreet === '翻牌前' && playerActions.length === 0) {
      // 自动添加小盲注
      setPlayerActions([{
        position: 1,
        action: 'small_blind',
        amount: settings.smallBlind,
        street: '翻牌前'
      }]);
    } else if (currentStreet === '翻牌前' && playerActions.length === 1) {
      // 自动添加大盲注
      setPlayerActions(prev => [...prev, {
        position: 2,
        action: 'big_blind',
        amount: settings.smallBlind * 2,
        street: '翻牌前'
      }]);
    }
  }, [currentStreet, playerActions.length, settings.smallBlind]);

  // 获取可选择的回合列表
  const getAvailableStreets = () => {
    const streets: Street[] = ['翻牌前', '翻牌', '转牌', '河牌'];
    const streetMap: { [key: string]: number } = {
      '翻牌前': 0,
      '翻牌': 1,
      '转牌': 2,
      '河牌': 3
    };
    
    // 根据selectedStreet确定当前回合的索引
    const currentIndex = streetMap[selectedStreet] || 0;
    
    // 返回从翻牌前到当前回合的所有回合
    return streets.slice(0, currentIndex + 1);
  };

  // 渲染单个行动记录
  const renderAction = (action: PlayerAction) => {
    switch (action.action) {
      case 'small_blind':
        return `位置${action.position} 小盲注 ${settings.smallBlind}`;
      case 'big_blind':
        return `位置${action.position} 大盲注 ${settings.smallBlind * 2}`;
      case 'straddle':
        return `位置${action.position} straddle ${settings.smallBlind * 4}`;
      case 'fold':
        return `位置${action.position} 弃牌`;
      case 'call':
        return `位置${action.position} 跟注 ${action.amount}`;
      case 'raise':
        return `位置${action.position} 加注到 ${action.amount}`;
      case 'allin':
        return `位置${action.position} 全下 ${action.amount}`;
      default:
        return '';
    }
  };

  // 修改删除行动的函数
  const handleDeleteAction = (e: React.MouseEvent, street: Street, actionIndex: number) => {
    e.preventDefault();
    e.stopPropagation();
    const actionToDelete = playerActions.filter(action => action.street === street)[actionIndex];
    
    // 不允许删除小盲注和大盲注
    if (actionToDelete.action === 'small_blind' || actionToDelete.action === 'big_blind') {
      return;
    }
    
    const newActions = playerActions.filter((action, index) => {
      return !(action.street === street && index === actionIndex);
    });
    setPlayerActions(newActions);
  };

  return (
    <div className="space-y-4">
      {/* 玩家筹码输入 */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          玩家筹码
        </label>
        <div className="grid grid-cols-3 gap-2">
          {playerStacks.map(player => (
            <div key={player.position} className="space-y-1">
              <label className="text-xs text-gray-500">
                位置 {player.position}
              </label>
              <input
                type="number"
                value={player.stack || ''}
                onChange={(e) => handleStackChange(player.position, e.target.value)}
                className="w-full px-2 py-1 text-sm border rounded-md"
                placeholder="输入筹码"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 行动记录 */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gray-700">
            行动记录
          </label>
          <button
            type="button"
            onClick={resetActions}
            className="text-sm text-red-600 hover:text-red-700 flex items-center"
          >
            <Trash2 className="h-4 w-4 mr-1" />
            重置
          </button>
        </div>
        
        {/* 已记录的行动 */}
        <div className="bg-gray-50 rounded-md p-2 min-h-[60px] text-sm">
          <div className="space-y-4">
            {displayStreets.map(street => {
              const actions = playerActions.filter(action => action.street === street);
              return (
                <div key={street} className="space-y-1">
                  <div className="text-sm font-medium text-gray-700 border-b pb-1">
                    {street}
                  </div>
                  {actions.length === 0 ? (
                    <div className="text-gray-400 pl-2">暂无行动</div>
                  ) : (
                    actions.map((action, index) => (
                      <div key={index} className="text-gray-600 pl-2 flex justify-between items-center">
                        <span>{renderAction(action)}</span>
                        {action.action !== 'small_blind' && action.action !== 'big_blind' && (
                          <button
                            onClick={(e) => handleDeleteAction(e, street, index)}
                            type="button"
                            className="text-red-500 hover:text-red-700 p-1"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 添加行动界面 */}
        {!showActionInput ? (
          <button
            type="button"
            onClick={() => setShowActionInput(true)}
            className="w-full flex items-center justify-center px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100"
          >
            <PlusCircle className="h-4 w-4 mr-1" />
            添加行动
          </button>
        ) : (
          <div className="space-y-3 p-3 border rounded-md">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">添加行动</span>
              <button
                type="button"
                onClick={() => {
                  setShowActionInput(false);
                  setSelectedActionPosition(null);
                  setSelectedActionType(null);
                  setSelectedActionStreet(null);
                  setActionAmount('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* 步骤1：选择回合 */}
            {!selectedActionStreet && (
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  选择回合
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {getAvailableStreets().map(street => (
                    <button
                      key={street}
                      type="button"
                      onClick={() => setSelectedActionStreet(street)}
                      className={`px-3 py-1 text-sm rounded-md ${
                        street === currentStreet
                          ? 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {street}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 步骤2：选择玩家 */}
            {selectedActionStreet && !selectedActionPosition && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700">
                    选择玩家
                  </label>
                  <button
                    type="button"
                    onClick={() => setSelectedActionStreet(null)}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    返回选择回合
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {getAvailablePlayers().map(position => (
                    <button
                      key={position}
                      type="button"
                      onClick={() => setSelectedActionPosition(position)}
                      className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100"
                    >
                      位置 {position}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 步骤3：选择行动 */}
            {selectedActionStreet && selectedActionPosition && !selectedActionType && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700">
                    选择行动
                  </label>
                  <button
                    type="button"
                    onClick={() => setSelectedActionPosition(null)}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    返回选择玩家
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {selectedActionStreet === '翻牌前' && selectedActionPosition === 3 && (
                    <button
                      type="button"
                      onClick={() => handleActionSelect('straddle')}
                      className="px-3 py-1 text-sm bg-purple-50 text-purple-600 rounded-md hover:bg-purple-100"
                    >
                      Straddle
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => handleActionSelect('fold')}
                    className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100"
                  >
                    弃牌
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionSelect('call')}
                    className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded-md hover:bg-green-100"
                  >
                    跟注
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionSelect('raise')}
                    className="px-3 py-1 text-sm bg-yellow-50 text-yellow-600 rounded-md hover:bg-yellow-100"
                  >
                    加注
                  </button>
                  <button
                    type="button"
                    onClick={() => handleActionSelect('allin')}
                    className="px-3 py-1 text-sm bg-red-50 text-red-600 rounded-md hover:bg-red-100"
                  >
                    全下
                  </button>
                </div>
              </div>
            )}

            {/* 步骤4：输入金额（除了弃牌外都需要） */}
            {selectedActionStreet && selectedActionPosition && selectedActionType && selectedActionType !== 'fold' && (
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-gray-700">
                    输入金额
                  </label>
                  <button
                    type="button"
                    onClick={() => setSelectedActionType(null)}
                    className="text-xs text-gray-500 hover:text-gray-700"
                  >
                    返回选择行动
                  </button>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={actionAmount}
                    onChange={(e) => setActionAmount(e.target.value)}
                    className="flex-1 px-3 py-1 text-sm border rounded-md"
                    placeholder="输入金额"
                  />
                  <button
                    type="button"
                    onClick={() => handleActionConfirm(selectedActionType, parseInt(actionAmount))}
                    className="px-4 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    确认
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionInput; 