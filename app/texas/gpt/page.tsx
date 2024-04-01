'use client';
import React, { useState } from 'react';
import type { PokerCard } from '@/app/lib/definitions';
import clsx from 'clsx';
import {gogpt} from '@/app/lib/actions'

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
export default function Page() {
  const [airesult,setAiresult] = useState<string>("你好！");
  const [firstSelectCard, setFirstSelectedCard] = useState<PokerCard>({
    suit: '',
    value: '',
    code: '',
    selected: false,
  });
  const [secondSelectCard, setSecondSelectedCard] = useState<PokerCard>({
    suit: '',
    value: '',
    code: '',
    selected: false,
  });
  const [currentCard, setCurrentCard] = useState<1 | 2 | 3>(1);

  const updateCard = (card: PokerCard) => {
    console.log(card);
    if (currentCard != 3 && !card.selected) {
      //设置第一张牌
      if (currentCard === 1) {
        updateFirstSelectedCard(card);
        if (secondSelectCard.value === '') {
          setCurrentCard(2);
        } else {
          setCurrentCard(3);
        }
      } else if (currentCard === 2) {
        //设置第二张牌
        updateSecondSelectedCard(card);
        if (firstSelectCard.value === '') {
          setCurrentCard(1);
        } else {
          setCurrentCard(3);
        }
      }
    } else {
      console.log('这张牌已经选中过了');
    }
  };

  const unSelectFirstCard = () => {
    cards_s.map((card) => {
      if (card.code === firstSelectCard.code) {
        card.selected = false;
      }
    });
    cards_h.map((card) => {
      if (card.code === firstSelectCard.code) {
        card.selected = false;
      }
    });
    cards_d.map((card) => {
      if (card.code === firstSelectCard.code) {
        card.selected = false;
      }
    });
    cards_c.map((card) => {
      if (card.code === firstSelectCard.code) {
        card.selected = false;
      }
    });
    setFirstSelectedCard({ suit: '', value: '', code: '', selected: false });
    setCurrentCard(1);
  };

  const unSelectSecondCard = () => {
    cards_s.map((card) => {
      if (card.code === secondSelectCard.code) {
        card.selected = false;
      }
    });
    cards_h.map((card) => {
      if (card.code === secondSelectCard.code) {
        card.selected = false;
      }
    });
    cards_c.map((card) => {
      if (card.code === secondSelectCard.code) {
        card.selected = false;
      }
    });
    cards_d.map((card) => {
      if (card.code === secondSelectCard.code) {
        card.selected = false;
      }
    });
    updateSecondSelectedCard({
      suit: '',
      value: '',
      code: '',
      selected: false,
    });
    setCurrentCard(2);
  };

  const updateFirstSelectedCard = (card: PokerCard) => {
    card.selected = true;
    setFirstSelectedCard((precard) => {
      return { ...card };
    });
  };

  const updateSecondSelectedCard = (card: PokerCard) => {
    card.selected = true;
    setSecondSelectedCard((precard) => {
      return { ...precard, ...card };
    });
  };

  // 设置单选按钮的状态
  const [selectedValue, setSelectedValue] = useState('');

  // 处理单选按钮变化的函数
  const handleRadioChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };

  const [inputValue, setInputValue] = useState(''); // 初始状态为空字符串

  // 当input值改变时调用这个函数
  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(event.target.value); // 更新状态为当前input的值
  };

  const  submitToGpt = async ()=>{
    console.log(firstSelectCard)
    console.log(secondSelectCard)
    console.log(selectedValue)
    console.log(inputValue);
    const message = await gogpt(firstSelectCard,secondSelectCard,selectedValue,inputValue,"")
    console.log(message);
    setAiresult(message)
    console.log("done");
  }
  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="flex flex-wrap">
          {cards_s.map((card) => (
            <div
              className="m-1"
              key={card.code}
              onClick={() => {
                updateCard(card);
              }}
            >
              <div
                key={card.code + 's'}
                className={clsx(
                  'w-12 rounded  px-4 py-2 text-center text-black shadow',
                  {
                    'bg-gray-500': card.selected,
                  },
                )}
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
            <div
              className="m-1"
              key={card.code}
              onClick={() => {
                updateCard(card);
              }}
            >
              <div
                key={card.code + 'h'}
                className={clsx(
                  'w-12 rounded  px-4 py-2 text-center text-red-600 shadow',
                  {
                    'bg-gray-500': card.selected,
                  },
                )}
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
            <div
              className="m-1"
              key={card.code}
              onClick={() => {
                updateCard(card);
              }}
            >
              <div
                key={card.code + 'c'}
                className={clsx(
                  'w-12 rounded  px-4 py-2 text-center text-black shadow',
                  {
                    'bg-gray-500': card.selected,
                  },
                )}
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
            <div
              className="m-1"
              key={card.code}
              onClick={() => {
                updateCard(card);
              }}
            >
              <div
                key={card.code + 'd'}
                className={clsx(
                  'w-12 rounded  px-4 py-2 text-center text-red-600 shadow',
                  {
                    'bg-gray-500': card.selected,
                  },
                )}
              >
                {card.value}
                {card.suit}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-100 p-2">
        <div className="">请选择你的手牌,点击更换</div>
        <div className="flex items-center justify-between">
          <div
            className={clsx(
              'mx-auto h-20 w-1/6  bg-white p-4',
              {
                'text-red-600':
                  firstSelectCard.suit === '♥️' ||
                  firstSelectCard.suit === '♦️',
              },
              {
                'text-black':
                  firstSelectCard.suit === '♠️' ||
                  firstSelectCard.suit === '♣️',
              },
            )}
            onClick={unSelectFirstCard}
          >
            {firstSelectCard.value}
            {firstSelectCard.suit}
          </div>
          <div
            className={clsx(
              'mx-auto h-20 w-1/6  bg-white p-4',
              {
                'text-red-600':
                  secondSelectCard.suit === '♥️' ||
                  secondSelectCard.suit === '♦️',
              },
              {
                'text-black':
                  secondSelectCard.suit === '♠️' ||
                  secondSelectCard.suit === '♣️',
              },
            )}
            onClick={unSelectSecondCard}
          >
            {secondSelectCard.value}
            {secondSelectCard.suit}
          </div>
        </div>
      </div>
      <div className="bg-blue-100 p-2">
        <div className="">锦标赛阶段</div>
        <div className="flex items-center justify-between">
          <div className="mx-auto ">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="period"
                value="early"
                className="w-1/8 text-red-500"
                checked={selectedValue === 'early'}
                onChange={handleRadioChange}
              />
              <span className="ml-2">前期</span>
            </label>
          </div>
          <div className="mx-auto ">
            <label className="mt-2 inline-flex items-center">
              <input
                type="radio"
                name="period"
                value="mid"
                className="w-1/8 text-red-500"
                checked={selectedValue === 'mid'}
                onChange={handleRadioChange}
              />
              <span className="ml-2">中期</span>
            </label>
          </div>
          <div className="mx-auto ">
            <label className="mt-2 inline-flex items-center">
              <input
                type="radio"
                name="period"
                value="late"
                className="w-1/8 text-red-500"
                checked={selectedValue === 'late'}
                onChange={handleRadioChange}
              />
              <span className="ml-2">后期</span>
            </label>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 p-2 ">
        <div className="mx-auto flex  items-center">
          筹码量(BB数)
          <input
            type="text"
            className="h-6 w-20"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="">
        <button onClick={submitToGpt} className="rounded bg-blue-500 px-4 py-2 font-bold text-white shadow-lg transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-xl">
          GPT辅助
        </button>
      </div>
      <div>
        {airesult}
      </div>
    </>
  );
}
