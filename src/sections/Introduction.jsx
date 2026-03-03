import React from "react";
import { CONTENT } from "../theme/content";

const Introduction = () => {
    const { title, description, values, founderImage } = CONTENT.introduction;

    return (
        <section id="about" className="py-24 bg-white px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-heading mb-8 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl">
                            {description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            {values.map((v) => (
                                <div key={v.id} className="p-6 bg-cream/30 rounded-3xl border border-gray-100">
                                    <h3 className="text-accent text-lg font-heading mb-2 uppercase tracking-widest">{v.title}</h3>
                                    <p className="text-sm text-gray-500">{v.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="aspect-[4/5] rounded-[3rem] bg-secondary/10 overflow-hidden shadow-2xl">
                            <img
                                src={founderImage}
                                alt="Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;