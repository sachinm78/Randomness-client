import React from "react"
import { Link } from 'react-router-dom'
import Footer from './Footer';

export default () =>
    <div class='Home-wrapper'>
        <div class='Home-header'>
            <h1>Let The Randomness Ensue!</h1>
        </div>
        <div class='Home-body'>
            <h3>Genrate a <Link to = '/superheroes' className = 'Home-link' activeClassName = 'Active-link'>Random Super Hero</Link> Name!</h3>
            <h3>Take a <Link to = '/starwars' className = 'Home-link' activeClassName = 'Active-link'>Random Star Wars</Link> Adventure!</h3>
            <h3>Generate a <Link to = '/hipster_ipsum' className = 'Home-link' activeClassName = 'Active-link'>Random Hipster Ipsum</Link> Sentence!</h3>
            <h3>More content coming soon...!</h3>
        </div>
        <div className="Home-footer">
            <Footer />
        </div>
    </div>
    