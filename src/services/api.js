import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", 
});

// Example API Calls
export const loginUser = (data) => api.post("/auth/login", data);
export const registerUser = (data) => api.post("/auth/register", data);
export const getPatients = () => api.get("/patients");
export const getDoctors = () => api.get("/doctors");

export default api;
