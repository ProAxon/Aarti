'use client';

import Image from 'next/image';

export default function Programs() {
  const programs = [
    { id: 1, image: '/images/programs/program-1.png', alt: 'Program 1' },
    { id: 2, image: '/images/programs/program-2.png', alt: 'Program 2' },
    { id: 3, image: '/images/programs/program-3.png', alt: 'Program 3' },
    { id: 4, image: '/images/programs/program-4.png', alt: 'Program 4' },
  ];

  const marathaHostelWorks = [
    {
      id: 1,
      image: '/images/works/maratha-hostel-kotwalpura-aurangabad-maharashtra-hostel-for-boy-students-g00djlxmzr.avif',
      alt: 'Maratha Hostel, Kotwalpura Aurangabad — Exterior view',
    },
    {
      id: 3,
      image: '/images/works/download.jpeg',
      alt: 'Maratha Hostel archival photograph',
    },
    {
      id: 4,
      image: '/images/works/download (1).jpeg',
      alt: 'Maratha Hostel campus and surroundings',
    },
  ];

  return (
    <section id="programs" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-[#f5f7fa] programs-section">
      {/* Background Image + Themed Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[#f5f7fa]"
        style={{
          backgroundImage: 'url(/images/donations-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Light premium overlay */}
        <div className="absolute inset-0 bg-[#f5f7fa]/90"></div>
        {/* Top fade to blend with previous light section */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white via-white/20 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 bottom-0 w-[46.56vw] max-w-[886px] bg-[#f5f7fa]/90 rounded-l-[999px] z-[-1] hidden lg:block programs-decorative"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Unified Section Header */}
        <div className="text-center mb-8 sm:mb-12 max-w-[660px] mx-auto">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide block mb-2">
            Our Social Initiatives
          </span>
          <div className="inline-block mb-3 sm:mb-4">
            <div className="w-16 h-1 bg-secondary/30 mx-auto mb-2"></div>
            <div className="w-10 h-1 bg-secondary/60 mx-auto"></div>
          </div>
          <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold text-black leading-[1.3]">
            Towards Social Development
          </h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 program-card"
            >
              <div className="relative mb-4 sm:mb-6 program-image-container overflow-hidden rounded-xl">
                <div className="relative w-full" style={{ aspectRatio: '282/188' }}>
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Section Header */}
        <div className="text-center mt-12 sm:mt-16 mb-8 sm:mb-12">
          <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold text-black leading-[1.3]">
            Towards Maratha Hostel
          </h2>
        </div>

        {/* Maratha Hostel Works Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {marathaHostelWorks.map((work) => (
            <div
              key={work.id}
              className="group bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 program-card w-full"
            >
              <div className="relative mb-4 sm:mb-6 program-image-container overflow-hidden rounded-xl">
                <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300 rounded-xl"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .programs-section {
          position: relative;
          z-index: 1;
        }
        
        .programs-decorative {
          left: auto;
        }
        
        @media screen and (max-width: 991px) {
          .programs-decorative {
            top: 20%;
          }
        }
        
        @media screen and (max-width: 479px) {
          .programs-decorative {
            top: 35%;
          }
        }
        
        .program-card {
          transition: border-color 0.4s ease;
        }
        
        .program-card:hover {
          border-color: var(--primary-color, #2563eb);
        }
        
        .program-image-container {
          margin-bottom: clamp(20px, 1.84vw, 35px);
        }
        
        .hostel-image-container {
          margin-bottom: 0;
        }
        
        @media (max-width: 640px) {
          .program-card {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
          }
        }
      `}</style>
    </section>
  );
}

