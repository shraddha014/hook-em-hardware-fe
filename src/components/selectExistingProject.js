import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./SelectExistingProject.css";
import Alert from 'react-bootstrap/Alert'

const SelectExistingProject = ({ username }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState('');

  const navigateToProject = (projectId) => {
    navigate('/hardware', { state: { projectId } });
  };

  const handleButtonClick = () => {
    if (searchQuery) {
      fetchProjectById(searchQuery);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the state with the new value
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/get-user-associated-project-list?username=karen`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        console.error('Expected an array but got:', data);
        setProjects([]);
        setError('Error setting project to user: ' + (error.message || 'Unknown error'));

      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      setProjects([]);
      setError('Error setting project to user: ' + (error.message || 'Unknown error'));

    }
  };

  const fetchProjectById = async (projectId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/get_project_from_project_id?project_id=${projectId}`);
      const data = await response.json();
      if (data && data.project_id) {
        setSelectedProject(data); // Assuming data is a single project object
      } else {
        console.error('Expected a project object but got:', data);
        setSelectedProject(null);
      }
    } catch (error) {
      console.error('Error fetching project:', error);
      setSelectedProject(null);
      setError('You are already a part of this project. Try using different project id');

    }
  };

  const setProjectToUser = async (username, projectId) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/set_project_to_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'karen',
          project_id: projectId,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Project added to user:', data);
        // Handle success
      } else {
        console.error('Error adding project to user:', data);
      }
    } catch (error) {
      console.error('Error setting project to user:', error);
      setError('Error setting project to user: ' + (error.message || 'Unknown error'));

    }
  };

  useEffect(() => {
    fetchProjects();
  }, [username]);

  const filteredProjects = projects.filter(project => 
    project.project_id.includes(searchQuery)
  );

  return (
    <header>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="header-content">
        <h1>Your Current Projects</h1>
        <h1>Join a Project</h1>
      </div>
      

      <div className="main-content">
        <div className="button-container">
          {filteredProjects.map((project) => (
            <div key={project.project_id} className="project-item">
              <div
                className="project-button"
                onClick={() => navigateToProject(project.project_id)}
              >
                {`Project ${project.project_id}`}
                <p>{project.project_description}</p>
              </div>
            </div>
          ))}
          <p className="link">
            <a href="/create-new-project">Create New Project</a>
          </p>
        </div>
        
        <div className="search-container">
          <div>
            <input
              type="text"
              placeholder="Search by Project ID"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-bar"
            />
            <button onClick={handleButtonClick} className="search-button">
              Fetch Project
            </button>
          </div>

          {selectedProject ? (
            <div key={selectedProject.project_id} className="project-item">
              <div
                className="project-button"
              >
                {`Project ${selectedProject.project_id}`}
                <p>{selectedProject.project_description}</p>
              </div>
              <button onClick={() => setProjectToUser(username, selectedProject.project_id)}>
                Add to User
              </button>
            </div>
          ) : (
            <p>No project selected.</p>
          )}
        </div>
      </div>
    </header>
  );
};

export default SelectExistingProject;
