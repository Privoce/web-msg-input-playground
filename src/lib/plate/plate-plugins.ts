import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
} from '@udecode/plate-break';
import { createComboboxPlugin } from '@udecode/plate-combobox';
import { createPlugins, RenderAfterEditable } from '@udecode/plate-common';
import { createEmojiPlugin } from '@udecode/plate-emoji';
import {
  createMentionPlugin,
  ELEMENT_MENTION,
  ELEMENT_MENTION_INPUT,
} from '@udecode/plate-mention';
import { createNodeIdPlugin } from '@udecode/plate-node-id';
import {
  createParagraphPlugin,
  ELEMENT_PARAGRAPH,
} from '@udecode/plate-paragraph';
import { createTrailingBlockPlugin } from '@udecode/plate-trailing-block';

import { EmojiCombobox } from '@/components/plate-ui/emoji-combobox';
import { MentionElement } from '@/components/plate-ui/mention-element';
import { MentionInputElement } from '@/components/plate-ui/mention-input-element';
import { ParagraphElement } from '@/components/plate-ui/paragraph-element';

export const plugins = createPlugins(
  [
    // Nodes
    createParagraphPlugin(),
    createMentionPlugin({
      options: {
        createMentionNode: (item) => {
          const { key, text } = item;
          return { value: text, uid: key };
        },
      },
    }),

    // Functionality
    createComboboxPlugin(),
    createEmojiPlugin({
      renderAfterEditable: EmojiCombobox as RenderAfterEditable,
    }),
    createExitBreakPlugin({
      options: {
        rules: [
          {
            hotkey: 'mod+enter',
          },
          {
            hotkey: 'mod+shift+enter',
            before: true,
          },
        ],
      },
    }),
    createNodeIdPlugin(),

    createSoftBreakPlugin({
      options: {
        rules: [{ hotkey: 'shift+enter' }],
      },
    }),
    createTrailingBlockPlugin({
      options: { type: ELEMENT_PARAGRAPH },
    }),
  ],
  {
    components: {
      [ELEMENT_MENTION]: MentionElement,
      [ELEMENT_MENTION_INPUT]: MentionInputElement,
      [ELEMENT_PARAGRAPH]: ParagraphElement,
    },
  }
);
