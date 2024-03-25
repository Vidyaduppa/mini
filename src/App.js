// import './App.css';
// import Home from './Components/Home/home';
// import Navbar from './Components/navbar/navbar';
// import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import Login from './Components/login/login';
// import Signup from './Components/login/signup';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           {/* Add more routes for other components if needed */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home/home';
import Login from './Components/login/login';
import Signup from './Components/login/signup';
import Navbar from './Components/navbar/navbar';
import Dashboard from './Components/student/dashboard';
import Profile from './Components/student/profile';
import TeacherDashboard from './Components/teacher/teacherdashboard';
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const showNavbar = !['/login', '/signup','/dashboard'].includes(location.pathname);

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        {/* Add more routes for other components if needed */}
      </Routes>
    </div>
  );
}

export default App;

