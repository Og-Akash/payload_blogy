import React from "react";
import Card from "../ui/Card";
import { Article } from "@/payload-types";

const CardWrapper = ({ ariticles }: { ariticles: Article[] }) => {
  return (
    <>
      {ariticles.length > 0 ? (
        <div className="grid place-items-center gap-3 md:grid-cols-3 lg:grid-cols-4">
          {ariticles.map((article) => {
            const author = typeof article.uploadedBy === "object" ? article?.uploadedBy?.email : "";
            const poster = typeof article.poster === "object" ? article?.poster?.url : "";
            const alt = typeof article.poster === "object" ? article?.poster?.alt : "";
            return (
              <Card
                key={article.id}
                title={article.title}
                description={article.description}
                author={author}
                createdAt={article.createdAt}
                poster={poster || ""}
                alt={alt}
                slug={article.slug}
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
