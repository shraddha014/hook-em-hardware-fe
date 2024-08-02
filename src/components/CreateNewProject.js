import React, { useState } from 'react';
import './createNewProject.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateNewProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, description, projectId });
    
    try {
      const res = await axios.post("/api/auth/register", {name, description, projectId});
      if (res.status === 200) {
        showToast("success", "Create project successful");
      } else {
        showToast("error", "There seems to be an Error");
      }
    } catch (error) {
      showToast("error", error.response?.data || "There seems to be an Error");
    }
  };

  const showToast = (type, message) => {
    if (type === "success") {
      toast.success(message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
      });
    } else {
      toast.error(message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
      });
    }
  };

  return (
    <div className="create-project-form">
      <h1>Create New Project</h1>
      <p>Let's start from scratch!</p>
      <form onSubmit={handleSubmit} className="form form-adjust">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="projectId">ProjectID</label>
        <input
          type="text"
          id="projectId"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      <p className="link">
        <a href="/project-list">
          Already have a project? Click here
        </a>
      </p>
      <div className='centered'>
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreateNewProject;
