import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./createNewProject.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateNewProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [project_id, setproject_id] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) setUsername(username);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, description, project_id });

    try {
      const response = await fetch(
        `https://hook-em-hardware-be-b81aa6e7bd7f.herokuapp.com/api/create-project`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            description: description,
            project_id: project_id,
            username: username,
          }),
        }
      );

      if (response.ok) {
        showToast("success", "Create project successful");
        backtoExistingProject(); // Redirect on success
      } else {
        const errorData = await response.json();
        showToast("error", errorData.message || "There seems to be an Error");
      }
    } catch (error) {
      showToast("error", "There seems to be an Error");
    }
  };

  const backtoExistingProject = () => {
    navigate("/project-list");
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
        <label htmlFor="project_id">project_id</label>
        <input
          type="text"
          id="project_id"
          value={project_id}
          onChange={(e) => setproject_id(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
      <p className="link">
        <Link to="/project-list">Already have a project? Click here</Link>
      </p>
      <div className="centered">
        <ToastContainer />
      </div>
    </div>
  );
};

export default CreateNewProject;
