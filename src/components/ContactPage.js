import React, { useContext } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { Store } from "./../Store";
import lang from "./language";


const ContactPage = () => {
    
    const { state } = useContext(Store);

    return (

    <>
    <header>
        <Navbar />
    </header>
    <main className="contact margin-top-s">
    <section className='contact__info'>
            <div className="contact-titles">
                <h1 className="contact-titles__title">dl design</h1>
                <h3 className="contact-titles__subtitle">{lang[state.lang]["contact-subtitle"]}</h3>
            </div>
            <p className="contact__text">{lang[state.lang]["contact-text"]}</p>
        </section>
        <ContactForm/>

    </main>
    <Footer />
    </>
)};



export default ContactPage;