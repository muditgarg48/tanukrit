import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ target, duration = 1.5, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 1 });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

    useEffect(() => {
        if (isInView) {
            animate(count, target, {
                duration: duration,
                ease: "easeOut",
            });
        }
    }, [isInView, count, target, duration]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default Counter;