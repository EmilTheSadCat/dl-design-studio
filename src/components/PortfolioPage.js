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
        <main>
        <section>
            <div>
                <h1>dl design</h1>
                <h3>Portfolio</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
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