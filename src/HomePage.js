import React, { useState } from "react";
import './App.css';

function HomePage(){

  const backgroundStyle = {
    backgroundImage: "url('/images/background.jpg')",
    backgroundSize: "Cover",
    backgroundPosition: "Center",
    backgroundRepeat: "no-repeat",
    width: "176.5vh",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white", 
  }

  const textStyle = {
    fontSize: "2em",
    padding: "10px",
    margin: 0,
    transform: "translate(12%, -400%)",
  }

  const [isHoveredsignin, setIsHoveredsignin] = useState(false);
  const [isHoveredsignup, setIsHoveredsignup] = useState(false);

  const signinbuttonStyle = {
    marginTop: "-200px",//positive value is down
    padding: "30px",//bigger button
    fontSize: "1em",
    backgroundColor: isHoveredsignin ? "orange" : "#e5731a",
    color: isHoveredsignin ? "black" :"white",
    border: "none",
    transform: "translate(-245%, -100%)",
    borderRadius: "15px",
    transition: "background-color 0.3s, color 0.3s",
  }

  const signupbuttonStyle = {
    marginTop: "10px",
    padding: "28px",
    fontSize: "1em",
    backgroundColor: isHoveredsignup ? "orange" : "#e5731a",
    color: isHoveredsignup ? "black" :"white",
    border: "none",
    transform: "translate(-335%, -50%)",
    borderRadius: "15px",
    transition: "background-color 0.3s, color 0.3s",
  }

  const handleMouseEntersignin = () => {
    setIsHoveredsignin(true);
  }

  const handleMouseLeavesignin = () => {
    setIsHoveredsignin(false);
  }

  const handleMouseEntersignup = () => {
    setIsHoveredsignup(true);
  }

  const handleMouseLeavesignup = () => {
    setIsHoveredsignup(false);
  }

  const signinClick = {
    window,Location,href: "login.com",
  }

  const signupClick = {
    window,Location,href: "register.com",
  }


  return(
    <div>
      {/* <video id = "video-background" autoPlay loop muted>
        <source src = "我的影片.mp4"  type = "video/mp4"> 
        </source>
      </video> */}
      <div style = {backgroundStyle}>
        <h2 style = {textStyle}>
            Welcome to your HomePage!
          </h2>
          <button 
          style = {signinbuttonStyle} 
          onClick = {signinClick}
          onMouseEnter = {handleMouseEntersignin}
          onMouseLeave = {handleMouseLeavesignin}
          >
            Sign  in
          </button>
          <button 
          style = {signupbuttonStyle} 
          onClick={signupClick}
          onMouseEnter = {handleMouseEntersignup}
          onMouseLeave = {handleMouseLeavesignup}
          >
            Sign up
          </button>
        </div>
    </div>
  );
}

export default HomePage;