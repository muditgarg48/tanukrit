// "Scroll" cue with an animated line; `light` = for light backgrounds.
const ScrollIndicator = ({ light = false, className = "" }) => (
    <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 ${className}`} aria-hidden>
        <span className={`text-[10px] uppercase tracking-[0.4em] font-light ${light ? "text-primary/50" : "text-white/40"}`}>Scroll</span>
        <div className={`w-[1px] h-10 relative overflow-hidden ${light ? "bg-primary/10" : "bg-white/10"}`}>
            <div className={`absolute top-0 left-0 w-full h-full animate-scroll-line ${light ? "bg-primary/60" : "bg-white/70"}`}></div>
        </div>
    </div>
);

export default ScrollIndicator;
