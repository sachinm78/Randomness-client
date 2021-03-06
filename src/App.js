import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar';
import SuperHeroesContainer from './containers/SuperHerosContainer'
import StarWarsContainer from './containers/StarWarsContainer'
import HipsterIpsumContainer from './containers/HipsterIpsumContainer'
import SmartDevContainer from './containers/SmartDevContainer'
import FeedbackFormContainer from './containers/FeedbackFormContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/superheroes' component={SuperHeroesContainer} />
          <Route path='/starwars' component={StarWarsContainer} />
          <Route path='/hipster_ipsum' component={HipsterIpsumContainer} />
          <Route path='/smart_dev' component={SmartDevContainer} />
          <Route path='/feedback' component={FeedbackFormContainer} />
        </div>        
      </div>
    </Router>
  );
}

export default App;