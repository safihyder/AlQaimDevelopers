import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HeroContent from "@/components/HeroContent";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <HeroContent />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
