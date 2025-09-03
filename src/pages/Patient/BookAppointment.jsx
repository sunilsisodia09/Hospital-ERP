// src/pages/BookAppointment.jsx
import React, { useState } from "react";

const doctors = [
  { id: 1, name: "Dr. Smith (Cardiologist)" },
  { id: 2, name: "Dr. Johnson (Dermatologist)" },
  { id: 3, name: "Dr. Williams (Neurologist)" },
];

const timeSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
];

const BookAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [reason, setReason] = useState("");

  // appointments stored doctor-wise (object)
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || {}
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDoctor || !selectedDate || !selectedTime || !reason) {
      alert("Please fill all fields");
      return;
    }

    const newAppointment = {
      date: selectedDate,
      time: selectedTime,
      reason,
    };

    // ✅ Add to correct doctor only
    const updatedAppointments = {
      ...appointments,
      [selectedDoctor]: [...(appointments[selectedDoctor] || []), newAppointment],
    };

    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    alert(`Appointment booked with ${selectedDoctor}!`);

    setSelectedDoctor("");
    setSelectedDate("");
    setSelectedTime("");
    setReason("");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "25px",
        background: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}>
        📅 Book Appointment
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Doctor */}
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Choose Doctor:
        </label>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">-- Select --</option>
          {doctors.map((doc) => (
            <option key={doc.id} value={doc.name}>
              {doc.name}
            </option>
          ))}
        </select>

        {/* Date */}
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Date:
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />

        {/* Time */}
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Time Slot:
        </label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">-- Select --</option>
          {timeSlots.map((slot, i) => (
            <option key={i} value={slot}>
              {slot}
            </option>
          ))}
        </select>

        {/* Reason */}
        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
          Reason for Visit:
        </label>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Enter symptoms or reason"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "15px",
            minHeight: "80px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#3498db",
            color: "white",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Book Appointment
        </button>
      </form>

      {/* Appointments List */}
      <h3 style={{ marginTop: "30px", color: "#2c3e50" }}>📋 My Appointments</h3>
      {Object.keys(appointments).length === 0 ? (
        <p style={{ color: "#888" }}>No appointments yet.</p>
      ) : (
        Object.entries(appointments).map(([doctor, apps]) => (
          <div key={doctor} style={{ marginBottom: "20px" }}>
            <h4 style={{ color: "#2980b9" }}>{doctor}</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {apps.map((app, index) => (
                <li
                  key={index}
                  style={{
                    background: "#fff",
                    marginBottom: "12px",
                    padding: "12px 15px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  }}
                >
                  📅 {app.date} | ⏰ {app.time} <br />
                  📝 Reason: {app.reason}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default BookAppointment;
