import navbarLogo from "../assets/tanukrit_logo_navbar.webp";
import heroLogo from "../assets/tanukrit_logo.webp";
import founderImage from "../assets/founder_image.webp";

// Banners
import goldenfrabricwrappingBanner from "../assets/banner/golden_fabric_wrapping_banner.webp";
import decorativejarsBanner from "../assets/banner/decorative_jars_banner.webp";
import waxsealBanner from "../assets/banner/wax_seal_banner.webp";
import peacockwithresincardBanner from "../assets/banner/peacock_with_resin_card_banner.webp";
import babyshowercardBanner from "../assets/banner/baby_shower_card_banner.webp";
import haldirambasketBanner from "../assets/banner/haldiram_basket_banner.webp";
// Brands
import metlzLogo from "../assets/brands/meltz_logo.webp";
import publicissapientLogo from "../assets/brands/publicissapient_logo.webp";
import wbiweddingsLogo from "../assets/brands/wbiweddings_logo.webp";
import badhaihoeventsLogo from "../assets/brands/badhaihoevents_logo.webp";
import marriottresortsLogo from "../assets/brands/marriottresorts_logo.webp";
import jsfitnessstudioLogo from "../assets/brands/jsfitnessstudio_logo.webp";
// Showcase Cover Images
import babyShowerCoverImage from "../assets/showcase_covers/baby_shower_cover.webp";
import birthdayFavoursCoverImage from "../assets/showcase_covers/birthday_favours_cover.webp";
import corporateHampersCoverImage from "../assets/showcase_covers/corporate_hampers_cover.webp";
import festivalsCoverImage from "../assets/showcase_covers/festivals_cover.webp";
import milestoneCelebrationsCoverImage from "../assets/showcase_covers/milestone_celebrations_cover.webp";
import returnFavoursCoverImage from "../assets/showcase_covers/return_favours_cover.webp";
import roomHampersCoverImage from "../assets/showcase_covers/room_hampers_cover.webp";
import trousseauCoverImage from "../assets/showcase_covers/trousseau_cover.webp";
import weddingFavoursCoverImage from "../assets/showcase_covers/wedding_favours_cover.webp";
import weddingInvitesCoverImage from "../assets/showcase_covers/wedding_invites_cover.webp";
// Showcase Gallery Images
import babyShower1 from "../assets/showcase_galleries/baby_shower_1.webp";
import babyShower2 from "../assets/showcase_galleries/baby_shower_2.webp";
import babyShower3 from "../assets/showcase_galleries/baby_shower_3.webp";
import birthdayFavors1 from "../assets/showcase_galleries/birthday_favors_1.webp";
import birthdayFavors2 from "../assets/showcase_galleries/birthday_favors_2.webp";
import birthdayFavors3 from "../assets/showcase_galleries/birthday_favors_3.webp";
import birthdayFavors4 from "../assets/showcase_galleries/birthday_favors_4.webp";
import corporateHampers1 from "../assets/showcase_galleries/corporate_hampers_1.webp";
import corporateHampers2 from "../assets/showcase_galleries/corporate_hampers_2.webp";
import corporateHampers3 from "../assets/showcase_galleries/corporate_hampers_3.webp";
import corporateHampers4 from "../assets/showcase_galleries/corporate_hampers_4.webp";
import festivals1 from "../assets/showcase_galleries/festivals_1.webp";
import festivals2 from "../assets/showcase_galleries/festivals_2.webp";
import festivals3 from "../assets/showcase_galleries/festivals_3.webp";
import festivals4 from "../assets/showcase_galleries/festivals_4.webp";
import festivals5 from "../assets/showcase_galleries/festivals_5.webp";
import festivals6 from "../assets/showcase_galleries/festivals_6.webp";
import festivals7 from "../assets/showcase_galleries/festivals_7.webp";
import milestoneCelebrations1 from "../assets/showcase_galleries/milestone_celebrations_1.webp";
import milestoneCelebrations2 from "../assets/showcase_galleries/milestone_celebrations_2.webp";
import milestoneCelebrations3 from "../assets/showcase_galleries/milestone_celebrations_3.webp";
import milestoneCelebrations4 from "../assets/showcase_galleries/milestone_celebrations_4.webp";
import returnFavors1 from "../assets/showcase_galleries/return_favors_1.webp";
import returnFavors2 from "../assets/showcase_galleries/return_favors_2.webp";
import returnFavors3 from "../assets/showcase_galleries/return_favors_3.webp";
import returnFavors4 from "../assets/showcase_galleries/return_favors_4.webp";
import roomHampers1 from "../assets/showcase_galleries/room_hampers_1.webp";
import roomHampers2 from "../assets/showcase_galleries/room_hampers_2.webp";
import trousseau1 from "../assets/showcase_galleries/trousseau_1.webp";
import trousseau2 from "../assets/showcase_galleries/trousseau_2.webp";
import trousseau3 from "../assets/showcase_galleries/trousseau_3.webp";
import weddingFavours1 from "../assets/showcase_galleries/wedding_favours_1.webp";
import weddingFavours2 from "../assets/showcase_galleries/wedding_favours_2.webp";
import weddingFavours3 from "../assets/showcase_galleries/wedding_favours_3.webp";
import weddingInvites1 from "../assets/showcase_galleries/wedding_invites_1.webp";
import weddingInvites2 from "../assets/showcase_galleries/wedding_invites_2.webp";
import weddingInvites3 from "../assets/showcase_galleries/wedding_invites_3.webp";

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
            { name: "Our Story", hash: "#founder" },
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
            goldenfrabricwrappingBanner,
            decorativejarsBanner,
            waxsealBanner,
            peacockwithresincardBanner,
            babyshowercardBanner,
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
            { id: 6, name: "Marriott Resorts", logo: marriottresortsLogo },
            { id: 7, name: "js Fitness Studio", logo: jsfitnessstudioLogo }
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
            { id: 1, title: "Baby Shower", coverImage: babyShowerCoverImage, images: [babyShowerCoverImage, babyShower1, babyShower2, babyShower3] },
            { id: 2, title: "Corporate Hampers", coverImage: corporateHampersCoverImage, images: [corporateHampersCoverImage, corporateHampers1, corporateHampers2, corporateHampers3, corporateHampers4] },
            { id: 3, title: "Wedding Favours", coverImage: weddingFavoursCoverImage, images: [weddingFavoursCoverImage, weddingFavours1, weddingFavours2, weddingFavours3] },
            { id: 4, title: "Festivals", coverImage: festivalsCoverImage, images: [festivalsCoverImage, festivals1, festivals2, festivals3, festivals4, festivals5, festivals6, festivals7] },
            { id: 5, title: "Milestone celebrations", coverImage: milestoneCelebrationsCoverImage, images: [milestoneCelebrationsCoverImage, milestoneCelebrations1, milestoneCelebrations2, milestoneCelebrations3, milestoneCelebrations4] },
            { id: 6, title: "Wedding Invites", coverImage: weddingInvitesCoverImage, images: [weddingInvitesCoverImage, weddingInvites1, weddingInvites2, weddingInvites3] },
            { id: 7, title: "Return Favours", coverImage: returnFavoursCoverImage, images: [returnFavoursCoverImage, returnFavors1, returnFavors2, returnFavors3, returnFavors4] },
            { id: 8, title: "Birthday Favours", coverImage: birthdayFavoursCoverImage, images: [birthdayFavoursCoverImage, birthdayFavors1, birthdayFavors2, birthdayFavors3, birthdayFavors4] },
            { id: 9, title: "Trousseau", coverImage: trousseauCoverImage, images: [trousseauCoverImage, trousseau1, trousseau2, trousseau3] },
            { id: 10, title: "Room Hampers", coverImage: roomHampersCoverImage, images: [roomHampersCoverImage, roomHampers1, roomHampers2] },
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
                quote: "I've been ordering from Tanukrit for two years now for both corporate and personal gifting. The gifts are always thoughtfully curated, beautifully packed, and perfectly aligned with our event themes. Their attention to detail and creativity truly stand out!",
                author: "Dakshata",
                role: "Agile Program Manager, Publicis Sapient"
            },
            {
                id: 2,
                quote: "Thanks Tanu for arranging hampers. It was well appreciated by our all friends. In future we will be associated for more celebrations with you.",
                author: "Prakrati Agrawal",
                role: ""
            },
            {
                id: 3,
                quote: "I got hampers made for my friends on my special day and Tanu did an amazing job with going out of the way and choosing the best gourmet food. The presentation, packaging and food was very well done and my friends loved it",
                author: "Shambhavi Agarwal",
                role: ""
            },
            {
                id: 4,
                quote: "I loved the hampers prepared for the Dusit Thani Nepal networking event. Everything in it felt thoughtful and even my friends loved it. My favourite part was the packaging and the wardrobe freshener. The hamper was beautiful, thoughtful and memorable",
                author: "Somya",
                role: "Reporter, BOTT"
            },
            {
                id: 5,
                quote: "This is was simply superb. Loved the effort put in by you and your team to get the final fabulous result.",
                author: "Ankit Sharma",
                role: "POC, Dusit Thani"
            },
            {
                id: 6,
                quote: "I absolutely loved worked with Tanu. Everything from the initial conversation to the final delivery was handled so smoothly. We always get our festive hampers made from Tanukrit. Would highly recommend! ",
                author: "Sanjana Sehgal",
                role: "Founder, Meltz"
            },
            {
                id: 7,
                quote: "Hey, we all really appreciated the giveaways made for our conference. What I liked the most was how thoughtfully everything was put together. Each and every element was designed keeping in mind that it was for fitness influencers. Absolutely loved the work, keep it up! 💯",
                author: "Supreet Sehgal",
                role: "Founder, JS Fitness Studio"
            }
        ]
    },
    faq: {
        title: "Frequently Asked Questions",
        items: [
            {
                id: 1,
                question: "What is your minimum order quantity?",
                answer: "Since we specialize in bulk gifting, we usually work with a minimum order quantity. Please share your requirement with us and we'll guide you accordingly."
            },
            {
                id: 2,
                question: "Do you take bulk orders?",
                answer: "Yes. In fact, we specialise in bulk gifting and large scale hamper production. Whether it's corporate events, weddings or festive gifting, our systems are designed to handle bulk orders smoothly."
            },
            {
                id: 3,
                question: "How much in advance should we place the order?",
                answer: "This depends on the order size and level of customization. Once you share your requirement with us, we'll guide you on the ideal timeline and ensure everything is planned and delivered smoothly."
            },
            {
                id: 4,
                question: "Can I customize the products inside the hamper?",
                answer: "Absolutely. Customization and personalization are at the heart of what we do. We don't just design hampers around an occasion, we thoughtfully curate them around the people receiving them and what they would genuinely love. Every element is intentionally selected so that the hamper feels meaningful, thoughtful and never random."
            },
            {
                id: 5,
                question: "Can you add our company logo or branding?",
                answer: "Yes, we can incorporate custom branding such as logos, brand colors, personalized notes, custom sleeves, tags and packaging to match your brand identity."
            },
            {
                id: 6,
                question: "Do you ship across India?",
                answer: "Yes, we ship pan India through our trusted delivery partners to ensure your hampers reach safely and on time."
            },
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