import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const Sidebar = ({ role }) => {
  const { logout } = useAuth();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarStyle = {
    width: isMobile ? "100%" : "200px",
    background: "linear-gradient(180deg, #2c3e50, #34495e)",
    color: "white",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    display: "inline-block",
    minHeight: isMobile ? "auto" : "30vh",
    marginBottom: isMobile ? "15px" : "0", // spacing for mobile
  };

  const titleStyle = {
    fontSize: isMobile ? "20px" : "25px",
    fontWeight: "bold",
    marginBottom: "15px",
    textAlign: "center",
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    paddingBottom: "10px",
  };

  const navStyle = {
    display: "flex",
    flexDirection: isMobile ? "row" : "column",
    flexWrap: isMobile ? "wrap" : "nowrap",
    gap: "10px",
    justifyContent: isMobile ? "center" : "flex-start",
  };

  const linkStyle = {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: isMobile ? "6px 10px" : "8px 12px",
    borderRadius: "6px",
    transition: "all 0.2s ease",
    fontSize: isMobile ? "14px" : "16px",
  };

  const linkHover = {
    backgroundColor: "rgba(255,255,255,0.1)",
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={titleStyle}>Hospital ERP</h2>

      <nav style={navStyle}>
        {role === "admin" && (
          <>
            <Link
              style={linkStyle}
              to="/dashboard"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Admin Dashboard
            </Link>
            <Link
              style={linkStyle}
              to="/ManageDoctors"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Manage Doctors
            </Link>
            <Link
              style={linkStyle}
              to="/ManagePatients"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Manage Patients
            </Link>
            <Link
              style={linkStyle}
              to="/appointments"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Appointments
            </Link>
       
            <Link
              style={linkStyle}
              to="/pharmacy"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Pharmacy
            </Link>
            <Link
              style={linkStyle}
              to="/reports"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Reports
            </Link>
          </>
        )}

        {role === "doctor" && (
          <>
            <Link
              style={linkStyle}
              to="/doctor/dashboard"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Doctor Dashboard
            </Link>
            <Link
              style={linkStyle}
              to="/doctor/appointments"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Appointments
            </Link>
            <Link
              style={linkStyle}
              to="/doctor/PatientList"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Patient List
            </Link>
          </>
        )}

        {role === "patient" && (
          <>
            <Link
              style={linkStyle}
              to="/patient/dashboard"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Patient Dashboard
            </Link>
            <Link
              style={linkStyle}
              to="/patient/prescriptions"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Prescriptions
            </Link>
            <Link
              style={linkStyle}
              to="/patient/my-appointments"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              My Appointments
            </Link>
            <Link
              style={linkStyle}
              to="/patient/Bills"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Bills
            </Link>
            <Link
              style={linkStyle}
              to="/patient/MyReports"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              My Reports
            </Link>
             <Link
              style={linkStyle}
              to="/patient/BookAppointment"
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = linkHover.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
         BookAppointment
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
