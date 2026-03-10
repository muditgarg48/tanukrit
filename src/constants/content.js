import navbarLogo from "../assets/tanukrit_logo_navbar.webp";
import heroLogo from "../assets/tanukrit_logo.webp";
import heroBackground from "../assets/hero_background.webp";
import founderImage from "../assets/founder_image.webp";

// Brands
import metlzLogo from "../assets/brands/meltz_logo.webp";
import publicissapientLogo from "../assets/brands/publicissapient_logo.webp";
import wbiweddingsLogo from "../assets/brands/wbiweddings_logo.webp";
import badhaihoeventsLogo from "../assets/brands/badhaihoevents_logo.webp";
import jsfitnessstudioLogo from "../assets/brands/jsfitnessstudio_logo.webp";
// Work
import babyShowerImage from "../assets/work/baby_shower.webp";
import birthdayFavoursImage from "../assets/work/birthday_favours.webp";
import corporateHampersImage from "../assets/work/corporate_hampers.webp";
import festivalsImage from "../assets/work/festivals.webp";
import milestoneCelebrationsImage from "../assets/work/milestone_celebrations.webp";
import returnFavoursImage from "../assets/work/return_favours.webp";
import roomHampersImage from "../assets/work/room_hampers.webp";
import trousseauImage from "../assets/work/trousseau.webp";
import weddingFavoursImage from "../assets/work/wedding_favours.webp";
import weddingInvitesImage from "../assets/work/wedding_invites.webp";

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
            beliefs: "The right gift is a heartfelt gesture of love, appreciation and care. We pour intention into every detail, crafting luxury hampers that tell a story. With Tanukrit, every gift is thoughtful and every detail is intentional.",
        },
        howItWorks: {
            title: "How It Works",
            steps: [
                { id: "01", title: "Share Your Requirement", description: "Tell us the occasion, quantity and hamper references (if any)." },
                { id: "02", title: "We Curate Your Hampers", description: "Our team designs a personalised hamper concept for you." },
                { id: "03", title: "Approve & Personalise", description: "Review the sample and add custom details." },
                { id: "04", title: "We Pack & Deliver", description: "Your hampers are beautifully packed and delivered on time." },
            ]
        },
        trustedBy: [
            { id: 1, name: "Dusit Thani", logo: "https://www.dusit.com/wp-content/themes/dusit-global/images/corporate-logos/d/dusit-black.svg" },
            { id: 2, name: "MELTZ", logo: metlzLogo },
            { id: 3, name: "Publicis Sapient", logo: publicissapientLogo },
            { id: 4, name: "WBI", logo: wbiweddingsLogo },
            { id: 5, name: "Badhai Ho Events", logo: badhaihoeventsLogo },
            { id: 6, name: "js Fitness Studio", logo: jsfitnessstudioLogo }
        ],
        trust: {
            title: "Why Brands Trust Us",
            items: [
                { id: 1, title: "Thoughtful Gifting", description: "Every hamper is designed with intention and emotion", icon: "Gift" },
                { id: 2, title: "Custom Personalisation", description: "Hampers personalised according to your occasion and preferences.", icon: "UserCheck" },
                { id: 3, title: "Premium Sourcing", description: "Carefully selected products from trusted vendors.", icon: "Gem" },
                { id: 4, title: "Reliability & Execution", description: "From concept to Pan-India delivery – we handle it all seamlessly.", icon: "ShieldCheck" },
            ]
        },
        founder: {
            title: "Meet the Founder",
            name: "Tanu Agrawal",
            role: "Founder & Creative Head",
            bio: "Tanu is the founder and creative force behind every creation at Tanukrit. She envisioned gifting as something more personal - where every hamper tells a story and every element is thoughtfully designed. Through Tanukrit, she hopes to create gifts that bring joy, bring people together and become part of people’s most meaningful moments.",
            education: "Being a graduate of the prestigious College of Art, Delhi (Fine Arts with Packaging subsidiary) and having over 15 years of experience in teaching art and design, aesthetics have always been second nature to her. Her love for detail, thoughtful curation and artistic expression inspired her to begin Tanukrit.",
            stats: {
                established: "2023",
                orders: "40+",
                reach: "Pan India",
                experience: "Nearly 15 years"
            },
            founderImage: founderImage,
        }
    },
    showcase: {
        title: "Our Work",
        subtitle: "Custom Hampers for every occasion",
        description: "Thoughtfully curated hampers designed for meaningful moments.",
        items: [
            { id: 1, title: "Baby Shower", category: "Personal", image: babyShowerImage },
            { id: 2, title: "Corporate Hampers", category: "Corporate", image: corporateHampersImage },
            { id: 3, title: "Wedding Favours", category: "Favours", image: weddingFavoursImage },
            { id: 4, title: "Festivals", category: "Festival", image: festivalsImage },
            { id: 5, title: "Milestone celebrations", category: "Celebration", image: milestoneCelebrationsImage },
            { id: 6, title: "Wedding Invites", category: "Invites", image: weddingInvitesImage },
            { id: 7, title: "Return Favours", category: "Favours", image: returnFavoursImage },
            { id: 8, title: "Birthday Favours", category: "Favours", image: birthdayFavoursImage },
            { id: 9, title: "Trousseau", category: "Gifts", image: trousseauImage },
            { id: 10, title: "Room Hampers", category: "Hampers", image: roomHampersImage },
        ],
        cta: {
            title: "Love What You See?",
            description: "Let's design a hamper for your next celebration.",
            buttonText: "Design your hamper",
            buttonLink: "#contact"
        }
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
            { id: 2, name: "WhatsApp", link: "https://wa.me/917982666274?text=Hey%20Tanu!%20Came%20across%20your%20work%20on%20your%20website%20and%20I%20love%20it!%20I%20would%20like%20to%20enquire%20more.", icon: "whatsapp", color: "#25D366" },
            { id: 3, name: "LinkedIn", link: "https://www.linkedin.com/in/tanu-agrawal-89611b3b0/", icon: "linkedin", color: "#0077B5" },
            { id: 4, name: "Email", link: "mailto:support@tanukrit.com", icon: "mail", color: "#EA4335" },
        ],
        location: {
            address: "2nd Floor, C-526, Vikaspuri, Delhi, 110018",
            workingDays: "Monday - Sunday",
            workingHours: "10:30 AM - 7:00 PM IST",
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