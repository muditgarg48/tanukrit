import React from "react";

const Navbar = () => {
    const navLinks = ["About", "Products", "Philosophy", "Contact"];

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <div className="glass px-8 py-4 rounded-full flex justify-between items-center shadow-lg">
                <div className="text-2xl font-heading font-bold text-primary">Tanukrit</div>
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest"
                        >
                            {link}
                        </a>
                    ))}
                </div>
                <button className="md:hidden text-primary">Menu</button>
            </div>
        </nav>
    );
};

export default Navbar;
