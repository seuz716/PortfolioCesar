import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <div className="info">
        <h1>Let's work together and create something unique</h1>
        <hr></hr>
        <br></br>
        <div>
        <div className="profile-options">
          <a href="ResumeEs.pdf" download="ResumeEs.pdf">
          <button className="btn ">Get Resumen </button>
        </a>
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Info;