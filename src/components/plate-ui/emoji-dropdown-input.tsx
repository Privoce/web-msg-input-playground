import React from 'react';
import Image from 'next/image';
import {
  EmojiDropdownMenuOptions,
  useEmojiDropdownMenuState,
} from '@udecode/plate-emoji';

import { EmojiToolbarDropdown } from '@/components/plate-ui/emoji-toolbar-dropdown';

import { emojiCategoryIcons, emojiSearchIcons } from './emoji-icons';
import { EmojiPicker } from './emoji-picker';

type EmojiDropdownMenuProps = {
  options?: EmojiDropdownMenuOptions;
};

export function EmojiDropdownInput({
  options,
  ...props
}: EmojiDropdownMenuProps) {
  const { isOpen, setIsOpen, emojiPickerState } =
    useEmojiDropdownMenuState(options);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <EmojiToolbarDropdown
      control={
        <button className="relative h-6 w-6" onClick={handleClick} {...props}>
          <Image fill src={'/smile.emoji.svg'} alt="smile emoji" />
        </button>
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <EmojiPicker
        {...emojiPickerState}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        icons={{
          categories: emojiCategoryIcons,
          search: emojiSearchIcons,
        }}
        settings={options?.settings}
      />
    </EmojiToolbarDropdown>
  );
}
