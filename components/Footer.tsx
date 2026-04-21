import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {/* About Section - Full Width on Mobile */}
          <div className="mb-8 md:mb-0 md:col-span-2 lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/images/aarti_logo.jpeg"
                alt="AARTI Logo"
                width={50}
                height={55}
                className="h-12 w-auto"
              />
              <div>
                <span className="text-xl font-bold text-white block">AARTI</span>
                <p className="text-xs text-gray-400">Aausaheb Research & Training Institute</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              A Youth Empowerment Movement — Train, Transform, Triumph. Empowering youth through AI-driven skills, innovation, and entrepreneurship.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Aausaheb-Research-Training-Institute/61586991984112/"
                target="_blank"
                rel="noreferrer"
                aria-label="AARTI on Facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/aartiofficialcenter/"
                target="_blank"
                rel="noreferrer"
                aria-label="AARTI on Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3.5A4.5 4.5 0 107 12a4.5 4.5 0 005-4.5zm0 2A2.5 2.5 0 1110.5 12 2.5 2.5 0 0112 9.5zm4.75-4.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Two Column Layout for Quick Links and Support on Mobile */}
          <div className="grid grid-cols-2 md:contents gap-6 md:gap-8 mb-8 md:mb-0">
            {/* Quick Links */}
            <div className="text-left">
              <h4 className="text-lg font-bold mb-4 md:mb-6">Quick Links</h4>
              <ul className="space-y-0 text-sm md:text-base">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    Our Courses
                  </Link>
                </li>
                <li>
                  <Link href="/promoters" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    Promoters
                  </Link>
                </li>
                <li>
                  <Link href="/instructors" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    Educators
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    News &amp; Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="text-left">
              <h4 className="text-lg font-bold mb-4 md:mb-6">Support</h4>
              <ul className="space-y-0 text-sm md:text-base">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition block" style={{ lineHeight: '2.2' }}>
                    Scholarships & Aid
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter - Full Width on Mobile */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new courses, programs, and special offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary border border-gray-700"
              />
              <button
                type="submit"
                className="w-full bg-secondary text-white px-4 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AARTI — Aausaheb Research and Training Institute. All rights reserved.</p>
          <p className="mt-2 text-sm">A Youth Empowerment Movement — Train, Transform, Triumph</p>
        </div>
      </div>
    </footer>
  );
}
