import React from "react";
import { NavLink } from "react-router-dom";
import KeyNestLogo from "../assets/key-logo.svg";
import "../styles/site-header.css";

export default function SiteHeader() {
    return (
        <header className="site-header">
            <nav>
                <NavLink to="/" className="header-logo">
                    <span>KeyNest</span>
                    <img src={KeyNestLogo} alt="KeyNest company logo" />
                </NavLink>
                <ul>
                    <li><NavLink to="/" className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/about" className="nav-link active">About</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
