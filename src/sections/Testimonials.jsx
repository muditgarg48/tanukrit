import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CONTENT } from "../constants/content";

const Testimonials = () => {
    const { title, items } = CONTENT.testimonials;

    return (
        <section id="testimonials" data-nav-theme="light" className="min-h-screen flex flex-col bg-white px-4 pb-12 md:pb-24 overflow-x-hidden">
            <div className="flex-1 flex flex-col justify-center">
                <div className="max-w-7xl mx-auto relative group/nav w-full">
                    <div className="text-center mb-8 md:mb-12 px-4">
                        <h2 className="text-2xl md:text-3xl font-heading text-primary">{title}</h2>
                    </div>

                    <div className="relative px-4 sm:px-12 overflow-hidden">
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={32}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 10000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{
                                clickable: true,
                                el: ".swiper-pagination-custom",
                            }}
                            navigation={{
                                nextEl: ".swiper-button-next-custom",
                                prevEl: ".swiper-button-prev-custom",
                            }}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="testimonials-swiper !pb-12"
                        >
                            {items.map((item) => (
                                <SwiperSlide key={item.id} className="!h-auto">
                                    <div className="group relative p-6 md:p-8 rounded-[2.5rem] bg-stone-50/50 border border-stone-100 flex flex-col h-full hover:bg-primary transition-all duration-500 shadow-sm hover:shadow-2xl border-b-4 border-b-transparent hover:border-b-white/20">
                                        <span className="text-7xl text-primary/20 font-serif absolute top-6 left-8 pointer-events-none group-hover:text-white/20 transition-colors leading-none">“</span>

                                        <div className="flex-grow flex items-center mb-6 mt-4">
                                            <p className="text-sm md:text-base font-light leading-relaxed text-gray-700 relative z-10 italic group-hover:text-white transition-colors">
                                                {item.quote}
                                            </p>
                                        </div>

                                        <div className="mt-auto pt-8 border-t border-stone-100 group-hover:border-white/20 flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-primary group-hover:text-white font-heading text-lg transition-colors">
                                                {item.author[0]}
                                            </div>
                                            <div>
                                                <h4 className="font-heading text-base md:text-lg lg:text-xl text-text leading-none group-hover:text-white transition-colors">{item.author}</h4>
                                                <span className="text-xs uppercase tracking-[0.2em] text-primary/60 group-hover:text-white/60 mt-2 block font-medium transition-colors">
                                                    {item.role}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <button className="swiper-button-prev-custom group absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-stone-50/80 backdrop-blur-sm border border-stone-100 text-primary hover:bg-primary transition-all duration-300 opacity-0 group-hover/nav:opacity-100 -translate-x-6 group-hover/nav:translate-x-0 shadow-lg cursor-pointer">
                            <svg className="w-6 h-6 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button className="swiper-button-next-custom group absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-stone-50/80 backdrop-blur-sm border border-stone-100 text-primary hover:bg-primary transition-all duration-300 opacity-0 group-hover/nav:opacity-100 translate-x-6 group-hover/nav:translate-x-0 shadow-lg cursor-pointer">
                            <svg className="w-6 h-6 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </button>

                        {/* Custom Pagination */}
                        <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .swiper-pagination-custom .swiper-pagination-bullet {
                    width: 6px;
                    height: 6px;
                    background: var(--color-primary);
                    opacity: 0.2;
                    transition: all 0.5s;
                    margin: 0 !important;
                    border-radius: 99px;
                }
                .swiper-pagination-custom .swiper-pagination-bullet-active {
                    width: 32px;
                    opacity: 1;
                }

                @media (max-width: 767px) {
                    .testimonials-swiper .swiper-slide-active .group {
                        background-color: var(--color-primary) !important;
                        border-bottom-color: rgba(255, 255, 255, 0.2) !important;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
                    }
                    .testimonials-swiper .swiper-slide-active .group span.text-7xl {
                        color: rgba(255, 255, 255, 0.2) !important;
                    }
                    .testimonials-swiper .swiper-slide-active .group p {
                        color: white !important;
                    }
                    .testimonials-swiper .swiper-slide-active .group .border-t {
                        border-top-color: rgba(255, 255, 255, 0.2) !important;
                    }
                    .testimonials-swiper .swiper-slide-active .group .w-10 {
                        background-color: rgba(255, 255, 255, 0.2) !important;
                        color: white !important;
                    }
                    .testimonials-swiper .swiper-slide-active .group h4 {
                        color: white !important;
                    }
                    .testimonials-swiper .swiper-slide-active .group .block {
                        color: rgba(255, 255, 255, 0.6) !important;
                    }
                }
            `}} />
        </section>
    );
};

export default Testimonials;
