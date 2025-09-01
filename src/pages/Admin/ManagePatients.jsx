import React from "react";
import Button from "../../components/ui/Button";

const ManagePatients = () => {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#2c3e50",
        }}
      >
        Manage Patients
      </h2>

      {/* Add Patient Button */}
      <div style={{ marginBottom: "15px", textAlign: "right" }}>
        <Button>Add Patient</Button>
      </div>

      {/* Patients Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <thead>
          <tr style={{ background: "#2c3e50", color: "white" }}>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Age</th>
            <th style={{ padding: "12px", border: "1px solid #ddd" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ background: "#fff" }}>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
              Sunil Singh
            </td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>34</td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                textAlign: "center",
              }}
            >
              <Button>View</Button>
            </td>
          </tr>
          <tr style={{ background: "#f4f6f8" }}>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>
              Anita Gupta
            </td>
            <td style={{ padding: "10px", border: "1px solid #ddd" }}>29</td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ddd",
                textAlign: "center",
              }}
            >
              <Button>View</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManagePatients;
