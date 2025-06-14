import { cn } from "@/lib/cn";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
  icon?: React.ReactNode; // for icon
}

const Input = ({ label, error, className = "", icon, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={props.id || props.name} className="text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
        <input
          className={cn(
            "p-2 text-sm",
            icon ? "pl-10" : "",
            error && "border border-red-600",
            className,
          )}
          {...props}
        />
      </div>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </div>
  );
};

export default Input;
