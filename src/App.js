import logo from './cow.jpg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Hardware from './components/Hardware';
import SelectExistingProject from './selectExistingProject'
import Register from './Register.js';
import Login from './components/login'

function App() {
  const onButtonClick = () => {
    // You'll update this function later
    return (
      <div className="App">
        <SelectExistingProject />
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>
          Hook'Em Hardware
        </h2>
      </header>
      <div className="App-body">
        <BrowserRouter>
          <Routes>
            <Route path="/hardware" element={<Hardware/>} />
            <Route path="/project-list" element={<SelectExistingProject/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
