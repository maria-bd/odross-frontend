// variables.js

const API_BASE_URL = 'http://localhost:8000/api/';

const API_URLS = {
  appUsers: `${API_BASE_URL}appUsers/`,
  domains: `${API_BASE_URL}domains/`,
  users: `${API_BASE_URL}users/`,
  instructors: `${API_BASE_URL}instructors/`,
  learners: `${API_BASE_URL}learners/`,
  trainings: `${API_BASE_URL}trainings/`,
  lessons: `${API_BASE_URL}lessons/`,
  enrollments: `${API_BASE_URL}enrollments/`,
  videos: `${API_BASE_URL}videos/`,
  tasks: `${API_BASE_URL}tasks/`,
  tests: `${API_BASE_URL}tests/`,
};

export default API_URLS;
