import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav = () => (
    <ul className="main-nav"> 
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
);

export default Nav;