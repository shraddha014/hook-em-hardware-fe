import React from "react";
import { useNavigate } from "react-router-dom";
import "./SelectExistingProject.css";
const SelectExistingProject = () => {
  const navigate = useNavigate();
  
  //made a more dynamic array, i hope this is what you were talking aboutt
  const projects = [
    { ProjectID: 1, Description: "Project 1 Description"},
    { ProjectID: 2, Description: "Project 2 Description" },
  ];

  const navigateToProject = (projectId) => {
    navigate('/hardware', { state: { projectId } });
  };

  return (
    <header>
      <center>
      Your Current Projects
      </center>
      
      <div className="button-container">
    
        {projects.map((project) => (
          <div key={project.ProjectID}>
            <div
              style={{ marginRight: '0em' }}
              className="project-button"
              onClick={() => navigateToProject(project.ProjectID)}
            >
              {`Project ${project.ProjectID}`}
              <p>{project.Description}</p>
            </div>
            
          </div>
        ))}
        <p className="link">
        <a href="/create-new-project">Create New Project</a>
      </p>
      </div>
    </header>
  );
};

export default SelectExistingProject;