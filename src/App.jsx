import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import FloatingActions from "./components/FloatingActions";
import Hero from "./sections/Hero";
import Ribbon from "./components/Ribbon";
import { CONTENT } from "./constants/content";
import LoadingSection from "./components/LoadingSection";

const BrandStory = lazy(() => import("./sections/BrandStory"));
const Showcase = lazy(() => import("./sections/Showcase"));
const Introduction = lazy(() => import("./sections/Introduction"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const FAQ = lazy(() => import("./sections/FAQ"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

function App() {
  return (
    <main className="font-body selection:bg-primary/30 selection:text-white overflow-x-hidden bg-primary">
      <Navbar />
      <FloatingActions />
      <Hero />
      <Suspense fallback={<LoadingSection className="min-h-[60vh]" />}>
        <BrandStory />
      </Suspense>
      <Ribbon text={CONTENT.ribbons.brandStoryToShowcase} />
      <Suspense fallback={<LoadingSection className="min-h-[80vh]" />}>
        <Showcase />
      </Suspense>
      <Suspense fallback={<LoadingSection className="min-h-[60vh]" />}>
        <Introduction />
      </Suspense>
      <Suspense fallback={<LoadingSection className="min-h-[40vh]" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingSection className="min-h-[40vh]" />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<LoadingSection className="min-h-[40vh]" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<LoadingSection className="min-h-[20vh]" />}>
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;