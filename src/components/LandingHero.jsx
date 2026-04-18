"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageWithLoader from "./ImageWithLoader";

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

  useEffect(() => {
    const timer = setInterval(slideNext, 5000);
    return () => clearInterval(timer);
  }, [slideNext]);

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

  return (
    <section data-nav-theme="light" className="bg-white py-12 md:py-24 px-4 overflow-hidden border-b border-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-primary leading-tight mb-8">
              {title}
            </h1>
            <div className="space-y-6">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
                  {p}
                </p>
              ))}
            </div>
            
            {/* Call to Action for specialized pages */}
            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-block px-8 py-4 bg-primary text-white rounded-full font-medium tracking-widest uppercase text-xs hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                Inquire for Your Celebration
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Slideshow */}
        <div className="w-full md:w-1/2 relative bg-primary/5 rounded-[3rem] overflow-hidden aspect-[4/3] md:aspect-square shadow-2xl">
          <div className="absolute inset-0">
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
                className="absolute inset-0"
              >
                <ImageWithLoader
                  src={images[currentIndex]}
                  alt={`${title} - Tanukrit Custom Gift Hampers`}
                  className="w-full h-full object-cover"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute inset-x-0 bottom-8 flex justify-center gap-4 z-20">
            <button
              onClick={slidePrev}
              className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-primary border border-white/20 hover:bg-white transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={slideNext}
              className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center text-primary border border-white/20 hover:bg-white transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Index Indicator */}
          <div className="absolute top-8 right-8 px-4 py-2 rounded-full bg-black/20 backdrop-blur-md text-white text-[10px] tracking-[0.2em] uppercase z-20">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LandingHero;