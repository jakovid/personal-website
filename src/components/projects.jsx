import React from "react";
import "../styles/projects.css";

export default function BuildMyProjects() {
    return(
        <div className="my-projects-cont">
            <h1 className="my-projects-title">My Projects</h1>
            <div className="my-projects-items">
                <div className="my-project-item">
                    <div className="my-project-item-img"><div className="my-project-item-img-cover"></div></div>
                    <div className="my-project-item-info">
                        <h2 className="my-project-item-name">1. Sky Education</h2>
                        <p>The client required a bi-lingual website and low cost hosting. I decided to use HashRouter instead of  ReactRouter to keep the yearly budget low by utilizing a single page free hosting service. This website also allows visitors to send emails to the client on the page with the implementation of a RESTful API.</p>
                        <div className="my-project-item-skills">Skills: HTML, CSS, ReactJS, RESTful APIs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}