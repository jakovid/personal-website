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
                <div className="my-projects-item">
                    <div className="my-projects-item-img my-projects-item-section"></div>
                    <div className="my-projects-item-description my-projects-item-section"></div>
                    <div className="my-projects-item-title my-projects-item-section"></div>
                    <div className="my-projects-item-nav my-projects-item-section"></div>
                </div>
                {/* <div className="my-projects-item"></div>
                <div className="my-projects-item"></div> */}

            </div>
        </div>
    )
}