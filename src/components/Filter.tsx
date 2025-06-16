import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@radix-ui/react-dropdown-menu";
import Badge from "./ui/badge";
import { Tag } from "@/payload-types";

const Filter = ({ children }: { children: React.ReactNode; tags: Tag[] }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="min-h-[10rem] max-w-[15rem] bg-gray-800 p-3 z-10">
        <span className="text-base font-medium mb-4 inline-block">Tags: </span>
        {/* <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <Badge key={tag.id} value={tag?.label || ""} />
          ))}
        </div> */}
        <div className="flex flex-wrap gap-3">
          <Badge value="Web Development" />
          <Badge value="Machine Learning" />
          <Badge value="Startups" />
          <Badge value="Data Science" />
          <Badge value="Cybersecurity" />
          <Badge value="Open Source" />
          <Badge value="Cloud Computing" />
          <Badge value="Mobile Apps" />
          <Badge value="DevOps" />
          <Badge value="Programming" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;
