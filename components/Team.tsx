'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

export default function Team() {
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
  ];

  return (
    <section id="promoters" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Unified Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide block mb-2">
            Our Leadership
          </span>
          <div className="inline-block mb-3 sm:mb-4">
            <div className="w-16 h-1 bg-secondary/30 mx-auto mb-2"></div>
            <div className="w-10 h-1 bg-secondary/60 mx-auto"></div>
          </div>
          <h2 className="text-[24px] sm:text-3xl md:text-4xl font-bold text-black mb-0">
            Committed to Empowering Youth and Social Service
          </h2>
        </div>

        {/* Team Slider */}
        <div className="relative px-4 sm:px-6 md:px-12 lg:px-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            className="team-slider"
            slidesPerView={3}
            spaceBetween={30}
            loop
            navigation={true}
            speed={900}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 16 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 26 },
              1400: { slidesPerView: 4, spaceBetween: 32 },
            }}
          >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className="h-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden text-center transition-all duration-300 team-member-card h-full">
                <div className="relative z-[1] team-member-img">
                  <div
                    className="relative w-full overflow-hidden bg-[#f9f9f9] rounded-t-xl"
                    style={{ aspectRatio: '4/5' }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 576px) 90vw, (max-width: 992px) 45vw, 25vw"
                      className="object-cover team-member-image"
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
                <div className="team-member-info px-5 pb-6 pt-5">
                  <h3 className="team-member-name font-bold text-black">
                    {member.name}
                  </h3>
                  <p className="team-member-designation text-sm text-gray-500 mt-1.5">{member.designation}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

        {/* Custom Styles to Match Reference */}
        <style jsx global>{`
          .team-slider .swiper-slide {
            height: auto;
            display: flex;
          }
          
          .team-member-card {
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          @media (min-width: 992px) {
            .team-member-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1) !important;
            }
          }
          
          .team-member-img {
            position: relative;
            z-index: 1;
          }
          
          .team-member-image {
            filter: grayscale(30%);
            transition: filter 0.3s ease;
          }
          
          @media (min-width: 992px) {
            .team-member-card:hover .team-member-image {
              filter: grayscale(0%);
            }
          }
          
          .team-member-overlay {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            background: linear-gradient(180deg, rgba(30, 37, 47, 0) 0%, rgba(30, 37, 47, 0.6) 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 12px 12px 0 0;
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
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, 0.9);
            font-size: clamp(9px, 0.63vw, 12px);
            background-color: rgba(0, 0, 0, 0.3);
            transition: background-color 0.3s ease, border-color 0.3s ease;
          }
          
          .team-social-icon:hover {
            background-color: rgba(0, 0, 0, 0.6);
            border-color: rgba(255, 255, 255, 1);
          }
          
          .team-member-info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
            min-height: 80px;
          }
          
          .team-member-name {
            margin-bottom: 0;
            font-size: clamp(18px, 1.26vw, 22px);
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1.3;
          }
          
          .team-member-designation {
            margin-bottom: 0;
            color: #999;
            font-size: clamp(13px, 0.9vw, 14px);
            line-height: 1.4;
            font-weight: 900;
          }
          
          .team-slider {
            padding: 0 50px !important;
          }
          
          @media (max-width: 768px) {
            .team-slider {
              padding: 0 20px !important;
            }
          }
          
          @media (min-width: 992px) {
            .team-slider {
              padding: 0 80px !important;
            }
          }
          
          .team-slider-button-next,
          .team-slider-button-prev {
            color: #666 !important;
            width: 40px;
            height: 40px;
            margin-top: -20px;
          }
          
          .team-slider-button-next::after,
          .team-slider-button-prev::after {
            font-size: 20px;
            font-weight: 300;
          }
          
          @media (min-width: 992px) {
            .team-slider-button-next {
              right: -60px !important;
            }
            
            .team-slider-button-prev {
              left: -60px !important;
            }
          }
          
          .team-slider-button-next.swiper-button-disabled,
          .team-slider-button-prev.swiper-button-disabled {
            opacity: 0.2;
            cursor: not-allowed;
          }
          
          @media (max-width: 768px) {
            .team-slider-button-next,
            .team-slider-button-prev {
              width: 28px;
              height: 28px;
              margin-top: -14px;
            }
            
            .team-slider-button-next::after,
            .team-slider-button-prev::after {
              font-size: 16px;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
