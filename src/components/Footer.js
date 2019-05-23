import React, { useContext } from 'react';
import { Store } from "./../Store";
import lang from "./language";
import { Link } from "react-router-dom";


const Footer  = () => {
    
    const { state } = useContext(Store);
    return (
    <footer className="footer">
        <div className="footer-top">
            <nav className="footer-top__nav">
                <ul>
                    <li><Link to="/">{lang[state.lang]["footer-contact"]}</Link></li>
                    <li><Link to="/">Portfolio</Link></li>
                    <li><Link to="/">{lang[state.lang]["footer-terms"]}</Link></li>
                </ul>
            </nav>

            <h5 className="footer-top__title">
                <a href="#">
                    dl design
                </a>
            </h5>
        </div>
        <div className="footer-bottom">
            <p className="footer-bottom__copyright">©2019 dl design</p>
        </div>
    </footer>
)};


export default Footer;