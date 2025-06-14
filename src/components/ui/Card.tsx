import Image from "next/image";
import React from "react";
import Badge from "./badge";
import Link from "next/link";
import Avatar from "./avatar";

const Card = () => {
  return (
    <div
      aria-label="blog-card"
      className="flex w-[18rem] flex-col space-y-2 rounded-md bg-gray-800/80 p-3"
    >
      <Link href={"/blogs/article"} className="absolute inset-0 z-10">
        <span className="sr-only">Unlocking AI’s Potential in Healthcare</span>
      </Link>

      <div className="relative h-45 w-full overflow-hidden rounded-md">
        <Image
          src="https://plus.unsplash.com/premium_photo-1749544311043-3a6a0c8d54af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-lg font-semibold tracking-tight">
          Unlocking AI’s Potential in Healthcare
        </h3>
        <span className="line-clamp-2 text-sm text-gray-300">
          Our AI Hackathons are intensive, collaborative sessions that spark innovation.
        </span>
      </div>
      {/* <div className="flex flex-wrap gap-2">
        {["Artificial Intelligence", "Healthcare", "Machine Learning", "AI Ethics"].map(
          (tag, i) => (
            <Badge value={tag} key={i} />
          ),
        )}
      </div> */}
      <div className="mt-3 flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <Avatar text="Akash" />
          <h3>Akash Ghosh</h3>
        </div>
        <span className="text-[14px] text-gray-400">📅 13/06/2025</span>
      </div>
    </div>
  );
};

export default Card;
