import Link from "next/link";
import React from "react";

type NavLinkProps = {
  link: string;
  label: string;
};

const NavLink = ({ link, label }: NavLinkProps) => {
  return (
    <Link
      className="text-sm transition-colors duration-150 hover:text-gray-300"
      href={link}
    >
      {label}
    </Link>
  );
};

export default NavLink;
