import React, { useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { initialLang, langReducer } from "../reducers/langReducer";



const Navbar = () => {
    const [state, dispatch] = useReducer(langReducer, initialLang);

    const handleLanguageChange = () => {
        if(state.lang == "PL") {
            dispatch({type: 'EN'});

        } else if (state.lang == "EN") {
            dispatch({type: 'PL'});
        }
    }

    return (
        <nav className="nav-bar">
            <ul className="nav-bar__list">
                <li className="nav-bar__item"><NavLink className="nav-bar__item--link" exact to="/">DL DESIGN</NavLink></li>
                <li className="nav-bar__item"><NavLink className="nav-bar__item--link" to="/portfolio">Portfolio</NavLink></li>
                <li className="nav-bar__item"><NavLink className="nav-bar__item--link" to="/contact">Kontakt</NavLink></li>
                <li className="nav-bar__item"><button className="nav-bar__item--btn" onClick={handleLanguageChange}>EN | PL</button></li>
            </ul>
        </nav>
    )
};


export default Navbar;