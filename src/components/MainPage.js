import React from "react";
import Navbar from "./Navbar";
import AboutNote from "./AboutNote";
import Offer from "./Offer";
import Footer from "./Footer";


const MainPage = () => (
    <>
    <header>
        <Navbar />
        <h1>dl design</h1>
        <h2>studio graficzne</h2>
        <h3>... i wszystko jasne</h3>
    </header>

    <main>
        <AboutNote />
        <Offer />

    </main>

        <Footer />
    </>
);
 


export default MainPage;