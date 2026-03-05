import { useState, useEffect } from "react";
import { CONTENT } from "../constants/content";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToHash } from "../utils/scroll";

const DesktopNavbar = ({ isLight }) => (
    <div className={`px-8 py-2.5 rounded-full flex justify-between items-center shadow-lg transition-[background-color,border-color,color,transform] duration-500 relative z-10 w-full ${isLight ? "glass-primary" : "glass"
        }`}>
        <a href="#" className="h-12 relative z-20">
            <img
                src={isLight ? CONTENT.navbar.logoSrc : CONTENT.hero.logoSrc}
                alt={CONTENT.navbar.logo}
                className={`h-full w-auto object-contain transition-[opacity,transform] duration-500`}
            />
        </a>
        <div className="flex gap-8">
            {CONTENT.navbar.links.map((link) => (
                <a
                    key={link.name}
                    href={link.hash}
                    onClick={(e) => { e.preventDefault(); scrollToHash(link.hash); }}
                    className={`text-sm font-medium transition-colors duration-500 uppercase tracking-widest ${isLight ? "text-primary hover:text-primary/70" : "text-white hover:text-white/70"
                        }`}
                >
                    {link.name}
                </a>
            ))}
        </div>
    </div>
);

const MobileNavbar = ({ isLight, toggleMenu, isMenuOpen, menuVariants }) => (
    <>
        <div className="flex justify-between items-center relative z-10 w-full">
            <a
                href="#"
                className={`h-14 w-auto relative z-20 flex items-center transition-[background-color,border-color,color,transform] duration-500 ${isLight ? "glass-primary" : "glass"
                    } px-5 rounded-full shadow-lg`}
            >
                <img
                    src={isLight ? CONTENT.navbar.logoSrc : CONTENT.hero.logoSrc}
                    alt={CONTENT.navbar.logo}
                    className={`h-full w-auto object-contain transition-[opacity,transform] duration-500`}
                />
            </a>

            <button
                onClick={toggleMenu}
                className={`w-11 h-11 flex items-center justify-center rounded-full shadow-lg transition-[background-color,border-color,color,transform] duration-500 relative z-20 ${isLight
                    ? "glass-primary text-primary hover:bg-primary/10"
                    : "glass text-white hover:bg-white/10"
                    }`}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                    className={`absolute top-full left-0 right-0 mt-4 p-10 rounded-[2.5rem] shadow-2xl overflow-hidden ${isLight ? "glass-primary" : "glass"
                        }`}
                >
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
                        {CONTENT.navbar.links.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.hash}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                onClick={(e) => { e.preventDefault(); scrollToHash(link.hash); toggleMenu(); }}
                                className={`text-lg font-medium uppercase tracking-widest transition-colors duration-300 ${isLight ? "text-primary hover:text-primary/60" : "text-white hover:text-white/60"
                                    }`}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
);

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navTheme, setNavTheme] = useState("dark"); // Default for hero
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

    useEffect(() => {
        const handleResize = () => {
            const currentIsDesktop = window.innerWidth >= 768;
            setIsDesktop(currentIsDesktop);
            if (currentIsDesktop) {
                setIsMenuOpen(false);
            }
        };

        const updateNavState = () => {
            setScrolled(window.scrollY > 100);

            // Probe the pixel that sits at the navbar's visual center.
            // The nav is fixed at top-6 (24px) and is ~40px tall, so its centre
            // is at roughly y = 44px in the viewport. We check which themed
            // section contains that exact point so the theme switches the instant
            // the section boundary crosses the navbar — no offset.
            const NAVBAR_CENTER_Y = 44;
            const themedElements = document.querySelectorAll("[data-nav-theme]");
            let matched = null;

            themedElements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top <= NAVBAR_CENTER_Y && rect.bottom >= NAVBAR_CENTER_Y) {
                    matched = el;
                }
            });

            if (matched) {
                const theme = matched.getAttribute("data-nav-theme");
                if (theme) setNavTheme(theme);
            }
        };

        updateNavState();
        window.addEventListener("scroll", updateNavState, { passive: true });
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", updateNavState);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isLight = navTheme === "light";
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuVariants = {
        hidden: {
            opacity: 0,
            y: -20,
            scale: 0.95,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        }
    };

    return (
        <nav
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-[opacity,transform] duration-700 ease-in-out ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
        >
            {isDesktop ? (
                <DesktopNavbar isLight={isLight} />
            ) : (
                <MobileNavbar
                    isLight={isLight}
                    toggleMenu={toggleMenu}
                    isMenuOpen={isMenuOpen}
                    menuVariants={menuVariants}
                />
            )}
        </nav>
    );
};

export default Navbar;