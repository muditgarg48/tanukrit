import { CONTENT } from "../constants/content";
import {
    Gift,
    UserCheck,
    Gem,
    ShieldCheck,
    Building2
} from "lucide-react";
import Ribbon from "../components/Ribbon";
import Counter from "../components/Counter";

const icons = {
    Gift,
    UserCheck,
    Gem,
    ShieldCheck,
    Building2
};

const Introduction = () => {
    const { howItWorks, trustedBy, trust, founder } = CONTENT.introduction;

    return (
        <section id="about" data-nav-theme="light" className="bg-white py-12 md:py-24">

            {/* Block 1.1: How It Works */}
            <div className="py-8 border-b border-gray-50">
                <div className="max-w-4xl mx-auto w-full">
                    <div className="text-center mb-8 md:mb-12 px-4">
                        <h2 className="text-2xl md:text-3xl font-heading text-primary">{howItWorks.title}</h2>
                    </div>

                    <div className="space-y-0 px-4">
                        {howItWorks.steps.map((step, idx) => (
                            <div key={idx} className="group border-t border-stone-100 py-4 md:py-8 flex flex-row gap-5 md:gap-12 items-start md:items-center last:border-b last:border-stone-100">
                                <div className="text-4xl md:text-6xl font-heading text-stone-200 group-hover:text-primary/40 transition-all duration-700 leading-none pt-0.5 md:pt-0 shrink-0">
                                    {step.id}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-heading text-gray-800 mb-1 text-primary">{step.title}</h3>
                                    <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-xl">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Ribbon text={CONTENT.ribbons.howItWorksToTrustedBy} className="my-8" />

            {/* Block 1.5: Why Brands Trust Us */}
            <div className="py-10 md:py-12 bg-primary/5 overflow-hidden relative">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

                <div className="max-w-6xl mx-auto relative z-10 w-full">
                    <div className="text-center mb-8 md:mb-12 px-4">
                        <h2 className="text-2xl md:text-3xl font-heading text-primary">{trust.title}</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4">
                        {trust.items.map((item) => {
                            const IconComponent = icons[item.icon];
                            return (
                                <div key={item.id} className="group p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-stone-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 flex flex-row sm:flex-col items-center sm:items-center text-left sm:text-center gap-6 sm:gap-0">
                                    <div className="w-[24%] sm:w-20 sm:h-20 shrink-0 rounded-2xl sm:rounded-3xl bg-primary/5 flex items-center justify-center mb-0 sm:mb-6 group-hover:scale-110 transition-transform duration-500 aspect-square">
                                        <IconComponent className="text-primary w-11 h-11 sm:w-12 h-12" strokeWidth={1.2} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-heading text-primary mb-1 sm:mb-3 leading-tight tracking-tight sm:tracking-normal">{item.title}</h3>
                                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Block 1.2: Trusted By (Marquee) */}
            <div className="py-8 md:py-12 border-b border-gray-50 overflow-hidden">
                <div className="max-w-6xl mx-auto w-full mb-8 md:mb-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-heading text-primary">Trusted by</h2>
                </div>
                <div className="relative group/marquee">
                    <div className="animate-marquee flex gap-24 items-center">
                        {/* Double the items for seamless CSS marquee loop */}
                        {[...trustedBy, ...trustedBy].map((brand, idx) => (
                            <div key={`${brand.id}-${idx}`} className="group relative flex flex-col items-center">
                                <div className="h-16 md:h-20 flex items-center justify-center opacity-100 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out cursor-pointer">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="h-full w-auto object-contain max-w-[120px] md:max-w-[160px]"
                                    />
                                </div>
                                {/* Name revealed on hover */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap">
                                    <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                        {brand.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Block 2: The Founder */}
            <div id="founder" className="pt-8 md:pt-12 flex flex-col justify-center bg-stone-50/30">
                <div className="max-w-6xl mx-auto w-full px-4">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_40%] gap-y-8 md:gap-y-6 md:gap-x-24 items-center">
                        {/* 1. Headings Area */}
                        <div className="order-1 text-center md:text-left">
                            <h2 className="text-2xl md:text-3xl font-heading mb-4 leading-tight text-primary">
                                {founder.title}
                            </h2>
                        </div>

                        {/* 2. Image Area - Spans both rows on desktop */}
                        <div className="w-full max-w-md mx-auto relative order-2 md:col-start-2 md:row-start-1 md:row-span-2">
                            <div className="aspect-[4/5] rounded-[3rem] bg-primary/5 overflow-hidden shadow-2xl relative">
                                <img
                                    src={founder.founderImage}
                                    alt={founder.name}
                                    className="w-full h-full object-cover transition-all duration-1000"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                                    <div className="text-2xl font-heading">{founder.name}</div>
                                    <div className="text-xs uppercase tracking-widest opacity-80">{founder.role}</div>
                                </div>
                            </div>

                        </div>

                        {/* 3. Bio Area */}
                        <div className="order-3 text-justify md:text-left">
                            <div className="space-y-6 text-sm md:text-base text-gray-500 leading-relaxed">
                                <p>{founder.bio}</p>
                                <p className="text-primary italic">
                                    {founder.education}
                                </p>
                            </div>

                            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-8">
                                <div>
                                    <div className="text-xl md:text-2xl lg:text-3xl font-medium text-primary">{founder.stats.established}</div>
                                    <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Established</div>
                                </div>
                                <div className="w-px h-10 bg-stone-200" />
                                <div>
                                    <div className="text-xl md:text-2xl lg:text-3xl font-medium text-primary">
                                        <Counter target={100} duration={1} suffix="+" />
                                    </div>
                                    <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">Orders Delivered</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;