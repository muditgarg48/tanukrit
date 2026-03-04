import { CONTENT } from "../constants/content";

const Introduction = () => {
    const { title, description, values, founderImage, founderDetails, stats } = CONTENT.introduction;

    return (
        <section id="about" data-nav-theme="light" className="pb-24 bg-white px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-heading mb-8 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-xl">
                            {description}
                        </p>

                        {founderDetails && (
                            <div className="mb-12 text-left">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">The Visionary</h4>
                                <p className="text-gray-700 italic border-l-4 border-accent pl-4 mb-4">
                                    {founderDetails.education}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    {founderDetails.experience}
                                </p>
                            </div>
                        )}

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
                        <div className="aspect-[4/5] rounded-[3rem] bg-secondary/10 overflow-hidden shadow-2xl relative">
                            <img
                                src={founderImage}
                                alt="Founder"
                                className="w-full h-full object-cover"
                            />
                            {stats && (
                                <div className="absolute bottom-10 right-10 flex gap-4">
                                    <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl text-center">
                                        <div className="text-2xl font-bold text-primary">{stats.established}</div>
                                        <div className="text-[10px] uppercase tracking-widest text-gray-500">Established</div>
                                    </div>
                                    <div className="bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl text-center">
                                        <div className="text-2xl font-bold text-primary">{stats.orders}</div>
                                        <div className="text-[10px] uppercase tracking-widest text-gray-500">Orders</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;