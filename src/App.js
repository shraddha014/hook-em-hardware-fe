import logo from './cow.jpg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hardware from './components/Hardware';
import SelectExistingProject from './components/selectExistingProject.js'
import Register from './components/Register.js';
import Login from './components/login'
import HomePage from './components/HomePage.js';
import CreateNewProject from './components/CreateNewProject';

function App() {

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
            <Route path='/' element={<HomePage />} />
            <Route path="/hardware" element={<Hardware/>} />
            <Route path="/project-list" element={<SelectExistingProject/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/create-new-project" element={<CreateNewProject />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;