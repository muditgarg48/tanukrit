import { Instagram, MessageCircle, Linkedin, MapPin, Mail } from "lucide-react";
import { CONTENT } from "../constants/content";

const Contact = () => {
    const { title, description, socials, location, footer } = CONTENT.contact;

    const IconMap = {
        instagram: Instagram,
        whatsapp: MessageCircle,
        linkedin: Linkedin,
        "map-pin": MapPin,
        mail: Mail,
    };

    return (
        <section id="contact" data-nav-theme="dark" className="relative px-4 py-24 bg-primary overflow-hidden min-h-screen flex flex-col">
            {/* Decorative background elements could be added here if needed */}

            <div className="max-w-6xl mx-auto relative z-10 flex-1 flex flex-col justify-evenly w-full">
                <div className="text-center mb-12">
                    <h2 className="text-white text-5xl md:text-7xl font-heading mb-6">
                        {title}
                    </h2>
                    <p className="text-white/70 text-lg font-light max-w-2xl mx-auto">
                        {description}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 mb-8">
                    {/* Socials Grid */}
                    <div className="grid grid-cols-2 gap-6 md:gap-8">
                        {socials.map((social) => {
                            const IconComponent = IconMap[social.icon];
                            return (
                                <a
                                    key={social.id}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center group w-24 md:w-32"
                                >
                                    <div
                                        className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-transparent transition-all duration-300 group-hover:-translate-y-2 shadow-lg hover:shadow-2xl"
                                        style={{ "--hover-color": social.color }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = social.color}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)"}
                                    >
                                        {IconComponent && <IconComponent className="text-white w-7 h-7" strokeWidth={1.5} />}
                                    </div>
                                    <span className="text-white/60 text-[10px] mt-3 tracking-widest uppercase font-medium">{social.name}</span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Divider for desktop */}
                    <div className="hidden md:block w-px h-48 bg-white/10" />

                    {/* Location Info */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
                        <div className="group flex flex-col items-center md:items-start w-full">
                            <p className="text-white/70 text-sm font-light leading-relaxed mb-4">
                                {location.address}
                            </p>

                            <div className="flex flex-col items-center md:items-start mb-6 w-full">
                                <p className="text-white/80 font-medium text-sm tracking-wide">{location.workingDays}</p>
                                <p className="text-white/60 text-xs mt-1 tracking-wide">{location.workingHours}</p>
                            </div>

                            {/* Google Maps Embed */}
                            <div className="w-full h-40 rounded-2xl overflow-hidden border border-white/10 mb-4 shadow-inner bg-white/5">
                                <iframe
                                    src={location.embedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "grayscale(0.5) contrast(1.2) opacity(0.8)" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Tanukrit Location"
                                    className="hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                ></iframe>
                            </div>

                            <a
                                href={location.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:text-white text-xs tracking-widest uppercase font-medium mb-4 transition-colors"
                            >
                                View on Google Maps →
                            </a>

                            <p className="text-accent/80 text-[10px] uppercase tracking-widest font-semibold italic">
                                * {location.disclaimer}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <div className="text-white/40 text-[10px] tracking-[0.5em] uppercase">
                        {footer.tagline}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
