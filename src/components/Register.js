
import React from "react";
import "./register.css";

function Register() {
    return (
        <div className="register-container">
            <p className="title">New User Registration</p>

            <form className="registration-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    );
}

export default Register;