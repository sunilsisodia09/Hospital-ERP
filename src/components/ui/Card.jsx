import React from "react";

export default function Card({ title, children, footer }) {
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "16px", // ~ rounded-2xl
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // ~ shadow
    border: "1px solid #e5e7eb", // ~ border gray-200
    padding: "16px", // ~ p-4
  };

  const headerStyle = {
    fontSize: "18px", // ~ text-lg
    fontWeight: "600", // ~ font-semibold
    marginBottom: "8px", // ~ mb-2
    color: "#111827", // ~ gray-900
  };

  const footerStyle = {
    marginTop: "12px", // ~ mt-3
    fontSize: "14px", // ~ text-sm
    color: "#6b7280", // ~ gray-500
  };

  return (
    <div style={cardStyle}>
      {/* Card header */}
      {title && <h3 style={headerStyle}>{title}</h3>}

      {/* Card content */}
      <div>{children}</div>

      {/* Card footer */}
      {footer && <div style={footerStyle}>{footer}</div>}
    </div>
  );
}
