import React from "react";
import headerBanner from "./images/nature.jpeg";

const styles = {
image: {
    height: 150,
    width: "100%",
},
text: {
    color: "white",
}
}

function Header() {
    return (
        <div style={styles.text}>
            <div id="home">
                <div>
                    <h1>Tiffany Washke</h1>
                    <img src={headerBanner} alt="Lake 22" title="Lake 22" style={styles.image}></img>
                </div>
            </div>
        </div>)
}

export default Header;