import React, { useState } from 'react';
import './createNewProject.css';

const CreateNewProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, description, projectId });
    // Handle form submission
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
        <a href="/project-list">Already have a project? Click here</a>
      </p>
    </div>
  );
};

export default CreateNewProject;
