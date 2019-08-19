import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav = () => (
    <nav className="main-nav"> 
        <ul>
        <li> 
        <NavLink to="/mountains">Mountains</NavLink>
        </li> 
        <li> 
        <NavLink to="/waterfalls">Waterfalls</NavLink>
        </li>
        <li>  
        <NavLink to="/flowers">Flowers</NavLink>
        </li> 
        <li>  
        <NavLink to="/">Home</NavLink>
        </li> 
    </ul>
    </nav>
);

export default Nav;