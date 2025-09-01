// src/utils/roles.js

// Define system roles
export const ROLES = {
  ADMIN: "admin",
  DOCTOR: "doctor",
  PATIENT: "patient",
};

// Utility function to check if a user has a specific role
export const hasRole = (user, role) => {
  if (!user || !user.role) return false;
  return user.role === role;
};

// Utility function to check if a user has one of multiple roles
export const hasAnyRole = (user, roles = []) => {
  if (!user || !user.role) return false;
  return roles.includes(user.role);
};

// Example: Role-based access mapping for routes
export const ROLE_ROUTES = {
  [ROLES.ADMIN]: ["/admin/dashboard", "/admin/manage-doctors", "/admin/manage-patients", "/admin/reports"],
  [ROLES.DOCTOR]: ["/doctor/dashboard", "/doctor/patients", "/doctor/appointments", "/doctor/prescriptions"],
  [ROLES.PATIENT]: ["/patient/dashboard", "/patient/my-appointments", "/patient/my-reports", "/patient/billing"],
};
