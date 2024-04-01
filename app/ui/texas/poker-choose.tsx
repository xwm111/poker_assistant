//扑克选择器
'use client';
import type { PokerCard } from '@/app/lib/definitions';
import clsx from 'clsx';

export default function pokerChoose({
  isShow,
  choosedCards,
  onCardChoose,
}: {
  isShow: boolean;
  choosedCards: PokerCard[];
  onCardChoose: (card: PokerCard) => void;
}) {
  const cards_s: PokerCard[] = [
    { suit: '♠️', value: 'A', code: 'As' },
    { suit: '♠️', value: 'K', code: 'Ks' },
    { suit: '♠️', value: 'Q', code: 'Qs' },
    { suit: '♠️', value: 'J', code: 'Js' },
    { suit: '♠️', value: 'T', code: 'Ts' },
    { suit: '♠️', value: '9', code: '9s' },
    { suit: '♠️', value: '8', code: '8s' },
    { suit: '♠️', value: '7', code: '7s' },
    { suit: '♠️', value: '6', code: '6s' },
    { suit: '♠️', value: '5', code: '5s' },
    { suit: '♠️', value: '4', code: '4s' },
    { suit: '♠️', value: '3', code: '3s' },
    { suit: '♠️', value: '2', code: '2s' },
  ];
  const cards_h: PokerCard[] = [
    { suit: '♥️', value: 'A', code: 'Ah' },
    { suit: '♥️', value: 'K', code: 'Kh' },
    { suit: '♥️', value: 'Q', code: 'Qh' },
    { suit: '♥️', value: 'J', code: 'Jh' },
    { suit: '♥️', value: 'T', code: 'Th' },
    { suit: '♥️', value: '9', code: '9h' },
    { suit: '♥️', value: '8', code: '8h' },
    { suit: '♥️', value: '7', code: '7h' },
    { suit: '♥️', value: '6', code: '6h' },
    { suit: '♥️', value: '5', code: '5h' },
    { suit: '♥️', value: '4', code: '4h' },
    { suit: '♥️', value: '3', code: '3h' },
    { suit: '♥️', value: '2', code: '2h' },
  ];
  const cards_c: PokerCard[] = [
    { suit: '♣️', value: 'A', code: 'Ac' },
    { suit: '♣️', value: 'K', code: 'Kc' },
    { suit: '♣️', value: 'Q', code: 'Qc' },
    { suit: '♣️', value: 'J', code: 'Jc' },
    { suit: '♣️', value: 'T', code: 'Tc' },
    { suit: '♣️', value: '9', code: '9c' },
    { suit: '♣️', value: '8', code: '8c' },
    { suit: '♣️', value: '7', code: '7c' },
    { suit: '♣️', value: '6', code: '6c' },
    { suit: '♣️', value: '5', code: '5c' },
    { suit: '♣️', value: '4', code: '4c' },
    { suit: '♣️', value: '3', code: '3c' },
    { suit: '♣️', value: '2', code: '2c' },
  ];
  const cards_d: PokerCard[] = [
    { suit: '♦️', value: 'A', code: 'Ad' },
    { suit: '♦️', value: 'K', code: 'Kd' },
    { suit: '♦️', value: 'Q', code: 'Qd' },
    { suit: '♦️', value: 'J', code: 'Jd' },
    { suit: '♦️', value: 'T', code: 'Td' },
    { suit: '♦️', value: '9', code: '9d' },
    { suit: '♦️', value: '8', code: '8d' },
    { suit: '♦️', value: '7', code: '7d' },
    { suit: '♦️', value: '6', code: '6d' },
    { suit: '♦️', value: '5', code: '5d' },
    { suit: '♦️', value: '4', code: '4d' },
    { suit: '♦️', value: '3', code: '3d' },
    { suit: '♦️', value: '2', code: '2d' },
  ];

  choosedCards.map((card) => {
    card.selected = true;
    cards_s.map((card_s) => {
      if (card_s.code === card.code) {
        card_s.selected = true;
      }
    });
    cards_h.map((card_h) => {
      if (card_h.code === card.code) {
        card_h.selected = true;
      }
    });
    cards_c.map((card_c) => {
      if (card_c.code === card.code) {
        card_c.selected = true;
      }
    });
    cards_d.map((card_d) => {
      if (card_d.code === card.code) {
        card_d.selected = true;
      }
    });
  });
  return (
    <div className={clsx('fixed top-10 left-2 right-2 bg-blue-500 text-white p-1 z-50', { hidden: !isShow })}>
      <div className="bg-gray-100 p-2">
        <div className="flex flex-wrap">
          {cards_s.map((card) => (
            <div className="m-1" key={card.code}>
              <div
                style={{ height: '6vh' }}
                key={card.code + 's'}
                className={clsx(
                  'w-10 rounded  px-4 py-2 text-center text-black shadow',
                  {
                    'bg-gray-500': card.selected,
                  },
                )}
                onClick={() => {
                    card.selected = !card.selected;
                    onCardChoose(card);
                }}
              >
                {card.value}
                {card.suit}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-2">
        <div className="flex flex-wrap">
          {cards_h.map((card) => (
            <div className="m-1" key={card.code}>
              <div
                style={{ height: '6vh' }}
                key={card.code + 'h'}
                className={clsx(
                  'w-10 rounded  px-4 py-2 text-center text-red-600 shadow',
                  {
                    'bg-gray-500': card.selected,
                  },
                )}
                onClick={() => {
                    card.selected = !card.selected;
                    onCardChoose(card);
                }}
              >
                {card.value}
                {card.suit}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-2">
        <div className="flex flex-wrap">
          {cards_c.map((card) => (
            <div className="m-1" key={card.code}>
              <div
                style={{ height: '6vh' }}
                key={card.code + 'c'}
                className={clsx(
                  'w-10 rounded  px-4 py-2 text-center text-black shadow',
                  {
                    'bg-gray-500': card.selected,
                  },
                )}
                onClick={() => {
                    card.selected = !card.selected;
                    onCardChoose(card);
                }}
              >
                {card.value}
                {card.suit}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 p-2">
        <div className="flex flex-wrap">
          {cards_d.map((card) => (
            <div className="m-1" key={card.code}>
              <div
                style={{ height: '6vh' }}
                key={card.code + 'd'}
                className={clsx(
                  'w-10 rounded  px-4 py-2 text-center text-red-600 shadow',
                  {
                    'bg-gray-500': card.selected,
                  },
                )}
                onClick={() => {
                    card.selected = !card.selected;
                    onCardChoose(card);
                }}
              >
                {card.value}
                {card.suit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
