import React from "react";
import picture from "./../images/Tiffany.jpg";

const styles = {
    text: {
        backgroundColor: "black",
        fontSize: "1.1rem",
        color: "white",
        fontFamily: "Roboto",
        textAlign: "center",
        padding: "10px",
    },
    image: {
        height: "360px",
        width: "300px",
        backgroundColor: "black",
    }
}

export default function About() {
    return (
        <div className="container d-flex justify-content-evenly flex-wrap mt-4 p-4 mb-2">
            <div className="card col-md-4" style={styles.image}>
                <img src={picture}alt="Tiffany Washke" title="Tiffany Washke"/>
            </div>
            <div className="card col-md-4" style={styles.text}>
                <p>Born in March 1985 in Oklahoma City, Tiffany has spent her life yearning for the next adventure.  Growing up in Everett, Washington and San Bernardino, California, she has experienced flannel to board shorts.  Every failure has taught her something new and she utilizes these moments in new experiences.
                Currently working as a Planner/Scheduler at K and H Printers, her hobbies include hiking, Apex, guitars and learning to code.  If she is not in the mountains, she is behind a computer screen or playing video games.</p> 
            </div>
        </div>

    );
}