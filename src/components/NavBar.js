import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className = "navigationWrapper">
            <div className = "linksWrapper">
                <Link to = '/' className = 'navLink' activeClassName = 'activeLink'>Home</Link>
                <Link to = '/superheroes' className = 'navLink' activeClassName = 'activeLink'>Super Heroes</Link>
                <Link to = '/starwars' className = 'navLink' activeClassName = 'activeLink'>Star Wars</Link>
            </div>
        </div>
    )
  }
  
  export default NavBar;