import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import ContentFrame from "./components/ContentFrame";
import Hero from "./sections/Hero";
import Introduction from "./sections/Introduction";
import Showcase from "./sections/Showcase";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="font-body selection:bg-primary/30 selection:text-white overflow-x-hidden bg-primary">
      <Navbar />
      <FloatingActions />
      <Hero />
      <ContentFrame>
        <Showcase />
        <Introduction />
        <Testimonials />
        <Contact />
      </ContentFrame>
      <Footer />
    </main>
  );
}

export default App;