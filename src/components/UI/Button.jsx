import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick }) => {
    const base = "py-1 px-4 rounded-3xl font-medium ";
    const styles = {
        regular: base + "bg-primary text-white ",
        regularChange: base + "bg-[#F0F2FC] text-primary",
        whiteButton: base + "bg-white text-primary focus:bg-primary focus:text-white",
        blueButton: base + "bg-[#3150ec] text-white focus:bg-white focus:border focus:border-[#3150ec] focus:text-[#3150ec]"
    };

    const handleClick = () => {
        if (onClick) {
            onClick(); 
        }
    };

    const className = styles[type];

    if (to)
        return (
            <Link to={to} onClick={handleClick} className={className}>
                {children}
            </Link>
        );

    return (
        <button onClick={handleClick} disabled={disabled} className={className}>
            {children}
        </button>
    );
};

export default Button;