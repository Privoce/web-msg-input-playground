import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { MessageWithMentions } from '@/app/page';

import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
type MentionInput = {
  type: 'mention';
  value: string;
  uid: string;
  id: string;
};
export type ParagraphInput = {
  id: string;
  type: 'p';
  children: ({ text: string } | MentionInput)[];
};
export function getMessageFromPlateValues(
  values: ParagraphInput[]
): MessageWithMentions {
  const mentions: number[] = [];
  const text = values
    .map((node) => {
      return node.children
        .map((child) => {
          if ('text' in child) {
            return child.text;
          } else {
            mentions.push(+child.uid);
            return ` @${child.uid} `;
          }
        })
        .join('');
    })
    .join('\n');
  return {
    text,
    mentions,
  };
}

export const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
