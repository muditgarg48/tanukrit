import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 active:scale-95";
    const variants = {
        primary: "bg-primary text-white hover:opacity-90",
        secondary: "bg-secondary text-white hover:opacity-90",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        ghost: "text-primary hover:bg-primary/10",
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
