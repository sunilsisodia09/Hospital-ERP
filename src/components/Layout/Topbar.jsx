import React from "react";
import { useAuth } from "../AuthProvider";

export default function Topbar() {
  const { user, logout } = useAuth();

  const headerStyle = {
    height: "56px", // ~ h-14
    borderBottom: "1px solid #e5e7eb", // border-b (gray-200)
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px", // px-4
    backgroundColor: "white",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)", // shadow-sm
  };

  const textStyle = {
    fontSize: "14px", // text-sm
    color: "#6b7280", // text-gray-500
  };

  const nameStyle = {
    fontWeight: "500", // font-medium
  };

  const buttonStyle = {
    padding: "6px 12px", // px-3 py-1.5
    borderRadius: "8px", // rounded-lg
    border: "1px solid #d1d5db", // border (gray-300)
    fontSize: "14px", // text-sm
    backgroundColor: "white",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#f9fafb", // hover:bg-gray-50
  };

  return (
    <header style={headerStyle}>
      <div style={textStyle}>
   {" "}
        <span style={nameStyle}></span> ({user?.role})
      </div>
      <button
        onClick={logout}
        style={buttonStyle}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)
        }
      >
        Logout
      </button>
    </header>
  );
}
