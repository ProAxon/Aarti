'use client';

import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Student — AI Skills Program',
    location: 'Pune, Maharashtra',
    image: '/images/users/user1.jpg',
    text: 'The hands-on approach and real-world projects helped me gain confidence. The AR/VR lab experience was incredible — I could visualize complex concepts easily.',
  },
  {
    name: 'Rahul Patil',
    role: 'Entrepreneur — Startup Incubation',
    location: 'Mumbai, Maharashtra',
    image: '/images/users/user2.jpg',
    text: 'The mentorship program transformed my idea into a viable business. The support from industry experts and access to prototyping facilities made all the difference.',
  },
  {
    name: 'Anjali Deshmukh',
    role: 'Graduate — Technical Skills',
    location: 'Aurangabad, Maharashtra',
    image: '/images/users/user3.jpg',
    text: 'Coming from a small town, I never thought I\'d get exposure to Industry 4.0 technologies. The Centre of Excellence opened doors I didn\'t know existed.',
  },
];

const MOBILE_BREAKPOINT = 768; // md breakpoint in Tailwind

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedTestimonials = isMobile && !showAll 
    ? testimonials.slice(0, 1) 
    : testimonials;
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Unified Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide block mb-2">
            Community Voices
          </span>
          <div className="inline-block mb-3 sm:mb-4">
            <div className="w-16 h-1 bg-secondary/30 mx-auto mb-2"></div>
            <div className="w-10 h-1 bg-secondary/60 mx-auto"></div>
          </div>
          <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold text-black leading-[1.3] mb-4">
            What Our Community Says
          </h2>
          <p className="text-base sm:text-lg text-paragraph max-w-2xl mx-auto">
            Real stories from students and entrepreneurs who transformed their futures through our programs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {displayedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 p-[28px] sm:p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              <div className="relative z-10">
                <div className="flex items-start mb-5 sm:mb-6">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0 border-2 border-gray-100 bg-gray-100" />
                  <div className="flex-1">
                    <h4 className="font-bold text-black mb-0.5 sm:mb-1 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 hidden md:block mt-0.5">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-paragraph text-[15px] sm:text-base leading-[1.6] relative pl-6 sm:pl-7">
                  {/* Small orange quote icon */}
                  <svg className="absolute left-0 top-0 w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <span className="block">{testimonial.text}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More / View Less Button - Mobile Only */}
        {isMobile && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 text-secondary font-semibold text-base hover:text-secondary/80 transition-colors active:scale-95 touch-manipulation"
            >
              {showAll ? (
                <>
                  View Less Testimonials
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  View More Testimonials
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
