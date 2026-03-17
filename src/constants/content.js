import navbarLogo from "../assets/tanukrit_logo_navbar.webp";
import heroLogo from "../assets/tanukrit_logo.webp";
import founderImage from "../assets/founder_image.webp";

// Banners
import babyshowerBanner from "../assets/banner/baby_shower_banner.webp";
import goldenfrabricwrappingBanner from "../assets/banner/golden_fabric_wrapping_banner.webp";
import waxsealBanner from "../assets/banner/wax_seal_banner.webp";
import peacockwithresincardBanner from "../assets/banner/peacock_with_resin_card_banner.webp";
import babyshowermessageBanner from "../assets/banner/baby_shower_message_banner.webp";
import haldirambasketBanner from "../assets/banner/haldiram_basket_banner.webp";
// Brands
import metlzLogo from "../assets/brands/meltz_logo.webp";
import publicissapientLogo from "../assets/brands/publicissapient_logo.webp";
import wbiweddingsLogo from "../assets/brands/wbiweddings_logo.webp";
import badhaihoeventsLogo from "../assets/brands/badhaihoevents_logo.webp";
import mariottresortsLogo from "../assets/brands/mariottresorts_logo.webp";
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
    locationIndicator: {
        basedIn: "Based in Delhi",
        shipping: "Shipping Pan India"
    },
    navbar: {
        logo: "Tanukrit",
        logoSrc: navbarLogo,
        links: [
            { name: "Work", hash: "#products" },
            { name: "Our Story", hash: "#about" },
            { name: "Testimonials", hash: "#testimonials" },
            { name: "FAQ", hash: "#faq" },
            { name: "Contact", hash: "#contact" },
        ],
    },
    hero: {
        tagline: ["Curated with Care", "Designed with Intention"],
        title: "Tanukrit",
        logoSrc: heroLogo,
        backgroundImages: [
            babyshowerBanner,
            goldenfrabricwrappingBanner,
            waxsealBanner,
            peacockwithresincardBanner,
            babyshowermessageBanner,
            haldirambasketBanner
        ],
        imageTransitionInterval: 3000,
    },
    introduction: {
        story: {
            title: "Brand Story",
            description: "Tanukrit is a premium gifting brand that believes a gift is more than just an exchange. It is a heartfelt gesture of love, appreciation and care. We pour intention into every detail, crafting luxury hampers that tell a story.",
            highlight: "With Tanukrit, every gift is thoughtful and every detail is intentional."
        },
        howItWorks: {
            title: "How It Works",
            steps: [
                { id: "01", title: "Share Your Requirement", description: "Tell us the occasion, quantity and hamper references (if any)." },
                { id: "02", title: "We Curate Your Hampers", description: "Our team designs a personalised hamper concept for you." },
                { id: "03", title: "Approve & Personalise", description: "We discuss the final look, personalisations and detailing of the hamper." },
                { id: "04", title: "We Pack & Deliver", description: "Your hampers are beautifully packed and delivered on time." },
            ]
        },
        trustedBy: [
            { id: 1, name: "Dusit Thani", logo: "https://www.dusit.com/wp-content/themes/dusit-global/images/corporate-logos/d/dusit-black.svg" },
            { id: 2, name: "MELTZ", logo: metlzLogo },
            { id: 3, name: "Publicis Sapient", logo: publicissapientLogo },
            { id: 4, name: "WBI", logo: wbiweddingsLogo },
            { id: 5, name: "Badhai Ho Events", logo: badhaihoeventsLogo },
            { id: 6, name: "Mariott Resorts", logo: mariottresortsLogo }
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
                orders: "100+"
            },
            founderImage: founderImage,
        }
    },
    showcase: {
        title: "Custom Hampers for every occasion",
        description: "Thoughtfully curated hampers designed for meaningful moments.",
        items: [
            { id: 1, title: "Baby Shower", coverImage: babyShowerImage, images: [babyShowerImage, babyShowerImage, babyShowerImage] },
            { id: 2, title: "Corporate Hampers", coverImage: corporateHampersImage, images: [corporateHampersImage, corporateHampersImage, corporateHampersImage] },
            { id: 3, title: "Wedding Favours", coverImage: weddingFavoursImage, images: [weddingFavoursImage, weddingFavoursImage, weddingFavoursImage] },
            { id: 4, title: "Festivals", coverImage: festivalsImage, images: [festivalsImage, festivalsImage, festivalsImage] },
            { id: 5, title: "Milestone celebrations", coverImage: milestoneCelebrationsImage, images: [milestoneCelebrationsImage, milestoneCelebrationsImage, milestoneCelebrationsImage] },
            { id: 6, title: "Wedding Invites", coverImage: weddingInvitesImage, images: [weddingInvitesImage, weddingInvitesImage, weddingInvitesImage] },
            { id: 7, title: "Return Favours", coverImage: returnFavoursImage, images: [returnFavoursImage, returnFavoursImage, returnFavoursImage] },
            { id: 8, title: "Birthday Favours", coverImage: birthdayFavoursImage, images: [birthdayFavoursImage, birthdayFavoursImage, birthdayFavoursImage] },
            { id: 9, title: "Trousseau", coverImage: trousseauImage, images: [trousseauImage, trousseauImage, trousseauImage] },
            { id: 10, title: "Room Hampers", coverImage: roomHampersImage, images: [roomHampersImage, roomHampersImage, roomHampersImage] },
        ],
        cta: {
            title: "Love What You See?",
            description: "Let's design a hamper for your next celebration.",
            buttonText: "Design your hamper",
            buttonLink: "#contact"
        }
    },
    testimonials: {
        title: "What our Clients Say",
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
    faq: {
        title: "Frequently Asked Questions",
        items: [
            { id: 1, question: "What is your minimum order quantity?", answer: "Our minimum order quantity for custom hampers is 10 pieces. However, for specific requirements, please reach out to us." },
            { id: 2, question: "How long does it take to deliver?", answer: "Delivery times vary based on the order size and customization level. Typically, it takes 2-3 weeks from design approval to delivery." },
            { id: 3, question: "Do you ship across India?", answer: "Yes, we ship our luxury hampers Pan India through our trusted delivery partners." },
            { id: 4, question: "Can I customize the products inside the hamper?", answer: "Absolutely! We specialize in creating custom hampers tailored to your specific occasion, preferences, and budget." },
            { id: 5, question: "How do we start the process?", answer: "You can start by sharing your requirement through our contact form, email, or WhatsApp. Our team will get back to you to discuss concepts." }
        ]
    },
    contact: {
        title: "Planning a Celebration?\nLet's create something special!",
        email: "support@tanukrit.com",
        phone: "+91 79826 66274",
        description: "We look forward to creating something meaningful for you, just as we have for families and clients across India.",
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
            disclaimer: "Visit by appointment only.",
            link: "https://maps.app.goo.gl/SugEWPxAq7y1fZDy9",
            embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7540358776773!2d77.0733064!3d28.637133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d059764f71653%3A0xbeaeccfa3c9fa614!2sTanukrit!5e0!3m2!1sen!2sin!4v1773301467594!5m2!1sen!2sin",
        },
        footer: {
            copyright: `© ${new Date().getFullYear()} Tanukrit • Designed with Intention`,
            tagline: "Artfully Packed • Emotionally Delivered"
        }
    },
    ribbons: {
        brandStoryToShowcase: ["We curate gifts that say:", "“I see you”", "“I value you”", "“You matter”"],
        howItWorksToTrustedBy: ["Artfully packed", "Emotionally Delivered"]
    }
};