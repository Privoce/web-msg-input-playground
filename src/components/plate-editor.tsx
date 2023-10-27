'use client';

// import React, { useRef } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Plate } from '@udecode/plate-common';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';
import { useLocalstorageState } from 'rooks';

import { MentionData } from '@/lib/plate/mentionables';
import { plugins } from '@/lib/plate/plate-plugins';
import { getMessageFromPlateValues, ParagraphInput } from '@/lib/utils';
import { Editor } from '@/components/plate-ui/editor';
import { MentionCombobox } from '@/components/plate-ui/mention-combobox';
import { MessageWithMentions } from '@/app/page';

import { EmojiDropdownInput } from './plate-ui/emoji-dropdown-input';

const initialValue = [
  {
    id: '1',
    type: ELEMENT_PARAGRAPH,
    children: [{ text: '' }],
  },
];
type Props = {
  mentionData: MentionData[];
  debug?: boolean;
  id: string;
  placeholder: string;
  sendMessage: (input: MessageWithMentions) => void;
};
export default function PlateEditor({
  mentionData,
  debug = false,
  placeholder,
  id,
  sendMessage,
}: Props) {
  const editorContainerRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [input, setInput] = useLocalstorageState(id, initialValue);
  useEffect(() => {
    setMounted(true);
  }, []);
  const handleSendMessage = () => {
    const text = getMessageFromPlateValues(input as ParagraphInput[]);
    sendMessage(text);
  };
  if (!mounted) return null;
  return (
    <>
      <div ref={editorContainerRef} className="relative">
        <Plate
          id={id}
          onChange={(values) => {
            setInput(values);
          }}
          plugins={plugins}
          value={input}
          initialValue={initialValue}
        >
          <Editor
            sendMessage={handleSendMessage}
            className="px-2 py-3"
            autoFocus
            placeholder={placeholder}
          />
          <MentionCombobox items={mentionData} />
          <div className="absolute left-3 top-2">
            <EmojiDropdownInput />
          </div>
        </Plate>
      </div>
      {debug && (
        <div className="whitespace-pre p-2 text-xs">
          {JSON.stringify(input, null, 2)}
        </div>
      )}
    </>
  );
}
