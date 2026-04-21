import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Promoters from "@/components/Promoters";

export default function PromotersPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-primary py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-4">Our Promoters</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 text-center max-w-3xl mx-auto">
              Meet the dedicated leadership team committed to empowering youth and serving the community through education and skill development.
            </p>
          </div>
        </section>

        <Promoters />
      </main>
      <Footer />
    </>
  );
}

