import Navbar from "@/components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import Hero from "@/sections/Hero";
import Ribbon from "@/components/Ribbon";
import { CONTENT } from "@/constants/content";
import BrandStory from "@/sections/BrandStory";
import Showcase from "@/sections/Showcase";
import Introduction from "@/sections/Introduction";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="font-body selection:bg-primary/30 selection:text-white overflow-x-hidden bg-primary">
      <Navbar />
      <FloatingActions />
      <Hero />
      <BrandStory />
      <Ribbon text={CONTENT.ribbons.brandStoryToShowcase} />
      <Showcase />
      <Introduction />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}