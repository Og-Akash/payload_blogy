import React from "react";

const Badge = ({ value }: { value: string }) => {
  return (
    <span
      aria-label="badge"
      className="cursor-pointer rounded-full bg-blue-600/50 px-4 py-0.5 text-center text-sm ring-1 ring-blue-500"
    >
      {value}
    </span>
  );
};

export default Badge;
