import React from "react";
import headerBanner from "./images/banner.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-regular-svg-icons"

// Styles Added 
const styles = {
    image: {
        height: 150,
        width: "100%",
    },
    text: {
        color: "#d2a0f9",
        padding: "20px",
        fontSize: "3rem",
        textAlign: "center",
        fontFamily: "Roboto",
    },
    icon: {
        color: "white",
    }
}

// Font Awesome Star Icon with styling (needs to remain below styles)
const star = <FontAwesomeIcon icon={faStar} style={styles.icon} size="xs" className="align-baseline"/>;

// Export the function
export default function Header() {
    return (
            <div>
                <div className="container">
                    <h1 style={styles.text}>{star}  Tiffany Washke  {star}</h1>
                </div>
                <img src={headerBanner} style={styles.image}></img>
            </div>
        )
}