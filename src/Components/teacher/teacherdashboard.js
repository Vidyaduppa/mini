// teacherDashboard.js
import React, { useState } from 'react';
import './teacherDashboard.css'; // Import CSS file for styling

// TeacherDashboard component
function TeacherDashboard() {
    const [courses, setCourses] = useState([]);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newCourseData, setNewCourseData] = useState({
        title: '',
        description: '',
        coverImage: null // Updated to handle file upload
    });

    // Function to handle course creation
    function createCourse() {
        // Logic to create a new course
        // For example, you can add a new course to the courses state
        const newCourse = { id: courses.length + 1, ...newCourseData };
        setCourses([...courses, newCourse]);
        setShowCreateModal(false);
        setNewCourseData({ title: '', description: '', coverImage: null });
    }

    // Function to handle cover image file upload
    function handleCoverImageUpload(event) {
        setNewCourseData({ ...newCourseData, coverImage: event.target.files[0] });
    }

    return (
        <div className="teacher-dashboard">
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">Logo</div>
                <ul className="nav-menu">
                <button className="create-course-btn" onClick={() => setShowCreateModal(true)}>Create New Course</button>
                    <li>My Courses</li>
                    <li>Profile</li>
                    <li>Create New Course</li>
                    <li>Notifications</li>
                </ul>
            </nav>

            
            

            {/* Class Cards */}
            <div className="class-cards">
                {courses.map(course => (
                    <div key={course.id} className="class-card">
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <img src={URL.createObjectURL(course.coverImage)} alt="Course Cover" />
                    </div>
                ))}
            </div>

            {/* Create Course Modal */}
            {showCreateModal && (
                <div className="create-course-modal">
                    <div className="modal-content">
                        <h2>Create New Course</h2>
                        <form>
                            <input type="text" placeholder="Course Title" value={newCourseData.title} onChange={(e) => setNewCourseData({ ...newCourseData, title: e.target.value })} />
                            <textarea placeholder="Course Description" value={newCourseData.description} onChange={(e) => setNewCourseData({ ...newCourseData, description: e.target.value })}></textarea>
                            <label htmlFor="coverImage">Cover Image:</label>
                            <input type="file" id="coverImage" accept="image/*" onChange={handleCoverImageUpload} />
                            <button id='cc' type="button" onClick={createCourse}>Create Course</button>
                            <button id= 'c' type="button" onClick={() => setShowCreateModal(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TeacherDashboard;
