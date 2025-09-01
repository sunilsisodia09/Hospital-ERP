import React, { useState } from "react";

const Pharmacy = () => {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", stock: 120, price: 10 },
    { id: 2, name: "Amoxicillin", stock: 80, price: 25 },
    { id: 3, name: "Ibuprofen", stock: 60, price: 15 },
  ]);

  const [newMedicine, setNewMedicine] = useState({
    name: "",
    stock: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMedicine({ ...newMedicine, [name]: value });
  };

  const addMedicine = (e) => {
    e.preventDefault();
    if (!newMedicine.name || !newMedicine.stock || !newMedicine.price) return;

    setMedicines([
      ...medicines,
      {
        id: medicines.length + 1,
        ...newMedicine,
        stock: Number(newMedicine.stock),
        price: Number(newMedicine.price),
      },
    ]);
    setNewMedicine({ name: "", stock: "", price: "" });
  };

  const deleteMedicine = (id) => {
    setMedicines(medicines.filter((med) => med.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: "800px",
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
        Pharmacy Management
      </h2>

      {/* Add Medicine Form */}
      <form
        onSubmit={addMedicine}
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Medicine Name"
          value={newMedicine.name}
          onChange={handleChange}
          style={{
            flex: "1",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newMedicine.stock}
          onChange={handleChange}
          style={{
            width: "120px",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newMedicine.price}
          onChange={handleChange}
          style={{
            width: "120px",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#3498db",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add Medicine
        </button>
      </form>

      {/* Medicine Table */}
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
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Medicine
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Stock</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Price (₹)
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med) => (
            <tr key={med.id}>
              <td style={{ padding: "8px", textAlign: "center" }}>{med.id}</td>
              <td style={{ padding: "8px" }}>{med.name}</td>
              <td style={{ padding: "8px", textAlign: "center" }}>
                {med.stock}
              </td>
              <td style={{ padding: "8px", textAlign: "center" }}>
                ₹{med.price}
              </td>
              <td style={{ padding: "8px", textAlign: "center" }}>
                <button
                  onClick={() => deleteMedicine(med.id)}
                  style={{
                    background: "#e74c3c",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  ❌ Delete
                </button>
              </td>
            </tr>
          ))}
          {medicines.length === 0 && (
            <tr>
              <td
                colSpan="5"
                style={{
                  textAlign: "center",
                  padding: "15px",
                  color: "#888",
                }}
              >
                No Medicines Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Pharmacy;
