'use client';

import { useState } from 'react';

import { MENTIONABLES } from '@/lib/plate/mentionables';
import PlateEditor from '@/components/plate-editor';

export type MessageWithMentions = {
  text: string;
  mentions: number[];
};
export default function IndexPage() {
  const [messages, setMessages] = useState<MessageWithMentions[]>([]);
  const handleSendMessage = (input: MessageWithMentions) => {
    setMessages((prev) => [...prev, input]);
  };
  const handleDelete = (idx: number) => {
    setMessages((prev) => prev.filter((_, i) => i !== idx));
  };
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className=" max-w-[1336px]">
        <div className="h-[600px] overflow-y-auto">
          <h2>Message List:</h2>
          <div className="flex flex-col gap-2">
            {messages.map((m, idx) => {
              return (
                <div
                  key={idx}
                  className="relative flex flex-col gap-2 rounded bg-slate-100 p-2 dark:bg-slate-900"
                >
                  <div className="flex-1 whitespace-pre bg-green-100 p-2 dark:bg-green-900">
                    {m.text}
                  </div>
                  {m.mentions.length > 0 && (
                    <span className="bg-fuchsia-200 p-2 dark:bg-fuchsia-800">
                      mentions:{' '}
                      <em className="text-xs not-italic">
                        {m.mentions.map((m) => m).join(',')}
                      </em>
                    </span>
                  )}
                  <button
                    className="absolute right-1 top-1"
                    onClick={handleDelete.bind(null, idx)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <PlateEditor
          debug={true}
          mentionData={MENTIONABLES}
          sendMessage={handleSendMessage}
          placeholder="Send to @Tristan"
          id="first-blood"
        />
      </div>
    </section>
  );
}
