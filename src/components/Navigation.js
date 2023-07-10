import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";

export default function Navigation() {
    const { theme, dark, toggle } = useContext(ThemeContext);
    return (
        <AppBar sx={{background: theme.backgroundColor}}>
            <ul className="nav-bar" style={{color: theme.color}}>
                <li>
                    <Link to={`/`} className="nav-active">Home</Link>
                </li>
                <li><a href="#news">News</a></li>
                <li><a href="#about">About</a></li>
                <li>
                    <Link to={`/contact`}>Contact</Link>
                </li>
                <ThemeToggle />
            </ul>
        </AppBar>
    );
}