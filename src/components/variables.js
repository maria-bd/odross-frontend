const API_BASE_URL = 'http://127.0.0.1:8000/api/';

const API_URLS = {
  register: `${API_BASE_URL}register/`, 
  login: `${API_BASE_URL}login/`, 
  login2: `${API_BASE_URL}login2/`, 
  login3: `${API_BASE_URL}login3/`, 
  profile: `${API_BASE_URL}profile/`, 
  profileUpdate: `${API_BASE_URL}profileUpdate/`, 
  domain: `${API_BASE_URL}domain/`,
  users: `${API_BASE_URL}users/`,
  instructors: `${API_BASE_URL}instructors/`,
  learners: `${API_BASE_URL}learners/`,
  training: `${API_BASE_URL}training/`,
  lesson: `${API_BASE_URL}lesson/`,
  enrollments: `${API_BASE_URL}enrollments/`,
  videos: `${API_BASE_URL}videos/`,
  tasks: `${API_BASE_URL}tasks/`,
  tests: `${API_BASE_URL}tests/`,
};

export default API_URLS;
