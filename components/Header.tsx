'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      label: 'Home',
      href: '/',
      isActive: (path: string | null) => path === '/',
    },
    {
      label: 'About Us',
      href: '/about',
      isActive: (path: string | null) => path === '/about',
    },
    {
      label: 'Our Courses',
      href: '/courses',
      isActive: (path: string | null) => path === '/courses',
    },
    {
      label: 'Educators',
      href: '/instructors',
      isActive: (path: string | null) => path === '/instructors',
    },
    {
      label: 'Promoters',
      href: '/#promoters',
      // Treat Promoters as part of the home page section
      isActive: (path: string | null) => path === '/',
    },
    {
      label: 'Gallery',
      href: '/gallery',
      isActive: (path: string | null) => path === '/gallery',
    },
    {
      label: 'News & Blogs',
      href: '/blog',
      isActive: (path: string | null) =>
        path === '/blog' || (path ?? '').startsWith('/blog/'),
    },
    {
      label: 'Contact Us',
      href: '/contact',
      isActive: (path: string | null) => path === '/contact',
    },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handlePromotersClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If already on the homepage, smooth-scroll to the promoters section
    if (pathname === '/') {
      const element = document.getElementById('promoters');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }

    // If on another page, navigate to the homepage with hash
    router.push('/#promoters');
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-10">
            <Link href="/" className="flex items-center gap-4 sm:gap-3 flex-shrink-0 min-h-0">
              <Image
                src="/images/aarti_logo.jpeg"
                alt="AARTI Logo"
                width={60}
                height={66}
                className="h-11 sm:h-14 w-auto"
                priority
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-primary block">AARTI</span>
                <span className="text-xs text-paragraph">Aausaheb Research & Training Institute</span>
              </div>
              <span className="text-xl font-bold text-primary sm:hidden">AARTI</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-10">
              {navItems.map((item) => {
                const isPromoters = item.label === 'Promoters';
                const active = item.isActive(pathname);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={isPromoters ? handlePromotersClick : undefined}
                    className={`font-medium transition relative ${
                      active ? 'text-primary' : 'text-black hover:text-primary'
                    }`}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center justify-end flex-shrink-0">
              {/* Search input removed */}
              <Link
                href="/contribute"
                className="bg-secondary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-opacity-90 transition flex items-center shadow-md shadow-secondary/30"
              >
                Contribute
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button - centered vertically with logo row */}
            <button
              className="lg:hidden text-black min-w-[44px] min-h-[44px] flex items-center justify-center self-center shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu - Fixed Overlay */}
          {isMenuOpen && (
            <>
              {/* Backdrop - Only covers content below header */}
              <div 
                className="fixed inset-x-0 top-[73px] sm:top-[81px] bottom-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
              />
              
              {/* Menu Panel */}
              <div className="fixed inset-x-0 top-[73px] sm:top-[81px] bg-white z-50 lg:hidden shadow-xl max-h-[calc(100vh-73px)] sm:max-h-[calc(100vh-81px)] overflow-y-auto transform transition-transform duration-300 ease-out border-t border-gray-200">
                <div className="py-2">
                  {navItems.map((item) => {
                    const isPromoters = item.label === 'Promoters';
                    const isHome = item.label === 'Home';
                    // Don't show active state for Home and Promoters
                    const active = !isHome && !isPromoters && item.isActive(pathname);

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={(e) => {
                          if (isPromoters) handlePromotersClick(e);
                          setIsMenuOpen(false);
                        }}
                        className={`block font-medium transition-colors py-3.5 px-6 min-h-[44px] flex items-center text-gray-900 hover:bg-gray-50 border-b border-gray-100 ${
                          active ? 'text-primary' : ''
                        }`}
                        aria-current={active ? 'page' : undefined}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  
                  {/* Contribute Button - Integrated */}
                  <Link
                    href="/contribute"
                    onClick={() => setIsMenuOpen(false)}
                    className="block bg-secondary text-white px-6 py-3.5 font-semibold min-h-[44px] flex items-center justify-center mt-2 mx-4 rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    Contribute
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
