'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

export default function Promoters() {
  const teamMembers = [
    {
      id: 1,
      image: '/images/promoters/member-1.png',
      name: 'Shri Mansingh Pawar',
      designation: 'President',
    },
    {
      id: 2,
      image: '/images/promoters/member-2.png',
      name: 'Shri Pramod Khairnar',
      designation: 'Vice President',
    },
    {
      id: 3,
      image: '/images/promoters/member-3.png',
      name: 'Wing Commander T. R. Jadhav',
      designation: 'Secretary (Retired Military)',
    },
    {
      id: 4,
      image: '/images/promoters/member-4.png',
      name: 'Shri Sunil Kirdak',
      designation: 'Secretary',
    },
    {
      id: 5,
      image: '/images/promoters/member-5.png',
      name: 'Smt. Anuradha Chavan',
      designation: 'Secretary',
    },
    {
      id: 6,
      image: '/images/promoters/member-6.png',
      name: 'Shri Satish Tupe',
      designation: 'Secretary',
    },
    {
      id: 7,
      image: '/images/promoters/member-7.png',
      name: 'Dr. R. S. Khiste',
      designation: 'Secretary',
    },
    {
      id: 8,
      image: '/images/promoters/member-8.png',
      name: 'Shri B. S. Khose',
      designation: 'Secretary',
    },
    {
      id: 9,
      image: '/images/promoters/member-9.png',
      name: 'Shri Rohit Suryavanshi',
      designation: 'Secretary',
    },
    {
      id: 10,
      image: '/images/promoters/member-10.png',
      name: 'Shri Rajesh More',
      designation: 'Secretary',
    },
    {
      id: 11,
      image: '/images/promoters/member-11.png',
      name: 'Shri Pradeep Patil',
      designation: 'Secretary',
    },
    {
      id: 12,
      image: '/images/promoters/member-12.png',
      name: 'Shri Subhash Shelke',
      designation: 'Secretary',
    },
    {
      id: 13,
      image: '/images/promoters/member-13.png',
      name: 'Shri Girish L. Ubale',
      designation: 'Secretary',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Our Promoters</span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
              Committed to Empowering Youth and Social Service
            </h2>
          </div>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
            >
              Join Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="px-6 md:px-12 lg:px-16">
        <Swiper
          modules={[Navigation, Autoplay]}
          className="promoters-slider"
          slidesPerView={3}
          spaceBetween={30}
          loop
          navigation
          speed={900}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            576: { slidesPerView: 2, spaceBetween: 20 },
            992: { slidesPerView: 3, spaceBetween: 26 },
            1400: { slidesPerView: 4, spaceBetween: 32 },
          }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-gray-100 overflow-hidden text-center transition-all duration-[400ms] hover:bg-primary group team-member-card">
                <div className="relative z-[1] team-member-img">
                  <div className="relative w-full overflow-hidden bg-white" style={{ aspectRatio: '308/360' }}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 576px) 90vw, (max-width: 992px) 45vw, 25vw"
                      className="object-contain p-2"
                    />
                    {/* Gradient Overlay */}
                    <div className="team-member-overlay"></div>
                    {/* Social Icons */}
                    <div className="team-member-socials">
                      <a
                        href="#"
                        className="team-social-icon"
                        aria-label="Facebook"
                      >
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="team-social-icon"
                        aria-label="Twitter"
                      >
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="team-social-icon"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="team-social-icon"
                        aria-label="Instagram"
                      >
                        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-member-info">
                  <h3 className="team-member-name">
                    {member.name}
                  </h3>
                  <p className="team-member-designation">{member.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        {/* Custom Styles to Match Reference */}
        <style jsx global>{`
          .team-member-card {
            border-radius: clamp(15px, 1.05vw, 20px);
          }
          
          .team-member-img {
            position: relative;
            z-index: 1;
          }
          
          .team-member-overlay {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            background: linear-gradient(180deg, rgba(30, 37, 47, 0) 0%, rgba(30, 37, 47, 0.6) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .team-member-card:hover .team-member-overlay {
            opacity: 1;
          }
          
          .team-member-socials {
            display: flex;
            gap: clamp(7px, 0.53vw, 10px);
            position: absolute;
            bottom: clamp(15px, 1.58vw, 30px);
            left: 50%;
            transform: translateX(-50%) translateY(100%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
            z-index: 10;
          }
          
          .team-member-card:hover .team-member-socials {
            opacity: 1;
            pointer-events: all;
            transform: translateX(-50%) translateY(0%);
          }
          
          .team-social-icon {
            width: clamp(26px, 1.68vw, 32px);
            aspect-ratio: 1/1;
            border: 1px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: clamp(9px, 0.63vw, 12px);
          }
          
          .team-social-icon:hover {
            background-color: var(--primary-color, #2563eb);
            border-color: var(--primary-color, #2563eb);
          }
          
          .team-member-info {
            padding: clamp(16px, 1.16vw, 22px) 0;
          }
          
          .team-member-name {
            margin-bottom: 0;
            font-size: clamp(20px, 1.26vw, 24px);
            font-weight: 600;
            color: black;
            transition: color 0.4s ease;
          }
          
          .team-member-card:hover .team-member-name {
            color: white;
          }
          
          .team-member-designation {
            margin-bottom: 0;
            color: var(--paragraph-color, #666);
            transition: color 0.4s ease;
          }
          
          .team-member-card:hover .team-member-designation {
            color: white;
          }
          
          .promoters-slider .swiper-button-next,
          .promoters-slider .swiper-button-prev {
            color: var(--primary-color, #2563eb);
            background: white;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .promoters-slider .swiper-button-next:after,
          .promoters-slider .swiper-button-prev:after {
            font-size: 20px;
          }
          .promoters-slider .swiper-button-next:hover,
          .promoters-slider .swiper-button-prev:hover {
            background: var(--primary-color, #2563eb);
            color: white;
          }
        `}</style>
      </div>
    </section>
  );
}
