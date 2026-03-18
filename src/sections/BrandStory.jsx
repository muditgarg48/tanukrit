import { CONTENT } from "../constants/content";

const BrandStory = () => {
    const { story } = CONTENT.introduction;

    return (
        <section data-nav-theme="light" className="bg-white py-12 md:py-16 !pt-12 md:!pt-16 px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 md:gap-8"
                >
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed font-body max-w-2xl mx-auto">
                        {story.description}
                    </p>
                    <p className="text-xl md:text-2xl font-heading text-primary leading-tight italic font-medium">
                        {story.highlight}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BrandStory;
