import logo from './cow.jpg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SelectExistingProject from './selectExistingProject'

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
            <Route path="/project-list" element={<SelectExistingProject/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
