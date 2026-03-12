import { CONTENT } from "../constants/content";

const LocationIndicator = ({ variant, isLight = false }) => {
    const { basedIn, shipping } = CONTENT.locationIndicator;

    // Standard glass styles matching the navbar
    const glassStyles = isLight
        ? "bg-[#dca3d7]/15 backdrop-blur-md border border-[#dca3d7]/30 text-primary"
        : "bg-white/20 backdrop-blur-md border border-white/30 text-white";

    if (variant === "hero") {
        return (
            <div className="w-full bg-primary py-1.5 flex justify-center items-center gap-2 text-white text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] z-30 shadow-sm transition-colors duration-500">
                <span>{basedIn}</span>
                <span className="opacity-40">•</span>
                <span>{shipping}</span>
            </div>
        );
    }

    if (variant === "navbar-desktop") {
        return (
            <div className={`flex justify-center items-center gap-2 text-[9px] uppercase tracking-[0.15em] px-6 py-1 rounded-b-xl shadow-md transition-colors duration-500 ${glassStyles}`}>
                <span className="font-medium">{basedIn}</span>
                <span className="opacity-40">•</span>
                <span className="font-medium">{shipping}</span>
            </div>
        );
    }

    if (variant === "navbar-mobile") {
        return (
            <div className={`flex flex-col items-center justify-center text-[7px] leading-tight uppercase tracking-widest px-2 transition-colors duration-500 ${isLight ? "text-primary" : "text-white"}`}>
                <span className="font-bold opacity-80">{basedIn}</span>
                <div className={`h-px w-3 my-0.5 ${isLight ? "bg-primary/20" : "bg-white/20"}`}></div>
                <span className="font-bold opacity-80">{shipping}</span>
            </div>
        );
    }

    return null;
};

export default LocationIndicator;
