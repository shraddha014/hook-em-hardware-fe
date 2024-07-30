import React from "react";
import "./register.css";

function Register() {
    return (
        <>
            <p className="title">New User Registration</p>

            <form className="RegistrationBox">
            <div>
              <label for="Name">Name: </label>
              <input type="text" />
            </div>
            <div>
              <label for="username">Email: </label>
              <input type="email" />
            </div>
            <div className="password">
              <label for="password">Password: </label>
              <input type="password" />
            </div>
            <input type={"submit"}
              style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}

export default Register;