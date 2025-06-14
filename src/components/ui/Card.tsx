import Image from "next/image";
import React from "react";
import Badge from "./badge";
import Link from "next/link";
import Avatar from "./avatar";

interface CardProps {
  title: string;
  description: string;
  author?: string;
  poster: string;
  createdAt: string;
  alt: string;
  slug: string;
}

const Card = ({ title, description, author, poster, createdAt, alt, slug }: CardProps) => {
  return (
    <div
      aria-label={title}
      className="relative flex w-[18rem] flex-col space-y-2 rounded-md bg-gray-800/80 p-3"
    >
      <Link href={`/blogs/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">{title}</span>
      </Link>

      <div className="relative h-45 w-full overflow-hidden rounded-md">
        <Image src={poster} alt={alt} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-3 px-1">
        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight">{title}</h3>
        <span className="line-clamp-2 text-sm text-gray-300">{description}</span>
      </div>
      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Avatar text="Akash" />
          {author && <h3>{author}</h3>}
        </div>
        <span className="text-[14px] text-gray-400">
          📅 {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default Card;
