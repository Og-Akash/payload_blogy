import { isMedia } from "@/helpers";
import { getDocuemnt } from "@/helpers/payload";
import { Blog } from "@/payload-types";
import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type SingleBlugProps = {
  params: {
    id: string;
  };
};

const page = async ({ params }: SingleBlugProps) => {
  const { id } = await params;
  const singleBlogData = (await getDocuemnt("blogs", id)) as Blog;

  if (!singleBlogData) notFound();

  const { title, content, description, poster } = singleBlogData;

  return (
    <div className="">
      <div className="relative h-[20rem]">
        <Image
          src={(isMedia(poster) && poster.url) || ""}
          alt={(isMedia(poster) && poster.alt) || ""}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />

        <h1 className="absolute bottom-1 left-1 z-10 leading-10">{title}</h1>
      </div>
      <p className="text-sm leading-relaxed text-gray-200 md:text-base">{description}</p>
      <RichText data={content} />
    </div>
  );
};

export default page;
