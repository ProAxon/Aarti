import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Courses from "@/components/Courses";
import Team from "@/components/Team";
import Programs from "@/components/Programs";
import InstagramFeed from "@/components/InstagramFeed";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Team />
        <Programs />
        <InstagramFeed />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
