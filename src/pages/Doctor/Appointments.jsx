import React, { useEffect, useState } from "react";

const Appointments = () => {
  // Load appointments from localStorage
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  // Keep appointments in sync with localStorage
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#2c3e50",
        }}
      >
        🗓️ Appointments
      </h2>

      {/* ===== Appointment List ===== */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {appointments.length === 0 ? (
          <li style={{ textAlign: "center", color: "#888" }}>No appointments yet.</li>
        ) : (
          appointments.map((appt, index) => (
            <li
              key={index}
              style={{
                background: "#fff",
                marginBottom: "15px",
                padding: "15px 20px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p style={{ margin: 0, fontWeight: "bold", color: "#2980b9" }}>
                  {appt.time}
                </p>
                <p style={{ margin: "5px 0 0", color: "#555" }}>
                  👤 {appt.patient}
                </p>
              </div>
              <span style={{ fontSize: "14px", color: "#27ae60" }}>
                {appt.doctor}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Appointments;
