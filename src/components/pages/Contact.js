import React from "react";

export default function Contact() {
    return (
        <div className="col-md-6">
            <h1>Contact Me</h1>
                <form>
                    <div className="form-group">
                        <label for="name">Name:</label>
                    </div>
                    <div>
                        <input className="form-input" type="text" id="name" placeholder="Enter your name here (required)" required/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email:</label>
                    </div>
                    <div>
                        <input className="form-input" type="text" id="email" placeholder="Enter your email address here (required)" required/>
                    </div>
                    <div className="form-group">
                        <label for="message">Message:</label>
                    </div>
                    <div>
                        <textarea className="form-input" type="text" id="message" rows="3" placeholder="Enter your message here (required)" required></textarea>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary" type="submit">Contact Me!</button>
                    </div>

                </form>
        </div>
    );
}

