import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-4 md:pt-6 pb-[90px] overflow-hidden">
      {/* Subtle gradient behind text column */}
      <div className="absolute inset-0 lg:left-0 lg:right-auto lg:w-[55%] bg-gradient-to-r from-primary/[0.03] via-transparent to-transparent pointer-events-none -z-10" aria-hidden />
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-pink-400/30 to-secondary/30 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content - 55% on desktop */}
          <div className="lg:w-[55%] text-center lg:text-left pt-8 md:pt-10 lg:pt-12">
            {/* Decorative image removed - was empty/not visible
            <div className="mb-2 inline-block">
              <Image
                src="/images/fun.png"
                alt="Decorative"
                width={60}
                height={30}
                className="mx-auto lg:mx-0 w-10 h-auto"
              />
            </div>
            */}
            <h1 className="text-[28px] leading-[1.25] md:text-4xl md:leading-tight lg:text-5xl xl:text-6xl font-bold text-black mb-6">
              The Future Belongs to{' '}
              <br className="sm:hidden" />
              Skilled and{' '}
              <br className="sm:hidden" />
              <span className="relative inline-block overflow-hidden">
                AI-Literate Minds
                {/* Title underline image commented out
                <Image
                  src="/images/title-line.png"
                  alt=""
                  width={200}
                  height={10}
                  className="absolute -bottom-2 left-0 w-full max-w-full object-contain"
                />
                */}
              </span>
            </h1>
            <p className="text-[15px] sm:text-base leading-[1.7] text-paragraph mb-3.5 max-w-xl mx-auto lg:mx-0">
              <strong>The sword of the 17th century was steel. The sword of the 21st century is skill.</strong>
            </p>
            <p className="text-[15px] sm:text-base leading-[1.7] text-paragraph mb-6 max-w-xl mx-auto lg:mx-0">
              The new forts of the modern world are innovation labs and skill centers.
              The 21st century rewards capability — not just degrees.
              Learn future-ready skills. Master the tools. Lead the change.
            </p>
            <div className="flex flex-col min-[480px]:flex-row min-[480px]:items-stretch gap-4 mb-8">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center min-h-[52px] min-[480px]:flex-1 py-[14px] px-8 rounded-full text-[15px] sm:text-base font-semibold bg-secondary text-white hover:bg-opacity-90 transition shadow-lg shadow-secondary/30"
              >
                Explore Courses
                <svg className="w-5 h-5 ml-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center min-h-[52px] min-[480px]:flex-1 py-[14px] px-8 rounded-full text-[15px] sm:text-base font-medium bg-white text-primary/90 border-2 border-primary/80 hover:bg-primary hover:text-white hover:border-primary transition"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators - aligned block, clear hierarchy */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">Why AARTI</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 min-h-[48px]">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800 leading-snug">Non-Profit</span>
                </div>
                <div className="flex items-center gap-3 min-h-[48px]">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800 leading-snug">Community</span>
                </div>
                <div className="flex items-center gap-3 min-h-[48px]">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800 leading-snug">Hands-on Labs</span>
                </div>
                <div className="flex items-center gap-3 min-h-[48px]">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-800 leading-snug">Placement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image - 45% on desktop */}
          <div className="lg:w-[45%] relative w-full">
            {/* Main Image */}
            <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:h-[620px]">
                <Image
                  src="/images/image.jpeg"
                  alt="AARTI Building"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-center rounded-3xl shadow-[0_18px_55px_rgba(0,0,0,0.14)]"
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto">
                  <span className="inline-block bg-black/70 text-white text-sm sm:text-base font-semibold px-4 py-2 rounded-lg backdrop-blur-sm">
                    Proposed building
                  </span>
                </div>
              </div>

              {/* Decorative shapes */}
              <Image
                src="/images/banner/shape1.png"
                alt=""
                width={150}
                height={150}
                className="absolute -top-10 -right-10 -z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
