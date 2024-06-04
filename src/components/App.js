import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/Register';
import Login1 from './components/Login1';
import Login2 from './components/Login2';
import Login3 from './components/Login3';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import GradientBackground from './components/GradientBackground';
import Courses from './components/Courses';
import ChatComponent from './components/ChatBot/ChatComponent';
import LessonPage from './components/LessonPage';
import TopUsers from './components/TopUsers';

import QuizList from './components/Quiz/QuizList';
import QuizDetail from './components/Quiz/QuizDetail';

import AddQuiz from './components/Instructor/AddQuiz';
import LessonTable from './components/Instructor/LessonTable';


import Admin from './components/Admin/AdminTable';
import EditUser from './components/Admin/EditUser';
import DeleteUser from './components/Admin/DeleteUser';
import Statistics from './components/Admin/Statistics';
import Teachers from './components/Admin/Teachers';
import Update from './components/Admin/Update';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login1" element={<GradientBackground><Login1 /></GradientBackground>} />
          <Route path="/Login2" element={<GradientBackground><Login2 /></GradientBackground>} />
          <Route path="/admin/login" element={<GradientBackground><Login3 /></GradientBackground>} />
          <Route path="/Register" element={<GradientBackground><Register /></GradientBackground>} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/EditProfile" element={<GradientBackground><EditProfile /></GradientBackground>} />
          <Route path="/AddQuiz" element={<AddQuiz />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Leaderboard" element={<TopUsers />} />
          <Route path="/Chat" element={<ChatComponent />} />
          <Route path="/lessons/:lessonId" element={<LessonPage />} />
          {/* Quiz routes */}
          <Route path="/QuizList" element={<QuizList />} />
          {/* Assuming QuizDetail fetches question data and passes it to QuestionCard */}
          <Route path="/quiz/:quiz_id/*" element={<QuizDetail />} />
          {/* Admin routes */}
          <Route exact path="/admin" element={<Admin />} />
          <Route path="/admin/edit-user/:userId" element={<EditUser />} />
          <Route path="/admin/delete-user/:userId" element={<DeleteUser />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/Update" element={<Update />} />
          <Route path="/Teachers" element={<Teachers />} />
          {/* Teacher routes */}
          <Route path="/AddQuiz" element={<AddQuiz />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/LessonTable" element={<LessonTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;