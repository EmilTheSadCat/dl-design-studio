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
        <div>
            <h2>I'm a gallery!</h2>
            <div>
                <ul>
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