import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

export default function Navigation() {
    const { theme, dark, toggle } = useContext(ThemeContext);
    return (
        <header style={{backgroundColor: theme.backgroundColor}}>
            <nav>
                <ul className="nav-bar" style={{color: theme.color}}>
                    <li>
                        <Link to={`/`} className="nav-active">Home</Link>
                    </li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#about">About</a></li>
                    <li>
                        <Link to={`/contact`}>Contact</Link>
                    </li>
                </ul>
            </nav>
            <ThemeToggle />
        </header>
    );
}