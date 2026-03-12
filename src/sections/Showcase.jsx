import { useState, useRef } from "react";
import { CONTENT } from "../constants/content";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Showcase = () => {
    const { title, eyebrow, description, items, cta } = CONTENT.showcase;
    const [activeIndex, setActiveIndex] = useState(0);
    const mobileScrollRef = useRef(null);
    const isProgrammaticScroll = useRef(false);
    const programmaticTarget = useRef(null);

    const scrollToIndex = (index) => {
        const container = mobileScrollRef.current;
        if (!container || container.clientWidth === 0) return;

        isProgrammaticScroll.current = true;
        programmaticTarget.current = index;

        const itemElements = container.querySelectorAll('.snap-center');
        const targetElement = itemElements[index];
        if (targetElement) {
            const targetScrollLeft = targetElement.offsetLeft - (container.clientWidth / 2) + (targetElement.clientWidth / 2);
            container.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
        }
    };

    const handlePrev = () => {
        setActiveIndex((prev) => {
            const next = prev === 0 ? items.length - 1 : prev - 1;
            scrollToIndex(next);
            return next;
        });
    };

    const handleNext = () => {
        setActiveIndex((prev) => {
            const next = prev === items.length - 1 ? 0 : prev + 1;
            scrollToIndex(next);
            return next;
        });
    };

    const handleMobileScroll = (e) => {
        const container = e.target;
        const containerCenter = container.scrollLeft + container.clientWidth / 2;
        let minDistance = Infinity;
        let closestIndex = activeIndex;

        const itemElements = container.querySelectorAll('.snap-center');
        itemElements.forEach((child, index) => {
            const childCenter = child.offsetLeft + child.clientWidth / 2;
            const distance = Math.abs(childCenter - containerCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        if (isProgrammaticScroll.current) {
            if (closestIndex === programmaticTarget.current) {
                isProgrammaticScroll.current = false;
            }
            return;
        }

        if (closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
        }
    };

    const getVisibleIndices = () => {
        const total = items.length;
        const indices = [];
        // Only show 5 items on desktop for a cleaner look
        for (let i = -2; i <= 2; i++) {
            let index = (activeIndex + i) % total;
            if (index < 0) index += total;
            indices.push(index);
        }
        return indices;
    };

    const visibleIndices = getVisibleIndices();

    return (
        <section id="products" data-nav-theme="light" className="min-h-screen flex flex-col bg-[#F9F9F9] px-4 pt-16 md:pt-24 pb-12 lg:pt-28 lg:pb-16">
            <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="text-center mb-8 md:mb-12 px-4">
                        <h2 className="text-2xl md:text-3xl font-heading text-primary">{title}</h2>
                        {description && (
                            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed mt-4">{description}</p>
                        )}
                    </div>

                    {/* Navigation Buttons Container */}
                    <div className="relative w-full">
                        {/* Desktop View: Window Blinds Carousel (Limited to 5 visible) */}
                        <div className="hidden md:flex w-full h-[60vh] max-h-[600px] min-h-[350px] gap-4 relative overflow-hidden">
                            <AnimatePresence mode="popLayout">
                                {visibleIndices.map((index) => {
                                    const item = items[index];
                                    const isActive = activeIndex === index;
                                    return (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            onClick={() => setActiveIndex(index)}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                flex: isActive ? 6 : 1,
                                            }}
                                            exit={{ opacity: 0, scale: 0.8, flex: 0 }}
                                            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                                            className="relative rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl origin-center min-w-0"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                                            />
                                            <motion.div
                                                animate={{ opacity: isActive ? 1 : 0 }}
                                                transition={{ duration: 0.4 }}
                                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end"
                                            >
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.2, duration: 0.5 }}
                                                    >
                                                        <span className="text-primary text-xs uppercase tracking-[0.2em] mb-2 block">{item.category}</span>
                                                        <h3 className="text-white text-3xl lg:text-4xl font-heading">{item.title}</h3>
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                        {/* Mobile View: Basic Carousel */}
                        <div
                            ref={mobileScrollRef}
                            onScroll={handleMobileScroll}
                            className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 hide-scrollbar"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            <style>{`
                                .hide-scrollbar::-webkit-scrollbar {
                                    display: none;
                                }
                            `}</style>
                            {items.map((item, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            setActiveIndex(index);
                                            scrollToIndex(index);
                                        }}
                                        className={`shrink-0 w-[80vw] sm:w-[70vw] h-[55vh] max-h-[450px] min-h-[350px] snap-center relative rounded-[2.5rem] overflow-hidden group shadow-sm transition-transform duration-500 ease-out ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-80'}`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            decoding="async"
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                            <h3 className="text-white text-3xl font-heading">{item.title}</h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Carousel Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 lg:-left-16 z-10 hidden sm:block">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-md text-gray-800 hover:bg-white transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 lg:-right-16 z-10 hidden sm:block">
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-md text-gray-800 hover:bg-white transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>

                        {/* Mobile bottom navigation dots/buttons */}
                        <div className="flex sm:hidden justify-center items-center gap-4 mt-6">
                            <button
                                onClick={handlePrev}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-800 active:scale-95 transition-transform"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex gap-2">
                                {items.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-800 active:scale-95 transition-transform"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* CTA Block */}
                    {cta && (
                        <div className="mt-12 md:mt-24 lg:mt-32 text-center max-w-3xl mx-auto px-4 pb-4">
                            <h3 className="text-2xl md:text-4xl font-heading mb-4 leading-tight text-primary">{cta.title}</h3>
                            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed mt-4 mb-8">{cta.description}</p>
                            <a
                                href={cta.buttonLink}
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-md hover:shadow-xl group"
                            >
                                <span className="text-sm uppercase tracking-widest font-bold">{cta.buttonText}</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Showcase;