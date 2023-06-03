import React from "react";

export default function Navigation() {
    return (
        <nav>
            <ul className="nav-bar">
                <li><a className="nav-active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}