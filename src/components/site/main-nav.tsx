import * as React from 'react';
import Image from 'next/image';

import { NavItem } from '@/types/nav';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <div className="flex max-w-[980px] items-center gap-2">
        <div className="relative h-12 w-12">
          <Image
            src={'https://voce.chat/apple-touch-icon.png'}
            fill
            alt="Vocechat Logo"
          />
        </div>
        <h1 className="text-2xl font-bold leading-tight tracking-tighter md:text-4xl">
          Vocechat Message Input Playground
        </h1>
      </div>
    </div>
  );
}
