import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

function Footer() {
    const linkedinURL = "https://www.linkedin.com/in/nitin-kumar-singh-4883a7202/";
    const githubUrl = "https://github.com/Nitinsingh2002"
    const intagramUrl = "https://instagram.com/nitin.__.singh?igshid=YmVzN2F6eTNuZDg="
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <a href={intagramUrl} target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <FaInstagram />
                        </span>

                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a>

                    <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a>

                </div>
            </ContentWrapper>
        </footer>
    )
}

export default Footer;