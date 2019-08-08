import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStarWarsData, fetchRandomCharacter } from '../redux/actions/starwarsActions'
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

    // fetchNameOnClick=(e) => {
    //     e.preventDefault()
    //     let item = getRandom(this.props.state.superheros)
    //     this.props.fetchRandomName(item.name)
    // }

    // fetchSuffixOnClick=(e) => {
    //     e.preventDefault()
    //     let item = getRandom(this.props.state.superheros)
    //     this.props.fetchRandomSuffix(item.suffix)
    // }

    // fetchPowerOnClick=(e) => {
    //     e.preventDefault()
    //     let item = getRandom(this.props.state.superheros)
    //     this.props.fetchRandomPower(item.power)
    // }


    render() {
        
        return (
            <div className = 'sw-container'>
                <img src="https://www.pixel-creation.com/wp-content/uploads/sw-tfa-desktop-wallpaper-2560x1440-starwars.jpg" alt="starwars background"></img>
                <h1>A Long Time Ago In A Galaxy Far Far Away...Things Got Random!</h1>
                <h2> {this.props.state.character} </h2>
                
                {/* <h2>and {this.props.state.droid} explored {this.props.state.planet} in a {this.props.state.vehicle}</h2> */}
                
                <button onClick={e => this.fetchCharacterOnClick(e)}>Change Character</button>
                {/* <button onClick={e => this.fetchNameOnClick(e)}>Change    Name</button>
                <button onClick={e => this.fetchSuffixOnClick(e)}>Change Suffix</button>
                <button onClick={e => this.fetchPowerOnClick(e)}>Change Power</button> */}
                                
            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state.starwars_data
    }
}

export default connect(mapStateToProps, { fetchStarWarsData, fetchRandomCharacter })(StarWarsContainer)