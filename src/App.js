import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar';
import SuperHeroesContainer from './containers/SuperHerosContainer'
import StarWarsContainer from './containers/StarWarsContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/superheroes' component={SuperHeroesContainer} />
          <Route path='/starwars' component={StarWarsContainer} />
        </div>        
      </div>
    </Router>
  );
}

export default App;