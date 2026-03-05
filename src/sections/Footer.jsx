import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { CONTENT } from "../constants/content";
import logo from "../assets/tanukrit_logo.jpg";

const Footer = () => {
    const { footer } = CONTENT.contact;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative bg-primary pt-6 pb-1 px-6 overflow-hidden">

            <div className="max-w-6xl mx-auto flex flex-col items-center">
                {/* Back to Top — glass style matching hero / navbar language */}
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative flex items-center justify-center w-12 h-12 rounded-full glass mb-12 cursor-pointer transition-all duration-300"
                >
                    <ArrowUp className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
                    <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[8px] uppercase tracking-widest text-white/60 font-bold whitespace-nowrap">
                        Back to Top
                    </span>
                </motion.button>

                {/* Main Content Area */}
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-2">
                    {/* Copyright Info */}
                    <div className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">
                        {footer.copyright}
                    </div>

                    {/* Developer Credits */}
                    <div className="flex items-baseline gap-2 group">
                        <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">
                            Developer &amp; Maintainer:
                        </span>
                        <a
                            href="https://muditgarg48.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative text-white/70 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:text-white hover:tracking-[0.3em]"
                        >
                            Mudit Garg
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full" />
                        </a>
                    </div>
                </div>

                {/* Branding logo — screen blend so it ghosts into the purple */}
                <div className="mt-3 opacity-[0.08] select-none pointer-events-none">
                    <img
                        src={logo}
                        alt="Tanukrit Logo"
                        className="h-24 md:h-40 object-contain mix-blend-screen brightness-200"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;