import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

// Font Awesome Email Icon
const email = <FontAwesomeIcon icon={faEnvelopeOpenText} style={{ color: "white" }}/>;

// Styles Added 
const styles = {
    p: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "2rem",
        color: "#d2a0f9",
        fontFamily: "Roboto",
    },
    input: {
        width: "350px",
        border: "none",
    },
    text: {
        color: "#40BCD8",
        fontSize: "1rem",
        fontFamily: "Roboto",
    },
    button: {
        textAlign: "center",
        border: "2px solid #d2a0f9",
        backgroundColor: "#40BCD8",
        color: "black",
        fontFamily: "Roboto",
        fontSize: "1rem",
        fontWeight: "bold",
    }
}

// Function to handle the form submit
function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    // User enters all fields
    if(name && email && message) {

        // Input can be viewed in console log
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Message: ", message);

        // Send alert thanking them for the message (can later connect to server and send email)
        return alert("Thank you for sending a message!")
      
    // User misses a field
    } else {
        // Send alert to fill in missing field
        return alert("Please fill in missing field to send a message!")
    }
}

// Function for form validation
function formValidation() {

    const input = document.querySelector(".form-input").value

    if (!input) {
        return alert("This field is required!")
    }

}

// Export the function
export default function Contact() {
    return (
        <div className="container col-md-4 mt-4" style={styles.text}>
            <p style={styles.p}>Send a Message {email}</p>
                <form>
                    <div className="m-2">
                        <h4>Name:</h4>
                    </div>
                    <div className="form-control" onBlur={formValidation}>
                        <input className="form-input" style={styles.input} type="text" id="name" placeholder="Enter your name here (required)" required/>
                    </div>
                    <div className="m-2">
                        <h4>Email:</h4>
                    </div>
                    <div className="form-control" onBlur={formValidation}>
                        <input className="form-input" style={styles.input} type="text" id="email" placeholder="Enter your email address here (required)" required/>
                    </div>
                    <div className="m-2">
                        <h4>Message:</h4>
                    </div>
                    <div className="form-control" onBlur={formValidation}>
                        <textarea className="form-input mb-4" style={styles.input} type="text" id="message" rows="3" placeholder="Enter your message here (required)" required></textarea>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto m-3">
                        <button style={styles.button} onClick={handleFormSubmit} className="btn" id="button" type="submit">Contact Me!</button>
                    </div>
                </form>
        </div>
    );
}

