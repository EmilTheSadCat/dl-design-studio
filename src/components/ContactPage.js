import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";


const ContactPage = () => (

    <>
    <header>
        <Navbar />
    </header>
    <main>
        <h2>Hello contact!</h2>
        <ContactForm/>

    </main>
    <Footer />
    </>
);



export default ContactPage;