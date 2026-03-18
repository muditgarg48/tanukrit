import { ExternalLink } from "lucide-react";
import { CONTENT } from "../constants/content";
import logo from "../assets/tanukrit_logo.webp";
import ImageWithLoader from "../components/ImageWithLoader";

const Contact = () => {
    const { title, description, email, phone, location, footer } = CONTENT.contact;

    return (
        <section id="contact" data-nav-theme="dark" className="relative px-4 py-12 md:py-16 bg-primary overflow-hidden flex flex-col justify-center">
            {/* Background pattern could be added here */}

            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <div className="mb-8 md:mb-16">
                    <h2 className="text-white text-2xl md:text-3xl font-heading mb-4 md:mb-6 leading-tight whitespace-pre-line">
                        {title}
                    </h2>
                    <p className="text-white/70 text-sm md:text-base font-light max-w-2xl leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
                    {/* Left Column: Contact Details */}
                    <div className="space-y-6 md:space-y-12">
                        {/* Contact Us Section */}
                        <div className="mb-6 md:mb-10">
                            <h4 className="text-white/40 text-sm md:text-base uppercase tracking-[0.2em] font-bold mb-4 font-body">Contact Us</h4>
                            <div className="flex flex-col space-y-0">
                                <a
                                    href={`mailto:${email}`}
                                    className="block text-white/80 group hover:text-white transition-colors"
                                >
                                    <span className="text-sm md:text-base tracking-tight underline underline-offset-4 decoration-white/20 group-hover:decoration-white/100 font-body">{email}</span>
                                </a>
                                <a
                                    href={`tel:${phone.replace(/\s/g, '')}`}
                                    className="block text-white/80 group hover:text-white transition-colors"
                                >
                                    <span className="text-sm md:text-base tracking-tight font-body">{phone}</span>
                                </a>
                                <div>
                                    <p className="text-white/80 font-medium text-sm md:text-base tracking-tight font-body">{location.workingDays}</p>
                                    <p className="text-white/80 text-sm md:text-base tracking-tight font-body">{location.workingHours}</p>
                                </div>
                            </div>
                        </div>

                        {/* Studio Address Section */}
                        <div className="mb-0">
                            <h4 className="text-white/40 text-sm md:text-base uppercase tracking-[0.2em] font-bold mb-4 font-body">Studio Address</h4>
                            <div className="flex flex-col space-y-2">
                                <p className="text-white/80 text-sm md:text-base font-light leading-relaxed max-w-md font-body">
                                    {location.address}
                                </p>
                                <p className="text-white/60 text-sm tracking-wide italic font-medium">
                                    {location.disclaimer}
                                </p>
                            </div>
                        </div>

                        <div className="select-none pointer-events-none ml-1 md:ml-2 mt-4 md:mt-0">
                            <ImageWithLoader
                                src={logo}
                                alt="Tanukrit Logo"
                                className="h-24 md:h-32 object-contain mix-blend-screen brightness-200 transition-all duration-300 -ml-1 md:-ml-4"
                            />
                        </div>
                    </div>

                    {/* Right Column: Map & Link */}
                    <div className="flex flex-col gap-6">
                        <div className="w-full aspect-video md:aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                            <iframe
                                src={location.embedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "grayscale(0.5) contrast(0.8) invert(1) opacity(0.8)" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Tanukrit Location"
                                className="hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700"
                            ></iframe>
                        </div>
                        <a
                            href={location.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-xs tracking-widest uppercase transition-all hover:gap-4 self-center"
                        >
                            View on Google Maps <ExternalLink size={10} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 md:mt-12 flex flex-col items-start">

                    <div className="w-full pt-4 md:pt-6 border-t border-white/5">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                            <div className="text-white/40 text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase order-2 md:order-1 text-center">
                                {footer.tagline}
                            </div>
                            <div className="flex flex-col items-center md:items-end gap-1.5 md:gap-2 order-1 md:order-2">
                                {/* Developer Credits moved here */}
                                <div className="flex items-baseline gap-2 group">
                                    <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">
                                        Developer &amp; Maintainer:
                                    </span>
                                    <a
                                        href="https://muditgarg48.github.io"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative text-white/70 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:text-white hover:tracking-[0.3em]"
                                    >
                                        Mudit Garg
                                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full" />
                                    </a>
                                </div>
                                <div className="text-white/40 text-[10px] md:text-xs tracking-[0.2em] uppercase text-center">
                                    {footer.copyright}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;