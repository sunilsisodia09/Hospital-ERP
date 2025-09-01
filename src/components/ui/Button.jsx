// src/components/ui/Button.jsx
import React from "react";

export default function Button({ children, variant = "primary", ...props }) {
  // Base styles applied to all buttons
  const base = "px-4 py-2 rounded-lg text-sm font-medium transition";

  // Variant-specific styles
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
