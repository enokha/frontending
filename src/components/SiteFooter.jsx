import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../assets/key-logo-footer.svg";
import "../styles/site-footer.css";

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <Link to="/" className="footer-logo">
                <span>KeyNest</span>
                <img src={footerLogo} alt="KeyNest logo" />
            </Link>
            <p>&copy; {new Date().getFullYear()} KeyNest</p>
        </footer>
    );
}
