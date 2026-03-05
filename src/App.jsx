import Navbar from "./components/Navbar";
import ContentFrame from "./components/ContentFrame";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Showcase from "./sections/Showcase";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="font-body selection:bg-accent/30 selection:text-primary overflow-x-hidden bg-primary">
      <Navbar />
      <Hero />
      <ContentFrame>
        <Introduction />
        <Showcase />
        <Testimonials />
        <Contact />
      </ContentFrame>
      <Footer />
    </main>
  );
}

export default App;