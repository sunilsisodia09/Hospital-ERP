import React, { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register:", form);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          name="name" 
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        /><br/>
        <input 
          type="email" 
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        /><br/>
        <input 
          type="password" 
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        /><br/>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
