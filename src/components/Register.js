import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./register.css";

function Register() {
  const navigate = useNavigate();

  // State for form input values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Handle form input changes
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('https://hook-em-hardware-be-b81aa6e7bd7f.herokuapp.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("result", result);

      if (response.ok) {
        // Handle successful registration
        navigate('/create-new-project', { state: { username: formData.username } }); // Navigate to another page upon success
      } else {
        // Handle errors (e.g., user already exists)
        alert(result.message || 'Registration failed');
      }
    } catch (error) {
      // Handle network errors
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <p className="title">New User Registration</p>

      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
}

export default Register;