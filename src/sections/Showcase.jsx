import React from "react";

const Showcase = () => {
    const products = [
        { id: 1, title: "Artful Hampers", category: "Corporate", size: "large" },
        { id: 2, title: "Milestone Gifts", category: "Personal", size: "small" },
        { id: 3, title: "Custom Packaging", category: "Luxury", size: "small" },
    ];

    return (
        <section id="products" className="py-24 bg-[#F9F9F9] px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading mb-4">Our Work</h2>
                    <p className="text-gray-500 uppercase tracking-widest text-sm">Crafted with intention</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative rounded-[2.5rem] overflow-hidden bg-white hover:scale-[1.02] transition-transform duration-500 ease-out shadow-sm hover:shadow-xl cursor-pointer ${item.size === 'large' ? 'md:col-span-2' : ''}`}
                        >
                            <div className="aspect-video w-full bg-gray-200 flex items-center justify-center text-gray-400 italic overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1549465220-1d8c9d9c4709?q=80&w=2670&auto=format&fit=crop')] font-serif">
                                    {/* Fallback pattern or placeholder */}
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                                <span className="text-accent text-xs uppercase tracking-[0.2em] mb-2">{item.category}</span>
                                <h3 className="text-white text-3xl font-heading mb-4">{item.title}</h3>
                                <button className="text-white/70 text-sm flex items-center gap-2 hover:text-white transition-colors">
                                    View Project
                                    <span className="text-xl">→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcase;
