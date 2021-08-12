import React from "react";
import picture from "./../assets/images/Tiffany.png";

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
        backgroundColor: "black",
        maxWidth: "300px",
        height: "auto",
        border: "2px solid white",
    }
}

export default function About() {
    return (
        <div className="container d-flex justify-content-evenly flex-wrap mt-3 p-2 mb-2">
            <div className="card col-md-4 m-2 align-self-center" style={styles.image}>
                <img src={picture} className="img-fluid rounded" alt="Tiffany Washke" title="Tiffany Washke"/>
            </div>
            <div className="card col-md-4 align-self-center" style={styles.text}>
                <div className="m-2">
                    <p>Born in Oklahoma City, Tiffany has spent her life yearning for the next adventure.  Growing up in Everett, Washington and San Bernardino, California, she has experienced flannel to board shorts.  Every failure has taught her something new and she utilizes these moments in new experiences.</p> 
                </div>
                <div className="m-2">
                    <p>Currently working as a Planner/Scheduler at K and H Printers, her hobbies include hiking, Apex, music, learning guitar and learning to code.  If she is not in the mountains, she is behind a computer screen or playing video games.</p> 
                </div>
            </div>
        </div>

    );
}