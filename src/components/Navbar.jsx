import { useState, useEffect } from "react";
import { CONTENT } from "../theme/content";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navTheme, setNavTheme] = useState("dark"); // Default for hero

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Focus on top portion of viewport
            threshold: 0
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const theme = entry.target.getAttribute("data-nav-theme");
                    if (theme) setNavTheme(theme);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);
        const sections = document.querySelectorAll("section[data-nav-theme]");
        sections.forEach((section) => observer.observe(section));

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const isLight = navTheme === "light";

    return (
        <nav
            className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-all duration-700 ease-in-out ${scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
        >
            <div className={`px-8 py-4 rounded-full flex justify-between items-center shadow-lg transition-all duration-500 ${isLight ? "glass-primary" : "glass"
                }`}>
                <a href="#" className="h-12">
                    <img
                        src={isLight ? CONTENT.navbar.logoSrc : CONTENT.hero.logoSrc}
                        alt={CONTENT.navbar.logo}
                        className={`h-full w-auto object-contain transition-all duration-500`}
                    />
                </a>
                <div className="hidden md:flex gap-8">
                    {CONTENT.navbar.links.map((link) => (
                        <a
                            key={link.name}
                            href={link.hash}
                            className={`text-sm font-medium transition-colors duration-500 uppercase tracking-widest ${isLight ? "text-primary hover:text-primary/70" : "text-white hover:text-white/70"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <button className={`md:hidden font-medium text-sm transition-colors duration-500 ${isLight ? "text-primary" : "text-white"
                    }`}>
                    Menu
                </button>
            </div>
        </nav>
    );
};

export default Navbar;