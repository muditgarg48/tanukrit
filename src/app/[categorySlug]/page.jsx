import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FloatingActions from "@/components/FloatingActions";
import Hero from "@/sections/Hero";
import BrandStory from "@/sections/BrandStory";
import Ribbon from "@/components/Ribbon";
import Showcase from "@/sections/Showcase";
import Introduction from "@/sections/Introduction";
import LandingHero from "@/components/LandingHero";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import { CONTENT } from "@/constants/content";
import { LANDING_CONTENT } from "@/constants/landingContent";

// 1. Tell Next.js which paths to pre-render statically (CRITICAL FOR SEO)
export async function generateStaticParams() {
  return Object.values(LANDING_CONTENT).map((item) => ({
    categorySlug: item.slug,
  }));
}

// 2. Generate unique Metadata for each slug (CRITICAL FOR SEO)
export async function generateMetadata({ params }) {
  const { categorySlug } = await params;
  const item = Object.values(LANDING_CONTENT).find((i) => i.slug === categorySlug);

  if (!item) return {};

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates: {
      canonical: `${CONTENT.seo.siteUrl}/${categorySlug}`,
    },
  };
}

export default async function Page({ params }) {
  const { categorySlug } = await params;
  
  // Find the content for this specific slug
  const landingData = Object.values(LANDING_CONTENT).find((i) => i.slug === categorySlug);
  
  // If slug doesn't exist in our constants, show 404
  if (!landingData) {
    notFound();
  }

  const categoryId = landingData.id;
  const categoryData = CONTENT.showcase.items.find((item) => item.id === categoryId);

  return (
    <main className="font-body selection:bg-primary/30 selection:text-white overflow-x-hidden bg-primary">
      <Navbar />
      <FloatingActions />
      <Hero />
      
      <LandingHero 
        title={landingData.title}
        paragraphs={landingData.paragraphs}
        images={categoryData.images}
        altText={`${landingData.title} - Tanukrit Custom Gift Hampers`}
      />

      <BrandStory />
      <Ribbon text={CONTENT.ribbons.brandStoryToShowcase} />
      
      <Showcase excludeId={categoryId} />
      
      <Introduction />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}