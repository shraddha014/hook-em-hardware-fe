import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SelectExistingProject.css";
import Alert from "react-bootstrap/Alert";

const SelectExistingProject = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setUsername(username);
      fetchProjects();
    }
  }, [username]);

  const navigateToProject = (project_id) => {
    localStorage.setItem("project_id", project_id);
    navigate("/hardware");
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
      const response = await fetch(
        `https://hook-em-hardware-be-b81aa6e7bd7f.herokuapp.com/api/get-user-associated-project-list?username=${username}`
      );
      const data = await response.json();
      if (Array.isArray(data)) {
        setProjects(data);
        setError("");
      } else {
        console.error("Expected an array but got:", data);
        setProjects([]);
        setError("Error:" + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
      setError("Error:" + (error.message || "Unknown error"));
    }
  };

  const fetchProjectById = async (project_id) => {
    const isAlreadyInProject = projects.some(
      (project) => project.project_id === project_id
    );
    if (isAlreadyInProject) {
      setError("You are already part of this project.");
      return;
    } else {
      try {
        const response = await fetch(
          `https://hook-em-hardware-be-b81aa6e7bd7f.herokuapp.com/api/get_project_from_project_id?project_id=${project_id}`
        );
        const data = await response.json();
        if (data && data.project_id) {
          setSelectedProject(data); // Assuming data is a single project object
          setError("");
        } else {
          console.error("Expected a project object but got:", data);
          setSelectedProject(null);
          setError("Error: ", data.message);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        setSelectedProject(null);
        setError(
          "You are already a part of this project. Try using different project id"
        );
      }
    }
  };

  const setProjectToUser = async (username, project_id) => {
    try {
      const response = await fetch(
        "https://hook-em-hardware-be-b81aa6e7bd7f.herokuapp.com/set_project_to_user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            project_id: project_id,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setError("");
        fetchProjects();
        setSelectedProject(null);
      } else {
        console.error("Error adding project to user:", data);
        setError("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error setting project to user:", error);
      setError("Error:" + (error.message || "Unknown error"));
    }
  };

  return (
    <header>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className="header-content">
        <h1>Your Current Projects</h1>
        <h1>Join a Project</h1>
      </div>

      <div className="main-content">
        <div className="button-container">
          {projects.map((project) => (
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
            <Link to="/create-new-project">Create New Project</Link>
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
              <div className="project-button">
                {`Project ${selectedProject.project_id}`}
                <p>{selectedProject.project_description}</p>
              </div>
              <button
                onClick={() =>
                  setProjectToUser(username, selectedProject.project_id)
                }
              >
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
