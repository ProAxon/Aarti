import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const educators = [
  {
    id: 1,
    name: 'NIIT Foundation',
    role: 'Education & Skill Development Partner',
    image: '/images/educators/niit-foundation.png',
    website: 'https://niitfoundation.org/',
    highlights: [
      'Presence across 24 states in India',
      '551 partner NGO centres across the country',
      '3.5+ lakh students directly impacted',
      '2,130+ trainers trained and certified',
      '47,600+ students placed in organized sectors',
      '6,450 differently abled students supported',
    ],
    bio: 'NIIT Foundation is a not-for-profit education society (NGO) set up by the promoters of NIIT in 2004. It implements CSR programs and builds partnerships with NGOs to drive sustainable skill development and education initiatives across underserved communities in India.',
  },
  {
    id: 2,
    name: 'Vikalp Guru',
    role: 'Career Guidance & Technical Empowerment Partner',
    image: '/images/educators/vikalp-guru.png',
    website: 'https://vikalpaguru.com/',
    highlights: [
      'Educational and technical empowerment organization focused on building industry-ready professionals',
      'Provides structured career guidance, mentorship, and skill development initiatives',
      'Dedicated to improving employability for youth across rural and urban communities',
      'Committed to building a sustainable ecosystem for skills, employment, and professional growth',
    ],
    bio: 'Vikalp Guru is an educational and technical empowerment organization headquartered in Chhatrapati Sambhajinagar, Maharashtra. The platform combines AI-driven career counselling with expert mentorship to guide students from stream selection through college admission and professional growth.',
  },
];

export default function InstructorsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 border-4 border-white rounded-full" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">Our Educators</h1>
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>›</span>
              <span>Educators</span>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-paragraph text-lg">
                AARTI collaborates with leading education and career guidance partners to deliver quality training,
                mentorship, and employability support for youth across Maharashtra and India.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {educators.map((educator) => (
                <div
                  key={educator.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <div className="relative h-48 sm:h-56 bg-[#faf8f5] flex items-center justify-center p-6">
                    <Image
                      src={educator.image}
                      alt={educator.name}
                      width={320}
                      height={120}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-black mb-1">{educator.name}</h3>
                    <p className="text-secondary font-medium mb-4">{educator.role}</p>
                    <p className="text-paragraph mb-5 text-sm leading-relaxed">{educator.bio}</p>
                    <ul className="space-y-2 mb-6">
                      {educator.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-paragraph">
                          <span className="text-secondary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={educator.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center text-primary font-semibold hover:text-secondary transition"
                    >
                      Visit Website
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
