"use client";

import React, { useEffect, useState } from "react";
import Input from "./ui/Input";
import { SlidersHorizontal } from "lucide-react";
import CardWrapper from "./layouts/CardWrapper";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Article, Tag } from "@/payload-types";
import { useDebounce } from "@/hooks/useDebounce";
import Filter from "./Filter";
import CardLoader from "./loader/card-loader";

const BlogSearchClient = ({ tags }: { tags: Tag[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchQuery = searchParams.get("query") || "";
  const [ariticles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const debouceValue = useDebounce(searchQuery);

  // Fetch blogs using the debounced value
  useEffect(() => {
    setLoading(true);
    const fetchBlogs = async () => {
      const res = await fetch(`/api/articles?query=${debouceValue}`);
      const data = await res.json();
      setArticles(data.docs);
    };

    fetchBlogs().finally(() => setLoading(false));
  }, [debouceValue]);

  // Update search param on input change (no debounce)
  const handleSearchChange = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <>
      <div className="flex items-center justify-end gap-4 px-4 py-2">
        <Input
          defaultValue={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-[20rem] border border-gray-500"
          placeholder="Serach your blogs"
        />
        <Filter tags={tags}>
          <span className="grid size-10 cursor-pointer place-items-center transition-colors duration-300 hover:bg-gray-700">
            <SlidersHorizontal size={`20px`} />
          </span>
        </Filter>
      </div>
      {loading ? (
        <div className="grid place-items-center gap-3 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <CardLoader key={i} />
          ))}
        </div>
      ) : (
        <CardWrapper ariticles={ariticles} />
      )}
    </>
  );
};

export default BlogSearchClient;
