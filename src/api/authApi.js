import axios from 'axios';

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const registerUser = (email, username, password) => {
  return client.post("/api/register", { email, username, password });
};

export const loginUser = (email, password) => {
  return client.post("/api/login", { email, password });
};

export const logoutUser = () => {
  return client.post("/api/logout", { withCredentials: true });
};
