import React, { useRef, useState } from "react";
import { CSSTransition } from 'react-transition-group';

const Pictures = ({category})=> {
    let picturesArr = [1, 1, 1, 1, 1, 1 ];
    // console.log(inProp.inProp);
    // console.log(inProp)
    
    
    const picturesCategory = () => {
        switch(category.category){
            case 'category1':
                picturesArr = [1, 1, 1, 1, 1, 1];
                break;
            case "category2":
                picturesArr = [2, 2, 2, 2, 2, 2]
                break;
            case 'category3':
                // return <p className="slide-in">Krowa 3</p>
            case 'category4':
                // return <p className="slide-in">Makko 4</p>
            case 'category5':
                // return <p className="slide-in">piesong 5</p>
        }

        // let previousCategory = category.category;
        

    };
    return (
        // <CSSTransition
        //     in={inProp}
        //     timeout={50000}
        //     classNames="gallery-transition"
        //     // onEnter={()=> console.log('enter')}
        //     >
            // <>
            <div className="gallery__pictures margin-top-xs" >
                {picturesCategory()}
                <picture className="picture"><img src={`./images/photo_${picturesArr[0]}.jpg`} /></picture>
                <picture className="picture"><img src={`./images/photo_${picturesArr[1]}.jpg`} /></picture>
                <picture className="picture"><img src={`./images/photo_${picturesArr[2]}.jpg`} /></picture>
                <picture className="picture"><img src={`./images/photo_${picturesArr[3]}.jpg`} /></picture>
                <picture className="picture"><img src={`./images/photo_${picturesArr[4]}.jpg`} /></picture>
                <picture className="picture"><img src={`./images/photo_${picturesArr[5]}.jpg`} /></picture>
            </div>
        // </>
        // </CSSTransition>
    )
};


export default Pictures;