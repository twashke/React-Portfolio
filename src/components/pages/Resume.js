import React from "react";
import pdfResume from "../images/Resume-Tiffany-Washke.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs} from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

// Font Awesome Icons
const technical = <FontAwesomeIcon icon={faCogs} size="4x"/>;
const nonTechnical = <FontAwesomeIcon icon={faLightbulb} size="4x"/>;
const school = <FontAwesomeIcon icon={faUniversity} size="4x"/>;
const resume = <FontAwesomeIcon icon={faFilePdf} size="4x" style={{ color: "#40BCD8" }}/>;

// Styles Added 
const styles = {
    text: {
        color: "white",
        fontFamily: "Roboto",
    },
    card: {
        backgroundColor: "black",
        fontSize: "1rem",
    },
    header: {
        fontWeight: "bolder",
        fontSize: "1.5rem",
        color: "#40BCD8",
    },
    icon: {
        padding: "20px",
        marginLeft: "75px",
        color: "#d2a0f9",
    },
    link: {
        fontWeight: "bolder",
        fontSize: "1.5rem",
        color: "#d2a0f9",
    }
}

// Export the function
export default function Resume() {
    return (
        <div className="container d-flex justify-content-evenly flex-wrap mt-4 mb-4" style={styles.text}>
            <div className="card col-md-3 m-2" style={styles.card}>
                <div style={styles.icon}>{technical}</div>
                <h3 style={styles.header}>Technical Skills</h3>
                    <ul>
                        <li>HTML, CSS, JS, Markdown</li>
                        <li>JQuery, Bootstrap, Font Awesome</li>
                        <li>node.js, npm packages</li>
                        <li>Utilizing and Creating API's</li>
                        <li>handlebars</li>
                        <li>MySql and MongoDB</li>
                        <li>Progressive Web Applications</li>
                        <li>React</li>
                    </ul>
            </div>
            <div className="card col-md-3 m-2" style={styles.card}>
            <div style={styles.icon}>{nonTechnical}</div>
                <h3 style={styles.header}>Non-Technical Skills</h3>
                    <ul>
                        <li>Problem Solver</li>
                        <li>Google Ninja</li>
                        <li>Postive Attitude</li>
                        <li>Quick Learner</li>
                        <li>Sense of Humor</li>
                    </ul>
            </div>
            <div className="card col-md-3 m-2" style={styles.card}>
            <div style={styles.icon}>{school}</div>
                <h3 style={styles.header}>Education</h3>
                    <ul>
                        <li>Enrolled in UW Coding Bootcamp</li>
                        <li>March 16, 2021 to September 2, 2021</li>
                    </ul>
                    <div className="mt-4">
                        <a href={pdfResume} style={styles.icon}>{resume}</a></div>
                        <a href={pdfResume} className="mt-4 text-decoration-none text-reset" target="_blank" rel="noreferrer">
                    <h5 style={styles.link} className="card-text">Link to PDF Resume</h5></a>
            </div> 
        </div>


    )
}
