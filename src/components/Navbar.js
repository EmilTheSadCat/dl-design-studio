import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => (
    <nav>
        <ul>
            <li><NavLink to="/">DL DESIGN</NavLink></li>
            <li><NavLink to="/">Portfolio</NavLink></li>
            <li><NavLink to="/">Kontakt</NavLink></li>
            <li><NavLink to="/">PL|EN</NavLink></li>
        </ul>
    </nav>
);


export default Navbar