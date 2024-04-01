'use client';
import PlayerCard from '@/app/ui/texas/poker-card-player';
import type { PokerCard } from '@/app/lib/definitions';
import PokerChoose from '@/app/ui/texas/poker-choose';
import ChatBox from '@/app/ui/texas/chat-box';
import Sit from '@/app/ui/texas/sit';
import React, { useState } from 'react';
import {gogpt} from '@/app/lib/actions'

import type { Chat } from '@/app/lib/definitions';
export default function Page() {
  const [showChoose, setShowChoose] = useState<boolean>(false);
  //正在选择的卡牌
  const [choosingCard, setChoosingCard] = useState<string | null>(null);
  const [item1, setItem1] = useState<PokerCard | null>(null);
  const [item2, setItem2] = useState<PokerCard | null>(null);
  const [choosedCards, setChoosedCards] = useState<PokerCard[]>([]);
  // 设置锦标赛阶段单选按钮的状态
  const [selectedValue, setSelectedValue] = useState('');

  // 处理锦标赛阶段单选按钮变化的函数
  const handleRadioChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedValue(event.target.value);
  };

  //BB数
  const [bbs, setBbs] = useState(''); // 初始状态为空字符串, setInputValue] = useState(''); // 初始状态为空字符串
  // 当input值改变时调用这个函数
  const handleBBsChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setBbs(event.target.value); // 更新状态为当前input的值
  };

  //当前位置
  const [position, setPosition] = useState(''); // 初始状态为空字符串, setInputValue] = useState(''); // 初始状态为空字符串, setBbs] = useState(''); // 初始状态为空字符串, setInputValue] = useState(''); // 初始状态为空字符串
  // 当input值改变时调用这个函数
  const handlePositionChange = (position: string) => {
    console.log('position', position);
    
    setPosition(position); // 更新状态为当前input的值
  };

  const onCardChoose = (card: PokerCard) => {
    console.log('choosedCards', choosedCards);
    console.log('choosingCard', choosingCard);
    let choosedCards_new: PokerCard[] = [];
    //判断是否是已经选择的牌
    const existCard = choosedCards.some((item) => item.code === card.code);
    if (existCard) {
      setShowChoose(false);
      return;
    } else {
      choosedCards_new = [...choosedCards, card];
      setChoosedCards(choosedCards_new);
      setShowChoose(false);
      if (choosingCard === '1') {
        setItem1(card);
      } else if (choosingCard === '2') {
        setItem2(card);
      }
    }

    console.log(choosedCards_new);
  };
  const removeSelectCard = (card: PokerCard | null) => {
    if (card != null) {
      let choosedCards_new = choosedCards.filter(
        (item) => item.code !== card.code,
      );
      console.log('移除');
      console.log(choosedCards_new);
      console.log('choosingCard', choosingCard);
      setChoosedCards(choosedCards_new);
    }
  };

  const [airesult,setAiresult] = useState<string>("......");
  //提交数据到gpt
  const  submitToGpt = async ()=>{
    const message = await gogpt(item1,item2,selectedValue,bbs,position)
    setAiresult(message)
    console.log("done");
  }

  const chatsarr:Chat[] = [
    {
      question: 'mmt助手',
      answer: "版本:邀请内测 v1.0.0",
    },
    {
      question: 'GPT请帮我分析现在的形式',
      answer: "请选择您当前的手牌信息",
    },
  ];
  return (
    <div className={'ml-4 mr-4 mt-10'}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          请选择竞标赛阶段
        </label>
      </div>
      <div className="mt-2 flex  space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="period"
            value="early"
            className="text-indigo-600"
            checked={selectedValue === 'early'}
            onChange={handleRadioChange}
          />
          <span className="ml-2  text-sm font-medium">前期</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="period"
            value="mid"
            className="text-indigo-600"
            checked={selectedValue === 'mid'}
            onChange={handleRadioChange}
          />
          <span className="ml-2  text-sm font-medium">中期</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="period"
            value="late"
            className="text-indigo-600"
            checked={selectedValue === 'late'}
            onChange={handleRadioChange}
          />
          <span className="ml-2  text-sm font-medium">后期</span>
        </label>
      </div>

      <label className="mt-2 block text-sm font-medium text-gray-700">
        您的手牌
      </label>
      <div className="mt-2 flex">
        <PlayerCard
          card={item1}
          choosed={false}
          onChoose={() => {
            setChoosingCard('1');
            removeSelectCard(item1);
            setShowChoose(!showChoose);
            setItem1(null);
          }}
        ></PlayerCard>
        <PlayerCard
          card={item2}
          choosed={false}
          onChoose={() => {
            setChoosingCard('2');
            removeSelectCard(item2);
            setShowChoose(!showChoose);
            setItem2(null);
          }}
        ></PlayerCard>
      </div>
      <div className="mb-4 mt-4">
        <label className="block text-sm font-medium text-gray-700">
          您的BB数
        </label>
        <div className="mt-2">
          <input
            id="bbInput"
            type="text"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm font-medium placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            value={bbs}
            placeholder="当前bb数"
            onChange={handleBBsChange}
          />
        </div>
      </div>
      <div className="mt-4 text-sm font-medium">您的位置</div>
      <Sit handlePositionChange={handlePositionChange}></Sit>
      <div className="mt-2 flex h-8 items-center rounded-lg bg-blue-600 px-4 text-center text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
        <span className="flex w-full justify-center" onClick={submitToGpt}>提 交</span>
      </div>
      <ChatBox chats={chatsarr}></ChatBox>

      <div className=' mt-4 p-4 flex flex-row mx-auto bg-sky-300'>
          <div>行动: {airesult}</div>
      </div>
      <PokerChoose
        isShow={showChoose}
        choosedCards={choosedCards}
        onCardChoose={onCardChoose}
      />
    </div>
  );
}