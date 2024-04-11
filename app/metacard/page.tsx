'use client';

import { useState } from 'react';

interface card {
  name: string;
  front: boolean;
  lable: string;
}
function shuffleArray(array: card[]) {
  for (let i = array.length - 1; i > 0; i--) {
    // 生成一个随机索引
    const j = Math.floor(Math.random() * (i + 1));
    // 交换当前元素与随机选中的元素
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Page() {
  const cards_static: card[] = [
    {
      name: 'bichi',
      front: false,
      lable: 'choose me',
    },
    {
      name: 'yubao',
      front: false,
      lable: 'choose me',
    },
    {
      name: 'apple jiaer',
      front: false,
      lable: 'choose me',
    },
    {
      name: 'ziyue',
      front: false,
      lable: 'choose me',
    },
    {
      name: 'effy',
      front: false,
      lable: 'choose me',
    },
  ];

  const shuffleArraycards = shuffleArray(cards_static);
  console.log(shuffleArraycards);

  const [cards, setCards] = useState<card[]>(shuffleArraycards);
  const showname = (c: card) => {
    
    const newcards: card[] = [];

    cards.forEach((card) => {
      if (card.name === c.name) {
        card.lable = card.name;
      }
      newcards.push(card);
    });
    setCards(newcards);
    if(c.name === 'effy'){
        alert("you got me!!! you win!!")
        setCards( shuffleArray(cards_static))
    }else{
        alert("haha I am not here")
    }
  };

  return (
    <div>
      <div className=" grid grid-cols-8 gap-4 bg-sky-500 p-4  ">
        {cards.map((v, k) => {
          return (
            <button
              key={k}
              className="m-auto flex  h-36 w-24 items-center justify-center bg-red-400 hover:cursor-pointer  "
              onClick={() => {
                showname(v);
              }}
            >
              {v.lable}
            </button>
          );
        })}
      </div>
      <div>where is effy? can you find me?</div>
    </div>
  );
}
