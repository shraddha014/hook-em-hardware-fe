import React from "react";
import "./SelectExistingProject.css";
const SelectExistingProject = () => {
  //made a more dynamic array, i hope this is what you were talking aboutt
  const projects = [
    { ProjectID: 1, Description: "Project 1 Description", url: "project1.html" },
    { ProjectID: 2, Description: "Project 2 Description", url: "project2.html" },
  ];

  const navigateToProject = (projectUrl) => {
    window.location.href = projectUrl;
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
              onClick={() => navigateToProject(project.url)}
            >
              {`Project ${project.ProjectID}`}
              <p>{project.Description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </header>
  );
};

export default SelectExistingProject;