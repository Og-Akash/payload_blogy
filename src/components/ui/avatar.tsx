import React from "react";

const Avatar = ({ text }: { text: string }) => {
  return (
    <div className="flex size-6 items-center justify-center rounded-full bg-gray-700 ring-1 ring-gray-600">
      {text.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
