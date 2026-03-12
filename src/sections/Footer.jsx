import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { CONTENT } from "../constants/content";
import logo from "../assets/tanukrit_logo.webp";

const Footer = () => {
    const { footer } = CONTENT.contact;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative bg-primary pb-1 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                {/* Back to Top — glass style matching hero / navbar language */}
                <motion.button
                    onClick={scrollToTop}
                    whileHover={{ boxShadow: "0px 5px 12px rgba(255, 255, 255, 0.4)" }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full glass border border-white/20 shadow-lg hover:border-white/50 mb-4 md:mb-6 cursor-pointer transition-all duration-300"
                >
                    <ArrowUp className="w-3 h-3 md:w-4 md:h-4 text-white/70 group-hover:text-white transition-colors duration-300" />
                    <span className="absolute -bottom-6 opacity-100 transition-opacity duration-300 text-[8px] uppercase tracking-widest text-white/60 font-bold whitespace-nowrap">
                        Back to Top
                    </span>
                </motion.button>

                {/* Bottom Row simplified: Footer now only serves as extra padding and back to top container */}
                <div className="w-full flex flex-col items-center justify-center pb-4">
                </div>
            </div>
        </footer>
    );
};

export default Footer;