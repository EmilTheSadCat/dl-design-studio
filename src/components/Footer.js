import React from 'react';
import { NavLink } from "react-router-dom";


const Footer  = () => (
    <footer className="footer">
        <div className="footer-top">
            <nav className="footer-top__nav">
                <ul>
                    <li><NavLink to="/">Kontakt</NavLink></li>
                    <li><NavLink to="/">Portfolio</NavLink></li>
                    <li><NavLink to="/">Regulamin współpracy</NavLink></li>
                </ul>
            </nav>

            <h4 className="footer-top__title">dl design</h4>
            {/* button vs header? */}

        </div>
        <div className="footer-bottom">
            <p className="footer-bottom__copyright">C2019 DL DESIGN</p>
        </div>
    </footer>
)


export default Footer;