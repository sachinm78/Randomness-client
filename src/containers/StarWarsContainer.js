import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStarWarsData, fetchRandomCharacter, fetchRandomDroid, fetchRandomPlanet } from '../redux/actions/starwarsActions'
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

    // fetchPowerOnClick=(e) => {
    //     e.preventDefault()
    //     let item = getRandom(this.props.state.starwars_data)
    //     this.props.fetchRandomPower(item.power)
    // }


    render() {
        
        return (
            <div className = 'sw-container'>
                <img src="https://www.pixel-creation.com/wp-content/uploads/sw-tfa-desktop-wallpaper-2560x1440-starwars.jpg" alt="starwars background"></img>
                <h1>A Long Time Ago In A Galaxy Far Far Away...</h1>
                <h2>{this.props.state.character} and {this.props.state.droid}</h2>
                <h3>explored</h3>
                <h2>{this.props.state.planet}</h2>
                <h3>in a </h3>
                
                {/* {this.props.state.vehicle} */}
                
                <button onClick={e => this.fetchCharacterOnClick(e)}>Change Character</button>
                <button onClick={e => this.fetchDroidOnClick(e)}>Change Droid</button>
                <button onClick={e => this.fetchPlanetOnClick(e)}>Change Planet</button>
                {/* <button onClick={e => this.fetchPowerOnClick(e)}>Change Power</button> */}
                                
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.starwars_data
    }
}

export default connect(mapStateToProps, { fetchStarWarsData, fetchRandomCharacter, fetchRandomDroid, fetchRandomPlanet })(StarWarsContainer)