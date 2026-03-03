import React from "react";
import Button from "../components/Button";

const Contact = () => {
    const socials = [
        { name: "Instagram", link: "https://instagram.com/tanu.krit", icon: "IG" },
        { name: "WhatsApp", link: "https://wa.me/917982666274", icon: "WA" },
        { name: "LinkedIn", link: "#", icon: "LI" },
        { name: "Location", link: "#", icon: "Delhi" },
    ];

    return (
        <section id="contact" className="relative py-32 bg-primary overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

            <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                <h2 className="text-white text-5xl md:text-7xl font-heading mb-8">
                    Ready to tell your story?
                </h2>
                <p className="text-white/70 text-xl font-light mb-16 max-w-2xl mx-auto">
                    We look forward to creating something meaningful for you—just as we have
                    for families and clients across the world.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group"
                        >
                            <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent group-hover:border-accent group-hover:-translate-y-2 transition-all duration-300">
                                <span className="text-white font-medium text-xs">{social.icon}</span>
                            </div>
                            <span className="text-white/60 text-sm mt-4 tracking-widest uppercase">{social.name}</span>
                        </a>
                    ))}
                </div>

                <div className="inline-flex flex-col items-center">
                    <Button variant="secondary" className="!bg-accent !text-white px-12 py-4 shadow-xl shadow-accent/20">
                        Get in Touch
                    </Button>
                    <div className="mt-8 text-white/40 text-xs tracking-[0.5em] uppercase">
                        Artfully Packaged • Emotionally Delivered
                    </div>
                </div>
            </div>

            <footer className="mt-24 pt-12 border-t border-white/5 px-4 text-center">
                <div className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-medium">
                    © {new Date().getFullYear()} Tanukrit • Designed with Intention
                </div>
            </footer>
        </section>
    );
};

export default Contact;
