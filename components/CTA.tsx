import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-4">
          <div className="w-16 h-1 bg-white/30 mx-auto mb-2"></div>
          <div className="w-10 h-1 bg-white/50 mx-auto"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">From Employment To Empowerment</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto opacity-95 italic">
          &quot;Shivaji Maharaj didn&apos;t seek a job, he built an Empire.&quot;
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of students already learning with us. Start your journey today!
        </p>
        
        {/* Benefits List */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Industry-Ready Skills</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Hands-on Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Community Support</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contribute"
            className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition shadow-lg"
          >
            Contribute
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/courses"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary transition"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
