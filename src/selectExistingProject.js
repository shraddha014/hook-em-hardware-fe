
import React from "react";

const SelectExistingProject = () => {
  const navigateToProject = (projectUrl) => {
    window.location.href = projectUrl;
  };

  return (
    
    <header>
      Your Current Projects
    
    <div className="button-container">
      <button style={{marginRight: 3 + 'em'} }
        className="project-button" 
        onClick={() => navigateToProject('project1.html')}
      >
        Project 1
      </button>

      <br>
      </br>
      <button style={{marginRight: 3 + 'em'}}
        className="project-button" 
        onClick={() => navigateToProject('project2.html')}
      >
        Project 2
      </button>
    </div>
    </header>
  );
};

export default SelectExistingProject;