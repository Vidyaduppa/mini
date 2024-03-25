//signup.js
import React, { useState } from 'react';
import './signupStyles.css'; // Updated import statement
import imageTeacher from '../../images/teacher.jpg';
import imageAdmin from '../../images/admin.jpg';
import imageStudent from '../../images/student.jpg';
import image2 from '../../images/Logo.png';
import { Link } from 'react-router-dom';
 

// Navbar section
function Navbar({ setActiveOption }) {
    return (
        <nav>
            <a href="/" className="logo-link">
                <img src={image2} alt="Logo" className="logo" />
            </a>
            <div className="options">
                <li className="option" onClick={() => setActiveOption('student')}>Student</li>
                <li className="option" onClick={() => setActiveOption('teacher')}>Teacher</li>
                <li className="option" onClick={() => setActiveOption('admin')}>Admin</li>
            </div>
        </nav>
    );
}

// Content section
function Content({ activeOption }) {
    // Signup form section for Student
    function StudentSignupForm() {
        return (
            <div className="signup-form">
                <h2>Student Signup</h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Number" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Branch" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <Link to="/TeacherDashboard"><button>Signup</button></Link> {/* Replace <link> with <Link> */}
                <p>If you are an existing user, <a href="/login">login</a></p>
            </div>
        );
    }

    // Signup form section for Teacher
    function TeacherSignupForm() {
        return (
            <div className="signup-form">
                <h2>Teacher Signup</h2>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Number" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Department" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>Signup</button>
                <p>If you are an existing user, <a href="/login">login</a></p>
            </div>
        );
    }

    function  AdminSignupForm() {
        return (
            <div className="signup-form">
                
                <h1>Not allowed to signup </h1>
            </div>
        );
    }

    return (
        <div className="content">
            <div className="left-side">
                {activeOption === 'student' && <StudentSignupForm />}
                {activeOption === 'teacher' && <TeacherSignupForm />}
                {activeOption === 'admin' && <AdminSignupForm />}
            </div>
            <div className="right-side1">
                <h2>Welcome to Our Learning Platform!</h2>
                <p>Sign up now to access our educational resources and start learning.</p>
                {activeOption === 'teacher' && <img src={imageTeacher} alt="Teacher" />}
                {activeOption === 'admin' && <img src={imageAdmin} alt="Admin" />}
                {activeOption === 'student' && <img src={imageStudent} alt="Student" />}
            </div>
        </div>
    );
}

// Default export
export default function Signup() {
    const [activeOption, setActiveOption] = useState('student');

    return (
        <div className="signup">
            <Navbar setActiveOption={setActiveOption} />
            <Content activeOption={activeOption} />
        </div>
    );
}
