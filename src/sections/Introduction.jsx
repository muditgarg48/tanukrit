import { CONTENT } from "../constants/content";

const Introduction = () => {
    const { story, founder } = CONTENT.introduction;

    return (
        <section id="about" data-nav-theme="light" className="bg-white">
            {/* Block 1: Our Story */}
            <div className="min-h-screen flex flex-col justify-center px-4 pb-24 border-b border-gray-50">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="text-center mb-16">
                        <h4 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Narrative</h4>
                        <h2 className="text-4xl md:text-6xl font-heading mb-8 leading-tight max-w-4xl mx-auto">
                            {story.title}
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto italic">
                            "{story.description}"
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {story.values.map((v) => (
                            <div key={v.id} className="p-10 bg-stone-50/50 rounded-[2.5rem] border border-stone-100 flex flex-col items-center text-center group hover:bg-primary transition-all duration-500">
                                <h3 className="text-accent text-lg font-heading mb-4 uppercase tracking-widest group-hover:text-white transition-colors">{v.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-white/80 transition-colors">{v.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-500 max-w-3xl mx-auto leading-relaxed">
                            {story.beliefs}
                        </p>
                    </div>
                </div>
            </div>

            {/* Block 2: The Founder */}
            <div className="min-h-screen flex flex-col justify-center px-4 pb-24 bg-stone-50/30">
                <div className="max-w-6xl mx-auto w-full">
                    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        <div className="flex-1 relative order-2 md:order-1">
                            <div className="aspect-[4/5] rounded-[3rem] bg-primary/5 overflow-hidden shadow-2xl relative">
                                <img
                                    src={founder.founderImage}
                                    alt={founder.name}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                                    <div className="text-2xl font-heading">{founder.name}</div>
                                    <div className="text-[10px] uppercase tracking-widest opacity-80">{founder.role}</div>
                                </div>
                            </div>

                            {/* Stats Float */}
                            <div className="absolute -bottom-6 -right-6 hidden lg:flex flex-col gap-4">
                                <div className="bg-white p-6 rounded-3xl shadow-xl border border-stone-100">
                                    <div className="text-3xl font-bold text-primary">{founder.stats.experience}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-400">Expertise</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left order-1 md:order-2">
                            <h4 className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4">The Visionary</h4>
                            <h2 className="text-4xl md:text-5xl font-heading mb-8 leading-tight">
                                {founder.title}
                            </h2>
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
                                    <div className="text-2xl font-bold text-primary">Global</div>
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