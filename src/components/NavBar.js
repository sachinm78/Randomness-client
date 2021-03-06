import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className = 'Nav-wrapper'>
            <div className = 'Nav-links-wrapper'>
                <Link to = '/' className = 'Nav-link' activeClassName = 'Active-link'>Home</Link>
                <Link to = '/superheroes' className = 'Nav-link' activeClassName = 'Active-link'>Super Heroes</Link>
                <Link to = '/starwars' className = 'Nav-link' activeClassName = 'Active-link'>Star Wars</Link>
                <Link to = '/hipster_ipsum' className = 'Nav-link' activeClassName = 'Active-link'>Hipster Ipsum</Link>
                <Link to = '/smart_dev' className = 'Nav-link' activeClassName = 'Active-link'>Smart Dev</Link>
                <Link to = '/feedback' className = 'Nav-link' activeClassName = 'Active-link'>Feedback</Link>
            </div>
        </div>
    )
  }
  
  export default NavBar;