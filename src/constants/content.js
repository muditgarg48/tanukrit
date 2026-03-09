import navbarLogo from "../assets/tanukrit_logo_navbar.jpg";
import heroLogo from "../assets/tanukrit_logo.jpg";
import heroBackground from "../assets/hero_background.jpg";

export const CONTENT = {
    navbar: {
        logo: "Tanukrit",
        logoSrc: navbarLogo,
        links: [
            { name: "Work", hash: "#products" },
            { name: "Our Story", hash: "#about" },
            { name: "Testimonials", hash: "#testimonials" },
            { name: "Contact", hash: "#contact" },
        ],
    },
    hero: {
        tagline: "Curated with Care. Designed with Intention.",
        title: "Tanukrit",
        logoSrc: heroLogo,
        description: "Every gift is more than just an exchange. It is a heartfelt gesture of love, appreciation and care. ",
        backgroundImage: heroBackground,
        motto: {
            text: "We curate gifts that say, “I see you,” “I value you,” “You matter.”",
        }
    },
    introduction: {
        story: {
            title: "Artfully Packaged. Emotionally Delivered.",
            description: "At Tanukrit, we believe a gift is far more than an object—it's a catalyst for connection. Our sets are designed to strengthen relationships, heal distances, and leave a lasting emotional imprint that remains long after the moment has passed.",
            beliefs: "Every creation reflects our belief that a gift should not only look beautiful but also carry intention, emotion, and care. When you gift with purpose, you don't just give an item—you give a feeling.",
            values: [
                { id: 1, title: "Conversation", value: "Every gift is a dialogue between giver and receiver." },
                { id: 2, title: "Detailing", value: "Intentionality in every fold, ribbon, and tag." },
                { id: 3, title: "Purpose", value: "Curations guided by deep respect for the occasion." },
            ],
        },
        founder: {
            title: "The Visionary Behind the Craft",
            name: "Tanu Agrawal",
            role: "Founder & Creative Head",
            bio: "Tanu is a creative soul with a natural knack for beautifying everything she touches. For her, art has never been just a profession—it has been a way of seeing the world through a lens of aesthetics and purpose.",
            education: "A graduate of the prestigious College of Art, Delhi (Fine Arts with Packaging subsidiary), she blends artistic creativity with the structural precision of packaging.",
            stats: {
                established: "2023",
                orders: "40+",
                reach: "Pan India",
                experience: "Nearly 15 years"
            },
            founderImage: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=2574&auto=format&fit=crop", // Keep existing or update if user provides new
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
        socials: [
            { id: 1, name: "Instagram", link: "https://www.instagram.com/tanu.krit", icon: "instagram", color: "#E1306C" },
            { id: 2, name: "WhatsApp", link: "https://wa.me/917982666274", icon: "whatsapp", color: "#25D366" },
            { id: 3, name: "LinkedIn", link: "https://www.linkedin.com/in/tanu-agrawal-89611b3b0/", icon: "linkedin", color: "#0077B5" },
            { id: 4, name: "Email", link: "mailto:support@tanukrit.com", icon: "mail", color: "#EA4335" },
        ],
        location: {
            address: "2nd Floor, C-526, Vikaspuri, Delhi, 110018",
            disclaimer: "Visit by appointment strictly",
            link: "https://maps.app.goo.gl/SugEWPxAq7y1fZDy9",
            embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.442801453303!2d77.0664!3d28.6312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0590ed4b2d9d%3A0x633454b5dfd4e0e!2sC-526%2C%20Vikaspuri%2C%20Delhi%2C%20110018!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
        },
        footer: {
            copyright: `© ${new Date().getFullYear()} Tanukrit • Designed with Intention`,
            tagline: "Artfully Packaged • Emotionally Delivered"
        }
    }
};