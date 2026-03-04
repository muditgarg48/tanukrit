import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Showcase from "./sections/Showcase";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import SectionWrapper from "./components/SectionWrapper";

function App() {
  return (
    <main className="font-body selection:bg-accent/30 selection:text-primary overflow-x-hidden bg-stone-100">
      <Navbar />
      <Hero />
      <SectionWrapper data-nav-theme="light">
        <Introduction />
      </SectionWrapper>
      <SectionWrapper data-nav-theme="light">
        <Showcase />
      </SectionWrapper>
      <SectionWrapper data-nav-theme="light">
        <Testimonials />
      </SectionWrapper>
      <SectionWrapper data-nav-theme="dark" full={true}>
        <Contact />
      </SectionWrapper>
      <Footer />
    </main>
  );
}

export default App;