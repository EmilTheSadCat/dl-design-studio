import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from "./Footer";

import { Store } from "./../Store";
import lang from "./language";



const TermsPage = () => {

    const { state } = useContext(Store);
    
    return (
    <>

        <header>
            <Navbar />
        </header>
        <main className='terms'>
        <section className='terms__info'>
            <div className="terms-titles">
                <h1 className="terms-titles__title">dl design</h1>
                <h3 className="terms-titles__subtitle">{lang[state.lang]['terms-titles-subtitle']}</h3>
            </div>
            <p className="terms__text">{lang[state.lang]['terms-text-1']}</p>
        </section>
        <section>
            <p>{lang[state.lang]['terms-text-2']}</p>
        </section>
        </main>

        <Footer />

        </>
)};


export default TermsPage;