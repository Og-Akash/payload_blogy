import Image from "next/image";
import React, { use } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { getCollectionData } from "@/helpers/payload";
import { Navlink } from "@/payload-types";

const Header = () => {
  const navLinksResult = use(
    getCollectionData("navlink", {
      sort: "createdAt",
    }),
  );

  if (!navLinksResult) null;

  const navLinks = navLinksResult?.docs as Navlink[];

  return (
    <header aria-label="site-header">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <picture>
            <source srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg" />
            <Image
              alt="Site logo"
              height={30}
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/ui/src/assets/payload-favicon.svg"
              width={30}
            />
          </picture>
          <h3 className="text-2xl font-semibold">Payload Blogy</h3>
        </Link>
        <div className="flex items-center gap-4">
          {navLinks.map(({ label, link }) => (
            <NavLink key={link} label={label} link={link} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
