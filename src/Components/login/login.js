// Login.js
import React, { useState } from 'react';
import './loginStyles.css'; // Updated import statement
import imageTeacher from '../../images/teacher.jpg';
import imageAdmin from '../../images/admin.jpg';
import imageStudent from '../../images/student.jpg';
import image2 from '../../images/Logo.png';
import { Link } from 'react-router-dom';
// Rest of the component remains the same...


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
    const [transition, setTransition] = useState(false);

    // Function to handle sliding animation
    function handleSlide() {
        setTransition(true);
        setTimeout(() => {
            setTransition(false);
        }, 500); // Adjust the timing based on your preference
    }

    // Login form section
    function LoginForm() {
        if (activeOption === 'teacher') {
            return (
                <div className={`login-form ${transition ? 'slide-in' : ''}`}>
                    <h2>Teacher Login</h2>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                   <Link to="/TeacherDashboard"><button>Login</button> </Link> 
                    <p>If you are a new user, <a href="/signup">signup</a></p>
                </div>
            );
        } else if (activeOption === 'admin') {
            return (
                <div className={`login-form ${transition ? 'slide-in' : ''}`}>
                    <h2>Admin Login</h2>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                    <p>If you are a new user, <a href="/signup">signup</a></p>
                </div>
            );
        } else {
            return (
                <div className={`login-form ${transition ? 'slide-in' : ''}`}>
                    <h2>Student login</h2>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <Link to="/Dashboard"><button>Login</button> </Link>
                    <p>If you are a new user, <a href="/signup">signup</a></p>
                </div>
            );
        }
    }

    return (
        <div className="content">
            <div className="left-side">
                <LoginForm />
            </div>
            <div className="right-side"> 
                <h2>Welcome to Our Learning Platform!</h2>
                <p>Sign in to access your account and start learning.</p>
                {activeOption === 'teacher' && <img src={imageTeacher} alt="Teacher" />}
                {activeOption === 'admin' && <img src={imageAdmin} alt="Admin" />}
                {activeOption === 'student' && <img src={imageStudent} alt="Student" />}
            </div>
        </div>
    );
}

// Default export
export default function Login() {
    const [activeOption, setActiveOption] = useState('student');

    return (
        <div className="login">
            <Navbar setActiveOption={setActiveOption} />
            <Content activeOption={activeOption} />
        </div>
    );
}
