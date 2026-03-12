import React, { useRef, useState, useEffect } from 'react';

const Ribbon = ({ text, className = "" }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [shouldMarquee, setShouldMarquee] = useState(false);
    const content = Array.isArray(text) ? text : [text];

    useEffect(() => {
        const checkOverflow = () => {
            if (containerRef.current && contentRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const contentWidth = contentRef.current.scrollWidth;
                setShouldMarquee(contentWidth > containerWidth);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [text]);

    const renderContent = (isRef = false) => (
        <div
            ref={isRef ? contentRef : null}
            className={`flex items-center gap-x-6 px-3 ${!shouldMarquee ? 'justify-center w-full' : ''}`}
        >
            {content.map((item, i) => (
                <React.Fragment key={i}>
                    {i == 0 && <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" />}
                    <span className="whitespace-nowrap uppercase tracking-[0.15em] text-[10px] md:text-sm font-medium leading-relaxed">
                        {item}
                    </span>
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full shrink-0" />
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <div
            ref={containerRef}
            data-nav-theme="dark"
            className={`w-full bg-primary text-white py-3 md:py-4 overflow-hidden relative ${className}`}
        >
            <div className={`${shouldMarquee ? 'animate-marquee flex' : 'flex justify-center w-full'}`}>
                {renderContent(true)}
                {shouldMarquee && (
                    <>
                        {renderContent()}
                        {renderContent()}
                        {renderContent()}
                    </>
                )}
            </div>
        </div>
    );
};

export default Ribbon;