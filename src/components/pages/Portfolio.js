import React from "react";
import happyArtGallery from "./../images/happy-little-art-gallery.png";
import moodTracker from "./../images/mood-tracker.png";
import techBlog from "./../images/CMS-Tech-Blog.png";
import workoutTracker from "./../images/fitness-tracker.png";
import progressiveBudget from "./../images/progressive-budget-tracker.png";
import employeeTracker from "./../images/employee-tracker.png";

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

export default function Portfolio() {
    return (
        <div className="container d-flex justify-content-evenly flex-wrap mt-4 mb-4">
            <div className="card m-3 portfolio" style={styles.cardStyle}>
                <div>
                    <a href="https://happylittleartgallery072021.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={happyArtGallery} className="rounded m-3" style={styles.imageSize} alt="Happy Little Art Gallery" title="Click me to view the Deployed Happy Little Art Gallery Website!"/></a>
                </div>
                <div>
                    <h4>Happy Little Art Gallery</h4>
                    <a href="https://github.com/twashke/Art-Gallery" 
                    target="_blank" rel="noreferrer"> 
                    <h5>GitHub Repository</h5></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a href="https://chabivz.github.io/Mood-Tracker/" 
                    target="_blank" rel="noreferrer">
                    <img src={moodTracker} className="rounded m-3" style={styles.imageSize} alt="Mood Tracker" title="Click me to view the Deployed Mood Tracker Website!"/></a>
                </div>
                <div>
                    <h4>Mood Tracker</h4>
                    <a href="https://github.com/twashke/Mood-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h5>GitHub Repository</h5></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a href="https://github.com/twashke/Tech-Blog" 
                    target="_blank" rel="noreferrer">
                    <img src={techBlog} className="rounded m-3" style={styles.imageSize} alt="Tech Blog" title="Click me to view the Deployed Tech Blog Website!"/></a>
                </div>
                <div>
                    <h4>Tech Blog</h4>
                    <a href="https://github.com/twashke/Tech-Blog" 
                    target="_blank" rel="noreferrer">
                    <h5>GitHub Repository</h5></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a href="https://fitnesstracker072021.herokuapp.com/?id=610ad82ab997cd0015123b6a" 
                    target="_blank" rel="noreferrer">
                    <img src={workoutTracker} className="rounded m-3" style={styles.imageSize} alt="Nosql Workout Tracker" title="Click me to view the Deployed Nosql Workout Tracker Website!"/></a>
                </div>
                <div>
                    <h4>Nosql Workout Tracker</h4>
                    <a href="https://github.com/twashke/Nosql-Workout-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h5>GitHub Repository</h5></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a href="https://progressivebudgettracker082021.herokuapp.com/" 
                    target="_blank" rel="noreferrer">
                    <img src={progressiveBudget} className="rounded m-3" style={styles.imageSize} alt="Progressive Budget Tracker" title="Click me to view the Deployed Progressive Budget Tracker Website!"/></a>
                </div>
                <div>
                    <h4>Progressive Budget Tracker</h4>
                    <a href="https://github.com/twashke/Progressive-Budget-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h5>GitHub Repository</h5></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardStyle}>
                <div>
                    <a href="https://github.com/twashke/Employee-Tracker" 
                    target="_blank" rel="noreferrer">
                    <img src={employeeTracker} className="rounded m-3" style={styles.imageSize} alt="Employee Tracker" title="Click me to clone code from GitHub and install locally!"/></a>
                </div>
                <div>
                <h4>Employee Tracker</h4>
                    <a href="https://github.com/twashke/Employee-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h5>GitHub Repository</h5></a>
                </div>
            </div>
        </div>
    );
}