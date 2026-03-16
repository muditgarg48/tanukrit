import { useState, useEffect } from "react";
import { CONTENT } from "../constants/content";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToHash } from "../utils/scroll";
import LocationIndicator from "./LocationIndicator";

const DesktopNavbar = ({ isLight }) => (
    <div className="flex flex-col items-center w-full relative z-10 transition-[opacity,transform] duration-500">
        <div className={`px-8 py-2.5 rounded-full flex justify-between items-center shadow-lg transition-[background-color,border-color,color,transform] duration-500 relative z-10 w-full ${isLight ? "bg-[#dca3d7]/15 backdrop-blur-md border border-[#dca3d7]/30" : "bg-white/20 backdrop-blur-md border border-white/30"
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
        <LocationIndicator variant="navbar-desktop" isLight={isLight} />
    </div>
);

const MobileNavbarToggle = ({ isLight, toggleMenu, isMenuOpen }) => (
    <div className={`flex justify-between items-center relative z-10 w-full px-4 py-2 rounded-full shadow-lg transition-[background-color,border-color,color,transform] duration-500 ${isLight ? "bg-[#dca3d7]/15 backdrop-blur-md border border-[#dca3d7]/30" : "bg-white/20 backdrop-blur-md border border-white/30"
        }`}>
        <a
            href="#"
            className="h-10 w-auto relative z-20 flex items-center"
        >
            <img
                src={isLight ? CONTENT.navbar.logoSrc : CONTENT.hero.logoSrc}
                alt={CONTENT.navbar.logo}
                className={`h-full w-auto object-contain transition-[opacity,transform] duration-500`}
            />
        </a>

        <button
            onClick={toggleMenu}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-500 relative z-20 ${isLight
                ? "text-primary hover:bg-primary/10"
                : "text-white hover:bg-white/10"
                }`}
            aria-label="Toggle menu"
        >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
    </div>
);

const MobileSidebar = ({ toggleMenu, sidebarVariants, backdropVariants }) => (
    <>
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            onClick={toggleMenu}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
        />
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={sidebarVariants}
            className="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-sm h-full p-8 shadow-2xl flex flex-col items-start justify-center rounded-l-[2.5rem] border-l bg-white/95 backdrop-blur-2xl border-primary/10"
        >
            <button
                onClick={toggleMenu}
                className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 text-primary hover:bg-primary/10"
            >
                <X size={28} />
            </button>

            <div className="absolute top-24 left-1/2 -translate-x-1/2 scale-150">
                <LocationIndicator variant="navbar-mobile" isLight={true} />
            </div>

            <div className="flex flex-col items-start gap-8 w-full pl-6 mt-12">
                {CONTENT.navbar.links.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.hash}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.105, type: "spring", stiffness: 200, damping: 25 }}
                        onClick={(e) => { e.preventDefault(); scrollToHash(link.hash); toggleMenu(); }}
                        className="text-lg font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:scale-110 origin-left text-primary/80 hover:text-primary"
                    >
                        {link.name}
                    </motion.a>
                ))}
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <img
                    src={CONTENT.navbar.logoSrc}
                    alt={CONTENT.navbar.logo}
                    className="h-16 w-auto opacity-30 grayscale"
                />
            </div>
        </motion.div>
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

    const sidebarVariants = {
        hidden: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                when: "beforeChildren"
            }
        }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    return (
        <>
            <nav
                className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[85vw] max-w-6xl transition-[opacity,transform] duration-700 ease-in-out ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                {isDesktop ? (
                    <DesktopNavbar isLight={isLight} />
                ) : (
                    <MobileNavbarToggle
                        isLight={isLight}
                        toggleMenu={toggleMenu}
                        isMenuOpen={isMenuOpen}
                    />
                )}
            </nav>

            <AnimatePresence>
                {isMenuOpen && !isDesktop && (
                    <MobileSidebar
                        toggleMenu={toggleMenu}
                        sidebarVariants={sidebarVariants}
                        backdropVariants={backdropVariants}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;