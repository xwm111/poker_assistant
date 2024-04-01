'use client';
//玩家手牌
import type { PokerCard } from '@/app/lib/definitions';
import clsx from 'clsx';

export default function PokerCardPlayer({
  card,
  choosed,
  onChoose
}: {
  card: PokerCard | null;
  choosed: boolean;
  onChoose: () => void;
}) {
  return (
    <div onClick={() => onChoose()}>
      {card === null ? (
        <div className="card-pattern h-28 w-20 rounded-lg border-4 border-blue-900 bg-blue-800 shadow-lg"></div>
      ) : (
        <div className="flex h-28 w-20 flex-col justify-between rounded-lg bg-white p-2 shadow-lg">
          <div className="flex justify-between px-1">
            <span
              className={clsx(
                'font-bold',
                card.suit === '♥️' || card.suit === '♦️'
                  ? 'text-red-600'
                  : 'text-black',
              )}
            >
              {card.value}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span
              className={clsx(
                'text-5xl font-bold',
                card.suit === '♥️' || card.suit === '♦️'
                  ? 'text-red-600'
                  : 'text-black',
              )}
            >
              {card.suit}
            </span>
          </div>
          <div className="flex flex-row-reverse justify-between px-1">
            <span
              className={clsx(
                'font-bold',
                card.suit === '♥️' || card.suit === '♦️'
                  ? 'text-red-600'
                  : 'text-black',
              )}
            >
              {card.value}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
