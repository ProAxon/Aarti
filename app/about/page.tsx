import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary py-8 sm:py-12 md:py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3">About AARTI</h1>
            <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto text-[#fdebdc] font-normal">
              Aausaheb Research and Training Institute — A Youth Empowerment Movement
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Legacy Section */}
              <div className="mb-16 relative overflow-hidden rounded-3xl">
                {/* Background */}
                <div className="absolute inset-0 bg-white rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 md:px-12">
                  {/* Header */}
                  <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                      <div className="w-20 h-1 bg-white/30 mx-auto mb-2"></div>
                      <div className="w-12 h-1 bg-white/50 mx-auto"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight heading">
                      Aausaheb&apos;s Legacy
                    </h2>
                    <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
                    <p className="text-lg sm:text-xl md:text-2xl text-center mb-2 font-normal leading-relaxed max-w-3xl mx-auto text-gray-700">
                      &quot;From Jijau&apos;s Sanskar to AI-driven Skills — Shaping Brave, Bright, and Self-Reliant Minds&quot;
                    </p>
                  </div>

                  {/* Cards Grid */}
                  <div className="space-y-5">
                    <div className="group card bg-white backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border border-[#fdf2e9]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1.5 group-hover:text-primary/90 transition-colors">
                            Instilled Courage and Discipline
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Foundation of strength and resilience; today reflected in entrepreneurial mindset and project ownership.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group card bg-white backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border border-[#fdf2e9]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1.5 group-hover:text-primary/90 transition-colors">
                            Nurtured the Dream of Swaraj
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Vision of self-reliance; now reborn as Tech Swaraj through AI, robotics, and innovation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group card bg-white backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border border-[#fdf2e9]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1.5 group-hover:text-primary/90 transition-colors">
                            Guided Shivaji with Wisdom and Compassion
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Model of mentorship; today embodied in value-based learning and emotional intelligence.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group card bg-white backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border border-[#fdf2e9]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1.5 group-hover:text-primary/90 transition-colors">
                            Inspired Multilingual and Scholarly Growth
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Symbol of intellect; today seen in digital fluency, creative thinking, and communication excellence.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group card bg-white backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 border border-[#fdf2e9]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-1.5 group-hover:text-primary/90 transition-colors">
                            Empowered Generations through Sanskar and Vision
                          </h3>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            Her timeless influence continues through youth empowerment, ethics, and lifelong learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vision Section */}
              <div className="mb-12 sm:mb-16 md:mb-20 relative overflow-hidden mt-8 sm:mt-12">
                {/* Background with soft gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fef8f5] to-[#fdf2e9]/30 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10 py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">Our Vision</h2>
                    <div className="w-20 h-1 bg-primary/50 mx-auto mb-6 sm:mb-8"></div>
                    <div className="max-w-3xl mx-auto">
                      <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">All Youth</h3>
                      <p className="text-base sm:text-lg md:text-xl text-paragraph text-center leading-[1.75] font-normal">
                        To <strong className="font-bold">empower all youth</strong>, inspired by the legacy of Chhatrapati Maharaj, 
                        to become skilled, innovative, and entrepreneurial professionals — confident in their abilities, 
                        driving <strong className="font-bold">socio-economic growth</strong>, and contributing meaningfully to the <strong className="font-bold">progress of society and nation</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Challenges Section */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <div className="inline-block mb-4">
                    <div className="w-16 h-1 bg-secondary/30 mx-auto mb-2"></div>
                    <div className="w-10 h-1 bg-secondary/50 mx-auto"></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Challenges Faced by Today&apos;s Youth
                  </h2>
                  <div className="w-24 h-1 bg-secondary/50 mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  <div className="group relative bg-gradient-to-br from-red-50 to-red-100/50 border-l-4 border-red-500 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">Skill Gap</h3>
                      <p className="text-[#555] text-sm md:text-base leading-[1.5]">
                        Insufficient practical, hands-on skilling education opportunities leave many youth underprepared for today&apos;s workforce.
                      </p>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-500 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-4 group-hover:text-orange-600 transition-colors">Skill Employability</h3>
                      <p className="text-[#555] text-sm md:text-base leading-[1.5]">
                        Many graduates lack industry-relevant skills, limiting their ability to secure meaningful employment and career growth.
                      </p>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 border-l-4 border-blue-500 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">Industry–Academia Collaboration</h3>
                      <p className="text-[#555] text-sm md:text-base leading-[1.5]">
                        Insufficient collaboration between academia and industry leaves curricula disconnected from real-world needs.
                      </p>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-br from-yellow-50 to-yellow-100/50 border-l-4 border-yellow-500 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors">Infrastructure</h3>
                      <p className="text-[#555] text-sm md:text-base leading-[1.5]">
                        Lack of modern cloud IT infrastructure and learning facilities limits access to quality skill-based education.
                      </p>
                    </div>
                  </div>
                  <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100/50 border-l-4 border-purple-500 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden md:col-span-2 lg:col-span-1">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-black mb-4 group-hover:text-purple-600 transition-colors">Digital Access Gap</h3>
                      <p className="text-[#555] text-sm md:text-base leading-[1.5]">
                        Unequal access to digital tools, connectivity, and online learning resources widens the divide between urban and rural youth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Section - temporarily commented as requested */}
              {/*
              <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-2xl text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">From Employment To Empowerment</h2>
                <p className="text-xl italic">
                  &quot;Shivaji Maharaj didn&apos;t seek a job, he built an Empire.&quot;
                </p>
              </div>
              */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
