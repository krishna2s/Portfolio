import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Krishna</h2>
        <div className="prompt">
          <p>Student at Gujrat Technical University, CSE 2019 Batch <br></br>
          Gujarat, India</p>
          <a
        href="https://www.linkedin.com/in/krishna-sarvaiya-233613237/"
        target="_blank" rel="noopener noreferrer" >
      <LinkedInIcon /></a>
      <a
        href="mailto:krishnasarvaiya27@gmail.com"
        target="_blank" rel="noopener noreferrer"
      >
          <EmailIcon />
          </a>
          <a
        href="https://github.com/krishna2s"
        target="_blank" rel="noopener noreferrer"
      >
      <GithubIcon /></a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS and JavaScript
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span> 
              MySQL, NodeJS and PHP
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
