'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      className="flex"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <span className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
        🌞
      </span>
      <span className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
        🌙
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
