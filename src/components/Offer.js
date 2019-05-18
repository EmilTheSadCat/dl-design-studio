import React from 'react';
import { Link } from "react-router-dom";

const Offer = () => (
    <section className="offer margin-top-m">
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
            <div className="btn header-box__btn">
                <Link to="/contact" >zapytaj o wycenę</Link>

            </div>
        </div>
        <div className="list-container">
            <div className="list-wrapper--left">
                <ul>
                    <li>znak firmowy</li>
                    <li>identyfikacja wizualna</li>
                    <li>strona www</li>
                    <li>witryna sklepu</li>
                    <li>materiały reklamowe</li>
                    <li>przygotowanie do druku</li>
                    <li>copywriting</li>
                </ul>
            </div>
            <div className="list-wrapper--right">
                <ul>
                    <li>grafika wydawnicza</li>
                    <li>okładki</li>
                    <li>layouty</li>
                    <li>skład</li>
                    <li>ilustracje</li>
                    <li>fotografia</li>
                    <li>fotografia produktu</li>
                </ul>
            </div>
        </div>
        <div className="btn btn-portfolio margin-top-s">
            <Link to="/portfolio" >zobacz portfolio</Link>

        </div>
    </section>
);


export default Offer;