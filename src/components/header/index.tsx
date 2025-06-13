import Image from "next/image";
import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

export const navLinks = [
  { label: "About", link: "/about" },
  { label: "Blogs", link: "/blogs" },
  { label: "Feedback", link: "/feedback" },
];

const Header = () => {
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
          {navLinks.map(({ link, label }) => (
            <NavLink label={label} link={link} />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
