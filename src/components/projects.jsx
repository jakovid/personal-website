import React from "react";
import "../styles/projects.css";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiExpress, SiMongodb, SiTypescript} from "react-icons/si";



export default function BuildMyProjects() {

    let activeIndex = 0;

    const projects = document.getElementsByClassName("my-projects-item");

    function handleLeftClick(){
                // bump active index

                const prevIndex = activeIndex - 1 >= 0 ? activeIndex -1 : projects.length - 1;

                const currentProject = document.querySelector(`[data-index="${activeIndex}"]`),
                prevProject = document.querySelector(`[data-index="${prevIndex}"]`);
        
                // active group becomes inactive
        
                currentProject.dataset.status = "inactive";
        
                // next project becomes active
        
                prevProject.dataset.status = "active";
        
                // update active index
                activeIndex = prevIndex;
        
    };

    function handleRightClick(){

        // bump active index

        const nextIndex = activeIndex + 1 <= projects.length - 1 ? activeIndex +1 : 0;

        const currentProject = document.querySelector(`[data-index="${activeIndex}"]`),
        nextProject = document.querySelector(`[data-index="${nextIndex}"]`);

        // active group becomes inactive

        currentProject.dataset.status = "inactive";

        // next project becomes active

        nextProject.dataset.status = "active";

        // update active index
        activeIndex = nextIndex;
    }
    
    return(
        <div className="my-projects-cont">
            <h1 className="my-projects-title">My Projects</h1>
            <div className="my-projects-items">
                <div className="my-projects-item" data-index="0" data-status="active">
                    <div className="my-projects-item-img my-projects-item-section sky-education"></div>
                    <div className="my-projects-item-description my-projects-item-section">
                        <p>The client required a bi-lingual website and low cost hosting. I decided to use HashRouter instead of ReactRouter to keep the yearly budget low by utilizing a single page free hosting service. This website also allows visitors to send emails to the client on the page with the implementation of a RESTful API to pass the template and dynamic parameters.</p>
                    </div>
                    <div className="my-projects-item-title my-projects-item-section">
                        <h1>Sky Education</h1>
                        <h2>Bi-Lingual Website</h2>
                    </div>
                    <div className="my-projects-item-nav my-projects-item-section">
                        <button className="my-projects-item-nav-btn" type="button" onClick={handleLeftClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
                        </button>
                        <button className="my-projects-item-nav-btn" type="button" onClick={handleRightClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z"/></svg>
                        </button>                    </div>
                </div>
                <div className="my-projects-item" data-index="1" data-status="inactive">
                <div className="my-projects-item-img my-projects-item-section set-listed"></div>
                    <div className="my-projects-item-description my-projects-item-section">
                    <p>Set Listed is a social media web application for live performers I am working on with two developers in the UK through Trello, Github, and weekly stand-ups. The project incorporates RESTful APIs, CRUD operations, state management, and asynchronus programming. Users can currently create and update profiles, send private messages, and create posts. In the future they will be able to create groups, and share events.</p>
                    </div>
                    <div className="my-projects-item-title my-projects-item-section">
                        <h1>setListed</h1>
                        <h2>Networking App for Performers</h2>
                    </div>
                    <div className="my-projects-item-nav my-projects-item-section">
                        <button className="my-projects-item-nav-btn" type="button" onClick={handleLeftClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
                        </button>
                        <button className="my-projects-item-nav-btn" type="button" onClick={handleRightClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z"/></svg>
                        </button>
                    </div>
                </div>
                <div className="my-projects-item" data-index="2" data-status="inactive">
                <div className="my-projects-item-img my-projects-item-section"></div>
                    <div className="my-projects-item-description my-projects-item-section"></div>
                    <div className="my-projects-item-title my-projects-item-section"></div>
                    <div className="my-projects-item-nav my-projects-item-section">
                        <button className="my-projects-item-nav-btn" type="button" onClick={handleLeftClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 896 160 576l320-320 42 42-248 248h526v60H274l248 248-42 42Z"/></svg>
                        </button>
                        <button className="my-projects-item-nav-btn" type="button" onClick={handleRightClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m480 896-42-43 247-247H160v-60h525L438 299l42-43 320 320-320 320Z"/></svg>
                        </button>                    </div>
                </div>

            </div>
        </div>
    )
}