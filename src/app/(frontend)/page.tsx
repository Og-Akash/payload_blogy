import React, { use } from "react";
import "./styles.css";
import { getPageBySlug } from "@/helpers/payload";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/cn";
import Image from "next/image";
import { isMedia } from "@/helpers";

export default function HomePage() {
  const pageData = use(
    getPageBySlug("landing", {
      depth: 1,
    }),
  );

  if (!pageData) return notFound();

  const { heading, subHeading, cta_buttons, heroImage } = pageData[0].layout[0];

  console.log("pageData", pageData);

  return (
    <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-4 text-center">
      <h1 className="m-0! leading-10 tracking-wide">{heading}</h1>
      <p className="text-sm leading-relaxed text-gray-200 md:text-base">{subHeading}</p>
      <div className="flex items-center gap-4">
        {cta_buttons?.map((btn, i) => {
          return (
            <Link
              key={btn.id}
              className={cn("px-4 py-1", i === 0 ? "bg-white text-black!" : "")}
              href={btn.url}
            >
              {btn.label}
            </Link>
          );
        })}
      </div>
      <div className="relative aspect-[4/3] w-full group px-2 md:px-4 mt-4">
        <Image
          fill
          src={(isMedia(heroImage) && heroImage.url) || ""}
          alt={(isMedia(heroImage) && heroImage.alt) || ""}
          className="object-cover object-center transition-all duration-500 group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}
