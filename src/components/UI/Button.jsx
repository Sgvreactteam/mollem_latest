import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, disabled, to, type, onClick }) => {

    const base = "py-1 px-4 rounded-3xl font-medium ";
    const styles = {
        regular: base + `bg-primary text-white focus:bg-[#F0F2FC] focus:text-primary`,
        whiteButton: base + `bg-white text-primary focus:bg-primary focus:text-white focus:outline-none`,
        blueButton: base + "bg-[#3150ec] text-white focus:bg-white focus:border focus:border-[#3150ec] focus:text-[#3150ec]"
    }

    if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button