import React from "react";

const Introduction = () => {
    const values = [
        { title: "Conversation", value: "Every gift tells a story" },
        { title: "Detailing", value: "Intentional in every touch" },
        { title: "Purpose", value: "Gifts that carry intention" },
    ];

    return (
        <section id="about" className="py-24 bg-white px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-heading mb-8 leading-tight">
                            A creative soul with an innate artistic sensibility.
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl">
                            Tanukrit is the natural extension of Tanu’s journey—where art meets packaging,
                            and packaging transforms into thoughtful gifting.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {values.map((v) => (
                                <div key={v.title} className="p-6 bg-cream/30 rounded-3xl border border-gray-100">
                                    <h3 className="text-accent text-lg font-heading mb-2 uppercase tracking-widest">{v.title}</h3>
                                    <p className="text-sm text-gray-500">{v.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="aspect-[4/5] rounded-[3rem] bg-secondary/10 overflow-hidden shadow-2xl">
                            <div className="w-full h-full flex items-center justify-center text-secondary/30 italic">
                                Founder Portrait / Image
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
