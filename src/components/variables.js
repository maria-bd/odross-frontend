const API_BASE_URL = 'http://127.0.0.1:8000/api/';

const API_URLS = {
  adminInstructor: `${API_BASE_URL}admin/instructor/`,
  adminInstructorList: `${API_BASE_URL}admin/instructorList/`,
  adminInstructorEditDelete: (pk) => `${API_BASE_URL}admin/instructorList/${pk}/`,
  adminLearner: `${API_BASE_URL}admin/learner/`,
  adminLearnerEditDelete: (pk) => `${API_BASE_URL}admin/learner/${pk}/`,
  adminLearnerOne: (pk) => `${API_BASE_URL}admin/learner/1/${pk}/`,
  quizList: `${API_BASE_URL}`,
  create_quiz: `${API_BASE_URL}create_quiz/`,
  quizDetail: (quizId) => `${API_BASE_URL}${quizId}/`,
  quizQuestions: (quizId) => `${API_BASE_URL}questions/${quizId}/`,
  questionDetail: (questionId) => `${API_BASE_URL}questions/detail/${questionId}/`,
  topUsers: `${API_BASE_URL}top-users/`, 
  register: `${API_BASE_URL}register/`, 
  login: `${API_BASE_URL}login/`, 
  login2: `${API_BASE_URL}login2/`, 
  login3: `${API_BASE_URL}login3/`, 
  profile: `${API_BASE_URL}profile/`, 
  profileUpdate: `${API_BASE_URL}profileUpdate/`, 
  domain: `${API_BASE_URL}domain/`,
  domainDetail: (pk) => `${API_BASE_URL}domain/${pk}/`,
  users: `${API_BASE_URL}users/`,
  instructors: `${API_BASE_URL}instructors/`,
  learners: `${API_BASE_URL}learners/`,
  training: `${API_BASE_URL}training/`,
  trainingDetail: (pk) => `${API_BASE_URL}training/${pk}/`, // Define trainingDetail as a function
  lesson: `${API_BASE_URL}lesson/`,
  lessons: `${API_BASE_URL}lessons/`,
  enrollments: `${API_BASE_URL}enrollments/`,
  video: `${API_BASE_URL}video/`,
  tasks: `${API_BASE_URL}tasks/`,
  tests: `${API_BASE_URL}tests/`,
  user: `${API_BASE_URL}user/`,
};

export default API_URLS;
