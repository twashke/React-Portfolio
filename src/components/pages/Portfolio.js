import React from "react";
import happyArtGallery from "./../assets/images/happy-little-art-gallery.png";
import moodTracker from "./../assets/images/mood-tracker.png";
import techBlog from "./../assets/images/CMS-Tech-Blog.png";
import workoutTracker from "./../assets/images/fitness-tracker.png";
import progressiveBudget from "./../assets/images/progressive-budget-tracker.png";
import employeeTracker from "./../assets/images/employee-tracker.png";

const styles = {
    cardSize: {
        height: "300px",
        width: "300px",
        textAlign: "center",
    },
    imageSize: {
        height: "200px",
        width: "250px"
    }
}

export default function Portfolio() {
    return (
        <div className="container d-flex justify-content-evenly flex-wrap mt-4 mb-4">
            <div className="card m-3" style={styles.cardSize}>
                <div>
                    <a href="https://happylittleartgallery072021.herokuapp.com/" target="_blank" rel="noreferrer">
                    <img src={happyArtGallery} className="align-self-center rounded m-2" style={styles.imageSize} alt="Happy Little Art Gallery" title="Click me to view the Deployed Happy Little Art Gallery Website!"/></a>
                </div>
                <div>
                    <h3>Happy Little Art Gallery</h3>
                    <a href="https://github.com/twashke/Art-Gallery" 
                    target="_blank" rel="noreferrer"> 
                    <h4>GitHub Repository</h4></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardSize}>
                <div>
                    <a href="https://chabivz.github.io/Mood-Tracker/" 
                    target="_blank" rel="noreferrer">
                    <img src={moodTracker} className="align-self-center rounded m-2" style={styles.imageSize} alt="Mood Tracker" title="Click me to view the Deployed Mood Tracker Website!"/></a>
                </div>
                <div>
                    <h3>Mood Tracker</h3>
                    <a href="https://github.com/twashke/Mood-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h4>GitHub Repository</h4></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardSize}>
                <div>
                    <a href="https://github.com/twashke/Tech-Blog" 
                    target="_blank" rel="noreferrer">
                    <img src={techBlog} className="align-self-center rounded m-2" style={styles.imageSize} alt="Tech Blog" title="Click me to view the Deployed Tech Blog Website!"/></a>
                </div>
                <div>
                    <h3>Tech Blog</h3>
                    <a href="https://github.com/twashke/Tech-Blog" 
                    target="_blank" rel="noreferrer">
                    <h4>GitHub Repository</h4></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardSize}>
                <div>
                    <a href="https://fitnesstracker072021.herokuapp.com/?id=610ad82ab997cd0015123b6a" 
                    target="_blank" rel="noreferrer">
                    <img src={workoutTracker} className="align-self-center rounded m-2" style={styles.imageSize} alt="Nosql Workout Tracker" title="Click me to view the Deployed Nosql Workout Tracker Website!"/></a>
                </div>
                <div>
                    <h3>Nosql Workout Tracker</h3>
                    <a href="https://github.com/twashke/Nosql-Workout-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h4>GitHub Repository</h4></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardSize}>
                <div>
                    <a href="https://progressivebudgettracker082021.herokuapp.com/" 
                    target="_blank" rel="noreferrer">
                    <img src={progressiveBudget} className="align-self-center rounded m-2" style={styles.imageSize} alt="Progressive Budget Tracker" title="Click me to view the Deployed Progressive Budget Tracker Website!"/></a>
                </div>
                <div>
                    <h3>PWA Budget Tracker</h3>
                    <a href="https://github.com/twashke/Progressive-Budget-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h4>GitHub Repository</h4></a>
                </div>
            </div>
            <div className="card m-3" style={styles.cardSize}>
                <div>
                    <a href="https://github.com/twashke/Employee-Tracker" 
                    target="_blank" rel="noreferrer">
                    <img src={employeeTracker} className="align-self-center rounded m-2" style={styles.imageSize} alt="Employee Tracker" title="Click me to clone code from GitHub and install locally!"/></a>
                </div>
                <div>
                <h3>Employee Tracker</h3>
                    <a href="https://github.com/twashke/Employee-Tracker" 
                    target="_blank" rel="noreferrer">
                    <h4>GitHub Repository</h4></a>
                </div>
            </div>
        </div>
    );
}