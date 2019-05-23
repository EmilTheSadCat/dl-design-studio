import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Gallery from "./Gallery";

import { Store } from "./../Store";
import lang from "./language";


const PortfolioPage = () => {

    const { state } = useContext(Store);

    return (
        <>

        <header>
            <Navbar />
        </header>
        <main className='portfolio'>
        <section className='portfolio__info'>
            <div className="portfolio-titles">
                <h1 className="portfolio-titles__title">dl design</h1>
                <h3 className="portfolio-titles__subtitle">Portfolio</h3>
            </div>
            <p className="portfolio__text">{lang[state.lang]["portfolio-text"]}</p>
        </section>
        <Gallery />
        </main>

        <Footer />

        </>
    )
};


export default PortfolioPage;