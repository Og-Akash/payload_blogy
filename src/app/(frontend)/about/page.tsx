import Faqs from "@/components/Faqs";
import { getPageBySlug } from "@/helpers/payload";
import { Media } from "@/payload-types";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { use } from "react";

const About = () => {
  const pageData = use(
    getPageBySlug("about", {
      depth: 1,
    }),
  );

  if (!pageData?.[0]) notFound();

  const heroImage = pageData[0].layout[0].heroImage;

  const isMedia = (img: typeof heroImage): img is Media =>
    typeof img === "object" && img !== null && "url" in img;

  return (
    <section
      aria-label="about"
      className="flex w-full flex-col justify-center gap-4 p-4 space-y-8"
    >
      <article className="grid  md:grid-cols-2 gap-4 place-items-center">
        <div className="max-w-xl space-y-4 text-center md:text-left">
          <h1 className="text-xl leading-tight font-semibold md:text-3xl">
            {pageData[0].layout[0].heading}
          </h1>
          <p className="text-sm leading-relaxed text-gray-200 md:text-base">
            {pageData[0].layout[0].subHeading}
          </p>
        </div>
        <div className="relative aspect-[4/3] w-full max-w-lg">
          <Image
            src={(isMedia(heroImage) && heroImage?.url) || ""}
            fill
            alt={(isMedia(heroImage) && heroImage?.alt) || ""}
            className="rounded-md object-cover object-center transition-all duration-500"
          />
        </div>
      </article>
      <Faqs />
    </section>
  );
};

export default About;
