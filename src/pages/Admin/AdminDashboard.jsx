import React from "react";

const Card = ({ title, children }) => {
  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
    flex: "1",
  };

  const titleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#374151", // gray-700
  };

  const valueStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#111827", // gray-900
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{title}</div>
      <div style={valueStyle}>{children}</div>
    </div>
  );
};

const AdminDashboard = () => {
  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#111827",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  };

  return (
    <div>
      <h2 style={headingStyle}>Admin Dashboard</h2>

      <div style={gridStyle}>
        <Card title="Total Doctors">25</Card>
        <Card title="Total Patients">120</Card>
        <Card title="Appointments Today">32</Card>
        <Card title="Pending Bills">12</Card>
        <Card title="Available Medicines">230</Card>
        <Card title="Reports Generated">58</Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
