import React, { use } from "react";
import BlogSearchClient from "@/components/BlogSearchClient";
import { getCollectionData } from "@/helpers/payload";

const Blogs = () => {
  const tagResult = use(getCollectionData("tags"));
  return (
    <div className="flex flex-col gap-4">
      <div className="max-w-xl">
        <h1 className="my-2! leading-tight font-semibold">Latest Blog Posts</h1>
        <p className="text-sm leading-relaxed text-gray-300 md:text-base">
          Insights, tutorials, and thoughts on web development, design, and technology
        </p>
      </div>
      <BlogSearchClient tags={tagResult?.docs || []} />
    </div>
  );
};

export default Blogs;
