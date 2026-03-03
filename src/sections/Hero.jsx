import React from "react";
import Button from "../components/Button";
import { CONTENT } from "../theme/content";

const Hero = () => {
    const { tagline, title, logoSrc, description, ctaPrimary, ctaSecondary, backgroundImage } = CONTENT.hero;

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary px-4">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 text-center text-white max-w-4xl">
                <span className="text-sm uppercase tracking-[0.3em] mb-4 block animate-fade-in opacity-80">
                    {tagline}
                </span>
                <div className="mb-8 animate-fade-in flex justify-center">
                    <img
                        src={logoSrc}
                        alt={title}
                        className="h-32 md:h-48 w-auto object-contain"
                    />
                </div>
                <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary" className="!bg-white !text-primary">
                        {ctaPrimary}
                    </Button>
                    <Button variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-primary">
                        {ctaSecondary}
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-px h-12 bg-white/50"></div>
            </div>
        </section>
    );
};

export default Hero;