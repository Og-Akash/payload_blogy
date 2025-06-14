import React from "react";

const CardLoader = () => {
  return (
    <div
      aria-label="loading-card"
      className="relative flex w-[18rem] animate-pulse flex-col space-y-2 rounded-md bg-gray-800/80 p-3"
    >
      <div className="absolute inset-0 z-10" />

      {/* Image Skeleton */}
      <div className="relative h-45 w-full overflow-hidden rounded-md bg-gray-700" />

      {/* Text Skeletons */}
      <div className="flex flex-col gap-3 px-1">
        <div className="h-4 w-3/4 rounded bg-gray-700" />
        <div className="h-3 w-full rounded bg-gray-700" />
        <div className="h-3 w-5/6 rounded bg-gray-700" />
      </div>

      {/* Footer Skeleton */}
      <div className="mt-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gray-700" />
          <div className="h-3 w-20 rounded bg-gray-700" />
        </div>
        <div className="h-3 w-16 rounded bg-gray-700" />
      </div>
    </div>
  );
};

export default CardLoader;
