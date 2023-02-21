import React from "react";
import JacobDowdle from "../media/jacob-dowdle.png";
import "../styles/header.css";

export default function BuildHeader() {

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function HackerEffect(event) {
        let iterations = 0;

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
            .map((letter, index) => {
                if(index < iterations) {
                    return event.target.dataset.value[index];
                }
                
                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

            if(iterations >= event.target.dataset.value.length) clearInterval(interval);

            iterations += 1 / 3;
        }, 30);
    }

    return(
        <header className="header">
            <div className="header-left">
                <img className="header-img" src={JacobDowdle}/>
                <h1 className="header-name" id="hacker-effect" onMouseOver={HackerEffect} data-value="JACOB DOWDLE">WHO IS THIS?</h1>
            </div>
            <div className="header-right">
                <a className="header-right-item">HOME</a>
                <a className="header-right-item">ABOUT</a>
                <a className="header-right-item">PROJECTS</a>
                <a className="header-right-item">CONTACT</a>
            </div>
        </header>
    )
}