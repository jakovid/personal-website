import React from "react";
import WorldMap from "../media/world.svg";
import "../styles/life-map.css"

export default function BuildLifeMap() {
    return(
        <div className="life-map-cont">
            <h1>My Journey</h1>
            <div className="map-cont">
                <img src={WorldMap} className="world-map-svg"></img>
                <div className="experience-description">Blah</div>
            </div>
            <div className="experience-timeline-cont">
                <div className="timeline-name work">work</div>
                <div className="timeline-name education">education</div>
                <div className="american-university"></div>
                <div className="miami-university first"></div>
                <div className="tianjin-university"></div>
                <div className="miami-university second"></div>
                <div className="jiaotong-university"></div>
                <div className="fudan-university"></div>
                <div className="odin-project"></div>
            </div>
            <div className="loction-timeline-cont">
                <div className="timeline-name">location</div>
                <div className="usa-life first"></div>
                <div className="korea-life 1"></div>
                <div className="usa-life second"></div>
                <div className="china-life first"></div>
                <div className="usa-life third"></div>
                <div className="china-life second"></div>
                <div className="taiwan-life first"></div>
            </div>
        </div>
    )
}