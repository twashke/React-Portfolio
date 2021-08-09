import React from "react";
import pdfResume from "../images/Resume-Tiffany-Washke.pdf";

export default function Resume() {
    return (
        <div className="container" id="resume">
            <h1>Resume</h1>
            <a href={pdfResume} target="_blank" rel="noreferrer" >
                <h5>Link to PDF </h5></a>
            <div>
                <h3>Technical Skills</h3>
                    <ul>
                        <li>HTML, CSS, JS, JSX, Markdown</li>
                        <li>JQuery, Bootstrap, Font Awesome</li>
                        <li>node.js, npm packages</li>
                        <li>Utilizing and Creating API's</li>
                        <li>handlebars</li>
                        <li>MySql and MongoDB</li>
                        <li>Progressive Web Applications</li>
                        <li>React</li>
                    </ul>
            </div>
            <div>
                <h3>Non-Technical Skills</h3>
                    <ul>
                        <li>Problem Solver</li>
                        <li>Google Ninja</li>
                        <li>Postive Attitude</li>
                        <li>Sense of Humor</li>
                    </ul>
            </div>
            <div>
                <h3>Education</h3>
                    <ul>
                        <li>Currently Enrolled in UW Coding Bootcamp</li>
                        <li>March 16, 2021 to September 2, 2021</li>
                    </ul>
            </div> 
        </div>


    )
}