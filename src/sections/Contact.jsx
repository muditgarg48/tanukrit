import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { CONTENT } from "../constants/content";

const Contact = () => {
    const { title, description, email, phone, location, footer } = CONTENT.contact;

    return (
        <section id="contact" data-nav-theme="dark" className="relative px-4 py-16 md:py-20 bg-primary overflow-hidden flex flex-col justify-center">
            {/* Background pattern could be added here */}

            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-white text-4xl md:text-7xl font-heading mb-6 leading-tight whitespace-pre-line">
                        {title}
                    </h2>
                    <p className="text-white/70 text-base md:text-xl font-light max-w-2xl leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                    {/* Left Column: Contact Details */}
                    <div className="space-y-12">
                        {/* Contact Us Section */}
                        <div>
                            <h4 className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Contact Us</h4>
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${email}`}
                                    className="flex items-center gap-4 text-white group hover:text-white/80 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/5 transition-transform group-hover:scale-110">
                                        <Mail size={18} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-lg md:text-xl font-medium tracking-tight">{email}</span>
                                </a>
                                <a
                                    href={`tel:${phone.replace(/\s/g, '')}`}
                                    className="flex items-center gap-4 text-white group hover:text-white/80 transition-colors"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/5 transition-transform group-hover:scale-110">
                                        <Phone size={18} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-lg md:text-xl font-medium tracking-tight">{phone}</span>
                                </a>
                                <div className="pt-2">
                                    <p className="text-white font-medium text-sm tracking-wide">{location.workingDays}</p>
                                    <p className="text-white/60 text-xs mt-1 tracking-wide">{location.workingHours}</p>
                                </div>
                            </div>
                        </div>

                        {/* Studio Address Section */}
                        <div>
                            <h4 className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Studio Address</h4>
                            <div className="space-y-4">
                                <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-md">
                                    {location.address}
                                </p>
                                <p className="text-white/60 text-sm tracking-wide italic font-medium">
                                    {location.disclaimer}
                                </p>
                            </div>
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
                            className="inline-flex items-center gap-2 text-white/90 hover:text-white text-xs tracking-widest uppercase font-bold transition-all hover:gap-4 self-start"
                        >
                            View on Google Maps <ExternalLink size={12} />
                        </a>
                    </div>
                </div>

                <div className="mt-16 md:mt-24 pt-8 border-t border-white/5">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-white/40 text-[10px] tracking-[0.4em] uppercase order-2 md:order-1">
                            {footer.tagline}
                        </div>
                        <div className="text-white/40 text-[10px] tracking-[0.2em] uppercase order-1 md:order-2">
                            {footer.copyright}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
