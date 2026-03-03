import { CONTENT } from "../theme/content";

const Navbar = () => {
    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <div className="glass px-8 py-4 rounded-full flex justify-between items-center shadow-lg">
                <a href="#" className="h-10">
                    <img
                        src={CONTENT.navbar.logoSrc}
                        alt={CONTENT.navbar.logo}
                        className="h-full w-auto object-contain"
                    />
                </a>
                <div className="hidden md:flex gap-8">
                    {CONTENT.navbar.links.map((link) => (
                        <a
                            key={link.name}
                            href={link.hash}
                            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                <button className="md:hidden text-primary">Menu</button>
            </div>
        </nav>
    );
};

export default Navbar;