import React from "react";
import WorldMap from "../media/world.svg";
import "../styles/life-map.css"
import AU from "../media/american-university.png";
import MU from "../media/miami-university.png";
import Fudan from "../media/fudan.png";
import Jiaotong from "../media/jiaotong.png";
import CIC from "../media/cic.jpg";
import AmCham from "../media/amcham.png";
import OMD from "../media/omd.jpg";
import TWO from "../media/two.jpg";
import Spec from "../media/specmedic.jpg";
import Spec2 from "../media/specmedic.png";
import ResEcon from "../media/resecon.jpg";
import MZC from "../media/mzc.png";
import Odin from "../media/odin.jpg";

export default function BuildLifeMap() {

    const timelineData = [
        {
            title: "Bachelor of Science: Business",
            venue: "Farmer School of Business",
            location: "Oxford, Ohio",
            description: "hi",
            duration: "2011-2014",
            img: MU,
        },
        {
            title: "Chinese Language Program",
            venue: "Shanghai Jiaotong University",
            location: "Shanghai, China",
            description: "hi",
            duration: "2016-2017",
            img: Jiaotong,
        },
        {
            title: "Master of Law: Political Science",
            venue: "Fudan University",
            location: "Shanghai, China",
            description: "hi",
            duration: "2017-2019",
            img: Fudan,
        },
        {
            title: "Full Stack Self Taught Program",
            venue: "The Odin Project",
            location: "Taipei, Taiwan",
            description: "hi",
            duration: "2020-2022",
            img: Odin,
        }
    ]

    let timelineInfo = {
        title: "Bachelor of Science: Business",
        venue: "Farmer School of Business",
        location: "Oxford, Ohio",
        description: "hi",
        duration: "2011-2014",
        img: MU,
    }


    function UpdateTimelineInfo(index) {
        document.querySelector('#experience-title').innerHTML = timelineData[index].title;
        document.querySelector('#experience-venue').innerHTML = timelineData[index].venue;
        document.querySelector('#experience-location').innerHTML = timelineData[index].location;
        document.querySelector('#experience-description').innerHTML = timelineData[index].description;
        document.querySelector('#experience-duration').innerHTML = timelineData[index].duration;
        document.querySelector('#experience-img').src = timelineData[index].img;


    
        console.log(timelineInfo);
    }

    return(
        <div className="life-map-cont">
            <h1>My Journey</h1>

            <div className="map-cont">
                <img src={WorldMap} className="world-map-svg"></img>
                <div id="experience-info-cont">
                    <img id="experience-img" src={timelineInfo.img}/>
                    <div id="experience-title">{timelineInfo.title}</div>
                    <div id="experience-venue">{timelineInfo.venue}</div>
                    <div id="experience-location">{timelineInfo.location}</div>
                    <div id="experience-description">{timelineInfo.description}</div>
                    <div id="experience-duration">{timelineInfo.duration}</div>
                </div>
            </div>

            <div className="timelines-cont">
                <div className="work-timeline-cont">
                    <div className="timeline-name work">work</div>
                    <div className="work-item spec-medic first">
                        <img src={Spec2}/>
                    </div>
                    <div className="work-item megazone-intern">
                        <img src={MZC} />
                    </div>
                    <div className="work-item spec-medic second">
                        <img src={Spec}/>
                        <div>Laser Technician</div>
                    </div>
                    <div className="work-item resolution-economics">
                        <img src={ResEcon}/>
                    </div>
                    <div className="work-item warm-outdoors">
                        <img src={TWO}/>
                        <div>Owner/Operator</div>
                    </div>
                    <div className="work-item cic">
                        <img src={CIC}/>
                        <div>Industry Report Editor</div>
                    </div>
                    <div className="work-item amcham">
                        <img src={AmCham}/>
                    </div>
                    <div className="work-item one-more-drink">
                        <img src={OMD}/>
                        <div>Co-Founder</div>
                    </div>
                    <div className="work-item free-lance">
                        <div>Freelance Programmer</div>
                    </div>
                </div>
                <div className="education-timeline-cont">
                    <div className="timeline-name education">education</div>
                    <div className="education-item miami-university" onMouseOver={() => {UpdateTimelineInfo(0)}}>
                        <img src={MU}/>
                        <div>Bachelor of Science: Business</div>
                    </div>
                    <div className="education-item jiaotong-university" onMouseOver={() => {UpdateTimelineInfo(1)}}>
                        <img src={Jiaotong}/>
                        <div>Chinese Language</div>
                    </div>
                    <div className="education-item fudan-university" onMouseOver={() => {UpdateTimelineInfo(2)}}>
                        <img src={Fudan}/>
                        <div>Master of Law:  Poli Sci</div>
                    </div>
                    <div className="education-item odin-project" onMouseOver={() => {UpdateTimelineInfo(3)}}>
                        <img src={Odin}/>
                        <div>The Odin Project</div>
                    </div>
                </div>

            </div>
        </div>
    )
}