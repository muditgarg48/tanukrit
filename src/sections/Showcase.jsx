import { useState, useRef, useEffect } from "react";
import { CONTENT } from "../constants/content";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const useWindowSize = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkSize = () => setIsMobile(window.innerWidth < 768);
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);
    return isMobile;
};

const Showcase = () => {
    const isMobile = useWindowSize();
    const { title, description, items, cta } = CONTENT.showcase;
    const [displayIndex, setDisplayIndex] = useState(items.length); // Start in middle set
    const [enableTransitions, setEnableTransitions] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
    const mobileScrollRef = useRef(null);

    const extendedItems = [...items, ...items, ...items];
    const activeIndex = displayIndex % items.length;

    const handlePrev = () => {
        setDisplayIndex((prev) => {
            const next = prev - 1;
            if (isMobile) scrollToIndex((next % items.length + items.length) % items.length);
            return next;
        });
    };

    const handleNext = () => {
        setDisplayIndex((prev) => {
            const next = prev + 1;
            if (isMobile) scrollToIndex((next % items.length + items.length) % items.length);
            return next;
        });
    };

    const openGallery = (item) => {
        setSelectedItem(item);
        setActiveGalleryIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = () => {
        setSelectedItem(null);
        document.body.style.overflow = 'auto';
    };

    // Infinite loop jump
    useEffect(() => {
        if (displayIndex >= items.length * 2) {
            setEnableTransitions(false);
            setDisplayIndex(displayIndex - items.length);
            setTimeout(() => setEnableTransitions(true), 20);
        } else if (displayIndex < items.length) {
            setEnableTransitions(false);
            setDisplayIndex(displayIndex + items.length);
            setTimeout(() => setEnableTransitions(true), 20);
        }
    }, [displayIndex, items.length]);

    const isProgrammaticScroll = useRef(false);
    const programmaticTarget = useRef(null);

    const scrollToIndex = (index, behavior = "smooth") => {
        const container = mobileScrollRef.current;
        if (!container || container.clientWidth === 0) return;

        isProgrammaticScroll.current = true;
        programmaticTarget.current = index;

        const itemElements = container.querySelectorAll('.snap-center');
        const targetElement = itemElements[index + items.length];
        if (targetElement) {
            const targetScrollLeft = targetElement.offsetLeft - (container.clientWidth / 2) + (targetElement.clientWidth / 2);
            container.scrollTo({ left: targetScrollLeft, behavior: behavior });
        }
    };

    const handleMobileScroll = (e) => {
        const container = e.target;
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.clientWidth;
        const scrollWidth = container.scrollWidth;

        if (scrollLeft < containerWidth * 0.5) {
            container.scrollLeft = scrollLeft + (items.length * (containerWidth * 0.8 + 16));
            return;
        }
        if (scrollLeft > scrollWidth - containerWidth * 1.5) {
            container.scrollLeft = scrollLeft - (items.length * (containerWidth * 0.8 + 16));
            return;
        }

        const containerCenter = scrollLeft + containerWidth / 2;
        let minDistance = Infinity;
        let closestIndex = activeIndex;

        const itemElements = container.querySelectorAll('.snap-center');
        itemElements.forEach((child, index) => {
            const childCenter = child.offsetLeft + child.clientWidth / 2;
            const distance = Math.abs(childCenter - containerCenter);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index % items.length;
            }
        });

        if (isProgrammaticScroll.current) {
            if (closestIndex === programmaticTarget.current) {
                isProgrammaticScroll.current = false;
            }
            return;
        }

        if (closestIndex !== activeIndex) {
            setDisplayIndex(items.length + closestIndex);
        }
    };

    useEffect(() => {
        if (isMobile && mobileScrollRef.current) {
            scrollToIndex(activeIndex, "instant");
        }
    }, [isMobile]);

    // Swipe handling for gallery modal
    const touchStartX = useRef(null);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;

        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX.current - touchEndX;
        const swipeThreshold = 50;

        if (deltaX > swipeThreshold) {
            // Swipe left -> next image
            setActiveGalleryIndex((prev) => (prev < selectedItem.images.length - 1 ? prev + 1 : 0));
        } else if (deltaX < -swipeThreshold) {
            // Swipe right -> prev image
            setActiveGalleryIndex((prev) => (prev > 0 ? prev - 1 : selectedItem.images.length - 1));
        }

        touchStartX.current = null;
    };

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

                    <div className="relative w-full">
                        {!isMobile && (
                            <div className="hidden md:flex w-full h-[85vh] max-h-[750px] min-h-[500px] relative overflow-hidden justify-center items-center transition-all duration-300">
                                {extendedItems.map((item, index) => {
                                    const distance = index - displayIndex;
                                    const isVisible = Math.abs(distance) <= 2;
                                    const isActive = index === displayIndex;

                                    return (
                                        <div
                                            key={`${item.id}-${index}`}
                                            onClick={() => isActive ? openGallery(item) : setDisplayIndex(index)}
                                            style={{
                                                flex: isVisible ? (isActive ? 7 : (Math.abs(distance) === 1 ? 1 : 0.4)) : 0,
                                                opacity: isVisible ? 1 : (Math.abs(distance) === 3 ? 0.3 : 0),
                                                margin: isVisible ? "0 10px" : "0",
                                                minWidth: isVisible ? "20px" : "0",
                                                height: isVisible ? (isActive ? "100%" : (Math.abs(distance) === 1 ? "85%" : "70%")) : "70%",
                                                transition: enableTransitions ? "flex 0.6s cubic-bezier(0.32, 0.72, 0, 1), height 0.6s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.4s ease, margin 0.6s ease" : "none"
                                            }}
                                            className="relative rounded-[2rem] overflow-hidden cursor-pointer group shadow-md hover:shadow-xl min-w-0 bg-black/5"
                                        >
                                            {/* No-Crop Aesthetic: Blurred backdrop + object-contain */}
                                            <img
                                                src={item.coverImage}
                                                alt={item.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="absolute inset-0 w-full h-full object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-110 z-10"
                                            />
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-5 flex flex-col justify-end transition-opacity duration-300 z-20 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                            >
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        transition={{ delay: 0.1, duration: 0.4 }}
                                                    >
                                                        <h3 className="text-white text-2xl lg:text-3xl font-heading mt-2">{item.title}</h3>
                                                        <p className="text-white/60 text-xs mt-2 uppercase tracking-widest font-medium">Click to view gallery</p>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {isMobile && (
                            <div
                                ref={mobileScrollRef}
                                onScroll={handleMobileScroll}
                                className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 hide-scrollbar"
                                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                            >
                                {extendedItems.map((item, index) => {
                                    const realIndex = index % items.length;
                                    const isActive = activeIndex === realIndex;
                                    return (
                                        <div
                                            key={`${item.id}-${index}`}
                                            onClick={() => isActive ? openGallery(item) : null}
                                            className={`shrink-0 w-[80vw] aspect-[3/4] snap-center relative rounded-[2rem] overflow-hidden isolate transform-gpu group shadow-sm transition-all duration-500 ease-out bg-black/5 ${isActive ? 'scale-100 opacity-100' : 'scale-85 opacity-60'}`}
                                        >
                                            <img
                                                src={item.coverImage}
                                                alt={item.title}
                                                loading="lazy"
                                                decoding="async"
                                                className="absolute inset-0 w-full h-full object-cover rounded-[2rem] transition-transform duration-700 scale-100 group-hover:scale-110 z-10"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-8 flex flex-col justify-end z-20">
                                                <h3 className="text-white text-xl font-heading">{item.title}</h3>
                                                {isActive && <p className="text-white/60 text-[10px] mt-1 uppercase tracking-widest">Tap to view gallery</p>}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 lg:-left-16 z-10 hidden sm:block">
                            <button onClick={handlePrev} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-md text-gray-800 hover:bg-white transition-colors">
                                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 lg:-right-16 z-10 hidden sm:block">
                            <button onClick={handleNext} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur shadow-md text-gray-800 hover:bg-white transition-colors">
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>

                        {/* Mobile bottom dots */}
                        <div className="flex sm:hidden justify-center items-center gap-4 mt-6">
                            <button onClick={handlePrev} className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-800 active:scale-95 transition-transform">
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <div className="flex gap-2">
                                {items.map((_, idx) => (
                                    <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-6 bg-primary' : 'w-2 bg-gray-300'}`} />
                                ))}
                            </div>
                            <button onClick={handleNext} className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm text-gray-800 active:scale-95 transition-transform">
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* CTA Block */}
                    {cta && (
                        <div className="mt-12 md:mt-24 lg:mt-32 text-center max-w-3xl mx-auto px-4 pb-4">
                            <h3 className="text-2xl md:text-4xl font-heading mb-4 leading-tight text-primary">{cta.title}</h3>
                            <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed mt-4 mb-8">{cta.description}</p>
                            <a href={cta.buttonLink} className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-md hover:shadow-xl group">
                                <span className="text-sm uppercase tracking-widest font-bold">{cta.buttonText}</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Gallery Modal */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-[#dca3d7]/15 backdrop-blur-xl border border-[#dca3d7]/30 flex flex-col items-center justify-center overflow-hidden touch-none"
                    >
                        {/* Header Controls */}
                        <div className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-start z-[110] pointer-events-none">
                            <div className="bg-white/90 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm pointer-events-auto border border-white/50">
                                <h3 className="text-primary text-base md:text-xl font-heading">{selectedItem.title}</h3>
                            </div>
                            <button
                                onClick={closeGallery}
                                className="bg-white/90 backdrop-blur-md pl-4 pr-3 py-2 md:pl-5 md:pr-4 md:py-3 rounded-full text-primary hover:bg-white transition-colors flex items-center gap-2 group shadow-sm pointer-events-auto border border-white/50"
                            >
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold hidden sm:block group-hover:-translate-x-1 transition-transform">Close</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        {/* Image Container */}
                        <div
                            className="w-full h-full flex flex-col justify-center items-center relative"
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeGalleryIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    src={selectedItem.images[activeGalleryIndex]}
                                    alt=""
                                    className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
                                />
                            </AnimatePresence>

                            {/* Desktop Arrows - Floating pills */}
                            <button
                                onClick={(e) => { e.stopPropagation(); setActiveGalleryIndex((prev) => (prev > 0 ? prev - 1 : selectedItem.images.length - 1)); }}
                                className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-primary hover:bg-white transition-colors z-50 group shadow-sm border border-white/50"
                            >
                                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); setActiveGalleryIndex((prev) => (prev < selectedItem.images.length - 1 ? prev + 1 : 0)); }}
                                className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-primary hover:bg-white transition-colors z-50 group shadow-sm border border-white/50"
                            >
                                <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Footer Indicators */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[110] flex justify-center items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-3.5 rounded-full shadow-sm border border-white/50">
                            {selectedItem.images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveGalleryIndex(idx)}
                                    className={`h-2 transition-all duration-300 rounded-full ${idx === activeGalleryIndex ? 'bg-primary w-8' : 'bg-primary/30 w-2 hover:bg-primary/50'}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Showcase;