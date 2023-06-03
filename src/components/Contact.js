import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <section className="contact-container">
            <Link to={`/`} className="contact-link-container">
                <img src="logo192.png" alt="facebook" />
                <p>Facebook</p>
            </Link>
            <Link to={`/`} className="contact-link-container">
                <img src="logo192.png" alt="twitter" />
                <p>Twitter</p>
            </Link>
            <Link to={`/`} className="contact-link-container">
                <img src="logo192.png" alt="email" />
                <p>Email</p>
            </Link>
        </section>
    );
}