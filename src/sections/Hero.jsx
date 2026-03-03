import React from "react";
import Button from "../components/Button";

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary px-4">
            {/* Visual background overlay (to be replaced with images later) */}
            <div className="absolute inset-0 bg-black/30 z-0"></div>

            <div className="relative z-10 text-center text-white max-w-4xl">
                <span className="text-sm uppercase tracking-[0.3em] mb-4 block animate-fade-in opacity-80">
                    Artfully Packaged. Emotionally Delivered.
                </span>
                <h1 className="text-6xl md:text-8xl font-heading mb-8 leading-[1.1]">
                    Tanukrit
                </h1>
                <p className="text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    Premium gifting rooted in art, intention, and meaningful expression.
                    Every gift is a conversation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="secondary" className="!bg-white !text-primary">
                        Explore Collection
                    </Button>
                    <Button variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-primary">
                        Learn Our Story
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
