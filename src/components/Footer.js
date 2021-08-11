import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const stackOverflow = <FontAwesomeIcon icon={faStackOverflow} size="2x"/>;
const twitter = <FontAwesomeIcon icon={faTwitter} size="2x"/>;
const linkedIn = <FontAwesomeIcon icon={faLinkedin} size="2x"/>;
const github = <FontAwesomeIcon icon={faGithub} size="2x"/>;

function Footer() {
    return (
<footer className="text-center text-white">
    <div className="container p-3">
        <section className="mb-4 d-flex justify-content-evenly ">
            <a className="btn btn-outline-light btn-floating m-1" href="https://stackoverflow.com/users/15231751/twashke?tab=profile" title="Contact me on Stack Overflow!" target="_blank"  rel="noreferrer" role="button">{stackOverflow}</a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/twashke1" title="Contact me on Twitter!" target="_blank"  rel="noreferrer" role="button">{twitter}</a>

            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/tiffanywashke" title="Contact me on LinkedIn!" target="_blank"  rel="noreferrer" role="button">{linkedIn}</a>

            <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/twashke" title="Check out my GitHub!" target="_blank"  rel="noreferrer" role="button">{github}</a>
        </section>
    </div>
</footer>
    )
}

export default Footer;