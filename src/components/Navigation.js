import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
    const { theme, dark, toggle } = useContext(ThemeContext);
    return (
        <header style={{backgroundColor: theme.backgroundColor}}>
            <nav>
                <ul className="nav-bar" style={{color: theme.color}}>
                    <li><a className="nav-active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <ThemeToggle />
        </header>
    );
}