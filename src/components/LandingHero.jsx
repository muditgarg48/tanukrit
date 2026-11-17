"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ImageWithLoader from "./ImageWithLoader";
import ScrollIndicator from "./ScrollIndicator";
import LocationIndicator from "./LocationIndicator";
import { CONTENT } from "../constants/content";

const LandingHero = ({ title, paragraphs, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Restarts on every slide change, so a manual swipe/tap gets a full 5s before auto-advance
  useEffect(() => {
    const timer = setTimeout(slideNext, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, slideNext]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  // Shared by the mobile full-screen hero and the desktop card; same `sizes` so the browser fetches one file.
  const slides = (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={currentIndex}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.4 }
        }}
        className="absolute inset-0 touch-pan-y"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, { offset, velocity }) => {
          if (offset.x < -50 || velocity.x < -500) slideNext();
          else if (offset.x > 50 || velocity.x > 500) slidePrev();
        }}
      >
        <ImageWithLoader
          src={images[currentIndex]}
          alt={`${title} - Tanukrit Custom Gift Hampers`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={currentIndex === 0}
          draggable={false}
        />
      </motion.div>
    </AnimatePresence>
  );

  const arrowClass = "w-12 h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-primary border border-white/20 hover:bg-white transition-all duration-300";
  const arrows = (
    <>
      <button onClick={slidePrev} className={arrowClass} aria-label="Previous slide">
        <ChevronLeft size={24} />
      </button>
      <button onClick={slideNext} className={arrowClass} aria-label="Next slide">
        <ChevronRight size={24} />
      </button>
    </>
  );

  return (
    <>
    {/* Mobile: full-screen image hero, mirroring the homepage Hero */}
    <section data-nav-theme="dark" className="md:hidden relative h-svh overflow-hidden bg-primary pt-0!">
      <div className="absolute inset-0">{slides}</div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 z-30">
        <LocationIndicator variant="hero" />
      </div>
      {/* Edge arrows, styled like the dark-theme floating action button */}
      {[["left-3", slidePrev, ChevronLeft, "Previous slide"], ["right-3", slideNext, ChevronRight, "Next slide"]].map(([pos, onClick, Icon, label]) => (
        <button
          key={label}
          onClick={onClick}
          aria-label={label}
          className={`absolute ${pos} top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center text-white active:scale-90 transition-transform duration-300`}
        >
          {/* No bubble, so a shadow keeps the chevron visible on light photos */}
          <Icon size={34} strokeWidth={1.5} className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]" />
        </button>
      ))}

      <div className="absolute inset-x-0 bottom-0 z-20 p-6 pb-10 text-white pointer-events-none" aria-hidden>
        {/* Visual duplicate of the h1 below, which stays the single accessible heading */}
        <p className="text-4xl font-heading leading-tight mb-3">{title}</p>
        <p className="flex flex-col gap-1 text-[10px] uppercase tracking-[0.4em] font-medium text-white/80">
          {CONTENT.hero.tagline.map((line) => <span key={line}>{line}</span>)}
        </p>
        <div className="flex items-center gap-1 my-1">
          <span className="font-heading italic text-2xl text-white/80">By</span>
          {/* Logo art fills ~half its square canvas; negative margin trims the empty band */}
          <Image src={CONTENT.hero.logoSrc} alt="" sizes="128px" className="h-28 w-auto -my-7 -ml-1" />
        </div>
      </div>
    </section>

    <section data-nav-theme="light" className="relative md:min-h-screen flex items-center bg-white pt-16! md:pt-44! pb-16 md:pb-32 px-4 overflow-hidden border-b border-gray-50">
      {/* Ambient backdrop: blurred copy of the current slide, crossfading like the main Hero's rotating images */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            {/* Heavily blurred, so a small rendition is enough */}
            <Image src={images[currentIndex]} alt="" fill sizes="384px" quality={75} className="object-cover blur-3xl scale-125 opacity-50" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-white/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full min-w-0 flex flex-col md:flex-row gap-12 lg:gap-24 items-center">

        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:block"
          >
            {/* Brand tagline, borrowed from the main Hero */}
            <p className="hidden md:flex flex-wrap gap-x-3 text-xs uppercase tracking-[0.4em] font-medium text-primary/70 mb-6">
              {CONTENT.hero.tagline.map((line, i) => (
                <span key={line}>{i > 0 && <span className="mr-3" aria-hidden>·</span>}{line}</span>
              ))}
            </p>
            {/* Visually hidden on mobile (shown in the mobile hero) but kept for screen readers and SEO */}
            <h1 className="sr-only md:not-sr-only text-4xl md:text-6xl lg:text-7xl font-heading text-primary leading-tight">
              {title}
            </h1>
            <div className="hidden md:flex items-center gap-1 mt-2 mb-8">
              <span className="font-heading italic text-xl md:text-2xl text-primary/70">By</span>
              {/* Logo art fills ~half its square canvas; negative margin trims the empty band */}
              <Image
                src={CONTENT.navbar.logoSrc}
                alt={CONTENT.navbar.logo}
                sizes="96px"
                className="h-20 md:h-24 w-auto -my-5 md:-my-6 -ml-1"
              />
            </div>
            <div className="space-y-6">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
                  {p}
                </p>
              ))}
            </div>
            
            {/* Call to Action — on mobile it's moved visually above the copy (DOM order kept for screen readers) */}
            <div className="order-first md:order-none self-center md:self-auto mb-10 md:mb-0 md:mt-10">
              <a
                href="#contact"
                className="inline-block px-10 py-5 bg-primary text-white rounded-full font-semibold tracking-widest uppercase text-xs ring-4 ring-primary/20 shadow-xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-2xl active:scale-95 transition-all duration-300"
              >
                Inquire for Your Celebration
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Slideshow */}
        <div className="hidden md:block w-full md:w-1/2 relative bg-primary/5 rounded-[3rem] overflow-hidden aspect-square shadow-2xl">
          <div className="absolute inset-0">{slides}</div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4 z-20">{arrows}</div>

          {/* Index Indicator */}
          <div className="absolute top-8 right-8 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md text-white text-[10px] tracking-[0.2em] uppercase z-20">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

      </div>

      <ScrollIndicator light className="z-10 max-md:hidden" />
    </section>
    </>
  );
};

export default LandingHero;