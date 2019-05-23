import React, { useState, useContext } from 'react';
import Pictures from "./Pictures";
import { CSSTransition } from "react-transition-group";

import { Store } from "./../Store";
import lang from "./language";


const Gallery = () => {
    const [category, setCategory] = useState({ category: 'category3'})
    const [inProp, setInProp] = useState(true);

    const { state, dispatch } = useContext(Store);


    const handlePick = ({target}) => {
        if(category.category === target.id) return
        else {
            setInProp(false);

            setTimeout(() => {
                setInProp(true);
                

                setTimeout(() => {
                    setCategory({category: target.id})
                    target.classList.add('active');
                    
                },200);
            }, 5);
                console.log(inProp);
                document.getElementById(category.category).classList.remove('active');
                
            }
    }
    return (
        <div className="gallery">
            <div className="gallery__picker margin-top-xs">
                <ul className="picker__list">
                    <li><button id="category1" onClick={handlePick}>{lang[state.lang]["gallery-cat-1"]}</button></li>
                    <li><button id="category2" onClick={handlePick}>{lang[state.lang]["gallery-cat-2"]}</button></li>
                    <li><button id="category3" className="active" onClick={handlePick}>{lang[state.lang]["gallery-cat-3"]}</button></li>
                    <li><button id="category4" onClick={handlePick}>{lang[state.lang]["gallery-cat-4"]}</button></li>
                    <li><button id="category5" onClick={handlePick}>{lang[state.lang]["gallery-cat-5"]}</button></li>
                </ul>
            </div>
            <CSSTransition
            in={inProp}
            timeout={300}
            classNames="gallery-transition"
            // onEnter={()=> console.log('enter')}
            // onExit={() => setInProp(false)}
            >
            
            <Pictures category={category} inProp={inProp}/>
            </CSSTransition>
        </div>
    )
};

export default Gallery;