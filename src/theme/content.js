export const CONTENT = {
    navbar: {
        logo: "Tanukrit",
        logoSrc: "/src/assets/tanukrit_logo_navbar.jpg",
        links: [
            { name: "About", hash: "#about" },
            { name: "Products", hash: "#products" },
            { name: "Philosophy", hash: "#philosophy" },
            { name: "Contact", hash: "#contact" },
        ],
    },
    hero: {
        tagline: "Artfully Packaged. Emotionally Delivered.",
        title: "Tanukrit",
        logoSrc: "/src/assets/tanukrit_logo.jpg",
        description: "Premium gifting rooted in art, intention, and meaningful expression. Every gift is a conversation.",
        backgroundImage: "https://images.unsplash.com/photo-1549465220-1d8c9d9c4709?q=80&w=2670&auto=format&fit=crop",
    },
    introduction: {
        title: "A creative soul with an innate artistic sensibility.",
        description: "Tanukrit is the natural extension of Tanu’s journey—where art meets packaging, and packaging transforms into thoughtful gifting.",
        founderImage: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=2574&auto=format&fit=crop",
        values: [
            { id: 1, title: "Conversation", value: "Every gift tells a story" },
            { id: 2, title: "Detailing", value: "Intentional in every touch" },
            { id: 3, title: "Purpose", value: "Gifts that carry intention" },
        ],
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
    contact: {
        title: "Ready to tell your story?",
        description: "We look forward to creating something meaningful for you—just as we have for families and clients across the world.",
        cta: "Get in Touch",
        socials: [
            { id: 1, name: "Instagram", link: "https://instagram.com/tanu.krit", icon: "IG" },
            { id: 2, name: "WhatsApp", link: "https://wa.me/917982666274", icon: "WA" },
            { id: 3, name: "LinkedIn", link: "#", icon: "LI" },
            { id: 4, name: "Location", link: "#", icon: "Delhi" },
        ],
        footer: {
            copyright: `© ${new Date().getFullYear()} Tanukrit • Designed with Intention`,
            tagline: "Artfully Packaged • Emotionally Delivered"
        }
    }
};