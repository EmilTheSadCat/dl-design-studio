import React, { useReducer, useContext } from "react";
import Navbar from "./Navbar";
import AboutNote from "./AboutNote";
import Offer from "./Offer";
import Footer from "./Footer";
import language from "./language";
import { Store } from "./../Store";


const MainPage = () => {
    const {state} = useContext(Store);
    
    return (
        <>
        {console.log(state)}
            <Navbar />
            <header className="main-page__header">
                <h1 className="header-title noselect">dl design</h1>
                <h2 className="header-subtitle">{language[state.lang]["header-subtitle"]}</h2>
                <h3 className="header-text">... i wszystko jasne</h3>
            </header>

            <main className="main-page__content">
                <div className="line"></div>
                <AboutNote />
                <Offer />

            </main>

            <Footer />
        </>
    )

};



export default MainPage;