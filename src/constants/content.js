import navbarLogo from "../assets/tanukrit_logo_navbar.jpg";
import heroLogo from "../assets/tanukrit_logo.jpg";

export const CONTENT = {
    navbar: {
        logo: "Tanukrit",
        logoSrc: navbarLogo,
        links: [
            { name: "About", hash: "#about" },
            { name: "Products", hash: "#products" },
            { name: "Testimonials", hash: "#testimonials" },
            { name: "Contact", hash: "#contact" },
        ],
    },
    hero: {
        tagline: "Artfully Packaged. Emotionally Delivered.",
        title: "Tanukrit",
        logoSrc: heroLogo,
        description: "Premium gifting rooted in art, intention, and meaningful expression. Every gift is a conversation.",
        backgroundImage: "https://images.unsplash.com/photo-1549465220-1d8c9d9c4709?q=80&w=2670&auto=format&fit=crop",
        motto: {
            text: "It says “I see you,” “I value you,” “You matter.”",
            context: "For me a gift can strengthen relationships, heal distances, celebrate milestones, and leave a lasting emotional imprint far beyond the moment it is received."
        }
    },
    introduction: {
        title: "A creative soul with an innate artistic sensibility.",
        description: "Tanukrit is the natural extension of Tanu’s journey—where art meets packaging, and packaging transforms into thoughtful gifting. With nearly 15 years of experience teaching art and design across schools and colleges, Tanu spent years nurturing creativity in others before founding Tanukrit.",
        founderImage: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=2574&auto=format&fit=crop",
        founderDetails: {
            name: "Tanu Agrawal",
            role: "Founder and Creative Head",
            education: "Graduate of the prestigious College of Art, Delhi (Fine Arts with Packaging subsidiary)",
            experience: "Nearly 15 years of experience teaching art and design"
        },
        values: [
            { id: 1, title: "Conversation", value: "Every gift tells a story" },
            { id: 2, title: "Detailing", value: "Intentional in every touch" },
            { id: 3, title: "Purpose", value: "Gifts that carry intention" },
        ],
        stats: {
            established: "2023",
            orders: "40+"
        }
    },
    showcase: {
        title: "Our Work",
        subtitle: "Crafted with intention",
        items: [
            { id: 1, title: "Artful Hampers", category: "Corporate", size: "large", image: "https://images.unsplash.com/photo-1549465220-1d8c9d9c4709?q=80&w=2670&auto=format&fit=crop" },
            { id: 2, title: "Milestone Gifts", category: "Personal", size: "small", image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80&w=2670&auto=format&fit=crop" },
            { id: 3, title: "Custom Packaging", category: "Luxury", size: "small", image: "https://images.unsplash.com/photo-1512418503837-f83141f3e79e?q=80&w=2670&auto=format&fit=crop" },
        ],
    },
    testimonials: {
        title: "Kind Words",
        subtitle: "From those we've had the pleasure to serve",
        items: [
            {
                id: 1,
                quote: "Tanukrit doesn't just package gifts; they package emotions. The attention to detail in our corporate hampers was unlike anything we've seen before.",
                author: "Ananya Sharma",
                role: "Marketing Director"
            },
            {
                id: 2,
                quote: "The milestone gift created for my parents' anniversary was breathtaking. It wasn't just a present; it was a beautiful conversation piece that brought tears of joy.",
                author: "Rohan Mehra",
                role: "Entrepreneur"
            },
            {
                id: 3,
                quote: "Sophisticated, intentional, and truly artistic. Tanu has a way of understanding exactly what you want to convey and translating it into a physical form.",
                author: "Priyanka Chopra",
                role: "Family Client"
            },
            {
                id: 4,
                quote: "Working with Tanukrit was a breeze. They understood our brand ethos perfectly and delivered something that truly resonated with our partners.",
                author: "Vikram Sethi",
                role: "Creative Lead"
            },
            {
                id: 5,
                quote: "Every touchpoint, from the initial consultation to the final delivery, was handled with such grace and professionalism. Highly recommended.",
                author: "Sneha Kapoor",
                role: "Event Planner"
            },
            {
                id: 6,
                quote: "The packaging itself is a gift. My clients were so impressed with the presentation that they didn't want to open them! Absolutely stunning work.",
                author: "Arjun Reddy",
                role: "Luxury Consultant"
            }
        ]
    },
    contact: {
        title: "Ready to tell your story?",
        description: "We look forward to creating something meaningful for you—just as we have for families and clients across the world.",
        cta: "Get in Touch",
        socials: [
            { id: 1, name: "Instagram", link: "https://www.instagram.com/tanu.krit", icon: "instagram", color: "#E1306C" },
            { id: 2, name: "WhatsApp", link: "https://wa.me/917982666274", icon: "whatsapp", color: "#25D366" },
            { id: 3, name: "LinkedIn", link: "https://www.linkedin.com/in/tanu-agrawal-89611b3b0/", icon: "linkedin", color: "#0077B5" },
            { id: 4, name: "Email", link: "mailto:support@tanukrit.com", icon: "mail", color: "#EA4335" },
        ],
        phones: ["+91 7982666274", "+91 7011313509"],
        location: {
            city: "Delhi",
            address: "2nd Floor, C-526, Vikaspuri, Delhi, 110018",
            disclaimer: "Visit by appointment strictly",
            link: "https://maps.app.goo.gl/SugEWPxAq7y1fZDy9",
            embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.442801453303!2d77.0664!3d28.6312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0590ed4b2d9d%3A0x633454b5dfd4e0e!2sC-526%2C%20Vikaspuri%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
            icon: "map-pin"
        },
        footer: {
            copyright: `© ${new Date().getFullYear()} Tanukrit • Designed with Intention`,
            tagline: "Artfully Packaged • Emotionally Delivered"
        }
    }
};
