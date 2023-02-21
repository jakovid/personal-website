import React from "react";
import "../styles/about.css";
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoNodejs} from "react-icons/io";
import { SiExpress, SiJest, SiMongodb, SiTypescript} from "react-icons/si";

export default function BuildAbout() {
    return(
        <div className="about-cont">
            <h1 id="about">ABOUT ME</h1>
            <div className="spacer"></div>
            <h3>Want to get to know a bit about me? You can find out who I am and what skills I have here.</h3>
            <div className="about-me-info">
                <div className="about-me-info-left">
                    <h2>Who am I?</h2>
                    <p>I am a <b>front-end web developer</b> from Ohio, currently based in the APAC region. I love building websites and web applications, especially with other developers. I am currently building a new social media web app for live performers with a friend right now! You can check out some of my projects below.</p>
                    <p>I also like creating web development content in my free time. I'll be linking to my articles and videos here in the future. Please check them out and give them a like, comment, or share if you find them useful!</p>
                    <p>I am open to <b>front-end job opportunities</b> where I can build something great alongside some other great developers, or if you need someone to be the sole developer on a project. If you have an opportunity that aligns with my skillset and experience, please do not hesitate to contact me!</p>
                </div>
                <div className="about-me-info-right">
                    <h2>My Skills</h2>
                    <div className="my-skills-cont">
                        <div className="skill-icon">
                            <p>React</p>
                            <IconContext.Provider value={{ size: "4rem"}}>
                                <FaReact/>
                            </IconContext.Provider>
                        </div>
                        <div className="skill-icon">
                            <p>TypeScript</p>
                            <IconContext.Provider value={{ size: "4rem"}}>
                                <SiTypescript/>
                            </IconContext.Provider>
                        </div>
                        <div className="skill-icon">
                            <p>JavaScript</p>
                            <IconContext.Provider value={{ size: "4rem"}}>
                                <IoLogoJavascript/>
                            </IconContext.Provider>
                        </div>
                        <div className="skill-icon">
                            <p>HTML</p>
                            <IconContext.Provider value={{ size: "4rem"}}>
                                <IoLogoHtml5/>
                            </IconContext.Provider>
                        </div>
                        <div className="skill-icon">
                            <p>CSS</p>
                            <IconContext.Provider value={{ size: "4rem"}}>
                                <IoLogoCss3/>
                            </IconContext.Provider>
                        </div>
                        <div className="skill-icon">
                            <p>NodeJS</p>
                            <IconContext.Provider value={{ size: "4rem"}}>
                                <IoLogoNodejs/>
                            </IconContext.Provider>
                        </div>
                        <div className="skill-icon">
                            <p>Express</p>
                            <IconContext.Provider value={{ size: "4rem"}}>
                                <SiExpress/>
                            </IconContext.Provider>
                        </div>
                        <div className="skill-icon">
                            <p>MongoDB</p>
                            <IconContext.Provider value={{ size: "4rem"}}>
                                <SiMongodb/>
                            </IconContext.Provider>
                        </div>
                        <div className="skill-icon">
                            <p>Jest</p>
                            <IconContext.Provider value={{ size: "4rem"}}>
                                <SiJest/>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
            <a href="" className="about-contact-me-button">Contact Me</a>
        </div>
    )
}