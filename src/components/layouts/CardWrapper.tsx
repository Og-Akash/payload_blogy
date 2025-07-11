import React from "react";
import Card from "../ui/Card";
import { Blog } from "@/payload-types";

const CardWrapper = ({ articles }: { articles: Blog[] }) => {
  return (
    <>
      {articles?.length > 0 ? (
        <div className="w-full grid place-items-center gap-3 md:grid-cols-3 lg:grid-cols-4">
          {articles.map((blog) => {
            const author = typeof blog.uploadedBy === "object" ? blog?.uploadedBy?.email : "";
            const poster = typeof blog.poster === "object" ? blog?.poster?.url : "";
            const alt = typeof blog.poster === "object" ? blog?.poster?.alt : "";
            return (
              <Card
                key={blog.id}
                title={blog.title}
                description={blog.description}
                author={author}
                createdAt={blog.createdAt}
                poster={poster || ""}
                alt={alt}
                slug={blog.slug}
              />
            );
          })}
        </div>
      ) : (
        <h2 className="text-center text-xl font-medium text-gray-400 md:text-3xl">
          No ariticles found
        </h2>
      )}
    </>
  );
};

export default CardWrapper;
