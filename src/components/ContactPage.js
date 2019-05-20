import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";


const ContactPage = () => (

    <>
    <header>
        <Navbar />
    </header>
    <main className="contact margin-top-s">
    <section className='contact__info'>
            <div className="contact-titles">
                <h1 className="contact-titles__title">dl design</h1>
                <h3 className="contact-titles__subtitle">Kontakt</h3>
            </div>
            <p className="contact__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore molestiae tempora, autem sint quis ex aliquam corporis 
            adipisci nisi non commodi saepe accusamus blanditiis dicta 
            officiis inventore consequuntur facilis fugit!</p>
        </section>
        <ContactForm/>

    </main>
    <Footer />
    </>
);



export default ContactPage;