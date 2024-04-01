import { Fragment } from "react";

import type { Chat } from '@/app/lib/definitions';
export default function ChatBox({chats}:{chats:Chat[]}) {
  // const chats = [
  //   {
  //     question: 'What is the weather today?',
  //     answer: "It's sunny and warm today.",
  //   },
  //   {
  //     question: 'What is the weather tomorrow?',
  //     answer: "It's going to be cloudy and cool tomorrow.",
  //   },
  // ];
  return (
    <>
      <div className="mx-auto my-4 flex max-w-md flex-col space-y-2 rounded-lg bg-gray-100 p-4 shadow">
        {chats.map((chat, index) => {
          return (
            <Fragment key={index+'a'}>
              <div className="flex items-center justify-start" >
                <div className="max-w-xs rounded-lg bg-white px-4 py-2 shadow lg:max-w-md">
                  <p className="text-gray-800">{chat.question}</p>
                </div>
              </div>
              <div className="flex items-center justify-end" >
                <div className="max-w-xs rounded-lg bg-blue-100 px-4 py-2 shadow lg:max-w-md">
                  <p className="text-gray-800">{chat.answer}</p>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
