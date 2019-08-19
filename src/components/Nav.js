import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav = () => (
    <div> 
        <div> 
        <NavLink to="/mountains">Mountains</NavLink>
        </div> 
        <div> 
        <NavLink to="/waterfalls">Waterfalls</NavLink>
        </div>
        <div>  
        <NavLink to="/flowers">Flowers</NavLink>
        </div> 
        <div>  
        <NavLink to="/">Home</NavLink>
        </div> 
    </div>
);

export default Nav;