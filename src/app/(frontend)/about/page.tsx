import Faqs from "@/components/Faqs";
import { isMedia } from "@/helpers";
import { getPageBySlug } from "@/helpers/payload";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { use } from "react";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPageBySlug("about", {
    depth: 1,
  });

  if (!data) {
    return {};
  }

  const { heading, subHeading, heroImage } = data[0].layout[0] ?? [];

  return {
    title: heading,
    description: subHeading,
    openGraph: {
      title: heading,
      description: subHeading,
      images: isMedia(heroImage) && heroImage.url ? [heroImage.url] : undefined,
    },
  };
}

const About = () => {
  const pageData = use(
    getPageBySlug("about", {
      depth: 1,
    }),
  );

  if (!pageData?.[0]) notFound();

  return (
    <section aria-label="about" className="flex w-full flex-col justify-center gap-4 space-y-8 p-4">
      <article className="mx-auto mt-8 flex max-w-3xl flex-col text-center md:text-left justify-center gap-4">
        <h1 className="m-0! leading-10 tracking-wide">
          {pageData[0].layout[0].heading}
        </h1>
        <p className="text-sm leading-relaxed text-gray-200 md:text-base">
          {pageData[0].layout[0].subHeading}
        </p>
      </article>
      <Faqs />
    </section>
  );
};

export default About;
