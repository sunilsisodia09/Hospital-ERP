import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './components/AuthProvider'

import Sidebar from './components/Layout/Sidebar'
import Topbar from './components/Layout/Topbar'
import Login from './pages/Auth/Login'

// ==== Admin Pages ====
import Pharmacy from "./pages/Admin/Pharmacy";
import AdminDashboard from './pages/Admin/AdminDashboard'
import ManageDoctors from './pages/Admin/ManageDoctors'
import ManagePatients from './pages/Admin/ManagePatients'
import Reports from './pages/Admin/Reports'
// ==== Doctor Pages ====
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import Appointments from './pages/Doctor/Appointments'
import PatientList from './pages/Doctor/PatientList'

// ==== Patient Pages ====
import Bills from './pages/Patient/Bills'
import Prescriptions from './pages/Patient/Prescriptions'
import PatientDashboard from "./pages/Patient/PatientDashboard";
import MyAppointments from "./pages/patient/MyAppointments";
import MyReports from './pages/Patient/MyReports'
import BookAppointment from "./pages/Patient/BookAppointment";

// ==== Layout with Sidebar + Topbar ====
const ProtectedLayout = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar role={user.role} />
      <div style={{ flex: 1, marginLeft: "220px" }}>
        <Topbar />
        <main style={{ padding: "20px" }}>{children}</main>
      </div>
    </div>
  );
};

// ==== Role Based Dashboard Switcher ====
const RoleBasedDashboard = () => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;

  if (user.role === "admin") return <AdminDashboard />;
  if (user.role === "doctor") return <DoctorDashboard />;
  if (user.role === "patient") return <PatientDashboard />;
  return <h1>Unauthorized</h1>;
};

// ==== Main App ====
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="/*"
            element={
              <ProtectedLayout>
                <Routes>
                  {/* Shared Dashboard */}
                  <Route path="/dashboard" element={<RoleBasedDashboard />} />

                  {/* ==== Admin Routes ==== */}
                   <Route path="/ManageDoctors" element={<ManageDoctors />} />
                  <Route path="/ManagePatients" element={<ManagePatients />} />
                   <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/appointments" element={<Appointments />} />
                <Route path="/Reports" element={<Reports />} />
                 <Route path="/pharmacy" element={<Pharmacy />} />
                  {/* ==== Doctor Routes ==== */}
                  <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
                  <Route path="/doctor/Appointments" element={<Appointments />} />
                  <Route path="/doctor/PatientLists" element={<PatientList />} />

                  {/* ==== Patient Routes ==== */}
<Route path="/patient/BookAppointment" element={<BookAppointment />} />
                  <Route path="/patient/dashboard" element={<PatientDashboard />} />
                  <Route path="/patient/my-appointments" element={<MyAppointments />} />
                    <Route path="/patient/bills" element={<Bills />} />
                      <Route path="/patient/myReports" element={<MyReports />} />
                       <Route path="/patient/prescriptions" element={<Prescriptions />} />

                  {/* Fallback */}
                  <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Routes>
              </ProtectedLayout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
