import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Gallery from "./Gallery";



const PortfolioPage = () => {

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
            <p className="portfolio__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore molestiae tempora, autem sint quis ex aliquam corporis 
            adipisci nisi non commodi saepe accusamus blanditiis dicta 
            officiis inventore consequuntur facilis fugit!</p>
        </section>
        <Gallery />
        </main>

        <Footer />

        </>
    )
};


export default PortfolioPage;