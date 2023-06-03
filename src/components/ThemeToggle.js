import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggle() {
    const { theme, dark, toggle } = useContext(ThemeContext);
    return (
        <button className="theme-toggle-button" onClick={toggle} style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
            Switch to {dark ? 'Light' : 'Dark'}
        </button>
    );
}