import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { CONTENT } from "../theme/content";
import navbarLogo from "../assets/tanukrit_logo_navbar.jpg";

const Footer = () => {
    const { footer } = CONTENT.contact;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative bg-stone-100 pt-12 pb-6 px-6 overflow-hidden border-t border-stone-200">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="max-w-6xl mx-auto flex flex-col items-center">
                {/* Back to Top Button */}
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-stone-200 mb-12 cursor-pointer transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30"
                >
                    <ArrowUp className="w-5 h-5 text-stone-400 group-hover:text-primary transition-colors duration-300" />
                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[8px] uppercase tracking-widest text-primary font-bold">
                        Back to Top
                    </span>
                </motion.button>

                {/* Main Content Area */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-2">
                    {/* Copyright Info */}
                    <div className="text-stone-400 text-[10px] md:text-xs uppercase tracking-widest">
                        {footer.copyright}
                    </div>

                    {/* Developer Credits - Mudit Garg */}
                    <div className="flex items-center gap-2 group">
                        <span className="text-stone-400 text-[10px] uppercase tracking-widest">
                            Developer & Maintainer:
                        </span>
                        <a
                            href="https://muditgarg48.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-primary text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:tracking-[0.3em]"
                        >
                            Mudit Garg
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    </div>
                </div>

                {/* Subtle Branding Bottom Accent - Logo Image */}
                <div className="mt-3 opacity-[0.1] select-none pointer-events-none grayscale brightness-50 contrast-125">
                    <img src={navbarLogo} alt="Tanukrit Logo" className="h-24 md:h-40 object-contain mix-blend-multiply" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;