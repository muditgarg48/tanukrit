import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import Hero from "./sections/Hero";

const Showcase = lazy(() => import("./sections/Showcase"));
const Introduction = lazy(() => import("./sections/Introduction"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

function App() {
  return (
    <main className="font-body selection:bg-primary/30 selection:text-white overflow-x-hidden bg-primary">
      <Navbar />
      <FloatingActions />
      <Hero />
      <Suspense fallback={null}>
        <Showcase />
        <Introduction />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;