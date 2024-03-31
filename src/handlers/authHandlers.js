// handlers/auth/authHandlers.js
import { registerUser, loginUser, logoutUser } from '../api/authApi';

export function handleRegistration(email, username, password) {
  return registerUser(email, username, password)
    .then(() => loginUser(email, password));
}

export function handleLogin(email, password) {
  return loginUser(email, password);
}

export function handleLogout() {
  return logoutUser();
}
