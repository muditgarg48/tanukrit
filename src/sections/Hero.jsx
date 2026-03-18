import { useState, useEffect } from "react";
import { CONTENT } from "../constants/content";
import { scrollToHash } from "../utils/scroll";
import LocationIndicator from "../components/LocationIndicator";
import ImageWithLoader from "../components/ImageWithLoader";

const Hero = () => {
    const { tagline, title, logoSrc, backgroundImages, imageTransitionInterval } = CONTENT.hero;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!backgroundImages || backgroundImages.length <= 1) return;

        const intervalId = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, imageTransitionInterval || 5000);

        return () => clearInterval(intervalId);
    }, [backgroundImages, imageTransitionInterval]);

    return (
        <section data-nav-theme="dark" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-primary px-4">
            <div className="absolute top-0 left-0 w-full z-30">
                <LocationIndicator variant="hero" />
            </div>
            {/* Background Image Layer */}
            {backgroundImages?.map((img, index) => {
                // Render current, next (for preloading), and previous (for smooth fade-out)
                const isActive = index === currentImageIndex;
                const isNext = index === (currentImageIndex + 1) % backgroundImages.length;
                const isPrev = index === (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
                
                if (!isActive && !isNext && !isPrev) return null;

                return (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-[1500ms] ease-in-out will-change-opacity ${isActive ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center 45%'
                        }}
                    />
                );
            })}

            {/* Unified Overlay Layer (Better Performance) */}
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]"></div>

            {/* Minimal Navigation Layer */}
            <div className="absolute top-8 left-0 w-full h-24 z-20 flex justify-center items-center">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-14 px-4 drop-shadow-md">
                    {CONTENT.navbar.links.map((link) => (
                        <a
                            key={link.name}
                            href={link.hash}
                            onClick={(e) => { e.preventDefault(); scrollToHash(link.hash); }}
                            className="text-xs font-light hover:font-medium text-white/80 hover:text-white transition-colors uppercase tracking-[0.3em]"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className="relative z-10 text-center text-white max-w-4xl flex flex-col items-center drop-shadow-2xl">
                <div className="mb-4 md:mb-6 animate-fade-in filter drop-shadow-[0_0_20_rgba(0,0,0,0.3)]">
                    <ImageWithLoader
                        src={logoSrc}
                        alt={title}
                        className="h-[28vh] md:h-[38vh] lg:h-[40vh] w-auto object-contain brightness-110"
                    />
                </div>
                <div className="flex flex-col gap-1.5 md:gap-2 animate-fade-in opacity-90 shadow-black/20 text-shadow-sm">
                    {Array.isArray(tagline) ? (
                        tagline.map((line, index) => (
                            <span key={index} className="text-xs md:text-sm uppercase tracking-[0.4em] font-medium block">
                                {line}
                            </span>
                        ))
                    ) : (
                        <span className="text-xs md:text-sm uppercase tracking-[0.4em] font-medium block">
                            {tagline}
                        </span>
                    )}
                </div>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-light">Scroll</span>
                <div className="w-[1px] h-10 bg-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/70 animate-scroll-line"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;