import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStarWarsData, fetchRandomCharacter, fetchRandomDroid, fetchRandomPlanet, fetchRandomVehicle } from '../redux/actions/starwarsActions'
import { getRandom } from '../components/randomizer'

class StarWarsContainer extends Component {

    state = {
        starwars_data: []
    }

    componentDidMount() {
        this.props.fetchStarWarsData()
        debugger
        
    }

    fetchCharacterOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.starwars_data)
        this.props.fetchRandomCharacter(item.character)
    }

    fetchDroidOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.starwars_data)
        this.props.fetchRandomDroid(item.droid)
    }

    fetchPlanetOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.starwars_data)
        this.props.fetchRandomPlanet(item.planet)
    }

    fetchVehicleOnClick=(e) => {
        e.preventDefault()
        let item = getRandom(this.props.state.starwars_data)
        this.props.fetchRandomVehicle(item.vehicle)
    }


    render() {
        
        return (
            <div className = 'sw-container'>
                <div class = 'sw-header'>
                    <img src="https://www.pixel-creation.com/wp-content/uploads/sw-tfa-desktop-wallpaper-2560x1440-starwars.jpg" alt="starwars background"></img>
                    <h1>A Long Time Ago In A Galaxy Far Far Away...</h1>
                </div>
                <div class = 'sw-body'>
                    <h2>{this.props.state.character} and {this.props.state.droid}</h2>
                    <button onClick={e => this.fetchCharacterOnClick(e)}>Generate Character</button>
                    <button onClick={e => this.fetchDroidOnClick(e)}>Generate Droid</button>
                    <h2>explored {this.props.state.planet} in {this.props.state.vehicle}</h2>
                    <button onClick={e => this.fetchPlanetOnClick(e)}>Generate Planet</button>
                    <button onClick={e => this.fetchVehicleOnClick(e)}>Generate Vehicle</button>
                </div>               
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.starwars_data
    }
}

export default connect(mapStateToProps, { fetchStarWarsData, fetchRandomCharacter, fetchRandomDroid, fetchRandomPlanet, fetchRandomVehicle })(StarWarsContainer)