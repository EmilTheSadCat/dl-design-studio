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
                <li><NavLink to="/">DL DESIGN</NavLink></li>
                <li><NavLink to="/">Portfolio</NavLink></li>
                <li><NavLink to="/">Kontakt</NavLink></li>
                <li><button onClick={handleLanguageChange}>EN | PL</button></li>
            </ul>
        </nav>
    )
};


export default Navbar;