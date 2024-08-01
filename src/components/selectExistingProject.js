
import React from "react";
import "./selectExistingProject.css";
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
      Your Current Projects
      <div className="button-container">
        {projects.map((project) => (
          <div key={project.ProjectID}>
            <button
              style={{ marginRight: '3em' }}
              className="project-button"
              onClick={() => navigateToProject(project.url)}
            >
              {`Project ${project.ProjectID}`}
            </button>
            <p>{project.Description}</p>
          </div>
        ))}
      </div>
    </header>
  );
};

export default SelectExistingProject;