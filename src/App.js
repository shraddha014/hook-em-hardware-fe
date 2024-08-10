import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import logo from "./cow.jpg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hardware from "./components/Hardware";
import SelectExistingProject from "./components/selectExistingProject.js";
import Register from "./components/Register.js";
import Login from "./components/login";
import HomePage from "./components/HomePage.js";
import CreateNewProject from "./components/CreateNewProject";
import Button from "react-bootstrap/esm/Button.js";

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem("username");
    console.log("Username from localStorage:", username);
    if (username) {
      setUsername(username);
      setIsLoggedIn(true);
    }
  }, []);

  const logoff = () => {
    console.log("calling logoff");
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const handleLogin = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
    localStorage.setItem("username", username);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hook'Em Hardware</h2>
        </div>
        {isLoggedIn && (
          <div>
            {username}{" "}
            <Button type="button" onClick={logoff}>
              Log Out
            </Button>
          </div>
        )}
      </header>
      <div className="App-body">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                isLoggedIn ? <Navigate to="/project-list" /> : <HomePage />
              }
            />
            <Route
              path="/hardware"
              element={isLoggedIn ? <Hardware /> : <Navigate to="/" />}
            />
            <Route
              path="/project-list"
              element={
                isLoggedIn ? <SelectExistingProject /> : <Navigate to="/" />
              }
            />
            <Route
              path="/register"
              element={
                isLoggedIn ? (
                  <Navigate to="/project-list" />
                ) : (
                  <Register onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/project-list" />
                ) : (
                  <Login onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/create-new-project"
              element={isLoggedIn ? <CreateNewProject /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
