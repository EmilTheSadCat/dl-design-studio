import React from "react";
import Navbar from "./Navbar";
import AboutNote from "./AboutNote";
import Offer from "./Offer";
import Footer from "./Footer";


const MainPage = () => (
    <>
        <Navbar />
    <header className="main-page__header">
        <h1 className="header-title noselect">dl design</h1>
        <h2 className="header-subtitle">studio graficzne</h2>
        <h3 className="header-text">... i wszystko jasne</h3>
    </header>

    <main className="main-page__content">
        <AboutNote />
        <Offer />

    </main>

        <Footer />
    </>
);
 


export default MainPage;