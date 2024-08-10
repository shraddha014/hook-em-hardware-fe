import React, { useState, useEffect } from 'react';
import logo from './cow.jpg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hardware from './components/Hardware';
import SelectExistingProject from './components/selectExistingProject.js';
import Register from './components/Register.js';
import Login from './components/Login';
import HomePage from './components/HomePage.js';
import CreateNewProject from './components/CreateNewProject';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by checking localStorage
    const username = localStorage.getItem('username');
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  const logout = () => {
   
    localStorage.removeItem('username');  
    setIsLoggedIn(false);  

   
    window.location.href = '/login';
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hook'Em Hardware</h2>
        </div>
        {isLoggedIn && (
          <button onClick={logout} className="logout-button">Logout</button>
        )}
      </header>
      <div className="App-body">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/project-list" element={<SelectExistingProject />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-new-project" element={<CreateNewProject />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
