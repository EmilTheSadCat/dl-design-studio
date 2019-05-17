import React from 'react';
import { Link } from "react-router-dom";


const Footer  = () => (
    <footer className="footer">
        <div className="footer-top">
            <nav className="footer-top__nav">
                <ul>
                    <li><Link to="/">Kontakt</Link></li>
                    <li><Link to="/">Portfolio</Link></li>
                    <li><Link to="/">Regulamin współpracy</Link></li>
                </ul>
            </nav>

            <h5 className="footer-top__title">
                <a href="#">
                    dl design
                </a>
            </h5>
            {/* button vs header? */}

        </div>
        <div className="footer-bottom">
            <p className="footer-bottom__copyright">C2019 DL DESIGN</p>
        </div>
    </footer>
)


export default Footer;