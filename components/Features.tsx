'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const INITIAL_COUNT = 4;
const DESKTOP_BREAKPOINT = 768; // md breakpoint in Tailwind
const features = [
  {
    title: 'Career Guidance & Life Skills',
    description: 'Structured career counselling, aptitude mapping (DMIT), and E4 (English, Economics, Eloquence & Etiquette) development.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Technical Skills Development',
    description: 'Industry-aligned training in traditional and emerging sectors like EV, Solar, Construction, Drones, and more.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'AR/VR Lab Facility',
    description: 'Immersive, real-time practical training using AR/VR tools with over 1,500 skill-based courses across disciplines.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Centre of Excellence',
    description: 'Powered by AI, AIoT, 3D Printing & Robotics. Hands-on innovation through practical projects aligned with Industry 4.0.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Women Empowerment & Digital Literacy',
    description: 'Focused programs for young women and homemakers in digital literacy, online safety, and entrepreneurship to enable financial independence.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l-3 7 3-2 3 2-3-7zm0-2a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
  {
    title: 'Incubation & Start-up Support',
    description: 'Mentorship from concept to commercial success with prototype development and business planning support.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function Features() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);

  useEffect(() => {
    // Check if we're on desktop (md breakpoint and up)
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < DESKTOP_BREAKPOINT);
      // On desktop, always show all
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setShowAll(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // On desktop: always show all. On mobile: show 4 first, then all when expanded
  const displayedFeatures = (!isMobile || showAll) ? features : features.slice(0, INITIAL_COUNT);
  const hasMore = features.length > INITIAL_COUNT && isMobile;

  const handleCardClick = (index: number) => {
    // If clicking the same card, collapse it. Otherwise, expand the clicked card
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Unified Section Header - mobile-optimized hierarchy */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-secondary font-semibold text-xs uppercase tracking-[1.5px] block mb-2">
            Our Programs
          </span>
          <div className="inline-block mb-3 sm:mb-4">
            <div className="w-16 h-1 bg-secondary/30 mx-auto mb-2"></div>
            <div className="w-10 h-1 bg-secondary/60 mx-auto"></div>
          </div>
          <h2 className="text-[26px] sm:text-3xl md:text-4xl font-bold text-black leading-[1.3] max-w-[90%] mx-auto mb-4">
            Youth Empowerment Program
          </h2>
          <p className="text-[15px] sm:text-base md:text-lg leading-[1.7] text-[#555] sm:text-paragraph max-w-[92%] sm:max-w-2xl mx-auto mt-2.5">
            Comprehensive skill development programs designed to transform youth into confident professionals
          </p>
        </div>

        {/* Features Grid - show 4 first, then all on "View All Programs" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {displayedFeatures.map((feature, index) => {
            const isExpanded = expandedCardIndex === index;
            return (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`group border border-gray-100 p-4 md:p-8 rounded-[14px] md:rounded-2xl shadow-sm hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] active:brightness-[0.98] transition-all duration-300 touch-manipulation cursor-pointer ${
                  index % 2 === 0 ? 'bg-gray-50/40 md:bg-white' : 'bg-white'
                }`}
              >
                <div className="flex gap-3 md:block">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[16px] md:text-xl font-semibold text-black mb-1.5 md:mb-3 group-hover:text-primary transition-colors leading-snug">
                      {feature.title}
                    </h3>
                    <p className={`text-sm text-[#666] md:text-paragraph leading-[1.6] ${
                      isExpanded ? 'line-clamp-none' : 'line-clamp-2 md:line-clamp-none'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section end - mobile: expand/collapse toggle, desktop: direct link */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          {isMobile ? (
            // Mobile: show expand/collapse toggle
            showAll ? (
              <button
                type="button"
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-1.5 text-sm text-paragraph hover:text-primary transition-colors"
              >
                View Less Programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-1.5 text-sm text-paragraph hover:text-primary transition-colors"
              >
                View All Programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          ) : (
            // Desktop: always show link to courses
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 text-sm text-paragraph hover:text-primary transition-colors"
            >
              View Courses
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
