import React from 'react';
import { Link } from "react-router-dom";

const Offer = () => (
    <section className="offer">
        <div className="offer__header-box">
            <div className="header-box">
                <h3 className="header-box__title">Oferta</h3>
                <p className="header-box__text">Lorem ipsum dolor sit amet, 
                covnsectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis 
                nostrud exercitation:</p>
            </div>
            <Link to="/contact" className="btn header-box__btn">zapytaj o wycenę</Link>
        </div>
        <div>
            <div className="list-wrapper--left">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="list-wrapper--right">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

        <Link to="/portfolio" className="btn btn-portfolio">zobacz portfolio</Link>
    </section>
);


export default Offer;