"use client";

import React, { useState, useMemo, useEffect } from 'react';
import { Loader2, X } from 'lucide-react';
import { useSettings } from '@/contexts/SettingsContext';
import ActionInput from './ActionInput';
import AnalysisResult from './AnalysisResult';

interface HandInputProps {
  onAnalysisResult: (result: Response) => void;
}

const CARD_RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const CARD_SUITS = ['♠️', '♥️', '♦️', '♣️'];
const STREET_NAMES = ['翻牌前', '翻牌', '转牌', '河牌'];

// 获取位置描述
const getPositionDescription = (position: number, totalPlayers: number) => {
  if (position === 1) return '小盲位';
  if (position === 2) return '大盲位';
  if (position === totalPlayers) return '庄家位';
  return `位置 ${position}`;
};

// 添加类型定义
type CommunityCardIndex = `community${number}`;
type SelectingCardType = 'card1' | 'card2' | CommunityCardIndex | null;

const HandInput: React.FC<HandInputProps> = ({ }) => {
  const { settings } = useSettings();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<Response | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [selectedStreet, setSelectedStreet] = useState('翻牌前');
  const [playerStacks, setPlayerStacks] = useState<Array<{ position: number; stack: number }>>([]);
  
  // 初始化玩家筹码
  useEffect(() => {
    const initialStacks = Array.from({ length: settings.playerCount }, (_, i) => ({
      position: i + 1,
      stack: 4000 // 默认筹码量
    }));
    setPlayerStacks(initialStacks);
  }, [settings.playerCount]);

  // 处理筹码变化
  const handleStacksChange = (newStacks: Array<{ position: number; stack: number }>) => {
    setPlayerStacks(newStacks);
  };

  // 手牌选择状态
  const [selectedHand, setSelectedHand] = useState<{
    card1: { rank: string; suit: string } | null;
    card2: { rank: string; suit: string } | null;
  }>({
    card1: null,
    card2: null,
  });

  // 公共牌选择状态
  const [communityCards, setCommunityCards] = useState<Array<{ rank: string; suit: string } | null>>([
    null, null, null, null, null
  ]);

  const [actions, setActions] = useState('');

  // 根据玩家数量生成位置选项
  const positions = useMemo(() => {
    return Array.from({ length: settings.playerCount }, (_, i) => i + 1);
  }, [settings.playerCount]);

  // 添加选牌状态
  const [selectingCard, setSelectingCard] = useState<SelectingCardType>(null);
  const [showRankSelector, setShowRankSelector] = useState(false);
  const [showSuitSelector, setShowSuitSelector] = useState(false);
  const [tempRank, setTempRank] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const handString = selectedHand.card1 && selectedHand.card2 
        ? `${selectedHand.card1.rank}${selectedHand.card1.suit}${selectedHand.card2.rank}${selectedHand.card2.suit}`
        : '';
      
      const boardString = communityCards
        .filter(card => card !== null)
        .map(card => `${card?.rank}${card?.suit}`)
        .join(' ');

      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          hand: handString,
          board: boardString,
          position: selectedPosition,
          actions,
          playerStacks,
          street: selectedStreet,
          playerCount: settings.playerCount,
          playStyle: settings.playStyle,
        }),
      });

      if (!response.ok) {
        throw new Error('分析请求失败');
      }

      setAnalysisResult(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : '未知错误');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardClick = (cardType: 'card1' | 'card2') => {
    setSelectingCard(cardType);
    setShowRankSelector(true);
    setShowSuitSelector(false);
    setTempRank(null);
  };

  const handleRankSelect = (rank: string) => {
    setTempRank(rank);
    setShowRankSelector(false);
    setShowSuitSelector(true);
  };

  const handleSuitSelect = (suit: string) => {
    if (selectingCard && tempRank) {
      if (selectingCard === 'card1' || selectingCard === 'card2') {
        setSelectedHand(prev => ({
          ...prev,
          [selectingCard]: { rank: tempRank, suit }
        }));
      } else {
        const index = parseInt(selectingCard.replace('community', ''));
        const newCards = [...communityCards];
        newCards[index] = { rank: tempRank, suit };
        setCommunityCards(newCards);
      }
      setSelectingCard(null);
      setShowSuitSelector(false);
      setTempRank(null);
    }
  };

  const renderCard = (
    cardType: 'card1' | 'card2',
    card: { rank: string; suit: string } | null
  ) => (
    <div
      onClick={() => handleCardClick(cardType)}
      className="relative w-16 h-24 border rounded-lg bg-white shadow-sm flex items-center justify-center cursor-pointer hover:bg-gray-50"
    >
      {card ? (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedHand(prev => ({
                ...prev,
                [cardType]: null
              }));
            }}
            className="absolute top-1 right-1 p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-3 w-3 text-gray-400" />
          </button>
          <span className={card.suit === '♥' || card.suit === '♦' ? 'text-red-500 text-2xl font-bold' : 'text-black text-2xl font-bold'}>
            {card.rank}
          </span>
          <span className={card.suit === '♥' || card.suit === '♦' ? 'text-red-500 text-2xl' : 'text-black text-2xl'}>
            {card.suit}
          </span>
        </div>
      ) : (
        <span className="text-gray-400">选择</span>
      )}
    </div>
  );

  const renderRankSelector = () => (
    <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-80">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">选择点数</h3>
          <button
            onClick={() => {
              setShowRankSelector(false);
              setSelectingCard(null);
            }}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {CARD_RANKS.map(rank => (
            <button
              key={rank}
              onClick={() => handleRankSelect(rank)}
              className="w-full h-12 flex items-center justify-center border rounded-md hover:bg-gray-50 text-lg font-bold"
            >
              {rank}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSuitSelector = () => (
    <div className="fixed inset-0 bg-gray-900/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-80">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">选择花色</h3>
          <button
            onClick={() => {
              setShowSuitSelector(false);
              setSelectingCard(null);
              setTempRank(null);
            }}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {CARD_SUITS.map(suit => (
            <button
              key={suit}
              onClick={() => handleSuitSelect(suit)}
              className={`w-full h-16 flex items-center justify-center border rounded-md hover:bg-gray-50 text-3xl`}
            >
              {suit}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCommunityCard = (
    index: number,
    card: { rank: string; suit: string } | null
  ) => (
    <div
      onClick={() => {
        setSelectingCard(`community${index}` as CommunityCardIndex);
        setShowRankSelector(true);
        setShowSuitSelector(false);
        setTempRank(null);
      }}
      className="relative w-16 h-24 border rounded-lg bg-white shadow-sm flex items-center justify-center cursor-pointer hover:bg-gray-50"
    >
      {card ? (
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              const newCards = [...communityCards];
              newCards[index] = null;
              setCommunityCards(newCards);
            }}
            className="absolute top-1 right-1 p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-3 w-3 text-gray-400" />
          </button>
          <span className={card.suit === '♥' || card.suit === '♦' ? 'text-red-500 text-2xl font-bold' : 'text-black text-2xl font-bold'}>
            {card.rank}
          </span>
          <span className={card.suit === '♥' || card.suit === '♦' ? 'text-red-500 text-2xl' : 'text-black text-2xl'}>
            {card.suit}
          </span>
        </div>
      ) : (
        <span className="text-gray-400">选择</span>
      )}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 px-4">
      {/* 手牌选择区域 */}
      <div className="space-y-2 mt-2">
        <label className="block text-sm font-medium text-gray-700">
          你的手牌
        </label>
        <div className="flex justify-center space-x-4">
          {renderCard('card1', selectedHand.card1)}
          {renderCard('card2', selectedHand.card2)}
        </div>
      </div>

      {showRankSelector && renderRankSelector()}
      {showSuitSelector && renderSuitSelector()}

      {/* 位置选择 */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          你的位置
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {positions.map(pos => (
            <button
              key={pos}
              type="button"
              onClick={() => setSelectedPosition(pos)}
              className={`px-2 py-1.5 border rounded-md text-sm
                ${selectedPosition === pos 
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700' 
                  : 'bg-white hover:bg-gray-50'}`}
            >
              {getPositionDescription(pos, settings.playerCount)}
            </button>
          ))}
        </div>
      </div>

      {/* 回合选择 */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          当前回合
        </label>
        <div className="grid grid-cols-4 gap-2">
          {STREET_NAMES.map(street => (
            <button
              key={street}
              type="button"
              onClick={() => setSelectedStreet(street)}
              className={`px-3 py-2 border rounded-md text-sm font-medium
                ${selectedStreet === street 
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700' 
                  : 'bg-white hover:bg-gray-50'}`}
            >
              {street}
            </button>
          ))}
        </div>
      </div>

      {/* 公共牌选择区域 */}
      {selectedStreet !== '翻牌前' && (
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            公共牌
          </label>
          <div className="flex justify-center space-x-2 overflow-x-auto py-2">
            {communityCards.slice(0, selectedStreet === '翻牌' ? 3 : selectedStreet === '转牌' ? 4 : 5).map((card, index) => (
              <div key={index}>
                {renderCommunityCard(index, card)}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 行动记录 */}
      <ActionInput
        actions={actions}
        onActionsChange={setActions}
        selectedPosition={selectedPosition}
        selectedStreet={selectedStreet}
        onStacksChange={handleStacksChange}
      />

      {/* 提交按钮 */}
      <button
        type="submit"
        className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
            分析中...
          </>
        ) : (
          "开始分析"
        )}
      </button>

      <AnalysisResult result={analysisResult} />

      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}
    </form>
  );
};

export default HandInput;