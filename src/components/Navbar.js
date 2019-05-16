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
        <nav>
            <ul>
                <li><NavLink exact to="/">DL DESIGN</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                <li><NavLink to="/contact">Kontakt</NavLink></li>
                <li><button onClick={handleLanguageChange}>EN | PL</button></li>
            </ul>
        </nav>
    )
};


export default Navbar;