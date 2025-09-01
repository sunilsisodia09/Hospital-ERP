import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../components/AuthProvider";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "", role: "admin" });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.username, form.password, form.role);

    // Redirect based on role
    if (form.role === "admin") navigate("/dashboard");
    if (form.role === "doctor") navigate("/doctor-dashboard");
    if (form.role === "patient") navigate("/patient-dashboard");
  };

  const containerStyle = {
    maxWidth: "400px",
    margin: "80px auto",
    padding: "30px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #f9f9f9, #f1f1f1)",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const inputStyle = {
    width: "100%",
    marginBottom: "15px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    transition: "border 0.2s ease",
  };

  const selectStyle = {
    ...inputStyle,
    background: "#fff",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    background: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "20px", color: "#2c3e50" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          style={inputStyle}
          onFocus={(e) => (e.target.style.border = "1px solid #3498db")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={inputStyle}
          onFocus={(e) => (e.target.style.border = "1px solid #3498db")}
          onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
          required
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          style={selectStyle}
        >
          <option value="admin">Admin</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.background = "#2980b9")}
          onMouseLeave={(e) => (e.target.style.background = "#3498db")}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
