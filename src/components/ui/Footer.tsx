import React, { use } from "react";
import NavLink from "../header/NavLink";
import { getCollectionData } from "@/helpers/payload";
import { notFound } from "next/navigation";
import { Navlink } from "@/payload-types";

const Footer = () => {
  const navLinksResult = use(
    getCollectionData("navlink", {
      sort: "createdAt",
    }),
  );

  if (!navLinksResult) null

  const navLinks = navLinksResult?.docs as Navlink[];

  return (
    <footer className="container mx-auto flex max-sm:flex-col items-center justify-center gap-2 md:gap-10 p-4">
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
