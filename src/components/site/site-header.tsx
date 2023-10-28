import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { MainNav } from '@/components/site/main-nav';
import { ThemeToggle } from '@/components/site/theme-toggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-4">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={20}
                height={20}
                src={'/github.svg'}
                alt="search icon"
              />
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
