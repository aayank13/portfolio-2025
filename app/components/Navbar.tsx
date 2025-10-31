'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAME = 'Aayan Khan';

const NAV_LINKS = [
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
] as const;

interface NavLinkProps {
  href: string;
  name: string;
  isActive: boolean;
  onClick?: () => void;
}

function NavLink({ href, name, isActive, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative flex items-center py-2 px-3 text-(--color-text-primary) text-base font-bold leading-6 cursor-pointer no-underline border-b-[5px] transition-all duration-200 ${
        isActive 
          ? 'border-(--color-primary-red)' 
          : 'border-transparent hover:border-(--color-primary-red)'
      }`}
    >
      {name}
    </Link>
  );
}

function HamburgerButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span
        className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(prev => !prev);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-1000 bg-white">
      <div className="max-w-6xl lg:mx-10 xl:mx-auto p-2 border-b border-(--color-border-gray)">
        <div className="flex items-stretch justify-between">
          {/* Name */}
          <Link href="/" className="flex items-center shrink-0 grow-0 py-2 px-3 border-b-[5px] border-transparent hover:border-(--color-primary-red) transition-all duration-200">
            <span className="text-2xl font-semibold italic leading-6 font-(family-name:--font-lora) text-(--color-text-black) no-underline">
              {NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-stretch ml-auto">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                name={link.name}
                isActive={pathname === link.href}
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center ml-auto py-2 px-3">
            <HamburgerButton isOpen={isMenuOpen} onClick={handleMenuToggle} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <nav className="flex flex-col max-w-3xl mx-auto" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                name={link.name}
                isActive={pathname === link.href}
                onClick={handleMenuClose}
              />
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
