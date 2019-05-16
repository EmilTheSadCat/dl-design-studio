import React from "react";

const Pictures = ({category}) => {
    // let picturesArr;
    let picturesArr = [1, 1, 1, 1, 1, 1 ];

    const picturesCategory = () => {
        switch(category.category){
            case 'category1':
                picturesArr = [1, 1, 1, 1, 1, 1];
                break;
            case "category2":
                picturesArr = [2, 2, 2, 2, 2, 2]
            case 'category3':
                return <p className="slide-in">Krowa 3</p>
            case 'category4':
                return <p className="slide-in">Makko 4</p>
            case 'category5':
                return <p className="slide-in">piesong 5</p>
            
        }
    };
    return (
        <div>
            {picturesCategory()}
            <picture><img src={`./images/photo_${picturesArr[0]}.jpg`} /></picture>
            <picture><img src={`./images/photo_${picturesArr[1]}.jpg`} /></picture>
            <picture><img src={`./images/photo_${picturesArr[2]}.jpg`} /></picture>
            <picture><img src={`./images/photo_${picturesArr[3]}.jpg`} /></picture>
            <picture><img src={`./images/photo_${picturesArr[4]}.jpg`} /></picture>
            <picture><img src={`./images/photo_${picturesArr[5]}.jpg`} /></picture>
        </div>
    )
};


export default Pictures;