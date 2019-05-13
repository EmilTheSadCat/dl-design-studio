import React from 'react';

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
            <button className="btn header-box__btn">zapytaj o wycenę</button>
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

        <button className="btn btn-portfolio">zobacz portfolio</button>
    </section>
);


export default Offer;