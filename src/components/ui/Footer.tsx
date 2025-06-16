import React, { use } from "react";
import NavLink from "../header/NavLink";
import { getCollectionData } from "@/helpers/payload";
import { Navlink } from "@/payload-types";

const Footer = () => {
  const navLinksResult = use(
    getCollectionData("navlink", {
      sort: "createdAt",
    }),
  );

  if (!navLinksResult) return null;

  const navLinks = navLinksResult?.docs as Navlink[];

  return (
    <footer className="container mx-auto flex items-center justify-center gap-2 p-4 max-sm:flex-col md:gap-10">
      <span className="text-[16px]">&copy; All Rights Reserverd {new Date().getFullYear()}</span>
      <div className="flex items-center gap-4">
        {navLinks.map(({ link, label }) => (
          <NavLink key={link} label={label} link={link} />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
