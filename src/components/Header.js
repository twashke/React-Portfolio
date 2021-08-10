import React from "react";
import headerBanner from "./images/nature.jpeg";

const styles = {
image: {
    height: 150,
    width: "100%",
},
text: {
    color: "white",
    padding: "20px",
    fontSize: "3rem",
    textAlign: "center",
    fontFamily: "Roboto",
}
}

function Header() {
    return (
        <div>
            <div id="home">
                <div>
                    <h1 style={styles.text}>Tiffany Washke</h1>
                    <img src={headerBanner} alt="Lake 22" title="Lake 22" style={styles.image}></img>
                </div>
            </div>
        </div>)
}

export default Header;