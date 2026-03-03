import { CONTENT } from "../theme/content";

const Showcase = () => {
    const { title, subtitle, items } = CONTENT.showcase;

    return (
        <section id="products" data-nav-theme="light" className="py-24 bg-[#F9F9F9] px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading mb-4">{title}</h2>
                    <p className="text-gray-500 uppercase tracking-widest text-sm">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative rounded-[2.5rem] overflow-hidden bg-white hover:scale-[1.02] transition-transform duration-500 ease-out shadow-sm hover:shadow-xl cursor-pointer ${item.size === 'large' ? 'md:col-span-2' : ''}`}
                        >
                            <div className="aspect-video w-full bg-gray-200 overflow-hidden">
                                <div
                                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
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