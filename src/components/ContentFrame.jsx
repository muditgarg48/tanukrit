import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";

/**
 * ContentFrame — wraps all middle sections (Introduction → Contact) as one
 * cinematic "reel frame".
 *
 * Entry: snaps/zooms in quickly as user scrolls away from Hero.
 * Exit:  zooms back out precisely as the Footer enters the viewport.
 *
 * Key design decision on symmetry:
 *   - ENTRY is compressed (plays over a short scroll window = snappy click-in).
 *   - EXIT starts exactly when the Footer appears (rawExit threshold) — no
 *     compression — so the animation is always visible to the user and reads
 *     as intentional. Compressing the exit would push it past the moment the
 *     footer is visible, making it appear as though nothing is animating.
 */
const ContentFrame = ({ children }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        // 0 → frame top at viewport bottom  (entering from below)
        // 1 → frame bottom at viewport top  (fully exited above)
        offset: ["start end", "end start"],
    });

    // rawEntry = progress when frame top reaches viewport top  (frame fully locked in)
    // rawExit  = progress when frame bottom reaches viewport bottom (Footer just appears)
    const [breakpoints, setBreakpoints] = useState([0.2, 0.8]);

    useEffect(() => {
        const compute = () => {
            const vh = window.innerHeight;
            const fh = ref.current?.offsetHeight ?? vh * 4;
            const total = fh + vh;
            setBreakpoints([vh / total, fh / total]);
        };
        compute();
        window.addEventListener("resize", compute);
        return () => window.removeEventListener("resize", compute);
    }, []);

    const [rawEntry, rawExit] = breakpoints;

    // Compress ENTRY only → snappy click-in feel.
    // Leave EXIT at rawExit → animation starts the instant Footer appears.
    const ENTRY_COMPRESS = 0.4;
    const entryEnd = rawEntry * ENTRY_COMPRESS;
    const exitStart = rawExit; // no compression

    const springConfig = { stiffness: 320, damping: 36, mass: 0.4 };

    const scale = useSpring(
        useTransform(
            scrollYProgress,
            [0, entryEnd, exitStart, 1],
            [0.96, 1, 1, 0.96]
        ),
        springConfig
    );

    const borderRadius = useSpring(
        useTransform(
            scrollYProgress,
            [0, entryEnd, exitStart, 1],
            ["2.5rem", "0rem", "0rem", "2.5rem"]
        ),
        springConfig
    );

    // Symmetric Y=0 shadow — equal on all 4 sides.
    // clip-path on the outer wrapper clips any top/bottom escape.
    const shadow = useTransform(
        scrollYProgress,
        [0, entryEnd, exitStart, 1],
        [
            "0 0 16px 0 rgba(30,12,30,0.15)",
            "0 0 48px 0 rgba(30,12,30,0.50)",
            "0 0 48px 0 rgba(30,12,30,0.50)",
            "0 0 16px 0 rgba(30,12,30,0.15)",
        ]
    );

    return (
        <div
            ref={ref}
            className="relative w-full bg-transparent"
            // clip-path allows 100px shadow bleed on sides, clips flush at
            // top and bottom so shadow never escapes into Hero or Footer.
            style={{ clipPath: 'inset(0 -100px)' }}
        >
            <motion.div
                style={{
                    scale,
                    borderRadius,
                    boxShadow: shadow,
                    transformOrigin: "center center",
                    willChange: "transform, border-radius",
                }}
                className="w-full overflow-hidden bg-primary"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ContentFrame;