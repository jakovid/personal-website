import React from "react";
import "../styles/projects.css";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiExpress, SiMongodb, SiTypescript} from "react-icons/si";



export default function BuildMyProjects() {
    return(
        <div className="my-projects-cont">
            <h1 className="my-projects-title">My Projects</h1>
            <div className="my-projects-items">
                <div className="my-project-item">
                    <div className="my-project-item-img sky-education"><div className="my-project-item-img-cover"></div></div>
                    <div className="my-project-item-info">
                        <div className="my-project-item-name-cont">
                        <h2 className="my-project-item-name">Sky Education</h2>
                        <h3>Bilingual Website</h3>
                        </div>
                        <p>The client required a bi-lingual website and low cost hosting. I decided to use HashRouter instead of  ReactRouter to keep the yearly budget low by utilizing a single page free hosting service. This website also allows visitors to send emails to the client on the page with the implementation of a RESTful API to pass the template and dynamic parameters.</p>
                        <div className="my-project-item-skills">
                            <div className="skill-icon">
                                <p>React</p>
                                <IconContext.Provider value={{ size: "3rem"}}>
                                    <FaReact/>
                                </IconContext.Provider>
                            </div>
                            <div className="skill-icon">
                                <p>HTML</p>
                                <IconContext.Provider value={{ size: "3rem"}}>
                                    <IoLogoHtml5/>
                                </IconContext.Provider>
                            </div>
                            <div className="skill-icon">
                                <p>CSS</p>
                                <IconContext.Provider value={{ size: "3rem"}}>
                                    <IoLogoCss3/>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-project-item reverse">
                    <div className="my-project-item-img set-listed"><div className="my-project-item-img-cover"></div></div>
                    <div className="my-project-item-info reverse">
                        <div className="my-project-item-name-cont reverse">
                        <h2 className="my-project-item-name">Set Listed</h2>
                        <h3>Social Media Web Application</h3>
                        </div>
                        <p>Set Listed is a social media web application for live performers I am working on with two developers in the UK through Trello, Github, and weekly stand-ups. The project incorporates RESTful APIs, CRUD operations, state management, and asynchronus programming. Users can currently create and update profiles, and create posts. In the future they will be able to send messages, create groups, and share events.</p>
                        <div className="my-project-item-skills">
                            <div className="skill-icon">
                                <p>TypeScript</p>
                                <IconContext.Provider value={{ size: "3rem"}}>
                                    <SiTypescript/>
                                </IconContext.Provider>
                            </div>
                            <div className="skill-icon">
                                <p>HTML</p>
                                <IconContext.Provider value={{ size: "3rem"}}>
                                    <IoLogoHtml5/>
                                </IconContext.Provider>
                            </div>
                            <div className="skill-icon">
                                <p>CSS</p>
                                <IconContext.Provider value={{ size: "3rem"}}>
                                    <IoLogoCss3/>
                                </IconContext.Provider>
                            </div>
                            <div className="skill-icon">
                                <p>MongoDB</p>
                                <IconContext.Provider value={{ size: "3rem"}}>
                                    <SiMongodb/>
                                </IconContext.Provider>
                            </div>
                            <div className="skill-icon">
                                <p>Express</p>
                                <IconContext.Provider value={{ size: "3rem"}}>
                                    <SiExpress/>
                                </IconContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}