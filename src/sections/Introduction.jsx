import { motion } from "framer-motion";
import { CONTENT } from "../constants/content";
import {
    Gift,
    UserCheck,
    Gem,
    PackageCheck,
    Building2
} from "lucide-react";

const icons = {
    Gift,
    UserCheck,
    Gem,
    PackageCheck,
    Building2
};

const Introduction = () => {
    const { story, trustedBy, trust, founder } = CONTENT.introduction;

    return (
        <section id="about" data-nav-theme="light" className="bg-white px-4 py-24">
            {/* Block 1: Our Story */}
            <div className="pb-24 flex flex-col justify-center border-b border-gray-50">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center mb-16">
                        <h4 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Narrative</h4>
                        <h2 className="text-4xl md:text-6xl font-heading mb-8 leading-tight max-w-4xl mx-auto">
                            {story.title}
                        </h2>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            {story.beliefs}
                        </p>
                    </div>
                </div>
            </div>

            {/* Block 1.2: Trusted By (Marquee) */}
            <div className="py-24 border-b border-gray-50 overflow-hidden">
                <div className="max-w-6xl mx-auto w-full mb-12 text-center md:text-left">
                    <h4 className="text-accent text-sm font-bold uppercase tracking-[0.3em]">Trusted by</h4>
                </div>
                <div className="relative group/marquee">
                    <div className="animate-marquee flex gap-24 items-center">
                        {/* Double the items for seamless CSS marquee loop */}
                        {[...trustedBy, ...trustedBy].map((brand, idx) => (
                            <div key={`${brand.id}-${idx}`} className="group relative flex flex-col items-center">
                                <div className="h-16 md:h-20 flex items-center justify-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out cursor-pointer">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="h-full w-auto object-contain max-w-[120px] md:max-w-[160px]"
                                    />
                                </div>
                                {/* Name revealed on hover */}
                                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap">
                                    <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                                        {brand.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Block 1.5: Why Brands Trust Us */}
            <div className="py-24 bg-primary/5 overflow-hidden relative">
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

                <div className="max-w-6xl mx-auto w-full relative">
                    <div className="text-center mb-16">
                        <h4 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Branded Solutions</h4>
                        <h2 className="text-4xl md:text-5xl font-heading mb-4 leading-tight">{trust.title}</h2>
                        <div className="w-24 h-1 bg-accent/30 mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-12">
                        {trust.items.map((item) => {
                            const Icon = icons[item.icon];
                            return (
                                <div key={item.id} className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 mb-6 group-hover:shadow-md group-hover:border-accent/20 transition-all duration-500">
                                        {Icon && <Icon size={32} strokeWidth={1.2} className="text-accent group-hover:scale-110 transition-transform duration-500" />}
                                    </div>
                                    <h5 className="text-sm font-bold uppercase tracking-widest text-gray-700 leading-tight">
                                        {item.title}
                                    </h5>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Block 2: The Founder */}
            <div className="pt-24 flex flex-col justify-center bg-stone-50/30">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_40%] gap-y-12 md:gap-y-6 md:gap-x-24 items-center">
                        {/* 1. Headings Area */}
                        <div className="order-1 text-center md:text-left">
                            <h4 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">The Visionary</h4>
                            <h2 className="text-4xl md:text-5xl font-heading mb-4 leading-tight">
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
                                    <div className="text-[10px] uppercase tracking-widest opacity-80">{founder.role}</div>
                                </div>
                            </div>

                        </div>

                        {/* 3. Bio Area */}
                        <div className="order-3 text-center md:text-left">
                            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                                <p>{founder.bio}</p>
                                <p className="border-l-4 border-accent pl-6 italic">
                                    {founder.education}
                                </p>
                                <div className="pt-4">
                                    <div className="text-primary font-bold mb-2">Heritage of Creativity</div>
                                    <p className="text-base text-gray-500">
                                        {founder.experience}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-8">
                                <div>
                                    <div className="text-2xl font-bold text-primary">{founder.stats.established}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-400">Established</div>
                                </div>
                                <div className="w-px h-10 bg-stone-200" />
                                <div>
                                    <div className="text-2xl font-bold text-primary">{founder.stats.orders}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-400">Orders Delivered</div>
                                </div>
                                <div className="w-px h-10 bg-stone-200" />
                                <div>
                                    <div className="text-2xl font-bold text-primary">{founder.stats.reach}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-400">Reach</div>
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