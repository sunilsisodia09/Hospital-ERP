import React from "react";

const Reports = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
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
          marginBottom: "30px",
          color: "#2c3e50",
        }}
      >
        📊 Hospital Reports
      </h2>

      {/* Reports Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Revenue Report */}
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px", color: "#27ae60" }}>
            💰 Revenue Report
          </h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Total Revenue (This Month): <strong>₹4,50,000</strong>
          </p>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Outstanding Payments: <strong>₹50,000</strong>
          </p>
        </div>

        {/* Appointments Report */}
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px", color: "#2980b9" }}>
            📅 Appointments Report
          </h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Total Appointments (This Week): <strong>320</strong>
          </p>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Cancelled Appointments: <strong>15</strong>
          </p>
        </div>

        {/* Patient Statistics */}
        <div
          style={{
            background: "#fff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "10px", color: "#8e44ad" }}>
            🏥 Patient Statistics
          </h3>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Total Patients Registered: <strong>5,200</strong>
          </p>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Admitted Patients: <strong>180</strong>
          </p>
          <p style={{ fontSize: "14px", color: "#555" }}>
            Discharged Patients: <strong>140</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
