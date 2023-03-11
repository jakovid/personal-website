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
            </div>
        </div>
    )
}