import { CONTENT } from "../constants/content";
import { scrollToHash } from "../utils/scroll";

const Hero = () => {
    const { tagline, title, logoSrc, description, backgroundImage } = CONTENT.hero;

    return (
        <section data-nav-theme="dark" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-primary px-4 pt-20">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]"></div>
            </div>

            {/* Minimal Navigation Layer */}
            <div className="absolute top-0 left-0 w-full h-24 z-20 flex justify-center items-center">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-14 px-4 drop-shadow-md">
                    {CONTENT.navbar.links.map((link) => (
                        <a
                            key={link.name}
                            href={link.hash}
                            onClick={(e) => { e.preventDefault(); scrollToHash(link.hash); }}
                            className="text-[10px] md:text-xs font-medium text-white/80 hover:text-white transition-colors uppercase tracking-[0.3em]"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            <div className="relative z-10 text-center text-white max-w-4xl flex flex-col items-center drop-shadow-2xl">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 md:mb-8 block animate-fade-in opacity-90 font-medium text-white shadow-black/20 text-shadow-sm">
                    {tagline}
                </span>
                <div className="mb-6 md:mb-10 animate-fade-in filter drop-shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <img
                        src={logoSrc}
                        alt={title}
                        className="h-[15vh] md:h-[25vh] lg:h-[30vh] w-auto object-contain brightness-110"
                    />
                </div>
                <p className="text-base md:text-xl font-light mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed opacity-100 px-4 drop-shadow-lg">
                    {description}
                </p>
                {CONTENT.hero.motto && (
                    <div className="animate-fade-in delay-500 bg-black/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/5">
                        <p className="text-lg md:text-2xl font-heading italic text-white mb-0 drop-shadow-md">
                            {CONTENT.hero.motto.text}
                        </p>
                    </div>
                )}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-4">
                {/* <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 rotate-180 [writing-mode:vertical-lr]">Scroll</span> */}
                <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;