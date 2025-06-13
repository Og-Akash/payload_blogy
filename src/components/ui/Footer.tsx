import React from "react";
import { navLinks } from "../header";
import NavLink from "../header/NavLink";

const Footer = () => {
  return (
    <footer className="container mx-auto flex justify-center gap-10 items-center p-4">
      <span>&copy; All Rights Reserverd {new Date().getFullYear()}</span>
      <div className="flex items-center gap-4">
        {navLinks.map(({ link, label }) => (
          <NavLink label={label} link={link} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
