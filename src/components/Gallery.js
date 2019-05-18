import React, { useState } from 'react';
import Pictures from "./Pictures";

const Gallery = () => {
    const [category, setCategory] = useState({ category: 'category3'})
    const handlePick = ({target}) => {
        if(category.category === target.id) return
            else {
                document.getElementById(category.category).classList.remove('active');
                setCategory({category: target.id})
                target.classList.add('active');
            }
    }
    return (
        <div className="gallery">
            <div className="gallery__picker margin-top-xs">
                <ul className="picker__list">
                    <li><button id="category1" onClick={handlePick}>Skład</button></li>
                    <li><button id="category2" onClick={handlePick}>Okładki</button></li>
                    <li><button id="category3" className="active" onClick={handlePick}>Logotyp</button></li>
                    <li><button id="category4" onClick={handlePick}>Identyfikacja</button></li>
                    <li><button id="category5" onClick={handlePick}>Ilustracje</button></li>
                </ul>
            </div>
            <Pictures category={category}/>
        </div>
    )
};

export default Gallery;