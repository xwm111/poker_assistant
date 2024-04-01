//德州比赛的位置，七人桌 sb,bb,utg,utg+1,mp,co,btn
//德州比赛的位置，八人桌 sb,bb,utg,utg+1,mp,mp+1,co,btn
//德州比赛的位置，九人桌 sb,bb,utg,utg+1,mp,mp+1,mp+2,co,btn,
'use client';
import React, { useState } from 'react';
export default function Sit({
  handlePositionChange,
}: {
  handlePositionChange: (position: string) => void;
}) {
  const data: { [key: string]: string[] } = {
    七人: ['SB', 'BB', 'UTG', 'UTG+1', 'MP', 'CO', 'BTN'],
    八人: ['SB', 'BB', 'UTG', 'UTG+1', 'MP', 'MP+1', 'CO', 'BTN'],
    九人: ['SB', 'BB', 'UTG', 'UTG+1', 'MP', 'MP+1', 'MP+2', 'CO', 'BTN'],
  };
  const [categories] = useState(Object.keys(data));
  const [selectedCategory, setSelectedCategory] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState('');
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const category = event.target.value;
    if (category === '') {
      console.log('xxx');
      return;
    }
    console.log(category);

    setSelectedCategory(category);
    setItems(data[category]);
    setSelectedItem('');
  };

  const handleItemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(event.target.value);
    handlePositionChange(selectedCategory + ',' + event.target.value);
  };
  return (
    <>
      <div className="mt-2 rounded-lg bg-gray-100 p-4">
        <p className="font-semibold">提示：</p>
        <ul className="mt-2 list-none text-sm font-medium">
          <li className="py-1">七人桌 sb,bb,utg,utg+1,mp,co,btn</li>
          <li className="py-1">八人桌 sb,bb,utg,utg+1,mp,mp+1,co,btn</li>
          <li className="py-1">九人桌 sb,bb,utg,utg+1,mp,mp+1,mp+2,co,btn</li>
        </ul>
      </div>

      <div className="mt-2 flex flex-col space-y-4">
      <select
        className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="" className="text-gray-500">
          牌桌人数
        </option>
        {categories.map((category) => (
          <option key={category} value={category} className="text-gray-700">
            {category}
          </option>
        ))}
      </select>

      <select
        className={`block w-full rounded-md border border-gray-300 bg-white px-4 py-2 shadow-sm focus:outline-none ${
          selectedCategory ? 'focus:ring-primary-500 focus:border-primary-500' : 'cursor-not-allowed text-gray-500'
        }`}
        value={selectedItem}
        onChange={handleItemChange}
        disabled={!selectedCategory}
      >
        <option value="" className="text-gray-500">
          位置
        </option>
        {items.map((item) => (
          <option key={item} value={item} className="text-gray-700">
            {item}
          </option>
        ))}
      </select>
    </div>
    </>
  );
}
