import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const email = <FontAwesomeIcon icon={faEnvelopeOpenText} />;

const styles = {
    p: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "2rem",
    },
    input: {
        width: "350px",
        border: "none",
    },
    text: {
        color: "white",
        fontSize: "1rem",
        fontFamily: "Roboto",
    },
    button: {
        textAlign: "center",
        border: "1px solid white",
        backgroundColor: "teal",
        text: "white",
    }
}

export default function Contact() {
    return (
        <div className="container col-md-4 mt-1" style={styles.text}>
            <p style={styles.p}>Send a Message {email}</p>
                <form>
                    <div className="m-2">
                        <label for="name">Name:</label>
                    </div>
                    <div className="form-control">
                        <input className="form-input" style={styles.input} type="text" id="name" placeholder="Enter your name here (required)" required/>
                    </div>
                    <div className="m-2">
                        <label for="email">Email:</label>
                    </div>
                    <div className="form-control">
                        <input className="form-input" style={styles.input} type="text" id="email" placeholder="Enter your email address here (required)" required/>
                    </div>
                    <div className="m-2">
                        <label for="message">Message:</label>
                    </div>
                    <div className="form-control">
                        <textarea className="form-input" style={styles.input} type="text" id="message" rows="3" placeholder="Enter your message here (required)" required></textarea>
                    </div>
                    <div class="d-grid gap-2 col-6 mx-auto m-3">
                        <button style={styles.button} class="btn" type="submit">Contact Me!</button>
                    </div>

                </form>
        </div>
    );
}

