import React, { useContext } from 'react';
import { Store } from "./../Store";
import lang from "./language";

const AboutNote = () => {

    const { state } = useContext(Store);
    
    return (
    <section className="about">
        <div className="about__left-wrapper">

        <div className="about__sign noselect">dl</div>

        </div>
        <div className="about__right-wrapper">
            <h3 className="about__title">{lang[state.lang]["about-title-1"]} <br/> {lang[state.lang]["about-title-2"]}</h3>
            <p className="about__text">{lang[state.lang]["about-text"]}</p>
        </div>
        
    </section>

)};



export default AboutNote;
