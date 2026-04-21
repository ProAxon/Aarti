import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

const galleryImages = [
  { src: "/images/programs/program-1.png", alt: "Program highlight 1" },
  { src: "/images/programs/program-2.png", alt: "Program highlight 2" },
  { src: "/images/programs/program-3.png", alt: "Program highlight 3" },
  { src: "/images/programs/program-4.png", alt: "Program highlight 4" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary py-12 sm:py-16 md:py-20 relative overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">Gallery</h1>
            <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto text-[#fdebdc]">
              Glimpses of Aausaheb Research &amp; Training Institute&apos;s programs, initiatives, and youth empowerment journeys.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {galleryImages.map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
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

