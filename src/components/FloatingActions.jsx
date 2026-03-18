import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Instagram, MessageCircle, MessageSquare, X } from "lucide-react";
import { CONTENT } from "../constants/content";

const FloatingActions = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
    const [navTheme, setNavTheme] = useState("dark");
    const { socials } = CONTENT.contact;

    const whatsapp = socials.find(s => s.name === "WhatsApp");
    const instagram = socials.find(s => s.name === "Instagram");

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        const updateState = () => {
            // Detect theme at FAB position (bottom-right)
            // The FAB is fixed at bottom-6 (24px)
            const FAB_CENTER_Y = window.innerHeight - 44;
            const themedElements = document.querySelectorAll("[data-nav-theme]");
            let matched = null;

            themedElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top <= FAB_CENTER_Y && rect.bottom >= FAB_CENTER_Y) {
                    matched = el;
                }
            });

            if (matched) {
                const theme = matched.getAttribute("data-nav-theme");
                if (theme) setNavTheme(theme);
            }
        };

        updateState();
        window.addEventListener("scroll", updateState, { passive: true });
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", updateState);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isLight = navTheme === "light";

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 }
    };

    const itemVariants = {
        closed: { opacity: 0, scale: 0, y: 20 },
        open: (i) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }
        })
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end pointer-events-none">
            <AnimatePresence>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={containerVariants}
                    className="flex flex-col-reverse items-end gap-4 pointer-events-auto"
                >
                    {/* Mobile Trigger Button - Matches Navbar Hamburger */}
                    {!isDesktop && (
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-[background-color,border-color,color,transform] duration-500 relative z-20 cursor-pointer ${isLight
                                ? "bg-[#dca3d7]/15 backdrop-blur-md border border-[#dca3d7]/30 text-primary hover:bg-primary/10"
                                : "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/10"
                                }`}
                            aria-label="Toggle contact menu"
                        >
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                            </motion.div>
                        </button>
                    )}

                    {/* Social Buttons Stack - Always visible on desktop, toggleable on mobile */}
                    <div className="flex flex-col items-end gap-4 mb-2">
                        <AnimatePresence>
                            {(isDesktop || isOpen) && (
                                <>
                                    {whatsapp && (
                                        <motion.a
                                            custom={0}
                                            variants={isDesktop ? {} : itemVariants}
                                            initial={isDesktop ? "visible" : "closed"}
                                            animate={isDesktop ? "visible" : "open"}
                                            exit={isDesktop ? "visible" : "closed"}
                                            href={whatsapp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 self-end"
                                            title="WhatsApp"
                                        >
                                            {/* Label - Hover on desktop, Always visible on mobile */}
                                            <span className={`transition-opacity duration-300 text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap shadow-sm ${isDesktop ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                                                }`}>
                                                {whatsapp.name}
                                            </span>
                                            <div
                                                className={`w-14 h-14 rounded-full border border-white/20 shadow-xl flex items-center justify-center transition-[background-color,border-color,color,transform] duration-500 group-hover:brightness-110 group-hover:-translate-x-1 backdrop-blur-md shrink-0`}
                                                style={{ backgroundColor: whatsapp.color }}
                                            >
                                                <MessageCircle className="text-white" size={24} strokeWidth={1.5} />
                                            </div>
                                        </motion.a>
                                    )}
                                    {instagram && (
                                        <motion.a
                                            custom={1}
                                            variants={isDesktop ? {} : itemVariants}
                                            initial={isDesktop ? "visible" : "closed"}
                                            animate={isDesktop ? "visible" : "open"}
                                            exit={isDesktop ? "visible" : "closed"}
                                            href={instagram.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 self-end"
                                            title="Instagram"
                                        >
                                            {/* Label - Hover on desktop, Always visible on mobile */}
                                            <span className={`transition-opacity duration-300 text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap shadow-sm ${isDesktop ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                                                }`}>
                                                {instagram.name}
                                            </span>
                                            <div
                                                className={`w-14 h-14 rounded-full border border-white/20 shadow-xl flex items-center justify-center transition-[background-color,border-color,color,transform] duration-500 group-hover:brightness-110 group-hover:-translate-x-1 backdrop-blur-md shrink-0`}
                                                style={{ backgroundColor: instagram.color }}
                                            >
                                                <Instagram className="text-white" size={24} strokeWidth={1.5} />
                                            </div>
                                        </motion.a>
                                    )}
                                </>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default FloatingActions;
