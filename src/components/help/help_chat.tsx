'use client';
import AI from '@/icons/AI.jpg';
import AskAI from '@/icons/Askai.png';
import Avatar from '@/icons/Avatar.jpg';

import { useChat } from 'ai/react';
import Image from 'next/image';
import Markdown from './markdown';

export default function HelpChat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      <div className="py-12 pb-52">
        {messages ? (
          messages.map((m, index) => (
            <div key={m.id}>
              {m.role === 'user' ? (
                <div className="flex flex-row-reverse items-start space-x-2 py-6">
                  <Image
                    src={Avatar}
                    width={40}
                    height={40}
                    alt="avatar"
                    className="rounded-full w-12 h-12 object-cover ml-2"
                  />
                  <div className="w-auto bg-slate-200 px-4 py-2 rounded-lg  text-slate-800">
                    <Markdown text={m.content} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-row  items-start space-x-2">
                  <Image
                    src={AI}
                    width={40}
                    height={40}
                    alt="avatar"
                    className={`rounded-full w-12 h-12 object-cover ${
                      index === messages.length - 1 ? 'animate-bounce' : ''
                    }`}
                  />
                  <div className="w-auto bg-primary px-4 py-2 rounded-lg  text-white">
                    <Markdown text={m.content} />
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <Image src={AskAI} width={300} height={300} alt="ask ai" />
            <h1>ASK AI</h1>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className=" ">
        <div className=" fixed bottom-0 bg-white w-full py-6 ">
          <input
            value={input}
            placeholder="Ask for help and then Press Enter"
            onChange={handleInputChange}
            className="border mx-auto w-[1450px] px-4 py-3 border-slate-400 rounded-md outline outline-secondary"
          />
        </div>
      </form>
    </div>
  );
}