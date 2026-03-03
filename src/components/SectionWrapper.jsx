import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const SectionWrapper = ({ children, "data-nav-theme": navTheme }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Balanced spring for smooth Transitions
    const springConfig = {
        stiffness: 400,
        damping: 40,
        mass: 0.3,
        restDelta: 0.01
    };

    const [range, setRange] = useState([0, 0.4, 0.6, 1]);

    useEffect(() => {
        const updateRange = () => {
            if (containerRef.current) {
                // Approximate 4vh padding on each side for the "margins"
                const v = window.innerHeight;
                const h = containerRef.current.offsetHeight;
                const total = h + v;
                const k = v / total;
                setRange([0, k, 1 - k, 1]);
            }
        };

        updateRange();
        window.addEventListener("resize", updateRange);
        return () => window.removeEventListener("resize", updateRange);
    }, []);

    const scale = useSpring(useTransform(scrollYProgress, range, [0.94, 1, 1, 0.94]), springConfig);
    const borderRadius = useSpring(useTransform(scrollYProgress, range, ["32px", "0px", "0px", "32px"]), springConfig);
    const opacity = useTransform(scrollYProgress, [range[0], range[1], range[2], range[3]], [0.6, 1, 1, 0.6]);
    const zIndex = useTransform(scrollYProgress, [0, 0.5, 1], [1, 10, 1]);

    return (
        <div
            ref={containerRef}
            data-nav-theme={navTheme}
            style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
            }}
            className="relative w-full min-h-screen flex flex-col items-center bg-transparent"
        >
            <motion.div
                style={{
                    scale,
                    borderRadius,
                    opacity,
                    zIndex,
                    transformOrigin: "center center",
                    willChange: "transform, border-radius, opacity",
                }}
                className="w-full overflow-hidden bg-white shadow-2xl"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default SectionWrapper;