import React, { useContext } from 'react';
import { Store } from "./../Store";
import lang from "./language";
import { Link } from "react-router-dom";

const Offer = () => {

    const { state } = useContext(Store);

    return (
    <section className="offer margin-top-m">
        <div className="offer__header-box">
            <div className="header-box">
                <h3 className="header-box__title">{lang[state.lang]["offer-title"]}</h3>
                <p className="header-box__text">{lang[state.lang]["offer-text"]}</p>
            </div>
         
                <Link className="btn header-box__btn" to="/contact">{lang[state.lang]["offer-btn-pricing"]}</Link>


        </div>
        <div className="list-container">
            <div className="list-wrapper--left">
                {lang[state.lang]["offer-list-left"]}
            </div>
            <div className="list-wrapper--right">
                {lang[state.lang]["offer-list-right"]}
            </div>
        </div>
            <Link className="btn btn-portfolio margin-top-s" to="/portfolio" >{lang[state.lang]["offer-btn-portfolio"]}</Link>
    </section>


    )
    };


export default Offer;