import React from "react"
import { Link } from 'react-router-dom'

export default () => 
    <div class='Home-wrapper'>
        <div class='Home-header'>
            <h1>Let The Randomness Ensue!</h1>
        </div>
        <div class='Home-body'>
            <h3>Genrate a <Link to = '/superheroes' className = 'Home-link' activeClassName = 'activeLink'>Random Super Hero </Link>Name!</h3>
            <h3>Take a <Link to = '/starwars' className = 'Home-link' activeClassName = 'activeLink'>Random Star Wars </Link>Adventure!</h3>
            <h3>More content coming soon...!</h3>
            
        </div>
    </div>