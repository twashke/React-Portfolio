import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Declare images to use for Portfolio 
import happyArtGallery from "./../images/happy-little-art-gallery.png";
import moodTracker from "./../images/mood-tracker.png";
import techBlog from "./../images/CMS-Tech-Blog.png";
import workoutTracker from "./../images/fitness-tracker.png";
import progressiveBudget from "./../images/progressive-budget-tracker.png";
import weatherDashboard from "./../images/weather-dashboard.png";

// Font Awesome Github Icon
const github = <FontAwesomeIcon icon={faGithub} size="sm" style={{ color: "black" }} className="align-baseline"/>;

// Styling Added
const styles = {
    cardStyle: {
        backgroundColor: "#40BCD8",
        height: "360px",
        width: "325px",
        border: "2px solid #d2a0f9",
        fontFamily: "Roboto, serif",
        textAlign: "center",
        color: "white"
    },
    imageSize: {
        height: "250px",
        width: "275px",
    }
}

// Export the function
export default function Portfolio() {
    return (
        <div className="container d-flex justify-content-evenly flex-wrap mt-4 mb-4">
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a className="text-decoration-none text-reset" href="https://happylittleartgallery072021.herokuapp.com/" target="_blank" rel="noreferrer">
                    <h4 className="mt-3">Happy Little Art Gallery</h4>
                    <img src={happyArtGallery} className="rounded mb-3" style={styles.imageSize} alt="Happy Little Art Gallery" title="Click me to view the Deployed Happy Little Art Gallery Website!"/></a>
                </div>
                <div>
                    <a className="text-decoration-none text-reset" href="https://github.com/twashke/Art-Gallery" 
                    target="_blank" rel="noreferrer"> 
                    <h5 style={{ color: "black" }}>{github}  GitHub Repository</h5></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a className="text-decoration-none text-reset" href="https://chabivz.github.io/Mood-Tracker/" 
                    target="_blank" rel="noreferrer">
                    <h4 className="mt-3">Mood Tracker</h4>
                    <img src={moodTracker} className="rounded mb-3" style={styles.imageSize} alt="Mood Tracker" title="Click me to view the Deployed Mood Tracker Website!"/></a>
                </div>
                <div>
                    <a className="text-decoration-none text-reset" href="https://github.com/twashke/Mood-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h5 style={{ color: "black" }}>{github}  GitHub Repository</h5></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a className="text-decoration-none text-reset" href="https://techblogmvc072021.herokuapp.com/" 
                    target="_blank" rel="noreferrer">
                    <h4 className="mt-3">Tech Blog</h4>
                    <img src={techBlog} className="rounded mb-3" style={styles.imageSize} alt="Tech Blog" title="Click me to view the Deployed Tech Blog Website!"/></a>
                </div>
                <div>
                    <a className="text-decoration-none text-reset" href="https://github.com/twashke/Tech-Blog" 
                    target="_blank" rel="noreferrer">
                    <h5 style={{ color: "black" }}>{github}  GitHub Repository</h5></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a className="text-decoration-none text-reset" href="https://fitnesstracker072021.herokuapp.com/?id=610ad82ab997cd0015123b6a" 
                    target="_blank" rel="noreferrer">
                    <h4 className="mt-3">Nosql Workout Tracker</h4>
                    <img src={workoutTracker} className="rounded mb-3" style={styles.imageSize} alt="Nosql Workout Tracker" title="Click me to view the Deployed Nosql Workout Tracker Website!"/></a>
                </div>
                <div>
                    <a className="text-decoration-none text-reset" href="https://github.com/twashke/Nosql-Workout-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h5 style={{ color: "black" }}>{github}  GitHub Repository</h5></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a className="text-decoration-none text-reset" href="https://progressivebudgettracker082021.herokuapp.com/" 
                    target="_blank" rel="noreferrer">
                    <h4 className="mt-3">Progressive Budget Tracker</h4>
                    <img src={progressiveBudget} className="rounded mb-3" style={styles.imageSize} alt="Progressive Budget Tracker" title="Click me to view the Deployed Progressive Budget Tracker Website!"/></a>
                </div>
                <div>
                    <a className="text-decoration-none text-reset" href="https://github.com/twashke/Progressive-Budget-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h5 style={{ color: "black" }}>{github}  GitHub Repository</h5></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a className="text-decoration-none text-reset" href="https://twashke.github.io/Weather-Dashboard/" 
                    target="_blank" rel="noreferrer">
                    <h4 className="mt-3">Weather Dashboard</h4>
                    <img src={weatherDashboard} className="rounded mb-3" style={styles.imageSize} alt="Weather Dashboard" title="Click me to view the Deployed Weather Dashboard Website!"/></a>
                </div>
                <div>
                    <a className="text-decoration-none text-reset" href="https://github.com/twashke/Weather-Dashboard" 
                    target="_blank" rel="noreferrer">
                    <h5 style={{ color: "black" }}>{github}  GitHub Repository</h5></a>
                </div>
            </div>
        </div>
    );
}