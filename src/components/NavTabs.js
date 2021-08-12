import React from "react";

// Styling Added
const styles = {

    nav: {
        fontFamily: "Roboto",
        backgroundColor: "black",
    },
    text: {
        color: "#40BCD8",
        fontWeight: "bold",
    }
}

// Export the function
export default function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul style={styles.nav} className="nav nav-tabs sticky-top d-flex justify-content-evenly flex-nowrap">
            <li className="nav-item">
                <a href="#about" style={styles.text}
                onClick={() => handlePageChange("About")}

                className={currentPage=== "About" ? "nav-link active" : "nav-link"}>About Me</a>
            </li>
            <li className="nav-item">
                <a href="#portfolio" style={styles.text}
                onClick={() => handlePageChange("Portfolio")}

                className={currentPage=== "Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</a>
            </li>
            <li className="nav-item">
                <a href="#contact" style={styles.text}
                onClick={() => handlePageChange("Contact")}

                className={currentPage=== "Contact" ? "nav-link active" : "nav-link"}>Contact</a>
            </li>
            <li className="nav-item">
                <a href="#resume" style={styles.text}
                onClick={() => handlePageChange("Resume")}

                className={currentPage=== "Resume" ? "nav-link active" : "nav-link"}>Resume</a>
            </li>
        </ul>
    );
}