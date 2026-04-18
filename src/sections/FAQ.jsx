"use client";

import { useState } from "react";
import { CONTENT } from "../constants/content";

const FAQItem = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-stone-200 last:border-0">
            <button
                className="w-full py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={onClick}
            >
                <h3 className="text-lg md:text-xl font-heading text-text group-hover:text-primary transition-colors pr-8">
                    {faq.question}
                </h3>
                <span className={`transform transition-transform duration-300 text-primary ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="text-gray-600 font-light leading-relaxed">
                    {faq.answer}
                </p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const { title, items } = CONTENT.faq;
    const [openId, setOpenId] = useState(null);

    const toggleOpen = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" data-nav-theme="light" className="py-20 md:py-32 bg-stone-50 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-primary">{title}</h2>
                </div>

                <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-stone-100">
                    <div className="flex flex-col">
                        {items.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                faq={faq}
                                isOpen={openId === faq.id}
                                onClick={() => toggleOpen(faq.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;