import React from "react";
import headerBanner from "./images/banner.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-regular-svg-icons"

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


const star = <FontAwesomeIcon icon={faStar} style={styles.icon} size="xs" className="align-baseline"/>;

function Header() {
    return (
            <div>
                <div className="container profile-text">
                    <h1 style={styles.text}>{star}  Tiffany Washke  {star}</h1>
                </div>
                <img src={headerBanner} alt="Lake 22" title="Lake 22" style={styles.image}></img>
            </div>
        )
}

export default Header;