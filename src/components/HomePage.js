import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const loginClick = () => {
    navigate('/login');
  };

  const registerClick = () => {
    navigate('/register');
  };

  return (
    <div className="background">
      <h2 className="text">
        Welcome to your HomePage!
      </h2>
      <button
        className="button button-signin"
        onClick={loginClick}
      >
        Login
      </button>
      <button
        className="button button-signup"
        onClick={registerClick}
      >
        Register
      </button>
    </div>
  );
}

export default HomePage;